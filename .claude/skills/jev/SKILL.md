---
name: jev
description: Turn TypeSafe (Jev) API calls on or off for this session, or show whether they are on and what has been spent. Off by default in every new session.
argument-hint: on [token-budget] | off | status
disable-model-invocation: true
allowed-tools: Bash(bash ${CLAUDE_SKILL_DIR}/scripts/jev:*)
---

!`bash ${CLAUDE_SKILL_DIR}/scripts/jev $ARGUMENTS`

The output above is the result of `/jev $ARGUMENTS`. Tell the user in one or two lines
whether Jev is now on or off and anything the output flags (a missing key, a key under
the old name, a spent budget). Do not print or echo any key.

How TypeSafe calls work for the rest of this session:

- **Off (the default):** make no TypeSafe API calls: no SDK calls, no `curl` to
  `api.typesafe.ai`, no scripts or tests that call it. Reading docs.typesafe.ai is fine.
  If a task needs a live call, say so and suggest `/jev on`.
- **On:** the key is stored as `TYPESAFE_API_KEY_STORED`, which the SDKs do not read.
  Run any command that calls TypeSafe through the switch, which passes the key as
  `TYPESAFE_API_KEY` only while Jev is on and under budget:
  `bash ${CLAUDE_SKILL_DIR}/scripts/jev exec -- <command>`
  After a call, log what it spent from the response's `usage.input_tokens`:
  `bash ${CLAUDE_SKILL_DIR}/scripts/jev record <input_tokens> <label>`
- Code that calls Jev from a long-running process should check the switch itself before
  each call: `bash ${CLAUDE_SKILL_DIR}/scripts/jev allowed` exits 0 when a call may be
  made, or the code can check that `~/.jev/on` exists. Deployed apps don't use this
  switch; they gate Jev with their own environment variable.
