# Player 2 — pitch deck skeleton (Dad's 11 slides, as receipt-stubs)

CONFIDENTIAL — Lane A raise artifact (law 8).
STATUS: GATED (round 3) — hostile investor: FAIL r1 (6 edits: end-to-end
overclaim, rowless figure, A9 non-ceiling, provenance placement,
unnamed dogfooding, missing vendor-COGS risk), FAIL r2 narrow (3 edits:
slide-7 residual, unnamed receipt, uncited inbox flag), PASS r3 by a
FRESH verifier with every fix checked against the clone and a clean
fresh-overclaim scan. All counts recount-verified at head 871454c.
Verdict: `gtm/org/reviews/2026-09-02-deck-skeleton-assumptions-hostile-
investor.md`. Awaiting chief's confirm. Gated WITH
`gtm/raise/model/assumptions.md`.
OWNER: GTM boss · shift 5, 2026-09-02
MANDATE: backlog item 4, BUMPED ahead by Phin 1 Sep ("yeah bump the deck
ahead!") — all 11 slides as stubs naming their receipt requirements;
fully draft those whose receipts exist (how it works, dev timeline, team,
unit economics); honest stubs for the rest. Slide list is Dad's, verbatim
order (`gtm/sources/source-dad-notes-2026-08-24.md`).
NUMBERS RULE (law 4): every figure quotes an assumptions.md row by ID.
A number without a row ID does not belong on a slide.

**First breath:** Player 2 is an AI marketing employee for small
businesses. This skeleton is the deck's load-bearing frame: what each
slide must prove, with what evidence, and how much of it exists today.
DRAFTED = content below is receipted and usable now. STUB = the slide
states its receipt requirements and waits; nothing invented to fill it.

---

## Slide 1 — Opening example / hook · STUB

**Must prove:** nothing — must make an investor lean in, in one beat.
**Receipt requirements:** a TRUE vignette. Candidates on file: (a) Dad's
walkthrough — the system ran on a real product and "came up with the top
5 segments and use cases" (source-dad-notes); (b) the free-scan moment —
a shop's own three posts, in its voice, before any card; (c) the Friday
digest that refuses to invent a good week. Endline-pool language (KSP
funnel §7) may inspire the beat but ships nowhere without its gates.
**Blocked on:** concept research signal (which beat lands) + Phin's
taste. Do not draft by committee.

## Slide 2 — The problem · DRAFTED (resonance untested, facts sourced)

The owner of a visual small business is the marketer, and the job never
closes: A14 — 88% of TikTok-active owners report posting burnout (vendor
survey, ceiling), 42% of SMBs have under an hour a day for ALL marketing.
The landscape report's core finding: "the job's defining texture is the
impossibility of closing the loop" — engagement is the step that never
batches. They can't hire their way out: the services band runs A11
$500–2,000/mo, and the founding thesis targets shops "too small to hire
anyone for marketing" (source-dad-notes). `UNTESTED`: that owners
articulate the pain this way — interviews (item 5) test the words, the
stats stand either way.

## Slide 3 — How it works · DRAFTED

One loop, five verbs, every one receipted (positioning.md §5; truth-map
§2): it PLANS a week from a goal (conductor chat; by construction no
publish tool — "the agent's reach ends at drafts"), WRITES posts,
replies, videos, ads into one approval queue, POSTS on schedule only
through the owner's click or standing Auto-post approval ("the conductor
can never flip auto_post"), READS results per-post into the next batch,
and REPORTS honestly — a nightly claims engine with statistical floors
that persists what it REFUSED to claim, with reasons. Safety model in
one line: nothing posts or spends without the owner's click. Two
receipts, precisely scoped (gate-corrected): the system RUNS IN
PRODUCTION on the founder's own product, Clinkworthy — named record: the
hourly production cron (`console/vercel.json` → `/api/metrics/refresh`)
driving the nightly stages (claims engine, Pulse, optimizers) and the
immutable monthly snapshots (`claims.ts`) — that is the end-to-end
receipt; and it was externally walked through on 24
Aug, where it "did all the marketing analytics, and came up with the top
5 segments and use cases" (Dad's notes — a planning/analytics receipt,
not an end-to-end one). Diagram: the loop, with the owner's click drawn
as the only gate to the outside world.

## Slide 4 — How big the market is · STUB (deliberately)

**Must prove:** the bottom-up arithmetic BEFORE any top-down color
(law 2 — no top-down figure admitted first).
**Receipt requirements, named:** (i) a sourced count of US local visual
SMBs in target verticals (salons, gyms/studios, restaurants/cafes,
boutiques — Census/NAICS class counts); (ii) a sourced or argued
serviceable fraction (has social presence, no marketing hire); (iii)
ARPU from A1/A2 with a stated tier mix; (iv) THEN any analyst TAM as
color only. **Blocked on:** one research shift for (i)–(ii). No number
appears on this slide until then.

