#!/usr/bin/env bash
# Ask Jev (TypeSafe System One) three typed questions about a support ticket
# and print the answers. Needs TYPESAFE_API_KEY in the environment; in a
# Claude Code session, run it through the Jev switch:
#
#   bash <jev skill dir>/scripts/jev exec -- bash jev-examples/ticket_triage.sh "your ticket text"
#
# Writes the raw response to jev-examples/last_response.json.
set -euo pipefail

: "${TYPESAFE_API_KEY:?TYPESAFE_API_KEY is not set (run through jev exec)}"

TICKET="${1:-Hi, I've been trying to connect my Stripe account for 3 days and the integration keeps failing. I'm losing sales. Please help ASAP.}"
OUT="$(dirname "$0")/last_response.json"

BODY="$(TICKET="$TICKET" python3 - <<'PY'
import json, os
print(json.dumps({
    "state": os.environ["TICKET"],
    "model": "jev-latest",
    "questions": {
        "department": {
            "type": "choice",
            "instructions": "Which team should handle this",
            "criteria": {
                "billing": "Payment or subscription issues",
                "technical": "Bugs or integration problems",
                "sales": "Pricing or account questions",
            },
        },
        "frustration": {
            "type": "score",
            "instructions": "How frustrated the customer appears",
            "criteria": [
                "Calm, just stating facts",
                "Frustrated but civil",
                "Very angry, strong language",
            ],
        },
        "is_urgent": {
            "type": "noul",
            "instructions": "The message conveys urgency or time-sensitivity",
        },
    },
}))
PY
)"

curl -sS --fail-with-body -X POST https://api.typesafe.ai/v1/systemone \
  -H "Authorization: Bearer $TYPESAFE_API_KEY" \
  -H "Content-Type: application/json" \
  -d "$BODY" > "$OUT"

python3 - "$OUT" <<'PY'
import json, sys
r = json.load(open(sys.argv[1]))
a = r["answers"]
d, f, u = a["department"], a["frustration"], a["is_urgent"]
print(f"model:       {r['model']}")
print(f"department:  {d['choice']}  (confidence {d['confidence']:.2f}, "
      + ", ".join(f"{k} {v:.2f}" for k, v in d["probabilities"].items()) + ")")
level = str(int(f["score"])) if float(f["score"]).is_integer() else f["score"]
print(f"frustration: {f['score']} = \"{f['legend'].get(level, '?')}\"  (confidence {f['confidence']:.2f})")
print(f"is_urgent:   {u['noul']:.2f} probability of yes")
print(f"usage:       {r['usage']['input_tokens']} input tokens, {r['usage']['output_tokens']} output tokens")
PY
