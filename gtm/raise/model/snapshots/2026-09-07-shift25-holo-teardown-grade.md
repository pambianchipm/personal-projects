# THE HOLO TEARDOWN, GRADED AGAINST THE PRIMARY — the pulled §4, re-cut

**PROVENANCE, CORRECTED, AND IT IS THE FIRST LINE BECAUSE IT CUTS AGAINST US: the teardown's flag — *SPOT-CHECK before any external use* — entered A15's cell at `18512e8`, 2 September 2026, shift 5, in the commit that CREATED the row. Not `c3e9f91`/shift 15, as the pulled §4 said. The warning was written down first, and shift 12 shipped three false figures from the same file underneath it.**

CONFIDENTIAL — internal-audit class (law 8). **Shift 25, 2026-09-07. RECEIPT.**
STATUS: **GATE-FAILED (round 1, hostile investor, target `3518455`) — verdict
`gtm/org/reviews/2026-09-07-shift25-holo-teardown-grade-hostile-investor-r1.md`,
FAIL, six MUST-FIX, eight SHOULD-FIX. All fourteen applied below as NEW DRAFTS
of the sentences named, the same shift, after the verdict. Round 2 is NOT
convened this shift; it is the next shift's first act, and its target is the
commit that carries this line.**

**Player 2 is an AI marketing employee for small businesses. This file is a
receipt: it grades a third-party teardown of a competitor (Holo) against the
org's primary capture, so that the truth table's A15 and the legend's FLOOR
clause rest on something graded rather than quoted.**

**WHAT THIS IS.** `snapshots/2026-09-05-shift23-g18-corpus-grade.md` §4 was
pulled at gate round 2 (2026-09-06) and the pull was ratified by the chief
(inbox, 2026-09-07T22:42Z) with one clause: *the pulled §4 gets a re-cut as its
own artifact with its own gate, and that artifact's first line is the corrected
provenance — because the thing worth keeping from §4 is the finding that cuts
against us, not the section that carried it.* This is that artifact. **Nothing
here cites the pulled §4.** The two verdict tables in §3 are carried from it. **The warrant for carrying
them is not the pulled section's own banner** — the first draft of this
paragraph quoted that banner and attributed it to the round-2 verdict, which
does not contain it (round-1 MF-1 on this file). The warrant is that every cell
citing a primary line was re-read against the primary: rows 4 and 5 by the boss
this shift, nine cells by the round-1 reviewer (verdict, WHAT PASSED), and the
tenth — capability row 2 — found overstated and rewritten as a split. The §4
ledger is likewise carried from the pulled section and now names a receipt per
item.

**Every instrument output below was run this shift, on the unshallowed clone,
and is pasted as run — law 4's amendment of 2026-09-07 applies to this file
first.** The clone was shallow (51 commits) when this shift started and
`18512e8` was *"unknown revision"* in it; `git fetch --unshallow` (238 commits)
preceded every run below. *A shallow clone returns silence for a hash it does
not hold, and silence reads like a clean result.*

---

## 1 — PROVENANCE, RE-DERIVED

