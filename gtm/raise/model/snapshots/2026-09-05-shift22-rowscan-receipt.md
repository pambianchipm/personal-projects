# SNAPSHOT — shift-22 re-enumeration of AGENT-REPORTED rows

CONFIDENTIAL — internal-audit class (law 8).

STATUS: **RECEIPT.** Produced 2026-09-05 (shift 22). **Filed after the round-1
gate on the regrade recorded it missing** — MUST-FIX 10: *"the load-bearing
instrument of this shift retained no receipt … unreproducible prose. Law 2."*
The gate was right; this file exists because of it, not before it.

## WHAT WAS RUN

**Script:** `gtm/raise/model/snapshots/2026-09-05-shift22-rowscan.py`
SHA-256 `bfb081f22ef3200fd4bbb6a8d909e1750106047a581b4b8a60e81f2a2e9ce81d`

**Input:** `gtm/raise/model/assumptions.md` at commit `9348c77` (the
pre-shift-22 table), SHA-256 `d652934b90b95043dc7bc2f53ba7cc5772a6ef4ac17a70cd4e213d8e89a329d1`

**Reproduce:**
```
git show 9348c77:gtm/raise/model/assumptions.md > /tmp/pre/assumptions.md
python3 gtm/raise/model/snapshots/2026-09-05-shift22-rowscan.py   # edit path to /tmp/pre
```

## WHAT THE SCRIPT DOES

1. Matches the corpus on the **whole row line** (not the grade field) by four
   names: `research-smm-landscape`, `landscape report`, `SMM landscape`,
   `landscape doc`.
2. Matches an unnamed upstream doc by six phrases (`origin doc`, `the origin`,
   `the report itself`, `the research doc`, `its own editor`, `editor's grades`).
3. Builds a citation graph of every `A##` and every `A##–A##` range referenced
   anywhere in a row.
4. Takes the transitive closure of contamination over that graph.

## RAW OUTPUT, VERBATIM

```
ROWS FOUND: 46 — A1 A2 A3 A4 A5 A6 A7 A8 A9 A10 A11 A12 A13 A14 A15 A16 A17 A18 A19 A20 A21 A22 A23 A24 A25 A26 A27 A28 A29 A30 A31 A32 A33 A34 A35 A36 A37 A38 A39 A40 A41 A42 A43 A44 A45 A46

DIRECT (row names the corpus):  10 — A11 A12 A14 A15 A25 A27 A30 A31 A33 A45
VAGUE  (row names an unnamed upstream doc, no corpus name): 1 — A9

CITATION GRAPH (row -> rows it references):
  A5   -> A4
  A7   -> A4
  A9   -> A1 A4 A5 A6 A7 A8 A10
  A14  -> A30
  A23  -> A5
  A24  -> A21
  A29  -> A25 A26 A27 A28
  A30  -> A11 A14
  A38  -> A35
  A39  -> A1 A9 A21
  A41  -> A40
  A42  -> A41
  A44  -> A41
  A45  -> A11 A14 A30 A42 A46
  A46  -> A42 A45

CONTAMINATED CLOSURE: 14 rows
  A9    vague-upstream
  A11   direct
  A12   direct
  A14   direct
  A15   direct
  A25   direct
  A27   direct
  A29   inherits via A25,A27
  A30   direct
  A31   direct
  A33   direct
  A39   inherits via A9
  A45   direct
  A46   inherits via A45

SHIFT-21 LIST (ten): A11 A12 A14 A15 A25 A27 A30 A31 A33 A45
NEW vs shift-21    : A9 A29 A39 A46
DROPPED vs shift-21: (none)
```

## WHAT THE SCRIPT GOT WRONG, AND WHAT THE HAND-CHECK CHANGED

**The script's closure was 14 rows. The published list is 11. Every difference
came from reading rows by hand, and the script was wrong in both directions.**

| Row | Script said | Published | Why |
|---|---|---|---|
| A9 | contaminated (vague-upstream) | **OUT** | The phrase it matched was **`the ORIGINAL 41–59% band`** — `the origin` inside `the ORIGINAL`. A9 is an xAI-pricing derivation. **False positive.** |
| A39 | contaminated (via A9) | **OUT** | Inherits only from A9. Falls with it. |
| A15 | contaminated (direct) | **OUT — and the grounds are contested; see below** | |
| A25 | contaminated (direct) | **OUT** | Raw fetch 3 Sep 12:39:48Z, HTTP 200, 612,498 B, SHA-256 `d0decc76…`, retained extraction hashed `bf7ea8a2…` (`snapshots/2026-09-03-buy-editor-pricing.md`). The corpus only **confirms** it. |
| A32 | **NOT FOUND** | **IN** | The script cannot see it: A32 names the corpus as **`landscape §1.3`** and **`§2.4 / Big Table`**, never "landscape report". Found by a **third pass keyed to `[VERIFIED]` tags**, not by this script. |
| A7b, A25b | **NOT SCANNED AT ALL** | n/a (both clean) | The row regex `^\| A\d+ \|` **silently drops lettered rows.** They were read by hand afterwards; both have retained primary snapshots. **A scan that drops rows without saying so is the error this shift is about.** |

## THIS INSTRUMENT'S BLIND SPOTS

1. **It silently skips lettered rows** (`A7b`, `A25b`) — the regex requires
   `A<digits>` followed by a pipe.
2. **It matches substrings**: `the origin` fires inside `the ORIGINAL`.
3. **It reads only `assumptions.md`.** A contaminated figure restated in another
   artifact without a row ID is invisible to it. *(The round-1 gate on the
   regrade found eight such files. This script could never have found them.)*
4. **It cannot see the corpus under an abbreviation** — which is how A32 hid.
5. **It cannot detect a row whose cited source is agent-generated but is NOT
   this corpus.** *(The gate turned this into MUST-FIX 3 against
   `clinkworthy/docs/competitor-holo.md`, which A15's grade cell names and which
   nobody in this org has graded.)*

**Eleven is a floor. The gate that reviewed this enumeration produced its own
enumeration and called that a floor too.**
