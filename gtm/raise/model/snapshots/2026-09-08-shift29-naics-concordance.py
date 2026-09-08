#!/usr/bin/env python3
"""Shift 29 (2026-09-08) -- G20 cost-to-close item (i): for each of the eighteen
slide-4 classes (2017 NAICS, the CBP vintage), what the Bureau's 2017->2022
concordance maps it to, whether NES 2023 (2022 NAICS) publishes a row at that
code, and whether that 2022 code draws on more than one 2017 industry. Reads
2017_to_2022_NAICS.xlsx (stdlib zip+xml, no openpyxl), nonemp23us.txt and
nes_naics22.txt from the current directory. Prints only what it computed.
Blind spots: the xlsx is read as cell text -- bold/italic marks the Bureau's
note describes are NOT read (multi-source is derived by counting rows instead);
a 'piece' of a 2017 industry is reported by the concordance as a row, its size
is not; NES row presence is presence, not comparability."""
import zipfile, csv, xml.etree.ElementTree as ET
ns = {'m': 'http://schemas.openxmlformats.org/spreadsheetml/2006/main'}
z = zipfile.ZipFile('2017_to_2022_NAICS.xlsx')
ss = [''.join(x.text or '' for x in si.iter('{%s}t' % ns['m'])) for si in ET.fromstring(z.read('xl/sharedStrings.xml')).findall('m:si', ns)]
rows = []
for r in ET.fromstring(z.read('xl/worksheets/sheet1.xml')).iter('{%s}row' % ns['m']):
    v = []
    for c in r.findall('m:c', ns):
        x = c.find('m:v', ns); v.append('' if x is None else (ss[int(x.text)] if c.get('t') == 's' else x.text))
    rows.append(v)
hdr = rows[2]; data = [r for r in rows[3:] if len(r) >= 3 and r[0].strip().isdigit()]
print(f'header row: {hdr[0]!r} | {hdr[2]!r}; data rows: {len(data)}; distinct 2017 codes: {len({r[0] for r in data})}; distinct 2022 codes: {len({r[2] for r in data})}')
nes = {r['NAICS']: int(r['ESTAB']) for r in csv.DictReader(open('nonemp23us.txt', newline='', encoding='latin-1')) if r['LFO'] == '-' and r['RCPTOT_SIZE'] == '001' and r['ESTAB'].strip()}
by17 = {}; by22 = {}
for r in data:
    by17.setdefault(r[0].strip(), []).append(r); by22.setdefault(r[2].strip(), []).append(r)
EIGHTEEN = ['812111','812112','812113','812199','713940','722511','722513','722515','311811','448110','448120','448130','448140','448150','448190','448210','448310','448320']
print('\n## per class: 2017 code -> 2022 code | the finest NES 2023 row at or above that code | 2022 six-digit codes under that row (from the concordance) | 2017 industries feeding it | verdict')
all22 = sorted({r[2].strip() for r in data})
for c in EIGHTEEN:
    for t in sorted({r[2].strip() for r in by17.get(c, [])}):
        row = next((t[:n] for n in range(6, 1, -1) if t[:n] in nes), None)
        kids = [k for k in all22 if k.startswith(row)] if row else []
        srcs = sorted({r[0].strip() for k in kids for r in by22[k]})
        if row == t and srcs == [c]: verdict = 'MATCHED'
        elif row: verdict = f'SUPERSET at {len(row)} digits'
        else: verdict = 'NO ROW'
        print(f'{c} -> {t}  NES row {row or "none":<6} {nes.get(row, 0):>9,}  2022 codes under it {len(kids)}  2017 sources {len(srcs)}{"" if len(srcs) == 1 else " (" + ", ".join(srcs) + ")"}  {verdict}')
print('\n## every 2017 industry the concordance maps into a 2022 458* code (the composition of 458)')
for t in sorted(k for k in by22 if k.startswith('458')):
    for r in by22[t]: print(f'  {t}  <-  {r[0].strip()}  {r[1].strip()[:70]!r}')
print('\n## NES 2023 rows under 458 (LFO=-, total):', {k: v for k, v in sorted(nes.items()) if k.startswith('458')})
print('## 2022 code list (nes_naics22.txt) entries under 458:')
for line in open('nes_naics22.txt', encoding='latin-1'):
    if line.strip().startswith('458'): print('  ' + line.rstrip()[:90])
