# THE FIRST LIVE AUDIT — the shipped front door against the positioning

STATUS: **DRAFT, ungated.** Findings only; nothing here changes a file in the
product repo and nothing here is a ruling.
**AMENDED shift 19, 2026-09-04 — §6 adds two live claim findings (M1, M2) that
this audit missed**, found by re-reading the two closed copy files against the
pages. Sections 0-5 are unchanged and were read at `clinkworthy@851fad4`; §6
was read at `main@95db0ce` and says so.
OWNER: GTM boss · shift 18, 2026-09-04, 14:45Z– (§6: shift 19)
BRIEF: the chief's ruling, `gtm/org/inbox.md` 2026-09-04 05:4x — *"read the LIVE
pages against the positioning you hold and report divergence."*
POSITIONING HELD AGAINST: `gtm/market/position-v2-the-hire.md` (§2.1, §2.2,
§4.1, §4.2), `gtm/market/positioning.md`, and the capability grades in
`clinkworthy@851fad4:docs/channel-readiness.md`.
SCOPE, and it is narrower than the last four shifts: this file does not author
a single string for a live surface. `front-door-strings-v1.md` is closed and
does not go to round 2.

---

## 0. THE INSTRUMENT, AND WHAT IT CANNOT SEE

**Two instruments, and I say which finding came from which.**

**(1) The live pages, fetched over HTTPS at 2026-09-04 ~14:50Z.** `curl -sSL`
against `https://p2labs.ai/`, `/landing`, and
`https://console.clinkworthy.com/{landing,tour,services,scan,proof,privacy}`.
All returned 200. `/landing` is **byte-identical across both hosts**
(md5 `d588c20e3f2f4e5d67a8275348e158d3` on all three URLs), so the two
hostnames serve one deployment and I did not have to audit them twice.

**What this instrument cannot see, and it cost me one whole surface:** it reads
the server response. Anything a browser builds after hydration is invisible to
it. **`/proof` returned 9,747 bytes whose entire visible text is `Proof pack /
Player2 / One moment…`** — the document fetches itself from `/api/proof` with a
`lead` and a `token` I do not have (`console/app/proof/page.tsx:39-49`). **Every
`/proof` finding below is read from SOURCE, not from a rendered page, and is
labelled as such.** The same limit applies more narrowly to `/scan`'s progress
card and its `Not quite →` correction control, and to the landing hero's
animated demo frames: those exist in source and render on state I did not drive.

**(2) The tree at `pambianchipm/clinkworthy@851fad4`** — `origin/main`,
committed 2026-09-04 14:29:47Z, cloned at depth 1 and then deepened to 200 for
the one history question below. `main` auto-deploys, so this is the product.
Every `file:line` in this document is at that SHA. I read this repo; I wrote
nothing to it.

**Where the two instruments disagreed, the live page won.** They did not
disagree: every string I traced from source appears in the live HTML.

**(3) THE RECEIPT AUDIT ON THIS DOCUMENT ITSELF.** Every `file:line` below was
re-resolved cold by a script after the draft was written: **80 distinct
citations, 80 resolved, and each printed the line it points at for comparison
against the claim beside it.** **The blind spot is the important half — the
script proves a line EXISTS at that number; it cannot judge whether the line
supports the claim I attached to it.** That judgement is mine throughout, and it
is what a gate should attack first. Six citations point at
`gtm/market/position-v2-the-hire.md` in this repo rather than at the product
tree, and are verified the same way.

---

## 1. WHAT SHIPPED — the chief's list, held against the tree and the pages

The brief listed nine things and told me to verify rather than trust them. Eight
hold. One is true but incomplete, and the incompleteness is finding **F6**.

| Claimed shipped | Instrument | Result |
|---|---|---|
| Hero A is canon — kicker `YOUR NEXT HIRE`, `Come hire Player2.`, employee sub | live `/landing` lines 8–10; `content.ts:104,120,132` | HOLDS |
| Both phrases Phin killed are gone | grep of live landing HTML for `Marketing that runs`, `cannot hire a 5-person`, `cannot hire a five-person` — **0 matches** (grep sees the served HTML and its RSC payload; it cannot see an image of the phrase) | HOLDS |
| `/tour` lost twelve screenshots | `tour-copy.ts:9-27`; no `shot` field survives; live `/tour` carries no product image | HOLDS |
| `/tour` copy rewritten | `tour-copy.ts` 152 lines, six acts, all six live | HOLDS |
| `/scan` gained input card, three promise tiles, progress card, `Not quite →` | three tiles live (`/scan` lines 13–21); input card live; **progress card and `Not quite →` present in source (`scan/page.tsx:163,666`) but UNMEASURED as rendered** — they need a scan in flight | PARTIAL |
| Landing hero is a 12-second animated demo | live `/landing` lines 11–27, with its own honesty note *"An illustration of the loop — these drafts are examples, not live posts."* Duration UNMEASURED — I did not time it | HOLDS (duration UNMEASURED) |
| Shared header and footer on all five surfaces; `/privacy` joined last | header + footer render on all five live pages; `500b58d` (2026-09-04 09:23Z) is /privacy's join | HOLDS |
| Pink option A — pink marks the free scan, waitlist submit went blue | **verified on all five live pages, below** | HOLDS |
| Warm palette and `Outfit` on every heading | UNMEASURED — I did not audit type or colour, and this org has no lane for it | NOT AUDITED |

**Pink, since it is a ruling and rulings are worth measuring.** Across the five
live surfaces every element carrying a pink class resolves to `/scan`:
`landing_pinkPill__NA5fM` (the shared nav CTA, on all five) → `/scan`, and
`landing_pinkMd__RXqUL` (the hero CTA) → `/scan`. The waitlist submit renders
`<button type="submit" class="landing_blueLg__UmN0p">Join the waitlist</button>`
— blue, and large. Step 03's `Approve` chip sits inside
`aria-hidden="true"` and is neither an anchor nor a button, which is what law 9's
picture clause asks (`docs/org/frontdoor.md:204-208`). **Blind spot: I read
class names and markup in the served HTML — I did not compute styles, so a
control painted pink by a rule I did not read, or made clickable after
hydration, would not appear in this result.** Phin's option A holds on the four
routes I could render. The fifth is `/proof`, and it is recommendation 2.

