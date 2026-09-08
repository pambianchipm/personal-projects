# HOSTILE-INVESTOR GATE — THE 2017→2022 NAICS CONCORDANCE FINDING: `458` AGAINST THE NINE `448*` CLASSES, WITH ROUND-1 MF-1–MF-3 AND SF-1–SF-4 APPLIED AS NEW DRAFTS (assumptions.md A48 limitation (1), from *"`448` in the CBP file is exactly the nine apparel classes"* to *"gated on its own.)*"*; gap-list G20's SETTLED sentence, its DONE cost-to-close (i) and "Until (ii)"; slide 4 §6's dated ⚠ pointer; the receipt `2026-09-08-shift29-naics-concordance-receipt.md` §2a/§3, the workbook `2026-09-08-2017_to_2022_NAICS.xlsx`, the instruments `…naics-concordance.py` and `…naics-pieces.py`) — ROUND 2, THE LAST UNDER AS-1

CONFIDENTIAL — internal-audit class (law 8).

First breath: Player 2 is an AI marketing employee for small businesses; this verdict grades, at round 2 of two under AS-1, the two sentences written from the one fetch the chief approved (inbox 2026-09-08T14:59Z item iii) after round 1's seven findings were applied. A fresh reviewer for round 2; I wrote none of it and I did not write round 1.

**VERDICT: FAIL, 2 MUST-FIX / 4 SHOULD-FIX.** Every paste re-runs identical at `8a66501` — both workbooks, the NES zip and the code list to the hash, the first instrument's 51 lines and the new second instrument's 7 lines line-for-line — and all three round-1 MUST-FIX are closed on the source, not reworded. The two fails are new sentences this round wrote: the round-1 MF-2 remedy was carried into G20's cost-to-close and the receipt with a reason ("publication depth") that the instrument's own `2022 codes under it 1` for `45811` says has no effect on the six clothing classes — rule 1's exact case, a gate-proposed correction taken as checked (MF-1); and slide 4's new pointer restates the shared fact without the word "pieces" that A48, G20 and the receipt spend an instrument establishing, so the deck says `458` takes two whole non-store industries (MF-2, law 4). Neither touches A48's figure; A48 limitation (1) itself ships whole.

**Target:** `8a66501` (8a665019700df8e0035e2a5f79b325cf3ba8bae9). Re-derived by this reviewer:

```
$ date -u                              # Tue Sep  8 15:46:12 UTC 2026 (first act); final check 15:51:45Z
$ git rev-parse HEAD                   # b82c2e9c8cd22756c0b68b2b0a9944eee406b37e
$ git log --oneline -8                 # b82c2e9 (lock.md, convene r2) → 8a66501 (TARGET) → fd8cd02 (READY FOR REVIEW r2) → adb5cb5 (r1 verdict) → 0792ceb → d76cc4e (r1 target) → f9a75d0 → 94e46a3
$ git diff --stat 8a66501 HEAD         # gtm/org/lock.md | 10 +  — the only change after the target; no ops-log.md commit
$ git diff --stat fd8cd02 8a66501      # gap-list 22, slide 8, assumptions 2, receipt 71, pieces.py 27 (new) — five files, the five lock.md lists
$ for p in <the five lock.md paths + workbook + first instrument>; do git show 8a66501:$p | sha256sum | cut -c1-16; done
17f02c97ca263716 assumptions · 93b92b2b6c8f0de5 gap-list · 9cacd197f4ba0a54 slide · e9d38648b78fecf2 receipt · 8049b4c6fea69f41 pieces.py — all five EQUAL lock.md; 4662cc7ed9e7f3fb xlsx · 160c79b4dd84c584 concordance.py — unchanged from d76cc4e, as lock.md says
$ git status --short                   # empty at 15:46Z and 15:51Z, before this file was written
```
*Blind spot: `sha256sum` proves bytes; lock.md's printed hash is taken as the convening record, as the freeze rule directs.*

**FREEZE HONOURED.** One commit after the target, `b82c2e9`, `gtm/org/lock.md` only.

**Fan-out: one independent hostile-investor reviewer (fresh for round 2), gate time only.**

---

## EVERY PASTE, RE-RUN AS PASTED (law 4's amendment) — at `8a66501`, in `scratchpad/reviewer-c2/`, not carried from round 1

