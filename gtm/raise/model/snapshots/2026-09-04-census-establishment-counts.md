# Snapshot — US Census establishment / firm counts for the positioning's named segments

CONFIDENTIAL — Lane A raise artifact (law 8).
STATUS: RAW CAPTURE (not an artifact; the receipt behind slide 4 and behind
`assumptions.md` rows A40–A45). Captured by the GTM boss, shift 20, 2026-09-04.

**First breath:** Player 2 is an AI marketing employee for small businesses.
This file is the raw, re-checkable receipt for the only establishment counts
this org may quote.

## 0. WHAT WAS FETCHED, AND WHAT COULD NOT BE

**The Census API now requires a registered key** (`api.census.gov` answered
HTTP 302 → `missing_key.html` on an unauthenticated data request, 18:44Z).
Registering one is a new account and is barred without Phin's click, so
**every figure below comes from the Bureau's static bulk files**, which need
no key. This is a better receipt anyway: the bytes are hashed and retained.

| File | URL | Fetched (UTC) | HTTP | Bytes | SHA-256 |
|---|---|---|---|---|---|
| `cbp23us.zip` | `www2.census.gov/programs-surveys/cbp/datasets/2023/cbp23us.zip` | 2026-09-04T18:44:14Z | 200 | 750,265 | `3f9018f807f1ffd7bcbb00690f9792573bc2bc6bb4cfab9df14ca7ab3eac0862` |
| → `cbp23us.txt` (extracted) | — | — | — | 3,801,025 | `1d8dbbfa608a3299ca238db26d37a03383c02b3570101a8598b40725bf5ea54b` |
| `us_state_6digitnaics_2022.txt` (SUSB) | `www2.census.gov/programs-surveys/susb/tables/2022/us_state_6digitnaics_2022.txt` | 2026-09-04T18:47:15Z | 200 | 56,000,447 | `6f7b2f2b14cbad9dbfeb31d3bfc9f729368a0e971727de4eda88c9f83f77a513` |
| `nonemp23us.zip` (NES) | `www2.census.gov/programs-surveys/nonemployer-statistics/datasets/2023/historical-datasets/nonemp23us.zip` | 2026-09-04T18:49:03Z | 200 | 44,519 | `420e37afbf7c05f3cd399316e59f21df9022efc0fcde8c965354c920f9329576` |
| → `nonemp23us.txt` (extracted) | — | — | — | 256,383 | `2bf4e3e6cef01bcc22ea397f49977324d1c1b428ac4c8c2d9a0901e6965a2bec` |
| `us_layout_2015.txt` (CBP record layout) | `www2.census.gov/programs-surveys/rhfs/cbp/technical%20documentation/2015_record_layouts/us_layout_2015.txt` | 2026-09-04T18:45Z | 200 | 9,284 | `c009d92658091d27e69ae958d61fe4c9128b11d359729b539dc345ecd5e5f9c3` |

**VINTAGES.** CBP: **2023** — confirmed latest by probing 2024 (HTTP 404) and
2023 (200) in the same directory. SUSB: **2022** — confirmed latest by the
`.../susb/tables/` directory listing, whose last year directory is `2022`.
NES: **2023**.

## 1. HOW THE FIELD NAMES WERE READ — and the blind spot in that instrument

The `cbp23us.txt` header names fields `est`, `n<5`, `n5_9`, `n10_19`, `lfo`.
**The Bureau's record-layout page for CBP renders client-side and its 2023
layout is not published as text** — the only plain-text US layouts it links
are 2014 and 2015. So the definitions below are read from the **2015** layout
(hashed above), which is a *different vintage of the same series*, and the
2015 layout names the smallest class `N1_4` where the 2023 file writes `n<5`:

- `LFO` — Legal Form of Organization; **`'-'` = All Establishments**
- `EST` — Total Number of Establishments
- `N5_9` / `N10_19` — Number of Establishments: 5-9 / 10-19 Employee Size Class

**Because that is a cross-vintage read, it was checked against the 2023 file
itself rather than trusted:** for every `lfo='-'` row where all nine
size-class fields parse as integers (**757 rows**), `n<5 + n5_9 + n10_19 +
n20_49 + n50_99 + n100_249 + n250_499 + n500_999 + n1000` equals `est`
exactly — **757 checked, 0 mismatches.** The same check was run on NES: for
`812112`, the nine `RCPTOT_SIZE` class rows sum to `838,264`, which is the
`RCPTOT_SIZE='001'` row exactly, confirming `001` = total.

**The blind spot in that check, named beside its result:** an arithmetic
identity proves these fields *partition the total by some class variable*. It
does **not** prove the class boundaries are the employee counts the 2015
layout names. A vintage that silently re-cut the classes would still sum.
`ESTAB` = "Number of establishments" is independently confirmed from
`api.census.gov/data/2023/cbp/variables.json` (metadata is key-free); the
`EMPSZES` and `LFO` value lists in that metadata are **empty objects**, so
the code meanings have no 2023-vintage confirmation.

## 2. CBP 2023 — employer establishments, US, `lfo='-'` (NAICS 2017)

`<20` = `n<5 + n5_9 + n10_19`.