---

## 2. THE DIVERGENCE LIST

Each finding is graded **(a)** positioning breach, **(b)** a claim that outruns
what we ship, or **(c)** the positioning itself is now wrong.

---

### F1 — (a) THE EMPLOYEE LIVES IN THE HERO. FOUR OF THE FIVE LIVE SURFACES SELL A PLATFORM.

**This is the answer to the question the chief asked, and it is not close.**

The test is this org's own, `position-v2-the-hire.md:318`: ***"A tool is a place
you go. An employee comes to you."***

**Every employee-frame string on the live front door, exhaustively:**

| String | Where |
|---|---|
| `Player2 — your AI marketing employee` | `<title>`, /landing |
| `YOUR NEXT HIRE` | /landing hero kicker · `content.ts:104` |
| `Come hire Player2.` | /landing hero · `content.ts:120` |
| `Your marketing employee.` | /landing hero sub, first two words · `content.ts:132` |
| `Owners who are also the marketing department.` | /landing H2 · `content.ts:226` |
| `Player2 is your AI marketing employee.` | meta description · `content.ts:406` |

**Six strings. All on one surface. Four of the six are inside the hero block.**

**Every platform-frame string, exhaustively:**

| String | Where |
|---|---|
| `THE PLATFORM` | /landing, first kicker below the hero · `content.ts:164` |
| `The marketing runtime for the shop.` | /landing · `content.ts:165` |
| `the marketing OS that waits for your click` | **the shared footer — /landing, /tour, /scan, /services AND /privacy** · `content.ts:379` |
| `Player2 — our marketing OS — is the flagship` | /services, the one sentence that says what Player2 is · `services/page.tsx:37` |
| `See your business the way our system does.` | /scan, the H1 · `scan/page.tsx` (live line 9) |
| `Product` | the shared nav label, on all five surfaces · `content.ts:76` |

**The employee frame is a hero. The platform frame is the furniture.** It is in
the nav on every page, the footer on every page, the H1 of `/scan`, and the only
definition of the product on `/services`. A visitor who scrolls past the fold on
`/landing` meets `THE PLATFORM` as the very next thing they read.

**And the footer is the sharpest single instance.** `the marketing OS that waits
for your click` is the last line on all five surfaces — the most-repeated
sentence on the front door — and it fails the org's own test twice: an *OS* is a
place you go, and *waits for your click* makes the human the one who does the
going.

**Grade: (a).** Phin's words are *"Not a marketing platform — an AI employee
that happens to have a platform."* The live front door inverts the emphasis: it
is a platform that happens to have an employee in its headline.

**What I am NOT claiming.** I am not claiming the platform frame should be
deleted — §2.1 of the positioning gives layer 1 a real job, *"credibility, not
desire"*, and `THE PLATFORM` band is doing that job. The divergence is one of
**proportion and placement**: the credibility layer occupies the persistent
furniture and the desire layer occupies one screen of one page.

**Recommended to the chief, not written by me:** the footer tagline and the
`/services` definition sentence are the two highest-leverage strings on the
front door for this, because each renders on more surfaces than the hero does.
Those surfaces are the front-door org's to author. This is a divergence report,
not a draft.

---

### F2 — (b) `moved units` SHIPS THREE TIMES, AND THE FIELD THAT WOULD MAKE IT TRUE IS NEVER WRITTEN.

**Live, on `/landing`, three times:**
- hero sub — *"…and tells you which ones moved units."* (`content.ts:132`)
- PLATFORM/Paid — *"It finds the spend that actually moves units."* (`content.ts:176`)
- HOW step 04 — *"It reads what moved units and optimizes the next one before you ask."* (`content.ts:210`)

**What ships.** `console/lib/attribution.ts:1-3` states the mechanism in its own
first line: *"Stage 1 attribution … every link the OS publishes carries UTMs, so
site analytics can answer 'which campaign sold'."* That reaches a click on a
link, on a site with analytics, ending in an online sale.

**What the build org's own backlog says about the rest**, `docs/org/backlog.md:1900-1903`:
> *"the gap in our own code is not the one below: `Conversion.utmContent` is
> documented as the post that drove the sale and **nothing ever populates
> it** — we stamp `utm_content` on every published link and then ask the owner
> to type a sale into a form that never asks which post it came from."*

**I did not take that on trust.** `grep` for `utmContent` and `utm_content`
across `console/app/(app)/**/*.tsx` returns **no match** — no client surface
sends a post id with a conversion. The field is accepted by
`api/conversions/route.ts:32` as optional and written by
`lib/db/conversions.ts:77` only when supplied. **Blind spot: I grepped two
literal identifiers in one directory of `.tsx` files; a form posting the same
value under a different key, or living outside `console/app/(app)`, would not
appear in that result.**

**And the ingest that would close it has not landed.** `backlog.md:1885-1889` —
item 29 slice 29a is **at the gate on PR #123**, *"NO INGEST"*; Shopify ingest
is 29b and Square is a separate item that the spike found harder than planned
(`:1891-1896`). A repo-wide grep for `square|shopify` in `console/lib` and
`console/app` returns hits in a spam-domain regex and a comment about calendar
squares, and nothing else — **blind spot: that grep tests two vendor names, so
an ingest built under a neutral name (`till`, `orders`, `pos`) would not show.**

**Grade: (b), and it is the largest one on the page.** The positioning names
this itself at `position-v2-the-hire.md:357-361`: *"POS and commerce
integrations reach the till … they do not reach the walk-in who mentioned the
reel."* The ICP on this very page is a bakery, a salon and a peak-season
retailer — three walk-in businesses. `backlog.md:1910-1911` grades item 29
*"High priority — this is the claim the whole position rests on."* **The claim
is live on the internet and the mechanism is at the gate.**

