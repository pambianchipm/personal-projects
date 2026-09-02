# Player 2 — raise model v1 (scenarios, not projections)

CONFIDENTIAL — Lane A raise artifact (law 8).
STATUS: DRAFT → IN-GATE this shift (hostile investor)
OWNER: GTM boss · shift 8, 2026-09-02
CHARTER: the chief-approved model build — sourced churn priors,
free-scan funnel algebra, and the A4 repricing sensitivity that
quantifies R5's disclosed floor. Snapshot debt paid FIRST
(`snapshots/2026-09-02-xai-pricing.md`) — and the snapshot immediately
caught a −43% vendor reprice, so every number here uses the 2 Sep price
with the 31 Aug price as the ADVERSE scenario.
LAW 1/2 POSTURE: Player 2 has zero customers. Nothing here is a
projection OF Player 2 — every table is scenario ALGEBRA over graded
assumption rows (IDs cited throughout) plus PROJECTED inputs marked as
such. No figure from this file reaches an external surface except
through deck slide 8, after Phin, with its grade attached. The model's
outputs are the QUESTIONS the first real cohort must answer, priced.

**First breath:** Player 2 is an AI marketing employee for small
businesses; this model is the arithmetic of whether the business under
it can work — under stated assumptions, none yet earned.

---

## 1. Drivers (the whole model is these six)

| Driver | Value used | Grade |
|---|---|---|
| ARPU, entry | $59/mo (A1) | SOURCED |
| ARPU, full OS | $299/mo founding (A2); $499 defined (A3) | SOURCED |
| Generation COGS | A4/A5/A7 at the 2 Sep price; A9 band | SOURCED/DERIVED |
| Monthly logo churn | 3% / 5% / 7% scenarios (A16 band) | DIRECTIONAL — scenario only |
| Tier mix | 70/30 and 50/50 entry/full scenarios | PROJECTED (invented; no basis exists) |
| CAC | UNKNOWN — §3's algebra defines what to measure | PROJECTED illustrations only |

**Named exclusions (unpriced, disclosed):** Anthropic reasoning-layer
COGS (conductor, Pulse, claims — R5's second vendor; no per-workspace
metering exists to price it); caption transcription (A5 exclusion);
infra/Vercel/Supabase; Phin's time. Gross margins below are therefore
GENERATION-margin, an upper bound on true gross margin — stated on
every use.

## 2. Unit economics per tier (generation-margin)

**Entry ($59):** A9 → drag $14.5–22.8/mo today (25–39%);
generation-margin $36–45/mo (61–75%). Adverse (A4 reversion to $0.14):
drag 42–64%, margin $21–34. Uncapped-images tail still applies until
the tripwire ruling (open with Phin).

**Full OS ($299):** allowance is unlimited (A10) so COGS is pure usage
assumption — PROJECTED scenario: a heavy shop at 1 video/day (30/mo ×
~$1.14 ratio-blended, A6) + 100 images ≈ $37–39/mo → generation-margin
≈ $260/mo (87%). Adverse price: ≈ $63/mo COGS → margin $236 (79%).
A daily-video customer is an assumption about behavior nobody has
observed; it exists to bound the shape, not to claim it.

## 3. LTV scenarios and the CAC ceiling (the graveyard math)

LTV = monthly generation-margin ÷ monthly churn. Using mid-band margins
(entry $41; full OS $260):

| Churn (A16 scenario) | Entry LTV | Full-OS LTV | Max CAC @ LTV:CAC=3 (entry / full) |
|---|---|---|---|
| 3%/mo (33 mo avg life) | ~$1,370 | ~$8,670 | ~$455 / ~$2,890 |
| 5%/mo (20 mo) | ~$820 | ~$5,200 | ~$275 / ~$1,730 |
| 7%/mo (14.3 mo) | ~$590 | ~$3,710 | ~$195 / ~$1,240 |

