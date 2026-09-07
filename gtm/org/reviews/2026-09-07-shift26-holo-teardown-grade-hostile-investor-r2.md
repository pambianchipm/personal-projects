# HOSTILE-INVESTOR GATE — SHIFT 26, THE HOLO TEARDOWN GRADE (THE §4 RE-CUT) — ROUND 2

**VERDICT: FAIL (round 2).**

Target: `gtm/raise/model/snapshots/2026-09-07-shift25-holo-teardown-grade.md`
at commit **`51a75bb`** (`git rev-parse --short 51a75bb` → `51a75bb`, run
2026-09-07T23:22:10Z; HEAD at start `e82d53c`, branch
`claude/b2c-mlp-ideas-gtm-76bs8z`). Artifact SHA-256, re-derived twice at
start: `git show 51a75bb:<path> | sha256sum` →
`606c623f58801ad41f347de6ccbe8b0a1f18cf02b0d679451bc55bd174bcd0e9`; `sha256sum`
of the working-tree file → the same `606c623f58801ad41f347de6ccbe8b0a1f18cf02b0d679451bc55bd174bcd0e9`. So every `cat -n` /
`grep -n` line number below, taken on the working tree, is a line number of the
target. Re-derived again at the end of this review (see the last block). Clone
unshallowed: `git rev-list --count aa2b8a8` → 238 (the count the artifact
states for the unshallow); `git rev-list --count HEAD` → 248.

**FREEZE: COMMITS AFTER THE TARGET, AS FOUND.** `git log --name-only
--format='%h %ad %s' --date=iso 51a75bb..HEAD` at 23:22:10Z returned two
commits, both BEFORE this review started:
- `7ecb276` 23:17:04Z — `gtm/market/snapshots/2026-09-07-channel-readiness-from-clinkworthy.md`
  (new, 85 lines) and `gtm/org/inbox.md`. Outside the two-file list, but it
  precedes convening and carries the chief's rulings the convening commit
  relies on (law 5 not exempt; freeze list stays two; round 2 = last round).
- `e82d53c` 23:21:11Z — `gtm/org/boss.md`, `gtm/org/inbox.md`, `gtm/org/lock.md`:
  the convening commit, which wrote the freeze's second sentence into boss.md.
No commit landed during the review (re-checked at the end). The target's hash
is unchanged before and after.

**Fan-out: one independent hostile-investor reviewer, gate time only.**

---

## RESULT IN ONE LINE

**The provenance finding is sound and every pasted git command in §1 and §2
re-runs as pasted at its date, with the `-S` lists having grown exactly by the
mechanism the artifact states. The artifact fails on the class problem the
round-1 verdict named twice and the parent's round 2 named once: three claims
were corrected at the line the gate cited and are live one file over — the
"tables re-derived at round 2" claim (MF-1 of round 1) sits live in the A15
row of the truth table; the "four of the five failures" count (MF-6 of round
1) sits live in the gap-list; and the new warrant sentence for the carried
tables miscounts what the round-1 verdict re-read, leaving one row with no
named re-reader.**