**Not a new finding, and I say so:** shift 17's SMB gate produced the sharpest
statement of this defect and it is quoted in the shift-17 inbox notice. **What
is new is that the sentence is no longer a draft.** It shipped.

---

### F3 — (a) `Founding rate from $59/mo` RENDERS BOTH FORMS THIS ORG'S GATES KILLED — AND COLLIDES WITH `/services` ON THE SAME WORD.

**Live**, `/landing` line 67: *"Founding rate from $59/mo when you're invited."*
Source `content.ts:288`.

**This org's own ruling**, `position-v2-the-hire.md:669-672`, accepted from two
gates:
> ***"Kill 'from'*** — *"Founding rate from $59/mo" reads as a bait price. And
> **"founding rate" may not be applied to $59: A2 already owns that term for
> $299.** Two prices sharing one label is a law-4 collision. Copy form:
> **"$59/mo (`pricing.ts`, `ENTRY_CENTS = 5900`)."***

**Both barred forms are live in one sentence.** And the collision is not
hypothetical — it is two clicks away on the same front door:

- `/landing` line 67: **Founding rate** from **$59**/mo
- `/services` lines 11–13: **Founding partner rate $299**/mo (`services/page.tsx:45`)

**The same word, two prices, on two pages of one shared shell.** A visitor who
follows the footer's `Services` link — which renders on every surface — reads
both inside thirty seconds.

**The figures themselves trace to the SSOT, and here is the trace.** `$59`:
`pricing.ts:19` `ENTRY_CENTS = 5900` → `ENTRY_PRICE` (`:32`) → interpolated into
`content.ts:288`, no literal. `$299`: `pricing.ts:16` `FOUNDING_CENTS = 29900` →
`FULL_PRICE` (`:31`) → imported at `services/page.tsx:3`, interpolated at `:45`.
**Against the pages rather than the source, I enumerated every numeral rendered
on all five live surfaces (the list is in F8) and found no money figure besides
those two** — **blind spot: that enumeration reads served text, so a price
inside an image, or one on `/proof`, is outside it.** **Grade (a) is about the
LABEL, not the number.**

---

### F4 — (b) `$299` NAMES THREE DIFFERENT THINGS, AND ONE OF THEM IS SETTLED AS NOT-FOR-ANY-PAGE.

| Where | What $299 means there |
|---|---|
| `pricing.ts:16` | `FOUNDING_CENTS` — *"the one checkout charges today"* (`:15`) |
| `pricing.ts:53-54` | `productNameFor('os')` → `Player2 — founding partner`: the **os software tier** |
| live `/services` `:44-45` | a **human-run service** — *"We run your social marketing on Player2 — setup, weekly content, engagement, ads"* |

And `position-v2-the-hire.md:691` settles the third reading:

> **"### 4.2 The employee tier (A2): WAITLISTED, NOT PRICED — settled …
> Recommendation for the eventual number: hold $299, on a changed argument.
> Not for any page."**

**Grade: (b), in the packaging lane.** One constant is doing duty as a software
tier, a done-for-you service, and a waitlisted employee tier. `/services` prints
it for the service; the positioning bars it for the tier; `pricing.ts` maps it to
the tier. **This is not a copy defect — a copy change cannot fix a figure that
means three things.** It is a packaging decision, it is mine to file, and I file
it here rather than proposing a number I have not costed: **`/services`'
engagement is a P2 Labs service sold at a price the org has also assigned to a
product tier, and one of the two needs a different number or a different name
before either goes into a campaign.**

---

### F5 — (b) EVERY CAPABILITY THE ENTRY-PRICED PAGE DESCRIBES, THE ENTRY TIER CANNOT BUY — EXCEPT PUBLISHING, WHICH IT CAN.

`console/lib/tier.ts:46`:
```
entry: ['calendar', 'caption_advice', 'research', 'analytics', 'generate'],
```
`arm_auto_publish`, `engagement`, `ads` and `proof_pack` are `os`-only
(`tier.ts:47-56`).

**The only price on `/landing` is the entry price** (`content.ts:288`). Held
against it, line by line:

| Live string | Capability | Entry? |
|---|---|---|
| `publishes them to Instagram and Facebook` (`content.ts:132`) | manual publish | **YES** — see the correction below |
| `runs your Meta ads` (`content.ts:132`) | `ads` | NO |
| `It finds the spend that actually moves units… Money goes out.` (`content.ts:176`) | `ads` | NO |
| `Winners get more budget.` (`content.ts:237`) | `ads` | NO |
| `Comments come in all day; replies sit drafted and waiting.` (`content.ts:241`) | `engagement` | NO |
| `It posts on the hour you chose. You do not.` (`tour-copy.ts:136`) | `arm_auto_publish` | NO |
| `Comments on those posts are checked every hour, and the drafted replies come back to you.` (`tour-copy.ts:138`) | `engagement` | NO |
| `You approve from your phone. It ships.` (`content.ts:230`) | manual publish | **YES** |
| `You click. Then it ships.` (`content.ts:205`) | manual publish | **YES** |

**Grade: (b).** Six live strings describe capability the tier beside them cannot
buy, and `/tour`'s act 5 — the act the whole page builds toward — is two of the
six.

**THE PREMISE CORRECTION, AND IT CHANGES RECOMMENDATION 1.** The brief carries
the chief's filed recommendation with the reason *"an employee that drafts but
cannot publish or answer anyone is not an employee."* **Entry publishes.**
`console/lib/db/scheduled.ts:77-78`, in the repo's own words:

> *"TIER GATE (backlog 5c). Arming is the full-OS capability: **entry plans
> schedule and publish by hand.** Gated on the way IN only…"*

