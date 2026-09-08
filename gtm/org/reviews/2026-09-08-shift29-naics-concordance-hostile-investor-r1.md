# HOSTILE-INVESTOR GATE — THE 2017→2022 NAICS CONCORDANCE FINDING: `458` AGAINST THE NINE `448*` CLASSES (assumptions.md A48 limitation (1), from *"`448` in the CBP file is exactly the nine apparel classes"* to *"gated on its own.)"*; gap-list G20's struck-and-SETTLED sentence, struck-and-DONE cost-to-close (i), and the "Until (ii)" sentence; the receipt `2026-09-08-shift29-naics-concordance-receipt.md`, the workbook `2026-09-08-2017_to_2022_NAICS.xlsx` and the instrument `2026-09-08-shift29-naics-concordance.py`) — ROUND 1

CONFIDENTIAL — internal-audit class (law 8).

First breath: Player 2 is an AI marketing employee for small businesses; this verdict grades, at round 1 of two under AS-1, the one fetch the chief approved (inbox 2026-09-08T14:59Z item iii) and the two sentences written from it. A fresh reviewer; I wrote none of it.

**VERDICT: FAIL, 3 MUST-FIX / 4 SHOULD-FIX.** Every paste re-runs identical — both workbooks to the hash, the NES zip, the code list, the instrument's 51 lines line-for-line — and the finding itself holds on an independent read of the workbook's bold/italic marks, which the instrument cannot see: `458*` is bold at all four codes, `454110`/`454390` are italic, no `448*` code is. The fails are sentences that say more than the pasted output says, on the shape of this shift's earlier round-1 fails: a receipt sentence contradicted by its own paste (MF-1), a per-class summary that is true of six apparel classes and written of nine (MF-2, in G20 and the receipt), and slide 4 still calling the question open (MF-3, law 4). None touches A48's figure.

**Target:** `d76cc4e` (d76cc4ea20f0189ae0487d5db198ba333ed95753). Re-derived by this reviewer:

```
$ date -u                              # Tue Sep  8 15:36:21 UTC 2026 (first act); final check 15:41:08Z
$ git rev-parse HEAD                   # 0792cebd2c170f7fcc75388033ef488aa4cc8335
$ git log --oneline -8                 # 0792ceb (lock.md, convene) → d76cc4e (TARGET) → f9a75d0 (READY FOR REVIEW) → 94e46a3 (receipt §2 digests) → c4b64cb (document+instrument+receipt) → d2c8efc (lim-4 cell GATED) → ea00d52 → 12f861e
$ git log --format='%h %P' -1 <each>   # 0792ceb's parent IS d76cc4e; d76cc4e's parent IS f9a75d0; f9a75d0's parent IS 94e46a3
$ git diff --stat d76cc4e HEAD         # gtm/org/lock.md | 10 +  — the only change after the target; no ops-log.md commit
$ for p in <the five lock.md paths>; do git show d76cc4e:$p | sha256sum | cut -c1-16; done
cdea9d89c143b7c9 assumptions.md · 1ae50b2b9c418b0d gap-list · ca21a9b39f0518dd receipt · 4662cc7ed9e7f3fb xlsx · 160c79b4dd84c584 py — all five EQUAL lock.md's prints
$ git status --short                   # empty at 15:36Z and 15:41Z, before this file was written
```
*Blind spot: `sha256sum` proves bytes; lock.md's printed hash is taken as the convening record, as the freeze rule directs.*

**FREEZE HONOURED.** One commit after the target, `0792ceb`, `gtm/org/lock.md` only.

**Fan-out: one independent hostile-investor reviewer, gate time only.**

---

## EVERY PASTE, RE-RUN AS PASTED (law 4's amendment) — in `scratchpad/reviewer-c1/`, outside the repo