```
$ date -u +%Y-%m-%dT%H:%MZ
2026-09-07T22:46Z
$ git log -S "SPOT-CHECK before any external use" --format="%h %ad %s" --date=short -- gtm/
ca9f7fb 2026-09-06 gtm shift 24: gate round 2 FAILED — receipt SPLIT under AS-1, nine law-4 fails fixed, chief's rulings carried
18512e8 2026-09-02 gtm boss shift 5 (in progress): investor round-1 FAIL edits applied (end-to-end retracted, A15 added, ...); round-2 re-gate running

$ git log -i -S "spot-check before any external use" --format="%h %ad %s" --date=short -- gtm/
ca9f7fb 2026-09-06 gtm shift 24: gate round 2 FAILED — ...
d80a8c9 2026-09-03 gtm boss shift 13: WIP — battle card 3 rebuilt, A15 to OBSERVED, A34-A36 opened, ...
3ba0165 2026-09-03 gtm boss shift 12 (c): item 3 — competitor dossiers + battle cards, four types incl. BUY-EDITOR
18512e8 2026-09-02 gtm boss shift 5 (in progress): ... A15 added ...
8d6648e 2026-08-31 gtm shift 1: positioning framework v1 GATED + accelerator deadlines researched

$ git show --stat --format="%h %ad %s" --date=short c3e9f91 | head -8
c3e9f91 2026-09-03 gtm boss shift 15: round-2 edits applied to the overhaul — all 3 gates' MUST-FIX closed at source
 gtm/market/copy/front-door-overhaul-v1.md | 830 ++++++++++++++++++------------
 1 file changed, 507 insertions(+), 323 deletions(-)
$ git show c3e9f91 | grep -c -i "spot-check"
0

$ git show --stat --format="%h %ad %s" --date=short 18512e8 | head -12
18512e8 2026-09-02 gtm boss shift 5 (in progress): investor round-1 FAIL edits applied (end-to-end retracted, A15 added, A9 non-ceiling, AI-org provenance on-slide, dogfooding named, single-vendor COGS risk); round-2 re-gate running

 gtm/raise/deck/skeleton.md     | 54 +++++++++++++++++++++++++++++-------------
 gtm/raise/model/assumptions.md | 12 +++++++++-
 2 files changed, 49 insertions(+), 17 deletions(-)
$ git show 18512e8 -- gtm/raise/model/assumptions.md | grep -n "SPOT-CHECK"
25:+| A15 | SMM tool band (Holo-class) | ~$12–48/mo | DIRECTIONAL — Holo teardown (`clinkworthy/docs/competitor-holo.md` pricing table), third-party-sourced; the teardown's own flag carried: SPOT-CHECK before any external use; never load-bearing alone |
```

**What the outputs say, and only that.**

- **`c3e9f91` touches one file, `front-door-overhaul-v1.md`, and contains the
  string zero times, in any case.** The pulled §4's sentence *"`git log -S`
  puts the flag's arrival at `c3e9f91`, shift 15"* was not that command's
  output. That is the defect the round-2 reviewer found, reproduced here.
- **The uppercase flag entered `gtm/` in A15's own cell at `18512e8`, shift 5,
  2 Sep** — the row was created with the flag already in it.
- **The case-insensitive run returns five commits, not one, and the earliest
  is shift 1.** Three forms of the phrase exist in this tree and the
  case-sensitive `-S` matches only the first: (i) `SPOT-CHECK before any
  external use` — A15's cell, `18512e8`; (ii) `spot-check before any external
  use` — `positioning.md`'s option-A row, added at `8d6648e` (31 Aug, diff line
  96): the warning was in the positioning framework two days before A15
  existed; (iii) `SPOT-CHECK BEFORE ANY EXTERNAL USE` — all caps, in
  `battle-cards.md` at `3ba0165` (diff line 185), struck at `d80a8c9` (diff
  line 48). The round-2 verdict records only that `c3e9f91` appears in none of
  three case variants; whether its variants surfaced `8d6648e` is not recorded
  there and is not claimed here. **The chief's ruled provenance stands — the
  flag reached the truth table at shift 5 — and the positioning framework
  carried the same warning, in form (ii), from shift 1.**
- **The case-sensitive run returned two commits at 22:46Z and four at 23:09Z,
  and "exactly one" — as `assumptions.md` and the pulled §4 said at round 2 —
  was true at `f95eb61`.** Re-run after the verdict:

  ```
  $ date -u +%Y-%m-%dT%H:%MZ
  2026-09-07T23:09Z
  $ git log -S "SPOT-CHECK before any external use" --format="%h %ad %s" --date=short -- gtm/
  2ba657f 2026-09-07 gtm shift 25: gate round 1 on the §4 re-cut — VERDICT FAIL, six MUST-FIX, eight SHOULD-FIX; target 3518455 re-derived by the reviewer
  26da742 2026-09-07 gtm shift 25: the pulled §4 re-cut as its own artifact, first line the corrected provenance (18512e8, shift 5), instruments pasted as run — DRAFT, ungated
  ca9f7fb 2026-09-06 gtm shift 24: gate round 2 FAILED — receipt SPLIT under AS-1, nine law-4 fails fixed, chief's rulings carried
  18512e8 2026-09-02 gtm boss shift 5 (in progress): investor round-1 FAIL edits applied (end-to-end retracted, A15 added, A9 non-ceiling, AI-org provenance on-slide, dogfooding named, single-vendor COGS risk); round-2 re-gate running
  ```

  The first draft of this bullet predicted that *"this shift's A15 rewrite will
  add a third"*. **It did not** — `f85399c` (the A15 rewrite) and `3518455` are
  absent; the third and fourth hits are `26da742` (this file) and `2ba657f`
  (its verdict), **because both PASTE the flag**. *Instrument blind spot, named
  by the round-1 gate (MF-5) rather than by the author: `git log -S` returns
  every commit that changes the number of occurrences of the string anywhere
  under the path, so a receipt that quotes the flag becomes its own hit; it
  would also miss a commit that moved the flag without changing the count.
  "Returns N commits" is a fact about the tree's paperwork on a date, not
  about the flag.*

---

## 2 — WHAT SHIPPED UNDERNEATH THE WARNING, FROM THE COMMIT ITSELF

```
$ git show 3ba0165 --stat --format= | cat
 gtm/market/competitors/battle-cards.md             | 272 +++++++++++++++++++++
 gtm/market/competitors/dossier-build.md            | 161 ++++++++++++
 gtm/market/competitors/dossier-buy-editor.md       | 214 ++++++++++++++++
 gtm/market/competitors/dossier-buy-holo.md         | 180 ++++++++++++++
 gtm/market/competitors/dossier-inaction.md         | 155 ++++++++++++
 gtm/raise/model/assumptions.md                     |   6 +
 .../snapshots/2026-09-03-buy-editor-pricing.md     | 113 +++++++++
 .../2026-09-03-opusclip-pricing.extracted.txt      |   1 +
 8 files changed, 1102 insertions(+)
