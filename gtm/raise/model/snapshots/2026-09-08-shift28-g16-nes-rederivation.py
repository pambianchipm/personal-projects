#!/usr/bin/env python3
"""Shift 28 (2026-09-08) — re-derive every nonemployer figure the G16 revaluation
states, from the extracted NES 2023 US file, and the six-code employer count from
the extracted CBP 2023 US file. Run from the directory holding nonemp23us.txt and
cbp23us.txt (the zips' contents). Prints only what it computed; no figure is typed in."""
import csv, sys
nes = list(csv.DictReader(open('nonemp23us.txt', newline='', encoding='latin-1')))
cbp = list(csv.DictReader(open('cbp23us.txt', newline='', encoding='latin-1')))
SIX = ['812111', '812112', '812113', '722511', '722513', '722515']
CLASSES = ['111', '118', '119', '121', '122', '123', '125', '131', '133', '141', '1411']

def nes_total(code, lfo='-'):
    r = [r for r in nes if r['NAICS'] == code and r['LFO'] == lfo and r['RCPTOT_SIZE'] == '001']
    assert len(r) == 1, (code, lfo, len(r)); return int(r[0]['ESTAB'])

print('## A. six matched codes — NES 2023 nonemployer establishments (LFO=-, RCPTOT_SIZE=001) vs CBP 2023 employer establishments (lfo=-)')
tn = tc = 0
for c in SIX:
    n = nes_total(c); e = [int(r['est']) for r in cbp if r['naics'].strip() == c and r['lfo'].strip() == '-']
    assert len(e) == 1; e = e[0]; tn += n; tc += e
    print(f'{c}  employer {e:>9,}  nonemployer {n:>9,}  ratio {n/e:.1f}x')
print(f'six-code totals: employer {tc:,}  nonemployer {tn:,}  ratio {tn/tc:.1f}x')
print(f'personal care, three codes: {sum(nes_total(c) for c in SIX[:3]):,}  |  NES 81211 row: {nes_total("81211"):,}')
print('## B. coarser NES rows the 4 Sep receipt recorded but did not use')
for c in ['458', '7139', '3118', '8121', '81219']: print(f'{c}  {nes_total(c):,}')
print('## C. every NES 2023 code (LFO=-, total row) under the prefixes of the 18 CBP classes: 812, 713, 722, 311, 448, 458')
for r in sorted((r for r in nes if r['LFO'] == '-' and r['RCPTOT_SIZE'] == '001' and r['NAICS'].startswith(('812', '713', '722', '311', '448', '458'))), key=lambda r: r['NAICS']):
    print(f"  {r['NAICS']:<7}{int(r['ESTAB']):>10,}")
print('## D. receipts-size classes (RCPTOT_SIZE, LFO=-) — class rows present, their sum vs the 001 row, cumulative shares at the class boundaries the 2017 layout names')
for c in SIX + ['81211']:
    d = {r['RCPTOT_SIZE']: int(r['ESTAB']) for r in nes if r['NAICS'] == c and r['LFO'] == '-' and r['ESTAB'].strip()}
    tot = d['001']; present = [k for k in CLASSES if k in d]; s = sum(d[k] for k in present)
    cum = 0; parts = []
    for k in ['111', '118', '119', '121', '122']:
        cum += d.get(k, 0); parts.append(f'thru {k}: {cum:,} ({cum/tot:.1%})')
    print(f'{c}: total {tot:,}; classes present {present}; class sum {s:,} ({tot - s:+,} vs total); ' + '; '.join(parts))
print('## E. legal form of organization (RCPTOT_SIZE=001) — the S (sole proprietorship) share')
for c in SIX + ['81211']:
    d = {r['LFO']: int(r['ESTAB']) for r in nes if r['NAICS'] == c and r['RCPTOT_SIZE'] == '001' and r['ESTAB'].strip()}
    print(f"{c}: total {d['-']:,}; C+Z+S+P {d['C']+d['Z']+d['S']+d['P']:,}; S {d['S']:,} ({d['S']/d['-']:.1%})")
