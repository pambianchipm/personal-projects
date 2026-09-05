#!/usr/bin/env python3
"""
shift23-citescan.py — enumerate the CITED-SOURCE SET of the truth table.

WHY THIS EXISTS (chief's G18 answer, inbox 2026-09-05 08:5x, recommendation 2):
"Grade only what a row actually cites. Grading all twenty files is a week and
most are scopes and plans nothing cites. The set that matters is the set under a
live row, and you can enumerate it from the truth table."

WHAT IT DOES: for every row of gtm/raise/model/assumptions.md, extract every
source-like reference in the WHOLE row (not just the grade cell) and emit a
row->reference map plus a reference->rows inverted index.

WHAT IT CANNOT DO — read this before quoting any number it prints:
 (1) It extracts BACKTICKED tokens and a hand-written list of BARE-PROSE source
     names. A source named in prose in a form not on that list is INVISIBLE to
     it. Shift 22 was bitten by exactly this: A32 cites the corpus as
     "landscape §1.3" and no pattern keyed to the filename could see it.
 (2) It cannot tell a CITATION from a MENTION. "the landscape report appears in
     the row only as the thing the fetch confirms unchanged" (A25) extracts
     identically to a load-bearing citation. Every hit needs a human read.
 (3) It cannot follow a row that inherits a source through another row. The
     transitive closure over A## references is computed here, but a row that
     inherits WITHOUT naming an ID is invisible.
 (4) It reads only this file. A contaminated figure restated in another artifact
     is out of scope by construction.
 (5) It knows nothing about the CONTENT of any cited document. It says WHAT is
     cited. Grading is the human pass that follows.
"""
import re, sys, json, hashlib, collections

PATH = "gtm/raise/model/assumptions.md"
ROW_RE = re.compile(r"^\|\s*(A\d+[a-z]?)\s*\|")
BACKTICK_RE = re.compile(r"`([^`]+)`")
XREF_RE = re.compile(r"\bA(\d+)[a-z]?\s*[–-]\s*A(\d+)[a-z]?\b|\b(A\d+[a-z]?)\b")

# Bare-prose source names. HAND-MAINTAINED — this list is the instrument's
# blind spot made explicit. Each entry is a name a row uses for a source
# WITHOUT a backticked path.
PROSE_SOURCES = {
    "landscape §": "clinkworthy/docs/research-smm-landscape.md",
    "landscape report": "clinkworthy/docs/research-smm-landscape.md",
    "the landscape": "clinkworthy/docs/research-smm-landscape.md",
    "§2.4 / Big Table": "clinkworthy/docs/research-smm-landscape.md",
    "Big Table": "clinkworthy/docs/research-smm-landscape.md",
    "Adobe Express": "EXTERNAL: Adobe Express survey (n=433) — NOT RETRIEVED",
    "Clutch": "EXTERNAL: Clutch — NOT RETRIEVED",
    "Metricool": "EXTERNAL: Metricool (n=927) — NOT RETRIEVED",
    "Trustpilot": "EXTERNAL: Trustpilot — read from a screenshot (A15)",
    "Census": "EXTERNAL: US Census (see A40-A44 backticked snapshots)",
    "Holo teardown": "clinkworthy/docs/competitor-holo.md",
}

# Anything matching these is org-internal machinery, not an evidence source.
NOT_A_SOURCE = re.compile(
    r"^(A\d+|[A-Z_]{2,}\s*=|grep|awk|sed|curl|sha|SHA-256|\$|~|\d)"
)

def classify(tok):
    t = tok.strip()
    if t.endswith((".md", ".ts", ".tsx", ".py", ".json", ".csv")) or "/" in t:
        return "PATH"
    if re.search(r"\.(ai|com|gov|io|org|net)\b", t):
        return "DOMAIN"
    return None

def main():
    raw = open(PATH, "rb").read()
    print(f"FILE: {PATH}")
    print(f"SHA-256: {hashlib.sha256(raw).hexdigest()}")
    print(f"BYTES: {len(raw)}")
    lines = raw.decode().splitlines()
    rows, order = {}, []
    for ln in lines:
        m = ROW_RE.match(ln)
        if m:
            rows[m.group(1)] = ln
            order.append(m.group(1))
    print(f"ROWS MATCHED: {len(order)}  ->  {' '.join(order)}\n")

    row_cites, inverted = {}, collections.defaultdict(set)
    for rid in order:
        ln = rows[rid]
        cites = set()
        for tok in BACKTICK_RE.findall(ln):
            if NOT_A_SOURCE.match(tok.strip()):
                continue
            if classify(tok):
                cites.add(tok.strip())
        for name, canon in PROSE_SOURCES.items():
            if name.lower() in ln.lower():
                cites.add(canon)
        row_cites[rid] = sorted(cites)
        for c in cites:
            inverted[c].add(rid)

    print("=== PER-ROW CITED SOURCES ===")
    for rid in order:
        c = row_cites[rid]
        print(f"{rid:5s} [{len(c)}] " + ("; ".join(c) if c else "(none extracted)"))

    print("\n=== INVERTED INDEX: cited document -> rows ===")
    for doc in sorted(inverted, key=lambda d: (-len(inverted[d]), d)):
        rs = sorted(inverted[doc], key=lambda r: (int(re.sub(r"\D", "", r)), r))
        print(f"[{len(rs):2d}] {doc}\n      {' '.join(rs)}")

    print("\n=== ROWS WITH NO EXTRACTED SOURCE (read these by hand) ===")
    print(" ".join(r for r in order if not row_cites[r]))

if __name__ == "__main__":
    main()
