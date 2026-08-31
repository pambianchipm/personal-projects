# The Player 2 GTM Org — system design v1

*Chief of staff, 31 Aug 2026. Synthesized from four sources: Dad's notes
(M. Pambianchi, 24 Aug — `source-dad-notes-2026-08-24.md`) and Jess Gunter's
three Spruce Ridge Strategy decks for Breakthrough Energy Fellows
(`sources/extract-marketing101.md`, `sources/extract-brand-positioning.md`,
`sources/extract-product-marketing.md`). Modeled on the Player 2 Boss v2
build org, adapted for work whose output is strategy, artifacts, and
relationships instead of code.*

---

## 0. The one-paragraph version

A persistent GTM boss session runs scheduled shifts against a git ledger
(same boss/backlog/inbox/lock/ops-log discipline as the build org), working
two lanes: **Raise** (Dad's deck skeleton, the financial model, the risk
register, the investor pipeline) and **Market** (Jess's arc: positioning →
KSPs → concepts → objection handling → competitor battle cards → brand
book). Every artifact passes an adversarial gate before Phin sees it — and
the gate's reviewers ARE Jess's objection-handling personas (competitor's
salesperson, salty journalist, skeptical customer, plus a hostile investor).
Claims law applies harder here than anywhere: every number sourced, every
market size bottom-up, no simulated validation ever presented as market
evidence. Nothing outward — an email, an application, a deck sent — ever
moves without Phin's click.

## 1. Why the build-org architecture transfers (and what must change)

What transfers directly:
- **The ledger** (backlog lanes Phin curates / inbox with recommendations /
  lock / ops-log with fan-out disclosure). It made the build org steerable
  and auditable; GTM needs that more, not less, because the artifacts are
  judgment calls.
- **Never self-passed.** Every artifact is gated by an independent
  adversarial reviewer before it is "ready for Phin."
- **Claims law.** "Never print a price checkout can't charge" generalizes to
  "never put a number in a deck that the model can't back, and never put a
  claim in front of an investor that a diligence question can kill."
- **Human gates on outward action.** Publish/spend in the build org =
  send/submit/pitch here. Drafts pile up in a queue; Phin's click moves them.
- **Proposed vs Approved.** The boss pitches new workstreams; Phin approves
  lanes. No self-approval.

What must change (honest adaptations, not copies):
- **No test suite exists for prose.** The mutation-test ethos maps to two
  mechanisms: (a) the **persona gate** — Jess's objection-handling roleplay
  (p.31–34 of the PM deck) run as independent reviewer agents against every
  artifact; (b) the **receipts pass** — every factual claim in an artifact
  carries a source line, every model number traces to a named assumption.
  An artifact "fails the build" when a persona lands an objection the
  artifact can't answer, or a claim has no receipt.
