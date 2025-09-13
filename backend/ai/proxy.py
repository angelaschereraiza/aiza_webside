import os
import json
import logging
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import httpx

logging.basicConfig(level=logging.INFO)

UPSTREAM_BASE = os.getenv("UPSTREAM_BASE", "http://llama:8000")
REQUEST_TIMEOUT = float(os.getenv("REQUEST_TIMEOUT", "600"))
# Verwende lieber den Dateinamen als Default-Model-ID
MODEL_ID = os.getenv("MODEL_ID") or os.getenv("MODEL_FILE", "qwen2.5-coder-7b-instruct-q4_k_m.gguf")

class ChatIn(BaseModel):
    message: str
    max_tokens: int = 256

app = FastAPI()

@app.get("/health")
async def health():
    return {"status": "ok", "upstream": UPSTREAM_BASE, "model": MODEL_ID}

def _parse_chat_json(data: dict):
    # unterstützt sowohl OpenAI- als auch einige llama.cpp-Varianten
    try:
        return data["choices"][0]["message"]["content"]
    except Exception:
        pass
    try:
        return data["choices"][0]["text"]
    except Exception:
        pass
    return None

@app.post("/chat")
async def chat(body: ChatIn):
    timeout = httpx.Timeout(connect=10.0, read=REQUEST_TIMEOUT, write=REQUEST_TIMEOUT, pool=10.0)
    headers = {"Accept": "application/json"}
    async with httpx.AsyncClient(timeout=timeout, headers=headers) as client:
        # 1) Versuch: /v1/chat/completions (ohne Streaming)
        chat_url = f"{UPSTREAM_BASE}/v1/chat/completions"
        chat_payload = {
            "model": MODEL_ID,
            "messages": [{"role": "user", "content": body.message}],
            "max_tokens": body.max_tokens,
            "stream": False,
        }
        try:
            r = await client.post(chat_url, json=chat_payload)
            if r.status_code < 400:
                try:
                    data = r.json()
                except Exception as e:
                    logging.warning("chat/completions JSON decode failed: %s; ctype=%s; preview=%r",
                                    e, r.headers.get("content-type"), r.text[:200])
                else:
                    reply = _parse_chat_json(data)
                    if reply is not None:
                        return {"reply": reply}
            else:
                logging.warning("upstream %s on chat/completions: %s", r.status_code, r.text[:200])
        except httpx.RequestError as e:
            logging.error("RequestError to upstream chat/completions: %s", e)

        # 2) Fallback: /v1/completions (ohne Streaming)
        prompt = (
            "<|im_start|>user\n"
            f"{body.message}\n"
            "<|im_end|>\n"
            "<|im_start|>assistant\n"
        )
        comp_url = f"{UPSTREAM_BASE}/v1/completions"
        comp_payload = {
            "model": MODEL_ID,
            "prompt": prompt,
            "max_tokens": body.max_tokens,
            "stream": False,
        }
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
            reply = _parse_chat_json(data2)
            if reply is None:
                raise KeyError("no choices[0].text or choices[0].message.content")
            return {"reply": reply}
        except Exception as e:
            logging.exception("parse error on /v1/completions response")
            raise HTTPException(status_code=500, detail=f"parse error: {type(e).__name__}: {str(e)[:200]}")