| Paste (receipt §) | Run | Result |
|---|---|---|
| §1 the two-workbook fetch | 15:48:51Z | `HTTP 200 bytes 59656` `4662cc7e…` / `HTTP 200 bytes 61577` `76ed2d5b…` — **identical**; `cmp` retained xlsx vs fresh fetch: **byte-identical** |
| §1 `nonemp23us.zip` + `nes_naics22.txt` + `unzip` + `sha256sum nonemp23us.txt` | 15:48:51Z | `420e37af…` (44,519 B) / `e79c488b…` (19,280 B) / `2bf4e3e6…` — **identical** to the paste and to the shift-28 hashes |
| §2 `sha256sum` of the four scratch files | 15:48:53Z | workbook `4662cc7e…`, `nonemp23us.txt` `2bf4e3e6…`, code list `e79c488b…`, `concordance.py` (from `git show 8a66501:…`) `160c79b4…` — **identical** |
| §2 `python3 concordance.py` | 15:48:53Z, exit 0 | 51 lines; `diff` against receipt 81–131: **IDENTICAL** (unchanged since round 1, as the inbox says) |
| §2 retained-copies `sha256sum` | 15:46Z via `git show` | `4662cc7e…` / `160c79b4…` — **identical** |
| §2a `sha256sum pieces.py …; python3 pieces.py` (new) | 15:48:53Z, exit 0 | `pieces.py` `8049b4c6…` (from `git show 8a66501:…`), both workbook hashes as pasted; 7 lines, `diff` against receipt 158–164: **IDENTICAL** |
| My own: rows 1–3 of both workbooks, cell text (stdlib `zipfile`+`xml`) | 15:50Z | forward row 2 = *"(Note:  2022 NAICS codes in bold indicate pieces of the 2022 industry came from more than one 2017 NAICS industry; 2017 NAICS codes in italics indicate the 2017 industry split to two or more 2022 NAICS industries.)"*; row 3 col B = *"2017 NAICS Title (and specific piece of the 2017 industry that is contained in the 2022 industry)"*; backward header = `2022 Code | 2022 Title | 2017 Code | 2017 Title` — the column order `pieces.py` assumes |
| My own: 2022 six-digit codes under each NES prefix, from the concordance's 2022 column | 15:50Z | `45811`→{`458110`} `45821`→{`458210`} `45831`→{`458310`} `45832`→{`458320`} `4583`→two `7139`→six `3118`→six `81219`→two; code list: **0** six-digit entries under `458` (of 453 lines) |
| My own: every 2017 code with more than one row | 15:50Z | nine — `212113 325314 453998 454110 454390 515120 517312 517911 519130`; seven carry a " - piece" suffix in col B, `454110` (42 rows) and `454390` (39 rows) carry the bare title only; the nine `448*` one row each, titles all containing "Clothing" for the six, "Shoe" / "Jewelry" / "Luggage and Leather Goods" for the three |

*Blind spot, all rows: cell text only; the bold/italic marks were read by round 1's reviewer, not re-read here — the row-count proxy is what I re-derived.*

---

## EACH ROUND-1 FINDING, CLOSED OR NOT, WITH THE INSTRUMENT

