# Competitor dossier — BUY (Holo, tryholo.ai) + the SMM tool landscape

STATUS: GATED (rounds 1–3) — skeptical SMB owner + competitor's salesperson
+ fresh verifier. SMB owner: FAIL r1 → PASS-WITH-NOTES r2. Competitor's
salesperson: FAIL r1 → FAIL r2 (narrow) → fresh verifier r3
PASS-WITH-NOTES. 31 required edits across the three rounds, all applied.
Verdict (all ledgers verbatim):
`gtm/org/reviews/2026-09-03-shift12-both-gates.md`.
The chief confirms GATED → READY-FOR-PHIN; the boss does not self-pass.
OWNER: GTM boss · shift 12, 2026-09-03
CONFIDENTIAL — internal (law 8). Holo is named here internally. **No
public claim about Holo ships without its own receipts and Phin's
sign-off** — and the price is the weakest link (see NOT CHECKED).
TEMPLATE: PM deck p38–39. NUMBERS: by reference from
`gtm/raise/model/assumptions.md` (law 4).
IMPORTED FROM: `clinkworthy/docs/competitor-holo.md` (build org's
teardown, analyzed 19 Aug 2026) + `clinkworthy/docs/research-smm-landscape.md`
(20 Aug 2026). Both read this shift.

**First breath:** Player 2 is an AI marketing employee for small
businesses. This dossier is on the alternative that looks most like us in
a search result and is least like us in what it does: an AI creative
factory sold at a tool price.

**Validation provenance (law 1):** every claim below traces to the two
imported documents or to Player 2's own code. No owner has compared the
two products in front of this org.

---

## Overview

Holo is an **AI creative factory**. Paste a website URL → a "Brand DNA"
scan reads the site, products and tone → it mass-generates marketing
assets: static and carousel ad creatives, UGC-style "AI influencer"
talking-head video ads, social posts across IG/FB/TikTok/LinkedIn/X, and
full email campaigns. Up to 10 brands per account, each with its own
Brand DNA and calendar.

The teardown's bottom line, verbatim and still correct: **"Holo makes
assets; Player2 runs marketing."** It is not a competitor for the
operated tier — and it is a serious **price anchor** for the phrase "AI
marketing tool," which is the frame a prospect will try to put us in.

## Key stats

| Field | Value | Grade / source |
|---|---|---|
| Location / team | Lithuania; ex-operators of real ecommerce brands (Sintra, Pulsetto, Burga, Moerie) | Holo teardown, 19 Aug 2026 |
| Funding | VC-backed (amount not established) | Teardown |
| Social proof | 4,200+ Trustpilot reviews | Teardown |
| Price band | **~$20–48/mo list** (a near-permanent promo column runs ~$12–29) | **A15 — DIRECTIONAL**, third-party sourced, corroborated independently at $20/$48 by the landscape report Appendix B §2. SPOT-CHECK BEFORE EXTERNAL USE. Never load-bearing alone. **CORRECTED shift 12 at the gate:** this row said ~$12–48, taking the promo floor and the list ceiling from two different columns of the teardown's own table |
| Metering | Creative-metered (Starter ~200 creatives/mo, Scale ~650); no free trial; 14-day money-back **voided after 35+ generations** | Teardown |
| Tech | Reviews consistently report OpenAI under the hood + a proprietary "Brand DNA" conditioning layer; marketing claim of training on "10M marketing assets + 19,000 high-performing ads" | Teardown — a fine-tune/template corpus claim, not a foundation-model claim |
| Positioning | Founders and small teams who want agency-volume creative without an agency | Teardown |

**Provenance warning carried forward, not laundered.** The teardown's own
header says tryholo.ai was **egress-blocked** from the analysis box; its
pricing comes from third-party review/pricing sites and Holo's docs via
search, and it explicitly instructs: *"spot-check pricing on their site
before quoting it to a prospect."* That instruction is inherited here and
by every battle card built on this file.

## SWOT