The gate fires at `:81-83` and **only when `autoPost` is being set true**.
`console/app/api/scheduled/publish-now/route.ts` carries no `requireCapability`
call at all, and `console/lib/auto-publish.ts:143` publishes only slots where
`slot.autoPost` is true — which entry cannot set. **So the entry tier's gap is
not publishing. It is publishing WITHOUT YOU, and answering anyone.** I set this
out in full in recommendation 1 because the recommendation turns on it.

---

### F6 — (a) `/tour` CONTRADICTS ITSELF BETWEEN ACT 4 AND ACT 5, LIVE, AND THE CONTRADICTION IS THE ARMING CAPABILITY.

Two live sentences on one page, two acts apart:

- **act 4** (live line 28, `tour-copy.ts:127`): *"Walk away from the queue and
  nothing goes out — which is exactly the point. **Publishing is the one step
  Player2 does not take on its own.**"*
- **act 5** (live line 31, `tour-copy.ts:136`): ***"It posts on the hour you
  chose. You do not."***

An armed slot is Player2 publishing on its own, at an hour it reads from
`CHANNEL_POST_HOUR_ET` in `lib/auto-publish.ts`, on a day after the arming
click. **Act 4's sentence is false for the tier `/tour` is describing, and act 5
is the thing that falsifies it.**

**The weaker form survives and I will not overstate this.** The safety absolute
renders at least six times across the front door — `content.ts:166`, `:205`,
`:241`, `PRINCIPLE` at `:247`, the footer-derived tagline at `:379`, the meta
description at `:406`, and live `/tour` line 39. In the form *"Nothing posts or
spends without your click"*, arming is defensible: the owner clicked the ⚡
toggle, and that is a click. **Act 4's stronger form is not saved by that
reading** — *"the one step Player2 does not take on its own"* is a claim about
autonomy, not about consent, and arming is exactly that autonomy.

**Grade: (a).** The claim that a visitor is most likely to repeat back to us —
*it never posts without me* — is the one the product's premium capability is
defined by breaking.

---

### F7 — (a) `Operator marketing` IS LIVE TWICE ON `/services`, NOT ONCE. THE SECOND ONE IS THE ONE NOBODY READS.

The brief said `/services` renders *"Operator marketing (Player2)"*. **It
renders `operator` twice**, and the second instance is the one a text read of
the page cannot find:

- `console/app/services/page.tsx:42` — the visible card heading, *"Operator
  marketing (Player2)"* (live `/services` line 10).
- `console/app/services/page.tsx:17` — **`export const metadata.description`:
  *"AI automation and operator marketing services from P2 Labs."*** This renders
  as `<meta name="description">` and is what a search result, a Slack unfurl and
  a link preview show. It is on the live page; it is not in the live page's
  visible text.

**How I found the second one, and what it says about the first sweep.** My
extraction of visible text found one instance. Re-running the banned-glossary
sweep against the **raw HTML including attributes and the RSC flight payload**
found two. **A sweep of rendered prose cannot see a meta tag, and the meta tag
is the string with the widest distribution on the page.**

**The rest of the glossary is clean, with the instrument named.** `conductor`,
`arming`, `arm`, `armed`, `sweep`, `swept` and `console` return **zero matches**
across the raw HTML of all five live surfaces — including attributes and the RSC
payload. **Blind spots, three: this cannot read text inside an image; it cannot
read `/proof`, which never rendered; and `console` as a hostname is present in
`console.clinkworthy.com` itself, which I judged to be infrastructure rather
than client copy and did not count** — that judgement is mine and is available
to overrule.

---

### F8 — CLEAN RESULTS, STATED, BECAUSE A SWEEP THAT FINDS NOTHING HAS TO SAY WHAT IT SWEPT

**Backlog item 33 has no automated guard for fabricated counts anywhere in the
repo. My reading is the instrument, so here is exactly what it covered.**

**Every numeral rendered on the five live surfaces**, enumerated: the step
numbers `01`–`06` and `1`–`3`; `$59` and `$299` (both traced to `pricing.ts` in
F3); `13` in *"not directed at anyone under 13"*; `28 August 2026` as
`/privacy`'s version date; `10 in the morning` and `noon` as posting hours, which
`tour-copy.ts:41-42` pins to `CHANNEL_POST_HOUR_ET`; `about a minute`; `three
posts`; `a one-person company`; and `Player2`/`P2` inside the product name.

**No engagement count, no waitlist count, no follower number, no client outcome,
no invite date, and no percentage renders on any of the four surfaces I could
render.** **Blind spot, and it is the same one all shift: `/proof` never
rendered, and `/proof` is the surface that carries a prospect's real numbers.
That surface is UNMEASURED for this class of defect and it is the one where the
class would do the most damage.**

**Channel grades: no surface claims above its grade.** A case-insensitive sweep
of all five live pages' raw HTML for `tiktok`, `google ads`, `google`, `x.com`,
`twitter`, `reddit`, `linkedin`, `youtube`, `pinterest` returns **zero
matches**. The only platforms named anywhere on the live front door are
Instagram, Facebook and Meta ads — the three `docs/channel-readiness.md:13-15`
grades **SHIPPED**. **X (PARTIAL), TikTok (SHELL ONLY) and Google Ads (LABEL
ONLY) appear nowhere.** `tour-copy.ts:47-53` records this being done
deliberately, and a test parses the grade table rather than a hand-written list.
**Blind spot: the sweep tests platform names in served markup; a logo strip
rendered as images, or a platform named on `/proof`, would not appear in it.**

---

### F9 — (a) `/privacy` RENDERS TWO `never` AND ONE `ever`, CONFIRMED — AND THEY ARE THE ONLY ONES ON THE FOUR SURFACES I COULD RENDER.

- `console/app/privacy/page.tsx:42` — *"We **never** ask you to connect an
  account to run a scan"*
- `console/app/privacy/page.tsx:49` — *"Payments, if you **ever** make one, go
  through Stripe — we **never** see or store your card."*

A case-insensitive sweep of the raw HTML of all five live pages for `never` and
`ever` returns these three and nothing else. **Blind spot: the sweep reads
served markup and cannot read `/proof`, which is F10.**

