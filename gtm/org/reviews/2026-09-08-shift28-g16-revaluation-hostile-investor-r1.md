# HOSTILE-INVESTOR GATE — THE G16 REVALUATION (assumptions.md A44 / A46 / A48, slide 4 §1/§2/§4/§6/§7, gap list G16 / G20, the shift-28 receipt) — ROUND 1

CONFIDENTIAL — internal-audit class (law 8).

First breath: Player 2 is an AI marketing employee for small businesses; this verdict grades the one-commit revaluation of every truth-table row, slide passage and gap-list entry that keyed on G16 after Phin ruled (inbox 2026-09-08T13:29Z) that a one-person business counts as a customer, at round 1 of two under AS-1.

**VERDICT: FAIL (round 1).** Three MUST-FIX, nine SHOULD-FIX. **Every figure in the revaluation re-derives from the named files — all thirty-one of them, by my own instruments, not the boss's script — and the pasted instrument's 86-line output re-runs byte-identical.** The three fails are all in sentences ABOUT the instruments: a pasted fetch output that the pasted command cannot have printed (law 4's amendment, on its face); a quotation attributed to the 4 Sep receipt that the 4 Sep receipt does not contain; and a "titles wider than" claim whose own quoted evidence contradicts it for one of the four codes. No price, tier, combined total, nonemployer × A45 product or dollar figure was typed anywhere in the target. The ruling is quoted verbatim and the revaluation discloses, on the face of A48, the one place it applies the ruling to a Census category wider than the ruling's words.

**Target:** `88885e6` (88885e6995be67594d2785f651d6d4ba00c6430c). Re-derived by this reviewer:

```
$ date -u                                                     # Tue Sep  8 14:19:11 UTC 2026
$ git rev-parse HEAD                                          # 10104782f00e37ac4589c1d645e83eef5f844932
$ git branch --show-current                                   # claude/b2c-mlp-ideas-gtm-76bs8z
$ git log --name-only --format='%h %ad %s' --date=iso 88885e6..HEAD
1010478 2026-09-08 14:18:09 +0000 gtm boss: convene round 1 on the G16 revaluation — target hash printed in lock.md, tree frozen
gtm/org/lock.md
$ git status --short                                          # (empty)
$ git show 88885e6 --stat --format='%H %ad %s' --date=iso     # 88885e6995be67594d2785f651d6d4ba00c6430c 2026-09-08 14:18:07 +0000 …
 gtm/raise/deck/gap-list-2026-09-04.md              |  42 +++-
 gtm/raise/deck/slide-04-market-size-v1.md          | 119 ++++++++--
 gtm/raise/model/assumptions.md                     |  11 +-
 .../2026-09-08-shift28-g16-nes-rederivation.md     | 244 +++++++++++++++++++++
 .../2026-09-08-shift28-g16-nes-rederivation.py     |  40 ++++
$ for f in …assumptions.md …slide-04-market-size-v1.md …gap-list-2026-09-04.md …rederivation.md …rederivation.py; do git show 88885e6:$f | sha256sum; done   # 14:19:19Z
094df556e54a3453602b74a53b2f2f208f2a4df04ebec2f62f66abc3a1acf9e9  gtm/raise/model/assumptions.md
ef956d56af3ff5e3457c5409c399e853775bba3a87673c0655d3c0b5cce5ec61  gtm/raise/deck/slide-04-market-size-v1.md
d51e79d86140c519caeb6c90dd59dca4842dc5b28b70a1dfcc20b2b365fd4643  gtm/raise/deck/gap-list-2026-09-04.md
8ffc0a319843ad3368a308152a635c0b3af35499fae180fa5f03d96b69e70851  gtm/raise/model/snapshots/2026-09-08-shift28-g16-nes-rederivation.md
33656cd617a00ffbf88765f5c384d74c7c4573fc503692e8f4ded3bf34264fb5  gtm/raise/model/snapshots/2026-09-08-shift28-g16-nes-rederivation.py
$ sha256sum <the same five paths in the worktree>            # the same five digests
```
The first sixteen hex of the four `.md` digests equal the four `lock.md` prints (`094df556e54a3453`, `ef956d56af3ff5e3`, `d51e79d86140c519`, `8ffc0a319843ad33`); `lock.md` prints no digest for the `.py`, so its `33656cd6…` is recorded here for the first time. Worktree equals target for all five. *Blind spot: `sha256sum` proves the bytes at target and HEAD are the same; it says nothing about whether `88885e6` is the commit the READY FOR REVIEW entry (14:14Z hand-written, `be5a428` at 14:12:48Z) meant — I take `lock.md`'s printed hash as the convening record, which is what the freeze rule says to do.*

**FREEZE HONOURED.** One commit after the target, `1010478`, touching `gtm/org/lock.md` only; `git status --short` empty at 14:19:11Z. The two commits between `eb96b08` and the target (`236403b`, `be5a428`) were not inspected beyond the brief's statement that they touch A47 and the inbox; the diffs below are `eb96b08..88885e6` per file and the A47 hunk they show is therefore out of scope and was not graded.

**Fan-out: one independent hostile-investor reviewer, gate time only.**

---

## RESULT IN ONE LINE

**Every number re-derives and the numbers are not why this fails: the receipt pastes a fetch output its pasted command cannot print, quotes the 4 Sep receipt for a phrase that lives only in A44's struck cell, and says four coarser NES rows have "titles wider than" the 2017 classes when the quoted title for `81219` is byte-identical to the class it would stand in for — three sentences about instruments, all correctable, none of them a figure.**

---

## THE FIGURES, RE-DERIVED — MY INSTRUMENTS, NOT THE BOSS'S

**Files.** The four named documents were hashed in the boss's scratchpad at 14:20:16Z and independently re-fetched from `www2.census.gov` into a fresh directory at 14:21:41Z–14:21:42Z (`curl -sS -o … -w "%{http_code} %{size_download}"`, session proxy, no key): `nonemp23us.zip` HTTP 200, 44,519 B, `420e37afbf7c05f3cd399316e59f21df9022efc0fcde8c965354c920f9329576`; `cbp23us.zip` 200, 750,265 B, `3f9018f807f1ffd7bcbb00690f9792573bc2bc6bb4cfab9df14ca7ab3eac0862`; `us_record_layout_2017.txt` 200, 4,265 B, `51e8d2915595e8aea1c27eec6e17eb0c0ca32885a8ae7a94f011179ad01f8626`; `nes_naics22.txt` 200, 19,280 B, `e79c488b7c7f99874134971b3dfa155c048e1f8e7ac293b4ec55dc51feff18e1`. `unzip -p` of the two zips: `2bf4e3e6cef01bcc22ea397f49977324d1c1b428ac4c8c2d9a0901e6965a2bec` (256,383 B) and `1d8dbbfa608a3299ca238db26d37a03383c02b3570101a8598b40725bf5ea54b` (3,801,025 B). All six equal the receipt's §1 table; the two zip digests and the two extracted digests equal the 4 Sep receipt's lines 21–25 in full (64 hex, not the elided form). *Blind spot: a byte-identical file on 4 Sep and 8 Sep proves the Bureau did not republish between the two fetches; it cannot prove the file is the Bureau's current 2023 vintage rather than a stale mirror — the directory listing at 14:25:55Z shows exactly one `nonemp23us.zip`, which is as far as this box can see.*

**The boss's instrument, re-run.** `cd <scratchpad>/census && python3 /home/user/personal-projects/gtm/raise/model/snapshots/2026-09-08-shift28-g16-nes-rederivation.py` at 14:21:00Z, exit 0, 86 lines; `diff` against the receipt's §2 block (extracted by `awk` between the pasted command line and the closing fence): **IDENTICAL**, both `bce5d2085d607384e4efd9e8285d46da56a02f95040d4fa7a10634b40e3ae3bc`. The script in the repo and the copy in the data directory hash the same (`33656cd6…`). The script types no figure (read: it lists six codes and eleven class keys, which are selectors, not results).

**My own re-derivation** — `awk -F, '{gsub(/"/,"")} …'` on the raw CSVs, and a nine-line Python that reads both files with `csv` and asserts the NES dictionary against the awk numbers (14:21:11Z, 14:25:40Z, 14:25:47Z). *My first pass used `-F'","'` and returned silence for every NES total — the separator left the `RCPTOT_SIZE` field carrying the rest of the row, so `$4=="001"` never matched. Silence read like nothing; it was the instrument. Re-run with quotes stripped, recorded here so the next reviewer does not trust an empty result.*

| Figure | My command (gist) | My result | Target's figure | Agree? |
|---|---|---|---|---|
| NES 812111 / 812112 / 812113 (LFO `-`, size `001`) | awk, `$3=="-" && $4=="001"` | 141,769 / 838,264 / 295,977 | same (A44, slide §4 table, receipt A) | YES |
| NES 722511 / 722513 / 722515 | same | 61,909 / 52,005 / 19,974 | same | YES |
| CBP 812111 / 812112 / 812113 (`lfo='-'`, `est`) | awk on `cbp23us.txt`, col 10 | 7,789 / 84,176 / 34,417 | same | YES |
| CBP 722511 / 722513 / 722515 | same | 258,626 / 270,088 / 85,140 | same | YES |
| Six-code employer total | awk sum | 740,236 | 740,236 | YES |
| Six-code nonemployer total | awk sum | 1,409,898 | 1,409,898 | YES |
| Personal-care three-code sum | awk sum | 1,276,010 | 1,276,010 | YES |
| NES `81211` row | awk | 1,276,010 (= the three-code sum) | "equals the file's own `81211` row" | YES |
| Food three-code sum | awk sum | 133,888 | 133,888 (A48) | YES |
| Ratios | Python from the awk numbers | 18.20 / 9.96 / 8.60 / 0.24 / 0.19 / 0.23; total 1.90 | 18.2× / 10.0× / 8.6× / 0.2× ×3; 1.9× | YES (one-decimal rounding) |
| 1,276,010 ÷ A41 681,795 | Python | 1.872 | "~1.87×" (A44); "more than the whole firm count" (slide §1) | YES |
| Coarser rows 458 / 7139 / 3118 / 8121 / 81219 | awk | 307,593 / 143,522 / 32,641 / 1,468,638 / 192,628 | same (receipt B, G20's 307,593) | YES |
| Section C — every LFO `-` `001` row under 812\|713\|722\|311\|448\|458 | awk, sorted, `diff` vs receipt C | 54 rows, **IDENTICAL** | 54 rows | YES |
| Six-digit rows among them | `awk 'length($1)==6'` | 722511 722513 722514 722515 812111 812112 812113 | "the matched six plus `722514`" | YES |
| Any NES row, any LFO/size, for 812199 / 713940 / 311811 / 448* | awk, `wc -l` | **0** | "no NES six-digit row exists" | YES — stronger than claimed (no row at any size or LFO) |
| The twelve unmatched of eighteen | 4 Sep receipt §2 rows 69–88 + CBP file (18 codes present, `lfo='-'`) | 812199, 713940, 311811, 448110/120/130/140/150/190/210/310/320 = 12; nine are 448* | "twelve of eighteen"; "the nine `448*`" | YES |
| 81211 under $25,000 (111+118+119) | awk cumulative | 731,057 = 57.3% | 57.3% | YES |
| 81211 under $10,000 (111+118) | awk | 307,481 = 24.1% | 24.1% | YES |
| Food under $25,000 | awk | 61.8 / 58.5 / 63.3% | "58–63%" | YES |
| Class-sum vs `001` | awk | +0 ×4 personal care; **+2** 722511 (61,907 vs 61,909); **+1** 722513 (52,004 vs 52,005); **+0** 722515 | "+2 / +1"; four personal-care exact | YES on the numbers — but 722515 (+0) is not in the sentence (SF-3) |
| `133` row for the three food codes, any LFO | awk `$4=="133"`, `wc -l` | 0 | "no `133` row exists" | YES |
| `ESTAB_F` non-blank anywhere in the file | awk | 0 rows | "no row, not a flagged row" | YES — the file never flags; it omits |
| LFO `S` share, 81211 | awk | 1,232,653 / 1,276,010 = 96.6% | 96.6% | YES |
| LFO `S` share, food | awk | 84.7 / 83.3 / 85.6% | "83–86%" | YES |
| C+Z+S+P = `-` for all seven | awk | exact ×7 | "sum exactly for all seven" | YES |
| `RCPTOT_N_F` on the rows read | awk `uniq -c` | `G` on the 7 `001` rows; **`N` on all 60 class rows** | receipt §5: "flag `G` on every row read" | **NO** (SF-2) |
| Layout: LFO codes | `cat -n us_record_layout_2017.txt` lines 22–26 | `-` all, `C`, `Z` (S-corps), `S` sole props, `P` partnerships | A48 lim 4: "C, Z, P … the remainder after S" | YES |
| Layout: RCPTOT_SIZE bands | lines 30–41 | 111 <$5k · 118 $5–9,999 · 119 $10–24,999 · 121 $25–49,999 · 122 $50–99,999 · … 133 $1M–2.49M | receipt §5 quote | YES, verbatim |
| `positioning.md:162–164` | `sed -n '158,168p'` | `Target: **solo owner-operators of local, visual small businesses** — salons, gyms/studios, restaurants/cafes, boutiques — with no marketing hire and low or no budget.` (162–164; §6 heading at 160) | slide §4: *"solo owner-operators of local, visual small businesses … with no marketing hire"* | YES on the fragments; the `…` elides the four examples unbracketed (SF-4) |
| The ruling's words | `sed -n '1,70p' gtm/org/inbox.md` | *"G16 — one person business does count as a customer!"* (13:29Z) | A44, slide §4, G16 closure quote it | YES, verbatim |
| The "case against" quote | `grep -n "least money"` gap list | line 334 "…operation has the least money…" | slide §4 *"a one-person operation has the least money"* | YES |
| Prices / tiers typed in the added lines | `git diff … \| grep '^+' \| grep -E '\$ ?[0-9]\|tier\|OS\b\|price'` | only `$25,000` / `$10,000` (Census receipts bands) and the words "price"/"ARPU" in sentences refusing to compute one | none should exist | YES — none |

---

## MUST-FIX

### MF-1 — Receipt §1: two pasted outputs the pasted commands cannot have printed (law 4, amended 2026-09-07: *"paste only what you ran, re-runnable verbatim"*; the check: *"fails the artifact if the output differs"*).

**Where:** `gtm/raise/model/snapshots/2026-09-08-shift28-g16-nes-rederivation.md` lines 40–47 (§1's second and third command blocks). **Cell for a split:** receipt §1 only — the hashes those blocks report re-derive (table above), so A48's `51e8d291…` and `e79c488b…` citations survive; what fails is the paste.

**What:** the pasted command for the layout is `curl -sS -o us_record_layout_2017.txt -w "HTTP %{http_code} bytes %{size_download}\n" <url>`; the pasted output beneath it is
```
2026-09-08T14:09:43Z
HTTP 200 bytes 4265 us_record_layout_2017.txt
```
That command has no `date` in it and its `-w` string ends in `\n` before any filename. **Run exactly as pasted at 14:25:55Z it printed `HTTP 200 bytes 4265` and nothing else.** The same shape recurs for `nes_naics22.txt` (line 46–47). Whatever the boss actually ran (a loop with `date -u` and an `echo $f`, presumably, like the first block) is not what is pasted. This is precisely the sentence the 7 Sep amendment was written for, and it sits in the section every other file cites for the shift's provenance.

**Instrument:** the command copied from the receipt and run verbatim; `diff` by eye against the pasted lines. *Blind spot: I cannot see what the boss typed; I can only see that the paste is not its own output.*

### MF-2 — Receipt §6 quotes the 4 Sep receipt for a phrase it does not contain (rule 1; law 4 — a quotation is a claim).

**Where:** `…2026-09-08-shift28-g16-nes-rederivation.md` lines 242–244: *"The 4 Sep receipt is NOT edited. It is a RAW CAPTURE dated 2026-09-04 and still reads \*"an unmade Phin ruling"\*"*. **Cell for a split:** receipt §6, last bullet. (The READY FOR REVIEW entry at inbox line 45 carries the same misquote; the inbox is outside the target and outside the freeze's permitted list, so it is named here, not graded.)

**What:** `grep -c "unmade" gtm/raise/model/snapshots/2026-09-04-census-establishment-counts.md` → **0** (14:26:02Z). The phrase *"an unmade Phin ruling"* lives in exactly one place in the tree outside the inbox and this receipt: the struck half of A44 (`grep -rn "unmade Phin ruling" gtm --include=*.md`; at `eb96b08` A44 carried it once). What the 4 Sep receipt actually says (its lines 138–141): *"Whether a booth-renting stylist is "a shop" therefore moves the count by more than any other single decision in the model."* — a true sentence before and after the ruling. The receipt attributed its own row's old wording to the capture, and then put a question to the gate about editing the capture on the strength of words the capture never said.

**Instrument:** `grep -c`, `grep -rn`, `git show eb96b08:…assumptions.md | grep -c`. *Blind spot: a fixed-string grep cannot see a paraphrase of "unmade"; I read §4 of the 4 Sep receipt in full (lines 116–141) and found none.*

### MF-3 — "The coarser rows … carry 2022-NAICS titles wider than, or differently cut from, the 2017 classes" — the quoted evidence contradicts it for `81219`, and three files say it three ways (law 2; law 4; rule 3).

**Where, four sites:** A48 limitation (1) (`assumptions.md:457`); receipt §4 lines 204–214; G20 "State today" (`gap-list:648–652`); slide §7's nonemployer bullet (`slide-04:379–384`, which drops the hedge and says only *"titles are wider than the 2017 classes"*). **Cell for a split:** A48 limitation (1); receipt §4 second paragraph; G20's third sentence; slide §7's parenthetical — one sentence in each.

**What:** `grep -E "^(81219|7139|3118|458)\b" nes_naics22.txt` (14:25:47Z) returns `81219	Other Personal Care Services`. The 4 Sep receipt's CBP row 72 titles `812199` **`Other Personal Care Services`** — the same string. The code list does not list `812191` or `812199` at all (`grep -c` → 0; the list carries only 23 six-digit codes in the whole economy), so the instrument the sentence names — *"grep of the code list"* — cannot show `81219` is wider than `812199`. What would have shown it is one file over and was not run: CBP 2023, `lfo='-'`, has **`812191` = 2,481** beside **`812199` = 31,863**, so in the 2017 structure `81219` contains two classes and the NES row (192,628) is a superset; that is a re-derivable sentence and it is not the one written. For `458` the title is a product list — clothing, accessories, shoe, jewelry — co-extensive with what 2017's `448` subsector contained (4481 ×6, 4482, 4483 ×2 = the nine codes in scope), so "wider" does not follow from the title either; "differently cut" rests entirely on the concordance the receipt says was not fetched, and should say so rather than lean on the titles. `3118` (*Bakeries and Tortilla Manufacturing* vs *Retail Bakeries*) and `7139` (*Other Amusement and Recreation Industries* vs *Fitness and Recreational Sports Centers*) do re-derive from titles alone. Two of four, not four of four — and the slide's version has no hedge at all.

**Direction of error, stated so the reader can weigh it:** conservative. Treating a row as unmatched cannot inflate the base; the worst case is that the org undercounts what the ruling let in. That is why this is a wording fail and not a figure fail — but a sentence whose named instrument returns the opposite for one of its four cases is a claim without a receipt, and the gate fails on that.

**Instrument:** `grep` on `nes_naics22.txt`; `awk` on `cbp23us.txt` for `81219|812191|812199|7139|713940|3118|311811`. *Blind spot: NAICS 2022 structure is asserted here from the CBP 2017-vintage file and the 2022 code list's own hierarchy, not from a fetched concordance; I did not fetch one either, so "458 ≡ nine 448* classes" remains exactly as open as G20 says.*

---

## SHOULD-FIX

**SF-1 — A48 limitation (2) / receipt §1: "the `us-record-layout/` listing shows `.docx` for earlier years and nothing later" — the listing was not pasted and the description is wrong in one detail.** `curl` of the listing at 14:25:55Z: seven `.docx` (1997–2014), **`United States File 2015.txt`**, `us_record_layout_2017.txt`. "Nothing later than 2017" re-derives; ".docx for earlier years" does not (2015 is plain text). I fetched the 2015 file (HTTP 200, 5,233 B, `d5342f74e451ebe91cd0b2c438e03dbd31df7a36075a6b05bfc6d4296752c477`): its `LFO` codes and all eleven `RCPTOT_SIZE` bands are **the same strings and dollar boundaries as 2017** — corroboration across two layout vintages that the receipt could have had for one more `curl`. A claim of absence should paste the listing (the binding constraint: *"a claim of absence carries its command"*). Lands: A48 lim (2), receipt §1's prose under the table. *Blind spot: I listed `us-record-layout/`, `record-layouts/`, `technical-documentation/`, `methodology/`, `references/`, `code-lists/`, `datasets/2023/` and `datasets/2023/historical-datasets/` (no readme or layout in either dataset directory); I did not open `combined-record-layout/` or the four geography sub-directories, nor the Census API's variable metadata, any of which could carry a 2023-dated field definition.*

**SF-2 — Receipt §5: "flag `G` on every row read" is false for 60 of the 67 rows section D read (7 codes × 8 classes + the four `133` rows, plus 7 totals).** `RCPTOT_N_F` is `G` on the seven `001` rows and `N` ("not available or not comparable") on every class row (`awk … | uniq -c`, 14:25:40Z); `ESTAB_F` is blank on every row of the file (`awk` count of non-blank `ESTAB_F` → 0). The sentence that the +2/+1 residual "sits there or in noise infusion" should name which rows carry which flag. Lands: receipt §5 first paragraph.

**SF-3 — A48 limitation (2) and receipt §5 enumerate six of seven codes.** "Exactly for the four personal-care rows and 2 and 1 short for `722511` / `722513`" leaves `722515` (+0, exact) unstated; five of seven are exact, and the sentence as written lets a reader infer all three food rows are short. Lands: A48 lim (2); receipt §5.

**SF-4 — Slide 4 §4's quotation of `positioning.md:162–164` elides with an unbracketed `…`, and the sentence around it states an equation as a fact.** The elided text is *"— salons, gyms/studios, restaurants/cafes, boutiques —"*; this org's own G19 gate (MF-2) failed an unbracketed ellipsis. And *"until 8 September the market slide excluded by construction the customer the positioning describes"* equates "solo owner-operators" with the NES nonemployer category; the positioning's own examples (restaurants/cafes, gyms) are 0.2× nonemployer in the table eight lines above it. The population the slide left out overlaps the positioning's target; it is not the target. Grade the equation ARGUED or narrow the sentence to the solo subset. Lands: slide §4, the "What the ruling does to this slide" paragraph.

**SF-5 — Limitation (4) states one direction of the ruling→category mismatch; the converse is live and unstated.** A48 and slide §4 say a nonemployer is not necessarily one person (partnerships, corporations — right per the layout's `P`, `C`, `Z`). The other direction: a one-person business that pays its owner a wage (an S-corp owner-employee) is an **employer** in CBP/SUSB with one employee, and is already inside A42 (`<20`). So "one-person business" is neither a subset nor a superset of "nonemployer", and A44's unqualified *"These businesses are IN the base"* should carry the pointer to limitation (4) that A48 and the slide carry. *Attempt behind this: the layout's LFO codes read; no CBP employment-size cut was run to size the one-employee employer population, so its magnitude is unstated here too.* Lands: A48 lim (4); A44's "These businesses are IN the base" sentence; slide §4 last paragraph.

**SF-6 — Rule 2's letter, two sites:** A48 limitation (2) opens *"Checked arithmetically:"* and slide §4 says *"checked arithmetically the same way"*. Both are followed by what was checked and with what, which is the rule's spirit; the rule removes the word. Lands: A48 lim (2); slide §4 "case against" paragraph.

**SF-7 — Receipt §2's pasted command runs only from a directory that holds the script AND both `.txt` files, and the receipt calls that directory "this directory" (`snapshots/`), where the data is not** (`ls gtm/raise/model/snapshots | grep -c "nonemp23us.txt\|cbp23us.txt"` → 0). It re-ran identically from the data directory with the repo path (above); the paste should show the `cd`/copy step so the next reviewer does not have to guess it. Lands: receipt §2 preamble.

**SF-8 — Gap-list header: "The list is now 18 entries" does not re-derive from the file's own headings.** `grep -c '^#### G[0-9]+\.'` → 16 (G1, G3–G12, G16–G20) plus G13–G15 as Tier-4 bullets = 19 IDs live; the trail reads 16 (G16 opened) → 17 (G18) → no line for G19 → 18 (G20). Either G19 was never counted or closed G16 is excluded; say which. Lands: gap-list line 20–24.

**SF-9 — `assumptions.md:23` (the AGENT-REPORTED legend paragraph, unchanged this shift) still calls A46 *"the market count that hangs off it"*.** Not a figure disagreement; a label — after this shift A46 is the floor everywhere else it is named. Lands: legend line 23 (outside the three rows; found by `grep -n "serviceable"`).

---

## WHAT PASSED, WITH THE INSTRUMENT

- **The freeze**, by `git log 88885e6..HEAD` (one `lock.md` commit), `git status --short` (empty), and five digests equal at target and HEAD.
- **Every figure**, by the table above — thirty-one re-derived by `awk`/Python on the raw files, all agree; the boss's instrument re-runs byte-identical (`bce5d208…`); section C re-derives row-for-row (54 rows, `diff` silent). *Blind spot named: my first awk pass returned silence on a separator bug and I would have graded "cannot re-derive" had I trusted it.*
- **The coverage claim (a claim of absence), by a wider instrument than the receipt's:** the receipt prints six-prefix total rows; I also searched any LFO and any size class for `812199`, `713940`, `311811` and `448*` — zero rows. The absence holds at every cut the file has.
- **The file provenance**, by independent re-fetch of all four documents (same four digests, same two extracted digests) and by full-64-hex comparison against the 4 Sep receipt's table.
- **No price, tier, combined total, nonemployer × A45 product or dollar figure**, by `grep` on the added lines of the three amended files (`\$ ?[0-9]`, `tier`, `OS\b`, `price`, `ARPU`): the only dollar strings are the Census receipts bands `$25,000` / `$10,000`; every "price"/"ARPU" hit is a sentence refusing to compute one. The slide's new *"Six-code total"* row is a same-program subtotal (employer beside nonemployer, not summed).
- **Law 4 on figures and grades across the three files**, by reading each site: 1,409,898 / 1,276,010 / 740,236 / 133,888 / 96.6% / 57.3% / 24.1% / 58–63% / 83–86% carry the same value at A44, A48, slide §1, §2 step 3b, §4, G16's closure and G20; the grade pair *SOURCED (counts) / RULED (inclusion)* is the same at A48, slide 3b, slide §1's bracket and G16's closure; the slide quotes rows by ID (`[A44, A48]`, `[A46]`) at every new site. The one law-4 wording drift found is inside MF-3 (the slide's unhedged "wider than").
- **The ruling quoted verbatim** at A44, slide §4 and the G16 closure (`sed -n '1,70p' inbox.md`), and the revaluation's scope: the ruling licenses inclusion; the target computes no revised serviceable count, states A48 unmultiplied, keeps A46's figure unchanged (its inputs A42 and A45 did not move — `git diff` shows no change to either row), and discloses on the face of A48 that it applies the ruling to the Census category rather than to "one person" (limitation 4; SF-5 asks for the other direction).
- **The receipt's first breath, CONFIDENTIAL line and STATUS line** present; **no self-pass** — every new draft says IN-GATE and names the persona.
- **The blind-spot rule (limitation carries its attempt):** A48's four limitations each name an attempt (section C; the listing curl; law 6/G1; the LFO read), and the one thing not attempted — the concordance — is filed as an OPEN ITEM (G20), not a limitation, which is the rule applied correctly.
- **The tree sweep for live pre-ruling sentences outside the target**, by `grep -rn -i -E "excludes every business with no employees|no employees|employer-only|employer firms only|booth-rent|nonemployer|one-person business|one person business|unmade Phin ruling|\bG16\b|is a floor|a floor" gtm --include=*.md` excluding `inbox.md`, `lock.md`, `ops-log.md`, `reviews/`, the two census receipts and the target (14:21:53Z), then `grep -rn -E "245,0[0-9]{2}|serviceable market|serviceable count|SAM\b"` and `grep -rn -i "employer"` over the same set (14:26:54Z, 14:27:20Z). **No live claim-bearing sentence outside the target states the pre-ruling position without a strike or pointer.** The hits are: `2026-09-05-smm-landscape-44pct-citation-audit.md:157,179–184` — a dated receipt saying shift 20 opened G16 and that its base is 556,857 employer firms (history, past tense, and 556,857 is still A42); `gap-list:123` *"A NEW GAP THIS WORK OPENED — see G16 below"* inside a dated for-the-record block, pointing at an entry now closed; `position-v2-the-hire.md:1016` *"a one-person business reads in five…"* (copy, not a count). Nothing restates ~245,000 or "serviceable market" outside the three target files and `assumptions.md:23` (SF-9). *Blind spot: fixed-string grep on single lines cannot see a paraphrase ("firms with staff", "payroll businesses") or a pair split across a wrap; I did not run an adjacent-line test, and I did not read slides 5, 6 or `skeleton.md` in full — only their grep hits, of which there were none for "employer" or "nonemployer".*

---

## THE 4 SEP RECEIPT — THE QUESTION THE READY FOR REVIEW ENTRY PUT TO THIS GATE

**A frozen capture stays as written; no pointer belongs inside it, and after MF-2 the case for one is weaker than the entry thought.** Three reasons. (1) The file is a RAW CAPTURE (its own STATUS line) and shift 24's rule — a primary capture is not retro-edited to match a later grade — was written for exactly this shape; that it is the boss's capture rather than Phin's does not change what a capture is for, which is to be the bytes that were true on the day. (2) It contains no sentence the ruling made false: it never says "unmade" (MF-2); its §4 says the booth-renting question *moves the count more than any other single decision*, which is as true on 8 September as on the 4th — the ruling proves it. (3) The pointer already exists where a reader arrives from: A44 names the ruling and the new receipt, and the new receipt's §1 table joins the two files by hash. If the chief wants discoverability from the old file, the only shape consistent with the freeze rule is an **append-only, dated block below the capture's last line, never inside its sections** — and I have not checked that wording, so it is a suggestion, not a draft.

---

## NOT CHECKED BY THIS VERDICT — the attempt behind each

- **The NAICS 2017→2022 concordance** — not fetched by the boss, not fetched by me; G20's open item is as open as it says. Everything I say about `458` vs the nine `448*` codes is from the two code lists' own hierarchies and the CBP file, not from the Bureau's crosswalk.
- **A 2023-specific NES field definition** — I listed eight Census directories (named in SF-1) and found none; I did not open `combined-record-layout/`, the geography reference directories, or the Census API metadata. The cross-vintage blind spot the receipt names is therefore still the right one, now corroborated by a second vintage (2015) rather than closed.
- **SUSB / A42 / A45** — not re-derived; the target says neither moved and `git diff eb96b08..88885e6` shows neither row touched, which is all this verdict relies on.
- **The unchanged parts of slide 4** (the seven MUST-FIX of 2026-09-05) — out of scope by the brief; not re-read.
- **The inbox below line 70, `236403b`, `be5a428`, and the ops-log** — not read.
- **The brief's "law 6: no willingness-to-pay claim without customers"** — the doctrine's law 6 is *YOU ARE NOT YOUR CUSTOMER* (check: positioning claims cite interview evidence or carry UNTESTED); I graded the target's law-6 citations against both readings and the target's use (a receipts distribution licenses nothing about what anyone would pay) survives either.
- **Whether `88885e6` is the commit the 14:14Z entry intended** — taken from `lock.md`, as the freeze rule directs.

---

## FINAL RE-DERIVATION

`git rev-parse HEAD` → `10104782f00e37ac4589c1d645e83eef5f844932`; `git status --short` empty before this file was written; the five target digests unchanged from the block at the top (checked at 14:19:19Z and again by `sha256sum` on the worktree in the same call). This file is the only path this reviewer wrote. Not committed; not pushed; no other file touched.

Verdict written 2026-09-08, one hostile-investor reviewer, gate time only.
