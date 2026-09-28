#!/usr/bin/env bash
# Build one zip per skill in .claude/skills/ for upload to Claude.ai or Claude Desktop
# (Settings > Capabilities > Skills > Upload skill). Each zip holds a single folder with
# SKILL.md at its top.
set -euo pipefail
root="$(cd "$(dirname "$0")/.." && pwd)"
out="$root/skills-dist"
mkdir -p "$out"
cd "$root/.claude/skills"
for skill in */; do
  skill="${skill%/}"
  [ -f "$skill/SKILL.md" ] || continue
  rm -f "$out/$skill.zip"
  zip -qrX "$out/$skill.zip" "$skill" -x '*/__pycache__/*' '*.pyc' '*/.DS_Store'
  echo "built skills-dist/$skill.zip"
done