| Paste (receipt §) | Run | Result |
|---|---|---|
| §1 the two-workbook `for` loop, verbatim | 15:40:22Z | `HTTP 200 bytes 59656` `4662cc7e…` / `HTTP 200 bytes 61577` `76ed2d5b…` — **identical** (a second fetch at 15:36:30Z with my own flags: same bytes, same hashes) |
| §1 `nonemp23us.zip` + `nes_naics22.txt` + `unzip` + `sha256sum nonemp23us.txt` | 15:36:30Z | `420e37af…` (44,519 B) / `e79c488b…` (19,280 B) / `2bf4e3e6…` — **identical** to the paste and to the shift-28 hashes |
| §2 `sha256sum` of the four scratch files | 15:36:47Z | workbook `4662cc7e…`, `nonemp23us.txt` `2bf4e3e6…`, code list `e79c488b…`, `concordance.py` (copied from `git show d76cc4e:…py`) `160c79b4…` — **identical**; `cmp` retained xlsx vs fresh fetch: byte-identical |
| §2 `python3 concordance.py` | 15:36:47Z, exit 0 | 51 lines; `diff` against the paste (lines between `$ python3 concordance.py` and the fence): **IDENTICAL** |
| §2 retained-copies `sha256sum` (`snapshots/`) | 15:36:21Z via `git show d76cc4e:<path> \| sha256sum` | `4662cc7e…` / `160c79b4…` — **identical** |
| My own: NES 2023 `LFO='-'`, `RCPTOT_SIZE='001'` by `csv.DictReader` | 15:38:51Z | `45811` 241,235 · `45821` 8,897 · `45831` 55,123 · `45832` 2,338 · sum **307,593** = the `458` row; `4583` 57,461; the only NES rows under `7139`/`3118` are `7139`/`3118` themselves; `81219` present, `812191`/`812199` absent; no `454*` row — **all agree with A48 and the receipt** |
| My own: the seventeen `448*`/`458*` rows of the 2022→2017 workbook (not retained), parsed the same way | 15:38:57Z | seventeen rows, columns swapped, same seventeen pairs — **the exact transposition** (the receipt says "read by eye, not diffed"; I diffed) |

---

## THE INSTRUMENT'S BLIND SPOT, READ INDEPENDENTLY (stdlib `zipfile`+`xml`, `styles.xml` fonts → `cellXfs` → per-cell bold/italic; `openpyxl` absent)

- Row 2's note: *bold 2022 code = pieces of the 2022 industry came from more than one 2017 industry; italic 2017 code = the 2017 industry split to two or more 2022 industries.* Row 3, column B header: *"2017 NAICS Title (and specific piece of the 2017 industry that is contained in the 2022 industry)"*.
- Rows 609–617 (`448110`…`448320`): column A **not italic** (none of the nine split); column C **bold** at all nine (`458110` ×6, `458210`, `458310`, `458320`).
- Rows 663–666 (`454110` → `458110`/`458210`/`458310`/`458320`) and 704–707 (`454390` → the same four): column A **italic** at all eight; column C **bold** at all eight. Column B reads, in full, `'Electronic Shopping and Mail-Order Houses'` and `'Other Direct Selling Establishments'` — **the bare 2017 title; no "specific piece" text.** The Bureau writes a piece description ("… - anthracite surface mining") for seven of its nine split industries (`212113 325314 453998 515120 517312 517911 519130`) and **not** for `454110` (42 rows) or `454390` (39 rows).
- Marks vs the instrument's proxy, whole sheet: italic 2017 codes 9 = multi-row 2017 codes 9 (same set); bold 2022 codes 79 = multi-source 2022 codes 79 (same set). **The row-count proxy equals the marks everywhere in this file.**
- So: "pieces of `454110` and `454390` map into each of the four `458*` codes" IS what the sheet says — by the italic marks and the 42/39-way split — but the sheet does not say which piece (SF-1).
- The six matched codes: one row each, no mark on either side, `812199`/`713940`/`311811` likewise; 2022 codes under `4581` = {`458110`}, `4582` = {`458210`}, `4583` = {`458310`,`458320`}, `7139` = six, `3118` = six, `81219` = {`812191`,`812199`} — from the concordance's 2022 column (1,012 distinct codes, the Bureau's "Full Concordance").

---

## WHAT PASSED, WITH THE INSTRUMENT

