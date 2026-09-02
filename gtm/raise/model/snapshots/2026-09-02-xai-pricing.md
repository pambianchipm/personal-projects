# Snapshot v2 — docs.x.ai/developers/pricing — CORRECTED (supersedes the
# refused v1)

CONFIDENTIAL — internal-audit class (law 8).

FETCH: curl via proxy, 2026-09-02T18:02:41Z · HTTP 200 · 472,874 bytes ·
SHA-256 `473167a39afda19ef83fb149e41cdb0e97b2cde58d8a58a422b706cd8f8320a2`
(raw HTML retained in session scratchpad; this file records the
RENDERED/EMBEDDED values verbatim per the snapshot doctrine adopted
2 Sep: page text + hash, never a summarizer's answer).

## The v1 error, on the record

Snapshot v1 (14:06Z, commit 7b98541) recorded "$0.08/sec, no resolution
tiers" — a WebFetch summarizer had flattened a tiered table to its first
cell, and that tool answer was graded SOURCED. The org's own OBSERVED
row (A6, ~$2/video blended) contradicted the implied reprice and was
ratio-projected around instead of triggering a re-read. The chief's
verifier caught it at 14:47Z (refusal verdict:
`gtm/org/reviews/2026-09-02-model-v1-chief-refusal.md`). There was NO
reprice. This is the org's first observed READ ERROR — logged as such,
not as vendor volatility.

## Video generation — grok-imagine-video-1.5 (the model the product
pins: `xai-video.ts` L12; the product hardcodes 720p, L81)

Page-embedded pricing data, parsed from the fetched HTML (units 1e-10
USD, converted):
- 480p: **$0.08/sec**
- **720p: $0.14/sec** ← the tier the product pays; UNCHANGED since the
  31 Aug read and identical to the product's code comment (L77)
- 1080p: $0.25/sec — NOT reachable by the product (`resolution` type is
  `'720p' | '480p'`)
- **Input image: $0.01 each** (image→video is a live product path —
  `imageUrl` is passed; this charge was previously in no row)

Rendered-text confirmation: "$0.14 / sec" present in page HTML for the
720p cell (grep verbatim).

grok-imagine-video (older model): 480p $0.05 / 720p $0.07 per sec.

## Image generation (embedded data, per-image)

- grok-imagine-image: $0.02 (base)
- grok-imagine-image-quality: $0.05 (1K) / $0.07 (2K)
- grok-imagine-image-2.0: $0.04 (1K low) / $0.06 (2K low, 1K medium) /
  $0.08 (2K medium)
- **FINDING (new this read): `grok-2-image` — the image model the
  product's `xai-image.ts` L13 pins as DEFAULT — appears NOWHERE on the
  pricing page (0 occurrences in 472KB).** Auto-discovery may resolve to
  a grok-imagine-image model in practice; which image SKU production
  actually bills is UNKNOWN → folded into Phin's invoice-reconciliation
  action.

## Speech to Text

$0.10/hr (REST), $0.20/hr (streaming) — unchanged from v1's record.

## Doctrine (adopted 2 Sep, chief's refusal)

A snapshot records the page's rendered text (or HTML + hash), never a
summarizer's answer. Any SOURCED change that contradicts an OBSERVED row
triggers a re-read before any amendment.
