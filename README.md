# Aiza Webside

Aiza Webside is a project with a **static web frontend** (with AI chat) and a **FastAPI backend** that communicates with an Ollama server for AI responses.

---

## Features

### Frontend
- **Vue 3** + **Vuetify 3** for a modern UI
- **AI Chat Page** with:
  - User messages aligned to the right
  - AI responses aligned to the left
  - Automatic scrolling
  - Dynamic input box with rounded corners
- **Home Page** with:
  - Multi-language support (English/German)
  - Company info, technologies, and contact details
  - Responsive design for mobile and desktop

### Backend
- **FastAPI** with CORS setup for `https://aiza.ch` & `localhost`
- Rate limiting (max. 60 requests per minute per IP)
- `/chat` endpoint calling the Ollama API (`/api/chat`)
- Model and Ollama URL configurable via environment variables:
  ```bash
  OLLAMA_BASE=http://127.0.0.1:11434/api
  MODEL=llama2
  ```

---

## Requirements

- **Node.js** ≥ 20.19 or 22.x  
- **Python** ≥ 3.10  
- **Ollama Server** with OpenAI-compatible API running at `OLLAMA_BASE`

---

## Setup & Start

### 1. Start the Backend
```bash
cd backend
python -m venv venv
source venv/bin/activate
pip install fastapi uvicorn httpx
uvicorn main:app --reload --port 5000
```

The backend will be running at `http://127.0.0.1:5000`.

---

### 2. Start the Frontend
```bash
cd frontend
npm install
npm run dev
```

The frontend will be available at `http://localhost:3000`.

---

## Environment Variables

| Variable        | Description                          | Default                         |
|------------------|--------------------------------------|---------------------------------|
| `OLLAMA_BASE`     | URL to the Ollama server             | `http://127.0.0.1:11434/api`     |
| `MODEL`           | Model name for chat responses        | `llama2`                         |

---

## Routes

| Route        | Description                       |
|---------------|-----------------------------------|
| `/`           | Home page with company info       |
| `/ai`         | AI Chat with Qwendoline           |
| `/chat` (API) | POST endpoint for AI responses    |

---

## Tech Stack

- **Frontend:** Vue 3, Vuetify 3, Vite  
- **Backend:** FastAPI, Python 3  
- **AI:** Ollama with OpenAI-compatible API format  
