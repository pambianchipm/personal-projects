# Snapshot — Anthropic (Claude) API pricing page — 2026-09-03

CONFIDENTIAL — internal-audit class (law 8).
FILED BY: boss, shift 11 (2026-09-03), per the chief's m1 condition on
the shift-10 confirm: "name A20's actual source document and snapshot
the live page (text + hash) before any term-sheet use."
DOCTRINE: snapshot = the page's raw bytes + SHA-256, never a
summarizer's answer (adopted shift 9 after the xAI read error).

## Fetch record (raw, tool-unmediated)

- Command: `curl -sS -L -o anthropic-pricing.html
  'https://docs.claude.com/en/docs/about-claude/pricing'`
- Result: HTTP 200 · 650,327 bytes · final URL after redirect:
  `https://platform.claude.com/docs/en/about-claude/pricing`
- SHA-256 of the raw HTML:
  `2d8de3327a2c72d7a33752c7a30ccf0cd40cfa302c47f8224624f9abcf7b65c4`
- Text extracted locally from the raw HTML by tag-stripping (script in
  this shift's ops record); the quoted cells below are read from that
  extraction of the SAME hashed bytes, not from any summarizer.

## A20 source naming (the m1 ask)

A20's original source (shift 10) was the **Claude API skill's
model/pricing reference**, a cached document self-dated 2026-06-24 —
named here explicitly, as the chief required. THIS snapshot of the
live page now supersedes it as A20's primary receipt.

## What the live page says (verbatim cells, standard API tier)

Table header: `Model | Base input tokens | 5m cache writes | 1h cache
writes | Cache hits and refreshes | Output tokens`

> `Claude Opus 5 | $5 / MTok | $6.25 / MTok | $10 / MTok | $0.50 / MTok | $25 / MTok`

Batch-processing table (same page):

> `Claude Opus 5 | $2.50 / MTok | $12.50 / MTok`

Also on the page, relevant context: "The $2/$10 per million
input/output token pricing for Claude Sonnet 5, announced at launch as
introductory pricing through August 31, 2026, is now the standard
price"; "The previously scheduled increase to $3/$15 per million
input/output tokens on September 1, 2026 will not occur."

## Findings against the ledger

1. **A20 CONFIRMED, no change:** Claude Opus 5 (the product's default
   per `agent.ts` L30 / `pulse.ts` L17) is $5/MTok input · $25/MTok
   output on the live page — identical to the cached reference. A20's
   RE-VERIFY-before-term-sheet flag is now satisfied; grade stays
   SOURCED with this snapshot as the receipt.
2. **The bound's cache note CONFIRMED and now exact:** cache hits are
   $0.50/MTok vs $5 base input — exactly 10×, matching
   anthropic-bound.md honesty note 1's "~10× cheaper."
3. **New priced lever (parallel to A4's 480p):** batch processing runs
   Opus 5 at $2.50/$12.50 — half price. The bound's nightly surfaces
   (Pulse, outbound drafting, review) are batch-shaped; this is an
   unmodeled reducer, noted, not yet a scenario.
4. **Doctrine check:** this is a CONFIRMING read (no favorable
   surprise — the number simply matched its cached source), and it was
   still taken from raw hashed bytes, not a tool's answer.

## Ledger effects

A20's grade cell updated this shift: source line now names the cached
reference (2026-06-24) AND this snapshot; the RE-VERIFY flag replaced
with the snapshot pointer. No numeric change anywhere.
