# Receipt — the Bureau's two glossaries, fetched and hashed, and the under-5 bound (shift 29)

CONFIDENTIAL — Lane A raise artifact (law 8). Internal-audit class.
STATUS: RECEIPT (not an artifact; the documents and instrument behind the
shift-29 re-draft of `assumptions.md` A48 limitation (4) — the part PULLED at
shift 28's round 2 — and the two pulled pieces of slide 4 §4). Written by the
GTM boss, shift 29, 2026-09-08. Law 7: the re-draft it supports is gated on its
own; this receipt's status follows that gate's verdict.

**First breath:** Player 2 is an AI marketing employee for small businesses.
This file is the re-runnable record of two documents nobody in this org had
hashed before this shift (the round-2 reviewer grepped them) — the Census Bureau's County Business
Patterns (CBP) glossary and its Nonemployer Statistics (NES) glossary — and of
one bound computed from the already-hashed CBP 2023 US file.

## 0. THE RULING THIS RECEIPT SERVES

Inbox 2026-09-08T14:59Z, the chief, item (ii): *"the pulled limitation gets its
own re-draft and its own gate on a later shift, one cell. Its documents are the
two Bureau glossaries, FETCHED AND HASHED into the tree before the draft is
written (nobody has hashed them; the round-2 reviewer grepped them). Quantifier
a bound or absent."* The round-2 reviewer's fetch (verdict `…-r2.md`, MF-2,
14:44:53Z / 14:44:55Z) was `curl` + `grep`, not hashed, and the verdict says so
(its NOT CHECKED list). What was read this shift, and with what: the glossary
body of each page by `cat -n` — cbp 238–329, nes 242–288 — and the rest of each
extracted text scrolled past as navigation and footer. What is below was done before one
word of the re-draft was written; the commit order on the branch is the record.

## 1. THE TWO GLOSSARIES — FETCHED, HASHED, EXTRACTED. Pasted as run.

Run from this directory. The proxy is the session's; no key, no login. The
extractor is `2026-09-08-shift29-html-extract.py` (in this directory, hashed
below); it strips `<script>`, `<style>`, comments and tags, unescapes entities,
and prints one non-empty line per block. The `.headers` files are retained.

```
$ date -u +%Y-%m-%dT%H:%M:%SZ
2026-09-08T15:01:41Z
$ curl -sS -m 60 -D 2026-09-08-cbp-glossary.headers -o 2026-09-08-cbp-glossary.raw.html -w "HTTP %{http_code} bytes %{size_download} %{content_type}\n" https://www.census.gov/programs-surveys/cbp/about/glossary.html
HTTP 200 bytes 327996 text/html; charset=UTF-8
$ sha256sum 2026-09-08-cbp-glossary.raw.html
e27985be4bb3da53274349ddcf24acd816c87c7612e1bd7fce883bc130e59949  2026-09-08-cbp-glossary.raw.html
$ date -u +%Y-%m-%dT%H:%M:%SZ
2026-09-08T15:01:42Z
$ curl -sS -m 60 -D 2026-09-08-nes-glossary.headers -o 2026-09-08-nes-glossary.raw.html -w "HTTP %{http_code} bytes %{size_download} %{content_type}\n" https://www.census.gov/programs-surveys/nonemployer-statistics/about/glossary.html
HTTP 200 bytes 334123 text/html; charset=UTF-8
$ sha256sum 2026-09-08-nes-glossary.raw.html
e39e8a0df58539c41f362da8ce46e4c0d41b73417510c5692073e0e920ec2eb5  2026-09-08-nes-glossary.raw.html
$ head -3 2026-09-08-cbp-glossary.headers; grep -i "^last-modified\|^etag\|^date:" 2026-09-08-cbp-glossary.headers
HTTP/1.1 200 Connection Established

HTTP/2 200 
date: Tue, 08 Sep 2026 15:01:41 GMT
$ head -3 2026-09-08-nes-glossary.headers; grep -i "^last-modified\|^etag\|^date:" 2026-09-08-nes-glossary.headers
HTTP/1.1 200 Connection Established

HTTP/2 200 
date: Tue, 08 Sep 2026 15:01:43 GMT
$ sha256sum 2026-09-08-shift29-html-extract.py
91c7177ecf5f78c0071c613a8a8bf0ceff267792da2dfa6494dbb83fecf8a7fa  2026-09-08-shift29-html-extract.py
$ python3 2026-09-08-shift29-html-extract.py 2026-09-08-cbp-glossary.raw.html > 2026-09-08-cbp-glossary.extracted.txt; wc -l -c 2026-09-08-cbp-glossary.extracted.txt; sha256sum 2026-09-08-cbp-glossary.extracted.txt
  375 14709 2026-09-08-cbp-glossary.extracted.txt
a7b25f973f2111b7ae8901368a639ab376091cb38f7e89e3f2c5bf6f5d30e97d  2026-09-08-cbp-glossary.extracted.txt
$ python3 2026-09-08-shift29-html-extract.py 2026-09-08-nes-glossary.raw.html > 2026-09-08-nes-glossary.extracted.txt; wc -l -c 2026-09-08-nes-glossary.extracted.txt; sha256sum 2026-09-08-nes-glossary.extracted.txt
  334 10776 2026-09-08-nes-glossary.extracted.txt
4b61dfa8676dd306af997bd4b2f519a2c4e812f3a6e42718667303cc053c5514  2026-09-08-nes-glossary.extracted.txt
$ grep -c "<script" 2026-09-08-cbp-glossary.raw.html 2026-09-08-nes-glossary.raw.html
2026-09-08-cbp-glossary.raw.html:47
2026-09-08-nes-glossary.raw.html:47
```

