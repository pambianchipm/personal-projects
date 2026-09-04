# Front door — THE STRINGS

STATUS: **DRAFT — IN-GATE (round 1).**
OWNER: GTM boss · shift 17, 2026-09-04T02:43Z
BRIEF: the chief's ruling, `gtm/org/inbox.md` 2026-09-04 — *"The copy — Hero A,
§3.1's waitlist block, the section headers, §5's safety band — goes into a file
that contains strings and their receipts and nothing else."*
SOURCE OF THE STRINGS: `gtm/market/copy/front-door-overhaul-v1.md` §§2–5.
THE RECORD, ungated, not shipped: `front-door-overhaul-v1.md` (reasoning,
corrections, retro) and `front-door-overhaul-receipts.md` (R1–R11 + ledgers).
DOES NOT SUPERSEDE: `gtm/market/copy/waitlist-front-door.md` (PHIN-APPROVED).
RULED: Phin, 2026-09-04 — *"yeah A is def the move."*

**EVERY RECEIPT IN THIS FILE IS A FILE AND A LINE NUMBER**, read at
`pambianchipm/clinkworthy` **`9b5b484`** (main, 2026-09-04T02:30Z), except where
the file is named as living in `pambianchipm/personal-projects`. Line numbers in
`front-door-overhaul-receipts.md` were read at `ebac7d1` and are not the numbers
below.

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
| `<div>Marketing that runs</div>` / `<div>while you run the shop.</div>` | `console/app/landing/opengraph-image.tsx:90`, `:91` |
| `assert.equal(HERO.titleTop, …)` / `assert.equal(HERO.titleBottom, …)` | `console/lib/__tests__/landing-content.test.ts:76`, `:77` |
| `/** Canon (spec §4.2). Do not rewrite. …` | `console/app/landing/content.ts:84` |
| `t.includes('Marketing that runs while you run the shop')` | `docs/design/redesign-2026-09/screenshots/marketing/render.mjs:88` |

**Receipts, clause by clause**

| Clause | Receipt |
|---|---|
| "publishes them to Instagram and Facebook" | `docs/channel-readiness.md:13` (Instagram **SHIPPED**), `:14` (Facebook **SHIPPED**) |
| "runs your Meta ads" | `docs/channel-readiness.md:15` (Meta ads **SHIPPED**) |
| "tells you which ones moved units" — the engagement half | `console/lib/meta.ts:420-425` (Instagram `like_count`, `comments_count`), `:467-472` (Facebook likes, comments, shares) |
| "tells you which ones moved units" — the revenue half, **CONDITIONAL** | `console/lib/claims-pure.ts:388` (*"At least $X traced this month — walk-ins not counted."*), `:389` (*"No conversions tagged to this channel this month — log sales to trace revenue."*) |
| "moved units" is live copy, not new | `console/app/landing/content.ts:156`; the adjacent live form at `:121` |
| "Start with a free scan" | `console/app/landing/content.ts:103-104` (`HERO.freeNote`); the scan submit is `disabled` until a URL **and** an email are typed — `console/app/scan/page.tsx:337` |
| "Watch it work a week" | `console/app/tour/page.tsx:162` (*"Watch one week go out."*), `:10` (*"one week of Player2"*) |

**OPEN — the hero states availability, and the employee is not built.**
`YOUR NEXT HIRE` over `Come hire Player2.` carries no waitlist signal. The
qualifier the strings carry sits in §2's under-form block, a band lower.
- The ban: `gtm/market/position-v2-the-hire.md` §6.2 PROHIBITED — *"anything
  implying the employee is available today."*
- Proposed and **not applied**, because it edits Phin's ruled line: the kicker
  becomes `YOUR NEXT HIRE · JOINING SOON`, or the hero band carries the signal.
- **Phin's.**

**OPEN — "moved units" is stated flat and the product states it conditionally**
(`claims-pure.ts:388-389`, above). The §3 Platform header states the same idea
in the form the engagement receipts cover on their own. **Phin's — it is his
ruled sub.**

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
| Under the form, small type | `The employee isn't built yet. We're not taking money for it. No date, because we don't have one.` |

**Replaces — and these are LIVE strings, not spec.** Item 22 merged: the
waitlist section renders at `console/app/landing/page.tsx:192` (`<section id="waitlist">`), with the H2 at `:195` and the form at `:205`.