- **The ruling's boundary (item iii).** `git diff --word-diff d2c8efc d76cc4e -- assumptions.md`: A48's changed tokens are all inside limitation (1) — from `{+in the CBP file+}` to `{+…gated on its own.)*+}`; the value cell, grade, limitations (2)–(4) and the tail untouched. No new row. `git diff d2c8efc d76cc4e -- gtm/raise | grep '^+' | grep '\$'`: shell prompts and A48's pre-existing `$25,000`/`$10,000` bands only — no `$` of the org's on an added line. Nothing is summed, multiplied or priced on any added line.
- **"SUPERSET" at five digits.** Licensed by the concordance, not the code list (MF-1 is the attribution, not the fact): `45811`/`45821`/`45831`/`45832` each hold exactly one 2022 six-digit code in the concordance's 2022 column, so each NES five-digit row is that code's row; each of those codes is bold and takes rows from `454110` and `454390`. `458` itself, `4581`–`4583`: the same, so "at every level NES publishes" holds.
- **Direction.** No `448*` code is italic — nothing leaves the nine; the two `454*` pieces are added — so `458` ≥ the nine at every level. The strict "overstates" is SF-2.
- **The twelve.** Instrument re-run: six MATCHED, twelve SUPERSET, zero NO ROW. `713940`/`311811` "at four digits with five siblings each": six 2022 codes under `7139`/`3118` in the concordance AND six 2017 codes under each in the CBP paste (shift-28 receipt §4) — the receipt §3 attributes the re-derivation to the concordance and says "the same three verdicts"; A48 limitation (1)'s pre-existing clause attributes the same to the CBP file; G20 attributes it to "the instrument's line per class". Consistent, each true of its source.
- **The four counts and their sum.** Re-derived above; 241,235 + 8,897 + 55,123 + 2,338 = 307,593.
- **The second workbook (item 7).** Disclosed in §1 (fetched in the same loop, hashed, NOT retained) and §4 (transposition "read by eye … no full-file diff"); `git ls-files | grep 2022_to_2017` empty; its use is bounded to a cross-check and no sentence rests on it. My diff: exact transposition of the seventeen rows. The chief's "one fetch" is exceeded by one file and said so plainly — passed.
- **Law 4 between A48 limitation (1), G20 and the shift-28 receipt §4/§C.** A48 and G20 agree (SUPERSET, `454110`/`454390`, share not sized, six one-to-one, figure unchanged). The shift-28 receipt §4 (lines 257–258) still reads *"was not established — NOT fetched this shift — OPEN ITEM, G20"*: a frozen capture dated to its shift; under shift 24's rule it stays as written and the pointer sits on the row — A48 limitation (1) carries it, G20 strikes and dates its own copy. No edit to that receipt is owed. Slide 4 §4 reason (1) *"six of the eighteen classes and no more"* still true. Slide 4 §6 is MF-3.
- **Rule 2.** `grep -i -E 'fixed|now true|checked|only|verified|confirmed'` on every added line of `d2c8efc..d76cc4e` (both drafts, receipt, inbox) and on the five commit messages `c4b64cb..0792ceb`: no *fixed / now true / checked / verified*; `only` once, descriptive of the instrument's read ("cell text only"); SETTLED / DONE are status words; "settles" is the chief's word. Rule 3: the receipt §2 names the mark-blindness and the piece-size blindness beside the output; A48 names "whose share the concordance does not size" in the sentence.
- **Quantifiers.** "every `458*` code" (four, all bold, all with both `454*` rows), "none without a row", "twelve", "five siblings each", "one-to-one" for the six, "at every level NES publishes" — each re-derived and holds. "the nine" — MF-2.

---

## MUST-FIX