- **"You are not your customer" is a law, not a slide.** (PM deck pothole
  #1.) Agent roleplay finds objections; it NEVER generates validation. The
  org's job is to make Phin's real-human research cheap — interview kits and
  concept cards ready to run — and to mark every untested assumption as
  untested. **NO SIMULATED VALIDATION** may ever be presented as market
  evidence, in any artifact, ever. This is the GTM org's equivalent of the
  pink-button rule: review-failable on sight.
- **Cadence is slower.** Code compounds hourly; strategy artifacts need
  Phin's feedback between iterations. Start at 2 shifts/day (morning: build
  artifacts; evening: incorporate Phin's markup + prep next asks), cron-run
  like the build boss, with fire-on-demand when Phin engages.

## 2. Where it lives

`personal-projects` repo, `gtm/` tree (this `ideas/gtm-org/` folder is the
design + sources; the live org moves to `gtm/` at bootstrap):

```
gtm/
  org/          boss.md · backlog.md · inbox.md · lock.md · ops-log.md
  doctrine/     gtm-doctrine.md (laws below, expanded)
  sources/      the four distillations (immutable reference)
  market/       positioning.md · ksp-funnel.md · concepts/ · objections.md ·
                competitors/ (dossiers + battle cards) · brand-book.md ·
                narrative.md (comms/PR)
  raise/        deck/ (slide drafts) · model/ (assumptions.md + the sheet) ·
                risk-register.md · investors.md (pipeline) ·
                accelerators.md · outbox/ (drafts awaiting Phin's click)
```

Separate repo from clinkworthy on purpose: the build org and GTM org never
contend for a lock, a lane, or a review budget. They share one chief of
staff (this chat) and one owner (Phin). The GTM boss gets read access to
clinkworthy's docs (strategy.md, brand-doctrine.md, competitor-holo.md,
research-smm-landscape.md, the claims engine's live numbers) — the product
IS the evidence for half the deck.

## 3. The team

One **GTM boss** (persistent session, cron shifts — the proven shape; more
persistent agents would add coordination cost without judgment). Specialists
exist as the boss's spawned reviewers and as gate personas:

| Persona | Source | Gates |
|---|---|---|
| **Hostile investor** | Dad's deck skeleton + diligence norms | every Raise artifact: kills unsourced numbers, hand-wavy TAM, missing risks |
| **Competitor's salesperson** | PM deck p.32 | positioning, battle cards, deck's "why we're better" slide |
| **Salty journalist** | PM deck p.32 | narrative, comms, anything public-facing |
| **Skeptical customer (SMB owner)** | PM deck p.32 | concepts, KSPs, promise — "would a restaurant owner care?" |
| **Chief of staff** | this chat | merges gate-passes, holds outward/money items for Phin, runs the budget (3 rounds, fresh eyes at 3, stop-rules) |

Review budget carries over verbatim: 3 rounds default, round 3 = fresh
verifier, early-stop on disclosed-floor residuals, capped loops get a retro.

## 4. The two lanes

### Lane A — Raise (Dad's list, operationalized)

1. **Positioning prerequisite** — the deck's slides 2 ("problem"), 5 ("value
   chain"), and 6 ("why better") are positioning outputs; Lane B item 1
   feeds them. Nothing blocks though (Jess, p.13: don't wait for certainty).
2. **The deck** — Dad's 11 slides, each drafted as its own artifact with its
   own receipts, gated by the hostile investor before assembly:
   hook vignette · problem · how it works · market size (BOTTOM-UP: SMBs ×
   segment × willingness-to-pay; the 95/5 and day-one-list stats from
   Marketing 101 are citable color) · value chain today + our position ·
   why better (feeds from battle cards) · dev timeline (the build org's
   shipped history is literally this slide's receipt) · financials + exit ·
   ask + use of funds · team · risks + mitigations (feeds from objection
   handling — the loop below).
3. **Financial model** — assumptions sheet first (every number named and
   sourced: $59/$299 pricing is live in `lib/pricing.ts`; generation costs
   measured; the fair-use math from 5c), then the sheet. The model and deck
   must never disagree — one truth table, the org's oldest law.
4. **Risk register** — Dad's item, seeded by objection-handling output.
   Every risk has an owner and a mitigation or an honest "unmitigated."
5. **Investor pipeline** — `investors.md` as a staged table (target →
   researched → warm path → drafted → SENT(Phin) → meeting → …). Seeds:
   HBS Angels (AI), NYU EFL digital tech track, Jess Gunter, plus researched
   expansion. Every outreach draft sits in `raise/outbox/` until Phin sends.
6. **Accelerators** — Cornell Tech + NYU Endless Frontier Labs (+ researched
   others): requirements, deadlines, draft applications. Submission = Phin.
7. **Legal + hiring homework** — Dad's remaining items prepped as briefs
   (questions for the lawyer; the who-to-hire-when map from Marketing 101's
   stage table, p.20 — which argues Player 2 needs NO marketing hire soon:
   brand/PMM/comms are founder work, and the product itself does the rest.
   That's not just staffing advice, it's a deck line: the company whose
   product replaces the marketing hire doesn't need one either).

### Lane B — Market (Jess's arc, pointed at Player 2 itself)

1. **Positioning framework v1** — the five elements (north star / frame of
   reference / promise / 3–5 key benefits / RTBs), validated against the two
   backdrops (target audience resonance; better-or-unique vs alternatives).
   Draft candidates for the frame of reference ("the mental folder"):
   AI marketing platform? Marketing employee you subscribe to? Growth OS for
   small business? — "go with the most likely option" and iterate.
   Every RTB must be a receipt the product can already show.
2. **KSP funnel** — laundry list (Jess's five brainstorm prompts, run by the
   boss AND answered separately by Phin — the deck says capture separately,
   then share) → cluster → 7–10 → concept-test → final 3–5, ordered.
3. **Positioning concepts** — 3–5 one-page coded concepts per the exact
   template (bland font, random non-grade code letters, context line, core
   promise, ~3 KSPs with proof, endline, 1–5 scale) + the interview kit
   (grounding script, markup instructions, feature-list tables). Built FOR
   Phin to run with real SMB owners — the leads pipeline is the recruit
   pool. The org drafts; humans validate.
4. **Objection handling — EARLY** (the deck's own advice: while the product
   is still forming). Three personas + hostile investor, then
   Assess/Answer/Address. Output forks three ways: risk register (Lane A),
   product fixes (filed to the BUILD org's Proposed lane — the two orgs
   trade), and answer bank (comms prep).
5. **Competitor dossiers + battle cards** — the three competitor types cut
   sharply for Player 2: **Inaction** ("we just post sometimes when we
   remember") is the real #1 competitor for SMBs; **Build** = DIY with
   Canva + ChatGPT + a nephew; **Buy** = Holo (teardown already exists in
   clinkworthy docs — imported day one) + the SMM-landscape recon. Dossier +
   battle card per the template (why we win / why they win / landmines).
6. **MVP brand book** — mostly EXISTS: DESIGN.md + brand-doctrine.md are a
   brand book in engineer's clothing (tokens, type, voice, glossary). The
   work is assembly + the foundations page (positioning/mission/values from
   item 1), per the 6-part template with the MVP three highlighted. Note
   Jess's IP footnote: human involvement matters for brand IP — flag for the
   lawyer brief.
7. **Narrative + comms prep** — the founder story, the "day one list"
   thesis applied to Player 2's own category, press-ready answers from the
   objection bank. (Marketing 101, p.22: brand, PMM, comms are the three
   founder-attention areas — Lane B is exactly those three.)

### The loop that makes it one org, not two lists

Positioning feeds the deck's problem/why-better slides. Objection handling
feeds the risk slide AND the build backlog. Battle cards feed "why better."
The build org's shipped history feeds the timeline slide. The claims engine's
live numbers feed the traction story. Concept-test results (real ones, from
Phin's interviews) feed back into positioning v2. Nothing is written twice.

## 5. Doctrine (the laws, short form — expands into gtm-doctrine.md)

1. **No simulated validation.** Roleplay finds objections; only real humans
   validate. Untested assumptions are labeled untested, everywhere, always.
2. **Receipts or it doesn't ship.** Every factual claim carries a source;
   every model number traces to a named assumption; market size is built
   bottom-up before any top-down number is allowed as color.
3. **Nothing outward without Phin.** Send/submit/pitch/post = his click.
   Drafts queue in outbox with a recommendation, like the inbox pattern.
4. **One truth table.** Deck, model, site, and battle cards may never state
   different numbers for the same fact. Shared facts live in one file
   (`raise/model/assumptions.md`) that everything else quotes.
5. **The frame-of-reference rule.** Every artifact must say what Player 2 IS
   within the first breath (the Gemini-example failure: an artifact that
   never says what the product is fails the gate on sight).
6. **Not self-passed.** Same as home.
7. **Confidential by default.** Nothing from `raise/` is ever quoted into
   client-facing surfaces or the clinkworthy repo.

## 6. Cadence and supervision

- **GTM boss trigger:** cron, 2×/day to start (e.g. 14:00 + 22:00 UTC),
  fire-on-demand when Phin engages. Same lock protocol; shifts end cheaply
  when blocked on Phin's markup.
- **Chief of staff (this chat):** same role as the build org — gate on
  artifact-ready, merge passes to the branch, relay pulses, hold
  outward/money for Phin. One pulse routine can cover both orgs.
- **Weekly milestone review:** unlike code, GTM has calendar deadlines
  (accelerator dates, investor timing). backlog.md carries a DEADLINES
  section the boss triages first every shift.

## 7. Bootstrap plan (first five shifts, once Phin approves)

1. **Shift 1:** `gtm/` tree + org files + doctrine, seeded from this design.
   Positioning framework v1 (candidates for all five elements, receipts
   attached, gaps named). Gate: skeptical customer + competitor salesperson.
2. **Shift 2:** KSP laundry list (boss's half) + the five brainstorm prompts
   packaged for Phin (his half, captured separately per the method) +
   objection-handling round 1 (all four personas) → risk register v1.
3. **Shift 3:** Competitor dossiers (inaction / DIY / Holo) + battle cards.
4. **Shift 4:** Deck skeleton — all 11 slides as stubs with their receipt
   requirements named (what evidence each slide still needs), the 3–4 that
   can be fully drafted, drafted. Hostile-investor gate.
5. **Shift 5:** Concept cards (3–5, coded) + interview kit, ready for real
   SMB conversations. Model assumptions sheet started from live pricing.

## 8. Open decisions for Phin

1. **Cadence** — 2×/day cron as recommended, or fire-on-demand only to start?
2. **Raise framing** — is this a pre-seed raise (Dad's milestone question:
   how much, for what milestones)? The model can draft scenarios, but the
   ambition level is yours.
3. **Accelerator intent** — actually applying to Cornell Tech / NYU EFL this
   cycle? Deadlines drive Lane A's ordering if yes.
4. **Jess Gunter** — she's on Dad's contact list AND the author of the org's
   playbooks. Recommend: once positioning v1 + concepts exist (in her own
   framework's language), that's the natural artifact to bring her for
   feedback. Your call on timing and the ask.
5. **Concept-testing pool** — the scanned-leads pipeline as the recruit pool
   for real interviews, or a separate list?