**Retained in the tree:** the raw HTML of both pages (`*.raw.html`, the
fetch-identity hashes above), the response headers, and the extracted texts
(`*.extracted.txt`, the content hashes above). **Line numbers cited anywhere in
this shift's drafts are the EXTRACTED texts' (`cat -n`), not the pages'.**

**Blind spots of §1, beside its result.** (a) The raw byte counts differ from
the round-2 reviewer's fetch fifteen minutes earlier (the verdict recorded
329,702 B and 332,417 B; this fetch 327,996 B and 334,123 B) — `www.census.gov`
serves a page whose markup varies fetch to fetch (47 `<script>` tags on each),
so **the raw hash is a fetch identity, not a stable content identity; the
extracted text is what a later fetch's content is diffed against**, and whether
the extracted text is stable across fetches was not tested (one fetch each).
(b) The extractor keeps navigation, footer and any hidden element; it cannot tell
a definition from a menu item — the reader grades each cited line. (c) Nothing
behind a login or rendered by JavaScript was fetched; the definitions cited are
present in the raw HTML (the `grep` in §2 finds them in the extracted text made
from it). (d) Each page states its own revision date in its footer (CBP
2026-07-24; NES 2024-07-30 — the NES glossary predates the NES 2023 release and
is read against a 2023 file, a cross-vintage read of the same shape the
shift-28 receipt names for the 2017 layout).

## 2. THE LINES THE RE-DRAFT RELIES ON — quoted from the extracted texts, as run

Every sentence the re-draft states about either program is one of these lines
or a plain consequence of two of them. `cut -c1-260` is applied to the paste
below for width only; the files carry the full lines.