| Live string | Where |
|---|---|
| `kicker: 'EARLY ACCESS'` | `console/app/landing/content.ts:217` |
| `title: 'Join the waitlist for early access.'` | `console/app/landing/content.ts:218` |
| `sub: 'Player2 is in alpha and we're letting shops in a few at a time. …'` | `console/app/landing/content.ts:219` |
| `price: 'Founding rate from $59/mo when you're invited.'` | `console/app/landing/content.ts:225` |
| `priceNote: 'Nothing to pay to join.'` | `console/app/landing/content.ts:226` |
| `cta: 'Join the waitlist'` | `console/app/landing/content.ts:233` |

**Carried unchanged from live code, not rewritten:** the two form strings above
are `answerLabel` (`content.ts:231`) and `answerPlaceholder` (`content.ts:232`)
verbatim.

**Receipts, clause by clause**

| Clause | Receipt |
|---|---|
| "message you in the chat apps you already use" | **PHIN-APPROVED verbatim** — `gtm/market/copy/waitlist-front-door.md:23` (personal-projects) |
| "it will post when you reply" | **PHIN-APPROVED** — same file, `:24` (*"post when you reply"*, governed by *"will"* at `:23`) |
| "write the week" (no count) | `console/lib/grok.ts:587` — *"4 distinct content-batch briefs for this week"* |
| "publish to Instagram and Facebook" | `docs/channel-readiness.md:13`, `:14` |
| "run your Meta ads" | `docs/channel-readiness.md:15` |
| "answer the comments underneath them" | `console/lib/meta.ts:359` (`replyToInstagramComment`), `:372` (`replyToFacebookComment`); graded in `docs/channel-readiness.md:13`, `:14` |
| "when it can trace a sale back to a post… when it can't, it'll tell you that too" | `console/lib/claims-pure.ts:388`, `:389` |
| "The employee isn't built yet." | **PHIN-APPROVED verbatim** — `waitlist-front-door.md:22` |
| "We're not taking money for it." | **PHIN-APPROVED verbatim** — `waitlist-front-door.md:24` |
| "No date, because we don't have one." | **PHIN-APPROVED verbatim** — `waitlist-front-door.md:26` |
| "No app to open." | Phin, in chat, 2026-09-03 |

**The approved block is five clauses. Three are above. Two are not:**

| Approved clause | Where | Disposition |
|---|---|---|
| *"ask what actually sold"* | `waitlist-front-door.md:23-24` | Present in the sub as *"when it can trace a sale back to a post, it'll tell you which post"* — the branch at `claims-pure.ts:388-389` |
| *"Join the waitlist and we'll come to you when it's ready."* | `waitlist-front-door.md:25` | **DELETED.** It promises an outbound send. The route that receives this form says otherwise in its own header: `console/app/api/waitlist/route.ts:31-34` — *"Nothing here sends email. That is the standing rule…"*. The live confirmation string says *"we'll **invite** you"* — `console/app/landing/content.ts:247` — and the comment above it, `:239-246`, is the build org's note on the same constraint. **The chief's to confirm: it is the owner's sentence.** |