**Grade: (a), and it is known to the build org rather than hidden from it.**
Commit `500b58d`'s own message carries it as CARRY 3: *"Pre-existing and
untouched: /privacy renders 'never' twice and 'ever' once — barred absolutes on
a live surface… no sweep bars them there today. Worth its own small PR."* So
the divergence here is not that nobody noticed; it is that `frontdoor-claims.test.ts`
and `killed-phrases.test.ts` both match `app/privacy/` and both stay green.
**A guard that matches a directory and passes it anyway is the coverage class
this front door has now failed on `console`, on the price literal, and here.**

---

### F10 — (a) `/proof` CARRIES FOUR MORE, TWO OF THEM ABSOLUTES — AND NO LIVE READ CAN SEE THEM.

**Read from source only.** `/proof` renders client-side behind a lead token, so
this finding has no live receipt and I am not pretending otherwise.

| Line | String | My grade |
|---|---|---|
| `proof-document.tsx:544` | *"We **never** invent a fact about your business."* | **Barred class.** An unqualified absolute about our own conduct, in the document Phin hands a prospect. |
| `proof-document.tsx:254` | *"it is a claim about what we could read, **never** about what they do."* | **Barred class**, and load-bearing — it is the sentence that scopes a competitor claim. |
| `proof-document.tsx:320` | *"Written from the scan alone — before we **ever** spoke."* | Idiomatic past-tense, not a promise. **I would not strike it**, and I separate it rather than inflating the count. |
| `proof-document.tsx:568` | *"what you would actually want posted, what you would **never** want posted"* | Describes the **reader's** preference, not our conduct. **I would not strike it either.** |

**Two findings, not four, and the two I decline are named so the next reader can
disagree with me rather than re-derive the list.**

---

### F11 — (c) THE POSITIONING IS NOW WRONG ABOUT ITS OWN GOVERNING DOCUMENT.

`gtm/market/position-v2-the-hire.md:307-308`, §2.1:

> *"Per the code receipts below (**`channel-readiness.md` DOES NOT EXIST** — see
> §3.1; `find` returns nothing and `docs/` has no such file)…"*

**It exists.** `clinkworthy@851fad4:docs/channel-readiness.md`, written
2026-09-03 by the chief, 66 lines, a grade table naming a file and line per row,
and a `NOT CHECKED` section. §3.1's heading carries the same stale claim:
*"The named authority does not exist — grades now rest on code."*

**Grade: (c).** The document that section says is missing is now the authority
the brief hands me for capability claims, and `tour-copy.ts:51-53` records a
shipped test that parses its grade table. **§2.1 and §3.1 need amending, and
that is this org's own file to amend** — I flag it rather than editing a
GATE-FAILED artifact mid-audit, because an edit to a claim-bearing sentence in
that file is a new draft and a new draft needs a gate this shift is not running.

**Two smaller (c)s in the same file, filed without argument:** §2.1's platform
paragraph reads *"auto-publish only on slots the owner armed"* — accurate, and
worth promoting into the tier discussion at §4, where its absence is what made
recommendation 1's premise easy to get wrong. And §4.1:582's *"hold $59 as the
status quo, not as a defended number"* is now describing a price that has
shipped as the sole figure on the live landing; **"status quo" and "the only
price a stranger sees" are different objects and the file should say which it
means.**

---

### F12 — NEAR-MISSES: three places my own instrument nearly produced a finding and did not

**Reported because the house rule asks for them, and because two of the three
would have been wrong.**

1. **`/privacy` says *"This version is current as of 28 August 2026"*
   (`privacy/page.tsx:72`) beside a claim that it *"changes with it in the same
   release."* `git log` shows the file changed on 2026-09-02 and again on
   2026-09-04.** I had the finding drafted. **Reading the diff killed it:**
   `500b58d`'s changes to that file are the shell join and the removal of a back
   link — nine insertions, five deletions, none touching what is collected. The
   date describes the collection statement and the collection statement did not
   move. **No finding.** *(Blind spot on the rescue as much as on the finding: I
   read one commit's diff and one `git log`, on a clone deepened to 200 — a
   substantive change older than that window would not appear.)*
2. **`BOOKING_URL_PLAIN = 'p2labs.ai/call'` (`proof-copy.ts:19`) renders in the
   proof pack's print view as an address a prospect types off paper
   (`proof-document.tsx:592`).** A printed URL that 404s would be a real defect
   in a document handed to a named lead. **I fetched it: `https://p2labs.ai/call`
   returns 200 and resolves to `calendly.com/pambianchipm/30min?utm_source=proof-pack&utm_medium=typed`.**
   It works, and the typed path is even attributed separately. **No finding.**
3. **`ENTRY_STATUS` (`content.ts:57-59`) exists to pair the entry price with a
   true status, and `content.ts:8` states the rule: *"$59 entry NEVER renders
   without its not-open status."*** Its live value would be `Cancel anytime.`
   — a string that would be a serious claim on a page where nobody can buy. **It
   does not render: `Cancel anytime` returns zero matches in the live HTML.**
   Item 22's waitlist block supplies its own pairing (`Nothing to pay to join.`)
   and `ENTRY_STATUS` appears to be unrendered. **No finding on the live page.**
   **What I am flagging instead is smaller and is the build org's:** a constant
   whose whole purpose is to enforce a pairing, which no longer renders, is a
   guard that has quietly stopped guarding. UNMEASURED whether anything else
   reads it.

---

### F13 — UNMEASURED, and the first one is three shifts old

1. **`WAITLIST_ONLY` in production.** `lib/waitlist-gate.ts:12-15` — *"DEFAULT
   ON. An absent variable means GATED"* — and `api/scan/checkout/route.ts:38`
   returns 403 before anything else runs. **I still cannot read the value.**
   **And I declined the one measurement available to me:** the only way to
   observe it from outside is to `POST /api/scan/checkout` against production,
   which is a write to a live payment endpoint. That is an outward action and
   the brief bars them. **UNMEASURED, deliberately.**
