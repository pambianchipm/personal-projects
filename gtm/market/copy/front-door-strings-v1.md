# Front door — THE STRINGS

STATUS: **GATE-FAILED (round 1) → ROUND-1 EDITS APPLIED, NOT RE-VERIFIED.**
Both gates FAILED it. Nothing here is GATED and nothing may cascade.
OWNER: GTM boss · shift 17, 2026-09-04
BRIEF: the chief's ruling, `gtm/org/inbox.md` 2026-09-04 — *"The copy — Hero A,
§3.1's waitlist block, the section headers, §5's safety band — goes into a file
that contains strings and their receipts and nothing else."*
SOURCE OF THE STRINGS: `gtm/market/copy/front-door-overhaul-v1.md` §§2–5.
THE RECORD, ungated, not shipped: `front-door-overhaul-v1.md` (reasoning,
corrections, retro) and `front-door-overhaul-receipts.md` (R1–R11 + ledgers).
GATES, round 1: **fresh verifier** — FAIL, 8 MUST-FIX, 8 SHOULD-FIX;
**skeptical SMB owner** — FAIL, 5 MUST-FIX, 9 SHOULD-FIX. Verdicts verbatim:
`gtm/org/reviews/2026-09-04-shift17-front-door-strings-r1-fresh-verifier.md`,
`gtm/org/reviews/2026-09-04-shift17-front-door-strings-r1-smb-owner.md`.
Disposition, including every declined remedy:
`gtm/org/reviews/2026-09-04-shift17-front-door-strings-r1-disposition.md`.
DOES NOT SUPERSEDE: `gtm/market/copy/waitlist-front-door.md` (PHIN-APPROVED).
RULED: Phin, 2026-09-04 — *"yeah A is def the move."*

**EVERY RECEIPT IN THIS FILE IS A FILE AND A LINE NUMBER**, read at
`pambianchipm/clinkworthy` **`9b5b484`** (main, 2026-09-04T02:30Z), except where
the file is named as living in `pambianchipm/personal-projects`. Line numbers in
`front-door-overhaul-receipts.md` R1–R11 were read at `ebac7d1` and are not the
numbers below.

**THE HERO IS NOT THIS ORG'S TO CHANGE.** `waitlist-front-door.md:74-76`
(personal-projects): *"The hero is canon and locked. `content.ts:82` carries
'Canon (spec §4.2). Do not rewrite.' Changing the hero is a **spec change for
the build org**, not a copy edit."* §1 below is a **spec-change request routed
to the build org through the chief**, not a copy edit this org may make. The
same is true of the safety band in §4, which retires a test-asserted canon line.

**First breath (law 5):** Player2 is an AI marketing employee for a small
business.

---

## 1. HERO

| Slot | String |
|---|---|
| Kicker | `YOUR NEXT HIRE` |
| H1 | `Come hire Player2.` |
| Sub | `Your marketing employee. It writes the week's posts, publishes them to Instagram and Facebook, runs your Meta ads, and tells you which ones moved units.` |
| Primary CTA | `Start with a free scan` |
| Secondary CTA | `Watch it work a week` |

**Replaces**

| Live string | Where |
|---|---|
| `'Marketing that runs'` | `console/app/landing/content.ts:85` |
| `'while you run the shop.'` | `console/app/landing/content.ts:86` |
| `sub: 'Player2 plans, writes, and optimizes campaigns in real time. You approve. It ships.'` | `console/app/landing/content.ts:87` |
| `<div>Marketing that runs</div>` / `<div>while you run the shop.</div>` | `console/app/landing/opengraph-image.tsx:90`, `:91` |
| `assert.equal(HERO.titleTop, …)` / `assert.equal(HERO.titleBottom, …)` | `console/lib/__tests__/landing-content.test.ts:76`, `:77` |
| `/** Canon (spec §4.2). Do not rewrite. …` | `console/app/landing/content.ts:84` |
| `t.includes('Marketing that runs while you run the shop')` | `docs/design/redesign-2026-09/screenshots/marketing/render.mjs:88` |

**Receipts, clause by clause**

