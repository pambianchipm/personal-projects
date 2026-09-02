# Player 2 raise model — assumptions.md (THE truth table)

STATUS: v1 DRAFT → IN-GATE with the deck skeleton this shift (hostile
investor audits both together)
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
| A4 | Video generation unit cost | $0.14/second at 720p (grok-imagine-video-1.5) | SOURCED — docs.x.ai/developers/pricing, read 31 Aug 2026 (chief, filed to inbox FYI) |
| A5 | Cost per plain 10s video / 30s extend-chain | ~$1.40 / ~$4.20 | DERIVED — A4 × 10s and × 30s; excludes caption transcription on talking-head renders (flagged, unpriced here) |
| A6 | Blended real cost per video | ~$2 | OBSERVED — Phin's own spend, ~$10 for 5 videos (n=5, approximate; corroborates A4–A5) |
| A7 | Image generation unit cost | $0.02–0.07 each | SOURCED — same xAI pricing page as A4 |
| A8 | Entry-tier allowance | 4 videos/week + uncapped images | RULED — Phin, 31 Aug 2026 |
| A9 | Entry-tier est. generation cost / gross-margin drag | ~$24–35/mo ≈ 41–59% of A1 revenue | DERIVED — A8 × A5/A6 + image usage per A7 (chief's derivation, inbox FYI 31 Aug; ranges carried, not point-estimated) |
| A10 | Full-OS allowance | unlimited, internal fair-use tripwire | RULED — Phin, 31 Aug 2026 |
| A11 | SMB paid-social services band | $500–2,000/mo dominant among SMBs that pay at all | SOURCED (VERIFIED grade in origin doc, with its own sampling caveat) — Clutch 2025 via `clinkworthy/docs/research-smm-landscape.md` |
| A12 | Freelancer entry packages | roughly $300–1,500/mo | DIRECTIONAL — landscape report; the report itself also cites "$300–500" elsewhere; treat as a range, never load-bearing alone |
| A13 | Accelerator terms (ERA / Techstars NYC) | $150k post-money SAFE for 6% / $220k ($200k uncapped MFN SAFE + $20k convertible, 5% common) | SOURCED — `gtm/raise/accelerators.md` is the source of truth (primary pages read 31 Aug); quote it, don't restate elsewhere |
| A14 | Owner burnout / time poverty stats | 88% of TikTok-active owners report posting burnout (Adobe Express n=433, vendor survey — treat as ceiling); 42% of SMBs have <1 hr/day for ALL marketing (Constant Contact 2025) | SOURCED — landscape report, its own editor's grades carried |

## Not yet in this table (and therefore claimable nowhere)

- Market size (any figure) — bottom-up scaffold first (law 2); the deck's
  slide 4 names the required inputs.
- Any revenue/customer projection — no customers exist; a projection row
  enters only attached to a model with stated drivers.
- Attribution/outcome economics ("what a post earns an owner") — blocked
  on the attribution-scope read (truth-map §3-bis).
- Caption-transcription unit cost (A5's exclusion) — price when video COGS
  matters to a decision.

## Change discipline

A row changes by shift, with the old value struck through and dated —
never silently. Downstream artifacts citing a changed row get flagged in
the same shift's ops-log entry.
