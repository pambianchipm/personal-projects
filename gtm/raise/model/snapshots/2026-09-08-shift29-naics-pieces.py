#!/usr/bin/env python3
"""Shift 29 -- round-1 SF-1 / SF-4a on the concordance finding: how many rows each of
454110 and 454390 has in the 2017->2022 sheet (a 2017 industry with many rows is one
the Bureau split), what its 2017-title cell says on the 458* rows, and whether the
2022->2017 workbook's 458* rows are the exact transposition. Cell text only; the
sheet's bold/italic marks are not read. Run beside both workbooks."""
import zipfile, xml.etree.ElementTree as ET, sys
ns={'m':'http://schemas.openxmlformats.org/spreadsheetml/2006/main'}
def rows(path):
    z=zipfile.ZipFile(path); ss=[''.join(x.text or '' for x in si.iter('{%s}t'%ns['m'])) for si in ET.fromstring(z.read('xl/sharedStrings.xml')).findall('m:si',ns)]
    out=[]
    for r in ET.fromstring(z.read('xl/worksheets/sheet1.xml')).iter('{%s}row'%ns['m']):
        v=[]
        for c in r.findall('m:c',ns):
            x=c.find('m:v',ns); v.append('' if x is None else (ss[int(x.text)] if c.get('t')=='s' else x.text))
        out.append([s.strip() for s in v[:4]])
    return [r for r in out if len(r)>=3 and r[0].isdigit()]
f=rows('2017_to_2022_NAICS.xlsx'); b=rows('2022_to_2017_NAICS.xlsx')
print('2017->2022 data rows', len(f))
for code in ('454110','454390'):
    rs=[r for r in f if r[0]==code]
    print(f'{code}: {len(rs)} rows in the 2017->2022 sheet, mapping to {len({r[2] for r in rs})} distinct 2022 codes; its 2017-title cell on the four 458* rows: {sorted({r[1] for r in rs if r[2].startswith("458")})}')
    print(f'   {code} as a 2017 source of 458*: {[r[2] for r in rs if r[2].startswith("458")]}')
print('448* rows:', [(r[0], len([x for x in f if x[0]==r[0]])) for r in f if r[0].startswith('448') and r == [x for x in f if x[0]==r[0]][0]])
fw={(r[0],r[2]) for r in f if r[0].startswith(('448','454110','454390')) and r[2].startswith('458')}
bw={(r[2],r[0]) for r in b if r[0].startswith('458')}
print('transposition check, 458* rows: forward pairs', len(fw), 'backward pairs', len(bw), 'sets equal ->', fw==bw)
