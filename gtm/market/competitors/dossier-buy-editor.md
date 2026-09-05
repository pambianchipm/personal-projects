# Competitor dossier — BUY-EDITOR (OpusClip · CapCut · Descript · Vizard)

STATUS: GATED (rounds 1–3) — skeptical SMB owner + competitor's salesperson
+ fresh verifier. SMB owner: FAIL r1 → PASS-WITH-NOTES r2. Competitor's
salesperson: FAIL r1 → FAIL r2 (narrow) → fresh verifier r3
PASS-WITH-NOTES. 31 required edits across the three rounds, all applied.
Verdict (all ledgers verbatim):
`gtm/org/reviews/2026-09-03-shift12-both-gates.md`.
The chief confirms GATED → READY-FOR-PHIN; the boss does not self-pass.
OWNER: GTM boss · shift 12, 2026-09-03
CONFIDENTIAL — internal (law 8). No public claim about any vendor here
ships without Phin's sign-off.
TEMPLATE: PM deck p38–39. NUMBERS: by reference from
`gtm/raise/model/assumptions.md` — A25, A25b, A26, A27, A28, A29 (law 4).
RECEIPTS: `gtm/raise/model/snapshots/2026-09-03-buy-editor-pricing.md`
(raw fetches, hashes, retained extracted text, 3 Sep 12:39–12:41Z).
SCOPE ORIGIN: backlog item 3 widened shift 11 by Phin's own-media
directive; the chief supplied the battle-card line "to be receipted
per-claim at dossier time." This dossier does that receipting — and one
of the chief's clauses does not survive it (see §Correction).

**First breath:** Player 2 is an AI marketing employee for small
businesses. This dossier is on the tools that take the owner's own
footage and cut it into shorts — the category Phin's own-media direction
walks straight into.

