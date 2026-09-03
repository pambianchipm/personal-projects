# Player 2 raise model — assumptions.md (THE truth table)

CONFIDENTIAL — internal-audit class (law 8).

STATUS: v3 GATED (shift-9 rebuild, with the model — fresh verifier,
written ledger, confirmation PASS: no dead number survives live).
Lineage: original gate r3 with the deck skeleton
(`2026-09-02-deck-skeleton-assumptions-hostile-investor.md`); shift-8
amendments REFUSED (read error — `2026-09-02-model-v1-chief-refusal.md`);
rows RESTORED from snapshot v2. Verdict:
`2026-09-02-model-rebuild-fresh-investor.md`. Awaiting chief's confirm.
SHIFT-11 AMENDMENTS (A20 snapshot-confirmed + exact A21 sums; NEW
A22–A24; OBSERVED-INFORMAL legend entry) GATED with model-v1 §4b —
hostile investor r2. Verdict:
`gtm/org/reviews/2026-09-03-shift11-both-gates.md`.
OWNER: GTM boss · shift 5, 2026-09-02
LAW 4: shared facts live HERE, once. The deck, the model, the site, and
the battle cards quote rows by ID (e.g. "A2"). Two artifacts disagreeing
with this table is a gate-fail for both. Grades: SOURCED (a document the
org read, named) · OBSERVED (real usage, n stated) · RULED (Phin's
decision, dated) · DERIVED (computed here from graded rows — the
derivation shown) · DIRECTIONAL (secondhand/unverified — never load-
bearing alone) · PROJECTED (a guess, never in an external artifact) ·
OBSERVED-INFORMAL (added shift 11, per the chief's own dictated term
for A22: a founder's real but unstructured observation — n stated as
he stated it; like DIRECTIONAL it is never load-bearing alone and
never external; unlike OBSERVED it names no instrument and upgrades
only through structured capture, e.g. the interview sheets).

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
| A15 | SMM tool band (Holo-class) | **~$20–48/mo list — CORRECTED shift 12, 3 Sep** (a near-permanent promo column runs ~$12–29). ~~~$12–48/mo~~ took the PROMO floor from one column and the LIST ceiling from another: the teardown's own headline is "a **$20–48/mo** price anchor" and its table puts $20 under *List* and $12 under *"Promo" (near-permanent)*; the landscape report Appendix B §2 independently says "Holo: Starter **$20** … Scale **$48**". Caught at the competitor-salesperson gate r1, which also noted the dossier condemned Holo's sale-price framing on one page while quoting its sale price as a band floor on another | DIRECTIONAL — Holo teardown (`clinkworthy/docs/competitor-holo.md` pricing table), third-party-sourced; the teardown's own flag carried: SPOT-CHECK before any external use; never load-bearing alone |
| A16 | SMB SaaS monthly logo churn prior | 3–7%/mo (compounded annual: 31–58%) — scenario BAND, not a claim about Player 2. (The Kalungi page's own "36 to 76%" annual figure matches no consistent annualization method; the compounded figures here are this table's, derivation: 1−(1−m)^12) | DIRECTIONAL — kalungi.com/blog/saas-churn-rate-benchmarks, read 2 Sep 2026 (the page states the band but cites no underlying study — graded accordingly); consistent with the secondary-source consensus surveyed same read. Used ONLY as scenario inputs in model-v1.md; Player 2's own churn is UNKNOWN (zero customers) and replaces this row the day real cohort data exists |

