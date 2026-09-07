# HOLO PRICING — MACHINE FETCH FROM THIS BOX, 2026-09-07. THE EGRESS BLOCK DID NOT REPRODUCE.

CONFIDENTIAL — internal (law 8). Competitor intelligence.

**Shift 25, 2026-09-07. SNAPSHOT + RECEIPT.** STATUS: **DRAFT — UNGATED.**
Corroborates `2026-09-03-holo-primary.md` (Phin's capture, the source A15 is
SOURCED on). **It does not replace it** — whether a hashed fetch becomes the
row's named document is a revaluation (law 7) and is put to the chief.

**WHY THIS FILE EXISTS.** The chief's ruling on A15 (inbox, 2026-09-07T22:42Z)
carried, as a limitation on the face of the row, *"`tryholo.ai` is
egress-blocked to every agent here, so the row cannot be refreshed by this
org."* Four shifts had recorded that block. Under the blind-spot attempt rule a
limitation is re-established by trying the door, so it was tried before it was
written down again. **It opened.**

## 1 — FETCH RECORDS, verbatim, as run

```
$ date -u   → 2026-09-07T22:49:06Z
$ curl -sS -m 30 -D pricing.headers -o pricing.html -w "%{http_code} %{size_download}B %{content_type}\n" https://tryholo.ai/pricing
200 198978B text/html; charset=utf-8
$ sha256sum pricing.html
8bc11e1fc66b5e966194600e00b925e07b3c6281d3095bfea4e7d0fe74b7ada5
$ head -5 pricing.headers
HTTP/1.1 200 Connection Established

HTTP/2 200
accept-ch: Sec-CH-Prefers-Color-Scheme
age: 0
$ grep -c "<script" pricing.html
2
```

```
$ date -u   → 2026-09-07T22:49:55Z
$ curl -sS -m 30 -o refund.html -w "%{http_code} %{size_download}B %{content_type}\n" https://tryholo.ai/policies/refund
200 131637B text/html; charset=utf-8
$ sha256sum refund.html
a3c1f747c64357274e0d10d5612a5089603f05ee93ce0f8f69c01708a2d1c623
$ grep -o -i -E "last updated[^<]{0,40}|seven \(7\)[^<]{0,60}" refund.html | head -3
Last updated: September 2, 2026
seven (7) calendar days after the payment, provided that none of the
seven (7) calendar days after the payment, or in respect of a
```

**Retained:** the pricing page's extracted text —
`2026-09-07-holo-pricing.extracted.txt`, 169 lines, SHA-256
`0e12080ead6be388b0c83582e166a8eb323bcfd14367c1557fe81a9d0481950d` — made by
stripping `<script>`, `<style>` and tags and unescaping entities. The raw HTML
is not retained (a raw-HTML hash is a fetch-identity receipt, not a content
receipt — snapshot doctrine, shift 12); the hash above is what a later fetch's
raw bytes are compared against, and the extracted text is what its content is
diffed against. **The refund page's text was NOT extracted or retained** — the
two lines above are the whole of what was checked on it.

## 2 — THE PLAN BLOCK, verbatim from the extracted text (lines 10–47)

    Pick your plan
    Scale your output with more ads every month. Cancel anytime.
    4.9
    /5 from
    4268
    customers
    Monthly
    6 months
    Save up to 41%
    Starter
    For first-time content-creators
    $20
    $12
    /mo
    Save
    $48 / yr
    Get Starter
    120 creatives every month
    ≈ $0.10 per ad
    Up to 2 concurrent generations
    Selected models & features
    Standard email support
    Early access to new models
    Scale
    MOST POPULAR
    For consistent and easy content creation
    $48
    $29
    /mo
    Save
    $114 / yr
    Get Scale
    350 creatives every month
    ≈ $0.08 per ad — lowest cost
    Up to 6 concurrent generations
    All models & features
    Priority support
    Early access to new models & AI features

## 3 — THE COMPARE TABLE, verbatim (lines 60–84)

    Compare plans
    Starter
    Scale
    Price / month
    $12
    $29
    Ads / month
    120
    350
    Cost per ad
    ≈ $0.10
    ≈ $0.08
    Concurrent generations
    2
    6
    Models & features
    Selected
    All
    Priority support
    Early access
    Also…
    4,268
    brands launching with Holo
    4.9/5
    average creator rating

## 4 — AGAINST PHIN'S CAPTURE OF 2026-09-03 (`2026-09-03-holo-primary.md` §1)

| Primary (3 Sep, Phin) | This fetch (7 Sep, machine) |
|---|---|
| Header *"Pick your plan. Scale your output with more ads every month. Cancel anytime."* | line 10–11, same words |
| *"4.9/5 from 4268 customers"* | lines 12–15: `4.9` `/5 from` `4268` `customers` |
| Monthly / 6 months — *"Save up to 41%"* | lines 16–18, same |
| **TWO PLANS ONLY** | two plan names in the block (Starter, Scale) and two columns in the compare table; no third |
| List **$20** / **$48** | line 21 `$20`, line 36 `$48` — in the HTML both carry `line-through` (struck list price beside the promo) |
| Promo **$12/mo** / **$29/mo** | lines 22–23, 37–38 |
| Save $48 / yr · $114 / yr | lines 25, 40 |
| Creatives per month **120** / **350** | lines 27, 42: *"120 creatives every month"*, *"350 creatives every month"* |
| Cost per ad ≈ $0.10 / ≈ $0.08 *"lowest cost"* | lines 28, 43 |
| Concurrent generations 2 / 6 | lines 29, 44 |
| 4,268 brands · 4.9/5 · 1.2M+ ads | lines 81–84 carry the first two; **1.2M+ not looked for** |

**Every A15 figure in the primary appears in this fetch.** Nothing here was
compared beyond §1 of the primary: the Trustpilot header (A35), the refund
clauses (A34) and the logged-in product surfaces (A36) are **not** re-checked
by this file — the refund fetch above establishes only that the page still
self-dates 2 Sep 2026 and still says seven calendar days.

## 5 — WHAT THIS CHANGES AND WHAT IT DOES NOT

- **A15's second face-of-row limitation is rewritten from "cannot be refreshed
  by this org" to a dated fetch record.** The ruling's sentence was true on
  every shift that tried it and is not true of this one.
- **The grade does not move.** SOURCED on Phin's capture is the chief's ruling;
  this file corroborates it and is cited from the row as corroboration.
- **The capture date is still the thing that decays** — now two of them.

## NOT CHECKED

### LIMITATIONS — an attempt was made and this is what it returned
- **Which side changed.** Shifts 12–24 recorded an egress block on
  `tryholo.ai` from boxes behind the same kind of proxy; this shift's `curl`
  returned 200 with `age: 0`. Attempt: one fetch per page, one region, one
  moment. Returned: no way to tell whether the proxy policy, Holo's edge, or
  the session's network differs. **The next fetch may be blocked again, and a
  block then would not make this record false.**
- **No JavaScript was run.** Attempt: `grep -c "<script"` → 2; the prices are
  in the server-rendered markup, which is why the extraction carries them.
  Returned: what a browser shows after scripts run (toggle state, geo pricing,
  A/B variants) is not established.
- **Not logged in.** Attempt: none possible from this box — no credentials.
  Returned: nothing about A36's surfaces.

### OPEN ITEMS — no attempt stands behind these
- **`trustpilot.com/review/tryholo.ai`** was not fetched. Owner: next shift,
  same instrument, one call.
- **The refund page's clauses (§4.1 5% fee, §4.2 credits, §7.1)** were not
  extracted; only the date and the seven-day term were grepped. Owner: next
  shift.
