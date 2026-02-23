import os
import requests

API_URL = "https://api.openai.com/v1/chat/completions"


def chat_completion(messages: list[dict], model: str = "gpt-3.5-turbo") -> str:
    api_key = os.getenv("OPENAI_API_KEY")
    if not api_key:
        raise RuntimeError("OPENAI_API_KEY environment variable not set")
    payload = {"model": model, "messages": messages}
    headers = {"Authorization": f"Bearer {api_key}", "Content-Type": "application/json"}
    resp = requests.post(API_URL, json=payload, headers=headers, timeout=60)
    resp.raise_for_status()
    return resp.json()["choices"][0]["message"]["content"]
