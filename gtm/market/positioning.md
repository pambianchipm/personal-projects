# Player 2 — positioning framework v1

STATUS: PHIN-APPROVED (31 Aug, via chat: "yes to B" — frame of reference B
adopted as working canon; every UNTESTED label stands until real interviews;
concept cards still test A vs B as territories)
OWNER: GTM boss · shift 1, 2026-08-31
GATE: skeptical SMB owner + competitor's salesperson — two independent
spawned reviewers, both PASS-WITH-NOTES (round 1); all nine required edits
applied same shift. Verdicts:
`gtm/org/reviews/2026-08-31-positioning-v1-smb-owner.md`,
`gtm/org/reviews/2026-08-31-positioning-v1-competitor-salesperson.md`.
Chief confirms GATED → READY-FOR-PHIN.
STANDING NOTE FROM THE GATE: benefit 3's "statistically honest reporting"
must be reworked into owner language before ANY external surface.
FRAMEWORK: Jess Gunter, Spruce Ridge Strategy — five elements against two
backdrops (`gtm/sources/extract-brand-positioning.md`, p8–9)

**First breath (frame-of-reference rule):** Player 2 is an AI marketing
employee for small businesses — a subscription service that plans, writes,
posts, replies, and optimizes a shop's marketing, with every post and every
dollar gated on the owner's click.

**Validation provenance, up front (doctrine law 1):** No real SMB owner has
seen or reacted to any of this. Every audience-resonance claim below is
marked `UNTESTED`. What IS sourced: what the product does (receipts from the
clinkworthy repo, read 31 Aug), what the market pays (the SMM landscape
report's verification-graded stats), and what competitors lack (the Holo
teardown). Resonance gets tested by Phin's interviews (backlog item 5's
concept cards), never by this document.

---

## 1. Brand north star

*"The central, motivating idea you stand for" — Volvo = safety.*

**Recommended: Player 2 = backup.** The name is the idea: the owner has been
playing a two-player game alone, and the second player just picked up the
controller. The *candidate* human motivator is relief from the always-on
burden — `UNTESTED`: owners may want growth ("chairs filled") more than
relief ("phone down"); the burden below is receipted, the motivator is not.
A first-order interview question.

Receipts for the burden being real (not for the message resonating):
- The SMM landscape report's emotional-core finding: "the job's defining
  texture is the impossibility of closing the loop."
  (`clinkworthy/docs/research-smm-landscape.md`, one-paragraph conclusion.
  The same passage offers a candidate message — "you can put the phone down
  on Saturday" — which is a synthesized resonance *prediction*, not
  evidence; it lives in §9 as a thing to test, not here as a receipt.)
- 88% of owners on TikTok report posting burnout (Adobe Express, n=433 —
  vendor survey, treat as ceiling; flagged as such in the source's own
  editor's notes). 42% of SMBs have <1 hr/day for ALL marketing (Constant
  Contact 2025). Engagement is "the step that never batches." (same doc, §1–2)

Candidates considered and held as alternates:
- **"Close the loop"** — truer to the mechanism (plan→write→post→learn), but
  it names the product's virtue, not the customer's motivator.
- **"Marketing off your plate"** — pure relief, but generic; any agency says it.

`UNTESTED`: whether "backup / second player" lands with owners as relief or
reads as gaming jargon to a 52-year-old salon owner. Interview question, not
a debate.

## 2. Company frame of reference

*"The mental folder where your customers will put you."*

Three candidates argued (backlog item 1 names all three):

