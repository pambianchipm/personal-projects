import os
from pathlib import Path

DEFAULT_INSTRUCTIONS = (
    "You are a concise, practical assistant. Prioritize clarity, correctness, and "
    "actionable guidance."
)


def _instructions_path() -> Path:
    configured = os.getenv("AGENT_INSTRUCTIONS_PATH")
    if configured:
        return Path(configured)
    return Path(__file__).with_name("agent_instructions.md")


def get_agent_instructions() -> str:
    path = _instructions_path()
    try:
        content = path.read_text(encoding="utf-8").strip()
    except FileNotFoundError:
        return DEFAULT_INSTRUCTIONS
    return content or DEFAULT_INSTRUCTIONS


def build_model_messages(messages: list[dict]) -> list[dict]:
    return [{"role": "system", "content": get_agent_instructions()}, *messages]