```
$ date -u +%Y-%m-%dT%H:%M:%SZ
2026-09-08T15:05:17Z
$ sed -n 238p 2026-09-08-cbp-glossary.extracted.txt
The glossary below defines terms included in the County Business Patterns (CBP) program.
$ sed -n 287p 2026-09-08-cbp-glossary.extracted.txt
Paid employment consists of full- and part-time employees, including salaried officers and executives of corporations, who are on the payroll in the pay period including March 12. Included are employees on paid sick leave, holidays, and vacations; not included
$ sed -n 289p 2026-09-08-cbp-glossary.extracted.txt
Numbers of establishments by employment size class is determined by paid employment in the mid-March pay period. Employment size class is derived from the original employment value before noise is applied. This may cause a slight difference between the tabulat
$ sed -n 295p 2026-09-08-cbp-glossary.extracted.txt
Establishment counts represent the number of locations with paid employees any time during the year. This series excludes government establishments except for government sponsored Beer, Wine, and Distilled Alcoholic Beverage Merchant Wholesalers (NAICS 4248); 
$ sed -n 300p 2026-09-08-cbp-glossary.extracted.txt
Sole Proprietorships  - An unincorporated business with a sole owner.
$ sed -n 301p 2026-09-08-cbp-glossary.extracted.txt
Partnership  - An unincorporated business where two or more persons join to carry on a trade or business with each having a shared financial interest in the business.
$ sed -n 312p 2026-09-08-cbp-glossary.extracted.txt
A nonemployer business is one that has no paid employees, has annual business receipts of $1,000 or more ($1 or more in the construction industry), and is subject to federal income taxes.
$ sed -n 313p 2026-09-08-cbp-glossary.extracted.txt
CBP does not include data for nonemployer businesses. For these data, refer to Nonemployer Statistics .
$ sed -n 317p 2026-09-08-cbp-glossary.extracted.txt
Payroll includes all forms of compensation, such as salaries, wages, commissions, dismissal pay, bonuses, vacation allowances, sick-leave pay, and employee contributions to qualified pension plans paid during the year to all employees. For corporations, payrol
$ sed -n 329p 2026-09-08-cbp-glossary.extracted.txt
Page Last Revised - July 24, 2026
$ sed -n 242p 2026-09-08-nes-glossary.extracted.txt
The glossary below defines terms included in the Nonemployer Statistics (NES) program.
$ sed -n 258p 2026-09-08-nes-glossary.extracted.txt
Generally, an establishment is a single physical location at which business is conducted, services are rendered, or industrial operations are performed. However, NES counts each distinct business income tax return as a firm. For NES, the terms firm, business, 
$ sed -n 263p 2026-09-08-nes-glossary.extracted.txt
Sole proprietorship: Also referred to as a "individual proprietorship," an unincorporated business with a sole owner. Also included in this category are self-employed persons.
$ sed -n 271p 2026-09-08-nes-glossary.extracted.txt
A nonemployer business is one that has no paid employees, has annual business receipts of $1,000 or more ($1 or more in the Construction industry), and is subject to federal income taxes.
$ sed -n 278p 2026-09-08-nes-glossary.extracted.txt
The receipts size class provides the number of establishments by the dollar value of reported receipts at the U.S. level only. The receipts size class is derived from the original receipts reported before noise is applied. This may cause a slight difference be
$ sed -n 288p 2026-09-08-nes-glossary.extracted.txt
Page Last Revised - July 30, 2024
$ grep -n -i 'nonemployer\|paid employ\|sole propriet\|salaried officer\|receipts of' 2026-09-08-cbp-glossary.extracted.txt 2026-09-08-nes-glossary.extracted.txt | cut -c1-120
2026-09-08-cbp-glossary.extracted.txt:287:Paid employment consists of full- and part-time employees, including salaried 
2026-09-08-cbp-glossary.extracted.txt:289:Numbers of establishments by employment size class is determined by paid emplo
2026-09-08-cbp-glossary.extracted.txt:295:Establishment counts represent the number of locations with paid employees any
2026-09-08-cbp-glossary.extracted.txt:300:Sole Proprietorships  - An unincorporated business with a sole owner.
2026-09-08-cbp-glossary.extracted.txt:311:Nonemployer
2026-09-08-cbp-glossary.extracted.txt:312:A nonemployer business is one that has no paid employees, has annual business 
2026-09-08-cbp-glossary.extracted.txt:313:CBP does not include data for nonemployer businesses. For these data, refer to
2026-09-08-nes-glossary.extracted.txt:227:Nonemployer Statistics
2026-09-08-nes-glossary.extracted.txt:231:Nonemployer Glossary
2026-09-08-nes-glossary.extracted.txt:241:Nonemployer Statistics Glossary
2026-09-08-nes-glossary.extracted.txt:242:The glossary below defines terms included in the Nonemployer Statistics (NES) 
2026-09-08-nes-glossary.extracted.txt:258:Generally, an establishment is a single physical location at which business is
2026-09-08-nes-glossary.extracted.txt:263:Sole proprietorship: Also referred to as a "individual proprietorship," an uni
2026-09-08-nes-glossary.extracted.txt:270:Nonemployer
2026-09-08-nes-glossary.extracted.txt:271:A nonemployer business is one that has no paid employees, has annual business 
2026-09-08-nes-glossary.extracted.txt:276:The composition of nonemployer receipts may differ from receipts data publishe
2026-09-08-nes-glossary.extracted.txt:286:About the Nonemployer Statistics Program
2026-09-08-nes-glossary.extracted.txt:287:Nonemployer Data
```