**Strengths**
- **First minute beats ours.** URL in → branded assets out, no interview,
  no setup. The teardown's own steal-list entry #1.
- Volume at a price: hundreds of on-brand variants for tool money.
- Email campaigns — a channel we do not do at all.
- A shipped *product page* for AI-influencer video. (We shipped the
  tech; they shipped the merchandising.)
- Multi-brand from day one.
- 4,200+ reviews is a trust asset we cannot match at zero customers.

**Weaknesses** *(the analytics complaint and the "still developing / desktop-only" line are reviewer-sourced in the teardown; the remaining gaps are the build org's own assertions, written under a heading that reads "our moat," and are `UNTESTED` against any third party. **Corrected at the gate r1** — "all verified against their own reviewers" upgraded five in-house assertions to third-party verification, which is law 1's exact failure mode.)*
- **No learning loop.** Nothing feeds results back into generation.
- **No attribution.** Zero "did it sell" story. Their reviewers' words:
  *"less about granular ad analytics and more about momentum and volume."*
- **No ad execution or optimization** — they hand you creatives for Ads
  Manager; the running is yours.
- **Negative quality pressure.** They advertise generating "testimonials"
  and "statistics-based hooks" — invented life. Our constitution bans it
  and our review layer kills it.
- **No engagement, research or autonomy.** No comment inbox, no Pulse, no
  horizon refill, no decision brief. Generates on demand, then silence.
- Reviewer-reported: video "still developing," desktop-only, outputs need
  editing, no compliance workflow.
- Pricing presentation is deliberately slippery (permanent-sale framing),
  and the refund voids once you've used the thing.

**Opportunities (for us)**
- Every weakness above is a shipped surface on our side, with a code
  receipt: claims engine (`console/lib/claims.ts`), optimizers that
  propose and never spend without approval, engagement drafting under
  house-voice enforcement, Horizon Guard, failure alerting
  (`console/lib/notify.ts`), weekly digest and monthly recap.
- The invented-testimonials practice is the cleanest honest attack we
  own — it is a *category* risk to the buyer, not a feature comparison.
- Their 200-assets-a-month metric is a gift: it measures effort, and the
  owner's actual question is whether anything sold.

**Threats (to us)**
- **The anchor.** A15's band sits at roughly a sixth to a fifteenth of
  A2's $299, and its ceiling is ~19% under A1's $59 (not "well under" —
  $48 against $59). *(Both figures corrected at the gate r1: the old
  "fifth to a twentieth" was wrong at both ends, in the direction that
  flattered the argument.)* A prospect who frames Player 2 as
  "a tool next to Holo" has already won the argument.
- Their onboarding is genuinely better today. A demo that starts with a
  10-minute setup loses to one that starts with a URL paste.
