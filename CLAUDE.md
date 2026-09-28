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

- `humanizer` is a straight copy of upstream. See `.claude/skills/humanizer/UPSTREAM.md`.
- After editing any skill, run `scripts/package-skills.sh` to rebuild the upload zips in
  `skills-dist/`.
