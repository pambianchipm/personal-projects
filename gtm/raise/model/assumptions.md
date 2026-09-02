# Player 2 raise model — assumptions.md (THE truth table)

STATUS: GATED (round 3, with the deck skeleton — hostile investor;
row-by-row audit clean, both DERIVED rows recomputed, A15 added and A9
corrected at the gate). Verdict:
`gtm/org/reviews/2026-09-02-deck-skeleton-assumptions-hostile-investor.md`.
Awaiting chief's confirm.
OWNER: GTM boss · shift 5, 2026-09-02
LAW 4: shared facts live HERE, once. The deck, the model, the site, and
the battle cards quote rows by ID (e.g. "A2"). Two artifacts disagreeing
with this table is a gate-fail for both. Grades: SOURCED (a document the
org read, named) · OBSERVED (real usage, n stated) · RULED (Phin's
decision, dated) · DERIVED (computed here from graded rows — the
derivation shown) · DIRECTIONAL (secondhand/unverified — never load-
bearing alone) · PROJECTED (a guess, never in an external artifact).

**First breath:** Player 2 is an AI marketing employee for small
businesses; this file is the single table of numbers its raise artifacts
may state.

| ID | Assumption | Value | Grade + source |
|---|---|---|---|
| A1 | Entry tier price | $59/mo | SOURCED — `clinkworthy/console/lib/pricing.ts` (`ENTRY_CENTS = 5900`, single source of truth); LIVE on landing since PR #56 (`content.ts:56 ENTRY_AVAILABLE = true`, verified 1 Sep; Phin's ruling) |
| A2 | Founding-rate full OS price | $299/mo | SOURCED — `pricing.ts`, cents canonical; checkout equality test-asserted (`landing-content.test.ts`) |
| A3 | Standard full-OS price (defined, ungated) | $499/mo | SOURCED — `docs/productization-v1.md` Phase 3 ("standard $499 defined but ungated") |
| A4 | Video generation unit cost | **$0.08/second** (grok-imagine-video-1.5, the model the product pins — `xai-video.ts` L12; page shows NO resolution tiers as of this read). ~~$0.14/second at 720p (read 31 Aug)~~ — REPRICED or de-tiered between reads (−43%); the old price survives in the product's own code comment (`xai-video.ts` L77) and is the model's ADVERSE scenario | SOURCED — docs.x.ai/developers/pricing, read 2 Sep 2026; dated snapshot: `snapshots/2026-09-02-xai-pricing.md` (debt paid). First observed instance of R5 vendor-price volatility — favorable this time |
| A5 | Cost per plain 10s video / 30s extend-chain | ~$0.80 / ~$2.40 ~~(was $1.40 / $4.20 at the 31 Aug price)~~ | DERIVED — A4 × 10s and × 30s; excludes caption transcription (flagged, unpriced) |
| A6 | Blended real cost per video | ~$2 AT THE OLD PRICE — Phin's ~$10/5 videos predates the reprice; the blend RATIO it implies (~1.43× plain) applied to today's A4 gives ~$1.14 blended (DERIVED-from-ratio, not observed) | OBSERVED (n=5, approximate, 31 Aug price era) + DERIVED ratio projection |
| A7 | Image generation unit cost | $0.02–0.05 each ~~(was $0.02–0.07)~~ | SOURCED — same page/read as A4; snapshot |
| A8 | Entry-tier allowance | 4 videos/week + uncapped images | RULED — Phin, 31 Aug 2026 |
| A9 | Entry-tier est. generation cost / gross-margin drag | AT TODAY'S A4: ~$14.5–22.8/mo ≈ 25–39% of A1 (plain-video floor + minimal images, up to ratio-adjusted blended + 60 quality images). ADVERSE (reversion to the 31 Aug $0.14): ~$25–38 ≈ 42–64% (the old 41–59% band plus the image tail). Still a VIDEO-PLUS-ASSUMED-BENIGN-IMAGES band, NOT a ceiling (entry images uncapped, A8; tripwire full-OS only, A10). Entry-tier tripwire = undecided, flagged to Phin | DERIVED — A8 (17.3 videos/mo) × A5/A6 + images per A7; re-derived 2 Sep at the new price; full sensitivity in `model-v1.md` §4 |
| A10 | Full-OS allowance | unlimited, internal fair-use tripwire | RULED — Phin, 31 Aug 2026 |
| A11 | SMB paid-social services band | $500–2,000/mo dominant among SMBs that pay at all | SOURCED (VERIFIED grade in origin doc, with its own sampling caveat) — Clutch 2025 via `clinkworthy/docs/research-smm-landscape.md` |
| A12 | Freelancer entry packages | roughly $300–1,500/mo | DIRECTIONAL — landscape report; the report itself also cites "$300–500" elsewhere; treat as a range, never load-bearing alone |
| A13 | Accelerator terms (ERA / Techstars NYC) | $150k post-money SAFE for 6% / $220k ($200k uncapped MFN SAFE + $20k convertible, 5% common) | SOURCED — `gtm/raise/accelerators.md` is the source of truth (primary pages read 31 Aug); quote it, don't restate elsewhere |
| A14 | Owner burnout / time poverty stats | 88% of TikTok-active owners report posting burnout (Adobe Express n=433, vendor survey — treat as ceiling); 42% of SMBs have <1 hr/day for ALL marketing (Constant Contact 2025) | SOURCED — landscape report, its own editor's grades carried |
| A15 | SMM tool band (Holo-class) | ~$12–48/mo | DIRECTIONAL — Holo teardown (`clinkworthy/docs/competitor-holo.md` pricing table), third-party-sourced; the teardown's own flag carried: SPOT-CHECK before any external use; never load-bearing alone |
| A16 | SMB SaaS monthly logo churn prior | 3–7%/mo (36–76% annual) — scenario BAND, not a claim about Player 2 | DIRECTIONAL — kalungi.com/blog/saas-churn-rate-benchmarks, read 2 Sep 2026 (the page states the band but cites no underlying study — graded accordingly); consistent with the secondary-source consensus surveyed same read. Used ONLY as scenario inputs in model-v1.md; Player 2's own churn is UNKNOWN (zero customers) and replaces this row the day real cohort data exists |

## Not yet in this table (and therefore claimable nowhere)

- Market size (any figure) — bottom-up scaffold first (law 2); the deck's
  slide 4 names the required inputs.
- Any revenue/customer projection — no customers exist; a projection row
  enters only attached to a model with stated drivers.
- Attribution/outcome economics ("what a post earns an owner") — blocked
  on the attribution-scope read (truth-map §3-bis).
- Caption-transcription unit cost (A5's exclusion) — price when video COGS
  matters to a decision.

## Pending decisions and snapshot debt

- **Entry-tier fair-use tripwire: UNDECIDED** — A10's ruling covers the
  full OS only; A9's band is honest only while entry image usage stays
  benign. Decision flagged to Phin (inbox, 2 Sep).
- **Vendor-price snapshot debt: PAID (2 Sep)** —
  `snapshots/2026-09-02-xai-pricing.md`. The first snapshot immediately
  caught a −43% video reprice/de-tier between reads: the debt's whole
  argument, demonstrated. Re-snapshot on any read that feeds a decision.

## Change discipline

A row changes by shift, with the old value struck through and dated —
never silently. Downstream artifacts citing a changed row get flagged in
the same shift's ops-log entry.