Payback months = CAC ÷ monthly margin: e.g. a $200-CAC entry customer
pays back in ~5 months at mid-band margin; a $500-CAC entry customer at
7% churn NEVER pays back (12+ months payback vs 14-month life = the SMB
graveyard, quantified). **The investor-facing sentence this table
earns:** at tool-band CAC the entry tier works even at bad churn; at
services-band CAC it only works if the full OS carries the mix — which
is why tier mix is a driver, not a detail.

**The free-scan funnel algebra (what to MEASURE, not what to claim):**
CAC = cost-per-scan ÷ (scan→paid rate × paid→retained-past-month-1
rate). Three numbers, none of which exists yet. Illustrations
(PROJECTED, invented): $5 cost/scan at 5% scan→paid → $100 CAC (works
everywhere above); $10 at 1% → $1,000 CAC (works nowhere on the entry
tier). The first 100 scans' job is to replace this paragraph.

**Blended-mix scenarios (PROJECTED):** 70/30 entry/full → blended ARPU
$131, blended margin ≈ $107/mo; 50/50 → ARPU $179, margin ≈ $150/mo.
At 5% churn, blended LTV ≈ $2,140 / $3,010 respectively.

## 4. A4 sensitivity — R5's disclosed floor, quantified

Entry-tier video seconds/mo: 173.3 (A8 × 10s). Video-only drag as a
function of the per-second price p, on $59:

| p ($/sec) | Video cost/mo | Drag (video-only) | Meaning |
|---|---|---|---|
| 0.05 | $8.67 | 15% | today's cheaper model (grok-imagine-video) |
| **0.08** | **$13.87** | **23.5%** | **today's price for the pinned model (A4)** |
| 0.14 | $24.27 | 41% | the 31 Aug price — a reversion IS the adverse case |
| 0.19 | $32.93 | 56% | old band's ceiling territory |
| 0.32 | $55.46 | 94% | entry tier underwater on video alone (4× today) |

Break-even statement (the R5 quantification): the entry tier survives a
75% price INCREASE from today before video-only drag exceeds the old
41–59% working band, and dies on video alone only at ~4× today's price.
The full OS at 87% generation-margin survives every row of this table.
The observed volatility between the org's own two reads (−43% in two
days-of-record) cuts both ways: the same magnitude upward is the
planning case, and it lands at $0.114–0.14 — inside the survivable
band. **What this table does NOT cover:** vendor TERMS risk (R5 —
termination/IP), the unpriced Anthropic layer, and the uncapped image
tail — those stay disclosed floors.

## 5. What the model says back to the deck (slide 8's future content)

1. The business's shape is defensible AT SCENARIO PRIORS: even 7%/mo
   churn yields entry LTV ≈ 10× monthly price, and generation COGS is
   survivable at 2× today's vendor price. Nothing about Player 2 is yet
   evidence for those priors.
2. The two numbers that decide everything are scan→paid conversion and
   month-1 retention — both measurable with the first real cohort, both
   currently nonexistent. The raise milestone list already contains
   exactly this (slide 9: first paying non-founder cohort).
3. The entry tier is a wedge, not a business: at any plausible CAC it
   needs the full OS in the mix. Tier-mix is the founder's pricing
   lever; the tripwire ruling bounds its tail.
4. Honest floor: every margin here is GENERATION-margin (exclusions in
   §1); churn priors are DIRECTIONAL secondary-source bands (A16);
   usage and mix are PROJECTED inventions; the model's job is to be
   replaced by cohort data, table by table.

## 6. Register/ledger effects (this shift)

R5: first observed vendor-price instance recorded (favorable, −43%);
sensitivity table = the quantification its row called for. R11: the
"model build" mitigation moves PLANNED → REAL for the
scenario/sensitivity half (this file shipped); churn/CAC/LTV stay
UNKNOWN-until-cohort by design. A4/A5/A6/A7/A9 amended with
strike-throughs and dates; A16 added; snapshot debt PAID.
