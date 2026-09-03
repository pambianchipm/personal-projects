# Snapshot — BUY-EDITOR vendor pricing pages — 2026-09-03 (shift 12)

CONFIDENTIAL — internal-audit class (law 8).
FILED BY: boss, shift 12 (2026-09-03), for backlog item 3's BUY-EDITOR
dossier. The chief's battle-card line for this type was filed "to be
receipted per-claim at dossier time" — this is that receipting.
DOCTRINE: snapshot = the page's raw bytes + SHA-256 + the extracted
text, never a summarizer's answer (adopted shift 9; extended shift 12
after the Anthropic amendment — the raw-HTML hash is a fetch-identity
receipt, the retained extracted text is the content receipt).

## Fetch record

All four fetched with `curl -sS -L`, this session's agent proxy, on
2026-09-03. Times are UTC at request start.

| Vendor | URL (final) | Time | HTTP | Bytes | SHA-256 (raw HTML) |
|---|---|---|---|---|---|
| OpusClip | `https://www.opus.pro/pricing` | 12:39:48Z | 200 | 612,498 | `d0decc7609c60329...feadfbc4` |
| Descript | `https://www.descript.com/pricing` | 12:39:49Z | 200 | 350,987 | `fb394edd70ef14ad...97154969` |
| Vizard | `https://vizard.ai/pricing` (redirected from www.) | 12:39:50Z | 200 | 213,639 | `d803505cb2e8ce86...894e9a2f` |
| CapCut | `https://www.capcut.com/pricing` | 12:40:59Z | **502** | 252 | — (Bad Gateway body) |

**RETAINED:** `2026-09-03-opusclip-pricing.extracted.txt` (20,546 bytes,
SHA-256 `bf7ea8a2a1a46146c62d5620b22e1a0954272d670ee38e0dc834f4e464a72278`)
— the byte-exact extraction of the OpusClip bytes above, the only one of
the four whose prices are server-rendered. Descript's and Vizard's
extractions are not retained because they contain no prices to retain
(see below); their raw hashes are recorded so a later fetch is
comparable.

## What each fetch actually established

### OpusClip — CONFIRMED, prices in server-rendered text

Quoted from the retained extraction:

> `Compare all plans|Free|$0|Starter|$15/mo|Pro|$29/mo|Business|Custom`

> `Starter|For individual creators|$|15| USD|/mo |Starter plan only
> available in monthly|Start your free trial|No credit card required|
> $15 billed monthly | | |150| credits | |per month`

> `Free|Free forever|$0 USD|/mo|Create an account| | |60| credits | |
> per month| | |Up to 1080p rendered clips`

So: **Free $0 (60 credits/mo) · Starter $15/mo (150 credits/mo, monthly
billing only) · Pro $29/mo · Business custom.** This CONFIRMS the
landscape report's "Opus free/$15/$29 ✓" (20 Aug) against the live page
14 days later, no change.

**The auto-posting claim, receipted.** The backlog's instruction was to
"note honestly that Opus Clip auto-posts now." The page carries it, in
its own words:

> `Social scheduler|Schedule a month's posts to all platforms in
> 10 minutes`

> `Post to social media|Social media scheduler|Post to multiple profiles
> per social platform|Clip title & description & hashtag generator`

The comparison table shows `-` against the Free column for the posting
rows, so posting is a paid-tier feature. **NOT CHECKED: exactly which
paid tiers gate which posting row** — the flattened text does not align
columns reliably enough to say, and no account was created. Any
battle-card sentence must therefore say "on its paid plans," never name
a tier.

### Descript — PARTIAL. One first-party figure, no tier table

The pricing table is client-rendered; no plan prices exist in the
fetched bytes. What IS in the bytes is Descript's own meta description,
served in the HTML:

> `Descript pricing starts free, with paid plans from $16/month.`

That is a first-party claim in hashed bytes and is usable as "from
$16/mo, per Descript's own page 3 Sep." **NOT CHECKED: the plan tiers,
what each includes, annual-vs-monthly.**

**A trap this fetch caught, recorded because the next reader will hit
it.** A naive grep of the raw HTML returns `$12`, `$18`, `$14` as well.
None of those are prices — they are React server-component stream
reference IDs (`\"$12\"`, `\"$18\"`). Reading them as a price table
would have produced a fabricated receipt of exactly the class the xAI
v1 error produced. Only `$16` (meta description) and `$0` survive.

### Vizard — NOT CHECKED. No price obtainable from static bytes

The page renders prices in JavaScript and says so in the fetched body:

> `We're sorry but Vizard - Repurpose Video Content with Minimal
> Efforts doesn't work properly without JavaScript enabled.`

Zero price strings other than `$0` appear in 213,639 bytes. **Vizard's
pricing is therefore UNKNOWN to this org.** It is named in the dossier
as a category member on the strength of its own page's positioning
copy, and carries no price claim anywhere.

### CapCut — FETCH FAILED (502 through the proxy)

Not re-fetchable this shift. CapCut's price therefore still rests on
the landscape report's `Standard $9.99, Pro $19.99/mo ✓ [VERIFIED]`
(20 Aug 2026) — a real document this org has read, carried at that
date with a re-verify flag, not a fresh read.

## Doctrine check

Three of four vendors' price claims are now graded by what the bytes
actually support, not by what the category "obviously" costs: one
CONFIRMED, one PARTIAL, one UNKNOWN, one carried on a dated secondary
read after a failed fetch. No price in the dossier or battle cards
exceeds what this table supports.