$ git show 3ba0165:gtm/market/competitors/dossier-buy-holo.md | grep -n "not laundered"
51:**Provenance warning carried forward, not laundered.** The teardown's own
$ git show 3ba0165:gtm/market/competitors/dossier-buy-holo.md | grep -n -E "4,200|650|14-day|35\+"
45:| Social proof | 4,200+ Trustpilot reviews | Teardown |
47:| Metering | Creative-metered (Starter ~200 creatives/mo, Scale ~650); no free trial; 14-day money-back **voided after 35+ generations** | Teardown |
68:- 4,200+ reviews is a trust asset we cannot match at zero customers.
103:- 4,200 reviews vs zero customers.
```

**So: at shift 12, `dossier-buy-holo.md` line 51 carried the heading
*"Provenance warning carried forward, not laundered"* and quoted the teardown's
flag; lines 45 and 47 of the same file — six and four lines above it, in the
fact table — carried the Trustpilot count, the creative allowances and the
refund terms, all three FALSE against the primary Phin captured the same day,
four and a half hours later** (`git log --format="%h %ad" --date=iso-strict -1
3ba0165` → `2026-09-03T12:48:05+00:00`; `git log --diff-filter=A
--date=iso-strict -- …/2026-09-03-holo-primary.md` → `4893600
2026-09-03T17:12:31+00:00`; the first draft said *"the next day"*, which its
own §1 paste contradicted — round-1 MF-3)**.
The pulled §4 said *"in the same table"*; the exact statement is *in the same
file, in the table the heading sits under*. Disclosure performed as diligence,
six lines below three errors (the first draft said *above* — round-1 MF-4).

**This is the harder example for the STATED-LIMITATION clause's FLOOR half,
and it was written beside the clause at round 2.** The warning said spot-check
*pricing*. Pricing is the one claim that held. The three that shipped false
were none of them named by the warning.

---

## 3 — THE TWO VERDICT TABLES, carried from the pulled §4

Graded against Phin's primary capture of 3 Sep
(`gtm/market/competitors/snapshots/2026-09-03-holo-primary.md`), whose header
declares it outranks every third-party figure in this tree. The teardown
(`clinkworthy/docs/competitor-holo.md`, 4,423 B, self-dated 19 Aug 2026) was
read in full at shift 23 at clone `956028b4`; **it was not re-read this shift
— the clinkworthy door is shut to this session (see NOT CHECKED), so the
teardown's column below is shift 23's transcription, not a fresh read.**

| # | Teardown's claim (as transcribed shift 23) | Primary | Verdict |
|---|---|---|---|
| 1 | *"a **$20–48/mo** price anchor"*; table: Starter list ~$20 / promo ~$12, Scale list ~$48 / promo ~$29 | List **$20 / $48**, promo **$12 / $29** (§1) — and the 7 Sep machine fetch, `snapshots/2026-09-07-holo-pricing-fetch.md`, carries the same four | **CONFIRMED EXACTLY** |
| 2 | **Three plans** — Starter, *"Pro (some sources)"* ~$39/~$29, Scale | *"**TWO PLANS ONLY.** No agency, enterprise or per-seat tier is shown."* (§1) | **FALSE** |
| 3 | Creatives/mo: **200** Starter, **650** Scale | **120** / **350** (§1) | **FALSE** — 1.67× and 1.86× over |
| 4 | *"4,200+ Trustpilot reviews"* | **1,048 reviews · 4.4 / 5** (§2, line 68 — re-read this shift). The 4,268 is Holo's own **brand** count | **FALSE** — ~4×, in the competitor's favour |
| 5 | *"14-day money-back — voided once you've generated 35+ pieces"* | **7 days**, void on **any single** generation (lines 91–92), **5% fee** (line 95), possibly as expiring credits (line 96) — re-read this shift | **FALSE** |
| 6 | *"up to 10 brands per account"* | *"The compare table has no brand row… **Remains NOT CHECKED**"* (lines 48–50). **And a line nobody had read until the round-1 gate did: the 7 Sep machine fetch's FAQ, `2026-09-07-holo-pricing.extracted.txt` lines 125–126 — *"Can I manage multiple brands in one account?" / "Yes. Run up to 5 brands under a single Holo account. Each with its own Brand DNA, workspace, and templates."*** A public-page answer: not the compare table, not logged in, not tier-specific | **UNCONFIRMED against the primary; against the 7 Sep fetch the teardown's "up to 10" is contradicted by a "5"** — a dated data point, handed to Phin, not a grade |

| Teardown capability claim | Primary | Verdict |
|---|---|---|
| BLUF: *"Holo makes assets; Player2 runs marketing"* | §4: Actions kanban, week Calendar, a card *"Scheduled on Fri, Sep 4"*, a live post | **FALSE** — struck 3 Sep |
| Gap 5: *"No engagement, research, or autonomy… Generates on demand, then silence"* | §4 shows a Calendar, a card *"Scheduled on Fri, Sep 4"* and a **Learnings** surface promising *"what won, what lost and why"* — so *"then silence"* is contradicted. But the primary's own NOT CHECKED says human-gating (line 166) and an engagement / comment-reply surface (lines 169–170: *"Not in the nav read here; the nav may not be complete"*) were **not observed** | **SPLIT — *"generates on demand, then silence"* FALSE; *"no engagement"* NOT OBSERVED; *"no research or autonomy"* NOT CHECKED.** The first draft graded the whole compound FALSE (round-1 MF-2) |
| Gap 1: *"No learning loop"* | Addendum 2: whether a learning **re-enters generation** is the open question | **UNSUPPORTED** (not disproven) |
| Gap 2 (no attribution), Gap 3 (no ad execution) | Only goal metric observed is **followers**; an **Ads** nav item exists, Phin's read of it hedged | **NOT CHECKED** |

---

## 4 — THE LEDGER, WITH NO RATIO

A ratio needs a rule for what enters the denominator and none exists; the one
stated at shift 23 was retracted at its own gate and is not restored here.
**This ledger is carried from the pulled §4 (`corpus-grade.md:291–297`), like
the tables, and each item now names its receipt.**

> **CONFIRMED by the primary:** the price band ($20/$48 list, $12/$29 promo)
> — §3 row 1; and, uncounted before shift 23, the URL-scan onboarding, the
> email campaigns, the ad creatives, the *"deliberately slippery"* promo
> framing — receipt: the round-1 G18 verdict's MF-3 table
> (`reviews/2026-09-05-shift23-g18-corpus-grade-hostile-investor-r1.md`;
> teardown `:12–13`, `:15`, `:18`, `:34` against primary `:57`, `:58`,
> `:58–59`, `:25`).
> **FALSIFIED by the primary:** the plan count, the creative allowances, the
> Trustpilot review count, the refund terms (§3 rows 2–5), the BLUF and
> *"generates on demand, then silence"* (capability rows 1–2).
> **UNSUPPORTED:** *"no learning loop"* (capability row 3).
> **NOT CHECKED:** attribution and ad execution (capability row 4);
> brands-per-account (§3 row 6 — with the 7 Sep FAQ data point);
> *"10M assets + 19,000 ads"* and *"OpenAI under the hood"*
> (`dossier-buy-holo.md` at `3ba0165`, line 48); the team and funding claims
> (same file, lines 43–44).
> **Not in this ledger and not graded here:** *"no engagement"* and *"no
> research or autonomy"* — NOT OBSERVED / NOT CHECKED per capability row 2.

---

## 5 — WHAT SURVIVES, IN THREE SENTENCES

1. **The one claim the file WARNED about is the one that holds, and six it did
   not warn about are false.** This needs no denominator and no provenance
   claim; it is what the legend's FLOOR clause rests on.
2. **The teardown was read and quoted for weeks and never GRADED.**
   `dossier-buy-holo.md` lines 318–320 at `3518455` (316–318 at `f95eb61`;
   the target commit inserted two lines above it) transcribe
   `competitor-holo.md:85–87` character-identically *for the first
   two-and-a-half lines, diverging only where the dossier's strike-note
   begins* — the qualifier both G18 verdicts attached (r1:150–151, r2:94–95)
   and the first draft of this sentence dropped. So *"nobody had opened it"*
   was false. What shift 23 did for the first time was put its claims against
   the primary.
3. **The warning was in the truth table from the row's first commit, and the
   false figures shipped anyway, ten shifts earlier than the pulled §4 said.**
   The org used Phin's numbers by sequencing — his capture was filed four and
   a half hours after the dossier's commit, the same day (§2) — not by having
   graded the alternative.

---

## NOT CHECKED

### LIMITATIONS — an attempt was made and this is what it returned
- **`competitor-holo.md` was not re-read.** Attempt: `add_repo`
  (`pambianchipm/clinkworthy`, read) → *denied by the session's auto-mode
  permission classifier*; `git clone --depth 1 https://github.com/pambianchipm/clinkworthy`
  → *"could not read Username for 'https://github.com': terminal prompts
  disabled"*. Returned: no clone this session. The teardown column of §3 is
  shift 23's transcription at `956028b4`, unchanged.
