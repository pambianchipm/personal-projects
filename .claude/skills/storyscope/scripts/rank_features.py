"""Rank StoryScope features by how differently humans and AI models use them.

Regenerates the tables in ../reference/signals.md from the StoryScope data.

    git clone --depth 1 https://github.com/jenna-russell/storyscope.git
    pip install pandas pyarrow
    python rank_features.py storyscope                  # human vs all five models
    python rank_features.py storyscope --model claude   # human vs one model

For each feature, the score is the total variation distance between the
human and AI value distributions (0 = identical, 1 = no overlap). For each
feature the script also prints the value AI over-uses most and the value
humans over-use most.
"""
import argparse
import collections
import json
from pathlib import Path

import pandas as pd


def load_feature_meta(taxonomy_path):
    tax = json.loads(Path(taxonomy_path).read_text())["feature_taxonomy"]
    meta = {}
    for dim in tax.values():
        for aspect in dim["aspects"].values():
            for f in aspect["features"]:
                meta[f["id"]] = dict(dim=dim["dimension_name"], name=f["name"], type=f["type"])
    return meta


def value_shares(values, multi_select):
    counts = collections.Counter()
    for v in values:
        for x in (str(v).split("|") if multi_select else [str(v)]):
            counts[x.strip()] += 1
    return {k: c / len(values) for k, c in counts.items()}


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("storyscope_dir", help="path to a clone of jenna-russell/storyscope")
    ap.add_argument("--model", help="compare humans to one model (claude, gpt, gemini, deepseek, kimi)")
    ap.add_argument("--top", type=int, default=45)
    args = ap.parse_args()

    data = Path(args.storyscope_dir) / "data"
    meta = load_feature_meta(data / "taxonomy.json")
    df = pd.read_parquet(data / "storyscope_features.parquet")
    if args.model:
        df = df[df.source.isin(["human", args.model])]
    is_ai = df.source != "human"

    rows = []
    for fid, m in meta.items():
        if fid not in df:
            continue
        col = df[fid].astype(str)
        keep = col != "n/a"
        if keep.sum() < 1000:
            continue
        multi = m["type"] == "multi_select"
        human = value_shares(col[keep & ~is_ai].tolist(), multi)
        ai = value_shares(col[keep & is_ai].tolist(), multi)
        diffs = {k: ai.get(k, 0) - human.get(k, 0) for k in set(human) | set(ai)}
        score = sum(abs(d) for d in diffs.values()) / 2
        ai_up = max(diffs, key=diffs.get)
        human_up = min(diffs, key=diffs.get)
        rows.append((score, fid, m, ai_up, ai.get(ai_up, 0), human.get(ai_up, 0),
                     human_up, human.get(human_up, 0), ai.get(human_up, 0)))

    rows.sort(key=lambda r: r[0], reverse=True)
    print("| Score | Feature | AI over-uses | Humans over-use |")
    print("|---|---|---|---|")
    for score, fid, m, a, a_ai, a_h, h, h_h, h_ai in rows[: args.top]:
        print(f"| {score:.2f} | {m['name']} ({m['dim']}, `{fid}`) "
              f"| {a}: {a_ai:.0%} vs {a_h:.0%} | {h}: {h_h:.0%} vs {h_ai:.0%} |")


if __name__ == "__main__":
    main()