2. **Whether any path charges `$59`.** `route.ts:44` reads
   `const requested = body.tier ?? 'os'` — **the default tier at checkout is
   `os`, $299**, and `pricing.ts:15` calls `FOUNDING_CENTS` *"the one checkout
   charges today."* A grep for `checkout` across `console/app` and `console/lib`
   (excluding tests) returns **no caller** — no UI anywhere posts to that route,
   so nothing in the product names `tier: 'entry'`. **Blind spot: that grep tests
   one literal string in two directories; a call assembled from a path fragment,
   or one living elsewhere, would not appear.** So the live landing's only price
   is one that checkout charges **only** on a request no shipped surface makes.
   I am **not** grading this "a price checkout cannot charge" — `priceCentsFor('entry')`
   proves it can — but the gap between *can* and *does* belongs on this list.
3. **`/proof` as rendered** — F10, F8's count sweep, and recommendation 2 all
   rest on source rather than on a page.
4. **`/scan`'s progress card and `Not quite →` as rendered**, and the hero
   demo's timing.
5. **Type and colour.** Warm palette and `Outfit` — not audited, no lane.

---

## 3. RECOMMENDATION 1 — THE TIER EXPOSURE. FOR PHIN.

**THE QUESTION AS PUT TO ME RESTS ON A PREMISE THAT DOES NOT HOLD, AND I START
THERE BECAUSE IT MOVES THE ANSWER.**

The chief's filed recommendation is that entry should publish while engagement
stays premium, reasoned as *"an employee that drafts but cannot publish or
answer anyone is not an employee."*

**Entry already publishes.** `lib/db/scheduled.ts:77-78`: *"Arming is the
full-OS capability: **entry plans schedule and publish by hand**."* The
capability check fires at `:81-83` and only when a slot is being **armed**;
`api/scheduled/publish-now/route.ts` has no tier gate; `auto-publish.ts:143`
touches only armed slots. An entry client schedules a week and clicks each post
out.

**So the real gap is two things, and they are not one thing:**

| Gap | What it costs us | What it is worth |
|---|---|---|
| `arm_auto_publish` — publishing **without you** | a boolean and an existing hourly cron. **No metered spend, no money at risk.** | the difference between a tool and an employee |
| `engagement` — comment sweep + drafted replies | a model call per comment, **bounded per call at `max_tokens: 300` (`engagement.ts:99`) and unbounded in count** — no weekly limit exists; `allowance.ts:25` meters `'image' \| 'video'` and nothing else | real, and second-order |

### MY RECOMMENDATION

**Move `arm_auto_publish` into entry. Keep `engagement` and `ads` premium. And
change the copy whichever way you rule, because the copy is wrong under both
answers.**

**1. Arming is the cheapest capability in the map that crosses the line the
positioning is built on.** The test is §2.2:318 — *"A tool is a place you go. An
employee comes to you."* **A queue you must visit to click is a place you go.**
Entry today buys a very good drafting tool that waits for its owner to come to
it, and the hero above the price says `Come hire Player2.` Arming is the one
capability that makes the product act while the owner is on the floor, and it
costs us a boolean on a cron that already runs. **Nothing else in `tier.ts:47-56`
has that ratio.**

**2. I agree with the chief on engagement staying premium, and I would not treat
that as a compromise — I think it is right on its own.** §2.2 ranks the four
employee properties **as the buyer experiences them**, and answering comments is
not among them. The property that sells is *"it hands back finished work."*
Meanwhile engagement is the one unbounded per-unit cost in the OS with no
allowance row, sitting against a price §4.1 grades **UNRESOLVED until item 24
lands**. `allowance.ts:32-34` records Phin closing exactly this shape of leak
once — *"8 videos a week was $48–69/month of generation against $59 of revenue —
underwater on a heavy user, which is not a plan, it is a leak."* **Putting an
uncapped meter into entry is that decision run backwards.**

**3. WHERE I DISAGREE WITH THE CHIEF, and it is the part I most want on the
record.** The recommendation is framed as though ruling the tier closes the
divergence. **It does not.** Even with arming moved to entry, `content.ts:176`
and `:237` still describe **ads** beside a $59 price, and `content.ts:241` and
`tour-copy.ts:138` still describe **engagement**. Four of the six strings in F5
survive the ruling untouched. **The tier map is not what is wrong. The copy is
wrong, and it will still be wrong on Monday if this is ruled and nothing else
happens.** A tier ruling that is treated as a copy fix is how a divergence
outlives the shift that found it.

**4. THE STRONGEST OBJECTION TO MY OWN RECOMMENDATION, and it is real.** Arming
is the highest-blast-radius capability in the product: it puts content on a
stranger's real accounts with no human between the model and the post.
Restricting it to the $299 tier is a plausible **safety** posture, not merely a
packaging one — the population is smaller, hand-picked, and closer to Phin.
Moving it to $59 widens that population and makes `tour-copy.ts:127`
(*"Publishing is the one step Player2 does not take on its own"*) false for
**every** paying customer instead of some. **I still recommend the move**,
because that sentence is false today and is F6 either way, and because the
arming click is itself a consent event. **But if Phin's reason for holding
arming at `os` is blast radius rather than packaging, that is a better reason
than the one in the map today, and it should be written down as such** — the
comment at `tier.ts:31-35` presents the split as a price list, not as a safety
boundary, and those two rationales want different words on the page.

**5. What I am not recommending.** I am not proposing a price change, a third
tier, or a number. §4.1 grades entry pricing **UNRESOLVED until item 24's
OBSERVED per-unit ledger**, and moving one capability across a boundary does not
resolve it. **This recommendation moves a capability, not a figure.**

---

## 4. RECOMMENDATION 2 — THE PROOF PACK'S PINK BUTTON. FOR PHIN.

**The question: is the proof pack's conversion action the call, or the scan?**

**MY ANSWER: THE CALL. `/proof` IS ITS OWN ROOM — AND THE RULING IS WORTHLESS
WITHOUT THE MECHANISM IN POINT 4.**

