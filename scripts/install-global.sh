#!/usr/bin/env bash
# Install the co-write, humanizer, and storyscope skills for every Claude Code project on
# this machine, and add the co-write rule to ~/.claude/CLAUDE.md.
#
# From a checkout:  scripts/install-global.sh
# From anywhere:    curl -fsSL https://raw.githubusercontent.com/pambianchipm/personal-projects/main/scripts/install-global.sh | bash
#
# Safe to rerun. It replaces only these three skill folders and only the marked block in
# ~/.claude/CLAUDE.md. Set CLAUDE_HOME to install somewhere other than ~/.claude.
set -euo pipefail

skills=(co-write humanizer storyscope)
repo_url="https://github.com/pambianchipm/personal-projects.git"
claude_home="${CLAUDE_HOME:-$HOME/.claude}"
begin="<!-- BEGIN co-write (managed by personal-projects/scripts/install-global.sh) -->"
end="<!-- END co-write -->"

# Use the checkout this script sits in, or clone a fresh copy when piped from curl.
src=""
if [ -n "${BASH_SOURCE[0]:-}" ] && [ -f "${BASH_SOURCE[0]}" ]; then
  candidate="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
  [ -f "$candidate/.claude/skills/co-write/SKILL.md" ] && src="$candidate"
fi
if [ -z "$src" ]; then
  tmp="$(mktemp -d)"
  trap 'rm -rf "$tmp"' EXIT
  git clone --quiet --depth 1 "$repo_url" "$tmp/personal-projects"
  src="$tmp/personal-projects"
fi

mkdir -p "$claude_home/skills"
for skill in "${skills[@]}"; do
  rm -rf "${claude_home:?}/skills/$skill"
  cp -R "$src/.claude/skills/$skill" "$claude_home/skills/$skill"
  echo "installed skill: $claude_home/skills/$skill"
done

# Replace the marked block in CLAUDE.md, or append it if it is not there yet.
claude_md="$claude_home/CLAUDE.md"
touch "$claude_md"
awk -v b="$begin" -v e="$end" '
  $0 == b { skip = 1; next }
  $0 == e { skip = 0; next }
  !skip
' "$claude_md" > "$claude_md.tmp"
# Drop trailing blank lines left where the old block was.
sed -e :a -e '/^\n*$/{$d;N;ba' -e '}' "$claude_md.tmp" > "$claude_md.tmp2"
{
  cat "$claude_md.tmp2"
  [ -s "$claude_md.tmp2" ] && echo
  echo "$begin"
  cat "$src/setup/global-claude-md.md"
  echo "$end"
} > "$claude_md"
rm -f "$claude_md.tmp" "$claude_md.tmp2"
echo "updated: $claude_md"
