# G18 — GRADING THE CITED CORPUS, NOT THE DIRECTORY

**Shift 23, 2026-09-05. RECEIPT.** CONFIDENTIAL — internal-audit class (law 8).

STATUS: **DRAFT — UNGATED.** Written by the boss this shift; law 7 and the
org's own rule that an author cannot pass their own work both apply. The
hostile-investor gate applies and §5 is where it should aim.

**INSTRUMENT, AND THIS IS THE PART THAT CHANGED THE ANSWER.** `clinkworthy`
was **attached to this session and cloned into this box** (`add_repo` →
`git clone --depth 1`, this shift). Every count and every quotation below is
**read from the file on disk**, not relayed. Clone at
**`956028b4fa46f9c9ec6eb9275cac083d0fb181e3`**; the chief's sweep was at
`28be414`, shift 21's at `5eeb1c8`.

*Blind spot of that instrument, in the same breath: a `--depth 1` clone has no
history, so nothing here says when a line entered a file or who wrote it. Where
this file states a date for a clinkworthy document, the date is the document's
own self-declared header, which is a claim by that document and not a git fact.*

---

## 1 — WHAT THE CHIEF ASKED, AND THE ONE PLACE I ARGUE WITH THE ANSWER

The chief's G18 answer (inbox 2026-09-05 08:5x) gave three recommendations.
**The verdict each reaches is accepted. None survives its stated ground
unchanged, and I would rather say that plainly than report three ticks.**
Recommendation 1's conclusion (A15 UNSETTLED) holds on a *different* ground —
the spot-check it waits for was performed on 3 Sep. Recommendation 2's rule
under-covers, and the file that proves it is one the sweep did not name.
Recommendation 3 is right and **incomplete in the direction that would have
cost us**: as written it would have protected this org from nothing that
actually went wrong here.

| # | Chief's recommendation | This shift |
|---|---|---|
| 1 | A15 reads UNSETTLED until someone with egress spot-checks Holo's pricing | **AMENDED — the spot-check already happened.** §4 |
| 2 | Grade only what a live truth-table row cites | **INSUFFICIENT — §3.** The unit is the claim-bearing artifact, not the row |
| 3 | A source's stated limitation is part of the receipt | **ADOPTED, and strengthened — §6** |

---

## 2 — THE DIRECTORY, COUNTED HERE, AT THE HASH NAMED ABOVE

**Twenty-one `.md` files, not twenty.** Per file: byte size · `grep -c 'http'`
· markdown-link count (`](http`) · `[VERIFIED` count.

| File | Bytes | `http` | md-links | `[VERIFIED` |
|---|---|---|---|---|
| `research-smm-landscape.md` | 62,637 | **0** | 0 | **100** |
| `design-partner-candidates-nyc.md` | 49,556 | **87** | **0** | 0 |
| `player2-session-2026-08-19.md` | 36,854 | 2 | 0 | 0 |
| `claude-ads-steal-report.md` | 35,367 | **0** | 0 | 0 |
| `ui-overhaul-plan.md` | 33,631 | 2 | 0 | 0 |
| `strategy.md` | 20,402 | **7** | **7** | 0 |
| `channel-analytics-design.md` | 20,470 | 0 | 0 | 0 |
| `player2-landing-design.md` | 15,276 | 0 | 0 | 0 |
| `player2-console-design.md` | 14,776 | 0 | 0 | 0 |
| `onboarding-excellence-rubric.md` | 10,386 | 1 | 0 | 0 |
| `onboarding-funnel-plan.md` | 9,315 | **0** | 0 | 0 |
| `one-tap-approve-token.md` | 8,653 | 0 | 0 | 0 |
| `workspaces-scope.md` | 8,435 | 1 | 0 | 0 |
| `paid-and-attribution-scope.md` | 7,455 | 0 | 0 | 0 |
| `partner-outreach-v1.md` | 7,109 | 0 | 0 | 0 |
| `productization-v1.md` | 5,773 | 0 | 0 | 0 |
| `competitor-holo.md` | 4,423 | **0** | 0 | 0 |
| `brand-doctrine.md` | 4,317 | 0 | 0 | 0 |
| `channel-readiness.md` | 4,052 | **0** | 0 | 0 |
| `outbound-engagement-scope.md` | 2,395 | 0 | 0 | 0 |
| `README.md` | 266 | 0 | 0 | 0 |

