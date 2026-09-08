# HOSTILE-INVESTOR GATE — THE G16 REVALUATION (assumptions.md A44 / A46 / A48 + legend line 23 + the "Not yet" bullet, slide 4 §1/§2/§4/§6/§7, gap list G16 / G20, the shift-28 receipt and instrument) — ROUND 2, THE LAST UNDER AS-1

CONFIDENTIAL — internal-audit class (law 8).

First breath: Player 2 is an AI marketing employee for small businesses; this verdict grades, at round 2 of two under AS-1, the revaluation of every truth-table row, slide passage and gap-list entry that keyed on G16 after Phin ruled (inbox 2026-09-08T13:29Z) that a one-person business counts as a customer — including the twelve round-1 fixes, each re-read as a new draft against its source, not against the round-1 verdict that proposed it.

**VERDICT: FAIL (round 2 — the last under AS-1). Two MUST-FIX, ten SHOULD-FIX.** Every figure the target states re-derives from the named files by my own one-liners (thirty-three checks, table below), the three pasted instruments re-run byte-identical as pasted (§1's two loops, the listing, the 2015 fetch and its `grep -n`; §2's script, `bce5d208…` both sides; §4's one-liner), and all three round-1 MUST-FIX now re-derive from their sources. Both fails are in one limitation and its mirror paragraph on the slide — limitation (4), the sentence that maps the ruling's words ("one person business") onto the Census category the row counts — and both were written by the round-1 fix for SF-5: a majority claim ("contains most of them") about a population the same sentence says was not cut, and two definitional claims about federal programs whose only citation is the round-1 verdict. Under AS-1 that is a split, not a third round, and the cut is by cell: everything with a figure ships; the mapping sentences do not.

**Target:** `5eafcb6` (5eafcb60ed0106de0d405ab2c6557ab2eb197499). Re-derived by this reviewer:

```
$ date -u                                                     # Tue Sep  8 14:38:02 UTC 2026
$ git rev-parse HEAD                                          # a6aa55a5672ce2fa339667aa298dc5830dd9fd00
$ git branch --show-current                                   # claude/b2c-mlp-ideas-gtm-76bs8z
$ git log --name-only --format='%h %ad %s' --date=iso 5eafcb6..HEAD
a6aa55a 2026-09-08 14:37:05 +0000 gtm boss: convene round 2 on the G16 revaluation — target hash printed in lock.md, tree frozen
gtm/org/lock.md
$ git status --short                                          # (empty)
$ for p in <the five paths>; do git show 5eafcb6:$p | sha256sum; done   # 14:38:11Z
6b0adc7d1c76f7b645f0bd6beec81464d858465184fe79eb34a21d4a0395a2a2  gtm/raise/model/assumptions.md
0820b3706ce7bb3225db3d3721d7eb3942e45fa994fd74773413572f413a2211  gtm/raise/deck/slide-04-market-size-v1.md
c43c79b58ee26785f3b1e3c204bb2b6ff54932f4f0134c566143929ed66927b6  gtm/raise/deck/gap-list-2026-09-04.md
c99b6e57706541b12c5bc1c89b4440137dc9aa0219cd5d7385de43612812c7c2  gtm/raise/model/snapshots/2026-09-08-shift28-g16-nes-rederivation.md
33656cd617a00ffbf88765f5c384d74c7c4573fc503692e8f4ded3bf34264fb5  gtm/raise/model/snapshots/2026-09-08-shift28-g16-nes-rederivation.py
$ sha256sum <the same five paths in the worktree>            # the same five digests
$ git log --name-only --format='%h %ad %s' --date=iso 88885e6..5eafcb6   # 14:47:09Z
5eafcb6 14:37:03 … applied as new drafts (the four target files)
6bddf55 14:37:00 … READY FOR REVIEW — round 2 … (gtm/org/inbox.md)
1dedb11 14:32:21 … round-1 verdict … (gtm/org/reviews/…r1.md)
1010478 14:18:09 … convene round 1 (gtm/org/lock.md)
```
The first sixteen hex of the four `.md` digests equal the four `lock.md` prints (`6b0adc7d1c76f7b6`, `0820b3706ce7bb32`, `c43c79b58ee26785`, `c99b6e57706541b1`); the `.py` is unchanged from round 1 (`33656cd6…`, the digest round 1 recorded). Worktree equals target for all five. The round-2 READY FOR REVIEW entry (`6bddf55`, 14:37:00Z) precedes the target (`5eafcb6`, 14:37:03Z) — the freeze's second sentence holds. *Blind spot: `sha256sum` proves the bytes; `lock.md`'s printed hash is taken as the convening record, as the freeze rule directs.*

**FREEZE HONOURED.** One commit after the target, `a6aa55a`, touching `gtm/org/lock.md` only; `git status --short` empty at 14:38:02Z and again before this file was written.

**Fan-out: one independent hostile-investor reviewer, gate time only.**

---

## RESULT IN ONE LINE

**Every number re-derives, every paste re-runs as pasted, and the three round-1 MUST-FIX are closed from their sources — and the fix for round-1 SF-5 wrote, into the one sentence that maps "one person business" onto "nonemployer", a majority claim the row itself says was never measured and two definitions of federal programs whose only citation is the previous reviewer; under AS-1 the mapping sentences are pulled and the counts ship.**

---

## THE FIGURES, RE-DERIVED — MY INSTRUMENTS, NOT THE BOSS'S SCRIPT

**Files.** Independently re-fetched into a fresh directory at 14:39:49Z–14:39:51Z by running the receipt's §1 loops *verbatim* (below); the census directory the boss left (`scratchpad/census/`) hashes the same (`2bf4e3e6…`, `1d8dbbfa…`, `51e8d291…`, `e79c488b…`, `d5342f74…`, 14:39:59Z). All four NES/CBP digests equal the 4 Sep receipt's lines 21–25 at 64 hex. *Blind spot: byte-identity on 4 Sep and 8 Sep proves the Bureau did not republish between the fetches, not that the file is the current 2023 vintage rather than a stale mirror; the listing shows one `nonemp23us.zip`, which is as far as this box sees.*

**The pastes, re-run as pasted (law 4's check).**

| Paste | Run | Result |
|---|---|---|
| Receipt §1 loop 1 (two zips) | 14:39:49Z, fresh dir | `HTTP 200 bytes 44519` / `420e37af…`; `HTTP 200 bytes 750265` / `3f9018f8…` — **matches the paste line for line** (the `-w` string has no filename; the paste has none) |
| Receipt §1 loop 2 (layout, code list) | 14:39:50–51Z | `HTTP 200 bytes 4265 us_record_layout_2017.txt` / `51e8d291…`; `HTTP 200 bytes 19280 nes_naics22.txt` / `e79c488b…` — **matches, three lines each** (round-1 MF-1 closed) |
| Receipt §1 listing `curl … \| grep -o 'href=…' \| grep -i "file\|layout"` | 14:39:51Z | ten `href` lines, **identical** to the paste (seven `.docx` 1997–2014, `United%20States%20File%202015.txt`, `us_record_layout_2017.txt`, the parent) |
| Receipt §1 2015 fetch + `sha256sum` | 14:39:51Z | `HTTP 200 bytes 5233`, `d5342f74…c477` — **identical** |
| Receipt §1 `grep -n '"111"\|"119"\|"1411"\|"S" - Sole' us_layout_2015.txt` | 14:39:51Z | lines 25/31/33/41 — **identical** |
| Receipt §1 `sha256sum` + `wc -c` of six files | 14:39:51Z | **identical**, 4,875,737 total |
| Receipt §2 `date -u …; python3 2026-09-08-shift28-g16-nes-rederivation.py` | 14:39:59Z, from the data directory with the script copied there as §2 now says | exit 0, 86 output lines; `diff` against receipt lines 112–197: **IDENTICAL**; both `bce5d2085d607384e4efd9e8285d46da56a02f95040d4fa7a10634b40e3ae3bc` |
| Receipt §4 one-liner — extracted from the receipt's own line 232 by `sed -n 232p \| sed 's/^\$ //'`, run with `bash` | 14:40:03Z | four lines, `diff` against receipt lines 233–236: **IDENTICAL** |

**My own re-derivation** — `awk -F, '{gsub(/"/,"")} …'` on the raw CSVs (NES columns: `$2` NAICS, `$3` LFO, `$4` RCPTOT_SIZE, `$5` ESTAB_F, `$6` ESTAB, `$7` RCPTOT_N_F; CBP: `$2` naics, `$3` lfo, `$10` est), Python only to divide; 14:42:56Z–14:44:46Z. *Recorded because round 1 recorded it: my first chained command aborted at a zero `grep -c` (exit 1 ends an `&&` chain) and the class-sum block never ran; a silent half-run reads like a clean result. Re-run unchained at 14:44:46Z.*

| Figure | My command (gist) | My result | Target's figure | Agree? |
|---|---|---|---|---|
| NES 812111 / 812112 / 812113 (`-`, `001`) | awk | 141,769 / 838,264 / 295,977 | same (A44; slide §4 table; receipt A) | YES |
| NES 722511 / 722513 / 722515 | awk | 61,909 / 52,005 / 19,974 | same | YES |
| CBP 812111 / 812112 / 812113 (`-`, `est`) | awk col 10 | 7,789 / 84,176 / 34,417 | same | YES |
| CBP 722511 / 722513 / 722515 | awk col 10 | 258,626 / 270,088 / 85,140 | same | YES |
| Six-code employer total | awk sum | 740,236 | 740,236 (A44, A48, slide §4, receipt) | YES |
| Six-code nonemployer total | awk sum | 1,409,898 | 1,409,898 (A44, A48, slide §1/3b/§4/§6, G16, G20) | YES |
| Personal-care three-code sum | awk sum | 1,276,010 | 1,276,010 | YES |
| NES `81211` row | awk | 1,276,010 | "equals the file's own `81211` row" (A44, A48, slide §4) | YES |
| Food three-code sum | awk sum | 133,888 | 133,888 (A48) | YES |
| Ratios | Python | 18.20 / 9.96 / 8.60 / 0.24 / 0.19 / 0.23; 1.905 | 18.2× / 10.0× / 8.6× / 0.2× ×3; 1.9× | YES (one decimal) |
| 1,276,010 ÷ 681,795; > 556,857 | Python | 1.872; True | "~1.87×" (A44, G16 record); "more than the whole firm count above" (slide §1) | YES |
| Coarser rows 458 / 7139 / 3118 / 8121 / 81219 | awk | 307,593 / 143,522 / 32,641 / 1,468,638 / 192,628 | same (receipt B; G20's 307,593) | YES |
| Section C — every `-`/`001` row under 812\|713\|722\|311\|448\|458 | awk, sorted, `diff` against receipt lines 128–181 normalised | 54 rows, **IDENTICAL** | 54 rows | YES |
| Six-digit rows among them | `awk 'length($1)==6'` | 722511 722513 722514 722515 812111 812112 812113 | "the matched six plus `722514`" | YES |
| Any NES row, any LFO, any size, for 812199 / 713940 / 311811 / 448* | awk, `wc -l`; also `grep -c '"448'` | **0**; 0 | "no NES six-digit row exists" | YES — holds at every cut |
| `133` row for the three food codes, any LFO | awk | 0 | "no `133` row exists … no row, not a flagged row" | YES (the four personal-care codes do carry `133` rows: 31 / 90 / 529 / 650) |
| Class sum vs `001`, seven codes | awk | +0 ×4 personal care; **+2** 722511; **+1** 722513; **+0** 722515 | "exact for five … 2 and 1 short" | YES (round-1 SF-3 closed) |
| `RCPTOT_N_F` on the 67 rows read | awk `uniq -c` | `G` on the 7 `001` rows; `N` on all 60 class rows (`RCPTOT_F` also `N` there) | receipt §5, A48 lim (2) | YES (round-1 SF-2 closed) |
| `ESTAB_F` non-blank anywhere | awk over 6,412 rows | 0 | "blank throughout" | YES |
| 81211 under $25,000 / under $10,000 | awk cumulative | 731,057 = 57.3% / 307,481 = 24.1% | 57.3% / 24.1% | YES |
| Food under $25,000 | awk | 61.8 / 58.5 / 63.3% | "58–63%" | YES |
| LFO `S` share, 81211 | awk | 1,232,653 / 1,276,010 = 96.6% | 96.6% | YES |
| LFO `S` share, food | awk | 84.7 / 83.3 / 85.6% | "83–86%" | YES |
| C+Z+S+P = `-`, seven codes | awk | exact ×7 | "exactly for all seven" | YES |
| CBP six-digit under `81219` | awk | 812191 = 2,481; 812199 = 31,863 | receipt §4 paste; A48 lim (1) "`812199` beside `812191`, 2,481" | YES |
| CBP six-digit under `7139` / `3118` | awk | six each (713940 = 41,556; 311811 = 9,219 among them) | "beside five other classes" ×2 | YES |
| CBP six-digit under `448` | awk | the nine codes, = the 4 Sep receipt's nine rows 80–88 | "`448` is exactly the nine apparel classes" | YES |
| `nes_naics22.txt` titles for 3118 / 458 / 7139 / 81219; any 812191/812199 line | `grep -nE` | lines 64 / 192 / 401 / 440, titles as quoted; 0 | receipt §4 | YES |
| 2017 layout LFO codes and RCPTOT_SIZE bands | `cat -n`, lines 20–41 | as the receipt quotes them; `"N" - Not available or not comparable.` at line 59; `"G" - Low noise` at 65 | receipt §5 | YES |
| 2015 layout vs 2017: LFO + RCPTOT_SIZE blocks | `diff <(sed -n 20,41p 2015) <(sed -n 20,41p 2017)` | **IDENTICAL** | "the same `LFO` strings and `RCPTOT_SIZE` bands" | YES — but the full `diff` is not silent: see SF-1 |
| Gap-list count | `grep -c '^#### G[0-9]*\.'`; `grep -c '^- \*\*G1[345]\.'` | 16 (G1, G3–G12, G16–G20); 3; G2 struck at line 29 → 19 live IDs | "19 live IDs … 16 `####` … G13–G15 Tier-4 bullets" | YES (round-1 SF-8 closed) |
| 4 Sep receipt lines 138–141 | `sed -n 138,141p` | the paragraph; the quoted sentence begins at the end of 139 and ends at 141 | receipt §6 "its lines 138–141" | YES on the words; pointer one line wide (SF-5) |
| "unmade" in the 4 Sep receipt, ever | `grep -c`; `git log -S'unmade' -- <path>` (and `-i`) | 0; no commit | "a phrase that file never contained" | YES — and `git log -S'unmade Phin ruling'` puts its first appearance at `7243e80` (5 Sep) in A44, so "those were A44's own words" also re-derives |
| The ruling's words | `sed -n 83,86p inbox.md` | *"G16 — one person business does count as a customer!"* | G16 closure and receipt §0 exact; A44 and slide §4 drop `G16 — ` and print `."` for `!"` | YES on the words (SF-6) |
| `positioning.md:162–164` | `sed -n 155,170p` | *Target: **solo owner-operators of local, visual small businesses** — salons, gyms/studios, restaurants/cafes, boutiques — with no marketing hire and low or no budget.* at 162–164 | slide §4 quotes it with the four examples inside `[— … —]` | YES on the words (SF-9) |
| "least money" | `grep -n` gap list | line 337, inside the ORIGINAL ENTRY block | slide §4 *"a one-person operation has the least money"* | YES |
| Prices / tiers in the added lines, whole revaluation `eb96b08..5eafcb6` | `git diff … \| grep '^+' \| grep -o -E '\$ ?[0-9]…\|tier\|price\|ARPU\|OS\b\|founding\|entry'` | only `$25,000` / `$10,000` / `$5,000` / `$5,000,000` (Census receipts bands, layout lines) and "price"/"ARPU"/"tier mix" inside sentences refusing to compute one | none should exist | YES — none |

---

## THE TWELVE ROUND-1 ITEMS, EACH RE-READ AS A NEW DRAFT AGAINST ITS SOURCE (rule 1)

| Item | What the fix says now | Re-derives from the source? | Verdict |
|---|---|---|---|
| MF-1 (receipt §1 paste) | The layout/code-list fetch is a `for` loop with `date -u` and `$f` in the `-w` string, three lines per file; the listing and the 2015 layout pasted | Run verbatim 14:39:50–51Z: every line identical | **CLOSED** |
| MF-2 (receipt §6 misquote) | Quotes the capture's own sentence, cites lines 138–141, says the phrase was A44's, adopts "a frozen capture stays as written" | `sed -n 138,141p`: the sentence is there, verbatim (closing period dropped inside the quote); `git log -S` puts "unmade" nowhere in that file and first in A44 at `7243e80` | **CLOSED**; pointer is the paragraph, not the sentence (SF-5) |
| MF-3 (superset sentence, four sites) | A48 lim (1), receipt §4, G20, slide §7 all say: by the 2017 structure in the CBP file, `81219`/`7139`/`3118` are supersets of the one class they contain; `448` = the nine; `458` open, concordance not fetched | My awk on CBP: 81219 → {812191, 812199}; 7139 → six; 3118 → six; 448 → the nine. Same fact, same hedge on `458`, at all four sites; the receipt names the blind spot (a 2022 re-parenting invisible to both files) | **CLOSED** |
| SF-1 (listing not pasted; ".docx for earlier years") | Listing pasted; "`.docx` for 1997–2014, a `.txt` for 2015, nothing later"; 2015 layout fetched, "same `LFO` strings and `RCPTOT_SIZE` bands (the `grep -n` above)" | Listing identical to live at 14:39:51Z; the LFO+SIZE blocks are byte-identical by my `diff`; **the pasted `grep -n` shows four of the sixteen code lines, and the receipt's wider sentence "two layout vintages agreeing on the codes this receipt reads" is false for the flag codes §5 reads** (2015 defines `D` and no `N`; 2017 defines `N` and no `D`) | Closed on the listing; **SF-1 (r2)** on the corroboration sentence |
| SF-2 (flags) | `G` on the seven totals, `N` on all 60 class rows, `ESTAB_F` blank throughout | awk `uniq -c`: 60 class `N`, 7 total `G`; `ESTAB_F` non-blank 0 of 6,412 | **CLOSED** |
| SF-3 (seven codes enumerated) | "exact for five (`812111`, `812112`, `812113`, `81211`, `722515`) and 2 and 1 short for `722511` / `722513`" | awk: +0 +0 +0 +2 +1 +0 +0 | **CLOSED** |
| SF-4 (ellipsis; the equation) | The elided words are printed inside `[— … —]`; "overlaps" for "is"; "a large part"; "How large is ARGUED, not measured" | Words verbatim (brackets around verbatim text — SF-9); the grade: the legend (`assumptions.md:287–294`) defines ARGUED as *a figure this org CHOSE … must carry its argument and a sensitivity* — no figure, no sensitivity here | Ellipsis closed; **SF-2 (r2)** on the grade |
| SF-5 (limitation (4) both directions) | A48 lim (4): nonemployer ≠ one person (layout, section E); "an owner who pays herself a wage is an employer with one employee in CBP/SUSB, already inside A42 (round-1 SF-5; … attempt: none)"; "the Census category that contains most of them"; A44 points to it; slide §4 mirrors it twice | First direction re-derives (layout lines 22–26; section E). **The converse names no document** — the Bureau's CBP glossary (fetched 14:44:53Z, below) supports it for salaried officers of corporations only. **"Contains most of them" has no receipt and the sentence says none was attempted** | **MF-1, MF-2 (r2)** |
| SF-6 ("checked" ×2) | Both sites re-worded ("with the same class-sum test"; "The class rows were summed against the `001` row") | `grep -n 'checked arithmetically'` over the four files → only A40 and slide §6 item 6, both pre-existing | **CLOSED** |
| SF-7 (receipt §2 directory) | "**The data is not in `snapshots/`** … copy the script there … run it from that directory as below" | Done exactly that; identical output | **CLOSED** |
| SF-8 (gap-list count) | "IDs G1–G20 less the struck G2 = 19 live IDs, of which 16 are `####` (`grep -c …` → 16) and G13–G15 are Tier-4 bullets; G16 is closed and still counted" | 16 / 3 / G2 struck at line 29 | **CLOSED** |
| SF-9 (legend line 23) | "*(since 2026-09-08 the employer-firm FLOOR — G16 ruled; the row)*" | The label now agrees with A46; "; the row)" is a fragment | Closed; wording in SF-8 (r2) |

---

## MUST-FIX

### MF-1 — "the Census category that contains **most** of them": a majority claim about a population the same sentence says was never measured (law 2; law 4's amendment — nothing was run; boss.md gate criterion "any claim without a receipt").

**Where:** `gtm/raise/model/assumptions.md:457`, A48 limitation (4), last sentence: *"this row applies them to the Census category that contains most of them and says so"*; mirrored at `gtm/raise/deck/slide-04-market-size-v1.md:304–309`, the paragraph *"One-person business" and "nonemployer" differ in both directions*, last sentence: *"the Census category that contains most of those businesses"*. **Cell for the split:** A48 limitation (4) (the row's other three limitations, its value cell, its grade sentence and its instrument sentence are untouched by this); slide §4's final paragraph. A44's pointer *"A48 limitation (4) states them"* is a pointer, not a claim, and survives only if it points at whatever ships.

**What:** the ruling's words are "one person business". A48 counts NES nonemployers. The sentence that licenses reading one as the other says the category contains *most* one-person businesses — and eleven words earlier says *"the size of that population was not cut from the CBP file this shift — an open item, attempt: none."* At `88885e6` the sentence read *"contains them"*; the quantifier arrived in the fix. Could it be receipted? Partly, by bound, and the target does not make the argument: in personal care nonemployers (1,276,010) outnumber **all** CBP employer establishments in the four codes (158,245, 4 Sep receipt row 73) by 8×, so "most" would hold there even if every employer establishment were a one-person S-corp; in food, employer establishments (613,854) outnumber nonemployers (133,888) 4.6×, and CBP's smallest size class is `<5` (CBP header, `n<5`; 4 Sep receipt §1), so a one-employee cut cannot be made from the file at all. **Direction of error: not conservative.** If "most" is false where the ruling is applied, A48 counts a category the ruling did not name while most of the ruling's population sits inside A42 already. That is the objection — *"how do you know most one-person businesses are nonemployers?"* — and the artifact answers it, in the same sentence, with "attempt: none".

**Instrument:** `sed -n 457p assumptions.md`; `git diff 88885e6..5eafcb6 -- assumptions.md` (the quantifier is a `+` line); the bound from the 4 Sep receipt rows 73/78 and my awk totals. *Blind spot: I did not fetch SUSB's `ENTRSIZE=02` (<5) firm counts to tighten the food bound; the bound above uses total establishments and is therefore the loosest one.*

### MF-2 — The converse and the forward mapping are definitional claims about two federal programs whose only citation is the round-1 verdict (law 2; rule 1 — a gate's proposed remedy is a draft to be re-read against a source, and "(round-1 SF-5)" is not a source).

**Where, three sites:** `assumptions.md:457`, A48 limitation (4), sentences 2–3: *"a one-person business is not necessarily a nonemployer — an owner who pays herself a wage is an employer with one employee in CBP/SUSB, already inside A42 (round-1 SF-5; …)"*; `slide-04:264–270`, inside the *"What the ruling does"* paragraph: *": a solo owner-operator with no employees is a nonemployer, … and a solo owner who is on her own payroll is an employer already inside step 3 (A48, limitation 4)"*; `slide-04:304–307`: *"a one-person business whose owner draws a wage is an employer with one employee and is already inside step 3."* **Cell for the split:** A48 limitation (4), sentences 2–3; slide §4 the clause from the colon at line 264 to "(A48, limitation 4)." at 270; slide §4's final paragraph. (The first sentence of limitation (4) — nonemployer ≠ one person, from the layout's `C`/`Z`/`P` rows and section E — re-derives and is not in this item.)

**What the sources say — fetched, because the target names none.** `curl -sS -L https://www.census.gov/programs-surveys/cbp/about/glossary.html` (HTTP 200, 329,702 B, 14:44:53Z): *"Paid employment consists of full- and part-time employees, including salaried officers and executives of corporations, who are on the payroll in the pay period including March 12 … not included are sole proprietors and [partners]"*, and *"Establishment counts represent the number of locations with paid employees any time during the year."* `curl -sS -L https://www.census.gov/programs-surveys/nonemployer-statistics/about/glossary.html` (200, 332,417 B, 14:44:55Z): *"A nonemployer business is one that has no paid employees, has annual business receipts of $1,000 or more ($1 or more in the Construction industry), and is subject to federal income taxes."* So: the converse is **true for an incorporated one-person business** whose officer is on payroll and **not available to an unincorporated one** (a sole proprietor's draw is not paid employment) — the target's *"pays herself a wage"* / *"on her own payroll"* survives that reading but does not state it; and the forward mapping *"a solo owner-operator with no employees is a nonemployer"* holds **above $1,000 in annual receipts**, a floor the target states nowhere. Both qualifications point at undercount, which is why this is a receipts fail and not a figure fail — but a truth-table row that defines the population it counts by reference to what a previous reviewer wrote is exactly the shape rule 1 was written for, and the document was one `curl` away.

**Instrument:** the two fetches above (`grep -o -i -E` for *paid employees|proprietors|salaried officers|no paid employees|Nonemployer businesses are* over the HTML, tags stripped). *Blind spot: `www.census.gov` pages render server-side enough for `grep` to find these paragraphs, but I did not hash the pages or read them in full; the CBP glossary also says the `<5` class "includes establishments that did not report any paid employees in the mid-March pay period but paid wages to at least one employee at some time during the year", a wrinkle in "employer" that neither the target nor this verdict sizes.*

---

## SHOULD-FIX

**SF-1 — Receipt §1 prose: the 2015-layout corroboration is wider than its pasted instrument, and one clause is false.** The paste is `grep -n` for four strings (lines 25/31/33/41); the sentence claims *"the same `LFO` strings and the same `RCPTOT_SIZE` bands … two layout vintages agreeing on the codes this receipt reads"*. My `diff <(sed -n 20,41p 2015) <(sed -n 20,41p 2017)` is silent — the LFO and band blocks are byte-identical, so the first clause is true and the paste under-supports it. The full `diff us_layout_2015.txt us_record_layout_2017.txt` is **not** silent: 2015 defines `"D"` in `ESTAB_F`, `RCPTOT_N_F` and `RCPTOT_F` and has no `"N"`; 2017 defines `"N" - Not available or not comparable.` and no `"D"`. §5 reads `N` — a code the 2015 vintage does not carry — so "agreeing on the codes this receipt reads" is false for the flag it leans on. Lands: receipt §1, the paragraph under the table. A48 lim (2)'s narrower parenthetical ("carries the same `LFO` strings and `RCPTOT_SIZE` bands") is true as written.

**SF-2 — Slide §4 *"How large is ARGUED, not measured"* applies a grade the legend reserves for a figure to a magnitude word.** `assumptions.md:287–294`: ARGUED is *"a figure this org CHOSE, with its reasoning shown … must carry its argument and a sensitivity."* *"A large part of the customer the positioning describes"* is a claim of size with no figure and no sensitivity; the table above it supports "large" for the three personal-care codes (8.6–18.2×) and contradicts it for the food codes (0.2×), and the sentence says so — which is disclosure, not a grade. Either tie "large" to the rows where the table carries it, or drop the word and the label. Lands: `slide-04:264–270` (the same clause MF-2 names; if that clause is pulled this lands with it).

**SF-3 — Slide line 77, unchanged this shift, now contradicts the new drafts:** *"NUMBERS RULE (law 4): figures quote `assumptions.md` rows **A40-A46**."* The slide quotes A48 ten times (`grep -c A48` → 10) in §1, §2, §4, §6 and §7. A neighbour the fixes did not re-read. Lands: the ORIGINAL STATUS block, line 77 — outside the shift-28 drafts, so a law-4 pointer fix, not a re-draft. (`assumptions.md:463` and `gap-list:101` also say A40–A46, inside dated 4 Sep history — left as written.)

**SF-4 — Two different documents now share the local filename `us_layout_2015.txt`.** The 4 Sep receipt's is the **CBP** 2015 layout (9,284 B, `c009d926…`); this receipt's paste saves the **NES** 2015 layout under the same name (5,233 B, `d5342f74…`), while its table calls it `United States File 2015.txt`. Slide §4 says the cut has *"the same cross-vintage shape as §6 item 6"* — whose 2015 layout is the CBP one. A48 joins its copy by hash, so no figure is at risk; a reader following filenames will find two hashes for one name. Lands: receipt §1 paste and table row; A48 lim (2) ("the 2015 layout" → which one).

**SF-5 — Receipt §6 *"its lines 138–141"*: the quoted sentence begins at the end of line 139 and ends at 141; line 138 is the preceding sentence (*"The finding is the SPREAD, not the total."*).** `sed -n 138,141p` pasted in the table above. The inbox r2 entry repeats the range (out of scope; noted). Lands: receipt §6, last bullet.

**SF-6 — The ruling is quoted with altered terminal punctuation at two of its three sites.** Phin's words (inbox line 85): *"G16 — one person business does count as a customer!"* The G16 closure and receipt §0 print them exactly; A44 (`:453`) and slide §4 (`:256`) print *"one person business does count as a customer."* — `."` for `!"` inside the quotation marks, with `G16 — ` dropped unmarked. This org's G19 gate failed an unbracketed ellipsis; an unmarked change inside quotation marks is the same class, smaller. Lands: A44's RULED sentence; slide §4 line 256.

**SF-7 — *"The Bureau's newest plain-text US layout is dated 2017"* generalises one directory's listing to the Bureau, and the blind spot round 1 named beside that result is not carried.** The listing is now pasted (a claim of absence with its command — the constraint met); what is missing is rule 3's clause: `combined-record-layout/`, the geography sub-directories and the Census API's variable metadata were not opened by the boss (nor by round 1, which listed eight directories and said so; nor by me). Lands: A48 lim (2), first sentence; receipt §1 prose.

**SF-8 — Two wording glitches introduced by fixes.** `assumptions.md:23`: *"… hangs off it *(since 2026-09-08 the employer-firm FLOOR — G16 ruled; the row)*"* — "; the row)" is a fragment (round-1 SF-9's landing). `assumptions.md:455` (A46): *"may never be presented as any  **G16 RULED …"* — at `eb96b08` the cell ended at "as any |"; the revaluation appended with two spaces and no period (`git show eb96b08:… | grep -o 'presented as any.\{0,30\}'`). Lands: legend line 23; A46's grade cell.

**SF-9 — Slide §4's `[— salons, gyms/studios, restaurants/cafes, boutiques —]` puts the source's verbatim words inside editorial brackets.** Brackets mark an insertion by the quoter; these words are `positioning.md:162–163`'s own. The round-1 remedy said "bracket the ellipsis", i.e. `[…]`; printing the words unbracketed is the other correct form. Lands: `slide-04:263`.

**SF-10 — Rule 2's letter, one site:** receipt §5, *"the absent `133` row is the only candidate the file shows"* — "only" about the shift's own finding; the instrument (flags enumerated, `ESTAB_F` count) stands beside it, which is the rule's spirit. Lands: receipt §5 first paragraph.

---

## WHAT PASSED, WITH THE INSTRUMENT

- **The freeze**, by `git log 5eafcb6..HEAD` (one `lock.md` commit), `git status --short` (empty, twice), five digests equal at target and HEAD, and the READY FOR REVIEW commit (`6bddf55`, 14:37:00Z) preceding the target (14:37:03Z).
- **Every pasted output re-runs as pasted** — §1's two loops, listing, 2015 fetch, `grep -n`, `sha256sum`, `wc -c`; §2's 86 lines (`bce5d208…`); §4's four lines — from a fresh directory for §1 and from the data directory §2 now names. Round-1 MF-1 is closed on the command's own output, not on the boss's description of it.
- **Every figure**, by the table above — thirty-three checks by `awk` on the raw CSVs and `diff` against the receipt's sections C and §4, all agree. *Blind spot named: my first chained run aborted silently at a zero `grep -c`; the second half was re-run unchained.*
- **The coverage claim, at a wider cut than the receipt's:** zero NES rows at any LFO and any size class for `812199`, `713940`, `311811`, any `448*`.
- **The superset claims (round-1 MF-3), by my own `awk` on CBP:** `81219` → {`812191`, `812199`}; `7139` → six; `3118` → six; `448` → the nine, equal to the 4 Sep receipt's rows 80–88. The same fact and the same hedge on `458` at A48 lim (1), receipt §4, G20 and slide §7; the receipt names the instrument's blind spot (a 2022 re-parenting invisible to both files).
- **The 4 Sep capture is unedited** (`git diff eb96b08..5eafcb6 --stat -- <path>` empty) and **never contained "unmade"** (`grep -c` 0; `git log -S` on the path empty); the phrase entered the tree in A44 at `7243e80` on 5 Sep. The inbox r2 entry's correction of the 14:14Z entry is accurate on every word I can check (out of scope, not graded).
- **No price, tier, combined total, nonemployer × A45 product or dollar figure** in any added line of the whole revaluation (`git diff eb96b08..5eafcb6`), by `grep` on the `+` lines: the only dollar strings are Census receipts bands; every "price"/"ARPU"/"tier mix" hit is a sentence refusing to compute one. The six-code total row is a same-program subtotal beside, not added to, the employer column.
- **Law 4 on figures and grades across the four files**, by `grep -c` per figure per file (table): 1,409,898 / 1,276,010 / 740,236 / 133,888 / 96.6% / 57.3% / 24.1% / 58–63% / 83–86% / 307,593 / 2,481 / 18.2× / 10.0× / 8.6× / 0.2× / 1.9× / ~1.87× carry one value everywhere they appear; no variant digit string exists in the four files (`grep -o -E` for near-misses returns only the receipt's own per-code shares). The grade pair *SOURCED (the counts) · RULED (the inclusion)* is the same at A48, slide §1's bracket, slide 3b and the G16 closure; the slide quotes rows by ID (`[A44, A48]`, `[A46]`, `[A48, limitation 4]`) at every new site.
- **The receipt's §0 and the G16 closure quote the ruling exactly**; A44 and slide §4 quote its words with the punctuation change in SF-6.
- **Rule 2 on the fixes:** `grep -i -E '\b(fixed|now true|checked|only)\b'` over the `+` lines of `88885e6..5eafcb6` returns "only these six codes" / "only those are compared" (pre-existing wording re-added) and SF-10's "only candidate"; no "fixed", "now true" or "checked" about the shift's own work.
- **The blind-spot rule (a limitation carries its attempt):** A48's four limitations each name one; the concordance is an OPEN ITEM (G20) with its attempt; the one-employee cut is an open item with "attempt: none" stated — which is the rule applied, and is also why MF-1's "most" cannot stand beside it.
- **The tree sweep for live pre-ruling sentences outside the target.** Fixed-string `grep -rn -F` for *no employees / employer firm / nonemployer / booth-renting / floor* over `gtm/` `*.md` excluding `inbox.md`, `lock.md`, `ops-log.md`, `reviews/` (14:43:42Z): outside the four target files and the two census receipts, the only hit for the first four strings is `2026-09-05-smm-landscape-44pct-citation-audit.md:180` (a dated receipt saying shift 20 opened G16 — history, past tense; its §5 at 169–186 read in full); every "floor" hit (37, listed) is a pricing, ritual, COGS, salary, house-voice or disclosed-floor sense, none the market-size sense. Adjacent-line `awk` test (14:43:55Z) for *no/employees*, *employer/firm(s)*, *booth-/renting*, *non-/employer*, *one-/person*, *is a/floor*, *unmade/ruling* split across a wrap over every file matching `employ|booth|person|G16|floor`: four pairs — the receipt's own MF-2 note (293–294), the gap list's ORIGINAL ENTRY block (339–340, dated history), `position-v2-the-hire.md:998–999` (*"An owner-led shop is one / person"* — copy, not a count) and `front-door-overhaul-v1.md:171–172` (*"A grep is a / floor"*). Paraphrase sweep (`one-person|one person|nobody has ruled|not (yet )?ruled|unruled|until Phin|employer-only|employers only|with (a )?payroll|payroll businesses|firms with staff`, `-i`): no live claim-bearing hit. `gtm/raise/deck/` holds only the gap list, the skeleton and slide 4 — there are no slide-5/6 files to sweep; the skeleton has no line matching `employer|market size|A4[0-8]`. **No live claim-bearing sentence outside the target states the pre-ruling position without a strike or pointer.** *Blind spot: a fixed-string grep cannot see a paraphrase I did not think of, and the adjacent-line test sees a two-line split only, not a three-line wrap; `gtm/market/` files were read at their hits, not in full.*

---

## PROPOSED SPLIT (my proposal — the chief cuts it; wording not checked)

**SHIP (every sentence re-derives from a named file or paste):**
- `assumptions.md` — **A44** entire (its pointer *"A48 limitation (4) states them"* must point at what ships, not at pulled text, per the A47 precedent); **A46** entire; **A48** value cell, grade sentence, instrument sentence, limitations **(1), (2), (3)**, and **limitation (4)'s first sentence** (*"A nonemployer is not necessarily one person — NES counts businesses with no paid employees; corporations and partnerships are among them (the file's `C`, `Z`, `P` rows are the remainder after `S`, section E)"*); the "Not yet in this table" amendment; legend line 23.
- `slide-04` — header amendment; §1's quote-block paragraph; §2 rows 3b and 5; §4's table, receipt line, *"Personal-care nonemployers alone…"*, the RULED line, the *"What the ruling does"* paragraph **up to and including** `positioning.md:162–164`) and **from** *"**The ruled-in businesses are not added"* to `[A46, A48]`; the *"case against"* paragraph; the *"Segment re-weighting"* paragraph; §6 item 7; §7's nonemployer bullet.
- `gap-list` — header AMENDED line; G16 closure; G20 entire.
- The receipt and the instrument, entire (SF-1, SF-5, SF-10 are notes, not fails).

**PULL (under a banner, between ⟦PULLED TEXT⟧ marks, nothing may cite it):**
- A48 limitation (4), sentences 2–4 (*"And a one-person business is not necessarily a nonemployer … contains most of them and says so"*) — MF-1, MF-2.
- Slide §4, the clause from the colon at line 264 (*": a solo owner-operator with no employees is a nonemployer"*) to *"(A48, limitation 4)."* at line 270 — MF-2, SF-2.
- Slide §4's final paragraph (*"One-person business" and "nonemployer" differ in both directions*, 304–309) — MF-1, MF-2.

**What the chief should rule with the cut:** with the mapping sentences pulled, A48's *RULED (the inclusion)* applies Phin's "one person business" to the NES category with only sentence 1 of limitation (4) disclosing the gap between them. That is thinner than the target, not false. The alternative is that A48 waits on a re-draft of limitation (4) whose document is the Bureau's two glossaries (fetched above, commands pasted, not hashed by me) and whose quantifier is a bound or is absent — at its own gate, not by its author alone.

---

## NOT CHECKED BY THIS VERDICT — the attempt behind each

- **The 2017→2022 NAICS concordance** — not fetched by the boss, round 1, or me; G20 is as open as it says.
- **The two Bureau glossaries** were fetched and `grep`ped, not hashed and not read in full; they are the document MF-2 says the target lacks, and a row that adopts them should fetch and hash them itself.
- **SUSB / A42 / A45** — not re-derived; `git diff eb96b08..5eafcb6` shows neither row touched.
- **The size of the one-employee employer population** — not cut by anyone; CBP's smallest class is `<5`, so it cannot be cut from the file the org holds.
- **The unchanged parts of slide 4** (the seven MUST-FIX of 2026-09-05) — out of scope; only line 77 was read, because the new drafts point at it.
- **The inbox below line 110, the ops-log, `236403b`, `be5a428`** — not read beyond the brief's statement of their scope.
- **`www2.census.gov` directories other than `us-record-layout/`** — not listed by me; SF-7 carries round 1's list as the attempt.

---

## FINAL RE-DERIVATION

`date -u` → `Tue Sep  8 14:52:13 UTC 2026`; `git rev-parse HEAD` → `a6aa55a5672ce2fa339667aa298dc5830dd9fd00`; `git status --short` → only `?? gtm/org/reviews/2026-09-08-shift28-g16-revaluation-hostile-investor-r2.md` (this file); `sha256sum` of the five target paths in the worktree, first sixteen hex → `6b0adc7d1c76f7b6`, `0820b3706ce7bb32`, `c43c79b58ee26785`, `c99b6e57706541b1`, `33656cd617a00ffb` — unchanged from the block at the top. This file is the only path this reviewer wrote. Not committed; not pushed; no other file touched; no branch switched.

Verdict written 2026-09-08, one hostile-investor reviewer, gate time only.