| Finding | Applied sentence | Read against | Status |
|---|---|---|---|
| **MF-1** (code-list attribution) | Receipt 183–188: *"no six-digit code under `458` (the code list paste above: eight entries, none of six digits); the concordance's 2022 column holds exactly one six-digit code under each of those four (the instrument's `2022 codes under it 1`, computed from the concordance, not from the code list …)"* | Instrument line 30 `all22 = sorted({r[2]… for r in data})`, line 34 `kids`; paste lines 93–101 `2022 codes under it 1`; my own read of the 2022 column; `awk 'length($1)==6'` on the code list → 0 under `458` | **CLOSED on the source** |
| **MF-2** (nine written of six) | G20 parenthetical 668–672 (six at `45811` with each other and the two; `448210`/`448310`/`448320` each with the two only); receipt §3 table 208–211; receipt 214–220; G20 cost-to-close 675–678 | Paste 93–101: `45811` sources 8, `45821`/`45831`/`45832` sources 3, all four `2022 codes under it 1` | **Parenthetical and table CLOSED**; the *reason* sentence (cost-to-close and receipt 215–217) carries round 1's own wording "publication depth" onto the six, where the same paste shows it does nothing → **MF-1 below** |
| **MF-3** (slide §6 open-item clause) | Slide 413–416: struck clause, ⚠ SETTLED pointer to A48 (1) and G20 | `git diff -U0 d2c8efc 8a66501 -- slide` → **one hunk**, lines 409–416; slide §4 reason (1) line 285 untouched; STATUS lines untouched | **CLOSED as a pointer; the pointer's own restatement of the fact drops "pieces" → MF-2 below** |
| SF-1 ("pieces" not in any paste) | Receipt 175–183 (note quoted; 42/39 rows; bare title cell; "the sheet names the industry, and the size … is stated nowhere in it"); §2a paste | My rows: 42/39, one distinct title cell each, no count column in either workbook | **CLOSED**; quotation truncated without an ellipsis → SF-1 |
| SF-2 ("overstates") | A48 (word-diff: `[-read as-] [-overstates-]` → `{+is AT LEAST the nine+} {+… by how much, the concordance does not size+}`); G20 663–665; receipt 193–197 | Nothing subtracts (nine `448*` rows, one each; no `448*` code with >1 row), two industries add — "at least" is set inclusion by the concordance, not a count | **CLOSED**; no residual "overstates"/"not conservative" in the four files (the one `grep` hit, assumptions.md:421, is an older quotation in another row) |
| SF-3 ("from `458`", "closed the door") | G20 663 *"from `458` alone"*; 683 *"closed with twelve SUPERSET lines"*; 679–680 the bound named via receipt §4 | Paste: twelve `SUPERSET` lines (1+1+1+9); receipt 232–236 | **CLOSED** |
| SF-4a (transposition by eye) | Receipt 30–31, §2a `sets equal -> True`, §4 *"the other 1,133 rows were not compared"* | 1,150 − 17 = 1,133; my read of the backward header | **CLOSED**; the instrument does not print the backward header or its source-prefix filter → SF-3 |
| SF-4b/c | Inbox entry (outside the freeze) reworded; the label's origin named at receipt 214 | — | noted |

---

## WHAT PASSED, WITH THE INSTRUMENT

- **The ruling's boundary (item iii).** `git diff -U0 d2c8efc 8a66501 -- assumptions.md` → one hunk, line 457 only; `--word-diff` on it: every changed token from `{+in the CBP file+}` to `{+…gated on its own.)*+}` — inside limitation (1); the value cell, grade, limitations (2)–(4) and the tail untouched. No new row. `$` on added lines under `gtm/raise`: shell `$f`/`$u`/`$(basename …)` and A48's pre-existing `$25,000`/`$10,000`/`$1,000` bands (the row is one line, so they ride the hunk) — no `$` of the org's. Nothing summed, multiplied or priced.
- **A48 limitation (1), whole.** Each clause re-derived: the nine → `458110`/`458210`/`458310`/`458320` (paste 93–101); `454110`/`454390` into each of the four (composition block, 17 rows; titles verbatim to the sheet); the four counts and 307,593 (paste 122); "each a superset of its `448*` class(es) by two non-store industries" (sources 8/3/3/3); "no NES row is co-extensive with any apparel class"; "AT LEAST … by how much, the concordance does not size"; "one-to-one in the concordance (printed)" — the six MATCHED lines print `2022 codes under it 1  2017 sources 1`. Every quantifier is a printed figure or a bound.
- **G20's SETTLED sentence and per-class parenthetical.** "`812199` at five digits with `812191`" (paste 87); "five siblings each" (six codes under `7139`/`3118`); "six clothing classes … (`45811`) with each other and the two" (sources 8); "each … with the two non-store industries only" (sources 3); "none without a row" (zero `NO ROW`); "twelve SUPERSET lines" (twelve). "Until (ii)" holds.
- **Receipt §3's table (201–211)** row by row against the paste — correct, as round 1 found.
- **Law 4, except the two fails.** A48 (1), G20's SETTLED sentence, receipt §3's first paragraph and table agree (SUPERSET; pieces of `454110`/`454390`; share unsized; six one-to-one; figure unchanged). Slide §4 reason (1) *"six of the eighteen classes and no more"* (line 285) — still six MATCHED. Shift-28 receipt line 258 *"NOT fetched this shift"* — a frozen capture dated to its shift; A48 (1) and G20 each carry the SETTLED pointer with the hash; the pointers on the rows suffice under the freeze rule.
- **Rule 2.** Added lines of `d2c8efc..8a66501` under `gtm/raise`: no *fixed / now true / checked / verified / read in full*; "only" once, descriptive of the paste (*"the only `448*` class in its 2022 code"*). Commit messages `fd8cd02`, `8a66501`, `b82c2e9`: none. The 15:45Z inbox entry's *"the seven MUST-FIX untouched"* — a claim about own work, but the one-hunk slide diff bears it out. Rule 3: receipt §2 and §2a each name the mark-blindness beside the output; A48 names the unsized share in the sentence.
- **The second workbook (item 7).** Disclosed at §1 and §4; `git ls-files | grep 2022_to_2017` empty; used for one set-equality and no sentence rests on it.