**THE CHIEF'S THREE COUNTS ARE CONFIRMED EXACTLY** at a different hash:
`research-smm-landscape.md` = 100 `[VERIFIED]` and the only file carrying the
tag; `competitor-holo.md`, `claude-ads-steal-report.md` and
`onboarding-funnel-plan.md` = 0 `http`; `design-partner-candidates-nyc.md` = 87.
SHA-256 of the landscape report here is `696a6b69…`, **byte-identical to the
hash shift 21 recorded at `5eeb1c8`** — the file has not moved across three
commits.

**AND THE INSTRUMENT IS WRONG ABOUT TWO FILES, IN OPPOSITE DIRECTIONS.**

- **`design-partner-candidates-nyc.md` — 87 `http`, and ZERO markdown links.**
  The chief called it *"the one file with real citations."* Its 87 hits are
  bare URLs in prose. That is better than nothing and it is not what
  `](http` counts. **`strategy.md` is the only file in the directory carrying
  clickable markdown links, and there are seven.**
- **`channel-readiness.md` — 0 `http`, and it is the best-sourced document in
  the directory.** Every row of its capability table names a source file and a
  line number. **Counting `http` grades a document on whether its sources are
  on the web, not on whether it has sources** — and this org's most
  operationally load-bearing external document is the one that instrument
  scores lowest. See §3 and §5.

---

## 3 — WHAT A LIVE ROW CITES, ENUMERATED FROM THE TABLE — AND WHY THAT UNIT
## IS TOO NARROW

**Instrument:** `snapshots/2026-09-05-shift23-citescan.py`, run against
`assumptions.md` at SHA-256 `b469d60f…`, 53,970 B. It matched **all 48 rows
including the lettered A7b and A25b** — the row-drop that bit shift 22's scan
is closed. Its own blind spots are in its docstring and they are real: it
cannot tell a citation from a mention, it carries a hand-maintained list of
bare-prose source names (the exact hole A32 hid in), and it reads only this
file. **Every hit below was read by hand.**

**Cited-document set under the truth table** (rows in brackets):

- `clinkworthy/docs/research-smm-landscape.md` — **11 rows**: A11 A12 A14 A15
  A25 A27 A30 A31 A32 A33 A45. *(A15 and A25 are mentions, not citations —
  both were adjudicated out at shift 22; the scan cannot tell the difference
  and did not try.)*
- `clinkworthy/docs/competitor-holo.md` — **1 row: A15, and only A15.**
- `clinkworthy/console/lib/pricing.ts` (A1), `docs/productization-v1.md` (A3),
  `console/lib/xai-video.ts` (A4), `xai-image.ts` (A7) — code and scope.