| Clause | Receipt |
|---|---|
| "publishes them to Instagram and Facebook" | `docs/channel-readiness.md:13` (Instagram **SHIPPED**), `:14` (Facebook **SHIPPED**) |
| "runs your Meta ads" | `docs/channel-readiness.md:15` (Meta ads **SHIPPED**) — a **platform** grade. The **entitlement** is `console/lib/tier.ts:46`: `entry` holds `['calendar','caption_advice','research','analytics','generate']` and **not** `ads`; `:53` puts `ads` and `arm_auto_publish` in `os`. See OPEN 3 |
| "tells you which ones moved units" — the engagement half | `console/lib/meta.ts:420-425` (Instagram `like_count`, `comments_count`), `:467-472` (Facebook likes, comments, shares) |
| "tells you which ones moved units" — the revenue half, **CONDITIONAL** | `console/lib/claims-pure.ts:388` (*"At least $X traced this month — walk-ins not counted."*), `:389` (*"No conversions tagged to this channel this month — log sales to trace revenue."*) |
| "moved units" is live copy, not new | `console/app/landing/content.ts:156`; the adjacent live form at `:122` |
| "Start with a free scan" | `console/app/landing/content.ts:103-104` (`HERO.freeNote`); the scan submit is `disabled` until a URL **and** an email are typed — `console/app/scan/page.tsx:337` |
| "Watch it work a week" | `console/app/tour/page.tsx:162` (*"Watch one week go out."*), `:10` (*"one week of Player2"*) |

**DISCLOSED DEVIATION from §6.2's licensed platform sentence.**
`position-v2-the-hire.md` §6.2 may-say column licenses *"Posts, replies and
runs ads on Instagram and Facebook **today**. TikTok and Google Ads are
coming."* The Sub drops **"today"** and drops the second sentence. Neither
omission is a claim; the record shows the omission rather than implying the
sentence was licensed as written.

**OPEN 1 — THE HERO SAYS THE DOOR IS OPEN AND IT IS NOT. BOTH GATES FAILED IT
INDEPENDENTLY, AND THE BOSS'S OWN PROPOSED FIX WAS FOUND DEFECTIVE.**
- The ban: `position-v2-the-hire.md` §6.2 PROHIBITED — *"anything implying the
  employee is available today."*
- **The boss's standing recommendation from shift 16, `YOUR NEXT HIRE ·
  JOINING SOON`, is WITHDRAWN.** Both gates killed it for the same reason and
  neither was told the other's finding: *"soon" is a timeframe*, against
  `waitlist-front-door.md:26` — *"No date, because we don't have one."*
- **The verifier's replacement, TAKEN as the recommendation, not applied:**
  `YOUR NEXT HIRE · NOT BUILT YET`, built from the PHIN-APPROVED words at
  `waitlist-front-door.md:22` (*"The employee isn't built yet."*).
- The SMB owner's independently-proposed replacement: `YOUR NEXT HIRE · STILL
  BEING BUILT`, with the same argument against "soon".
- **Phin's. It is his ruled line.**

**OPEN 2 — "moved units" is stated flat; the product states it conditionally**
(`claims-pure.ts:388-389`). The SMB owner's proposed replacement, recorded
because it is his sentence to rule on: *"…and tells you which ones people
reacted to — and which ones sold, if you log your sales."* **Phin's.**

**OPEN 3 — WHICH TIER IS THE HERO DESCRIBING?** *"Runs your Meta ads"* is an
`os` entitlement (`tier.ts:46`, `:53`), and the live price string beneath it
quotes the **entry** number (`content.ts:225`). **The chief's.**

---

## 2. THE WAITLIST BLOCK

| Slot | String |
|---|---|
| Kicker | `THE EMPLOYEE` |
| H2 | `Come hire it before it's built.` |
| Sub | `Your Player2 will message you in the chat apps you already use — "the reel from Saturday is still going. Want one more like it this week?" — and it will post when you reply. It'll write the week, publish to Instagram and Facebook, run your Meta ads, and answer the comments underneath them. And when it can trace a sale back to a post, it'll tell you which post. When it can't, it'll tell you that too. No app to open.` |
| Form field 1 | `Your email` |
| Form field 2 label | `What do you sell, and how do you post today?` |
| Form field 2 placeholder | `Neighborhood bakery — my daughter posts when she remembers.` |
| CTA | `Get in line` |
| Under the CTA | `You're on the list. We'll invite you when there's room for your kind of shop.` |
| Under the form, small type | `The employee isn't built yet. We're not taking money for it. No date, because we don't have one.` |