**MF-1 — *"NES 2023 publishes `45811`, `45821`, `45831`, `45832` (the 2022 code list has one six-digit code under each, so the five-digit row is that code's row)"* (receipt §3, `…concordance-receipt.md:153–154` at the target) is contradicted by its own paste (law 4's amendment; rule 3).** The receipt §2 block *"2022 code list (nes_naics22.txt) entries under 458"* prints eight lines — `458 4581 45811 4582 45821 4583 45831 45832` — and **no six-digit code**; my `awk 'length($1)==6'` on the fresh code list finds 23 six-digit entries in the file, none under `458`. The "one code under it" the sentence leans on is the instrument's `2022 codes under it 1`, computed from the **concordance's** 2022 column (the instrument's docstring and code: `all22` from `data`, not from `nes_naics22.txt`). The fact survives on the concordance (1,012 distinct 2022 codes; `4581`→{`458110`}); the sentence names the wrong document, and a diligence reader who opens the code list to check it finds the opposite of what it says. The same attribution — *"the 2022 code list is the join"* — is in the 15:35Z inbox entry (outside the freeze, noted). Instrument: the paste itself; `grep -n '^458' nes_naics22.txt`; the instrument's source. *Blind spot: whether NES's convention of omitting a lone six-digit child from the code list is documented is not something I opened; the code list's silence is consistent with the fact but is not the fact.*

**MF-2 — *"the nine `448*` at five digits with each other and the two non-store industries"* (`gap-list-2026-09-04.md:666–667`) and *"for nine of them the reason is now two reasons: NES's publication depth AND a 2022 code that absorbed non-store retail"* (receipt §3, `…receipt.md:177–178`) are true of six apparel classes and written of nine (law 2; rule 1).** The instrument's own lines: `448210 -> 458210 NES row 45821 … 2022 codes under it 1 … 2017 sources 3 (448210, 454110, 454390)`, and likewise `448310`/`448320` — each is the only `448*` class in its 2022 code and its five-digit NES row holds that code alone. For those three, the superset is *with the two non-store industries* and by *the 2022 revision only*; "with each other" and "publication depth" apply to `448110`–`448190` in `458110`. The receipt's §3 table gets this right row by row (*"`448210` … SUPERSET at 5 digits — with pieces of `454110`, `454390`"*); the summary sentence in G20 and the "two reasons" sentence in the receipt compress it wrongly. G20's cost-to-close (i) *"the coarser rows are supersets by NES's publication depth, and the nine apparel classes by the 2022 revision as well"* reads either way and is not failed. Instrument: the paste, lines for `448210`/`448310`/`448320`; the concordance's 2022 column under `4582`/`4583`. *Blind spot: I read "with each other" as a per-class claim, which is how the sentence is built ("`812199` … with `812191`; `713940` … with five siblings"); if the boss meant it only of the six, the sentence does not say so.*

**MF-3 — Slide 4 §6 (`slide-04-market-size-v1.md:407–413`): *"…and the 2017→2022 concordance was NOT fetched, so whether `458` equals the nine `448*` classes is an open item — G20."* disagrees with G20 (*"SETTLED shift 29"*) and A48 limitation (1) (*"a limitation now, not an open item"*) on the same shared fact (law 4: a gate-fail for both).** The parenthetical is dated *"(Re-tried 2026-09-08, shift 28, …)"*, so its first half is history and stays; its consequence clause is present tense and now false, and it points at a G20 entry that says the opposite. The chief's ruling kept this work off slide 4's **seven MUST-FIX**; it did not put the rest of slide 4 out of law 4's reach, and this shift's first gate edited slide 4 §4 and its status line under the same ruling. The 15:35Z READY FOR REVIEW named A48, G20 and the shift-28 receipt as the law-4 sites and omitted the slide. Instrument: `grep -n 'concordance\|458' slide-04…` at `d76cc4e`; the diff `d2c8efc..d76cc4e` touches no slide line. *Blind spot: slide 4 is GATE-FAILED and un-convened; whether the org treats a failed slide's §6 as live for law 4 is the chief's call — I grade it as the doctrine reads.*

---

## SHOULD-FIX

**SF-1 — "pieces" is not in any paste, and receipt §4's *"the concordance names the pieces, not their establishment counts"* (`…receipt.md:190–191`) over-reads the sheet.** The instrument prints `454110`/`454390` as sources of each `458*` code but nothing that shows they are *pieces* (their 42/39 other rows, or the italic mark it declares it cannot read); the word rests on the Bureau's note, which the receipt §2 quotes, and on marks nobody in the paste read. My independent read licenses it. But the column that would "name the piece" carries the bare 2017 title for these eight rows — the Bureau names the piece for seven split industries and not these two — so the concordance names the *industry*, not the piece. Lands: receipt §2 (a printed count of `454110`/`454390` rows, or the marks) and §4's bullet. *Blind spot: whether "piece" has a Bureau definition beyond row 2's note — not looked for.*

