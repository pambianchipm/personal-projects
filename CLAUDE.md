# personal-projects

## Writing content

Any prose Claude writes or edits with Phin goes through the `co-write` skill
(`.claude/skills/co-write/SKILL.md`). That covers posts, emails, outreach, essays, stories,
scripts, marketing copy, docs meant for people, PR descriptions, and release notes. The skill
runs two editing passes:

- `storyscope` for structure, when the piece tells a story.
- `humanizer` for sentences, always.

Use it even when Phin does not name it. It does not apply to code, or to chat replies that
are not content Phin will use.

## Keeping the skills current

This repo is the source of truth for the three skills. `setup/README.md` explains how they
reach Phin's other machines, cloud sessions, and the Claude app.

- `humanizer` is a straight copy of upstream. See `.claude/skills/humanizer/UPSTREAM.md`.
- After editing any skill, run `scripts/package-skills.sh` to rebuild the upload zips in
  `skills-dist/`.
- The rule that `scripts/install-global.sh` adds to `~/.claude/CLAUDE.md` lives in
  `setup/global-claude-md.md`. Keep it in step with this file.
