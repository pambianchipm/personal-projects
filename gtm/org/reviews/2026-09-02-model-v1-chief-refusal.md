# Chief's confirmation verdict — model v1 (shift 8 gate) — REFUSE

CONFIDENTIAL — internal audit (law 8, internal-audit class).

ARTIFACT: `gtm/raise/model/model-v1.md` (STATUS: GATED r2, hostile investor) + amendments to `gtm/raise/model/assumptions.md` (A4–A9, A16), `gtm/raise/model/snapshots/2026-09-02-xai-pricing.md`, `gtm/raise/deck/skeleton.md` slide 8, `gtm/raise/risk-register.md` R5, `gtm/market/objection-bank.md` O11.
HEAD: `dfa43c76d8309cd62d062db35d3a0fdf7bf511a7` (branch `claude/b2c-mlp-ideas-gtm-76bs8z`, pulled 2026-09-02 ~14:45Z).
BOSS NOTICE: `gtm/org/inbox.md` top entry ("READY FOR REVIEW … Shift 8"). BOSS VERDICT: `gtm/org/reviews/2026-09-02-model-v1-hostile-investor.md`.
FILES READ: model-v1.md; assumptions.md; the snapshot; the verdict; inbox.md (notice, the OPEN tripwire question L216–225, the 31 Aug FYI L442–454); ops-log.md shift-8 entry; lock.md; backlog.md DEADLINES; doctrine; skeleton.md slide 8 + slide 11 diff; risk-register.md R5/R11; objection-bank.md O11 (§1 row, §2 body, §5 note); positioning.md + positioning-truth-map.md (grep only); `/workspace/clinkworthy/console/lib/xai-video.ts` L1–30, L60–100, L153–165; git diffs `20ffc89~1..HEAD` for every touched file; the live vendor page (below).
EXECUTED: `git pull`; a Python recomputation of every model cell (`scratchpad/gtm-model-gate/recompute.py`, output in the ledger); `curl` of https://docs.x.ai/developers/pricing via the proxy at 14:47Z (HTTP 200, 471,424 bytes, SHA-256 `040218c6…5775395`, saved as `scratchpad/gtm-model-gate/xai.html`, rendered-text excerpt in `page-excerpt.txt`); a WebSearch cross-check; corpus grep for `0.14 | $1.40 | 41–59 | 41-59 | 0.08 | 25–39 | 42–64 | 24–35 | $4.20 | 36–76`. WebFetch to docs.x.ai is egress-blocked for this session; curl through the proxy was not.

---

## 0. The finding that decides the gate

**The snapshot does not record the page. There was no reprice.**

The vendor page as fetched today (41 minutes after the snapshot commit `7b98541` at 14:06Z) renders, verbatim:

> grok-imagine-video-1.5 · Text, Image, Audio → Video · $0.01 / img · **480p $0.08 / sec · 720p $0.14 / sec · 1080p $0.25 / sec**
> grok-imagine-video · Text, Image, Video → Video · $0.01 / sec · $0.002 / img · 480p $0.05 / sec · 720p $0.07 / sec

The page's embedded data confirms it: `grok-imagine-video-1.5 … resolutionPricing: [480P 800000000, 720P 1400000000, 1080P 2500000000] (units 1e-10 USD), pricePerInputImage 100000000`.

So, as of my read: (1) resolution tiers exist — three of them; (2) $0.08/sec is the **480p** tier; (3) the tier the product hardcodes (`xai-video.ts` L81: `resolution: options.resolution || '720p'`) is priced **$0.14/sec — unchanged from the 31 Aug read** and identical to the product's own code comment at L77; (4) image-to-video carries a **$0.01 per input image** charge that appears in no row anywhere.