| NAICS | Description (from `naics2017.txt`, same source dir) | Establishments | of which `<20` employees |
|---|---|---:|---:|
| 812111 | Barber Shops | 7,789 | 7,619 |
| 812112 | Beauty Salons | 84,176 | 81,277 |
| 812113 | Nail Salons | 34,417 | 33,894 |
| 812199 | Other Personal Care Services | 31,863 | 29,769 |
| **—** | **personal care subtotal** | **158,245** | **152,559** |
| 713940 | Fitness and Recreational Sports Centers | 41,556 | 32,612 |
| 722511 | Full-Service Restaurants | 258,626 | 166,832 |
| 722513 | Limited-Service Restaurants | 270,088 | 175,918 |
| 722515 | Snack and Nonalcoholic Beverage Bars | 85,140 | 68,102 |
| **—** | **food subtotal** | **613,854** | **410,852** |
| 311811 | Retail Bakeries | 9,219 | 7,967 |
| 448110 | Men's Clothing Stores | 6,582 | 6,187 |
| 448120 | Women's Clothing Stores | 26,279 | 24,437 |
| 448130 | Children's and Infants' Clothing Stores | 3,666 | 3,487 |
| 448140 | Family Clothing Stores | 27,986 | 15,625 |
| 448150 | Clothing Accessories Stores | 7,488 | 7,030 |
| 448190 | Other Clothing Stores | 11,286 | 9,586 |
| 448210 | Shoe Stores | 18,177 | 16,085 |
| 448310 | Jewelry Stores | 19,897 | 19,396 |
| 448320 | Luggage and Leather Goods Stores | 801 | 746 |
| **—** | **apparel/accessories subtotal** | **122,162** | **102,579** |
| **—** | **GRAND TOTAL** | **945,036** | **706,569** |

## 3. SUSB 2022 — firms vs establishments, US (`STATE='00'`)

SUSB counts **firms** (enterprises) as well as establishments; CBP counts only
establishments. `ENTRSIZE` legend read from the file's own `ENTRSIZEDSCR`
column: `01`=Total, `02`=<5, `03`=5-9, `26`=10-19, `33`=**<20**, `34`=20-99,
`35`=100-499, `36`=500+, `37`=<500.

| Group | Firms | Establishments | Estab/firm | Share of locations in multi-location firms |
|---|---:|---:|---:|---:|
| personal care | 139,894 | 154,065 | 1.10 | 9.2% |
| fitness | 33,232 | 40,786 | 1.23 | 18.5% |
| food | 447,374 | 601,317 | 1.34 | 25.6% |
| bakery | 8,628 | 8,979 | 1.04 | 3.9% |
| **apparel/accessories** | **52,667** | **120,935** | **2.30** | **56.5%** |
| **ALL SEGMENTS** | **681,795** | **926,082** | **1.36** | **26.4%** |

**Firms with `<20` employees, all segments: 556,857.** (Establishments
belonging to those firms: 561,954.)

*Both columns are SUSB 2022, so the ratio is within one program and one year.*
*Cross-program consistency note: SUSB 2022 establishments (926,082) and CBP*
*2023 establishments (945,036) differ by 2.0% — different years and different*
*programs, so this is a sanity check, not a reconciliation.*

## 4. NES 2023 — the nonemployer exclusion, sized

CBP and SUSB cover **employer** businesses only. Nonemployer Statistics covers
businesses with no paid employees. **NES 2023 uses 2022 NAICS** (clothing is
`458*`, not `448*`) and publishes most of our segments only at 3-4 digits, so a
full parallel model is not available. Six of our codes match exactly across
both programs, and only those are compared:

| NAICS | CBP 2023 employer estab | NES 2023 nonemployers | Ratio |
|---|---:|---:|---:|
| 812111 Barber Shops | 7,789 | 141,769 | 18.2× |
| 812112 Beauty Salons | 84,176 | 838,264 | 10.0× |
| 812113 Nail Salons | 34,417 | 295,977 | 8.6× |
| 722511 Full-Service Restaurants | 258,626 | 61,909 | 0.2× |
| 722513 Limited-Service Restaurants | 270,088 | 52,005 | 0.2× |
| 722515 Snack/Nonalcoholic Beverage Bars | 85,140 | 19,974 | 0.2× |
| **Six-code total** | **740,236** | **1,409,898** | **1.9×** |

Available only at coarser levels, recorded but not used: NES `458` (clothing
and accessories retailers) 307,593 · `7139` 143,522 · `3118` 32,641 ·
`8121` 1,468,638 · `81219` 192,628.

**The finding is the SPREAD, not the total.** Nonemployers outnumber employer
locations 8.6–18.2× in personal care and are 0.2× in food service. Whether a
booth-renting stylist is "a shop" therefore moves the count by more than any
other single decision in the model.

## 5. WHAT IS NOT IN THIS FILE

- **US only.** Both programs are US. No international count was attempted.
- **No social-presence figure.** Neither program asks whether a business has a
  social account. Nothing here sources the "has a social presence" fraction.
- **No willingness-to-pay figure of any kind.**
- **No 2023 SUSB and no 2024 CBP** — not published as of this fetch.