**SF-2 — *"`458` read as apparel overstates"* (A48; G20; receipt §3 *"The direction is not conservative"*).** Nothing subtracts (no `448*` splits) and two pieces add, so `458` ≥ the nine is licensed; the strict *overstates* assumes at least one NES 2023 nonemployer sits in the `454110`/`454390` pieces, which the concordance — by the draft's own words — does not size. A one-word quantifier issue; no figure rests on it.

**SF-3 — *"none can be built from `458`"* and *"closed the door on the twelve"* (G20:662–663, 679).** The first is true of `458` alone and reads as true of any source; receipt §4 names the 2022 Economic Census or a bridge table as what a bound would need (attempt: none). The second is a flourish where the entry elsewhere names its instrument.

**SF-4 — Notes.** (a) Receipt §1: *"read by eye, not diffed"* — a diff is one line and I ran it; the receipt may cite mine or run its own. (b) The 15:35Z inbox entry (outside the freeze): *"the 2022 code list is the join"* — MF-1's attribution. (c) The instrument's `SUPERSET at 5 digits` label is computed from the NES row's depth, not from the reason for the superset; the label is where MF-2's "publication depth" reading came from.

---

## VERDICT: FAIL, 3 MF / 4 SF

## WHAT THE SPLIT SHOULD BE

If round 2 also fails, **the finding ships and the summaries are pulled**: A48 limitation (1)'s sentence stands whole except the four words *"read as apparel overstates"* (SF-2) if the boss cannot bound them — none of MF-1–MF-3 lives in A48. Pull from G20 the one parenthetical *"(`812199` at five digits with `812191`; `713940` and `311811` at four digits with five siblings each; the nine `448*` at five digits with each other and the two non-store industries)"* — the receipt's §3 table carries the per-class lines correctly. Pull from the receipt §3 the parenthetical *"(the 2022 code list has one six-digit code under each, so the five-digit row is that code's row)"* and the clause *"and for nine of them the reason is now two reasons: NES's publication depth AND a 2022 code that absorbed non-store retail"*. Slide 4 §6's clause is a dated pointer, not a re-draft, and is not a pull candidate. The workbook, the instrument and every paste ship as they are.

---

## NOT CHECKED BY THIS VERDICT — the attempt behind each

- **The size of the `454110`/`454390` pieces in NES 2023** — not in the concordance (the draft says so); the 2022 Economic Census and any bridge table not opened.
- **NES's own statement of the NAICS vintage of `nonemp23us`** — carried from the 4 Sep receipt, as the receipt §4 says; the methodology page not opened. The `458` row and the absence of any `454` row in the file are consistent with 2022 NAICS.
- **Whether the CBP 2023 file has exactly nine `448*` six-digit rows** — taken from the shift-28 receipt §4 paste (nine printed); not re-run on `cbp23us.zip` this round.
- **The seven MUST-FIX on slide 4** — not read; MF-3 is confined to §6's concordance clause.
- **A48's figures outside limitation (1)** — not re-derived; the word-diff confines this commit to limitation (1).
- **The ops-log** — no shift-29 entry exists yet (shift open); lock.md and inbox read for rule 2 only, not graded.

---

## FINAL RE-DERIVATION

`git rev-parse HEAD` → `0792cebd2c170f7fcc75388033ef488aa4cc8335`; `git status --short` → empty at 15:41:08Z before this file was written; the five digests as printed at the top. This file is the only path this reviewer wrote; scratch (both workbooks, the zip, `nonemp23us.txt`, the code list, `concordance.py`, `out.txt`/`paste.txt`) lives in `scratchpad/reviewer-c1/`, outside the repo. Not committed; not pushed; no other file touched; no branch switched.

Verdict written 2026-09-08, one hostile-investor reviewer, gate time only.