## Slide 5 — Value chain today, and where we fit · STUB (structure drafted)

**Must prove:** who gets paid for SMB marketing today and which dollars
Player 2 redirects. Structure on file (positioning.md §7): inaction (the
real #1) → DIY (Canva + ChatGPT + a nephew) → tool band (A15, ~$12–48/mo asset
factories) → freelancer band (A12, directional) → agency band (A11).
Player 2's seat: does the WORK of the service bands at software cost —
A2 $299 vs A11 $500–2,000; tool band A15 ~$12–48/mo (DIRECTIONAL,
spot-check flag carried — the slide says so, like A12). **Receipt
requirements:** every band price graded on-slide (A11 VERIFIED w/
caveat, A12 + A15 DIRECTIONAL). `UNTESTED`: the framing.

## Slide 6 — Why we're better · HONEST STUB

**Must prove:** better-or-unique vs each alternative class, in evidence.
**What exists:** the claims-engine differentiation (no competitor in the
teardown publishes statistically-gated results, and none inverts the
silent-failure complaint); the M-list (KSP funnel §7) is the candidate
language. **Blocked on:** concept research (which claims OWNERS repeat)
and item 3's battle cards (dossier-grade receipts per competitor).
Writing this slide before those lands is exactly the overclaim the gate
exists to catch. Note for the draft-when-ready: lead with the fused
trust cluster candidate (M2+M3+M9) — flagged at the merge gate as the
hardest shape to counter.

## Slide 7 — Development timeline · DRAFTED

**Provenance, on-slide (gate-required, and the stronger pitch):** the
build record below is the output of an AI build organization — agent
sessions shipping through gated adversarial review — designed, operated,
and merged by the founder, running on his own product (Clinkworthy) in
production. The velocity number and its provenance travel together.

All dates are repository receipts, not recollection:
- **Aug 19** — operator MCP connector session doc (the console's second
  door) — `docs/player2-session-2026-08-19.md`.
- **Aug 24** — productization v1.0 plan (accounts→OAuth→billing→two-
  persona console→landing, five phases); extend-video tool shipped same
  day; Dad's external walkthrough — a planning/analytics receipt (his
  words: "did all the marketing analytics… top 5 segments and use
  cases"), same scoping as slide 3; the end-to-end anchor is the
  production record, not this walkthrough (`docs/productization-v1.md`;
  `source-dad-notes-2026-08-24.md`).
- **Aug 25** — the build org bootstraps (dated ops-log first entry);
  same day: the statistics engine ships to branch (pure stats: XmR,
  Wheeler rules, Mann–Whitney + FDR; 40 unit tests; PR #8 OPEN that day
  — verify the merge date before print).
- **Aug 25 → Sep 1, eight days** — 103 logged build shifts; 55 gated
  adversarial review verdicts filed in `docs/reviews/` (21 on Aug 28
  alone); merged-PR record reaches PR #61 (`docs/org/ops-log.md`,
  `docs/reviews/` — every date auditable).