---

## MUST-FIX

**MF-1 — *"`812199`, `713940`, `311811` are supersets by NES's publication depth; the six clothing classes by that and by the 2022 revision; `448210`, `448310`, `448320` by the 2022 revision alone"* (`gap-list-2026-09-04.md:675–677` at the target) and *"for the six clothing classes in `458110` it is both — they share one 2022 code with each other AND with the two non-store industries"* (receipt §3, `…receipt.md:215–217`) attribute a reason to the six that the paste shows has no effect (law 2; rule 1 — this is a round-1 remedy's wording, MF-2's *"'with each other' and 'publication depth' apply to `448110`–`448190`"*, taken as checked).** The instrument prints for every one of the six `NES row 45811 … 2022 codes under it 1` (paste 93–98) — the same `1` it prints for `45821`/`45831`/`45832`, on which the receipt's own criterion two lines later (*"its five-digit NES row holds that code alone"* → *"the 2022 revision alone"*) rests. `45811` holds `458110` alone (my read of the 2022 column); publishing at six digits would show the same 241,235 with the same eight sources. The six share one code with each other because the 2022 revision merged six 2017 codes into `458110` — that is the revision, not the depth. So the six are supersets by the 2022 revision alone, exactly as the three, and "both"/"by that and by" names a cause with nothing behind it in any file here; the 15:45Z inbox entry, which states the six's case without "both", is the accurate one. The parenthetical at G20:668–672 and the table row at receipt:208 are correct and are not failed. Instrument: paste 93–101 column `2022 codes under it`; the concordance's 2022 column under `4581`. *Blind spot: I read "publication depth" by the receipt's own criterion (a five-digit row holding more than one 2022 code); if the boss meant only that NES prints five digits, the sentence does not say so, and then the word states no reason at all.*

**MF-2 — Slide 4 §6's pointer, *"`458` is a SUPERSET of the nine — every `458*` code also takes `454110` and `454390` — so no apparel class has a matched count"* (`slide-04-market-size-v1.md:414–415`), states the shared fact differently from A48 limitation (1) (*"maps pieces of two other 2017 industries … into each of the four"*) and G20 (*"takes pieces of `454110` and `454390`"*) — law 4, a gate-fail for both.** On the deck's own surface the sentence says each of four codes takes two whole industries; the §2a paste prints `454110: 42 rows … 42 distinct 2022 codes` and `454390: 39 … 39`, so no `458*` code takes either whole, and four codes cannot each take the same industry. Read as a hostile investor: "`458` takes `454110`" is "clothing retailers includes all electronic shopping and mail-order houses" — which makes 307,593 look wrong on its face and is not what the sheet says. The word the pointer drops is the one round-1 SF-1 was spent on and a second instrument was written to license. A pointer may point; this one restates, and restates wrongly. Instrument: §2a paste 159–162; `git diff -U0 d2c8efc 8a66501 -- <slide>` (the clause is new this round). *Blind spot: a reader may supply "from"; law 4's check is a diff of the stated fact, and the diff is the word "pieces".*

---

## SHOULD-FIX

**SF-1 — Receipt §3's row-2 quotation (176–178) ends at *"…indicate the 2017 industry split"* with a closing quote and no ellipsis; the sheet's sentence continues *"to two or more 2022 NAICS industries.)"*.** Also, *"'Pieces' is the sheet's own word for what a split industry contributes (its note, row 2 …)"* cites the note, whose "pieces" are pieces *of the 2022 industry*; the cell that says "piece of the 2017 industry" is row 3, column B's header, which round 1 quoted and the receipt does not. The word is licensed either way; the citation points at the weaker of the two cells.

