# Setting up the writing skills everywhere

The `co-write`, `humanizer`, and `storyscope` skills live in `.claude/skills/` in this repo.
Claude Code already uses them in this repo. Each place below needs one setup step.

## Your computer (every Claude Code project)

Run once, and again whenever the skills change:

```bash
curl -fsSL https://raw.githubusercontent.com/pambianchipm/personal-projects/main/scripts/install-global.sh | bash
```

This copies the three skills into `~/.claude/skills/` and adds the co-write rule to
`~/.claude/CLAUDE.md`. Your own content in that file stays as it is.

## Claude Code on the web (every repo)

Open the cloud environment menu in a session's title bar, choose Edit, and add this line to
the Setup script:

```bash
curl -fsSL https://raw.githubusercontent.com/pambianchipm/personal-projects/main/scripts/install-global.sh | bash
```

New sessions in that environment will then pick up the latest skills, whatever repo they
open.

## Claude.ai and the Claude desktop app

1. Download the three zips in `skills-dist/`.
2. In Settings, open Capabilities, then Skills, and upload each zip. Upload `humanizer` and
   `storyscope` before `co-write`, because co-write calls them.
3. In Settings, under Profile, add this to your personal preferences:

   > When I ask for writing (posts, emails, essays, stories, outreach, copy, application
   > essays), use my co-write skill.

After editing a skill, run `scripts/package-skills.sh` and upload the new zip in place of the
old one.

## Your voice

Add two or three paragraphs you wrote to `.claude/skills/co-write/voice.md`, then rerun the
installer and rebuild the zips. This repo is public, so only paste writing you are fine
sharing.
