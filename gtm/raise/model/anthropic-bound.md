# Anthropic reasoning-layer cost bound (the R5 second-vendor gap, priced)

CONFIDENTIAL — Lane A raise artifact (law 8).
STATUS: GATED (r2) — hostile investor: FAIL r1 narrow (7 edits, 29-cell
written ledger), PASS r2 confirmation. Verdict:
`gtm/org/reviews/2026-09-02-shift10-both-gates.md`. Awaiting chief.
SHIFT-11 AMENDMENTS (A20 input row snapshot-confirmed; §4 slide-8
sentence corrected per chief m3; note 3 three-line sharpening per m5)
GATED with model-v1 §4b — hostile investor r2. Verdict:
`gtm/org/reviews/2026-09-03-shift11-both-gates.md`.
OWNER: GTM boss · shift 10, 2026-09-02
CHARTER: the chief-sequenced bound — "from the product's budget meter
caps × list prices — an upper bound is enough." Answers the standing
investor ask: is the gap between generation-margin and true gross
margin 2 points or 20?

**First breath:** Player 2's reasoning layer (conductor, Pulse, review,
engagement drafting) runs on Claude (`claude-opus-5` default across
`agent.ts`, `pulse.ts` — code-read receipts); this file bounds what
that costs per entry customer per month, from the product's own caps.

## 1. Inputs and their grades

| Input | Value | Grade |
|---|---|---|
| Claude Opus 5 list price | $5/MTok input · $25/MTok output | SOURCED — originally the Claude API skill's model/pricing reference (cache-dated 2026-06-24); CONFIRMED unchanged against the live pricing page 3 Sep 2026, raw fetch + SHA-256: `snapshots/2026-09-03-anthropic-pricing.md` (the RE-VERIFY flag is satisfied) → A20 |
| Conductor cap | 32 tool calls for a job's FIRST turn (`agent.ts` `MAX_TOOL_CALLS`) — DISCLOSURE (gate catch): the cap GROWS by 16 calls per additional user turn (`agent.ts` ~L1081: `MAX_TOOL_CALLS + 16 × (userTurns − 1)`), so this bound's heavy scenario assumes SINGLE-TURN jobs; a chatty multi-turn thread exceeds it | SOURCED — code, both lines |
| Pulse | 1 synthesis run/day/workspace (daily cron) | SOURCED — code/cron |
| Outbound drafting cap | ≤20 pending queue; nightly drafting | SOURCED — `outbound.ts` |
| Per-call token sizes | conductor 8–15K in / 1–1.5K out per call; pulse 10K/2K; drafts 2K/0.3K; review 20K/2K | **PROJECTED — invented, no metering exists**; the entire bound inherits this grade |
| Jobs per entry customer | 4/mo (light) – 8/mo (heavy) | PROJECTED |

## 2. The bound (per entry customer per month, no caching assumed)

| Surface | Light scenario | Heavy scenario |
|---|---|---|
| Conductor jobs | 4 × ~$0.65 (10 calls × 8K/1K) ≈ $2.60 | 8 × ~$3.60 (32 calls × 15K/1.5K) ≈ $28.80 |
| Daily Pulse | ~$0.10/day ≈ $3.00 | ≈ $3.00 |
| Engagement drafts | ~10/day ≈ $5.25 | ≈ $5.25 |
| Review passes | ~2 batches/wk ≈ $1.30 | ≈ $1.30 |
| **Total** | **≈ $12/mo (≈20% of $59)** | **≈ $38/mo (≈65% of $59)** |

Arithmetic shown per cell: e.g. heavy conductor job = 32 × 15K = 480K
in ($2.40) + 32 × 1.5K = 48K out ($1.20) = $3.60. → A21.

## 3. What the bound says (the honest headline)

**The answer to "2 points or 20": closer to 20 — and at heavy use,
more.** Stacked with A9's generation drag ($25–38), an entry customer's
scenario ALL-IN AI COGS is ~$37–76/mo against $59 revenue — the entry
tier is plausibly UNDERWATER at heavy use on today's architecture. The
full OS at $299 absorbs the all-in band at ~12–25% of revenue (the
reasoning band alone is ~4–13%) — thin-to-fine, never fatal.

Three honesty notes, all load-bearing:
1. This is a NAIVE upper bound: it assumes every heavy job exhausts its
   cap at large context, and assumes ZERO prompt caching (cache reads
   are ~10× cheaper than fresh input; the conductor's stable
   system/memory prefix is exactly the cacheable shape — an unquantified
   but real reducer).
2. Every token count is PROJECTED — no per-workspace metering exists.
   **The closing receipt is Phin's actual Anthropic invoice** (same
   motion as the xAI invoice action): one month's bill ÷ active
   workspaces upgrades A21 toward OBSERVED.
3. This bound is exactly why Phin's own-media direction (inbox, 2 Sep)
   and the entry-generation-as-beta scenario matter to the MODEL, not
   just the product: own-media flips A9 toward zero but does NOT flip
   this bound — and *(sharpened shift 11 per the chief's m5)* the
   reasoning line can GROW under own-media: each clip plausibly adds
   script, beat-selection, edit-list, and caption-style calls that
   don't exist in the generate-from-prompt flow. Own-media also adds a
   THIRD line this bound excludes entirely: transcription (A5's
   exclusion — unpriced today). The own-media scenario (chief task 2)
   must price all THREE lines when it runs: generation (→~0),
   reasoning (may grow per clip), transcription (new).

## 4. Ledger effects (what actually shipped this shift)

A20 (Claude list prices) and A21 (reasoning-bound band) added to
assumptions.md. R5's mitigation row now carries the A21 bound
(edited this shift, same commit). model-v1's exclusions list cites
this bound. The number reaches slide 8 BY REFERENCE ONLY: slide 8
points to model-v1, and model-v1 §1's exclusions list cites this bound —
the slide's own text names neither "generation-margin" nor this file.
*(Sentence corrected shift 11 per the chief's m3; the earlier version
claimed slide-8 text that isn't there. Whether slide 8 should carry a
direct pointer is Phin's call — it is his STUB.)*