**SF-2 — "(non-store retail)" (G20:662) and "non-store industries" (A48; receipt 190, 217, 220) is a label with no source line in this cell (law 2).** The sheet prints only the two six-digit titles (*Electronic Shopping and Mail-Order Houses*, *Other Direct Selling Establishments*); the 2017 subsector title that the label paraphrases is in no retained file (`grep -rni nonstore snapshots/` → only this receipt). Descriptive of the two printed titles; moves nothing; carried from round 1 unremarked.

**SF-3 — `pieces.py` (rule 3).** Its `sets equal -> True` rests on (a) the backward workbook's column order, which it assumes and does not print (my read: `2022 Code | 2022 Title | 2017 Code | 2017 Title`), and (b) a forward set filtered to sources `448*`/`454110`/`454390` (line 25) against an unfiltered backward set (line 26) — the equality still proves no other source feeds `458*` in either file, but the paste shows neither the header nor the asymmetry. The instrument's docstring names the marks it cannot read and not these.

**SF-4 — Receipt §3, 191–193: *"the apparel nonemployer count the org can state is a superset that includes online and direct sellers"*** — the same compression as MF-2 in a milder frame ("a superset that includes" is defensible as set language; "includes pieces of" is what the sheet says). One word.

---

## VERDICT: FAIL, 2 MF / 4 SF

## WHAT THE SPLIT SHOULD BE

**The finding ships; two reason-clauses and one pointer-clause are pulled under a banner.** Ships whole: A48 limitation (1) from *"`448` in the CBP file"* to *"gated on its own.)*"* — nothing in MF-1 or MF-2 lives in it; G20's SETTLED sentence, its per-class parenthetical, and the "Until (ii)" sentence; the workbook, both instruments, every paste, receipt §1, §2, §2a, §3's first paragraph and table, and §4. Pull: (a) from G20 cost-to-close (i) the clause *"the six clothing classes by that and by the 2022 revision;"* (`gap-list:676–677`) — the parenthetical at 668–672 already carries the six correctly and the remaining two clauses of (i) stand; (b) from receipt §3 the clause *"for the six clothing classes in `458110` it is both — they share one 2022 code with each other AND with the two non-store industries;"* (`receipt:215–217`) — the table row at 208 carries them; (c) from slide 4 §6's pointer the parenthetical clause *"— every `458*` code also takes `454110` and `454390` —"* (`slide:414–415`) — what remains still points, dated, to A48 (1) and G20 with the hash held there. The SF sentences ship as they are.

---

## NOT CHECKED BY THIS VERDICT — the attempt behind each

- **The bold/italic marks** — not re-read this round (round 1's independent read stands as its reviewer's; my re-derivation is the row-count proxy round 1 showed equals the marks everywhere in this file).
- **The size of the `454110`/`454390` pieces in NES 2023** — not in the concordance; the 2022 Economic Census and any bridge table not opened (the receipt says "attempt: none"; same here).
- **NES's own statement of `nonemp23us`'s NAICS vintage** — carried; the methodology page not opened.
- **Whether the CBP 2023 file has exactly nine `448*` six-digit rows** — taken from the shift-28 receipt §4 paste; `cbp23us.zip` not re-fetched this round.
- **The seven MUST-FIX on slide 4** — not read; the slide diff is one hunk at 409–416 and nothing else on the slide moved.
- **A48's figures outside limitation (1)** — not re-derived; the word-diff confines this commit to limitation (1).
- **The 15:45Z inbox entry and lock.md** — read for rule 2 only; outside the freeze.

---

## FINAL RE-DERIVATION

`git rev-parse HEAD` → `b82c2e9c8cd22756c0b68b2b0a9944eee406b37e`; `git status --short` → empty at 15:51:45Z before this file was written; the seven digests as printed at the top. This file is the only path this reviewer wrote; scratch (both workbooks, the zip, `nonemp23us.txt`, the code list, `concordance.py`, `pieces.py`, `out1.txt`/`paste1.txt`, `out2.txt`/`paste2.txt`, `receipt-target.md`, two word-diffs) lives in `scratchpad/reviewer-c2/`, outside the repo. Not committed; not pushed; no other file touched; no branch switched.

Verdict written 2026-09-08, one hostile-investor reviewer, gate time only.
