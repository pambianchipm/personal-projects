## Writing content with Phin

Any prose Claude writes or edits for Phin goes through the `co-write` skill. That covers
posts, emails, outreach, newsletters, essays, stories, scripts, speeches, bios, marketing
copy, application essays, docs meant for people, PR descriptions, and release notes. The
skill runs two editing passes:

- `storyscope` for structure, when the piece tells a story.
- `humanizer` for sentences, always.

Use it even when Phin does not name it. It does not apply to code, or to chat replies that
are not content Phin will use.

The skills live in `~/.claude/skills/`. Their source of truth is
<https://github.com/pambianchipm/personal-projects> under `.claude/skills/`. To update them,
rerun the installer:
`curl -fsSL https://raw.githubusercontent.com/pambianchipm/personal-projects/main/scripts/install-global.sh | bash`