| Candidate | For | Against |
|---|---|---|
| **A. "AI marketing platform"** | The folder that already exists in buyers' heads; zero explanation needed | Crowded folder; anchors price to the ~$20–48/mo list tool band (A15, **synced shift 12** — was ~$12–48 until the competitor gate found $12 is Holo's promo column, not its list floor; Holo's position — `competitor-holo.md` pricing table; third-party-sourced, spot-check before any external use). $299 reads 6× too expensive in this folder |
| **B. "The marketing employee you subscribe to"** | Matches what it does (done-for-you, not do-it-yourself); anchors to the hire/services band — among SMBs that pay for social at all the dominant band is $500–2,000/mo (Clutch 2025, VERIFIED, with the source's own sampling caveat); entry freelancer packages run roughly $300–1,500/mo (landscape report, directional/unverified — the report itself also cites "$300–500" elsewhere; treat as a range, not a fact). $299 reads cheap in this folder. Matches Dad's founding framing: "replaces the need to hire an ad agency or marketing company" (`gtm/sources/source-dad-notes-2026-08-24.md`) | "Employee" invites accountability expectations a product can't hold (who do I yell at?); possibly a legal/claims exposure — flag for the lawyer brief. New folder = explanation cost |
| **C. "Growth OS for small business"** | Matches the shipped landing's "marketing runtime/OS" language | Founder-speak. An SMB owner does not shop for an operating system. Likely fails the five-second test |

**ADOPTED (Phin, 31 Aug): B, worded as "an AI marketing employee for small businesses."**
The decisive argument is the price anchor: the folder decides whether $299/mo
is outrageous (vs tools) or a bargain (vs the services band it undercuts).
Per Jess p10: "go with the most likely option" and iterate — the deck's own
worked example is Amazon's frame of reference evolving through four stages,
online bookstore → planetary utility (`extract-brand-positioning.md`, p11–12).

`UNTESTED`: which folder owners actually reach for, and whether "employee"
raises trust or suspicion. This is exactly what the coded concept cards
(backlog item 5) are for — test A vs B as separate territories.

## 3. Brand promise

*One sentence that captures the core promise.*

**Recommended (already shipped as canon):** "Marketing that runs while you
run the shop." — the landing hero, marked canon in code
(`clinkworthy/console/app/landing/content.ts` §4.2 comment: "Canon. Do not
rewrite."). Consistency law (Marketing 101 p4: "build brand equity through
repetition") argues for keeping the line the product already ships, not
coining a rival.

Long form where one sentence gets more room: "Player 2 plans, writes, posts,
and learns for your shop — and nothing goes out without your click."

`UNTESTED`: resonance. What IS verified: every clause is deliverable today
(receipts in §5).

## 4. Key benefits (3–5, ordered — order approximates airtime, PM deck p28)

1. **It does the marketing, not just the drafts.** Plans a week from a goal,
   writes posts/replies/videos/ads, publishes on schedule, reads results.
   The full loop — vs. asset factories that hand you a pile of creatives
   ("Holo makes assets; Player2 runs marketing" — `competitor-holo.md` BLUF).
   `UNTESTED` resonance.
2. **Nothing posts or spends without your click.** The safety model, stated
   in one line on the landing page and enforced in code. And the click is
   not a per-post chore: the owner can approve in advance (the Calendar's
   Auto-post toggle — `auto-publish.ts`), which is how "your click" and
   "put the phone down" coexist. `UNTESTED` whether owners hear this as
   safety or as "so what's it doing for me, then."
3. **It gets smarter about YOUR shop.** Every post is its own experiment;
   winners get budget, losers get cut; monthly reports only state claims the
   statistics survive. `UNTESTED` — and the gate confirmed the wording risk:
   "statistically honest reporting" is engineer catnip, and a competitor can
   spin it as "their reports admit failure." REWORK INTO OWNER LANGUAGE
   before any external surface (candidate direction: "it tells you what
   actually worked, and won't pretend when nothing did"). The honesty
   mechanism itself is likely investor-resonant (Lane A), owner-resonance
   unproven.
4. **A marketing employee's coverage at a fraction of a hire.** $299/mo
   founding rate against a $500–2,000/mo services band (Clutch 2025,
   VERIFIED w/ caveat) and entry freelancer packages of roughly $300–1,500
   (directional, unverified — see §2). `UNTESTED` (price framing, not price
   fact). "Coverage" itself flagged by the gate as insurance-speak — owner
   wording candidate: "does what a $1,000-a-month freelancer does, for $299."
5. **Proof before payment.** The free scan reads your public pages and
   writes three posts in your voice before any card. `UNTESTED`.

## 5. Proof points — RTBs (the fact base; every one a receipt the product
already shows)

| RTB | Receipt (read 31 Aug 2026) |
|---|---|
| Plans/writes posts, replies, videos, ads into one approval queue | `console/app/landing/content.ts` HOW steps — file header: "every capability line below is backable in code TODAY," with claims the product could NOT back (product pages, per-SKU) explicitly amended OUT. Generation/optimizer surface in `console/lib/`: `organic-optimizer.ts`, `ad-optimizer.ts`, `engagement-draft.ts`, `xai-video.ts`, `captions.ts` |
| Publish/spend gated on the owner | `console/lib/auto-publish.ts` header: auto-post only for slots "Phin explicitly approved via the Calendar's Auto-post toggle… the conductor can never flip auto_post, only Phin's UI can." Landing PRINCIPLE: "Nothing spends or posts without your click." |
| Per-post measurement feeding the next batch | landing Optimize column amendment ("per-POST measurement… post_metrics feeds the next batch"); `lib/trends.ts` + `lib/claims.ts` |
| Statistically honest reporting | `console/lib/claims.ts`: nightly claims engine with registry whitelist, n floors, rank test + FDR correction, max-2 published claims, suppressed claims persisted with reasons, immutable monthly snapshots. The product refuses to overclaim its own results — none of the competitors examined in the teardown does this |
| Pricing: $59 entry (LIVE on the landing since 1 Sep — PR #56, Phin's explicit ruling) / $299/mo founding | `console/lib/pricing.ts` — single source of truth for both figures, cents canonical. Availability lives beside the price: `ENTRY_AVAILABLE = true` in `console/app/landing/content.ts` L56 (re-verified 1 Sep), pairing asserted by tests (`lib/__tests__/landing-content.test.ts`). *(Fact amended 1 Sep, boss shift 3: was "not yet open"/`false` when this framework gated 31 Aug.)* |
| Free scan: public pages in, three sample posts out, no card | landing `freeNote` ("every clause is literally true of /scan"); `console/app/scan/` |
| The claims themselves are test-enforced | landing content header: "npm test asserts the pricing pairing, the $299/checkout equality and the house voice floor" |
| Demoed end-to-end on a real product | Dad's walkthrough notes: ran on Clinkworthy, "did all the marketing analytics, and came up with the top 5 segments and use cases" (`source-dad-notes-2026-08-24.md`) |

## 6. Backdrop 1 — target audience (customer test)

Target: **solo owner-operators of local, visual small businesses** — salons,
gyms/studios, restaurants/cafes, boutiques — with no marketing hire and low
or no budget. Receipts: the SMM landscape report's ICP #1 call (16-agent
researched, verification-graded, its own critic's caveats included in the
doc); Dad's founding note ("too small to hire anyone for marketing"); the
landing's own BUILT_FOR cards (bakery/retail/salon).

**Resonance status: entirely `UNTESTED`.** Zero interviews conducted. The
promise/benefits above connect with this audience *by argument only*. The
concept cards + interview kit (backlog item 5) are the instrument; Phin's
interviews are the test. Per doctrine law 6, his notes will outrank every
word of this section.

## 7. Backdrop 2 — better-or-unique vs the alternatives (competition test)

Per the PM deck p38, three competitor types:

- **Inaction** ("we post when we remember") — the real #1. Unique angle:
  Player 2's cost-of-entry is a free scan that shows the owner their own
  shop's posts, which attacks inertia with proof rather than argument.
  `UNTESTED` that this converts.
- **Build/DIY** (Canva + ChatGPT + a nephew) — ChatGPT is a drafting
  assistant, not a planner (46% use it for ideation vs 4% for calendar
  planning — Hootsuite poll via landscape report). Better: Player 2 runs the
  loop end-to-end including the publish, the replies, and the measurement.
- **Buy** (Holo and the tool band) — Holo teardown, from their own
  reviewers: no learning loop, no attribution, no ad execution. Better:
  outcome memory + optimizers + gated ad runs. Caveat carried from the
  teardown: their prices were third-party-sourced; spot-check before any
  external use.
- **Buy** (freelancer/agency services band) — parity on done-for-you, better
  on price ($299 vs $500–2,000/mo) and on engagement drafting that never
  sleeps (capability shown in the operator console today; NOT yet
  customer-deliverable — client accounts and OAuth are pre-productization,
  §8.2, so this is a roadmap comparison, not a shipping one); honest floor:
  a human freelancer holds relationships and shoots
  original photos on-site — Player 2 does not. That trade-off belongs in
  battle cards (backlog item 3), not buried.

## 8. Honest gaps (disclosed floor — what this framework cannot claim yet)

1. **No validation of any kind.** No interviews, no customers, no revenue.
   Everything resonance-shaped is `UNTESTED`.
2. **Product is pre-productization**: no client accounts yet, Meta OAuth
   pending review, key env vars unset as of 24 Aug
   (`docs/productization-v1.md`). RTBs above are operator-console truths;
   "sellable product" is Phases 1–5 away. *(Amended 1 Sep: the entry tier
   is no longer closed — `ENTRY_AVAILABLE = true` since PR #56, Phin's
   ruling; the §2 price-anchor argument now rests on a shipped fact.)*
3. **"Employee" framing** is legally and expectationally unexamined — filed
   for the lawyer brief (Lane A item 7).
4. **Shared facts** ($59/$299, market-band figures) must move into
   `gtm/raise/model/assumptions.md` when it exists (doctrine law 4); until
   then this file cites code and sources directly.

## 9. What tests this next

- Concept cards: frame-of-reference A vs B as separate coded territories;
  north-star "backup" vs "close the loop" as endline variants; the
  landscape report's synthesized candidate line "you can put the phone down
  on Saturday" tested as a message, never cited as evidence.
- Relief vs growth: does the owner buy "phone down" or "chairs filled"?
  (The gate's sharpest unanswered question — both reviewers landed on it.)
- Phin's five KSP brainstorm answers (captured separately, then merged —
  backlog item 2).
- First real interviews from the recruit pool (open decision 5).
