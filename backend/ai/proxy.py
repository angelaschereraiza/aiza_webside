import os
import json
import logging
from fastapi import FastAPI, HTTPException
from typing import List, Optional
from pydantic import BaseModel
import httpx

logging.basicConfig(level=logging.INFO)

TEXT_UPSTREAM_BASE = os.getenv("TEXT_UPSTREAM_BASE", "http://llama-text:8000")
VISION_UPSTREAM_BASE = os.getenv("VISION_UPSTREAM_BASE", "http://llama-vision:8001")

TEXT_MODEL_ID = (
    os.getenv("TEXT_MODEL_ID")
    or os.getenv("MODEL_ID")
    or os.getenv("MODEL_FILE", "qwen2.5-coder-7b-instruct-q4_k_m.gguf")
)
VISION_MODEL_ID = os.getenv("VISION_MODEL_ID", "Qwen2-VL-2B-Instruct")

REQUEST_TIMEOUT = float(os.getenv("REQUEST_TIMEOUT", "600"))


class Message(BaseModel):
    role: str
    content: str
    images: Optional[List[str]] = None


class ChatIn(BaseModel):
    messages: List[Message]
    max_tokens: int = 256


app = FastAPI()


@app.get("/health")
async def health():
    return {
        "status": "ok",
        "text_upstream": TEXT_UPSTREAM_BASE,
        "vision_upstream": VISION_UPSTREAM_BASE,
        "text_model": TEXT_MODEL_ID,
        "vision_model": VISION_MODEL_ID,
    }


def _parse_chat_json(data: dict) -> Optional[str]:
    try:
        return data["choices"][0]["message"]["content"]
    except Exception:
        pass
    try:
        return data["choices"][0]["text"]
    except Exception:
        pass
    return None


async def _call_text_backend(body: ChatIn) -> str:
    timeout = httpx.Timeout(
        connect=10.0, read=REQUEST_TIMEOUT, write=REQUEST_TIMEOUT, pool=10.0
    )
    headers = {"Accept": "application/json"}

    async with httpx.AsyncClient(timeout=timeout, headers=headers) as client:
        chat_messages = []
        for m in body.messages:
            chat_messages.append({"role": m.role, "content": m.content})

        chat_url = f"{TEXT_UPSTREAM_BASE}/v1/chat/completions"
        chat_payload = {
            "model": TEXT_MODEL_ID,
            "messages": chat_messages,
            "max_tokens": body.max_tokens,
            "stream": False,
        }

        try:
            r = await client.post(chat_url, json=chat_payload)
            if r.status_code < 400:
                try:
                    data = r.json()
                except Exception as e:
                    logging.warning(
                        "text chat/completions JSON decode failed: %s; ctype=%s; preview=%r",
                        e,
                        r.headers.get("content-type"),
                        r.text[:200],
                    )
                else:
                    reply = _parse_chat_json(data)
                    if reply is not None:
                        return reply
            else:
                logging.warning(
                    "text upstream %s on chat/completions: %s",
                    r.status_code,
                    r.text[:200],
                )
        except httpx.RequestError as e:
            logging.error("RequestError to text upstream chat/completions: %s", e)

        prompt = ""
        for m in body.messages:
            prompt += f"<|im_start|>{m.role}\n{m.content}\n<|im_end|>\n"
        prompt += "<|im_start|>assistant\n"

        comp_url = f"{TEXT_UPSTREAM_BASE}/v1/completions"
        comp_payload = {
            "model": TEXT_MODEL_ID,
            "prompt": prompt,
            "max_tokens": body.max_tokens,
            "stream": False,
        }

        r2 = await client.post(comp_url, json=comp_payload)
        if r2.status_code >= 400:
            detail = f"text upstream {r2.status_code}: "
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
            return reply
        except Exception as e:
            logging.exception("parse error on text /v1/completions response")
            raise HTTPException(
                status_code=500,
                detail=f"text parse error: {type(e).__name__}: {str(e)[:200]}",
            )


async def _call_vision_backend(body: ChatIn) -> str:
    timeout = httpx.Timeout(connect=10.0, read=REQUEST_TIMEOUT, write=REQUEST_TIMEOUT, pool=10.0)
    headers = {"Accept": "application/json"}

    async with httpx.AsyncClient(timeout=timeout, headers=headers) as client:
        chat_messages = []
        images_flat = []

        for m in body.messages:
            chat_messages.append({"role": m.role, "content": m.content})
            if m.images:
                for img in m.images:
                    if img.startswith("data:"):
                        try:
                            _, b64 = img.split(",", 1)
                        except ValueError:
                            b64 = img
                        images_flat.append(b64)
                    else:
                        images_flat.append(img)

        chat_url = f"{VISION_UPSTREAM_BASE}/v1/chat/completions"

        chat_payload = {
            "model": VISION_MODEL_ID,
            "messages": chat_messages,
            "max_tokens": body.max_tokens,
            "stream": False,
        }

        if images_flat:
            chat_payload["images"] = images_flat

        r = await client.post(chat_url, json=chat_payload)
        if r.status_code >= 400:
            try:
                detail = json.dumps(r.json())
            except Exception:
                detail = r.text[:400]
            raise HTTPException(status_code=502, detail=f"vision upstream {r.status_code}: {detail}")

        try:
            data = r.json()
        except Exception:
            raise HTTPException(status_code=500, detail="invalid JSON from vision backend")

        reply = _parse_chat_json(data)
        if reply is None:
            raise HTTPException(status_code=500, detail="vision backend returned no content")

        return reply

@app.post("/chat")
async def chat(body: ChatIn):
    has_images = any(m.images for m in body.messages)

    if has_images:
        logging.info("routing request to VISION backend")
        reply = await _call_vision_backend(body)
    else:
        logging.info("routing request to TEXT backend")
        reply = await _call_text_backend(body)

    return {"reply": reply}