**Replaces — these are LIVE strings, not spec.** Item 22 merged: the waitlist
section renders at `console/app/landing/page.tsx:192` (`<section
id="waitlist">`), with the H2 at `:195` and the form at `:205`.

| Live string | Where |
|---|---|
| `kicker: 'EARLY ACCESS'` | `console/app/landing/content.ts:217` |
| `title: 'Join the waitlist for early access.'` | `console/app/landing/content.ts:218` |
| `sub: 'Player2 is in alpha and we're letting shops in a few at a time. …'` | `console/app/landing/content.ts:219` |
| `price: 'Founding rate from $59/mo when you're invited.'` | `console/app/landing/content.ts:225` |
| `priceNote: 'Nothing to pay to join.'` | `console/app/landing/content.ts:226` |
| `cta: 'Join the waitlist'` | `console/app/landing/content.ts:233` |

**Carried unchanged from live code, not rewritten:** the two form strings are
`answerLabel` (`content.ts:231`) and `answerPlaceholder` (`content.ts:232`)
verbatim. **The `Under the CTA` line is the shipped confirmation string
verbatim** — `content.ts:247` — moved, not written here.

**Receipts, clause by clause**

| Clause | Receipt |
|---|---|
| "message you in the chat apps you already use" | **PHIN-APPROVED verbatim** — `waitlist-front-door.md:23` (personal-projects) |
| "it will post when you reply" | **PHIN-APPROVED** — same file, `:24` (*"post when you reply"*, governed by *"will"* at `:23`) |
| **"the reel from Saturday is still going. Want one more like it this week?"** | **NO RECEIPT. `UNTESTED` and ILLUSTRATIVE.** It is a sentence written in this org depicting a channel that does not exist. The read-back half rests on `console/lib/meta.ts:420-425`, `:467-472`; the message-arrival half rests on nothing that ships. **It is a picture of the promise, not a promise** — see DECLINED 1 |
| "write the week" (no count) | `console/lib/grok.ts:587` — *"4 distinct content-batch briefs for this week"* |
| "publish to Instagram and Facebook" | `docs/channel-readiness.md:13`, `:14` |
| "run your Meta ads" | `docs/channel-readiness.md:15`; entitlement `console/lib/tier.ts:46`, `:53` — see OPEN 3 |
| "answer the comments underneath them" | `console/lib/meta.ts:359` (`replyToInstagramComment`), `:372` (`replyToFacebookComment`); graded in `docs/channel-readiness.md:13`, `:14` |
| "when it can trace a sale back to a post… when it can't, it'll tell you that too" | `console/lib/claims-pure.ts:388`, `:389` |
| "You're on the list. We'll invite you when there's room for your kind of shop." | `console/app/landing/content.ts:247` — shipped; the comment above it, `:238-246`, is the build org's note on why it says *invite* and not *email* |
| "The employee isn't built yet." | **PHIN-APPROVED verbatim** — `waitlist-front-door.md:22` |
| "We're not taking money for it." | **PHIN-APPROVED verbatim** — `waitlist-front-door.md:24` |
| "No date, because we don't have one." | **PHIN-APPROVED verbatim** — `waitlist-front-door.md:26` |
| "No app to open." | Phin, in chat, 2026-09-03 |

**The approved block is five clauses. Three are printed above. Two are not:**

| Approved clause | Where | Disposition |
|---|---|---|
| *"ask what actually sold"* | `waitlist-front-door.md:23-24` | Present in the sub as *"when it can trace a sale back to a post, it'll tell you which post"* — the branch at `claims-pure.ts:388-389` |
| *"Join the waitlist and we'll come to you when it's ready."* | `waitlist-front-door.md:25` | **HELD, not deleted.** This file's header says it does not supersede a PHIN-APPROVED artifact, and striking an approved clause on this file's own authority would be superseding it. The reason it is not printed: the route that receives this form says in its own header, `console/app/api/waitlist/route.ts:31-34`, *"Nothing here sends email. That is the standing rule…"*. **The chief's to confirm.** |

