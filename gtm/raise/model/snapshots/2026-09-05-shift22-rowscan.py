import re, json, sys

path = "gtm/raise/model/assumptions.md"
lines = open(path, encoding="utf-8").read().split("\n")

rows = {}
order = []
for ln, line in enumerate(lines, 1):
    m = re.match(r'^\|\s*(A\d+)\s*\|', line)
    if m:
        rid = m.group(1)
        rows[rid] = {"line": ln, "text": line}
        order.append(rid)

print("ROWS FOUND: %d — %s" % (len(order), " ".join(order)))
print()

# --- DIRECT: the whole row line (not field 5) mentions the corpus, by any name we know it goes by
DIRECT_PAT = re.compile(
    r'research-smm-landscape|landscape report|SMM landscape|landscape doc',
    re.I)
# --- VAGUE: an unnamed upstream document
VAGUE_PAT = re.compile(
    r'origin doc|the origin|the report itself|the research doc|its own editor|editor\'s grades',
    re.I)

direct = [r for r in order if DIRECT_PAT.search(rows[r]["text"])]
vague  = [r for r in order if VAGUE_PAT.search(rows[r]["text"]) and r not in direct]

print("DIRECT (row names the corpus):  %d — %s" % (len(direct), " ".join(direct)))
print("VAGUE  (row names an unnamed upstream doc, no corpus name): %d — %s" % (len(vague), " ".join(vague) or "(none)"))
print()

# --- CITATION GRAPH: which rows does each row reference?
def refs_of(rid):
    txt = rows[rid]["text"]
    out = set()
    # explicit single IDs
    for m in re.finditer(r'\bA(\d+)\b', txt):
        t = "A" + m.group(1)
        if t != rid and t in rows:
            out.add(t)
    # ranges like A25–A27 / A25-A27 / A40–A44
    for m in re.finditer(r'\bA(\d+)\s*[–\-—]\s*A?(\d+)\b', txt):
        a, b = int(m.group(1)), int(m.group(2))
        if b > a and b - a < 30:
            for i in range(a, b+1):
                t = "A%d" % i
                if t != rid and t in rows:
                    out.add(t)
    return out

graph = {r: refs_of(r) for r in order}

# --- TRANSITIVE CLOSURE from the direct+vague seed
seed = set(direct) | set(vague)
contaminated = dict((r, ["direct" if r in direct else "vague-upstream"]) for r in seed)
changed = True
depth = 0
while changed:
    changed = False
    depth += 1
    for r in order:
        if r in contaminated:
            continue
        hits = sorted(graph[r] & set(contaminated))
        if hits:
            contaminated[r] = ["inherits via " + ",".join(hits)]
            changed = True

print("CITATION GRAPH (row -> rows it references):")
for r in order:
    if graph[r]:
        print("  %-4s -> %s" % (r, " ".join(sorted(graph[r], key=lambda x:int(x[1:])))))
print()

final = sorted(contaminated, key=lambda x: int(x[1:]))
print("CONTAMINATED CLOSURE: %d rows" % len(final))
for r in final:
    print("  %-4s  %s" % (r, contaminated[r][0]))
print()

TEN = "A11 A12 A14 A15 A25 A27 A30 A31 A33 A45".split()
print("SHIFT-21 LIST (ten): %s" % " ".join(TEN))
print("NEW vs shift-21    : %s" % (" ".join(r for r in final if r not in TEN) or "(none)"))
print("DROPPED vs shift-21: %s" % (" ".join(r for r in TEN if r not in final) or "(none)"))
