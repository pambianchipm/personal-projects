# Receipt — the 2017→2022 NAICS concordance, fetched and hashed: `458` against the nine `448*` classes, and a line per slide-4 class (shift 29)

CONFIDENTIAL — Lane A raise artifact (law 8). Internal-audit class.
STATUS: RECEIPT (not an artifact; the document and instrument behind the
shift-29 closure of gap-list G20's cost-to-close item (i) and the re-draft of
`assumptions.md` A48 limitation (1)'s concordance sentence). Written by the GTM
boss, shift 29, 2026-09-08. **Law 7: SPLIT at gate round 2 (round 1 FAIL 3 MF /
4 SF at `d76cc4e`; round 2 FAIL 2 MF / 4 SF at `8a66501`, the last under AS-1 —
`gtm/org/reviews/2026-09-08-shift29-naics-concordance-hostile-investor-r{1,2}.md`):
the finding, the workbook, both instruments, every paste and A48 limitation (1)
ship; one reason-clause in §3 below, one in G20 and one clause of slide 4 §6's
pointer are PULLED under banners. Round-2 SF-1, SF-2, SF-4 drafted on the
shipping text after the verdict, by the boss, not re-gated; SF-3 (the second
instrument's unprinted column-order assumption and filter asymmetry) noted
here, the instrument unchanged. The split awaits the chief's confirmation.**

**First breath:** Player 2 is an AI marketing employee for small businesses.
This file records one fetch the chief approved (inbox 2026-09-08T14:59Z, item
iii: *"One fetch, hashed, pasted under its command; it settles `458` against the
nine `448*` classes and closes G20's cost-to-close item (i). It does NOT reopen
A48's figure"*), the instrument run on it, and what it settles.

## 0. WHAT WAS OPEN

A48 limitation (1) and G20 (both shift 28): NES 2023 is coded on 2022 NAICS
and publishes `458` (307,593 nonemployers) where the CBP file, on 2017 NAICS,
has the nine apparel classes `448110`–`448320`; *"whether 2022's `458` is
co-extensive with it was not established — the 2017→2022 concordance was not
fetched."* G20's cost to close, item (i): *"one fetch — the Bureau's 2017→2022
concordance — and a line per class saying matched / superset / no match."*

## 1. THE FETCH — pasted as run

The proxy is the session's; no key, no login. Two workbooks were fetched in one
loop: the 2017→2022 file is THE document; the 2022→2017 file was fetched in the
same loop as a cross-check and is NOT retained in the tree (its hash is below;
its seventeen `448*`/`458*` rows, parsed the same way, are the transposition of
the seventeen printed in §2 — as sets, by the second instrument in §2a).

```
$ date -u +%Y-%m-%dT%H:%M:%SZ; for u in https://www.census.gov/naics/concordances/2017_to_2022_NAICS.xlsx https://www.census.gov/naics/concordances/2022_to_2017_NAICS.xlsx; do f=$(basename $u); date -u +%Y-%m-%dT%H:%M:%SZ; curl -sS -m 60 -o $f -w "HTTP %{http_code} bytes %{size_download} %{content_type} $f\n" "$u"; sha256sum $f; done
2026-09-08T15:13:13Z
HTTP 200 bytes 59656 application/vnd.openxmlformats-officedocument.spreadsheetml.sheet 2017_to_2022_NAICS.xlsx
4662cc7ed9e7f3fb8a968e9504a7d06e448f5b65a349996a5627439df193eb30  2017_to_2022_NAICS.xlsx
2026-09-08T15:13:14Z
HTTP 200 bytes 61577 application/vnd.openxmlformats-officedocument.spreadsheetml.sheet 2022_to_2017_NAICS.xlsx
76ed2d5bc8cd3443dc86f0c3225b83e6d187f3fc47d4c5696c911a3234f1716f  2022_to_2017_NAICS.xlsx
```

The NES 2023 US file and the 2022 code list, re-fetched into the same scratch
directory for the instrument, byte-identical to the shift-28 receipt's hashes:

```
$ date -u +%Y-%m-%dT%H:%M:%SZ && for u in https://www2.census.gov/programs-surveys/nonemployer-statistics/datasets/2023/historical-datasets/nonemp23us.zip https://www2.census.gov/programs-surveys/nonemployer-statistics/technical-documentation/code-lists/nes_naics22.txt; do f=$(basename $u); curl -sS -o $f -w "HTTP %{http_code} bytes %{size_download} $f\n" "$u"; sha256sum $f; done; unzip -o -q nonemp23us.zip; sha256sum nonemp23us.txt
2026-09-08T15:14:32Z
HTTP 200 bytes 44519 nonemp23us.zip
420e37afbf7c05f3cd399316e59f21df9022efc0fcde8c965354c920f9329576  nonemp23us.zip
HTTP 200 bytes 19280 nes_naics22.txt
e79c488b7c7f99874134971b3dfa155c048e1f8e7ac293b4ec55dc51feff18e1  nes_naics22.txt
2bf4e3e6cef01bcc22ea397f49977324d1c1b428ac4c8c2d9a0901e6965a2bec  nonemp23us.txt
```

**Retained in the tree:** `2017_to_2022_NAICS.xlsx` (59,656 B, `4662cc7e…`) beside
this receipt, and the instrument `2026-09-08-shift29-naics-concordance.py`. The
zips and the code list are not retained (as at shift 28); their hashes are the
join.

## 2. THE INSTRUMENT AND ITS OUTPUT — pasted as run

The workbook is read with the standard library (`zipfile` + `xml`; no
`openpyxl` on this box): the shared-strings table and `sheet1.xml`, cell text
only. **Blind spot, in the same breath:** the Bureau's note in the sheet's
second row says bold marks a 2022 code drawing on more than one 2017 industry
and italics mark a 2017 industry that split; **the instrument reads neither
mark** — it derives "more than one source" by counting rows, and it cannot see
what fraction of a 2017 industry moved (the concordance states a "piece", not
its size). NES row presence is presence in the file, not comparability.

```
$ pwd; date -u +%Y-%m-%dT%H:%M:%SZ; sha256sum 2017_to_2022_NAICS.xlsx nonemp23us.txt nes_naics22.txt concordance.py
/tmp/claude-0/-home-user-personal-projects/7f8b3fa6-00a8-5509-8087-d07cfe98ffa5/scratchpad/naics
2026-09-08T15:15:28Z
4662cc7ed9e7f3fb8a968e9504a7d06e448f5b65a349996a5627439df193eb30  2017_to_2022_NAICS.xlsx
2bf4e3e6cef01bcc22ea397f49977324d1c1b428ac4c8c2d9a0901e6965a2bec  nonemp23us.txt
e79c488b7c7f99874134971b3dfa155c048e1f8e7ac293b4ec55dc51feff18e1  nes_naics22.txt
160c79b4dd84c584dda5dccbad90a52c8f7f20cc7e04b9e86adad590187d4a65  concordance.py
$ python3 concordance.py
header row: '2017 NAICS Code' | '2022 NAICS Code'; data rows: 1150; distinct 2017 codes: 1057; distinct 2022 codes: 1012

## per class: 2017 code -> 2022 code | the finest NES 2023 row at or above that code | 2022 six-digit codes under that row (from the concordance) | 2017 industries feeding it | verdict
812111 -> 812111  NES row 812111   141,769  2022 codes under it 1  2017 sources 1  MATCHED
812112 -> 812112  NES row 812112   838,264  2022 codes under it 1  2017 sources 1  MATCHED
812113 -> 812113  NES row 812113   295,977  2022 codes under it 1  2017 sources 1  MATCHED
812199 -> 812199  NES row 81219    192,628  2022 codes under it 2  2017 sources 2 (812191, 812199)  SUPERSET at 5 digits
713940 -> 713940  NES row 7139     143,522  2022 codes under it 6  2017 sources 6 (713910, 713920, 713930, 713940, 713950, 713990)  SUPERSET at 4 digits
722511 -> 722511  NES row 722511    61,909  2022 codes under it 1  2017 sources 1  MATCHED
722513 -> 722513  NES row 722513    52,005  2022 codes under it 1  2017 sources 1  MATCHED
722515 -> 722515  NES row 722515    19,974  2022 codes under it 1  2017 sources 1  MATCHED
311811 -> 311811  NES row 3118      32,641  2022 codes under it 6  2017 sources 6 (311811, 311812, 311813, 311821, 311824, 311830)  SUPERSET at 4 digits
448110 -> 458110  NES row 45811    241,235  2022 codes under it 1  2017 sources 8 (448110, 448120, 448130, 448140, 448150, 448190, 454110, 454390)  SUPERSET at 5 digits
448120 -> 458110  NES row 45811    241,235  2022 codes under it 1  2017 sources 8 (448110, 448120, 448130, 448140, 448150, 448190, 454110, 454390)  SUPERSET at 5 digits
448130 -> 458110  NES row 45811    241,235  2022 codes under it 1  2017 sources 8 (448110, 448120, 448130, 448140, 448150, 448190, 454110, 454390)  SUPERSET at 5 digits
448140 -> 458110  NES row 45811    241,235  2022 codes under it 1  2017 sources 8 (448110, 448120, 448130, 448140, 448150, 448190, 454110, 454390)  SUPERSET at 5 digits
448150 -> 458110  NES row 45811    241,235  2022 codes under it 1  2017 sources 8 (448110, 448120, 448130, 448140, 448150, 448190, 454110, 454390)  SUPERSET at 5 digits
448190 -> 458110  NES row 45811    241,235  2022 codes under it 1  2017 sources 8 (448110, 448120, 448130, 448140, 448150, 448190, 454110, 454390)  SUPERSET at 5 digits
448210 -> 458210  NES row 45821      8,897  2022 codes under it 1  2017 sources 3 (448210, 454110, 454390)  SUPERSET at 5 digits
448310 -> 458310  NES row 45831     55,123  2022 codes under it 1  2017 sources 3 (448310, 454110, 454390)  SUPERSET at 5 digits
448320 -> 458320  NES row 45832      2,338  2022 codes under it 1  2017 sources 3 (448320, 454110, 454390)  SUPERSET at 5 digits

## every 2017 industry the concordance maps into a 2022 458* code (the composition of 458)
  458110  <-  448110  "Men's Clothing Stores"
  458110  <-  448120  "Women's Clothing Stores"
  458110  <-  448130  "Children's and Infants' Clothing Stores"
  458110  <-  448140  'Family Clothing Stores'
  458110  <-  448150  'Clothing Accessories Stores'
  458110  <-  448190  'Other Clothing Stores'
  458110  <-  454110  'Electronic Shopping and Mail-Order Houses'
  458110  <-  454390  'Other Direct Selling Establishments'
  458210  <-  448210  'Shoe Stores'
  458210  <-  454110  'Electronic Shopping and Mail-Order Houses'
  458210  <-  454390  'Other Direct Selling Establishments'
  458310  <-  448310  'Jewelry Stores'
  458310  <-  454110  'Electronic Shopping and Mail-Order Houses'
  458310  <-  454390  'Other Direct Selling Establishments'
  458320  <-  448320  'Luggage and Leather Goods Stores'
  458320  <-  454110  'Electronic Shopping and Mail-Order Houses'
  458320  <-  454390  'Other Direct Selling Establishments'

## NES 2023 rows under 458 (LFO=-, total): {'458': 307593, '4581': 241235, '45811': 241235, '4582': 8897, '45821': 8897, '4583': 57461, '45831': 55123, '45832': 2338}
## 2022 code list (nes_naics22.txt) entries under 458:
  458	Clothing, Clothing Accessories, Shoe, and Jewelry Retailers
  4581	Clothing and Clothing Accessories Retailers
  45811	Clothing and Clothing Accessories Retailers
  4582	Shoe Retailers
  45821	Shoe Retailers
  4583	Jewelry, Luggage, and Leather Goods Retailers
  45831	Jewelry Retailers
  45832	Luggage and Leather Goods Retailers
```

*(The instrument was run from the scratch directory holding the four files; the
`pwd` line shows it.)* The retained copies in `snapshots/`, hashed there — the
workbook and the instrument carry the same digests as the scratch copies above:

```
$ date -u +%Y-%m-%dT%H:%M:%SZ; sha256sum 2026-09-08-2017_to_2022_NAICS.xlsx 2026-09-08-shift29-naics-concordance.py
2026-09-08T15:35:13Z
4662cc7ed9e7f3fb8a968e9504a7d06e448f5b65a349996a5627439df193eb30  2026-09-08-2017_to_2022_NAICS.xlsx
160c79b4dd84c584dda5dccbad90a52c8f7f20cc7e04b9e86adad590187d4a65  2026-09-08-shift29-naics-concordance.py
```

### 2a. The second instrument, after round 1 — the split rows and the transposition, pasted as run

`2026-09-08-shift29-naics-pieces.py` (retained beside this receipt), run beside
both workbooks in the scratch directory (SF-1: the row counts behind "pieces";
SF-4a: the 2022→2017 workbook's `458*` rows diffed against the forward file as
sets, not read by eye). Cell text only; the marks are not read.

```
$ date -u +%Y-%m-%dT%H:%M:%SZ; sha256sum pieces.py 2017_to_2022_NAICS.xlsx 2022_to_2017_NAICS.xlsx; python3 pieces.py
2026-09-08T15:45:28Z
8049b4c6fea69f4170fcc000c31cd8e879a7def5824d88835819cda0be1eaf47  pieces.py
4662cc7ed9e7f3fb8a968e9504a7d06e448f5b65a349996a5627439df193eb30  2017_to_2022_NAICS.xlsx
76ed2d5bc8cd3443dc86f0c3225b83e6d187f3fc47d4c5696c911a3234f1716f  2022_to_2017_NAICS.xlsx
2017->2022 data rows 1150
454110: 42 rows in the 2017->2022 sheet, mapping to 42 distinct 2022 codes; its 2017-title cell on the four 458* rows: ['Electronic Shopping and Mail-Order Houses']
   454110 as a 2017 source of 458*: ['458110', '458210', '458310', '458320']
454390: 39 rows in the 2017->2022 sheet, mapping to 39 distinct 2022 codes; its 2017-title cell on the four 458* rows: ['Other Direct Selling Establishments']
   454390 as a 2017 source of 458*: ['458110', '458210', '458310', '458320']
448* rows: [('448110', 1), ('448120', 1), ('448130', 1), ('448140', 1), ('448150', 1), ('448190', 1), ('448210', 1), ('448310', 1), ('448320', 1)]
transposition check, 458* rows: forward pairs 17 backward pairs 17 sets equal -> True
```

## 3. WHAT IT SETTLES

**`458` is a SUPERSET of the nine `448*` classes, at every level NES publishes.**
*(Re-drafted after round 1 — MF-1, MF-2, SF-1, SF-2 land in this section.)*
The concordance maps the six clothing classes `448110`–`448190` to `458110`,
`448210` to `458210`, `448310` to `458310`, `448320` to `458320` — and maps two
other 2017 industries into every one of those four 2022 codes as well:
`454110` *Electronic Shopping and Mail-Order Houses* and `454390` *Other Direct
Selling Establishments* (seventeen rows, printed above). "Pieces" is the sheet's own word for what a
split industry contributes (its note, row 2: *"2022 NAICS codes in bold
indicate pieces of the 2022 industry came from more than one 2017 NAICS
industry; 2017 NAICS codes in italics indicate the 2017 industry split to two or
more 2022 NAICS industries.)"* — and row 3, column B's header, *"2017 NAICS Title
(and specific piece of the 2017 industry that is contained in the 2022
industry)"*, round-2 SF-1), and
the split is visible in row counts the second instrument prints (§2a): `454110`
has 42 rows to 42 distinct 2022 codes and `454390` 39 to 39, where every `448*`
class has one; the 2017-title cell on their `458*` rows carries the bare
industry title, not a description of the piece — so the sheet names the
industry, and the size of what it contributes is stated nowhere in it. NES 2023 publishes
`45811`, `45821`, `45831`, `45832` and no six-digit code under `458` (the code
list paste above: eight entries, none of six digits); the concordance's 2022
column holds exactly one six-digit code under each of those four (the
instrument's `2022 codes under it 1`, computed from the concordance, not from
the code list — round-1 MF-1), so the five-digit NES row is that code's row — 241,235 / 8,897 /
55,123 / 2,338, summing to `458`'s 307,593 — and each draws on those two
non-store industries as well as its `448*` class. **So no NES row is
co-extensive with any `448*` class or with the nine together; the apparel
nonemployer count the org can state is a superset that includes pieces of
those two industries, whose share the concordance does not give.** The direction: nothing
subtracts (no `448*` class splits — one row each) and two industries add, so
`458` is AT LEAST the nine apparel classes; by how much, the concordance does
not size (round-1 SF-2 — "overstates" would assume the added pieces are
non-empty in NES 2023, which no file here shows).

**A line per class (G20's ask), from the instrument's per-class block:**

| Class | 2022 code | Finest NES 2023 row | Verdict |
|---|---|---|---|
| `812111` `812112` `812113` | same | six-digit, present | **MATCHED** (the A48 six) |
| `722511` `722513` `722515` | same | six-digit, present | **MATCHED** (the A48 six) |
| `812199` | same | `81219` (192,628) | SUPERSET at 5 digits — with `812191` |
| `713940` | same | `7139` (143,522) | SUPERSET at 4 digits — with five other `7139*` classes |
| `311811` | same | `3118` (32,641) | SUPERSET at 4 digits — with five other `3118*` classes |
| `448110`–`448190` (six) | `458110` | `45811` (241,235) | SUPERSET at 5 digits — with each other AND pieces of `454110`, `454390` |
| `448210` | `458210` | `45821` (8,897) | SUPERSET at 5 digits — with pieces of `454110`, `454390` |
| `448310` | `458310` | `45831` (55,123) | SUPERSET at 5 digits — with pieces of `454110`, `454390` |
| `448320` | `458320` | `45832` (2,338) | SUPERSET at 5 digits — with pieces of `454110`, `454390` |

Six matched, twelve superset, none "no row" — the twelve unmatched classes of
A48 limitation (1) stay unmatched. The reason differs by class (round-1 MF-2):
for `812199`, `713940`, `311811` it is NES's publication depth alone; **⚠ PULLED AT GATE ROUND 2 (2026-09-08, shift 29, the concordance finding; `reviews/2026-09-08-shift29-naics-concordance-hostile-investor-r2.md`, target `8a66501`) — the text between the ⟦PULLED TEXT⟧ marks does not ship and nothing may cite it.** *(Round-2 MF-1: the same `2022 codes under it 1` the criterion two lines down relies on; the table row above carries the six correctly.)* **⟦PULLED TEXT — begins⟧** for the six
clothing classes in `458110` it is both — they share one 2022 code with each
other AND with the two non-store industries; **⟦PULLED TEXT — ends⟧** for `448210`, `448310`, `448320` it
is the 2022 revision alone — each is the only `448*` class in its 2022 code, its
five-digit NES row holds that code alone, and the superset is with the two
non-store industries only.
The 2017-structure supersets for `812199`, `713940`, `311811` (shift-28 receipt
§4) are re-derived here from the concordance rather than the CBP file: the same
three verdicts.

**What this does NOT do (the chief's ruling, item iii):** A48's 1,409,898 is
unchanged — it is the six matched codes, and all six are one-to-one in the
concordance (printed). No moved class becomes a row. Nothing is added,
multiplied, or priced.

## 4. WHAT THIS RECEIPT DOES NOT ESTABLISH

- **The size of the `454110` / `454390` pieces inside each `458*` code** — the
  concordance names the industries and marks them split; it states no
  establishment count and no description of the piece for these two. A bound on the
  apparel share of `458` would need the 2022 Economic Census or a bridge table;
  neither was sought (attempt: none).
- **Bold/italic marks in the workbook** — not read; multi-source derived by row
  count (§2).
- **Whether the 2022→2017 workbook is the exact transposition beyond `458`** —
  its seventeen `458*` rows equal the forward file's as sets (§2a); the other
  1,133 rows were not compared.
- **NES's own statement of which NAICS vintage `nonemp23us` uses** — carried from
  the 4 Sep receipt (its `458` row is the evidence); the NES methodology page was
  not opened.
