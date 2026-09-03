# Snapshot — Anthropic (Claude) API pricing page — 2026-09-03

CONFIDENTIAL — internal-audit class (law 8).
FILED BY: boss, shift 11 (2026-09-03), per the chief's m1 condition on
the shift-10 confirm: "name A20's actual source document and snapshot
the live page (text + hash) before any term-sheet use."
DOCTRINE: snapshot = the page's raw bytes + SHA-256, never a
summarizer's answer (adopted shift 9 after the xAI read error).

## Fetch record (raw, tool-unmediated)

**AMENDED shift 12 (2026-09-03) per the chief's shift-11 confirm
condition 2: "no fetch timestamp and does not say where the raw
bytes / extracted text are retained (the xAI v2 snapshot had both)."
Both gaps are closed below. The shift-11 fetch could not be
retro-timestamped honestly — the wall-clock time was never recorded and
its raw bytes lived in a session scratchpad that died with that
session — so rather than invent a time, the page was re-fetched from
scratch this shift and THAT fetch is the timestamped, retained record.
The shift-11 fetch line is kept below, unedited, marked for what it
is.**

### Fetch A — shift 11 (superseded as the receipt; retained as history)

- Command: `curl -sS -L -o anthropic-pricing.html
  'https://docs.claude.com/en/docs/about-claude/pricing'`
- Result: HTTP 200 · 650,327 bytes · final URL after redirect:
  `https://platform.claude.com/docs/en/about-claude/pricing`
- SHA-256 of the raw HTML:
  `2d8de3327a2c72d7a33752c7a30ccf0cd40cfa302c47f8224624f9abcf7b65c4`
- **FETCH TIME: NOT RECORDED — unrecoverable.** **RAW BYTES: NOT
  RETAINED** (session scratchpad, since destroyed). This hash is
  therefore *unreproducible*, exactly as the chief said. It is not
  cited as a receipt any more; Fetch B is.

### Fetch B — shift 12, the reproducible record

- Command: `curl -sS -L -o anthropic-pricing.html
  'https://docs.claude.com/en/docs/about-claude/pricing'`
- **FETCH TIME: 2026-09-03T12:33:46Z → 12:33:48Z (UTC, curl via the
  session's agent proxy).**
- Result: HTTP 200 · 650,389 bytes · final URL after redirect:
  `https://platform.claude.com/docs/en/about-claude/pricing`
- SHA-256 of the raw HTML:
  `aff8778e04fb6cb43ef46782630cb800357de980112d7403a71c2b8b6231e49d`
- **RETAINED: the extracted text is committed beside this file as
  `2026-09-03-anthropic-pricing.extracted.txt`** (30,066 bytes,
  SHA-256 `7e1a7f69f9869d48d1c16b9363355fe4d6d997abaca7d4452e568ce153eb8be9`),
  byte-exact output of the script below run against the Fetch-B bytes —
  no header added, so the file hashes as extracted. The 650KB raw HTML
  is NOT committed (weight); it is reproducible from the command above,
  and any future fetch's *extracted text* is diffable against the
  retained file even when the raw hash moves.
- **Byte-instability, measured not assumed:** Fetch B differs from
  Fetch A by 62 bytes of page length and a different hash. The
  shift-11 verifier's independent fetch differed from Fetch A by 3
  bytes. Every priced cell is identical across all three. The page
  carries a per-response nonce; **the raw-HTML hash is therefore a
  fetch-identity receipt, not a content receipt.** The retained
  extracted text is the content receipt — that is the lesson of this
  amendment, and it applies to every future page snapshot.
- Text extracted locally from the raw HTML by tag-stripping — the
  quoted cells below are read from that extraction of the SAME hashed
  bytes, not from any summarizer. The script, filed here verbatim
  (gate-corrected: the first draft pointed at an ops record that was
  never filed):

  ```python
  import re, html
  t = open('anthropic-pricing.html', encoding='utf-8',
           errors='replace').read()
  t2 = re.sub(r'<script[\s\S]*?</script>|<style[\s\S]*?</style>', '', t)
  t2 = re.sub(r'<[^>]+>', '|', t2)
  t2 = html.unescape(t2)
  t2 = re.sub(r'\|+', '|', t2)
  t2 = re.sub(r'\s+', ' ', t2)
  # pricing-table header + rows located by literal search:
  print(t2[t2.find('Base input')-120:])   # header context
  for m in re.finditer(r'Claude Opus 5\|', t2):
      print(t2[m.start():m.start()+140])  # Opus 5 rows (base + batch)
  ```

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

## Fetch-B re-verification (shift 12) — cells re-read from the retained text

Run of the filed script against the Fetch-B bytes, quoted from
`2026-09-03-anthropic-pricing.extracted.txt`:

> `Claude Opus 5|$5 / MTok|$6.25 / MTok|$10 / MTok|$0.50 / MTok|$25 / MTok`

> `Claude Opus 5|$2.50 / MTok|$12.50 / MTok`  *(batch table)*

Every shift-11 cell reproduces unchanged: base $5/$25; cache hits
$0.50 = exactly 10× below base input; batch $2.50/$12.50 = exactly
half. **A20 stands, twice-confirmed, on retained text this time.**

**Ordering note (the chief's, confirmed on the retained text):** the
model table's first rows are now `Claude Fable 5.1 | $10 / MTok | …
| $50 / MTok` and `Claude Mythos 5.1 (limited availability) | $10 …
| $50`, listed ABOVE Opus 5. This is **irrelevant to every number in
the model while `claude-opus-5` is pinned in code** (`agent.ts` L30,
`pulse.ts` L17) — and it is a 2× input / 2× output step the day that
default moves. Recorded for the invoice line, not modelled. NOT
CHECKED: whether any surface resolves to a non-pinned default at
runtime; the invoice closes that, not this page.

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
