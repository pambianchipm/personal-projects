# Receipt — G16 revaluation: the nonemployer figures re-derived from the named documents (shift 28)

CONFIDENTIAL — Lane A raise artifact (law 8). Internal-audit class.
STATUS: RECEIPT (not an artifact; the instrument behind the shift-28 revaluation
of `assumptions.md` A44 / A46 / A48, slide 4 §1, §2, §4, §6, §7 and gap-list
G16 / G20). Written by the GTM boss, shift 28, 2026-09-08. **Law 7: the
revaluation it supports is SPLIT at gate round 2 (r1 FAIL 3 MF / 9 SF at
`88885e6`; r2 FAIL 2 MF / 10 SF at `5eafcb6`, the last under AS-1); this receipt
and its instrument ship entire under both verdicts' proposed cut; round-2 SF-1,
SF-4, SF-5, SF-10 drafted here after the verdict, by the boss, not re-gated.**

**First breath:** Player 2 is an AI marketing employee for small businesses.
This file is the re-runnable record of every nonemployer figure the revaluation
states, re-derived this shift from the same bytes the 4 Sep receipt
(`2026-09-04-census-establishment-counts.md`) hashed — not re-typed from it.

## 0. THE RULING THIS RECEIPT SERVES

Inbox 2026-09-08T13:29Z, Phin via the chief: *"G16 — one person business does
count as a customer!"* Grade RULED, dated. The chief's instruction in the same
entry: apply it to every row that keyed on G16 as a revaluation under law 7,
one commit, each row naming that entry as its source.

## 1. WHAT WAS FETCHED THIS SHIFT, AND WHAT IT HASHED TO