Three MUST-FIX, eight SHOULD-FIX. **None of the three touches the provenance
finding** (line 1, §1, §2, §5.3); all three land on the carried tables' warrant
and on the count in §5.1 as it is stated elsewhere in the tree. Under AS-1 the
split the chief pre-ruled (inbox, 23:17Z: *"the provenance finding ships on its
own, and the eight-cell table waits"*) is available and this verdict's findings
map onto it cleanly — see the landing note on each MUST-FIX.

---

## ROUND-1 ITEMS, DISPOSITION

Each re-derived from the source (primary lines, git output, blob lines), not
from the round-1 verdict's proposed wording. Times are UTC, 7 Sep 2026.

| Item | Disposition | Instrument, result, blind spot |
|---|---|---|
| **MF-1** (warrant attributed to the r2 verdict) | **LANDED BUT INTRODUCED a miscount, and the class is live in the SSOT** | The false attribution is gone (`grep -n "not broken\|re-derived at round 2"` on the target → 0 hits, 23:27Z). The replacement sentence at :27–30 says *"nine cells by the round-1 reviewer (verdict, WHAT PASSED)"*; r1:352–353 lists *"rows 1, 3, 4, 5, 6, and capability rows 1, 3, 4"* — eight. See MUST-FIX 2. And `assumptions.md:419` carries live *"the two verdict tables re-derived at the round-2 gate"* — see MUST-FIX 1. Blind spot: a paraphrase sweep (`grep -rn -i "re-derived at\|were not broken\|tables re-derived"`) is still string-keyed; a third wording would escape it. |
| **MF-2** (capability row 2 graded FALSE whole) | **LANDED** | Row split at :189 into FALSE / NOT OBSERVED / NOT CHECKED. `cat -n` on the primary (348 lines, read in full 23:23Z): :166 *"Whether anything is human-gated"*; :169–170 *"Whether an engagement / comment-reply surface exists. Not in the nav read here; the nav may not be complete."*; §4 :118–147 (kanban :131, calendar :135, *"Scheduled on Fri, Sep 4"* :134, live post :129) and Addendum 2 :225–248 falsify *"then silence"*. The NOT OBSERVED / NOT CHECKED distinction rests on :169–170 recording an attempt (the nav was read) and :166 recording none — defensible. *"Research"* is addressed nowhere in the primary; NOT CHECKED is the only honest label. Blind spot: the teardown's own words for "engagement" are unreachable (see NOT CHECKED). |
| **MF-3** ("the next day" / "the day after") | **LANDED, with two nits (SF-1, SF-2 below)** | `git log --format="%h %ad" --date=iso-strict -1 3ba0165` → `2026-09-03T12:48:05+00:00`; `git log --diff-filter=A --format="%h %ad" --date=iso-strict -- gtm/market/competitors/snapshots/2026-09-03-holo-primary.md` → `4893600 2026-09-03T17:12:31+00:00` (23:25Z). Same day, 4 h 24 min. Both places (:150–151, :239–240) now say same day. *"Four and a half hours"* rounds 4 h 24 min up by six minutes; and the second command is pasted without `--format` and with an elided path, so its output as pasted is not that command's output — same class as r1's SF-1. Blind spot: commit time is the boss's commit, not Phin's capture; the primary self-dates 3 Sep with no clock. |
| **MF-4** ("six lines above") | **LANDED** | `git show 3ba0165:gtm/market/competitors/dossier-buy-holo.md \| sed -n 40,56p` (23:25Z): table :41–49, errors at :45 and :47, heading :51. 51−45 = 6, 51−47 = 4. :158 now reads *"six lines below three errors"*; :148–149 *"six and four lines above it"*. Exact. Blind spot: line arithmetic on a blob; a renderer changes "six", not "below". |
| **MF-5** (the predicted third `-S` hit) | **LANDED** | :111–120 names the true cause (both later hits paste the flag) and the mechanism (occurrence-count changes anywhere under the path; pure moves invisible). Re-run 23:25Z: case-sensitive now FIVE — `51a75bb` joined (its diff carries two `+` lines with the string), exactly as the mechanism predicts; `7ecb276` and `e82d53c` carry zero and are absent. `f85399c` shows one `-` and one `+` line with the string (count unchanged) and is absent — the artifact's "did not" at :112 is exact. Blind spot: `-S` says nothing about where in the tree the count changed; I attributed 51a75bb's hit by reading its diff. |
| **MF-6** (law 4: `assumptions.md:127–128`, `:133`) | **LANDED AT THE CITED LINES; NOT LANDED AS A CLASS** | `git show 51a75bb -- gtm/raise/model/assumptions.md` (23:25Z): :127–128 now `~~…shift 15…~~` with ⚠ CORRECTED to shift 5 / `18512e8`; :135 now `~~Four of the five failures…~~` → *"Six claims are false and none is the one it warned about"*. `grep -n "shift 15\|c3e9f91" gtm/raise/model/assumptions.md` → 94, 127, both struck/corrected. **But `gtm/raise/deck/gap-list-2026-09-04.md:517–518`, untouched since before 3518455, carries live *"Four of the five numeric failures sit outside what it warned about"*** — the same sentence, one file over. See MUST-FIX 3. Blind spot: my sweep is string-keyed on "Four of the five"; the same count in other words would escape. |
| **SF-1** (abbreviated pastes) | **LANDED for the four named; one new instance** | :73 carries the full `grep` line to `never load-bearing alone \|`; :66–71 carries `2 files changed, 49 insertions(+), 17 deletions(-)`; :127–136 is `git show 3ba0165 --stat --format= \| cat` byte-for-byte (the `.../snapshots/` is git's own truncation, reproduced); `date -u +%Y-%m-%dT%H:%MZ` prints the form shown. New instance at :151–154 (SF-1 below). |
| **SF-2** (dossier :316–318 → :318–320; the qualifier) | **LANDED** | `git show <rev>:…dossier-buy-holo.md \| grep -n "Holo generates 200 assets"` → 316 at `133885c`, `f95eb61`, `ca9f7fb`; **318 at `3518455`, `51a75bb`, HEAD** (23:23Z). :229–233 states both and carries the qualifier; r1:150–151 and r2:94–95 say what :232–233 says they say (both read, 23:24Z). `assumptions.md:117` updated to the same pair — law-4 consistent. |
| **SF-3** (three case forms; the counterfactual) | **LANDED** | `git show 8d6648e \| grep -n -i "spot-check before any external use"` → diff line 96, the `+\| **A. "AI marketing platform"**` row, lowercase, dated 2026-08-31; `git show 3ba0165 \| …` → diff line 185, inside the `battle-cards.md` hunk (`sed -n 1,185p \| grep "^diff --git" \| tail -1` → battle-cards.md), all caps; `git show d80a8c9 \| …` → diff line 48, a `-` line in the `battle-cards.md` hunk (23:25–23:27Z). The counterfactual about the r2 reviewer's variants is gone; :92–94 says only what r2:146–147 says. Wording nits in SF-3 below. |
| **SF-4** (rows 2, 3, 6 vs the 7 Sep fetch) | **LANDED** | Moved to LIMITATIONS with returns (:259–267). Fetch receipt §4 :133 and :137 carry the two-plans and 120/350 comparisons; `grep -n -i brand …extracted.txt` → :125–126 verbatim as quoted in row 6 (23:23Z). `sha256sum` of the extracted text → `0e12080e…81950d`, `wc -l` → 169, as the fetch receipt states. |
| **SF-5** (ledger without receipts) | **LANDED, cite span off** | G18 r1 MF-3 table (r1:13–18 of that section; file lines ~112–117) carries exactly the four rows :12–13/:57, :15/:58, :18/:58–59, :34/:25 (23:27Z). `git show 3ba0165:…dossier-buy-holo.md \| sed -n 40,56p`: :48 carries *"OpenAI under the hood"* and *"10M marketing assets + 19,000 high-performing ads"*; :43–44 team and funding. The ledger is now disclosed as carried. But the parent cite `corpus-grade.md:291–297` is wrong: the ledger blockquote spans **:292–300** at 51a75bb (`sed -n 288,302p` on the blob); :291 is blank and UNSUPPORTED / NOT CHECKED sit at :298–300. The span was copied from r1's SF-5 text — rule 1. SF-5 below. |
| **SF-6** (law 5) | **LANDED** | :13–16 *"Player 2 is an AI marketing employee for small businesses. This file is a receipt…"* — the exact shape the chief's later ruling (inbox, 7ecb276, 23:17Z: *"not exempt"*) prescribes. Not literally line 1, because the chief's earlier clause reserves line 1 for the provenance; it precedes every section. The OPEN ITEM at :273–276 is now answered by that ruling (SF-8 below). |
| **SF-7** (single-line cites for multi-line quotes) | **LANDED** | Row 6 `(lines 48–50)`, row 5 `(lines 91–92)`, `(line 95)`, `(line 96)`; primary :48–50, :91–92, :95, :96–97 say what the cells say (23:23Z). |
| **SF-8** (a finding filed as a limitation) | **LANDED** | The "same table" entry is gone from NOT CHECKED; §2 :156–157 states it as a result. |

---

## MUST-FIX

### MUST-FIX 1 — Law 4: `assumptions.md:419` (the A15 row) states, live, that "the two verdict tables [were] re-derived at the round-2 gate" — the claim round 1's MF-1 established the round-2 verdict does not contain

**Lands in: the carried tables (§3) — their warrant. The provenance finding
does not rest on it.**

**Artifact sentences:** :24–30, *"The warrant for carrying them is not the
pulled section's own banner — the first draft of this paragraph quoted that
banner and attributed it to the round-2 verdict, which does not contain it
(round-1 MF-1 on this file)."*

**What I ran (23:27:35Z–23:27:46Z):** `grep -rn -i "re-derived at\|were not
broken\|re-derived the\|tables re-derived\|tables were re-derived" gtm/`
excluding `ops-log.md`, `inbox.md`, `lock.md`, `reviews/`. **Returned three
hits;** each opened: `assumptions.md:413` (A9, unrelated wording);
`corpus-grade.md:246` (the pulled §4's banner, inside the blockquote the pull
note says nothing may cite); and **`assumptions.md:419`**, the A15 row, live and
unstruck: *"Graded against the primary (shift 23; the two verdict tables
re-derived at the round-2 gate): its price band is CONFIRMED; …"*. `git log -S
"the two verdict tables re-derived at the round-2 gate" -- gtm/raise/model/assumptions.md`
→ one commit, `f85399c` 22:54:18Z — written by the boss twenty minutes before
round 1 convened, and not touched by the fourteen-item landing at 51a75bb
(`git show 51a75bb -- gtm/raise/model/assumptions.md` changes :117 and
:127–137 only).

**Why this is a gate-fail:** law 4 — *"Two artifacts stating different numbers
for the same thing is a gate-fail for BOTH."* The shared fact is *who re-derived
the carried tables and when*. The artifact under gate says the round-2 verdict
did not; the truth table's own A15 row says it did, and cites this artifact as
the receipt for that grading in the same cell (*"Receipt for that grading:
`snapshots/2026-09-07-shift25-holo-teardown-grade.md`"*). A reader who follows
the SSOT to its receipt finds the receipt contradicting the row that cites it.
This is the pattern round 1 named in MF-6 and the parent's round 2 named in its
one-line result: the fix landed at the cited line (the artifact's paragraph)
and not one inch further.

**What it should say:** `assumptions.md:419`: *"Graded against the primary
(shift 23; round-1 gate on the re-cut re-read eight of the ten cells by primary
line, the boss two, and one cell was split — `snapshots/2026-09-07-…grade.md`
WHAT THIS IS)"* — or drop the parenthetical. The parent's banner at
`corpus-grade.md:245–246` should carry a ⚠ naming that its "re-derived at round
2" was the boss's own sentence, not the verdict's (SHOULD-FIX 8), so the
origin of the error is marked where it was written.

*Blind spot, same breath: round 1's sweep for this claim was keyed on "not
broken" and "re-derived at round 2" and named a paraphrase as its escape;
"re-derived at the round-2 gate" is that paraphrase. Mine adds three more
strings and has the same shape.*

### MUST-FIX 2 — :27–30: the new warrant for the carried tables says "nine cells by the round-1 reviewer"; the round-1 verdict lists eight, and the arithmetic leaves numeric row 2 with no named re-reader

**Lands in: the carried tables (§3) — their warrant.**

**Sentence at fault:** :27–30, *"The warrant is that every cell citing a
primary line was re-read against the primary: rows 4 and 5 by the boss this
shift, nine cells by the round-1 reviewer (verdict, WHAT PASSED), and the tenth
— capability row 2 — found overstated and rewritten as a split."*

**What I ran (23:29Z):** `sed -n 352,353p` on the round-1 verdict →
*"**§3 numeric table, rows 1, 3, 4, 5, 6, and capability rows 1, 3, 4, re-read
against the primary by line:**"*. Five plus three is **eight**. The two tables
hold ten rows (six numeric, four capability). Boss: rows 4, 5 (both also in the
reviewer's eight). Reviewer: eight. Split: capability row 2. **Numeric row 2
("Three plans" / TWO PLANS ONLY) appears in nobody's list**, and the sentence
only reaches ten by counting nine.

**Why this is a gate-fail:** this is the sentence round-1 MF-1 was about — the
warrant for carrying tables un-re-read — and its new draft again states
something about a verdict that the verdict does not say. Rule 1 (a correction
to a claim-bearing sentence is a new draft, re-read against the source) was
the rule the author invoked at :8–9 for all fourteen items; this one was
drafted from the shape of the gate's remedy, not from the verdict's text. The
row it leaves uncovered is correct — `sed -n 27p` on the primary → `**TWO PLANS
ONLY.** No agency, enterprise or per-seat tier is shown.` (23:27Z), which is
the cell verbatim — but the artifact's warrant does not know that.

**What it should say:** *"…eight cells by the round-1 reviewer (numeric rows
1, 3, 4, 5, 6; capability rows 1, 3, 4 — verdict, WHAT PASSED), numeric row 2
against primary :27 by <whoever re-reads it>, and the tenth — capability row 2
— found overstated and rewritten as a split."*

*Blind spot: I counted the reviewer's list as written; if the round-1 reviewer
re-read row 2 and did not list it, the verdict does not say so and neither can
the artifact.*

### MUST-FIX 3 — Law 4: `gap-list-2026-09-04.md:517–518` states, live, "Four of the five numeric failures sit outside what it warned about" — the sentence the same landing struck at `assumptions.md:135` as false against this artifact's "six … none is the one it warned about"

**Lands in: §5 sentence 1 — the count. The artifact's value is the correct
one; the fix is in the gap-list, and law 4 fails both until it lands. §1, §2
and §5.3 (the provenance finding proper) are untouched by this item.**

**Artifact sentences:** :225–226, *"The one claim the file WARNED about is the
one that holds, and six it did not warn about are false."*; and, in the SSOT
as corrected at 51a75bb, `assumptions.md:135–136`: *"~~Four of the five
failures sit outside what it warned about.~~ **Six claims are false and none is
the one it warned about**"*.

**What I ran (23:25:34Z, 23:29:16Z):** `grep -rn -i "Four of the five" gtm/`
excluding the ledgers and `reviews/` → five hits, each opened:
`assumptions.md:48` (unrelated, edit counts); `assumptions.md:135` (struck, ⚠
CORRECTED); `corpus-grade.md:375` (inside the pulled §4, :221–380); `live-front-door-audit:102`
(unrelated); and **`gtm/raise/deck/gap-list-2026-09-04.md:517–518`, live and
unstruck:** *"Pricing is the one claim that held. **Four of the five numeric
failures sit outside what it warned about**, and two of them shipped into a
dossier at shift 12 before Phin's capture caught them."* `git log
3518455..HEAD -- gtm/raise/deck/gap-list-2026-09-04.md` → nothing; the file
was not touched by the landing. Four lines below it (:521) the same passage
carries the ⚠-corrected shift-5 provenance — so this paragraph WAS opened at
round 2 of the parent and the count sentence beside the corrected one was left.

**Why this is a gate-fail:** law 4 on a shared count. "Four of the five" is a
statement that one failure DID sit inside the warning, which the preceding
sentence in the same paragraph (*"Pricing is the one claim that held"*)
contradicts and which the artifact under gate, the truth table at :135 and
`positioning.md:75` (*"six other claims of its own are FALSE"*) all contradict.
Round 1's MF-6 named `:133` *"against the artifact's 'six it did not warn about
are false'"* as the class; the fix landed at :133 (now :135) only.

**What should happen:** `gap-list:517–518` struck and corrected in the same
landing as the re-draft (*"~~Four of the five numeric failures…~~ Six claims
are false and none is the one it warned about — re-cut §5.1"*), and the
artifact's §5.1 may name the residue its own count found, in the register of
rule 2 (what was swept, with what).

*Blind spot: string-keyed on "Four of the five" and "six"; a restatement of the
count in other words ("most of the failures", "all but one") escapes it. The
gap-list is 500+ lines and I opened only the hits and their paragraphs.*

---

## SHOULD-FIX

- **SF-1 — :151–154, a new paste of the SF-1 class introduced by the MF-3
  draft.** `git log --diff-filter=A --date=iso-strict -- …/2026-09-03-holo-primary.md`
  as written has an elided path and no `--format`; run with the path spelled
  out (23:25Z) it prints a 30-line commit block (`commit 4893600477…`, `Date:
  2026-09-03T17:12:31+00:00`, the chief's message), not the line `4893600
  2026-09-03T17:12:31+00:00`. That line is the output of the `--format="%h %ad"`
  variant, which reproduces exactly. The fact is right; the paste is not what
  was run. Not a MUST-FIX because the returned hash and timestamp reproduce
  and round 1 graded this class SHOULD-FIX; under the 7 Sep amendment (*"paste
  only what you ran, re-runnable verbatim, dated"*) it should carry the
  `--format`, the full path, and a time — neither of the two §2 git commands
  is dated.
- **SF-2 — :151 and :239–240, "four and a half hours".** 17:12:31 − 12:48:05 =
  4 h 24 min 26 s. The timestamps are pasted beside it, so a reader can
  recompute; but the rounding runs in the direction that widens the gap the
  sequencing argument leans on. *"Four hours and twenty-four minutes"* or
  *"just under four and a half hours"*.
- **SF-3 — :84–92, the three-forms passage, two wordings and one missing
  form.** (a) *"Three forms of the phrase exist in this tree"* — form (iii),
  all caps, exists in the working tree only where this artifact quotes it
  (`grep -rn "SPOT-CHECK BEFORE ANY EXTERNAL USE" gtm/` excluding ledgers and
  reviews → the artifact's :90 and nothing else, 23:25Z); it existed in the
  tree's history. (b) *"struck at `d80a8c9`"* — diff line 48 is a `-` line
  with no `~~` replacement: the whole Key-stats block of the old battle card
  was deleted and a rebuilt card inserted (`git show d80a8c9 | sed -n 40,56p`).
  In this org "struck" means `~~`; say *deleted*. (c) A fourth form the
  instrument cannot see: `dossier-buy-holo.md` at `3ba0165`, line 46, carries
  *"a SPOT-CHECK-BEFORE-EXTERNAL-USE flag"* — hyphenated, without "any" — so no
  `-S` variant of the phrase matches it. It is not live now (`grep -rn
  "SPOT-CHECK-BEFORE" gtm/` → 0 outside ledgers). The artifact's "three forms"
  is the case the law-4 corollary was written for: the instrument that found
  three is not evidence there were three. Name it as the blind spot in the
  same breath.
- **SF-4 — :254–257, NOT CHECKED limitation 2 is undated and stale against
  §1.** *"Returned: five commits case-insensitive, two case-sensitive"* is the
  22:46Z count; §1 itself shows four case-sensitive at 23:09Z and the list is
  five at 23:25Z. Date the return, or say *"two at 22:46Z, four at 23:09Z"*.
- **SF-5 — :199, `corpus-grade.md:291–297` → `:292–300`.** The ledger
  blockquote in the parent spans 292–300 (`git show 51a75bb:…corpus-grade.md |
  sed -n 288,302p`); 291 is blank, UNSUPPORTED is :298, NOT CHECKED :299–300.
  The span was carried from round 1's SF-5 text without re-deriving — rule 1
  applies to a gate's line numbers too.
- **SF-6 — :229–230, "the target commit inserted two lines above it".** True
  of `3518455` (round 1's target); this file's target is now `51a75bb`, which
  also touched the dossier (a one-line replacement at :104, no line shift —
  `grep -n` → 318 at both). Name the commit: *"`3518455` inserted two lines at
  dossier :103–105"*.
- **SF-7 — rule 2 register, two places.** :23–24 *"**Nothing here cites the
  pulled §4.**"* is a universal about the author's own work, and :199 then
  names `corpus-grade.md:291–297` as the ledger's origin — disclosure of
  origin, which round 1 asked for, but "nothing cites" is the word rule 2
  removes. Say what is done: *"The pulled §4 is named as the origin of the
  carried tables and ledger and to name its defects; no grade here rests on
  it."* :76 *"What the outputs say, and only that"* — same register; harmless
  but the rule removes the word.
- **SF-8 — two ledgers moved after the target.** (a) :273–276, the law-5 OPEN
  ITEM: the chief ruled at 23:17Z (7ecb276, inbox item 4: *"not exempt … a
  receipt's first breath can be 'Player 2 is X; this receipt grades…'"*). The
  target predates the ruling so this is not a defect at 51a75bb; at the re-gate
  the item flips to DONE with the ruling cited, and the chief's instruction
  (*"add the line to the parent receipt and the Adobe snapshot in the same
  commit as round 2"*) is a boss action outside this artifact. (b)
  `corpus-grade.md:245–246`, the pulled banner's *"re-derived at round 2"*:
  mark it ⚠ as the boss's own sentence so nobody re-quotes it (the origin of
  MUST-FIX 1).

---

## WHAT PASSED, WITH THE INSTRUMENT

- **The first line's provenance, again.** `git show 18512e8 --
  gtm/raise/model/assumptions.md | grep -n "SPOT-CHECK"` → `25:+| A15 | …
  SPOT-CHECK before any external use; never load-bearing alone |`; `git show
  18512e8^:gtm/raise/model/assumptions.md | grep -c "A15"` → **0**; `git show
  --stat c3e9f91` → one file, `front-door-overhaul-v1.md`; `git show c3e9f91 |
  grep -c -i "spot-check"` → 0 (23:25Z). *"In the commit that CREATED the
  row"*, *"not `c3e9f91`/shift 15"* — exact. Blind spot: `-S` and `grep` see
  the string; a flag expressed in other words before shift 5 would not show.
- **Every §1 and §2 pasted command re-runs as pasted (23:25:19Z).** `date -u
  +%Y-%m-%dT%H:%MZ` prints the form shown. The 22:46Z case-sensitive list
  (two) and the 23:09Z list (four) are both correct at their dates; at 23:25Z
  the list is five, the fifth being `51a75bb`, whose diff carries two `+`
  lines with the string — the artifact's mechanism at :114–120 (*"every commit
  that changes the number of occurrences … a receipt that quotes the flag
  becomes its own hit"*) predicts exactly this and states that the count is a
  fact about a date. The case-insensitive list is eight now (was five at
  22:46Z): the three additions are `26da742`, `2ba657f`, `51a75bb`, same
  mechanism. `f85399c` and `3518455` absent from both, as :112 says. The
  `c3e9f91` and `18512e8` `--stat`/`head` outputs and the `grep -n` line 25
  reproduce byte for byte. §2's `--stat --format= | cat` reproduces byte for
  byte including git's own `.../snapshots/` truncation; the two dossier
  `grep -n` runs return 51 and 45/47/68/103. Blind spot: "reproduces" means
  the bytes agree on this box at 23:25Z; `--stat` column width is
  terminal-dependent and `| cat` pins it here.
- **§2's geometry and the three FALSE figures.** Blob lines 41–49 table, 45
  (*4,200+ Trustpilot reviews*), 47 (*~200 / ~650*; *14-day … voided after
  35+*), 51 heading; primary :68 (1,048), :35 (120 / 350), :89–92 (7 days, any
  single generation). Three figures, three FALSE, six and four lines above
  the heading. The heading's quoted warning at blob :54–55 is *"spot-check
  pricing on their site before quoting it to a prospect"* — the teardown's
  words as the dossier carried them; whether verbatim is NOT CHECKED (the
  teardown is unreachable).
- **§3 numeric rows 1–6 and capability rows 1, 3, 4, re-read against the
  primary by line (23:23Z, `cat -n`, 348 lines in full).** Row 1 — :32–33,
  and extracted text :21, :22, :36, :37. Row 2 — :27, verbatim. Row 3 — :35;
  200/120 = 1.667, 650/350 = 1.857. Row 4 — :68; :52 and :77–78 for the brand
  count. Row 5 — :89–90, :91–92, :95, :96–97. Row 6 — :48–50; extracted text
  :125–126 verbatim. BLUF row — :129, :131–137. Gap 1 — :253–257. Gap 2/3 —
  :162–163, :121, :149–155. Capability row 2's split — :166, :169–170, §4
  :118–147, Addendum 2 :225–248. No cell overstates the primary.
- **§4 ledger receipts resolve.** G18 r1 MF-3 table rows: teardown :12–13 →
  primary :57; :15 → :58; :18 → :58–59; :34 → :25 — all four present as
  stated. Dossier at `3ba0165`: :48 (OpenAI; 10M + 19,000), :43–44 (team,
  funding). The four buckets and their contents match the parent's :292–300
  with the additions the artifact marks. Blind spot: the teardown-side line
  numbers are the round-1 G18 reviewer's at `956028b4`; nothing here re-opens
  the teardown.
- **§5 sentence 1's count and sentence 3's "ten shifts".** FALSIFIED bucket:
  rows 2, 3, 4, 5 + BLUF + "then silence" = six; capability row 2's split
  removes nothing from it. 15 − 5 = 10. Both reconstruct from the artifact's
  own tables.
- **§5 sentence 2's line numbers and qualifier.** 316 at `f95eb61`, 318 at
  `3518455`, `51a75bb` and HEAD; r1:150–151 and r2:94–95 read and say what
  :232–233 says. The transcription itself is NOT CHECKED (below).
- **Headers.** CONFIDENTIAL, internal-audit class (law 8) — :5. STATUS at
  :6–11 is exact for 51a75bb: GATE-FAILED round 1, the verdict path, six and
  eight, *"its target is the commit that carries this line"* — `git log
  --format=%h -1 -- <target>` → `51a75bb`. Law 5 — :13–16 names the category
  before any section. The teardown's 4,423 B / 19 Aug matches the parent's
  :93 and :249.
- **Law-4 sweep, the shared facts that agree.** Provenance shift 5 /
  `18512e8`: `assumptions.md:92–94` (⚠-corrected), `:127–131`
  (⚠-corrected), `gap-list:521` (⚠-corrected), `positioning.md:75`,
  `corpus-grade.md:232–235` (pull note) — all agree; the only "shift 15"
  hits outside those are struck text and unrelated shift-15 references
  (`position-v2-the-hire.md:1118`, `waitlist-front-door.md:9`,
  `front-door-overhaul-receipts.md:4`). The FALSE set: `assumptions.md:419`
  and `:109–114` list the same six. The 5-brands data point: extracted text
  :126, fetch receipt :142–149, dossier :104 (51a75bb) — one value, 5, all
  dated 7 Sep, all "data point, not a grade". Dossier line pair 316/318:
  `assumptions.md:117` and the artifact agree. "Same day": no live artifact
  says "next day" or "day after" for this pair (`live-front-door-audit:327`
  is an unrelated hit). Blind spot: string-keyed; the two disagreements found
  (MUST-FIX 1, 3) were both paraphrases of strings round 1 had swept.

---

## NOT CHECKED BY THIS VERDICT — the attempt behind each

- **`clinkworthy/docs/competitor-holo.md` was not opened.** Attempt: none —
  the brief forbids `add_repo`, cloning and external fetches from this
  session. Returned: nothing. Every "teardown's claim" cell in §3, the
  ledger's teardown-side line numbers, §5.2's "character-identical for
  two-and-a-half lines", and the dossier's quoted warning at blob :54–55 are
  graded as shift 23's / the G18 r1 reviewer's transcription at `956028b4`,
  which is what the artifact says they are (:172–175).
- **`tryholo.ai/pricing` was not re-fetched**, per the brief. The extracted
  text's hash and line count were verified (`0e12080e…`, 169); the raw-HTML
  hash `8bc11e1f…` cannot be, by the fetch receipt's own design.
- **The artifact's two recorded `add_repo` / `git clone` attempts** were not
  re-run, for the same reason. `ops-log.md` was not opened (excluded ledger).
- **"The clone was shallow (51 commits)"** — no instrument sees the
  pre-unshallow state from here; `git rev-list --count aa2b8a8` → 238 confirms
  only the post-unshallow count.
- **Whether the round-1 reviewer re-read numeric row 2 without listing it**
  (MUST-FIX 2): the verdict is the only record and it lists eight.
- **`7ecb276`'s new snapshot** (`2026-09-07-channel-readiness-from-clinkworthy.md`,
  85 lines) was grepped for `holo|A15|shift 15|four of the five|six claims`
  and not read in full; it is outside the target and post-dates it.
- **Blind spot of this verdict, in the same breath:** a text-and-hash audit on
  one tree at `e82d53c`, 23:22–23:30Z. Its law-4 sweeps were string-keyed
  (`shift 15`, `c3e9f91`, `four and a half`, `next day`, `day after`, `same
  afternoon`, `316–318`, `318–320`, `5 brands`, `Four of the five`, `exactly
  one`, `one line above`, `same table`, `six claims`, `nine cells`,
  `re-derived at`, `were not broken`, `tables re-derived`) and every hit was
  opened for `~~` and ⚠ context; a restatement in words none of those keys
  touch escapes it. Where it says a command "reproduces" it means the bytes
  agreed at the stated minute; the `-S` outputs are date-dependent and the
  artifact is right that they are. The r1 verdict on this file, the G18 r2
  verdict, the primary, the fetch receipt and its extracted text were read in
  full; the parent receipt and the G18 r1 verdict were read in the sections
  the artifact cites (§4 :221–380, the MF-3 table, :150–151) and their
  headers, not in full.

---

**Target re-derived at the end of this review** (`date -u` → see the final
block appended below by the same instrument): `git show 51a75bb:<path> |
sha256sum` and `sha256sum` of the working-tree file, and `git log --name-only
51a75bb..HEAD`, re-run after this file was written; results in the block.

**Instrument of this verdict:** direct read of the tree at `51a75bb` /
`e82d53c`; `sha256sum`, `wc -l`, `grep -n`/`-c`/`-rn`/`-i`/`-o`, `sed -n`,
`cat -n`, `awk`, `git rev-parse`, `git show <rev>:<path>`, `git show --stat`,
`git show <rev> -- <path>`, `git log -S` in both pasted case variants and one
paraphrase, `git log --date=iso`/`iso-strict`, `git log --diff-filter=A`,
`git rev-list --count`, `git log --name-only`, `git status`. Ledgers
(`ops-log.md`, `inbox.md`, `lock.md`) and `reviews/` excluded from every law-4
sweep except where the artifact cites a verdict by line; every remaining hit
opened and read for `~~` strike and ⚠ CORRECTED context before being called
live.

## FINAL RE-DERIVATION (appended after the verdict was written)

```
$ date -u
Mon Sep  7 23:32:36 UTC 2026
$ git rev-parse --short 51a75bb HEAD
fatal: Needed a single revision
  (my own paste did not run as written — two revisions; re-run singly at 23:32:52Z:)
$ git rev-parse --short 51a75bb
51a75bb
$ git rev-parse --short HEAD
e82d53c
$ git show 51a75bb:gtm/raise/model/snapshots/2026-09-07-shift25-holo-teardown-grade.md | sha256sum
606c623f58801ad41f347de6ccbe8b0a1f18cf02b0d679451bc55bd174bcd0e9  -
$ sha256sum gtm/raise/model/snapshots/2026-09-07-shift25-holo-teardown-grade.md
606c623f58801ad41f347de6ccbe8b0a1f18cf02b0d679451bc55bd174bcd0e9  gtm/raise/model/snapshots/2026-09-07-shift25-holo-teardown-grade.md
$ git log --name-only --format='%h %ad %s' --date=iso 51a75bb..HEAD
e82d53c 2026-09-07 23:21:11 +0000 gtm shift 26: lock claimed, gate ROUND 2 convened on the §4 re-cut — target frozen at 51a75bb (shift 25's close), artifact sha 606c623f…; the freeze's second sentence written into boss.md (chief's ruling 23:17Z); READY FOR REVIEW filed before convening

gtm/org/boss.md
gtm/org/inbox.md
gtm/org/lock.md
7ecb276 2026-09-07 23:17:04 +0000 gtm inbox: shift 25's four asks ruled — fetch is A15's document, G19's door opened by a pasted primary, freeze list stays two, law 5 not exempt

gtm/market/snapshots/2026-09-07-channel-readiness-from-clinkworthy.md
gtm/org/inbox.md
$ git status --short
?? gtm/org/reviews/2026-09-07-shift26-holo-teardown-grade-hostile-investor-r2.md
```

No commit landed during the review; the only change in the working tree is this verdict file, uncommitted.