**The definitions, in the words the re-draft leans on** (the full lines are
above and in the files):

| # | Term | File:line | The words |
|---|---|---|---|
| 1 | Nonemployer (NES) | nes:271 | *"A nonemployer business is one that has no paid employees, has annual business receipts of $1,000 or more ($1 or more in the Construction industry), and is subject to federal income taxes."* |
| 2 | Nonemployer (CBP) | cbp:312–313 | the same sentence (lower-case *"construction"*), then *"CBP does not include data for nonemployer businesses."* |
| 3 | Paid employment | cbp:287 | *"… including salaried officers and executives of corporations, who are on the payroll in the pay period including March 12 … not included are sole proprietors and partners of unincorporated businesses."* |
| 4 | Establishment counts | cbp:295 | *"Establishment counts represent the number of locations with paid employees any time during the year."* |
| 5 | The `<5` class | cbp:289 | *"The "<5" size group (formerly "1 to 4") includes establishments that did not report any paid employees in the mid-March pay period but paid wages to at least one employee at some time during the year."* |
| 6 | Payroll | cbp:317 | *"For corporations, payroll includes amounts paid to officers and executives; for unincorporated businesses, it does not include profit or other compensation of proprietors or partners."* |
| 7 | Sole proprietorship (CBP / NES) | cbp:300 / nes:263 | *"An unincorporated business with a sole owner."* / the same, plus *"Also included in this category are self-employed persons."* |
| 8 | Partnership | cbp:301 | *"An unincorporated business where two or more persons join …"* |
| 9 | Firms or establishments (NES) | nes:258 | *"NES counts each distinct business income tax return as a firm. For NES, the terms firm, business, and establishment are used interchangeably."* |
| 10 | Receipts size class (NES) | nes:278 | *"… by the dollar value of reported receipts at the U.S. level only … derived from the original receipts reported before noise is applied."* |

**What the round-2 verdict quoted and what the page says:** the verdict's
bracketed *"[partners]"* stands where the page reads *"partners of
unincorporated businesses"* (cbp:287); the verdict's *"$1 or more in the
Construction industry"* is the NES page's capitalisation (nes:271), the CBP page
writes *"construction"* (cbp:312). Nothing the verdict quoted is absent from the
pages fetched here.

## 3. THE BOUND — one-person businesses already inside the employer count

The pulled text left this at *"attempt: none"*. The attempt: by rows 3–5 of §2,
a business whose only paid employee is its owner-officer is counted by CBP, and
with one employee it sits in the `<5` class — so **the number of such businesses
on the six matched codes is AT MOST the `n<5` establishment count.** The file
is the one the 4 Sep and shift-28 receipts hashed, re-fetched here and
byte-identical; the instrument is in this directory.