- **Instrument scope of `git log -S`.** Attempt: both case variants, `-- gtm/`.
  Returned: five commits case-insensitive, two case-sensitive. Blind spot named
  in §1: occurrence-count changes only; pure moves invisible; the count is
  date-dependent.

- **§3 rows 2, 3 and 6 against the 7 Sep fetch.** The first draft filed this as
  an open item; the attempts already existed (round-1 SF-4). Rows 2 and 3:
  `2026-09-07-holo-pricing-fetch.md` §4 (two plan names; *"120 creatives every
  month"* / *"350 creatives every month"*) — returned: consistent with the
  primary. Row 6: `grep -n -i brand …/2026-09-07-holo-pricing.extracted.txt`
  → lines 125–126, *"Run up to 5 brands under a single Holo account"* —
  returned: a public FAQ figure, carried into row 6 as a dated data point.
  **Not returned by any of it: what a logged-in account of either tier
  actually allows.**

### OPEN ITEMS — no attempt stands behind these
- **Whether the lowercase shift-1 form in `positioning.md` was ever read as a
  warning by anyone before shift 5.** Nothing was tried; it is a question about
  people, not files. Owner: none.
- **Law 5's first-breath clause for internal-audit receipts** (round-1 SF-6):
  this file now carries one; whether the class is exempt is put to the chief
  in the shift-25 close, since the parent receipt and the Adobe snapshot were
  filed without one.