**The facts.** `proof-document.tsx:571-588` ships a pink `Book a 30-minute call`
resolving to `bookingUrl(leadId)` → `proof-copy.ts:8`,
`https://calendly.com/pambianchipm/30min`. Law 9 (`docs/org/frontdoor.md:191-192`)
pins **every pink control on a front-door route to one destination**, and Phin's
option A makes that destination `/scan`. Read as a front-door route, `/proof`
breaches it.

**1. The reader of a proof pack is not a stranger, and `/scan` is an instrument
for strangers.** `/scan`'s job, in its own live words, is *"Paste your website…
Player2 reads it… Then it writes your first three posts."* **The proof pack is
that output, already produced, personalised, delivered, with the reader's own
pages cited as receipts** (`proof-document.tsx:320`, `:539-541`). Pointing its
pink at `/scan` asks a reader to go and generate the document they are currently
holding. **That is not a conversion action. It is a loop**, and it is the one
place on our surfaces where sending someone to the scan takes something away
from them rather than giving it.

**2. Law 9 scopes itself, and the doctrine already thinks in rooms.** The
heading is *"Pink is scoped by room"* (`frontdoor.md:180`), and the law splits
console from front door on exactly this reasoning. The pin's stated purpose is
that **a page a campaign lands on has one ask.** No campaign lands on `/proof`:
it needs a `lead` id and a `token` (`proof/page.tsx:39-49`) and it is minted by
an operator action behind `requireOperator` (`tier.ts` proof_pack note). **A
token-gated document handed to one named person is a third room by the law's own
logic, not an exception to the second.**

**3. And there is nothing else to send them to.** §4.2 settles the employee tier
**WAITLISTED, NOT PRICED**. A qualified lead who reaches the end of a proof pack
and clicks `/scan` gets a waitlist form. **The call is the only action that
matches what we can actually give this reader today** — and `proof-document.tsx:565-569`
already frames it honestly, with no urgency, no scarcity, and an explicit *"If it
is not, we will say so."*

**4. THE OBJECTION THAT ALMOST CHANGED MY ANSWER, AND THE CONDITION I ATTACH.**
`frontdoor.md:209-215` makes the pin **executable** and says why: *"A
hand-maintained list let a violation through green in the file next door on 4
Sep, and that is the coverage class this org has now failed four times."* And
`content.ts:339-345` records the previous exemption on this exact front door —
`"See the console"` survived a banned-word sweep because a shift **sanctioned**
the string rather than turn a suite red. **An exemption with no mechanism to
force it out is the defect it was written around.** So:

> **Ruling `/proof` its own room must ship WITH its own executable pin — every
> pink control on `/proof` resolves to `BOOKING_URL` — and not as a subtraction
> from the `/scan` pin's file list.** A ruling that merely removes `/proof` from
> a sweep leaves the pack's pink unpinned in both directions, which is strictly
> worse than the breach it resolves. **That is a build-org change and I am
> recommending it, not writing it.**

**5. What I would change on `/proof` regardless of the ruling, and it is one
word, not a colour.** The print fallback at `proof-document.tsx:591-593` renders
`p2labs.ai/call` — which I fetched and which resolves (F12.2). That is good work
and it should survive whatever is decided about the button.

---

## 5. WHAT THIS AUDIT DID NOT DO

- It did not gate. This is a DRAFT and a divergence report; the personas have
  not seen it.
- It did not author, propose or edit a string for any live surface. Every
  remedy above is named as the front-door org's or the build org's.
- It did not write to `pambianchipm/clinkworthy`.
- It did not render `/proof`, and five separate results above are weaker for it.
- It did not measure type, colour, contrast, or the hero demo's timing.
- **It did not exercise `POST /api/scan/checkout`**, which is the one
  measurement that would answer the three-shift-old `WAITLIST_ONLY` question.

---

## 6. ADDENDUM — SHIFT 19, 2026-09-04. TWO LIVE CLAIM FINDINGS THIS AUDIT MISSED, FOUND BY RE-READING THE TWO CLOSED COPY FILES AGAINST THE PAGES.

**WHY THIS SECTION EXISTS.** The chief's shift-19 brief closed
`front-door-strings-v1.md` and `front-door-overhaul-v1.md` as superseded and
asked for one thing before they were filed away: *"confirm nothing else in
those two files is a live claim finding that the audit missed."* Two things
were. Both are recommendations to the front-door org. **I did not write, edit
or propose a replacement string for either, and I did not write to
`pambianchipm/clinkworthy`.**

**THE INSTRUMENT, AND WHAT IT CANNOT SEE.** `curl -sSL` against
`https://p2labs.ai/{landing,scan,tour,services}` on 2026-09-04 — all four
returned **HTTP 308 to `www.`, then 200** (the shift-18 read did not follow the
redirect chain and is unaffected; the bodies match). Source read through the
**GitHub contents API** at `clinkworthy` `main@95db0ce` (tree
`da3a0616`). **That API returns file content without line numbers, so the two
findings below cite an export path and the exact string rather than a line I
did not count** — a structural citation I can defend, in place of a number I
would be guessing. `/proof` still never rendered: it needs a lead id and a
token, so this addendum is blind to it exactly as §0 was.

---

### M1 — (a) `Drafts for every channel` IS LIVE ON `/landing`, AND IT IS A STRING BOTH §3.1 AND §6.2 BAR BY NAME.

**Live**, `https://www.p2labs.ai/landing`, step 02 of the HOW band:

> **Write** — *"Drafts for **every channel** — posts, replies, videos, ads —
> waiting in one queue."*

**Source:** `console/app/landing/content.ts`, `HOW.steps[1].body`, at
`main@95db0ce`.

**The bar, quoted from this org's own files.** `position-v2-the-hire.md:465`:
*"**Barred:** 'every channel', 'all the features you'd want', any platform
count, any TikTok or Google Ads logo presented as live. **A logo is a
claim.**"* And §6.2's PROHIBITED column carries `"Every channel"` as its first
entry, on the same row as the completeness claims.

