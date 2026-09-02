# Player 2 raise model — assumptions.md (THE truth table)

CONFIDENTIAL — internal-audit class (law 8).

STATUS: v3 GATED (shift-9 rebuild, with the model — fresh verifier,
written ledger, confirmation PASS: no dead number survives live).
Lineage: original gate r3 with the deck skeleton
(`2026-09-02-deck-skeleton-assumptions-hostile-investor.md`); shift-8
amendments REFUSED (read error — `2026-09-02-model-v1-chief-refusal.md`);
rows RESTORED from snapshot v2. Verdict:
`2026-09-02-model-rebuild-fresh-investor.md`. Awaiting chief's confirm.
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
| A4 | Video generation unit cost | **$0.14/second at 720p — RESTORED 2 Sep (evening), unchanged since 31 Aug.** Full tier table (all three, per doctrine): 480p $0.08 / **720p $0.14** (the tier the product hardcodes, `xai-video.ts` L81) / 1080p $0.25 (unreachable — the product's type allows only 720p/480p). ~~Shift-8 amendment to "$0.08, no tiers" (14:06Z 2 Sep)~~ — a summarizer-flattened table cell graded SOURCED in error; REFUSED by the chief; there was no reprice | SOURCED — docs.x.ai/developers/pricing, raw fetch 2 Sep 18:02Z, HTTP 200, SHA-256 hash in `snapshots/2026-09-02-xai-pricing.md` (v2, corrected). Phin's recollection corroborates ("$0.14 sounds actually on the money") but stays a recollection — OBSERVED upgrade waits on the invoice line |
| A5 | Cost per plain 10s video / 30s extend-chain | **$1.40 / $4.20 — RESTORED 2 Sep (evening).** ~~Shift-8 "$0.80/$2.40"~~ (inherited the A4 misread) | DERIVED — A4 × 10s and × 30s; excludes caption transcription (flagged, unpriced) |
| A6 | Blended real cost per video | ~$2 | OBSERVED — Phin's own spend, ~$10 for 5 videos (n=5, approximate); consistent with $1.40 plain + extend-chains. ~~Shift-8 "ratio projection to $1.14"~~ struck: it projected around the very row that contradicted the misread — evidence-rank lesson: OBSERVED outranks a fresh tool-mediated read |
| A7 | Image generation unit cost | **$0.02–0.08 each — RESTORED+WIDENED 2 Sep (evening)** (grok-imagine-image $0.02; quality $0.05/1K, $0.07/2K; image-2.0 $0.04–0.08 by tier). ~~Shift-8 "$0.02–0.05"~~ dropped the 2K tiers in the same flattening error. NEW FINDING: `grok-2-image` — the DEFAULT the product's `xai-image.ts` pins — is UNPRICED on the page (0 occurrences); which image SKU production bills is unknown → invoice reconciliation | SOURCED — same raw fetch/snapshot as A4 |
| A7b | Input-image charge, image→video | **$0.01 per input image** (grok-imagine-video-1.5) — a live product path (`imageUrl` passed); previously in NO row or margin anywhere | SOURCED — same raw fetch/snapshot; added at the chief's refusal |
| A8 | Entry-tier allowance | 4 videos/week + uncapped images | RULED — Phin, 31 Aug 2026 |
| A9 | Entry-tier est. generation cost / gross-margin drag | **~$25–38/mo ≈ 42–64% of A1 — RESTORED 2 Sep (evening)** at the real $0.14: plain-video floor ($24.27 = 17.33 × $1.40) + minimal images (~$0.6), up to observed-blended ($34.67 = 17.33 × A6 $2) + 60 quality images (~$3). Image counts now STATED (chief's law-4 note): floor assumes ~30 base images, ceiling 60 quality. ~~Shift-8 "25–39% today"~~ inherited the A4 misread; ~~the ORIGINAL 41–59% band~~ was struck without date in shift 8 — it was video-only and essentially CORRECT (this row is that band plus the image tail). Still NOT a ceiling (entry images uncapped, A8; tripwire full-OS only, A10; A7b input-image charge additionally unmodeled per image→video use). Tripwire = undecided, with Phin (his D9; the question's original 41–59% basis was right) | DERIVED — A8 × A5/A6 + stated image counts per A7; re-derived at the RESTORED price; sensitivity in `model-v1.md` §4 |
| A10 | Full-OS allowance | unlimited, internal fair-use tripwire | RULED — Phin, 31 Aug 2026 |
| A11 | SMB paid-social services band | $500–2,000/mo dominant among SMBs that pay at all | SOURCED (VERIFIED grade in origin doc, with its own sampling caveat) — Clutch 2025 via `clinkworthy/docs/research-smm-landscape.md` |
| A12 | Freelancer entry packages | roughly $300–1,500/mo | DIRECTIONAL — landscape report; the report itself also cites "$300–500" elsewhere; treat as a range, never load-bearing alone |
| A13 | Accelerator terms (ERA / Techstars NYC) | $150k post-money SAFE for 6% / $220k ($200k uncapped MFN SAFE + $20k convertible, 5% common) | SOURCED — `gtm/raise/accelerators.md` is the source of truth (primary pages read 31 Aug); quote it, don't restate elsewhere |
| A14 | Owner burnout / time poverty stats | 88% of TikTok-active owners report posting burnout (Adobe Express n=433, vendor survey — treat as ceiling); 42% of SMBs have <1 hr/day for ALL marketing (Constant Contact 2025) | SOURCED — landscape report, its own editor's grades carried |
| A15 | SMM tool band (Holo-class) | ~$12–48/mo | DIRECTIONAL — Holo teardown (`clinkworthy/docs/competitor-holo.md` pricing table), third-party-sourced; the teardown's own flag carried: SPOT-CHECK before any external use; never load-bearing alone |
| A16 | SMB SaaS monthly logo churn prior | 3–7%/mo (compounded annual: 31–58%) — scenario BAND, not a claim about Player 2. (The Kalungi page's own "36 to 76%" annual figure matches no consistent annualization method; the compounded figures here are this table's, derivation: 1−(1−m)^12) | DIRECTIONAL — kalungi.com/blog/saas-churn-rate-benchmarks, read 2 Sep 2026 (the page states the band but cites no underlying study — graded accordingly); consistent with the secondary-source consensus surveyed same read. Used ONLY as scenario inputs in model-v1.md; Player 2's own churn is UNKNOWN (zero customers) and replaces this row the day real cohort data exists |

| A17 | Entry refund policy + rate | POLICY RULED (Phin D2): full refund on request, first 30 days. RATE: 5–15%/mo-1 scenario band — PROJECTED (no observation, no source; the chief's "DIRECTIONAL until observed" label noted, but no secondhand source was read, so this table grades it PROJECTED). LTV effect: entry LTV × (1−r), and refunders still consume ~1 month COGS — cells in model-v1 §3a | RULED (policy) + PROJECTED (rate) |
| A18 | Founder salary floor | $150,000/yr | RULED — Phin D10, 2 Sep (CONFIDENTIAL) |
| A19 | Target runway | 12 months | RULED — Phin D10, 2 Sep (CONFIDENTIAL) |
| A20 | Claude (Anthropic) list prices | claude-opus-5: $5/MTok in, $25/MTok out (the model the product defaults across agent.ts/pulse.ts) | SOURCED — Anthropic model/pricing reference read 2 Sep (reference self-dated cached 2026-06-24); RE-VERIFY against the live page before term-sheet use |
| A21 | Reasoning-layer cost per entry customer | ~$12–38/mo scenario band (light–heavy), NO caching assumed — naive upper bound | PROJECTED (a DERIVED stack over PROJECTED token sizes; the caps and list prices are SOURCED — the bound's own words: "the entire bound inherits this grade"); full derivation `anthropic-bound.md`; closing receipt = Phin's Anthropic invoice ÷ active workspaces |

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
- **Vendor-price snapshot debt: PAID (2 Sep, by snapshot v2 — raw fetch
  + SHA-256 hash + verbatim rows).** ~~The v1 claim that the snapshot
  "caught a −43% reprice"~~ is RETRACTED: v1 misrecorded the page (a
  summarizer flattened the tier table; chief-refused read error — the
  record lives inside snapshot v2). The 720p price is $0.14, unchanged.
  Doctrine: page text + hash, never a summarizer's answer; re-snapshot
  on any read that feeds a decision.

## Change discipline

A row changes by shift, with the old value struck through and dated —
never silently. Downstream artifacts citing a changed row get flagged in
the same shift's ops-log entry.
