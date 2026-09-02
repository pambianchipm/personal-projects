# Snapshot — docs.x.ai/developers/pricing — read 2026-09-02 (boss, shift 8)

Dated record of the org's read (pays the snapshot debt logged in
assumptions.md). Tool-mediated fetch; quoted values as returned.

## Video generation
- grok-imagine-video: "$0.050 / sec"
- **grok-imagine-video-1.5: "$0.080 / sec"** ← the model the product
  pins (`clinkworthy/console/lib/xai-video.ts` L12 DEFAULT_MODEL)
- NO resolution tiers shown on the page as read today.

## Image generation
- grok-imagine-image: "$0.02 / image"
- grok-imagine-image-2.0: "$0.04 / image"
- grok-imagine-image-quality: "$0.05 / image"

## Speech to Text
- "$0.10 / hr (REST), $0.20 / hr (Streaming)"

## DISCREPANCY vs the 31 Aug read (material — R5 in miniature)

The 31 Aug read (chief, inbox FYI; also preserved in the product's own
code comment, `xai-video.ts` L77: "xAI bills $0.14/sec at 720p") priced
grok-imagine-video-1.5 at **$0.14/sec at 720p**. Today's page shows
**$0.08/sec with no resolution tiering**. Either the vendor repriced
(−43%) or resolution-tiered pricing was removed/changed. Favorable this
time — and exactly the single-vendor volatility R5 warns about, now
with its first observed instance.

**Open hedge (gate-required): the product HARDCODES the 720p tier in
its generation requests** (`xai-video.ts` ~L79: `resolution:
options.resolution || '720p'`) — the exact tier priced $0.14 on 31 Aug.
If resolution tiering persists at the BILLING layer despite vanishing
from the marketing page, the effective price for what the product
actually sends may still be $0.14, making the "adverse scenario" the
current one. CLOSING ACTION (for Phin): reconcile ONE metered
production generation against the actual xAI bill — which would also
upgrade A4 toward OBSERVED. A4/A5/A9 amended this shift with the
old values struck through, dated; the sensitivity table uses $0.14 as
its adverse scenario (it is now literally 1.75× today's price, i.e. a
reversion).