**Is it FALSE or merely WORSE — the class-2 test.** **False.**
`docs/channel-readiness.md` (read this shift at `main`) grades TikTok **SHELL
ONLY** — *"No OAuth, no publish, no metrics, no comments"* — Google Ads **LABEL
ONLY** — *"nothing talks to Google"* — Reddit **BLOCKED on credentials**, and X
**PARTIAL**. Three of the seven rows in the authority's own table cannot receive
a draft that goes anywhere. **The narrow reading that saves it is real and I
will state it rather than hide it:** the sentence is about *drafting*, and
`lib/types.ts:3`'s `Channel` union does include Google Ads, so the generator may
literally emit a draft for a channel we cannot publish to. **That reading does
not rescue the string**, because step 03 immediately below it says *"You click.
Then it ships"* — the page supplies the publish frame itself, two lines down,
and the org already ruled this exact phrase unrecoverable in a buyer's five
seconds rather than arguable.

**WHY THE SHIPPED GUARD CANNOT SEE IT, and this is the finding under the
finding.** `content.ts`'s own comment above `HERO.sub` describes the guard:
*"`lib/__tests__/killed-phrases.test.ts` reads the GRADES OUT OF
`docs/channel-readiness.md` and fails **by channel name** if a below-SHIPPED one
appears in rendered front-door copy — so the doc and the page cannot drift apart
silently."* **A completeness claim names no channel.** `every channel` asserts
all seven rows while matching none of them, so a name-matching sweep is
structurally blind to the one form of the claim that covers every row at once.
**That is also why my own shift-18 sweep missed it:** F8 swept for the channel
*names* — TikTok, X, Reddit, Google Ads — got zero, and recorded the channel
grades as clean. Zero platform names and a completeness claim are the same
result to that instrument.

**Grade: (b) over-claim, live.** **Recommendation, to the front-door org, not a
string from me:** the barred phrase is in a slot whose own code comment
(*"Amendment 3 again: the queue holds posts, replies, videos and ads"*) defends
the **list** and never mentions the quantifier — the quantifier arrived
un-argued. And the guard gap is worth more than the fix: **`killed-phrases`
should carry the completeness phrases as literals** alongside its
name-derived rows, or the next one lands the same way.

---

### M2 — (a) THE HERO SHIPPED WITHOUT THE AVAILABILITY QUALIFIER. §6.2's *"anything implying the employee is available today"* IS LIVE, AND `front-door-strings-v1.md` OPEN 1 IS THE FINDING THAT OUTLIVED ITS FILE.

**Live**, `https://www.p2labs.ai/landing`, the hero block, read 2026-09-04:

> **YOUR NEXT HIRE**
> **Come hire Player2.**
> *Your marketing employee. It writes the week's posts, publishes them to
> Instagram and Facebook, runs your Meta ads, and tells you which ones moved
> units.*

**Source:** `console/app/landing/content.ts`, `HERO.kicker` / `HERO.title` /
`HERO.sub`, at `main@95db0ce`.

**The bar.** `position-v2-the-hire.md` §6.2 PROHIBITED: ***"Anything implying
the employee is available today."*** The sayable form on the same row is
*"Coming: your employee messages you where you already are"* — **no date.**

**What shipped against it.** The kicker is the bare `YOUR NEXT HIRE`. **The
qualifier both gates converged on — `YOUR NEXT HIRE · NOT BUILT YET`, built
from the PHIN-APPROVED words at `waitlist-front-door.md:22` (*"The employee
isn't built yet."*) — is not on the page.** The hero is imperative and present
tense throughout, and **the only availability disclosure on `/landing` is in the
EARLY ACCESS band far below the fold** (*"Player2 is in alpha and we're letting
shops in a few at a time"*). §4.2 settles the employee tier as **WAITLISTED,
NOT PRICED**. So the page opens by telling a stranger to hire a thing that,
by this org's own settled ruling, cannot be hired.

**Is it FALSE or merely WORSE.** **False, and it is not close.** *"Come hire
Player2"* over four present-tense capability clauses is an availability claim,
and `runs your Meta ads` is additionally above the entry tier's entitlement
(`tier.ts:46` — `entry` holds no `ads`; F5 covers that half). **The narrow
defence, stated because it is the strongest one against me:** the entry tier is
`ENTRY_AVAILABLE = true` and — per shift 18's correction of its own brief —
genuinely does publish by hand (`lib/db/scheduled.ts:77-78`). So *some* product
is buyable-in-principle and *does* write and publish. **That defends the two
middle clauses of the sub. It does not defend the H1**, which sells the
employee, which is the waitlisted tier.

**WHAT I DID NOT MEASURE, AND IT IS THE SAME GAP FOR THE FOURTH SHIFT.**
Whether a stranger with a card can complete a purchase in production is
**UNMEASURED**. `waitlist-gate.ts:12` (*"DEFAULT ON. An absent variable means
GATED"*) and `api/scan/checkout/route.ts:37-38` (403 before anything else runs)
say the door is shut, but `WAITLIST_ONLY`'s production value is not readable
from outside, and **the one external probe is a POST to a live payment
endpoint, which is an outward action — declined again this shift**, as in
shift 18. If the gate is ON, the hero's defect is strictly worse than stated
here, not better.

**Grade: (a) breach of a settled prohibition, live.** **Recommendation, to the
front-door org:** the remedy is a kicker-slot qualifier and not a rewrite of
Phin's ruled H1 — Hero A is canon and this finding does not touch it. **What is
mine to say plainly: shift 17 raised this to Phin on 2026-09-04 as *"THE HERO
STILL SAYS THE DOOR IS OPEN"*, the shipped hero took the H1 and left the
qualifier, and my own shift-18 live audit did not re-check it against the
page.** F1 asked whether the employee frame was *outnumbered* and never asked
whether it was *true*. That is the miss, and it is mine.