**Validation provenance (law 1):** vendor claims below come from live
fetched pages (hashed, extracted text retained) or are graded NOT
CHECKED. A22 — the belief that cutting and captioning is the #1 owner
time sink — is **OBSERVED-INFORMAL** (Phin's own conversations) and is a
hypothesis card J tests. It is **never cited as market research**, here
or anywhere.

---

## Overview

Long video in → short, captioned, platform-shaped clips out. The category
that did not meaningfully exist for SMBs three years ago and is now the
default answer to "I have footage and no time."

The four named:

- **OpusClip** — AI clipping with a "Virality Score," animated captions,
  auto-reframe, brand templates, AI B-roll. Credit-metered. **And it
  posts** (see below).
- **CapCut** — the dominant short-form editor for this buyer; phone
  footage in → Reels/TikToks with auto-captions out. Manual editing with
  strong AI assists, not a pipeline.
- **Descript** — edit video by editing its transcript; multitrack audio,
  screen recording, overdub. The prosumer/podcast end of the category.
- **Vizard** — repurposing-first, positioned at marketers ("videos at
  scale"). **This org knows nothing about its pricing** (A28).

## Key stats

| Vendor | Price | Grade / source |
|---|---|---|
| OpusClip | Free $0 (60 credits/mo) · **Starter $15/mo** (150 credits/mo, monthly billing only) · **Pro $29/mo monthly — or $14.50/mo on annual ($174/yr, 3,600 credits)** · Business custom | **A25 — SOURCED.** Live page, raw fetch 3 Sep 12:39:48Z, HTTP 200, 612,498 bytes, hash + retained extraction filed. Confirms the landscape report's 20 Aug figures unchanged |
| Descript | free tier; **"paid plans from $16/month"** | **A26 — DIRECTIONAL** (regraded at gate r2: the meta-description string was recorded at fetch time, but Descript's extraction was NOT retained, so it cannot be re-checked against anything). Descript's own meta description in the fetched bytes. The tier table is client-rendered and was not obtained |
| CapCut | Standard $9.99 / Pro $19.99 per mo | **A27 — AGENT-REPORTED** (2026-09-05; was DIRECTIONAL). Landscape report's **own self-assigned** [VERIFIED] 20 Aug — **that tag is the swarm's, not a receipt**; live re-fetch 3 Sep returned **HTTP 502**. A dated secondary read, not a fresh receipt |
| Vizard | **UNKNOWN** | **A28 — NOT CHECKED.** Page renders prices in JavaScript and says so; zero price strings in 213,639 fetched bytes. **No price claim about Vizard may be made anywhere** |
| Category band | ~$0–29/mo **at monthly list** across the three with established prices, with an **established paid floor of $14.50/mo on annual** (A29) | **A29 — DERIVED from A25/A26/A27 only, and AGENT-REPORTED IN PART as of 2026-09-05**: A27 is one of the vendors and is AGENT-REPORTED, so the band's composition inherits it; its stated endpoints come from A25, which has a hashed primary fetch. Not a market claim |

**A fabrication this shift nearly produced, recorded as a warning.** A
grep of Descript's raw HTML returns `$12`, `$18` and `$14`. They are
React server-component stream reference IDs, not prices. Quoting them
would have produced a fake price table with a real hash attached to it —
the xAI-v1 failure mode wearing a receipt. Only `$16` and `$0` survive
the read. (Filed in the snapshot; noted here because the battle card is
where such a number would have gone.)

## The chief's battle-card line, receipted — and one clause corrected

The chief's proposed line (backlog item 3): *"they edit; none of them
plans, writes in your voice, waits for your click, posts in windows and
reads results — the loop is the difference, not the editor."*

Claim by claim, against the fetched pages:

| Clause | Verdict | Receipt |
|---|---|---|
| "they edit" | **HOLDS** | All four are editing/repurposing products by their own positioning |
| "none of them plans" | **HOLDS for OpusClip only** — zero occurrences of "calendar" in its retained extraction; NOT CHECKED for Descript and Vizard (extractions not retained) and CapCut (no page fetched — 502) | OpusClip's retained extraction lists clipping, captions, reframe, templates, B-roll, scheduler — no planning. NOT CHECKED for Vizard beyond its marketing copy |
| "writes in your voice" | **HOLDS, narrowly** — OpusClip generates clip titles, descriptions and hashtags, which is writing; none of the four claims a persistent brand-voice model over an account's history | OpusClip retained extraction: `Clip title & description & hashtag generator` |
| "waits for your click" | **HOLDS for OpusClip only** — zero occurrences of `approv` in its retained extraction | NOT CHECKED for the other three, per the retention gap in NOT CHECKED (vii) |
| **"posts in windows"** | **FAILS as a differentiator against OpusClip** | **A25b.** Its page sells `Social scheduler|Schedule a month’s posts to all platforms in 10 minutes`, `Post to social media`, `Post to multiple profiles per social platform` |
| "reads results" | **FAILS as an absolute; HOLDS only as "no business-outcome attribution"** | **Corrected at the gate r1 against our own retained extraction**, which ships an Analytics section on the paid tiers: `Analytics\|Clip Analytics\|Real-time trend analysis`. OpusClip measures clip performance. What it does not do is tie a clip to a booking, a cover or a sale — that is the surviving distinction and the only one we may say |
| "the loop is the difference, not the editor" | **HOLDS, and is the right frame** | It survives precisely because the posting clause was removed from it |

### Correction (for the chief)

**The clause "posts in windows" must come out of the BUY-EDITOR line.**
OpusClip posts. The backlog already carried the instruction to "note
honestly that Opus Clip auto-posts now," and the live page confirms it on
paid plans — the org must not ship a battle card whose differentiator is
a feature the competitor advertises on its pricing page. A competitor's
salesperson would open with it, and be right.

**Amended line, receipted — DRAFT, NOT CLEARED FOR EXTERNAL USE pending Phin's sign-off (law 8), on the model of the Holo positioning line's fence:** *"They cut. One of them even posts. None of
them decides what to make this month, waits for your OK, or tells you
which clip brought anyone in — the loop is the difference, not the
editor."*

Every clause of that sentence is supported by the table above. On the
tier question: **CHECKED at the gate r1** — the earlier "NOT CHECKED:
which paid tier gates which posting row" was wrong, and the answer was
in our own retained extraction the whole time. The **Starter $15** plan
card lists `Auto post to YouTube Shorts, TikTok, IG Reels, or download`;
the **Pro** card lists `Social media scheduler` and
`|6| social account connections` under "Everything in Starter plan,
plus:". **Assume they
post from $15.** Still NOT CHECKED: the remaining comparison-table
posting rows, whose columns the flattened text does not align.

## SWOT (of the category, from the owner's seat)

**Strengths**
- **Cheapest real leverage in the market.** A29's band against A1's $59
  is a hard comparison for us, and it is the honest one.
- The output is the owner's own footage — maximum authenticity, zero
  "AI-generated" penalty.
- Instant, obvious value: one long video becomes ten posts today.
- OpusClip specifically now spans cut **and** publish, compressing two
  steps of the workflow into one subscription that starts at $15
  monthly — $14.50/mo on Pro annual.
- Enormous distribution and iteration speed (CapCut sits inside the
  TikTok ecosystem).

**Weaknesses**
- **They start from footage that does not exist yet.** Every one assumes
  the owner already shot something long. The salon owner with no footage
  gets nothing from any of them. This is the category's structural gap
  and it is where the marketing employee actually lives.
- No planning surface found — zero occurrences of "calendar" in
  OpusClip's retained extraction. NOT CHECKED for Descript, Vizard and
  CapCut (no retained text; CapCut 502'd).
- No approval gate found — zero occurrences of `approv` in OpusClip's
  retained extraction; NOT CHECKED for the other three. Appropriate for
  a creator, a real problem for a business where the owner is liable
  for what goes out.
- No **business-outcome** reading. OpusClip ships Clip Analytics and
  real-time trend analysis on paid tiers (retained extraction; see the
  clause table) — it measures clips. What none of them measures is what
  the *business* got. Virality Score is a *prediction* about a clip;
  that is a separate and weaker point. NOT CHECKED for the other three.
- No engagement. Comments and DMs are untouched.
- Credit metering makes cost lumpy and usage-anxious.

**Opportunities (for us)**
- Complement, not conquest. `UNTESTED`, but the likeliest true shape is
  that an owner keeps CapCut and buys us for the operating layer. A
  battle card that demands they cancel it will lose.
- The gap between "clip exists" and "clip earned something" is exactly
  the claims engine's territory (`console/lib/claims.ts` — registry
  whitelist, n floors, FDR correction, suppressed claims kept with
  reasons).
- If the build org's own-media feasibility spike lands, the honest
  Player 2 sentence becomes "bring your phone clips; we do the rest" —
  which is the category's own promise **plus** the loop. That line is
  already parked in the truth map awaiting the spike; it is not claimable
  today.

**Threats (to us)**
- **Direct roadmap collision.** If own-media ships, we are a $59 product
  competing with a $15 product on the feature the $15 product is named
  for. Our answer has to be the loop; if we argue cutting quality, we
  lose to a company that does only that.
- OpusClip already crossed from editing into posting. The next crossing —
  planning, or an approval gate — would take our differentiator with it.
- Model economics: A24 prices the own-media reasoning add at
  ~$0.26–0.45/clip (PROJECTED). A competitor charging $15 flat for
  unlimited-ish clipping has a cost structure we should not assume we can
  match.

## KSPs (what BUY-EDITOR sells)

1. **Ten posts out of one video, today.**
2. **It's your real footage** — nothing generated, nothing fake.
3. **$0–29/mo at monthly list; $14.50/mo is the real paid floor.**
4. (OpusClip) **and it'll post them for you.**

## Primary features

AI clip selection with virality scoring · auto-reframe to vertical ·
animated multi-language captions · brand templates · AI B-roll ·
transcript-based editing (Descript) · bulk export and NLE handoff ·
social scheduling and multi-profile posting (OpusClip, paid).

## What's great about it

It is the highest ratio of value to price anywhere in this buyer's world,
and it solves a real, named, physical chore. Nobody who buys OpusClip at
$15 feels cheated. Any Player 2 pitch that treats these tools as
unserious will read as dishonest to an owner who uses one daily.

## Who should pick it

- An owner who **already produces long-form** (a podcast, class
  recordings, livestreams, long walkthroughs) and needs it cut up. This
  is the category's ideal customer and it is not our ICP.
- A creator, not a business — no approvals needed, no attribution
  wanted, no comment SLA.
- Anyone whose entire marketing problem is "editing takes too long." If
  that is genuinely the whole problem, they should buy the editor and
  keep their $59.
- Someone testing whether video works at all, before committing to an
  operating subscription.

## The trade route (product asks — Phin's approval BEFORE the chief files anything)

1. **Coexistence, not replacement.** The most probable real-world
   configuration is Player 2 + CapCut. Whether that is a supported story
   or an awkward silence is a positioning decision Phin should make; it
   is not the boss's to take.
2. **The own-media spike's competitive brief.** If the build org prices
   the own-media loop, it should know it is entering a category whose
   entry price is $0 and whose leader already posts. That changes what
   "good enough" means for the cutting quality bar. *(Proposal.)*

## NOT CHECKED

- (i) **Vizard entirely** — pricing, features, tiers (A28). Named as a
  category member on its own positioning copy alone.
- (ii) **CapCut pricing** — 20 Aug secondary read; 3 Sep fetch 502'd
  (A27).
- (iii) **Descript's tier table** — client-rendered, not obtained (A26).
- (iv) **RETIRED at the gate r1** — the tier gating WAS in our own
  retained extraction: auto-post at Starter $15, full scheduler at Pro.
  Still NOT CHECKED: the remaining comparison-table posting rows, whose
  columns the flattened text does not align.
- (v) Feature claims for all four rest on **pricing pages only**. No
  account was created, no product was used. A pricing page is a marketing
  document; absence of a feature there is weak evidence of absence in the
  product.
- (vi) Every claim about what owners *want* from this category. A22 is
  OBSERVED-INFORMAL and card J is the instrument that tests it — the
  dossier does not assume its own conclusion.
- (vii) **Only OpusClip has a retained content receipt.** Descript's and
  Vizard's extracted text was discarded (no prices in it to retain) and
  CapCut returned 252 bytes of Bad Gateway. Three of four
  feature-*absence* findings in the clause table are therefore
  unauditable, and one was asserted about a page that was never
  retrieved. Added at the gate r1, which caught the phrase "on any
  fetched page" doing work no fetch supports.
- (viii) **The clause table was only checked against the receipt when the
  gate demanded it, and the receipt disagreed twice** — the Analytics
  section and the Starter-tier posting row were both in the retained
  text and both missed, and the Pro annual price ($14.50) sat four
  characters from a line the snapshot did quote. Standing rule from
  this gate: an absence claim in this dossier quotes the search that
  found nothing, or it does not ship.