| A17 | Entry refund policy + rate | POLICY RULED (Phin D2): full refund on request, first 30 days. RATE: 5–15%/mo-1 scenario band — PROJECTED (no observation, no source; the chief's "DIRECTIONAL until observed" label noted, but no secondhand source was read, so this table grades it PROJECTED). LTV effect: entry LTV × (1−r), and refunders still consume ~1 month COGS — cells in model-v1 §3a | RULED (policy) + PROJECTED (rate) |
| A18 | Founder salary floor | $150,000/yr | RULED — Phin D10, 2 Sep (CONFIDENTIAL) |
| A19 | Target runway | 12 months | RULED — Phin D10, 2 Sep (CONFIDENTIAL) |
| A20 | Claude (Anthropic) list prices | claude-opus-5: $5/MTok in, $25/MTok out (the model the product defaults across agent.ts/pulse.ts); cache hits $0.50/MTok (10× under base input); batch tier $2.50/$12.50 | SOURCED — originally the Claude API skill's model/pricing reference (cached, self-dated 2026-06-24), read 2 Sep; CONFIRMED against the live page 3 Sep, raw fetch + hash: `snapshots/2026-09-03-anthropic-pricing.md`. ~~Fetch A (shift 11, 650,327 bytes, SHA-256 2d8de333…)~~ is retained as history but is NOT the receipt: its fetch time was never recorded and its raw bytes were not retained, so it is unreproducible (chief's shift-11 confirm condition 2). **The receipt is Fetch B, shift 12: 2026-09-03T12:33:46Z, HTTP 200, 650,389 bytes, SHA-256 aff8778e…, with the extracted text retained and hashed beside it** — every cell re-read from that retained text, unchanged. ~~RE-VERIFY flag~~ satisfied 3 Sep by Fetch B. Note (not modelled): the live table now lists Fable 5.1 at $10/$50 above Opus 5 — irrelevant while `claude-opus-5` is pinned in code, relevant the day the default moves |
| A21 | Reasoning-layer cost per entry customer | ~$12–38/mo scenario band (light–heavy; exact component sums $12.15 / $38.35 — carried here so consumers quote the row, not a fresh recomputation), NO caching assumed — naive upper bound | PROJECTED (a DERIVED stack over PROJECTED token sizes; the caps and list prices are SOURCED — the bound's own words: "the entire bound inherits this grade"); full derivation `anthropic-bound.md`; closing receipt = Phin's Anthropic invoice ÷ active workspaces |
| A22 | Own-media demand signal | "Cutting + captioning (and scripting) is the #1 time sink; owners prefer human-made/UGC footage over generated" | OBSERVED-INFORMAL — Phin's outside research + "I've talked to a few people" (directive, 2 Sep). A hypothesis card J TESTS, not a receipt; NEVER cite externally as market research; upgrade path = interview capture sheets |
| A23 | Transcription cost (own-media scenario) | ≤$0.05/min stress ASSUMPTION (A5's named exclusion, still unpriced in the live model) + assumed raw footage 2 min/clip — both PROJECTED, invented | PROJECTED — invented; no vendor chosen, no page read, so whether $0.05/min is a ceiling is UNVERIFIED until a vendor page is read (gate-corrected: "generous to no vendor" was an unreceipted market claim — struck). Exists so the line is priced (chief m5: three lines); closing receipt = vendor choice + raw snapshot at feasibility-spike time |
| A24 | Own-media per-clip reasoning add | ~$0.26–0.45/clip (4 calls/clip: script, beats, edit-list, caption-style × the bound's per-call sizes) → +$1.04–3.60/mo at 4–8 clips | PROJECTED — inherits A21's per-call token grade wholesale; derivation written out in model-v1 §4b |
| A25 | OpusClip list price | Free $0 (60 credits/mo) · Starter $15/mo (150 credits/mo, monthly billing only) · Pro **$29/mo monthly, $14.50/mo on annual ($174 billed annually, 3,600 credits/yr)** · Business custom. **Annual tier added shift 12 at the gate** — it was in the retained extraction all along (`Pro\|For professional creators, marketers, & teams\|$\|29\| USD\|$\|14.5\| USD\|/mo`, and `$\|174\| billed \|annually`), inside the one block quote the snapshot had trimmed. The established paid floor for the category is therefore **$14.50/mo**, not $15 | SOURCED — live page, raw fetch 3 Sep 12:39:48Z, HTTP 200, hash + retained extracted text in `snapshots/2026-09-03-buy-editor-pricing.md`; CONFIRMS the landscape report's 20 Aug figures unchanged |
| A25b | OpusClip posts to social itself | TRUE, on its paid plans — the page sells `Social scheduler|Schedule a month’s posts to all platforms in 10 minutes`, `Post to social media`, `Post to multiple profiles per social platform` (copied from the retained extraction, not retyped — r2 caught this row paraphrasing a string its own grade cell called verbatim) | SOURCED — same snapshot, verbatim rows. **Tier gating CHECKED shift 12 at the gate** (it was in the retained extraction; the earlier NOT CHECKED was wrong): the **Starter $15** plan card lists `Auto post to YouTube Shorts, TikTok, IG Reels, or download`; the **Pro** card lists `Social media scheduler` and `|6| social account connections|Everything in Starter plan, plus:` So: **assume they post from $15.** NOT CHECKED: the remaining comparison-table posting rows, whose columns the flattened text does not align |
| A26 | Descript entry price | "from $16/month" (its own page's meta description); free tier exists | **DIRECTIONAL — regraded at gate r2** (was SOURCED-PARTIAL): the string was recorded at fetch time but Descript's extraction was NOT retained, so this is a presence claim with no surviving receipt and cannot be re-checked. Re-fetch and retain, or leave it here. Prior note stands — same snapshot. Tier table is client-rendered and was NOT obtained; `$12/$18/$14` in the raw HTML are React stream IDs, not prices (trap recorded in the snapshot) |
| A27 | CapCut price | Standard $9.99 / Pro $19.99 per mo | DIRECTIONAL — `clinkworthy/docs/research-smm-landscape.md` [VERIFIED] grade, read 20 Aug 2026; live re-fetch 3 Sep returned **HTTP 502**, so this is a dated secondary read carrying a re-verify flag, not a fresh receipt |
| A28 | Vizard price | **UNKNOWN — no figure exists in this table** | NOT CHECKED — the pricing page renders in JavaScript and states it; zero price strings in 213,639 fetched bytes. Vizard may be named as a category member; no price claim about it may be made anywhere |
| A29 | BUY-EDITOR category price band | ~$0–29/mo **at monthly list** for the named tools where a price is established (A25–A27), with an **established paid floor of $14.50/mo on annual** (A25); the band excludes Vizard (A28) and is a band over FOUR vendors, never a market-wide claim. **Corrected shift 12** — the band was stated as if monthly list were the only shape | DERIVED — A25/A26/A27 only, with A27's staleness inherited. Not a market size, not a top-down figure (law 2) |
| A30 | Owner cadence + reach stats (INACTION) | 63% of owners feel pressure to post daily · 44% post weekly, 18% daily · accounts under 10K followers see 8–15% organic reach (3–4× the big-account average) · 43% spend ~6 hrs/wk on social | SOURCED with grades carried, not laundered — 63/44 and the reach figure: landscape report §2.1 (Adobe Express n=433 [VERIFIED, **vendor-adjacent — treat as a ceiling**]; Socialinsider [VERIFIED]); 18% daily is §1.7, not §2.1; the 43%/6hrs figure is VerticalResponse and the origin report flags the survey **stale/undated** — never load-bearing alone. Opened shift 12 at the gate r2, which caught these stated in two artifacts each under a header promising quotation by reference |
| A31 | DIY assembled-stack cost | Tools $28–55/mo, ~$50–75/mo once video is in it · **true in-house DIY cost including labour $500–1,200/mo** | DIRECTIONAL — landscape report Appendix B. The labour figure rests on a **single source** (venturemedia.io) and is the most quotable and least defensible number in the BUILD dossier: **do not lead with it, and do not use it externally without a second source.** Opened shift 12 |
| A32 | AI use by social-media practitioners | 46% use ChatGPT for ideation · 39% for copy · **4% for calendar planning** | SOURCED with a **POPULATION CAVEAT that travels with every use**: measured on professional **social media managers**, NOT on SMB owners (46% and 4% at landscape §1.3 [VERIFIED verbatim]; 39% at §2.4 / Big Table [VERIFIED] — *not* §1.3). The same report says of the owner ICP "they barely buy tools." Applying this to a DIY owner is `UNTESTED` inference; carry the SHAPE (AI drafts, humans plan), never quote the percentage to an owner. Opened shift 12 |
| A33 | SMM tool-category bands | Design: Canva Pro $18/mo (Appendix B says $15 — **unresolved contradiction in the origin doc, disclosed not smoothed**) · ChatGPT Plus $20 · Buffer from $5/channel · Sprout $199–399/seat · approval tools $39–399 (Planable $39–59 · HeyOrca $59–149/calendar · Gain $99–399) · dedicated listening from $199/mo (Brand24), usually skipped below mid-market, though Vista Social bundles it at $79 | SOURCED — landscape report §1.5–1.9 and the Big Table, all [VERIFIED 2026-08] at their own grades. Opened shift 12 at the gate r2 |


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

- **Competitor-price snapshot debt (opened shift 12, 3 Sep):** three
  rows are short of a fresh first-party receipt and each is flagged
  where it is used. (a) **A15 (Holo)** — tryholo.ai has never been
  fetched by this org; the teardown's own "spot-check before quoting to
  a prospect" instruction stands, and the teardown itself is dated
  19 Aug and unre-verified. (b) **A27 (CapCut)** — the 3 Sep live
  re-fetch returned HTTP 502; the row is a 20 Aug secondary read until
  a fetch succeeds. (c) **A28 (Vizard)** — pricing is client-rendered
  and was not obtained; the row holds no figure, and no Vizard price
  may be stated anywhere until one is. Pay (a) before any external
  Holo comparison; (b) and (c) before either vendor's number appears
  on a surface Phin sends.
- **Snapshot doctrine amended shift 12 (from the Anthropic Fetch-A
  gap):** a raw-HTML SHA-256 is a **fetch-identity** receipt, not a
  content receipt — the same page hashes differently on every fetch
  where a nonce is present (Anthropic differed by 62 bytes between two
  fetches, 3 bytes against a third). Every page snapshot from here
  records a **UTC fetch time** and retains the **extracted text** in
  `snapshots/`, which is what a later read is diffed against.

## Change discipline

A row changes by shift, with the old value struck through and dated —
never silently. Downstream artifacts citing a changed row get flagged in
the same shift's ops-log entry.
