import os
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import httpx
import json

UPSTREAM_BASE = os.getenv("UPSTREAM_BASE", "http://llama:8000")
REQUEST_TIMEOUT = float(os.getenv("REQUEST_TIMEOUT", "600"))
MODEL_ID = os.getenv("MODEL_ID") or f"/models/{os.getenv('MODEL_FILE','qwen2.5-coder-7b-instruct-q4_k_m.gguf')}"

class ChatIn(BaseModel):
    message: str
    max_tokens: int = 256

app = FastAPI()

@app.get("/health")
async def health():
    return {"status": "ok", "upstream": UPSTREAM_BASE, "model": MODEL_ID}

@app.post("/chat")
async def chat(body: ChatIn):
    timeout = httpx.Timeout(connect=10.0, read=REQUEST_TIMEOUT, write=REQUEST_TIMEOUT, pool=10.0)
    async with httpx.AsyncClient(timeout=timeout) as client:
        chat_url = f"{UPSTREAM_BASE}/v1/chat/completions"
        chat_payload = {
            "model": MODEL_ID,
            "messages": [{"role": "user", "content": body.message}],
            "max_tokens": body.max_tokens,
        }
        try:
            r = await client.post(chat_url, json=chat_payload)
            if r.status_code < 400:
                data = r.json()
                try:
                    reply = data["choices"][0]["message"]["content"]
                    return {"reply": reply}
                except Exception:
                    pass
        except httpx.RequestError as e:
            pass

        prompt = (
            "<|im_start|>user\n"
            f"{body.message}\n"
            "<|im_end|>\n"
            "<|im_start|>assistant\n"
        )
        comp_url = f"{UPSTREAM_BASE}/v1/completions"
        comp_payload = {"model": MODEL_ID, "prompt": prompt, "max_tokens": body.max_tokens}
        r2 = await client.post(comp_url, json=comp_payload)

        if r2.status_code >= 400:
            detail = f"upstream {r2.status_code}: "
            try:
                detail += json.dumps(r2.json())
            except Exception:
                detail += r2.text[:400]
            raise HTTPException(status_code=502, detail=detail)

        try:
            data2 = r2.json()
            reply = data2["choices"][0]["text"]
            return {"reply": reply}
        except Exception as e:
            raise HTTPException(status_code=500, detail=f"parse error: {type(e).__name__}: {str(e)[:200]}")