- **Sep 1** — $59 entry tier LIVE on the landing (PR #56, A1); weekly-
  ritual build (11a) approved to start alongside a console redesign.
**The slide's real claim:** velocity WITH a review gate — the org ships
through adversarial verdicts, not around them, and the whole record is
open to diligence on request.
`COUNT note: 103 shifts / 55 verdicts / 21-on-Aug-28 recounted PASS at
head 871454c by the hostile-investor gate (2 Sep). The repo moves —
recount before print regardless.`

## Slide 8 — Financial projections & ROI/exit · STUB

**Must prove:** a P&L shape from stated drivers, not hope.
**What exists:** the COGS floor is real — A4–A10 give per-tier
generation costs and the entry tier's margin drag (A9, RESTORED 2 Sep
evening after a refused mis-amendment: 42–64% at today's real 720p
price of $0.14/sec; video-only death at 2.43×; the 480p tier is a
priced lever), which is an honest, unusual thing to show an investor
and we should. The scenario model now exists
(`gtm/raise/model/model-v1.md`, rebuilt at the real price). **Blocked
on:** COHORT DATA, not the model file — the drivers (tier mix, churn,
CAC channel) are scenario bands until customers exist to measure. No projection appears
before the model does; the exit row of this slide waits on comparables
research. **Anti-claim:** zero revenue today, zero customers — the deck
says so plainly (the truth map's discipline extends here).

## Slide 9 — Funding ask & use of funds · STUB (the question is the content)

**Must prove:** an amount, its milestones, its runway math.
**Blocked on Phin (bootstrap decision 2), and this stub IS the ask to
him:** the milestone set the roadmap implies is (1) productization
Phases 1–5 live (accounts, OAuth, billing, client suite, landing), (2)
first cohort of paying non-founder clients on A1/A2 pricing, (3) the
attribution read → results-in-owner-terms claimable, (4) ERA/Techstars
outcomes (A13: $150k/$220k checks are the sourced anchors for what
institutional first money looks like at this stage; when drafted, carry
accelerators.md's caveat — the Techstars $200k SAFE is uncapped, so true
dilution exceeds the stated 5%). **The question, put
directly: Phin — how much, against which of those milestones, and what
runway?** Recommendation shape (strategist judgment, no receipt, labeled
as such): an accelerator-check-to-small-pre-seed range anchored between
A13's real numbers and a solo-founder burn — argued properly ONLY once
he states target runway and whether he draws salary. The slide ships
with his answer, not before.

## Slide 10 — Team · DRAFTED (thin by honest necessity)

**Phin Pambianchi — founder-operator.** The receipted claim: conceived,
built, and operates the entire system — product, infrastructure, and the
AI build organization that ships it through gated adversarial review
(the Aug 19 → Sep 1 record on slide 7 is his). Runs the operator console
in production today on his own product, Clinkworthy — dogfooding stated
plainly, not discovered in Q&A. **Advisor (informal): Michael
Pambianchi** — the deck's own 11-slide structure and founding GTM notes
are his (source doc on file). **Named relationship (not an advisor
claim): Jess Gunter** (Spruce Ridge Strategy) — the org's positioning
method is built on her frameworks; Dad's notes list her under "people to
talk to"; any stronger wording waits on Phin actually talking to her.
**GAPS FOR PHIN:** bio lines (background, credentials) are his to state
— nothing invented here; solo-founder risk is named on slide 11, not
hidden here.

## Slide 11 — Risks & mitigations · STUB (seeded, forks from objection round)

Seed list, each with its receipt: (1) "employee" framing carries legal/
expectational exposure — lawyer brief pending (positioning.md §8.3;
"never" absolute already barred). (2) Platform dependence — Meta app
review required and directed to go in first (productization-v1, 24
Aug); SUBMISSION UNVERIFIED — no submission receipt in corpus (R2, law-4
paired wording); IG/TikTok signals secondhand pending API access
(pulse.ts's own admission). (3) No demand validation — zero interviews,
zero customers; mitigations are the concept-card pipeline and the free
scan (positioning.md §8.1). (4) Unit economics at entry tier — A9's
video-only band is NOT a ceiling (entry images uncapped; A10's tripwire
is full-OS only); honest mitigation today is TIER MIX ONLY — an
entry-tier tripwire is undecided, question to Phin in the inbox.
(4b) AI-vendor dependence, price AND terms, two vendors — the COGS
floor (A4, A5, A7, A7b, A9) rests on xAI's published price ($0.14/sec
720p, unchanged across two dated reads; the intervening "reprice" was a
read error, caught by the chief and retracted — snapshot v2 holds the
raw-fetch record), with TERMS (commercial-use/IP of output,
termination, revocation) unexamined; the reasoning layer runs on a
second vendor (Anthropic), previously in no risk row (R5, law-4 paired
wording). Platform-dependence (risk 2) covers neither. (5) Solo
founder — mitigation is the demonstrated build-org leverage (slide 7)
and hiring plan (Dad's "who he will need to hire, when" — unanswered).
(6) Competitive response — incumbents can copy features; the argued moat
is outcome memory + the honesty machinery (UNTESTED as a moat).
**Full version now exists: this slide quotes
`gtm/raise/risk-register.md` (R1–R13, built from this seed + the
four-persona objection round + the investor gate's diligence scan, 2
Sep) — law 4: slide and register may not disagree. The objection bank
(`gtm/market/objection-bank.md`) holds the answers ledger.** *(Slide upgraded STUB → DRAFTED-BY-REFERENCE at the
objection round; coverage ledger below is superseded on this point.)*

---

## Coverage ledger

DRAFTED: 2 (problem), 3 (how it works), 7 (dev timeline), 10 (team) — 
plus 5's structure and 11's seed. STUBS with named receipts: 1, 4, 5, 6,
8, 9, 11. Nothing outward without Phin (law 3): this file is internal
scaffolding; no slide ships anywhere in any form until PHIN-APPROVED.
