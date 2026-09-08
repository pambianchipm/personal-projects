#!/usr/bin/env python3
"""Shift 29 (2026-09-08) -- an UPPER BOUND on the one-person businesses already
inside the employer count. Per the CBP glossary an establishment whose only paid
employee is its owner-officer is counted in the "<5" size class, so the count of
such establishments is AT MOST the n<5 count. Prints n<5 by legal form of
organization for the six codes matched across NES 2023 and CBP 2023, from the
extracted cbp23us.txt (run from the directory holding it). Prints only what it
computed; no figure is typed in. Blind spots: the class also holds every
2-, 3- and 4-employee shop and the file has no field that separates them; the
LFO letter codes are not defined by the glossary (C/Z read as corporate is the
shift-28 receipt's reading); noise infusion (glossary) touches these cells."""
import csv
cbp = list(csv.DictReader(open('cbp23us.txt', newline='', encoding='latin-1')))
SIX = ['812111', '812112', '812113', '722511', '722513', '722515']
LFOS = ['-', 'C', 'Z', 'S', 'P', 'N', 'O']
def row(code, lfo):
    r = [r for r in cbp if r['naics'].strip() == code and r['lfo'].strip() == lfo]
    assert len(r) <= 1, (code, lfo, len(r)); return r[0] if r else None
print('## n<5 (establishments in the "<5" employment size class) by lfo, six matched codes; est = all establishments')
print('code    ' + ''.join(f'{l:>9}' for l in LFOS) + '   letters-sum   est(-)')
tot = {l: 0 for l in LFOS}; est_all = 0
for c in SIX:
    vals = {}
    for l in LFOS:
        r = row(c, l); vals[l] = int(r['n<5']) if r and r['n<5'].strip() else 0
        tot[l] += vals[l]
    est_all += int(row(c, '-')['est'])
    ls = sum(vals[l] for l in LFOS[1:])
    print(f'{c}  ' + ''.join(f'{vals[l]:>9,}' for l in LFOS) + f'   {ls:>11,}   {int(row(c, "-")["est"]):>7,}')
ls = sum(tot[l] for l in LFOS[1:])
print(f'six     ' + ''.join(f'{tot[l]:>9,}' for l in LFOS) + f'   {ls:>11,}   {est_all:>7,}')
print(f'\nUPPER BOUND, all legal forms (lfo=-), six codes: n<5 = {tot["-"]:,}  of est {est_all:,} ({tot["-"]/est_all:.1%})')
print(f'UPPER BOUND, corporate forms only (C+Z), six codes: {tot["C"]+tot["Z"]:,}')
pc = sum(int(row(c, '-')['n<5']) for c in SIX[:3]); pcz = sum(int(row(c, l)['n<5']) for c in SIX[:3] for l in ['C', 'Z'])
print(f'personal-care three codes: all forms {pc:,}; C+Z {pcz:,}')
print('partition check: letters-sum equals n<5(-) on every code -> ' + str(all(sum(int(row(c, l)['n<5'] or 0) for l in LFOS[1:] if row(c, l)) == int(row(c, '-')['n<5']) for c in SIX)))