**OPEN 4 — "Come hire it before it's built" reads to the SMB gate as a
RESERVATION.** Verbatim: *"I get in early, I'm ahead of other shops, and when
it's ready I'm near the front… Do I think I've reserved one? Yes, that's
exactly what I think."* That is the family of promise `waitlist-front-door.md:40`
struck (*"you'll be first, at a founding rate"*). **`UNTESTED`: how any real
owner reads it. Zero owners have read it** — `waitlist-front-door.md:71-73`.

**FALLBACK, if the reservation reading is judged unacceptable:**
`Get in line for your Player2.`

---

## 3. SECTION HEADERS

| Slot | Live string | Where | **New string** |
|---|---|---|---|
| Proof strip | `Built for shops that cannot hire a 5-person marketing team.` | `content.ts:107` | `Three posts in your voice, before you pay anything. No card — your website and an email.` |
| Platform kicker | `THE PLATFORM` | `content.ts:110` | `THE JOB` |
| Platform title | `The marketing runtime for the shop.` | `content.ts:111` | `It writes. It posts. It runs the ads. It tells you what worked.` |
| How kicker | `HOW IT WORKS` | `content.ts:134` | `A WEEK, START TO FINISH` |
| How title | `From a goal to a live campaign.` | `content.ts:135` | `You say one sentence. It brings back a week.` |
| Built-for kicker | `BUILT FOR` | `content.ts:162` | `WHO IT WORKS FOR` |
| Built-for title | `Shops that cannot hire a five-person team.` | `content.ts:163` | `Who's writing your posts at 11pm?` |
| Meta / OG title | `Player2 — marketing that runs while you run the shop` | `content.ts:275`; OG `alt` `opengraph-image.tsx:12` | `Player2 — the AI marketing employee for your shop` |
| Meta description | `Player2 plans, writes, and optimizes campaigns for small businesses. Nothing posts or spends without your click. Start with a free scan of your site.` | `content.ts:277` | `Player2 — an AI marketing employee for your shop. The employee isn't built yet: get in line. Writes the week's posts, publishes to Instagram and Facebook.` |
| Footer tagline | `Player2 · the marketing OS with an operator · by P2 Labs` | `console/app/scan/page.tsx:681` **and** `console/app/scan/welcome/page.tsx:194` | `Player2 · P2 Labs · your marketing employee` |
| Closing CTA | `See your business the way our system does.` | `console/app/scan/page.tsx:302` | `Let it read your public pages and write you three posts. Then decide.` |

**Receipts**

| String | Receipt |
|---|---|
| `Three posts in your voice, before you pay anything. No card — your website and an email.` | `console/app/landing/content.ts:103-104` (*"we read your public pages and write three posts in your voice, before you pay anything. No card."*); the email requirement is `console/app/scan/page.tsx:337` — `disabled={!url.trim() \|\| !email.trim()}` |
| `It writes. It posts. It runs the ads. It tells you what worked.` | writes `console/lib/grok.ts:587`; posts `docs/channel-readiness.md:13`, `:14`; ads `:15` + entitlement `console/lib/tier.ts:46`, `:53`; *"what worked"* `console/lib/meta.ts:420-425`, `:467-472` |
| `You say one sentence. It brings back a week.` | `console/lib/grok.ts:587` (*"4 distinct content-batch briefs for this week"*). **No count is stated**; three artifacts attach three different numbers to "a week" — `front-door-overhaul-receipts.md` R6 holds that ledger |
| `Who's writing your posts at 11pm?` | **No receipt, and it presupposes two things about the reader**: that nobody is writing their posts, and that they post at 11pm. **`UNTESTED`.** The SMB gate's reaction, which is a persona's and not an owner's: *"That's me. That's the only line here written by someone who has met me."* |
| `Player2 — the AI marketing employee for your shop` | `gtm/market/position-v2-the-hire.md:227` (§1.6). **That artifact's own STATUS is GATE-FAILED and uncascadable**; this is the weakest receipt in the file |
| Meta description length | measured with `len()`: **154 characters**; *"get in line."* closes at **character 92**. **NOT CHECKED: the width a search result actually renders.** The "~155 characters" figure earlier versions leaned on had no source and is withdrawn |
| Meta description scope | *"The employee isn't built yet"* rather than *"Not built yet"* — the scan and the entry tier are built (`content.ts:56`, `ENTRY_AVAILABLE = true`), and the unbuilt thing is the employee. See OPEN 5 for what `ENTRY_AVAILABLE` does and does not mean |
| Meta description carries **no** approval claim | the approval claim is §4 — see the count in §4 |
| `Let it read your public pages and write you three posts. Then decide.` | `console/app/landing/content.ts:103-104` (*"we read your public pages"*) |
| `Player2 · P2 Labs · your marketing employee` | **the ruled string byte-for-byte** — `docs/design/redesign-2026-09/MARKETING.md:133`, *"Footer tagline (FRAME; ruled)"*. `:152`'s override covers *"COPY v2's pricing block and every self-serve CTA"* and not this row. **The live string at both `scan/page.tsx:681` and `scan/welcome/page.tsx:194` is the old one** |