- Retrieved-and-hashed org snapshots — A4 A20 A21 A25 A37 A40.
- Named-but-never-retrieved externals — Adobe Express n=433 (A14 A30 A45),
  Clutch (A11 A30 A45), Metricool n=927 (A30 A45), US Census (A40 A41 A44 A45,
  these hashed via org snapshots), Trustpilot (A35, via Phin's screenshot).

**ANSWER TO THE CHIEF'S OWN `NOT CHECKED`:** *"whether the other zero-URL files
are cited by any live row."* **They are not — and not by any live artifact
either.** `claude-ads-steal-report.md`, `onboarding-funnel-plan.md` and
`design-partner-candidates-nyc.md` appear **nowhere under `gtm/`** except
inside the chief's own inbox entry naming them. The chief's count on
`claude-ads-steal-report.md` needed no verdict: nothing rests on it.

**AND HERE IS WHERE RECOMMENDATION 2 UNDER-COVERS.** Enumerating from the
truth table finds documents under *rows*. It cannot find a document under a
*claim that has no row*:

> **THIRTEEN `gtm/` FILES CITE IT AND ZERO ROWS OF THIS TABLE DO** — seven
> claim-bearing artifacts (`position-v2-the-hire.md` (GATED),
> `position-v2-framing-v1.md`, `live-front-door-audit-2026-09-04.md`,
> `front-door-strings-v1.md`, `front-door-overhaul-v1.md`,
> `front-door-overhaul-receipts.md`, `gap-list-2026-09-04.md`) and **six filed
> gate verdicts** (shifts 14, 15 ×2, 16, 17 ×2). *(Instrument: `grep -rl` over
> `gtm/**/*.md`, excluding the four org-ledger files and the two written this
> shift. **The first version of this passage said NINE and named "two filed
> verdicts"; there are six. I wrote a count from a partial listing.** The
> correction moves the number in the direction that makes this gap larger.
> Blind spot that remains: `grep -rl` counts FILES that name the string, not
> citations, and cannot see an artifact that leans on this document without
> naming it.)*

It is the authority that decides **what this org's copy may claim about
platforms**. A rule keyed to rows grades everything under the market-size
number and nothing under the sentence a customer reads. **The unit is the
claim-bearing artifact, not the truth-table row.**

This is not a new observation and that is the uncomfortable part: the shift-14
gate wrote *"nothing in `assumptions.md` carries a channel row, so law 4 has no
anchor for the org's most operationally load-bearing table"*
(`reviews/2026-09-03-shift14-position-v2-both-gates.md` §386) and recommended a
channel row. **It has been open since 3 Sep.** §7 puts it to the chief rather
than closing it here — writing new rows from a document I graded this shift,
inside the pass that grades it, is shift 22's exact failure shape.

---

## 4 — `competitor-holo.md`: GRADED AGAINST THE PRIMARY. **ONE OF SIX NUMERIC
## CHECKABLE CLAIMS SURVIVES.**

The file is 4,423 B, self-dated **19 Aug 2026**, and its third line is the one
the chief quoted. Read in full this shift. Its checkable factual claims,
graded against Phin's primary capture of 3 Sep
(`gtm/market/competitors/snapshots/2026-09-03-holo-primary.md`), which the
snapshot's own header declares outranks every third-party figure in this tree:

| # | Teardown's claim (verbatim) | Primary | Verdict |
|---|---|---|---|
| 1 | *"a **$20–48/mo** price anchor"*; table: Starter list ~$20 / promo ~$12, Scale list ~$48 / promo ~$29 | List **$20 / $48**, promo **$12 / $29** | **CONFIRMED EXACTLY** |
| 2 | **Three plans** — Starter, *"Pro (some sources)"* ~$39/~$29, Scale | *"**TWO PLANS ONLY.** No agency, enterprise or per-seat tier is shown."* | **FALSE** (its own *"some sources"* hedge was the right instinct) |
| 3 | Creatives/mo: **200** Starter, **650** Scale | **120** / **350** | **FALSE** — overstated **1.67×** and **1.86×** |
| 4 | *"4,200+ Trustpilot reviews"* | **1,048** reviews, 4.4/5. The 4,268 is Holo's own **brand** count | **FALSE** — ~4×, flattering the competitor |
| 5 | *"14-day money-back — voided once you've generated 35+ pieces"* | **7 days**, void on **any single** generation, minus **5%**, possibly in expiring credits | **FALSE** |
| 6 | *"up to 10 brands per account"* | *"The compare table has no brand row… **Remains NOT CHECKED**"* | **UNCONFIRMED** |

**AND THE SIX ABOVE ARE ONLY THE NUMERIC HALF. The teardown's capability
claims fare no better, and the org had already struck two of them without ever
having read the file they came from:**

| Teardown claim | Primary | Verdict |
|---|---|---|
| BLUF: *"Holo makes assets; Player2 runs marketing"* | Primary §4: Actions kanban, week Calendar, a card reading *"Scheduled on Fri, Sep 4"*, a live post | **FALSE** — struck 3 Sep at `positioning.md` §112 and in the dossier's positioning line |
| Gap 5: *"No engagement, research, or autonomy… Generates on demand, then silence"* | Same §4, plus a **Learnings** section promising *"what won, what lost and why"* | **FALSE** |
| Gap 1: *"No learning loop. Nothing feeds results back into generation"* | Addendum 2: the wide claim is *"now unsupportable"*; the honest question is whether a learning **re-enters generation** | **UNSUPPORTED** (not disproven) |
| Gap 2 (no attribution), Gap 3 (no ad execution) | Only goal metric ever observed is **followers**; an **Ads** section exists in the nav, Phin's read of it hedged | **NOT CHECKED** — and Phin's own hedges stay hedged |

**Running total against the primary: of eight claims that can be graded at all,
ONE is confirmed.** Two more are unsupported and two remain not checked. **The
one that holds is the price band — the only thing the file warned about.**

**Claims 4 and 5 were already caught and corrected** — A34 and A35 carry the
primary and name the teardown FALSE, and `dossier-buy-holo.md` §106–110 owns
both corrections. **Claims 2 and 3 are found here for the first time**, because
until this shift **nobody in this org had opened `competitor-holo.md`.** No
live artifact carries 200/650 or a third plan, so **no copy is wrong** — the
org has been using Phin's numbers throughout. **The exposure is that it was
using them by luck of sequencing, not by having graded the alternative.**

**THE FINDING THAT MATTERS MOST, AND IT CUTS AGAINST THE READING THAT
FLATTERS US.** My first pass through this evidence concluded that the org had
heeded the warning — the flag is in A15's grade cell and in `positioning.md`,
and Phin's capture is exactly the spot-check the file asked for. **The
sequence says otherwise.** `git log -S` puts the flag's arrival at `c3e9f91`,
**shift 15**, *after* shift 13's capture had already found the errors, and
**shift 12 had by then already built a dossier on the teardown's Trustpilot
and refund figures and shipped both wrong.** The warning did not catch them.
**Phin's independent capture did, and the flag was written down afterwards.**
The chief's *"the org read the number and not the warning"* is correct, and my
first reading of my own evidence was the flattering one. Recorded because
shift 22's lesson was that the direction of a finding predicts where its
evidence is weakest, and this is the same shift's boss making the same turn.

**AND THE WARNING WAS SCOPED NARROWER THAN THE FILE'S OWN UNRELIABILITY.** It
says *spot-check **pricing***. Pricing is claim 1 — **the only one that held.**
It said nothing about the review count, the refund terms, the plan count or
the creative allowances, which are four of the five that failed. **Carrying
this file's stated limitation verbatim would have protected the org from
nothing that actually went wrong.** That is §6.

---

## 5 — `channel-readiness.md`: THE SAME GRADE, RUN ON THE FILE THE SWEEP
## MISSED, AND IT COMES OUT THE OTHER WAY

4,052 B, self-declared *"Written by the chief 2026-09-03, from the code, at
Phin's request."* Zero `http`. Zero `[VERIFIED]` tags — **it grades platforms,
never itself.** Every capability row names a source file and line, and it
carries its own NOT CHECKED section naming X's untraced depth and the unknown
Meta App Review status.

**Four receipts spot-checked against the cloned code this shift, which is the
only reason this section is a grade and not a compliment:**

| Doc claim | Read at | Result |
|---|---|---|
| `SHELL_PLATFORMS = ['tiktok']`, `channel-data.ts:22` | `console/lib/channel-data.ts:22` | **VERBATIM** |
| `Channel` union, `types.ts:3` | `console/lib/types.ts:3` | **VERBATIM**, all five members |
| `replyToInstagramComment` `:359`, `replyToFacebookComment` `:372` | `console/lib/meta.ts:358`, `:371` | **PRESENT**, 1-line drift |
| `publishInstagramImage` `:126` | `console/lib/meta.ts:126` | **PRESENT** |

*Blind spot, in the same breath: four of roughly thirty receipts, all four
chosen because they are the ones GTM copy leans on, and existence-of-symbol is
not behaviour. This establishes the file's citations resolve; it establishes
nothing about whether the code works.*

**One tension logged, not resolved:** the code comment above `SHELL_PLATFORMS`
reads *"Platforms we can publish to but not yet measure"*, while the doc grades
TikTok *"No OAuth, no publish, no metrics."* The doc is the **more
conservative** of the two, so no copy is at risk under either reading — but the
org should know its channel authority and the code disagree about what a shell
is.

**GRADE: SOURCED, and it is the strongest external document this org cites.**
It is **not** in the class the chief's sweep implied for a zero-`http` file.

---

## 6 — THE LEGEND RULE, AND WHY THE CHIEF'S VERSION NEEDS A SECOND HALF

Recommendation 3, adopted: **a limitation a source states about itself is part
of the receipt, and a grade cell citing that source without carrying the
limitation is an incomplete citation.**

**It needs a second clause, and §4 is the argument for it.** `competitor-holo.md`
warned about pricing and pricing is the one thing it got right. A rule that
stops at *carry the limitation* would have carried a warning about the sound
claim while the four unsound ones travelled unlabelled into a dossier.

> **A source's stated limitation is a FLOOR on its unreliability, never a
> description of it. Carrying the limitation discharges nothing about the rest
> of the document, which stays ungraded until something independent is put
> against it.**

Both clauses are proposed for the legend in §7 and are written into
`assumptions.md` this shift as an amendment marked UNGATED.

---

## 7 — WHAT IS PUT TO THE CHIEF, NOT DECIDED HERE

1. **A15's two cells state two different grades.** Value cell: *"OBSERVED shift
   13… upgraded DIRECTIONAL → OBSERVED on Phin's primary capture."* Grade cell:
   *"DIRECTIONAL — Holo teardown."* **Which cell is the row's grade?** Under the
   chief's ruling A15 reads UNSETTLED, and it now reads UNSETTLED on this
   ground — a row disagreeing with itself — rather than on the ground the
   ruling gave, because §4 establishes the spot-check happened. **Reconciling
   the two cells is a revaluation (law 7) and it is not mine.**
2. **The channel row.** Open since the shift-14 gate. Mirroring
   `channel-readiness.md`'s grades into `assumptions.md` would give law 4 an
   anchor for the org's most copy-load-bearing table. §5 grades the source
   SOURCED. **Writing the row from a document I graded this shift, in the pass
   that graded it, is the failure shape shift 22 filed — so it is proposed,
   not done.**
3. **Whether the enumeration unit changes** from the truth-table row to the
   claim-bearing artifact (§3).

---

## NOT CHECKED

- **`research-smm-landscape.md`'s contents were not re-read this shift.** Its
  hash and its `[VERIFIED]` count were re-derived; nothing else. The eleven
  AGENT-REPORTED rows are untouched by this file and stay exactly as shift 22
  left them.
- **The Adobe Express n=433 survey is still unretrieved.** Recommendation (b)
  is not this shift's work and nothing here advances it.
- **Sixteen of the twenty-one directory files were counted and not read.** Only
  `competitor-holo.md` and `channel-readiness.md` were read in full; §2's table
  is byte counts and pattern counts, which say nothing about content.
- **`design-partner-candidates-nyc.md`'s 87 URLs were not opened**, sampled, or
  checked for whether they support the claims they sit beside. Nothing cites
  this file, so nothing turns on it — but "has 87 URLs" is not "is sourced",
  which is the same distinction this whole gap exists to make.
- **No live Holo page was opened.** `tryholo.ai` remains egress-blocked from
  this box. §4's primary is Phin's 3 Sep capture and is now **two days old**;
  the refund policy in it had been updated the day before it was taken.
- **The clone is `--depth 1`.** No authorship, no dates, no history for any
  clinkworthy file. Every date in §4 and §5 is a document's own header claim.
- **Whether `channel-readiness.md`'s grades are still current.** It self-dates
  3 Sep and the code has moved since; the four spot-checks already show line
  drift.
