#!/usr/bin/env bash
# Install the co-write, humanizer, and storyscope skills for every Claude Code project on
# this machine, add the co-write rule to ~/.claude/CLAUDE.md, and install two sets of
# third-party skills: claude-ads and the design skills (both pinned, see setup/README.md).
#
# From a checkout:  scripts/install-global.sh
# From anywhere:    curl -fsSL https://raw.githubusercontent.com/pambianchipm/personal-projects/main/scripts/install-global.sh | bash
#
# Safe to rerun. It replaces only these three skill folders, design skill folders it wrote
# itself, and the marked block in ~/.claude/CLAUDE.md. Set CLAUDE_HOME to install somewhere
# other than ~/.claude. Set CLAUDE_ADS=0 to skip claude-ads, CLAUDE_DESIGN=0 to skip the
# design skills.
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

# Third-party: claude-ads (MIT, github.com/AgriciDaniel/claude-ads). Pinned to the commit
# behind the v2.1.0 tag, and installed with its own installer, which keeps an ownership
# manifest and refuses to overwrite files it did not write. To upgrade, change both lines
# below after reading the new release. A failure here does not undo the skills above.
ads_ref="v2.1.0"
ads_sha="4a74a5a2237caf2bc81091108164fe20e178818c"
if [ "${CLAUDE_ADS:-1}" != "0" ]; then
  ads_tmp="$(mktemp -d)"
  if git clone --quiet --depth 1 --branch "$ads_ref" https://github.com/AgriciDaniel/claude-ads.git "$ads_tmp/claude-ads" \
    && [ "$(git -C "$ads_tmp/claude-ads" rev-parse HEAD)" = "$ads_sha" ]; then
    ads_args=(--target=claude --source=local --repo-dir="$ads_tmp/claude-ads"
              --skill-dir="$claude_home/skills" --agent-dir="$claude_home/agents")
    # The Python helpers (reports, page fetches) need Python 3.11 or 3.12. Without them the
    # skills and agents still install and load.
    py="$(python3 -c 'import sys; print("%d.%d" % sys.version_info[:2])' 2>/dev/null || true)"
    if [ "$py" = "3.11" ] || [ "$py" = "3.12" ]; then
      bash "$ads_tmp/claude-ads/install.sh" "${ads_args[@]}" \
        || bash "$ads_tmp/claude-ads/install.sh" "${ads_args[@]}" --no-deps \
        || echo "claude-ads: install failed; the other skills are installed" >&2
    else
      echo "claude-ads: Python ${py:-not found}, so installing without the Python helpers"
      bash "$ads_tmp/claude-ads/install.sh" "${ads_args[@]}" --no-deps \
        || echo "claude-ads: install failed; the other skills are installed" >&2
    fi
  else
    echo "claude-ads: could not fetch $ads_ref at the pinned commit; skipped" >&2
  fi
  rm -rf "$ads_tmp"
fi

# Third-party: design skills for front-end and site work (all MIT). Each repo is pinned to a
# commit, and only the skill folders named on its line are copied, each with the repo's
# LICENSE. A folder is replaced only if it is missing or this installer wrote it (it carries
# .installed-by-personal-projects), so a skill of the same name from somewhere else is left
# alone. To upgrade, read the new commit's skill files, then change its sha below. Set
# CLAUDE_DESIGN=0 to skip. See the design skills section in setup/README.md.
design_marker=".installed-by-personal-projects"
design_sources=(
  "emilkowalski/skills a81dbca07f2217b7103e510c0f13f8d5b017afc9 skills animate animation-performance animation-vocabulary apple-design break-ui emil-design-eng find-animation-opportunities improve-animations mobile-native pick-ui-library prototype remove-animations review-animations"
  "ConardLi/garden-skills 2b9a89340b70f632d31c0f1c69fce94a7912423e skills web-design-engineer"
  "elayadesign/ai-design-skills ded7efc9d5c02761c41a03caf3b78f9259ab8828 skills landing-page-design"
  "codeswithroh/tastemaker 792a28a820ec4e9159ef8621c21a6c88528bbf2e skills tastemaker"
)
if [ "${CLAUDE_DESIGN:-1}" != "0" ]; then
  design_tmp="$(mktemp -d)"
  for entry in "${design_sources[@]}"; do
    read -r repo sha dir names <<< "$entry"
    checkout="$design_tmp/${repo//\//-}"
    if ! { git init --quiet "$checkout" \
      && git -C "$checkout" fetch --quiet --depth 1 "https://github.com/$repo.git" "$sha" \
      && git -C "$checkout" -c advice.detachedHead=false checkout --quiet FETCH_HEAD; }; then
      echo "design: could not fetch $repo at $sha; skipped" >&2
      continue
    fi
    for name in $names; do
      target="$claude_home/skills/$name"
      if [ -e "$target" ] && [ ! -e "$target/$design_marker" ]; then
        echo "design: $target exists and was not installed by this script; left alone" >&2
        continue
      fi
      if [ ! -f "$checkout/$dir/$name/SKILL.md" ]; then
        echo "design: $name not found in $repo at $sha; skipped" >&2
        continue
      fi
      rm -rf "${target:?}"
      if cp -R "$checkout/$dir/$name" "$target"; then
        [ -f "$target/LICENSE" ] || cp "$checkout/LICENSE" "$target/LICENSE"
        echo "$repo@$sha" > "$target/$design_marker"
        echo "installed skill: $target"
      else
        echo "design: could not copy $name; skipped" >&2
      fi
    done
  done
  rm -rf "$design_tmp"
fi
