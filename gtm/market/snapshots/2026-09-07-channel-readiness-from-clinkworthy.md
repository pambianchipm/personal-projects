# PRIMARY · `docs/channel-readiness.md` from the clinkworthy repo, pasted by the chief for G19

**Retrieved 2026-09-07T23:16Z by the chief, from a clone this session holds (the GTM boss's session cannot reach the repo — add_repo denied, clone prompts for credentials; both attempts recorded in its shift-25 close).**

```
$ git show origin/main:docs/channel-readiness.md | wc -c            # 2026-09-07T23:16Z
4052
$ git show origin/main:docs/channel-readiness.md | sha256sum
21abaa4cd0a0e30d5aa30594ecd051d5bd94490a9d5bf72f3fb10a758439afdb
$ git rev-parse origin/main
3e24d43d180825a395a361f5e893c3dcd785f1f3
$ git log origin/main -1 --format='%H %cI' -- docs/channel-readiness.md
5f0de311d89c748a573c062cf859d401e5777740 2026-09-03T19:53:52+00:00
```

**Cite this file's sentences, not the numbers.** The row keys on the sentence; the hash above is what a re-derivation checks. Everything below the rule is the file, byte for byte.

---

# Channel readiness — what we can ACTUALLY do, per platform

Written by the chief 2026-09-03, from the code, at Phin's request: *"we do have
to make sure we 1000% can do everything… mainly across TikTok, Instagram,
Facebook, Meta ads, Google ads."*

**This file exists so copy follows capability and not the reverse.** No
marketing surface may claim a capability this file grades below SHIPPED. It is
read from source, not from memory, and every row names the file.

| Platform | Publish | Read back (metrics) | Engage (comments) | Ads / spend | Grade |
|---|---|---|---|---|---|
| **Instagram** | image, **Reel**, **Story** (`lib/meta.ts:126,164,212`) | `fetchInstagramMetrics:415`, `findInstagramMediaId:400` | fetch `:318`, **reply** `:359` | via Meta ads | **SHIPPED** |
| **Facebook** | post `:281`, video `:255` | `fetchFacebookMetrics:459`, `findFacebookPostId:444` | fetch `:339`, **reply** `:372` | via Meta ads | **SHIPPED** |
| **Meta ads** | — | spend + results | — | `lib/meta-ads.ts`; boost-the-winner, **capped and human-gated** | **SHIPPED** |
| **X** | `lib/x-oauth.ts` + auto-publish path | partial | — | — | **PARTIAL — verify before claiming** |
| **Reddit** | in the `Channel` union; **credentials still on Phin's list** | — | — | — | **BLOCKED on credentials** |
| **TikTok** | **NONE** | **NONE** | **NONE** | **NONE** | **SHELL ONLY** |
| **Google Ads** | **NONE** | **NONE** | — | **NONE** | **LABEL ONLY** |

## The two that matter, stated plainly

**TikTok is a shell.** `lib/channel-data.ts:22` — `export const
SHELL_PLATFORMS = ['tiktok'] as const`. The name is honest: the channel can be
selected and a `tiktok.com` URL is recognised when a post is linked by hand
(`lib/db/published.ts:64`), and that is the whole of it. **No OAuth, no
publish, no metrics, no comments.** Backlog item 12 approved it as a real
channel; CLAUDE.md's roadmap stages it as *export-assist first* — packaged
video plus caption for the owner to post by hand. **Needs: a TikTok developer
app (Phin), then Content Posting API integration.**

**Google Ads is a label.** `lib/types.ts:3` — `export type Channel =
'Instagram' | 'X' | 'Reddit' | 'Facebook' | 'Google Ads'`. It appears in copy
generation and mock data because it is a plannable channel, **not because
anything talks to Google.** No developer token, no OAuth, no campaign creation,
no spend path. This is the largest gap against the platform list and it is the
furthest from shipped: Google Ads requires a **developer token with an API
access level Google reviews and grants**, which is a real approval process, not
a key you generate.

## What this means for the pitch

**Against Phin's five: Instagram ✅, Facebook ✅, Meta ads ✅, TikTok ❌,
Google Ads ❌.** Three of five are genuinely strong — Instagram in particular
goes further than most competitors' "generate and download", covering Reels,
Stories, comment replies and metrics read-back.

**So the honest platform sentence today names Instagram, Facebook and Meta
ads, and says TikTok and Google Ads are coming.** It does not say "every
channel" and it does not list a logo we cannot post to. The completeness claim
the chief struck from the positioning is struck for this reason and not a
stylistic one.

## Phin's blockers, in the order they gate the pitch
1. **Meta App Review** — status unknown to the org. Everything above rests on
   it for any account that is not ours.
2. **TikTok developer app** — nothing can start until it exists.
3. **Google Ads developer token** — the longest lead time on the list.
4. **Reddit credentials** — small, and it unblocks a channel already in the union.

## NOT CHECKED
- **X's depth.** `x-oauth.ts` and an auto-publish path exist; media handling,
  metrics read-back and failure behaviour were not traced. Graded PARTIAL
  rather than SHIPPED for that reason — do not promote it without tracing it.
- Whether Meta App Review has been granted, and for which permissions.
- Rate limits and quota behaviour on any platform under real volume.