Pasted as run (law 4's amendment). The proxy is the session's; no key, no login.

```
$ for u in https://www2.census.gov/programs-surveys/nonemployer-statistics/datasets/2023/historical-datasets/nonemp23us.zip \
           https://www2.census.gov/programs-surveys/cbp/datasets/2023/cbp23us.zip; do
    f=$(basename $u); echo "== $f"; date -u +%Y-%m-%dT%H:%M:%SZ
    curl -sS -o $f -w "HTTP %{http_code} bytes %{size_download}\n" "$u"; sha256sum $f; done
== nonemp23us.zip
2026-09-08T14:06:33Z
HTTP 200 bytes 44519
420e37afbf7c05f3cd399316e59f21df9022efc0fcde8c965354c920f9329576  nonemp23us.zip
== cbp23us.zip
2026-09-08T14:06:34Z
HTTP 200 bytes 750265
3f9018f807f1ffd7bcbb00690f9792573bc2bc6bb4cfab9df14ca7ab3eac0862  cbp23us.zip
$ unzip -o -q nonemp23us.zip && unzip -o -q cbp23us.zip
$ for u in https://www2.census.gov/programs-surveys/nonemployer-statistics/technical-documentation/record-layouts/us-record-layout/us_record_layout_2017.txt \
           https://www2.census.gov/programs-surveys/nonemployer-statistics/technical-documentation/code-lists/nes_naics22.txt; do
    f=$(basename $u); date -u +%Y-%m-%dT%H:%M:%SZ
    curl -sS -o $f -w "HTTP %{http_code} bytes %{size_download} $f\n" "$u"; sha256sum $f; done
2026-09-08T14:09:43Z
HTTP 200 bytes 4265 us_record_layout_2017.txt
51e8d2915595e8aea1c27eec6e17eb0c0ca32885a8ae7a94f011179ad01f8626  us_record_layout_2017.txt
2026-09-08T14:09:44Z
HTTP 200 bytes 19280 nes_naics22.txt
e79c488b7c7f99874134971b3dfa155c048e1f8e7ac293b4ec55dc51feff18e1  nes_naics22.txt
$ curl -sS https://www2.census.gov/programs-surveys/nonemployer-statistics/technical-documentation/record-layouts/us-record-layout/ | grep -o 'href="[^"]*"' | grep -i "file\|layout"     # 2026-09-08T14:32:55Z
href="/programs-surveys/nonemployer-statistics/technical-documentation/record-layouts/"
href="United%20States%20File%201997-2001.docx"
href="United%20States%20File%202002-2003.docx"
href="United%20States%20File%202004-2006.docx"
href="United%20States%20File%202007.docx"
href="United%20States%20File%202008.docx"
href="United%20States%20File%202009-2013.docx"
href="United%20States%20File%202014.docx"
href="United%20States%20File%202015.txt"
href="us_record_layout_2017.txt"
$ date -u +%Y-%m-%dT%H:%M:%SZ; curl -sS -o us_layout_2015.txt -w "HTTP %{http_code} bytes %{size_download}\n" "https://www2.census.gov/programs-surveys/nonemployer-statistics/technical-documentation/record-layouts/us-record-layout/United%20States%20File%202015.txt"; sha256sum us_layout_2015.txt
2026-09-08T14:32:56Z
HTTP 200 bytes 5233
d5342f74e451ebe91cd0b2c438e03dbd31df7a36075a6b05bfc6d4296752c477  us_layout_2015.txt
$ grep -n '"111"\|"119"\|"1411"\|"S" - Sole' us_layout_2015.txt
25:                                  "S" - Sole Proprietorships
31:                                         "111" - less than $5,000 
33:                                         "119" - $10,000 - $24,999
41:                                         "1411" - greater than $5,000,000 
$ sha256sum nonemp23us.zip nonemp23us.txt cbp23us.zip cbp23us.txt us_record_layout_2017.txt nes_naics22.txt
420e37afbf7c05f3cd399316e59f21df9022efc0fcde8c965354c920f9329576  nonemp23us.zip
2bf4e3e6cef01bcc22ea397f49977324d1c1b428ac4c8c2d9a0901e6965a2bec  nonemp23us.txt
3f9018f807f1ffd7bcbb00690f9792573bc2bc6bb4cfab9df14ca7ab3eac0862  cbp23us.zip
1d8dbbfa608a3299ca238db26d37a03383c02b3570101a8598b40725bf5ea54b  cbp23us.txt
51e8d2915595e8aea1c27eec6e17eb0c0ca32885a8ae7a94f011179ad01f8626  us_record_layout_2017.txt
e79c488b7c7f99874134971b3dfa155c048e1f8e7ac293b4ec55dc51feff18e1  nes_naics22.txt
$ wc -c nonemp23us.zip nonemp23us.txt cbp23us.zip cbp23us.txt us_record_layout_2017.txt nes_naics22.txt
  44519 nonemp23us.zip
 256383 nonemp23us.txt
 750265 cbp23us.zip
3801025 cbp23us.txt
   4265 us_record_layout_2017.txt
  19280 nes_naics22.txt
4875737 total
```

| File | 4 Sep receipt's SHA-256 | This shift's SHA-256 | Same bytes? |
|---|---|---|---|
| `nonemp23us.zip` | `420e37af…9329576` | `420e37af…9329576` | **YES — byte-identical, 44,519 B** |
| → `nonemp23us.txt` | `2bf4e3e6…65bec` | `2bf4e3e6…65bec` | **YES — 256,383 B** |
| `cbp23us.zip` | `3f9018f8…c0862` | `3f9018f8…c0862` | **YES — 750,265 B** |
| → `cbp23us.txt` | `1d8dbbfa…a54b` | `1d8dbbfa…a54b` | **YES — 3,801,025 B** |
| `us_record_layout_2017.txt` | — (not fetched 4 Sep) | `51e8d291…8626` | NEW, 4,265 B |
| `nes_naics22.txt` | — (not fetched 4 Sep) | `e79c488b…18e1` | NEW, 19,280 B |
| `United States File 2015.txt` (NES US layout, 2015; saved locally as `us_layout_2015.txt` — the same local name the 4 Sep receipt used for the CBP 2015 layout, `c009d926…`, 9,284 B, a different file — round-2 SF-4) | — | `d5342f74…c477` | NEW, 5,233 B — fetched after round 1 (SF-1) |

**So every figure below is computed from the same bytes the 4 Sep receipt
hashed.** The new files are the NES US record layouts — the listing above, pasted (round-1 SF-1: the first draft described it as *".docx for earlier years"*, and 2015 is a `.txt`), shows `.docx` for 1997–2014, a `.txt` for 2015, `us_record_layout_2017.txt`, and nothing later; the 2015 layout's `LFO` and `RCPTOT_SIZE` blocks are byte-identical to the 2017 one's (round-2 SF-1 — the first draft claimed this on a four-line `grep`; the instrument that shows it, run 2026-09-08T14:54:45Z:
```
$ diff <(sed -n 20,41p us_layout_2015.txt) <(sed -n 20,41p us_record_layout_2017.txt); echo "exit $?"
exit 0
$ diff us_layout_2015.txt us_record_layout_2017.txt | grep -c '"D"\|"N"'; diff us_layout_2015.txt us_record_layout_2017.txt | grep '"D"\|"N"' | cut -c1-90
5
<                                   "D" - Number of establishments 
<                                   "D" - Receipts data are withheld to 
> 				  "N" - Not available or not comparable.
<                                   "D" - Receipts data are withheld to 
> 				  "N" - Not available or not comparable.
```
so the two vintages agree on the codes §4–§5 read for legal form and receipts size, and **disagree on the flag codes** — 2015 defines `D` where 2017 defines `N`, and §5 reads `N`, a code the 2015 vintage does not carry) — and the 2022-NAICS code list NES 2023 uses. *(Round-1 MF-1: the first draft of this section pasted the two layout/code-list fetches under a command that could not have printed them — a `-w` string without the filename and no `date`; the loop above is what ran, with its three output lines each.)*

## 2. THE INSTRUMENT, AND ITS OUTPUT AS RUN

Instrument: `2026-09-08-shift28-g16-nes-rederivation.py` (this directory). It
types no figure; every number below is read from the two `.txt` files, which it
expects in its working directory. **The data is not in `snapshots/`** (round-1
SF-7); to re-run: fetch and unzip per §1 into any directory, copy the script
there (`cp gtm/raise/model/snapshots/2026-09-08-shift28-g16-nes-rederivation.py .`),
and run it from that directory as below.

```
$ date -u +%Y-%m-%dT%H:%M:%SZ; python3 2026-09-08-shift28-g16-nes-rederivation.py
2026-09-08T14:13:29Z
## A. six matched codes — NES 2023 nonemployer establishments (LFO=-, RCPTOT_SIZE=001) vs CBP 2023 employer establishments (lfo=-)
812111  employer     7,789  nonemployer   141,769  ratio 18.2x
812112  employer    84,176  nonemployer   838,264  ratio 10.0x
812113  employer    34,417  nonemployer   295,977  ratio 8.6x
722511  employer   258,626  nonemployer    61,909  ratio 0.2x
722513  employer   270,088  nonemployer    52,005  ratio 0.2x
722515  employer    85,140  nonemployer    19,974  ratio 0.2x
six-code totals: employer 740,236  nonemployer 1,409,898  ratio 1.9x
personal care, three codes: 1,276,010  |  NES 81211 row: 1,276,010
## B. coarser NES rows the 4 Sep receipt recorded but did not use
458  307,593
7139  143,522
3118  32,641
8121  1,468,638
81219  192,628
## C. every NES 2023 code (LFO=-, total row) under the prefixes of the 18 CBP classes: 812, 713, 722, 311, 448, 458
  311        70,338
  3111        2,832
  31111       2,832
  3112          462
  3113        3,615
  3114        4,721
  3115        1,484
  3116        3,025
  31161       3,025
  3117        2,712
  31171       2,712
  3118       32,641
  3119       18,846
  458       307,593
  4581      241,235
  45811     241,235
  4582        8,897
  45821       8,897
  4583       57,461
  45831      55,123
  45832       2,338
  713       164,247
  7131        4,743
  7132       15,982
  7139      143,522
  722       558,917
  7223      381,492
  7224       28,799
  72241      28,799
  7225      148,626
  72251     148,626
  722511     61,909
  722513     52,005
  722514     14,738
  722515     19,974
  812     2,422,475
  8121    1,468,638
  81211   1,276,010
  812111    141,769
  812112    838,264
  812113    295,977
  81219     192,628
  8122       15,463
  81221      12,934
  81222       2,529
  8123       25,090
  81231       9,188
  81232      14,855
  81233       1,047
  8129      913,284
  81291     146,763
  81292       5,318
  81293       5,260
  81299     755,943
## D. receipts-size classes (RCPTOT_SIZE, LFO=-) — class rows present, their sum vs the 001 row, cumulative shares at the class boundaries the 2017 layout names
812111: total 141,769; classes present ['111', '118', '119', '121', '122', '123', '125', '131', '133']; class sum 141,769 (+0 vs total); thru 111: 19,258 (13.6%); thru 118: 35,251 (24.9%); thru 119: 79,760 (56.3%); thru 121: 115,460 (81.4%); thru 122: 136,047 (96.0%)
812112: total 838,264; classes present ['111', '118', '119', '121', '122', '123', '125', '131', '133']; class sum 838,264 (+0 vs total); thru 111: 111,904 (13.3%); thru 118: 216,445 (25.8%); thru 119: 501,621 (59.8%); thru 121: 690,018 (82.3%); thru 122: 803,106 (95.8%)
812113: total 295,977; classes present ['111', '118', '119', '121', '122', '123', '125', '131', '133']; class sum 295,977 (+0 vs total); thru 111: 25,786 (8.7%); thru 118: 55,785 (18.8%); thru 119: 149,676 (50.6%); thru 121: 247,261 (83.5%); thru 122: 278,939 (94.2%)
722511: total 61,909; classes present ['111', '118', '119', '121', '122', '123', '125', '131']; class sum 61,907 (+2 vs total); thru 111: 13,436 (21.7%); thru 118: 22,640 (36.6%); thru 119: 38,236 (61.8%); thru 121: 45,491 (73.5%); thru 122: 50,932 (82.3%)
722513: total 52,005; classes present ['111', '118', '119', '121', '122', '123', '125', '131']; class sum 52,004 (+1 vs total); thru 111: 12,498 (24.0%); thru 118: 19,988 (38.4%); thru 119: 30,410 (58.5%); thru 121: 36,378 (70.0%); thru 122: 41,820 (80.4%)
722515: total 19,974; classes present ['111', '118', '119', '121', '122', '123', '125', '131']; class sum 19,974 (+0 vs total); thru 111: 4,814 (24.1%); thru 118: 7,997 (40.0%); thru 119: 12,638 (63.3%); thru 121: 15,257 (76.4%); thru 122: 17,362 (86.9%)
81211: total 1,276,010; classes present ['111', '118', '119', '121', '122', '123', '125', '131', '133']; class sum 1,276,010 (+0 vs total); thru 111: 156,948 (12.3%); thru 118: 307,481 (24.1%); thru 119: 731,057 (57.3%); thru 121: 1,052,739 (82.5%); thru 122: 1,218,092 (95.5%)
## E. legal form of organization (RCPTOT_SIZE=001) — the S (sole proprietorship) share
812111: total 141,769; C+Z+S+P 141,769; S 135,314 (95.4%)
812112: total 838,264; C+Z+S+P 838,264; S 811,835 (96.8%)
812113: total 295,977; C+Z+S+P 295,977; S 285,504 (96.5%)
722511: total 61,909; C+Z+S+P 61,909; S 52,434 (84.7%)
722513: total 52,005; C+Z+S+P 52,005; S 43,337 (83.3%)
722515: total 19,974; C+Z+S+P 19,974; S 17,097 (85.6%)
81211: total 1,276,010; C+Z+S+P 1,276,010; S 1,232,653 (96.6%)
```

## 3. WHAT SECTION A–B ESTABLISH — the 4 Sep figures reproduce

Every figure in the 4 Sep receipt's §4 table reproduces from the bytes: the six
nonemployer counts, the six employer counts, the six ratios, the six-code totals
(740,236 · 1,409,898 · 1.9×) and the three-code personal-care sum 1,276,010 —
which is also the file's own `81211` row, so the sum and the Bureau's aggregate
agree. The five coarser rows the receipt *"recorded but did not use"*
reproduce (section B).

## 4. WHAT SECTION C ESTABLISHES — the coverage claim, with its command

**The claim of absence the revaluation makes:** *no NES 2023 six-digit row
exists for twelve of the eighteen CBP classes slide 4 counts.* Section C is the
command that establishes it — every NES total row under the six prefixes,
printed. The six-digit rows present under those prefixes are exactly
`722511 722513 722514 722515 812111 812112 812113`; of those, `722514`
(cafeterias) is not a slide-4 class, and the other six are the matched six.
**Nothing at six digits exists for `812199`, `713940`, `311811` or any `448*`
class.**

**Why the coarser rows are not used as matches, with the attempt behind it
(re-drafted after round 1, MF-3 — the first draft said their titles were
*"wider than, or differently cut from"* the 2017 classes on the strength of the
code list, and for `81219` the code list's title is the same string as CBP's
`812199`; the sentence below rests on the CBP file instead).** `nes_naics22.txt`
titles them *3118 Bakeries and Tortilla Manufacturing* · *458 Clothing, Clothing
Accessories, Shoe, and Jewelry Retailers* · *7139 Other Amusement and Recreation
Industries* · *81219 Other Personal Care Services*. What the CBP 2023 file (2017
NAICS, `lfo='-'`) contains under the same prefixes, pasted as run:

```
$ cd <the directory holding cbp23us.txt>    # 2026-09-08T14:34:55Z
$ python3 -c "import csv;r=[x for x in csv.DictReader(open(\"cbp23us.txt\",newline=\"\",encoding=\"latin-1\")) if x[\"lfo\"].strip()==\"-\"];[print(p,[(x[\"naics\"].strip(),int(x[\"est\"])) for x in r if x[\"naics\"].strip().startswith(p) and len(x[\"naics\"].strip())==6 and x[\"naics\"].strip().isdigit()]) for p in (\"81219\",\"7139\",\"3118\",\"448\")]"
81219 [('812191', 2481), ('812199', 31863)]
7139 [('713910', 10076), ('713920', 348), ('713930', 3739), ('713940', 41556), ('713950', 3154), ('713990', 22786)]
3118 [('311811', 9219), ('311812', 2842), ('311813', 237), ('311821', 461), ('311824', 390), ('311830', 428)]
448 [('448110', 6582), ('448120', 26279), ('448130', 3666), ('448140', 27986), ('448150', 7488), ('448190', 11286), ('448210', 18177), ('448310', 19897), ('448320', 801)]
```

So by the 2017 structure the NES rows `81219`, `7139` and `3118` are each
**supersets** of the one slide-4 class they contain (`812199` beside `812191`;
`713940` beside five others; `311811` beside five others), and none can stand in
for its class. `448` in the CBP file is exactly the nine slide-4 apparel classes;
whether 2022's `458` is co-extensive with 2017's `448` **was not established** —
**the 2017→2022 concordance was NOT fetched this shift** — so `458` is an OPEN
ITEM, recorded in gap-list **G20**. *Blind spot: the superset finding reads the
2017 hierarchy from the CBP file and the 2022 titles from the code list; neither
is a concordance, and a 2022 revision that moved a six-digit class between
four-digit parents would be invisible to both.* The 4 Sep receipt's judgement
stands: six codes match exactly and only those are compared.

## 5. WHAT SECTION D–E ESTABLISH — two cuts the ruling makes load-bearing, and the blind spot in the read

Section D reads the file's `RCPTOT_SIZE` classes through the **2017** layout
(`"111" - less than $5,000 · "118" - $5,000–$9,999 · "119" - $10,000–$24,999 ·
"121" - $25,000–$49,999 · "122" - $50,000–$99,999 …`, layout lines as fetched)
against a **2023** file — the same cross-vintage shape as the 4 Sep receipt's
CBP read, with the same class-sum test (the 2015 layout, fetched after round 1,
carries the same bands — §1): for each of the seven codes the class rows present
were summed against the `001` row — **exact for five** (`812111`, `812112`,
`812113`, `81211`, `722515`) and **2 and 1 short** for `722511` and `722513`
(the `133` class row is absent from the file for the three food codes — no row,
not a flagged row). Flags on the 67 rows read, as the file carries them
(round-1 SF-2 — the first draft said *"flag `G` on every row read"*, which is
false for 60 of them): `RCPTOT_N_F` is `G` (low noise) on the seven `001` rows
and `N` (*"not available or not comparable"*) on all 60 class rows; `ESTAB_F` is
blank on every row of the file (non-blank count → 0). Where the 2- and
1-establishment residuals sit is therefore not stated by any flag; the absent
`133` row is the candidate the file shows (round-2 SF-10). **The blind spot, in
the same breath:** the arithmetic proves the class rows partition the total by
*some* receipts variable; it does not prove the 2023 boundaries are the dollar
bands the 2017 layout names. Section E reads `LFO` codes through the same
layout (`"S" - Sole Proprietorships`); the four legal-form rows sum to the total
exactly for all seven codes.

**What these two cuts are for, and what they are not:** the ruling brings in a
population; these describe it from the same document, on the face of A48, so
that the *case against* the gap list recorded (*"a one-person operation has the
least money"*) is carried as a sourced limitation rather than dropped. **They
license no conclusion about willingness to pay** — that is a customer question
(law 6), and no price is typed anywhere in the revaluation.

## 6. WHAT THIS RECEIPT DID NOT DO

- **No SUSB re-fetch.** A46's arithmetic is over rows A42 and A45 and neither
  moved; `us_state_6digitnaics_2022.txt` (56 MB) was not re-pulled.
- **No 2017→2022 NAICS concordance** — see §4; G20.
- **No combined employer + nonemployer total is computed**, because CBP counts
  establishments, SUSB counts firms, NES counts nonemployer establishments,
  and the six-code slice is not the eighteen-class base. A48 is a count of
  businesses the ruling brought in; it is not added to A46 and not multiplied
  by A45 (see the rows).
- **The 4 Sep receipt is NOT edited.** It is a RAW CAPTURE dated 2026-09-04.
  *(Round-1 MF-2: the first draft of this bullet quoted it as reading "an unmade
  Phin ruling" — a phrase that file never contained; `grep -c unmade` on it → 0.
  Those were A44's own words, struck this shift.)* What the capture says, its
  lines 139–141 (round-2 SF-5 — the first draft said 138–141; 138 is the
  preceding sentence): *"Whether a booth-renting stylist is "a shop" therefore moves the
  count by more than any other single decision in the model"* — true before and
  after the ruling. The gate's answer, adopted: a frozen capture stays as
  written; the ruling's pointer lives in A44, not on the capture.