**OPEN 6 — the hero sub and the Platform title carry the same four verbs in the
same order, twice on one page.** Which one shortens is a layout decision against
the moving hero. **The two gates split**: the boss recommends shortening the
hero sub; the SMB owner recommends cutting the Platform title and letting the
hero carry it. **The chief's.**

---

## 4. THE SAFETY BAND — one band, one place on the page

> **You choose how each post goes out: click it live yourself, or switch it on
> once and let it go out on its own. Ads are different — nothing spends until
> you click the button that shows you the budget, campaign by campaign.**

**Replaces**

| Live string | Where |
|---|---|
| `PRINCIPLE = 'Nothing spends or posts without your click.'` | `console/app/landing/content.ts:184` |
| `assert.equal(PRINCIPLE, …)` | `console/lib/__tests__/landing-content.test.ts:78` |
| `assert.match(PRINCIPLE, /without your click/i)` | `console/lib/__tests__/landing-content.test.ts:378` |
| `lede: 'Nothing posts or spends without your click.'` | `console/app/landing/content.ts:112` |
| `'You click. Then it ships. Nothing posts or spends before that.'` | `console/app/landing/content.ts:151` |
| `'Nothing posts or spends without your click.'` (inside `META.description`) | `console/app/landing/content.ts:277` |
| `'…You approve from your phone. It ships.'` | `console/app/landing/content.ts:167` |
| `'…You tap approve between chairs. Nothing goes out until you say so.'` | `console/app/landing/content.ts:178` |

**THE COUNT, WITH ITS INSTRUMENT.**
`grep -n "You approve\|It ships\|until you say so\|without your click\|before that"`
over `console/app/landing/content.ts` returns **`:87`, `:112`, `:151`, `:167`,
`:178`, `:184`, `:277`** — seven live unqualified approval claims. `:87` is
retired in §1; the other six are the rows above. **The instrument's blind spot:
it matches six phrasings typed by hand and scans one file — an approval claim
worded differently, or living in a component, the tour, or `/scan`, is not in
that output and has not been enumerated.**

**Receipts, clause by clause**

| Clause | Receipt |
|---|---|
| "click it live yourself" — and that both modes are the same pipeline | `console/lib/auto-publish.ts:2-5` — *"scheduled slots that are due … AND that Phin explicitly approved via the Calendar's Auto-post toggle. **Approval-in-advance replaces click-at-post-time**: the conductor can never flip `auto_post`, only Phin's UI can. Uses the **exact same publish + record pipeline as the manual buttons**."* The manual buttons are the click-it-live path |
| "or switch it on once and let it go out on its own" | `console/lib/tier.ts:107` — the capability's own client-facing label, *"posting on a schedule without a click"*; `console/lib/db/scheduled.ts:83` — `requireCapability(workspaceId, 'arm_auto_publish')`; the toggle is owner-only per `auto-publish.ts:3-4` |
| the scheduled runner has no spend path | `console/lib/auto-publish.ts` — `grep -nEi "ads\|spend\|budget\|boost"` over the whole file returns nothing |
| `ads` is a separate capability from scheduled posting | `console/lib/tier.ts:109` (`ads`) vs `:107` (`arm_auto_publish`) |
| "Ads are different — nothing spends until you click" | `console/app/api/ads/launch/route.ts:11-14` — *"HARD HUMAN GATE … Requires confirm:true from the Ads-page button that displayed the budget. The conductor's draft_ad_campaign tool has no path here."*; `:21-23` refuses without it |
| "the button that shows you the budget" | `console/app/api/ads/launch/route.ts:13`; caps re-validated at the gate, `:36-41` — lifetime **$5–$500**, run length **1–30 days**, *"never trust the stored row alone"* |
| "campaign by campaign" | `console/app/api/ads/launch/route.ts:26` (`getActiveWorkspace()`), `:30-31` (the draft must belong to that workspace) |
| whose money | `console/lib/meta-ads.ts:7`, `:327` — the workspace's own ad account |
| no banned word | `console/lib/__tests__/design-system.test.ts:685` — `BANNED_WORDS = ['conductor','arming','red-teamed','standing watches','api tier','sweep']`. The band contains none of them. **`slots` is NOT in that list** — the objection to `slots` came from the SMB gate by ear, not from the test suite, and an earlier version of this row said otherwise |
| no time claim | the band states none. `console/lib/brand-config.ts:26` supplies `DEFAULT_POST_HOURS` as a **default**, merged at `:105`; `console/lib/agent.ts:74` collects owner hours *"if discussed"* |