**OPEN — "Come hire it before it's built" can be read as a reservation.** The
family of promise `waitlist-front-door.md:40` struck (*"you'll be first, at a
founding rate"*). The under-form block sits directly beneath it. **`UNTESTED`:
that a reader takes the H2 as an invitation rather than a guarantee. Zero
owners have read it** — `waitlist-front-door.md:74-76`.

**FALLBACK, if the reservation reading is judged unacceptable:**
`Get in line for your Player2.`

---

## 3. SECTION HEADERS

| Slot | Live string | Where | **New string** |
|---|---|---|---|
| Proof strip | `Built for shops that cannot hire a 5-person marketing team.` | `content.ts:107` | `Three posts in your voice, before you pay anything.` |
| Platform kicker | `THE PLATFORM` | `content.ts:110` | `THE JOB` |
| Platform title | `The marketing runtime for the shop.` | `content.ts:111` | `It writes. It posts. It runs the ads. It tells you what worked.` |
| How kicker | `HOW IT WORKS` | `content.ts:134` | `A WEEK, START TO FINISH` |
| How title | `From a goal to a live campaign.` | `content.ts:135` | `You say one sentence. It brings back a week.` |
| Built-for kicker | `BUILT FOR` | `content.ts:162` | `WHO IT WORKS FOR` |
| Built-for title | `Shops that cannot hire a five-person team.` | `content.ts:163` | `Who's writing your posts at 11pm?` |
| Meta / OG title | `Player2 — marketing that runs while you run the shop` | `content.ts:275`; OG `alt` `opengraph-image.tsx:12` | `Player2 — the AI marketing employee for your shop` |
| Meta description | `Player2 plans, writes, and optimizes campaigns for small businesses. Nothing posts or spends without your click. Start with a free scan of your site.` | `content.ts:277` | `Player2 — an AI marketing employee for your shop. Not built yet: get in line. Writes the week's posts, publishes to Instagram and Facebook, runs your Meta ads.` |
| Footer tagline | `Player2 · the marketing OS with an operator · by P2 Labs` | `console/app/scan/page.tsx:681` **and** `console/app/scan/welcome/page.tsx:194` | `Player2 · your marketing employee · by P2 Labs` |
| Closing CTA | `See your business the way our system does.` | `console/app/scan/page.tsx:302` | `Let it read your public pages and write you three posts. Then decide.` |

**Receipts**

| String | Receipt |
|---|---|
| `Three posts in your voice, before you pay anything.` | `console/app/landing/content.ts:103-104` — *"we read your public pages and write three posts in your voice, before you pay anything. No card."* |
| `It writes. It posts. It runs the ads. It tells you what worked.` | writes `console/lib/grok.ts:587`; posts `docs/channel-readiness.md:13`, `:14`; ads `:15`; *"what worked"* `console/lib/meta.ts:420-425`, `:467-472` |
| `You say one sentence. It brings back a week.` | `console/lib/grok.ts:587` (*"4 distinct content-batch briefs for this week"*). **No count is stated**; three artifacts attach three different numbers to "a week" — `front-door-overhaul-receipts.md` R6 holds that ledger |
| `Who's writing your posts at 11pm?` | asserts nothing; a question |
| `Player2 — the AI marketing employee for your shop` | the frame — `gtm/market/position-v2-the-hire.md` §1.6 |
| Meta description ordering | *"Not built yet: get in line"* closes at **character 77**. A search result renders ~155 characters; the string is 159. What truncates is a channel name |
| Meta description carries **no** approval claim | the approval claim is §4, once |
| `Let it read your public pages and write you three posts. Then decide.` | `console/app/landing/content.ts:103-104` (*"we read your public pages"*) |
| `Player2 · your marketing employee · by P2 Labs` | ruled at COPY v2 — `docs/design/redesign-2026-09/MARKETING.md`; **the live string at both `scan/page.tsx:681` and `scan/welcome/page.tsx:194` is the old one** |

**OPEN — the hero sub and the Platform title carry the same four verbs in the
same order, twice on one page.** Which one shortens is a layout decision
against the moving hero. **Recommendation: shorten the hero sub** — the
Platform title's *"tells you what worked"* rests on `meta.ts:420-425`, `:467-472`
alone, and the hero sub's *"moved units"* also reaches `claims-pure.ts:388-389`.

---

## 4. THE SAFETY BAND — one band, one place on the page

> **Nothing posts and nothing spends without your click — one post at a time,
> or once, in advance, for the posts you set to go out on their own. Ads are
> never set in advance: every campaign waits for its own click, on a button
> that shows you the budget.**

**Replaces**

| Live string | Where |
|---|---|
| `PRINCIPLE = 'Nothing spends or posts without your click.'` | `console/app/landing/content.ts:184` |
| `assert.equal(PRINCIPLE, …)` | `console/lib/__tests__/landing-content.test.ts:78` |
| `assert.match(PRINCIPLE, /without your click/i)` | `console/lib/__tests__/landing-content.test.ts:378` |
| `lede: 'Nothing posts or spends without your click.'` | `console/app/landing/content.ts:112` |
| `'You click. Then it ships. Nothing posts or spends before that.'` | `console/app/landing/content.ts:151` |
| `'Nothing posts or spends without your click.'` (inside `META.description`) | `console/app/landing/content.ts:277` |

**Receipts, clause by clause**

| Clause | Receipt |
|---|---|
| "one post at a time, or once, in advance, for the posts you set to go out on their own" | `console/lib/tier.ts:107` — the capability's own client-facing label, *"posting on a schedule without a click"*; `console/lib/db/scheduled.ts:83` — `requireCapability(workspaceId, 'arm_auto_publish')` |
| the scheduled runner has no spend path | `console/lib/auto-publish.ts` — `grep -nEi "ads\|spend\|budget\|boost"` over the whole file returns nothing |
| `ads` is a separate capability from scheduled posting | `console/lib/tier.ts:109` (`ads`) vs `:107` (`arm_auto_publish`) |
| "Ads are never set in advance: every campaign waits for its own click" | `console/app/api/ads/launch/route.ts:11-14` — *"HARD HUMAN GATE … Requires confirm:true from the Ads-page button that displayed the budget. The conductor's draft_ad_campaign tool has no path here."*; `:21-23` refuses without it |
| "on a button that shows you the budget" | `console/app/api/ads/launch/route.ts:13`; caps re-validated at the gate, `:36-41` — lifetime **$5–$500**, run length **1–30 days**, *"never trust the stored row alone"* |
| it is the account holder's own click | `console/app/api/ads/launch/route.ts:25` (`getActiveWorkspace()`), `:30-31` (the draft must belong to that workspace) |
| whose money | `console/lib/meta-ads.ts:7`, `:327` — the workspace's own ad account |
| no banned word | `console/lib/__tests__/design-system.test.ts:685` lists `'arming'` in `BANNED_WORDS`; the band contains no `arm`/`armed`/`arming` and no `slots` |
| no time claim | the band states none. `console/lib/brand-config.ts:26` supplies `DEFAULT_POST_HOURS` as a **default**, merged at `:105`; `console/lib/agent.ts:74` collects owner hours *"if discussed"* |

**DEVIATION, in the open.** `position-v2-the-hire.md` §6.2 mandates the
qualifier *"armed in advance for the slots you choose."* This band uses neither
`slots` nor `arming` (`design-system.test.ts:685`) and states no time claim.
**§6.2 is a gated artifact this org may not edit. The chief's to rule on.**

**OPEN — `MARKETING.md:45` sells autopilot on the same property.**
*"Autopilot: posts that pass your rules go out on your schedule, no click
needed"* — `docs/design/redesign-2026-09/MARKETING.md:45`, against `PRINCIPLE`
at `content.ts:184`. The same file's own note, `:46`: *"If autopilot posts
without a click, the 'nothing posts' promise elsewhere must soften to 'nothing
spends'."* **Not this org's to rule.**

---

## 5. WHAT THESE STRINGS DO NOT COVER

- No channel beyond Instagram, Facebook and Meta ads is named.
  `docs/channel-readiness.md:16` grades X **PARTIAL**, `:17` Reddit **BLOCKED**,
  `:18` TikTok **SHELL ONLY**, `:19` Google Ads **LABEL ONLY**.
  `docs/design/redesign-2026-09/MARKETING.md:44` names *"Instagram, Facebook, X
  and Reddit"* as Entry features. **These strings do not.**
- No count, no date, no number of shops, no comparison to a competitor.
- No claim about how often the employee messages you, and none about what
  happens if you do not reply.
- The `$59` entry price is not in these strings.
  `console/app/landing/content.ts:56` — `ENTRY_AVAILABLE = true`;
  `:225`, `:226` are the live price strings this file replaces.

## 6. NOT CHECKED

- **No owner has read any of these strings.** Every claim about how they land
  is `UNTESTED`.
- `npm test` was not executed. The read-only clone has no dependencies
  installed. `console/lib/__tests__/landing-content.test.ts:73-86` asserts the
  hero, `PRINCIPLE` and `WAITLIST.closer`; `:62-71` runs `slopCheck` over the
  prose list. **Nobody in this org has run either against the new strings.**
- Whether `/tour` contains six discrete scenes. `console/app/tour/page.tsx:162`
  and `:10` were read; `tour-engine.tsx` was not.
- Where each string sits on the page. This file approves words, not layout.
- The line numbers above were read at `9b5b484`. They drift.