```
$ date -u +%Y-%m-%dT%H:%M:%SZ; curl -sS -o cbp23us.zip -w "HTTP %{http_code} bytes %{size_download}\n" https://www2.census.gov/programs-surveys/cbp/datasets/2023/cbp23us.zip; sha256sum cbp23us.zip; unzip -o -q cbp23us.zip; sha256sum cbp23us.txt
2026-09-08T15:03:18Z
HTTP 200 bytes 750265
3f9018f807f1ffd7bcbb00690f9792573bc2bc6bb4cfab9df14ca7ab3eac0862  cbp23us.zip
1d8dbbfa608a3299ca238db26d37a03383c02b3570101a8598b40725bf5ea54b  cbp23us.txt
$ pwd; date -u +%Y-%m-%dT%H:%M:%SZ
/tmp/claude-0/-home-user-personal-projects/7f8b3fa6-00a8-5509-8087-d07cfe98ffa5/scratchpad/census
2026-09-08T15:04:55Z
$ sha256sum cbp23us.txt /home/user/personal-projects/gtm/raise/model/snapshots/2026-09-08-shift29-cbp-under5-bound.py
1d8dbbfa608a3299ca238db26d37a03383c02b3570101a8598b40725bf5ea54b  cbp23us.txt
db460ad2504a19fcb3fc648a3092673b7cae46754f6ba431691118cbba956deb  /home/user/personal-projects/gtm/raise/model/snapshots/2026-09-08-shift29-cbp-under5-bound.py
$ python3 /home/user/personal-projects/gtm/raise/model/snapshots/2026-09-08-shift29-cbp-under5-bound.py
## n<5 (establishments in the "<5" employment size class) by lfo, six matched codes; est = all establishments
code            -        C        Z        S        P        N        O   letters-sum   est(-)
812111      5,884      819    3,427    1,097      536        5        0         5,884     7,789
812112     57,809    7,894   33,921   11,142    4,814       27       11        57,809    84,176
812113     22,572    3,694   11,047    5,876    1,947        5        3        22,572    34,417
722511     67,995   12,812   25,936   14,506   14,570      109       62        67,995   258,626
722513     65,630   13,943   26,103   13,552   11,924       69       39        65,630   270,088
722515     28,321    3,425    9,426    8,436    6,899       91       44        28,321    85,140
six       248,211   42,587  109,860   54,609   40,690      306      159       248,211   740,236

UPPER BOUND, all legal forms (lfo=-), six codes: n<5 = 248,211  of est 740,236 (33.5%)
UPPER BOUND, corporate forms only (C+Z), six codes: 152,447
personal-care three codes: all forms 86,265; C+Z 60,802
partition check: letters-sum equals n<5(-) on every code -> True
```

*(The first block above is the four commands of the scratchpad fetch joined on
one line for the paste; each printed line is the output as it appeared, in
order. The `pwd` line shows the scratchpad directory the instrument was run
from — the zips are not retained in the tree, as at shift 28.)*

**What the bound is and is not, beside its result.** (a) **An upper bound, not
an estimate:** the `<5` class also holds every two-, three- and four-employee
shop and every zero-in-March-but-paid-wages-in-the-year establishment (row 5),
and no field in the file separates a one-employee establishment from the rest —
the `e<5` employment field was not used, because the zero-March cases make any
inference from it unsafe. (b) **Two figures, one dependency:** the all-forms
figure (`lfo='-'`, 248,211) depends on nothing but the class definition; the
corporate-forms figure (`C`+`Z`, 152,447) depends on reading `C` and `Z` as the
two corporate legal forms — **the file's letter codes are defined by neither
glossary** (the CBP glossary names six legal forms in words, cbp:296–303; the
file writes seven letters; the API's `LFO` value list was empty at the 4 Sep
receipt), so that reading is the shift-28 receipt's and is a blind spot here.
`S` and `P` are excluded from the corporate-forms figure on rows 3, 6, 7, 8: a sole
proprietor or partner cannot be their own paid employee. `N` and `O` (306 and
159 in the class) are outside that figure by its scope only — nothing in either
glossary keeps a non-profit's one person off its payroll — so the figure with
`S` and `P` alone removed is the sum of the printed `C`, `Z`, `N`, `O` totals,
42,587 + 109,860 + 306 + 159 = 152,912 (round-1 SF-1; arithmetic on the cells
above, not a new instrument run). (c) **Noise infusion**
(cbp:309–310) touches these cells; the partition check printed above is the
LEGAL-FORM partition of `n<5` (the seven letters sum to `-` on every code) — it
is arithmetic, not proof of the class boundaries (the shift-28 receipt's caveat,
unchanged). The SIZE-CLASS partition — the nine `n*` columns against `est` — was
not printed by the instrument (round-1 SF-7); run afterwards, pasted as run:

```
$ date -u +%Y-%m-%dT%H:%M:%SZ; cat sizeclass.py; python3 sizeclass.py
2026-09-08T15:20:17Z
import csv
SIX=('812111','812112','812113','722511','722513','722515'); COLS=('n<5','n5_9','n10_19','n20_49','n50_99','n100_249','n250_499','n500_999','n1000')
t=e=0; nonnum=[]
for r in csv.DictReader(open('cbp23us.txt',newline='',encoding='latin-1')):
    if r['lfo'].strip()=='-' and r['naics'].strip() in SIX:
        e+=int(r['est'])
        for k in COLS:
            v=r[k].strip()
            if v.isdigit(): t+=int(v)
            else: nonnum.append((r['naics'].strip(),k,v))
print('nine size-class n* columns summed', t, 'vs est', e, 'difference', e-t, '| non-numeric cells treated as 0:', nonnum)
nine size-class n* columns summed 740232 vs est 740236 difference 4 | non-numeric cells treated as 0: [('722511', 'n1000', 'N'), ('722515', 'n1000', 'N'), ('812111', 'n250_499', 'N'), ('812111', 'n500_999', 'N'), ('812111', 'n1000', 'N'), ('812112', 'n250_499', 'N'), ('812112', 'n500_999', 'N'), ('812112', 'n1000', 'N'), ('812113', 'n100_249', 'N'), ('812113', 'n250_499', 'N'), ('812113', 'n500_999', 'N'), ('812113', 'n1000', 'N')]
```

Four short of `est`, with twelve `N` (not available) cells treated as zero —
so the four may sit in suppressed cells, or be the *"slight difference"*
cbp:289 warns of (class from pre-noise employment, totals noised); this check
cannot tell which. A bound stated on the published `n<5` cell is not moved by
either. (d) The bound is on **establishments in CBP**; the ruled-in count at
A48 is NES **firms** (= tax returns, row 9). The two are not subtracted from or
added to each other anywhere.

## 4. WHAT THIS RECEIPT DOES NOT ESTABLISH

- **Whether a business with no paid employees in mid-March but wages paid at
  some time in the year is counted by BOTH programs.** CBP counts it (rows 4–5);
  NES's definition says *"no paid employees"* with no reference period (row 1).
  Neither glossary says how the two programs de-duplicate; the NES FAQ page (a
  sibling of the glossary, nes:235) was not fetched.
- **Whether NES's *"no paid employees"* (nes:271) is CBP's *"paid employment"*
  (cbp:287).** NES does not define the phrase; the re-draft reads the two as one
  test, and neither glossary says so.
- **Where an LLC is assigned.** The glossaries' "unincorporated" forms are the
  sole proprietorship and the partnership (cbp:300–301); an LLC — unincorporated
  under state law, taxable as a corporation on election — is named by neither
  page, and LFO *"is derived from administrative records data sources"*
  (cbp:297). The re-draft's "unincorporated" means those two forms and says so.
- **Any fraction of one-person businesses that falls on either side of the
  line.** No instrument here measures it, and the re-draft states none.
- **Whether the extracted text is stable across fetches** — one fetch each.
- **The seven-letter `lfo` code mapping** — §3(b).
- **The NES FAQ, the NES methodology page, the CBP methodology page** — not
  opened. The glossaries are the documents the ruling named; the methodology
  pages might qualify them.
