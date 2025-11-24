package main

import (
	"bytes"
	"encoding/json"
	"io"
	"log"
	"net/http"
	"time"
)

// Message represents a chat message
type Message struct {
	Role    string   `json:"role"`
	Content string   `json:"content"`
	Images  []string `json:"images,omitempty"`
}

// ChatIn represents the incoming request body
type ChatIn struct {
	Messages  []Message `json:"messages"`
	MaxTokens int       `json:"max_tokens"`
}

func main() {
	http.HandleFunc("/chat", chatHandler)
	http.HandleFunc("/health", healthHandler)

	log.Println("Go LLM Proxy listening on :9000")
	if err := http.ListenAndServe(":9000", nil); err != nil {
		log.Fatal(err)
	}
}

// healthHandler returns a simple health check and model info
func healthHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(map[string]string{
		"status":      "ok",
		"text_model":  "StarCoder-3B",
		"description": "Proxy for StarCoder-3B on local backend",
	})
}

// chatHandler receives chat requests and forwards them to the backend
func chatHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		http.Error(w, "Only POST allowed", http.StatusMethodNotAllowed)
		return
	}

	var body ChatIn
	if err := json.NewDecoder(r.Body).Decode(&body); err != nil {
		http.Error(w, "invalid JSON", http.StatusBadRequest)
		return
	}

	reply, err := callBackend(body)
	if err != nil {
		http.Error(w, "backend error: "+err.Error(), http.StatusBadGateway)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(map[string]string{"reply": reply})
}

// callBackend forwards the request to the Python/C++ LLM backend
func callBackend(body ChatIn) (string, error) {
	url := "http://localhost:8000/v1/chat/completions"

	// Build the payload for the backend
	payload := map[string]interface{}{
		"model":      "StarCoder-3B",
		"messages":   body.Messages,
		"max_tokens": body.MaxTokens,
		"stream":     false,
	}

	data, err := json.Marshal(payload)
	if err != nil {
		return "", err
	}

	client := &http.Client{
		Timeout: 600 * time.Second, // long timeout for LLM inference
	}

	resp, err := client.Post(url, "application/json", bytes.NewReader(data))
	if err != nil {
		return "", err
	}
	defer resp.Body.Close()

	respData, err := io.ReadAll(resp.Body)
	if err != nil {
		return "", err
	}

	// Parse JSON response from backend
	var backendResp map[string]interface{}
	if err := json.Unmarshal(respData, &backendResp); err != nil {
		return "", err
	}

	// Extract the reply from backend JSON
	if choices, ok := backendResp["choices"].([]interface{}); ok && len(choices) > 0 {
		if first, ok := choices[0].(map[string]interface{}); ok {
			if msg, ok := first["message"].(map[string]interface{}); ok {
				if content, ok := msg["content"].(string); ok {
					return content, nil
				}
			}
			if text, ok := first["text"].(string); ok {
				return text, nil
			}
		}
	}

	return "", nil
}