- 4,200 reviews vs zero customers.
- If they ship a posting layer, half of this dossier changes. **NOT
  CHECKED whether they have since 19 Aug** — the teardown is two weeks
  old and was not re-verified this shift. **Sharpened at the gate r1:
  the teardown does not list posting as a gap at all, and it DOES list
  "separate Brand DNA + calendars" per brand. We therefore have no
  receipt that Holo does not post, and must not assert one** (the
  battle card's "Posts them: No" row is corrected to NOT CHECKED).

## KSPs (what Holo sells)

1. **Agency-volume creative without the agency.**
2. **Instant brand understanding** from a URL.
3. **Every channel's assets in one place**, including email.
4. **Tool pricing** — a rounding error on a marketing budget.

## Primary features

Brand DNA URL scan · static + carousel ad creatives · AI-influencer UGC
video · multi-platform social posts · full email campaigns · multi-brand
workspaces (up to 10) · per-brand calendars.

## What's great about it

Speed to first artifact, and a genuinely good read on what a
volume-starved small team wants at 11pm. Their team has actually operated
ecommerce brands and it shows in the product's shape. They are not a
scam; they are a well-built answer to a *different* question.

## Who should pick it

- An ecommerce/DTC operator whose bottleneck is genuinely **creative
  volume** for paid, and who already has a media buyer running the ads.
- An agency or freelancer who needs raw variants fast and does their own
  strategy, posting and reporting.
- Anyone managing many brands on a tool budget.
- **Any buyer whose question is "can I get assets?" rather than "can
  someone run this?"** — which is most of the people who will find them.

## Positioning line (internal; not cleared for external use)

From the teardown, held as written: *"Holo generates 200 assets a month;
nobody knows if any of them sold. Player2 posts them, replies to the
comments, tells you which one made money, and gets smarter every week."*

**Gate note on that line:** it is a strong internal frame and it contains
two claims that need care externally — "nobody knows if any of them sold"
is an inference from their reviewers' analytics complaint, not from a
Holo statement; and "gets smarter every week" is a product claim whose
cadence is unreceipted. Neither goes on an external surface as written.

## The wider BUY landscape (context, so the dossier isn't a single vendor)

Player 2 is not priced against Holo alone. The landscape report's
verified tool bands, all now carried in **A33**: schedulers from
$5/channel (Buffer) to $199–399 per seat (Sprout); approval tools
**$39–399** (Planable $39–59 · HeyOrca $59–149/calendar · Gain
$99–399); dedicated listening from $199/mo (Brand24), **usually skipped
below mid-market**, though Vista Social bundles it at $79/mo. *(Corrected at the gate r1: the
approval band had been written $39–149 while naming Gain, whose ceiling
is $399 — a 2.7× understatement pointing the same way as the vacancy
claim below; and "absent entirely" was an upgrade over the report's own
"usually skipped," contradicted by a row in the table being quoted.)* Against that, the services band is A11's
**$500–2,000/mo among SMBs that pay for social at all** — and A11 carries
its origin document's sampling caveat: it is not 44% of all small
businesses.

**The structural read — RETRACTED AND REPLACED at the gate r1.** What
this section said: "there is a hole between $50 and $500 where nothing
does the operating… no top-down figure is admitted here (law 2)." That
was false against the very document cited, and the law-2 disclaimer
appended to it was decoration, not a receipt. Appendix B populates the
band densely: **$99 Social at $99 / $189 / $299 / $389 with 7,200+
clients**, **Feedbird from $99**, **98 Buck Social / Engage365
$98–398** (§4); and the AI-agent category at **$27–199/mo** —
**Sintra $97**, **Apaya $55–183**, **Blotato-class $9–29** (§6). A2's
$299 sits in the middle of that crowd, not in a vacancy.

What the report actually concludes, and the only version we may state
(L425, verbatim): *"$299 Founding sits exactly in the gap: above
productized-DFY quality anchor ($99–400 templated), below
competent-freelancer floor ($750–1,500), with agency-grade
capabilities."* That is a **quality** gap between roughly $400 and
$750 — a materially weaker and narrower claim than a price vacancy, and
it is the honest one.

The report does name a white space, and it is a tier-definition claim,
not a price one (§6, verbatim): *"'Done-with-you AI operator'
(human+AI hybrid) as a distinct priced tier: **UNSOURCED** — currently
blurs into productized DFY. ← PLAYER2'S WHITE SPACE."* Carried at that
grade: `UNSOURCED`/`UNTESTED`, never as an empty-market claim.

## NOT CHECKED

- (i) **Holo's current pricing.** A15 is third-party sourced and
  explicitly flagged for spot-check. tryholo.ai was **not fetched this
  shift.** Before any external comparison, fetch and snapshot it per the
  snapshot doctrine.
- (ii) **Whether Holo has shipped posting, attribution or a learning loop
  since 19 Aug.** The teardown is the record and it is two weeks old.
  Half the "why we win" collapses if they ship a scheduler.
- (iii) Their funding, headcount and regions served — not established.
- (iv) The "OpenAI under the hood" claim is *reviewer-reported*, not
  vendor-stated; never assert it externally.
- (v) Whether any real owner finds our attribution story more compelling
  than their volume story. `UNTESTED` — this is card T/M territory in the
  interview kit and the answer decides the whole comparison.