**§6.2's TWO ROWS THIS BAND HAS TO CLEAR, both named:**
1. *"The same claim **without** the armed-in-advance qualifier"* — PROHIBITED.
   **The band makes no unqualified approval claim of any kind.** It states the
   two modes as the reader's choice, so nothing is asserted and then taken back.
2. *"'Runs your Meta ads' paired with 'armed in advance' — NOT SAYABLE as a
   pair"*, because the account-level standing ceiling is RULED and UNBUILT
   (`position-v2` §3.2). **The band breaks the pair in the copy itself**: the
   advance mode is stated of posts, and the ads sentence says spend waits for a
   click every campaign. The per-campaign cap is `route.ts:36-41`; the
   account-level ceiling remains unbuilt and no string here implies it.

**DEVIATION, in the open.** §6.2 mandates the qualifier *"armed in advance for
the slots you choose."* This band uses neither `arming` (banned by
`design-system.test.ts:685`) nor `slots`, and states no time claim. **§6.2 is a
gated artifact this org may not edit. The chief's to rule on.**

**OPEN 7 — the advance mode is an `os` entitlement.** `console/lib/tier.ts:79`:
*"`arm_auto_publish` gates arming, so an entry tenant cannot arm."* `:46` shows
`entry` without it. **A band on a page whose live price string quotes entry
describes a capability that tier does not buy. The chief's.**

**OPEN 8 — `MARKETING.md:45` sells autopilot on the same property.**
*"Autopilot: posts that pass your rules go out on your schedule, no click
needed"* — against `PRINCIPLE` at `content.ts:184`. That file's own note,
`:47`: *"If autopilot posts without a click, the 'nothing posts' promise
elsewhere must soften to 'nothing spends'."* **This band is that softening.**
Whether `PRINCIPLE` itself is retired is a spec change touching a canon line
and a test (`landing-content.test.ts:78`, `:378`), and is not this org's.

---

## 5. WHAT THESE STRINGS DO NOT COVER

- No channel beyond Instagram, Facebook and Meta ads is named in any string
  above. The two channels `position-v2` §6.2 bars from copy **by name** are
  graded at `docs/channel-readiness.md:16` and `:17`; TikTok is `:18` (SHELL
  ONLY) and Google Ads `:19` (LABEL ONLY). `docs/design/redesign-2026-09/MARKETING.md:44`
  names four channels as Entry features; **these strings name two.**
- No count, no date, no number of shops, no comparison to a competitor.
- No claim about how often the employee messages you, and none about what
  happens if you do not reply.
- **No price.** `content.ts:225` and `:226` are the live price strings this file
  replaces with nothing. See OPEN 5.
- **No refund.** §6.2 lists *"A 30-day full refund, on request"* as sayable and
  `position-v2` §2.5 argues it belongs near the price. The strings carry
  neither. **The chief's, and the verifier is right that a burned owner is
  handed nothing.**

**OPEN 5 — `ENTRY_AVAILABLE = true` DOES NOT MEAN ANYTHING CAN BE BOUGHT
TODAY.** `console/lib/waitlist-gate.ts:32-35` — `waitlistOnly()` returns `true`
when `WAITLIST_ONLY` is absent; the header at `:12` reads *"DEFAULT ON. An
absent variable means GATED."* `console/app/api/scan/checkout/route.ts:37-38`
returns 403 `WAITLIST_REFUSAL` before anything else runs, and
`console/app/landing/page.tsx:190` states it: *"the door is closed at the
route, not at the button."* **NOT CHECKED: what `WAITLIST_ONLY` is set to in
production.** This org cannot read that environment. **Until someone reads it,
`waitlist-front-door.md:51`'s constraint 3 — *"The entry tier is LIVE
today"* — is a statement about a flag in `content.ts`, not about whether a
stranger with a card can pay. For Phin.**