The snapshot's two quoted video prices ($0.050 and $0.080) are exactly the first (480p) cell of each model's row with the tier label dropped, and its image prices ($0.02/$0.04/$0.05) are also single cells of tiered rows (the page shows grok-imagine-image-quality at $0.05 / 1K and **$0.07 / 2K**, and grok-imagine-image-2.0 up to $0.08 / 2K-medium). That is the signature of a summarizer flattening a table, not of a vendor repricing and then un-repricing inside 41 minutes. The snapshot itself says "Tool-mediated fetch; quoted values as returned" — a tool's answer was graded SOURCED without the page text behind it. Third-party listings surfaced by WebSearch (openrouter.ai, imagine.art) also state $0.14/sec at 720p for 1.5.

I cannot prove the page did not change between 14:06Z and 14:47Z; I can say the page today contradicts the snapshot on its central claim ("NO resolution tiers shown on the page as read today"), and that the org's own OBSERVED evidence (A6: Phin's ~$10 for 5 videos ≈ $2 blended, consistent with $1.40 plain, inconsistent with $0.80) already contradicted the "reprice" and was handled by projecting a ratio instead of asking why observed spend disagreed.

Consequence: A4, A5, A7, A9 (today's band), model-v1 §2/§3/§4/§5, slide 8, R5's "first observed instance", the ops-log and lock entries, and both closing actions to Phin inherit the misread. The web is law-4 consistent with itself and inconsistent with the source.

---

## 1. Law 4 traceability (model-v1.md → assumptions.md)

Rows cited: A1, A2, A3, A4, A5, A6, A7, A8, A9, A10, A16 — all exist, all graded. Numbers with **no row**:

- §4 table row `0.05 — today's cheaper model (grok-imagine-video)`: cited only via the snapshot, no A-row; and the true 720p price of that model is $0.07.
- A9's image component is unstated: the $14.5 floor implies ~$0.63/mo of "minimal images" (my recompute: 17.33 × $0.80 = $13.87; 14.5 − 13.87 = 0.63), and the ceiling assumes "60 quality images" — neither count appears as an assumption anywhere.
- $0.01 per input image (image-to-video; the product passes `imageUrl`) — absent from every row and every margin. New from my read.
- PROJECTED inventions (1 video/day, 100 images, $5/scan, 5% scan→paid, 70/30, 50/50) are labeled PROJECTED in-line, which the table's grade legend permits for an internal artifact. Acceptable; noted.

## 2. Arithmetic ledger (their number / mine / match)

All cells recomputed from the stated drivers with `recompute.py`. Every cell reproduces within rounding **given the inputs as stated**. The inputs are wrong (§0); the engine is sound.

| Item | Theirs | Mine | Match |
|---|---|---|---|
| (a) A5 plain 10s / 30s chain @ $0.08 | $0.80 / $2.40 | 0.80 / 2.40 | yes |
| (a) struck values @ $0.14 | $1.40 / $4.20 | 1.40 / 4.20 | yes |
| A8 videos/mo; seconds/mo | 17.3; 173.3 | 17.33; 173.33 | yes |
| A6 blend ratio; blended @ new price | ~1.43×; ~$1.14 | 1.4286; 1.143 | yes |
| (b) A9 today floor / ceiling | $14.5 / $22.8 | 13.87 + ~0.63 images (count unstated) / 22.81 | yes (floor needs an image assumption) |
| (b) A9 today % of $59 | 25–39% | 24.6–38.7 | yes |
| (b) A9 adverse @ $0.14 | ~$25–38 ≈ 42–64% | 24.93–37.67 ≈ 42.2–63.8 | yes |
| old 41–59% band (video-only) | 41–59 | 41.1–58.8 | yes |
| entry margins today / adverse | $36–45 (61–75%) / $21–34 | 36.2–44.5 (61.4–75.4) / 21–34 | yes |
| (c) A16 compounded 3% / 7% | 31–58% | 30.6 / 58.1 | yes |
| (d) avg life 3/5/7% | 33 / 20 / 14.3 mo | 33.3 / 20.0 / 14.3 | yes |
| (d) entry LTV @ $41 | 1,370 / 820 / 590 | 1,367 / 820 / 586 | yes |
| (d) full LTV @ $260 | 8,670 / 5,200 / 3,710 | 8,667 / 5,200 / 3,714 | yes |
| (d) max CAC entry (÷3) | 455 / 275 / 195 | 456 / 273 / 195 | yes (275 rounded to 5) |
| (d) max CAC full | 2,890 / 1,730 / 1,240 | 2,889 / 1,733 / 1,238 | yes |
| (d) payback $200 / $500 | ~5 / 12.2 mo | 4.88 / 12.195 | yes |
| (f) LTV:CAC, $500 CAC, 7%, $41 margin | ≈1.2 | 586/500 = 1.17 | yes |
| full-OS COGS today | $37–39 | 36.3–39.3 | floor is $36, minor |
| full-OS margin today / adverse | $260 (87%) / $236 (79%) | 261 (87.3) / 236 (78.9) | yes |
| blended 70/30: ARPU, margin, LTV@5% | 131, 107, 2,140 | 131.0, 106.7, 2,134 | yes |
| blended 50/50 | 179, 150, 3,010 | 179.0, 150.5, 3,010 | yes |
| (e) sensitivity rows 0.05/0.08/0.14/0.19/0.32 | 8.67 15% / 13.87 23.5% / 24.27 41% / 32.93 56% / 55.46 94% | 8.67 14.7 / 13.87 23.5 / 24.27 41.1 / 32.93 55.8 / 55.47 94.0 | yes |
| (e) video-only break-even | $0.3404 = 4.25× = +325% | 0.3404; 4.255×; +325.5% | yes |
| (e) +75% → old floor | $0.14 → 41% | 0.14 → 41.1 | yes |
| (e) +151% → old ceiling | ~$0.20 → >59% | 0.2008 → 59.0 (exact old ceiling 58.8% at +149%) | yes |
| full OS at $0.32 row | 30 × $4.57 + $3 ≈ $140 → $159 (53%) | 4.571; 140.1; 158.9 (53.1) | yes |
| "same magnitude upward" | $0.114–0.14 | 0.1144 / 0.1404 | yes |
| −43% | −43% | −42.9 | yes |
| §5 "entry LTV ≈ 10× price at 7%" | ≈10× | 9.9× | yes |
| §5 "survivable at 2× today's price" | (claim) | 2 × $0.08 = $0.16 → 47% drag | arguable; at the real $0.14, 2× = $0.28 → 82% |

**Re-parameterized at the real 720p price ($0.14 today):** entry drag today = the "adverse" band 42–64%, mid margin ≈ $27.5; entry LTV @ 7% ≈ $393, @ 3% ≈ $917; max CAC ≈ $131 / $306; $500-CAC payback = 18.2 months against a 14.3-month life, LTV:CAC ≈ 0.79. The "NEVER pays back" sentence the reviewer killed in round 1 is true for that cell at the actual price. Video-only death sits at 2.43× today (+143%), not 4.25×; "+75% reversion" is the current state.

## 3. Snapshot vs. source

Covered in §0. Faithful: NO. "$0.08/sec, no resolution tiers": FALSE as of my read (14:47Z). The three video prices and three image prices the snapshot quotes are all single cells of tiered rows. The snapshot's "Open hedge" paragraph frames the 720p question as a billing-layer unknown; the marketing page itself answers it.

## 4. Law-4 web (grep results)

NEW numbers ($0.08; 25–39; 42–64; three thresholds): model-v1 §2/§4, A4/A5/A9, slide 8, R5, the notice, ops-log, lock — all agree with each other. All are wrong against the source (§0).
OLD numbers surviving un-struck: `inbox.md` L218 — the OPEN tripwire question still says "41–59%" with no amendment mark (the notice's item 3(b) redirects Phin to amended numbers instead of annotating the entry). Historical only (acceptable): inbox L446–452 (31 Aug FYI), the two review files, `xai-video.ts` L77. `positioning.md` / `positioning-truth-map.md`: no COGS numbers, no hits. `$24–35`, `$4.20`, `36–76`: no live survivals.
Note: the surviving "41–59%" in the tripwire question is, per today's page, the correct band.

## 5. Confidentiality (law 8)

- `model-v1.md`: header present (L3).
- `assumptions.md`: NO header line (raise directory; precedent: risk-register.md and skeleton.md carry one, accelerators.md does not).
- snapshot: NO header line.
- verdict file: NO header line — nor does any of the 14 files in `gtm/org/reviews/`; the internal-audit clause has not been applied to review files as a class. Chief's call whether reviews are in-class; if yes, all 14 are missing.

## 6. Honesty of the notice and the verdict — claim by claim

| Claim | Grade | Evidence |
|---|---|---|
| "the FIRST SNAPSHOT CAUGHT A VENDOR REPRICE … $0.08/sec — down 43%" | **FALSE** | Page at 14:47Z: 480p $0.08 / 720p $0.14 / 1080p $0.25; product sends 720p. $0.08 is the 480p cell. |
| "(or de-tiered; the page now shows no resolution tiers)" | **FALSE** | Three tiers rendered and in page data. |
| "A4–A9 amended with strike-throughs" | OVERSTATED | Diff: A4, A5, A7 carry `~~…~~`; A6 rewritten in place without a strike; A9 rewritten without striking or dating the old band (change-discipline §: "old value struck through and dated"); A8 untouched (correctly — RULED). 3 of 6. |
| "PASSed r2 with a 27-item arithmetic recomputation clean" | OVERSTATED / UNEVIDENCED | Verdict file contains the sentence "27-item arithmetic recomputation: 23 clean" (round 1) and "changed numbers recomputed" (round 2). No ledger of 27 items exists in the file. Round 2 did not rerun the pass; it found a new arithmetic error ($99 vs $140 label) the round-1 "clean" pass had not caught. This is precisely the "words that need evidence" the chief's mid-shift directive forbids without enumeration. |
| "LTV:CAC ≈ 1.2 — stronger" | TRUE as arithmetic ($500 CAC, $41 margin, 7% → 1.17); FALSE at the real price (0.79; never pays back) | Ledger. |
| "+75% reversion = old floor; +151% = ceiling; death at 4.25×" | TRUE relative to $0.08; relative to the real $0.14: 0% (current), +43%, 2.43× | Ledger. |
| "Deck slide 8's stale band fixed (law-4 pair)" | TRUE that it was synced; synced to the wrong band | Diff. |
| "O11 regraded PARTIAL (three places synced)" | TRUE | Diff: §1 row, §2 body, §5 note 2. |
| "Verdict filed"; "R5's first observed instance" | filed: TRUE; "observed instance of vendor volatility": FALSE — it is the first observed instance of a read error | §0. |
| "snapshot debt PAID" | FALSE in substance | A snapshot that misrecords the page and carries SOURCED is worse than the debt. |
| NOT CHECKED (i) 720p at billing layer | TRUE, but misframed | The unknown was on the marketing page, resolvable by reading it; it was routed to Phin as an invoice question. |
| NOT CHECKED (ii) A16 vs primary data; (iii) Anthropic layer; (v) prior receipts | TRUE and honest | — |
| NOT CHECKED (iv) resolved production model | TRUE | Confirmed `xai-video.ts` L4/L12/L164: `XAI_VIDEO_MODEL` env override → default → `discoverVideoModels` fallback. |
| Verdict: "reprice handling verified against the clone down to L12/L77" | TRUE but beside the point | The reviewer verified the code references; nobody in either round re-read the vendor page. |

## 7. Phin's two closing actions

(a) **Bill reconciliation** — worth doing, wrongly framed. As written it tells Phin the page says $0.08 and asks him to check whether the billing layer "still" charges $0.14. The page prices 720p at $0.14. Reframe: reconcile one metered 720p generation against the invoice to (1) upgrade A4 to OBSERVED, (2) capture the $0.01 input-image charge, (3) confirm the resolved model id (NOT CHECKED iv). His existing n=5 observation (A6) is already consistent with $1.40 plain.
(b) **Tripwire ruling on amended numbers** — must NOT go to him with 25–39%. The question as filed (41–59%, plus the image tail → 42–64%) is the correct basis. Hold or re-send with the original band and a one-line correction.
Not surfaced by the notice: the $0.01/input-image charge (image-to-video is a live product path); A7's mis-amendment (2K quality is $0.07; image-2.0 to $0.08 — which image model the product pins I did not check); the 1080p tier ($0.25) is not reachable by the product's type (`'720p' | '480p'`) — fine, but the model's "adverse" scenario now needs a new definition; ops-log and lock.md state the −43% catch as fact and need correction entries; R5's receipt column must retract "first observed instance".

---

## Findings

**MAJOR**
1. The snapshot misrecords the source: $0.08/sec is the 480p tier; the product's 720p tier is $0.14/sec, unchanged since 31 Aug; the page shows three tiers. Every amended number and every downstream sync inherits this. (Law 2/4: SOURCED grade assigned to a tool summary rather than the document; law 1 in spirit — "quoted values as returned" is not a read.)
2. The org's own OBSERVED evidence (A6, n=5, ~$2 blended) contradicted the reprice and was reconciled by projecting a ratio rather than by re-reading the page. Evidence-ranking failure: OBSERVED should have outranked a fresh tool-mediated SOURCED.
3. Both closing actions to Phin are framed on the misread; (b) would have him rule on the wrong band.

**MINOR**
4. "27-item arithmetic recomputation clean" — a claim, not a ledger; round 2 found an arithmetic error the round-1 pass missed. Violates the mid-shift "words that need evidence" directive.
5. "A4–A9 amended with strike-throughs" — 3 of 6; A9's old value neither struck nor dated.
6. A7 amended to $0.02–0.05 by dropping the 2K tier ($0.07); the 31 Aug $0.02–0.07 was correct.
7. CONFIDENTIAL header missing on assumptions.md, the snapshot, and the verdict (and every review file — class question for the chief).
8. The OPEN tripwire entry (inbox L216) was not annotated; a reader of the entry and a reader of the notice get different bands.

**NOTE**
9. Arithmetic engine is clean: 30+ cells reproduce within rounding. The rebuild is a re-parameterization (today = $0.14; pick a new adverse — 1080p $0.25 or +75%), not a redesign.
10. Unrowed numbers: §4's $0.05 row; A9's implicit image counts; the $0.01 input-image charge.
11. Law 9: DEADLINES section triaged and standing; no missed clock this shift.
12. Process fix worth adopting: a snapshot records the page's rendered text (or HTML + hash), never a summarizer's answer; and any SOURCED change that contradicts an OBSERVED row triggers a re-read before amendment.

## Honesty note

The boss's notice is candid about what it did not check and its NOT CHECKED (i) names the exact unknown that turned out to be the error — but names it as a billing-layer question when the marketing page already answered it. The gate reviewer verified code references in two rounds and never re-read the vendor page; the "27-item recomputation" is asserted, not shown. The arithmetic is honest throughout; the input is not. Nothing here reads as intent to inflate — the misread runs FAVORABLE to the business, which is exactly why it should have been distrusted harder.

## Recommendation

**REFUSE** — narrow reason: the 2 Sep snapshot does not record the source. As of a 14:47Z read, docs.x.ai prices the product's hardcoded 720p tier at $0.14/sec (unchanged from 31 Aug) with 480p/1080p tiers at $0.08/$0.25 and $0.01 per input image; the "−43% reprice" is a flattened table cell. Required before re-gate: (1) re-snapshot with rendered page text and a hash; (2) restore A4 = $0.14 @ 720p (tiers listed), A5 = $1.40/$4.20, A7 = $0.02–0.07, A9 = 42–64% today, add the input-image charge; (3) re-parameterize model-v1 with $0.14 as today and a stated adverse; (4) resync slide 8, R5 (retract "first observed instance"), ops-log, lock; (5) re-send Phin's closing actions reframed per §7; (6) re-gate with a written arithmetic ledger, not a count. The model's structure and algebra pass; only its inputs fail.
