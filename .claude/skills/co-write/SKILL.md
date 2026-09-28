---
name: co-write
description: |
  Default workflow for any prose Phin and Claude write together: posts, emails, outreach,
  newsletters, essays, stories, scripts, speeches, bios, landing and marketing copy, docs
  meant for people, and PR or release notes. Drafts in Phin's voice, runs the storyscope
  structural edit when the piece tells a story, then the humanizer sentence edit, and checks
  that nothing was invented. Use whenever Claude drafts, edits, or rewrites content for Phin,
  even when neither skill is named.
license: MIT
metadata:
  version: "1.0.0"
---

# Co-write: how Phin and Claude produce content

Every piece of prose we produce goes through the same four steps. The two editing passes
come from other skills:

- **storyscope** (`../storyscope/SKILL.md`): the structural edit. It covers what happens, who
  is in it, how feeling is shown, and how the piece ends.
- **humanizer** (`../humanizer/SKILL.md`): the sentence edit. It covers the 26 tells from
  Wikipedia's "Signs of AI writing".

If a skill cannot be loaded by path, load it by name.

## 1. Set up

- **Voice.** Read `voice.md` in this folder. If it has samples, match them: sentence length,
  word choice, punctuation (including dashes if Phin uses them), openings, and humor. If it
  is empty and the piece will go out under Phin's name, ask once for two or three paragraphs
  Phin wrote, and offer to save them to `voice.md`.
- **Reader and purpose.** Know who reads this and what they should do or feel after. If the
  request does not say and it changes the draft, ask one short question. Otherwise pick the
  obvious reader and say which one you assumed.
- **Facts.** Collect the real names, numbers, dates, quotes, and details from Phin before
  drafting. Do not fill gaps with plausible inventions. Fiction is the exception: inventing
  detail is the task.

## 2. Draft

Write for that one reader. Lead with the point. Use Phin's facts. Keep it as short as the
purpose allows.

## 3. Edit in two passes

1. **Structure (storyscope).** Run it when the piece has characters, scenes, or an arc:
   fiction, personal essays, founder or customer stories, anecdote-led posts, speeches. Skip
   it for plain informational text.
2. **Sentences (humanizer).** Always run it, in embedded mode, so it returns only the final
   text.

Then run one final check. Compare the result against Phin's facts and the first draft. Did
any fact, name, number, date, quote, or claim get added or lost? Fix anything that did.

## 4. Deliver

Return the final text, ready to paste. Under it, add one or two lines naming the biggest
changes the edit made and any question that is still open (a missing detail, an assumption
about the reader).

Show the full working (draft, the tells found in each pass, final) only when Phin asks,
for example "show your work" or "what did you change".

## Sizing the work

- **Short** (under about 150 words, like an email, DM, caption, or commit message): skip the
  voice question if `voice.md` is empty, and skip storyscope unless the piece is a story.
  Run the humanizer only.
- **Standard** (posts, articles, landing copy, outreach sequences): all four steps.
- **Long fiction**: all four steps. Offer storyscope's deep scoring once the draft is stable.

## When Phin brings text

- **"Humanize this" / "clean this up":** run the humanizer as its own skill (it shows its
  work by default), plus storyscope if the text is a story.
- **"Is this too AI?" / "review this":** report the tells from both skills, strongest first,
  without rewriting. Offer to rewrite.
- **A file path:** edit only the prose in the file. Leave code, frontmatter, data, and link
  targets alone.