## 6. NOT CHECKED

- **No owner has read any of these strings.** Every claim about how they land
  is `UNTESTED` — including both gates' proposed replacements, which no owner
  has read either.
- `npm test` was not executed by this org or by either gate. The clone has no
  dependencies installed. `console/lib/__tests__/landing-content.test.ts:73-86`
  asserts the hero, `PRINCIPLE` and `WAITLIST.closer`; `:62-71` runs
  `slopCheck` over the prose list. **Nobody has run either against the new
  strings.**
- The width a search result renders. §3's truncation row states a measured
  character count and a measured position and rests on no assumed width.
- Whether `/tour` contains six discrete scenes. `console/app/tour/page.tsx:162`
  and `:10` were read; `tour-engine.tsx` was not.
- Which chat app the employee will use. `waitlist-front-door.md:37-39` bars
  naming one — *"where you already text"* is iMessage by paraphrase and was
  struck. The SMB gate asked for a name; there is none to give.
- Reddit's grade. `docs/channel-readiness.md:17` says BLOCKED-on-credentials;
  `position-v2` §6.2 says NOT CHECKED. **Two gated artifacts disagree and this
  file does not adjudicate them.**
- Where each string sits on the page. This file approves words, not layout.
- The line numbers above were read at `9b5b484`. They drift.

## 7. REMEDIES DECLINED

**DECLINED 1 — dropping the illustrative quotation** (*"the reel from Saturday
is still going…"*), verifier MUST-FIX 8. It has no receipt and the verdict is
right that it depicts an unbuilt channel. **It is kept, labelled `UNTESTED` and
ILLUSTRATIVE in the receipt table**, because the waitlist frame licenses the
future tense and a picture is what the panel is for. **The alternative the
verdict offered — receipt it and mark it — is what was taken. The chief may
still strike it.**

**DECLINED 2 — the SMB owner's proposed safety band**, MUST-FIX 4. His version
opens *"Nothing posts and nothing spends without your click."* as a standalone
sentence. **That is the unqualified form `position-v2` §6.2 bars, and it is
`PRINCIPLE` (`content.ts:184`) in different words** — the exact defect this
copy exists to retire. His second sentence, *"approve a batch up front"*, also
describes a mechanism that is not in the code: arming is per-slot
(`console/lib/db/scheduled.ts:83`, `console/lib/tier.ts:107`), not a batch
approval. **His FINDING is taken in full** — he could not parse the previous
band on one reading, and the clause he named is gone. **The band was rebuilt so
that the choice comes first and nothing is taken back.**

**DECLINED 3 — the SMB owner's "We'll open invites here — check back"**,
MUST-FIX 3. It asserts that invites open on the site, which nothing in the code
establishes. **His FINDING is taken in full** — the form asked for an email and
answered nothing. **The shipped confirmation string is used instead**
(`content.ts:247`), which promises an invite without naming a channel.

**DECLINED 4 — shipping a price**, SMB MUST-FIX 5. The live string
(`content.ts:225`) is barred twice by §6.2 (*"founding rate"* applied to $59;
*"from $59"*), and OPEN 5 records that the checkout route refuses by default.
**His FINDING stands and is raised to Phin rather than answered here.**

**DECLINED 5 — naming the chat app**, SMB SHOULD-FIX 2. Barred at
`waitlist-front-door.md:37-39`.

**DECLINED 6 — "Instagram and Facebook today. Nothing else yet."**, SMB
SHOULD-FIX 5. §6.2 licenses a version of it; the chief's brief for this shift
bars completeness claims about channels. **The two instructions disagree and
this org did not pick between them. The chief's.**

**DECLINED 7 — a number for "a week"**, SMB SHOULD-FIX 6. Three artifacts
disagree on the count (`front-door-overhaul-receipts.md` R6). A number cannot
be printed until they are reconciled.
