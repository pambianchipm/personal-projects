# HOSTILE-INVESTOR GATE — G19, THE CHANNEL ROW (assumptions.md A47) — ROUND 1

CONFIDENTIAL — internal-audit class (law 8).

First breath: Player 2 is an AI marketing employee for small businesses; this verdict grades the one truth-table row (A47) that decides what its copy may claim per platform.

**VERDICT: FAIL (round 1).** Two MUST-FIX. Neither is a wrong grade — all seven grades re-derive from the paste exactly — but one is a law-4 disagreement live in the tree that the row itself declares closed, and one is a quotation that is not verbatim.

**Target:** `gtm/raise/model/assumptions.md`, row A47 only, at `9a814c8`. Re-derived by this reviewer:

```
$ date -u                                   # Mon Sep  7 23:37:57 UTC 2026
$ git rev-parse --short 9a814c8             # 9a814c8
$ git rev-parse --short HEAD                # b698b2d   (branch claude/b2c-mlp-ideas-gtm-76bs8z)
$ git show 9a814c8:gtm/raise/model/assumptions.md | grep "^| A47" | sha256sum
861be4f9e879ea552a5f60f0e7c199fe5e7a44409c3b92eb207488531fb75581  -
$ grep "^| A47" gtm/raise/model/assumptions.md | sha256sum
861be4f9e879ea552a5f60f0e7c199fe5e7a44409c3b92eb207488531fb75581  -
$ grep -n "^| A47" gtm/raise/model/assumptions.md | cut -c1-10      # 456:
$ git log -1 --format='%H %an %ad %s' --date=iso 9a814c8
9a814c8310f6c52a51b101894884c2280f2d40a8 Claude 2026-09-07 23:37:05 +0000 gtm shift 26: G19 — the channel row A47 written from the chief's paste …
```
Both hashes equal the hash the lock and the READY FOR REVIEW entry print. *Blind spot: `grep "^| A47"` proves the one line is unchanged; it says nothing about the legend lines the same commit added (`:164`, `:363`) — those are read below under law 4, not hashed.*

**FREEZE HONOURED.** `git log --name-only --format='%h %ad %s' --date=iso 9a814c8..HEAD` at 23:37:57Z returned exactly one commit — `b698b2d 2026-09-07 23:37:06 +0000 gtm shift 26: lock — second gate convened on A47 (G19)…` touching `gtm/org/lock.md` only. `git status --short` was empty. That is inside the two-file list. *Blind spot: the log proves nothing moved on this branch; it cannot see a working-tree edit made after 23:37:57Z and before the re-derivation at the foot of this file, which is why that block exists.*

**Fan-out: one independent hostile-investor reviewer, gate time only.**

---

## RESULT IN ONE LINE

**The seven grades are the document's, every line number is right, and twenty of twenty-three quotations reproduce to the character — but the row says the Reddit disagreement in `position-v2-the-hire.md` "was amended" at line 509 while lines 522, 1054 and 1158 of the same file still say `NOT CHECKED`, unstruck, one of them in the §6.2 column licensed to leave the file; and the Reddit cell is the one quotation that is not verbatim.**

---

## THE SEVEN GRADES, RE-DERIVED FROM THE PASTE

Instrument: `cat -n gtm/market/snapshots/2026-09-07-channel-readiness-from-clinkworthy.md` at 23:38:05Z; the grade is the last cell of each table row, read by me from the paste, not from A47. The row's cell is the bold headline at the start of A47's value cell.

| Platform | Paste line | The document's grade, in its words | The row's cell | Agree? |
|---|---|---|---|---|
| Instagram | 32 | `**SHIPPED**` | Instagram SHIPPED | YES |
| Facebook | 33 | `**SHIPPED**` | Facebook SHIPPED | YES |
| Meta ads | 34 | `**SHIPPED**` | Meta ads SHIPPED | YES |
| X | 35 (+ 82–83) | `**PARTIAL — verify before claiming**` | X PARTIAL | YES on the grade word; the headline drops the qualifier (SF-1); the full cell is quoted verbatim later in the same row |
| Reddit | 36 | `**BLOCKED on credentials**` | Reddit BLOCKED on credentials | YES |
| TikTok | 37 (+ 45–46) | `**SHELL ONLY**` | TikTok SHELL ONLY | YES |
| Google Ads | 38 (+ 52–54) | `**LABEL ONLY**` | Google Ads LABEL ONLY | YES |

The document's two summary sentences (paste 62–63, 67–68) name the same three as ✅ and the same two as ❌; the row quotes both. **Condition (b) is met: no grade in the row is one the document does not state, and none is stated differently.** *Blind spot: this re-derives the grades from the PASTE. It does not re-derive the document's sixteen code receipts against clinkworthy — see NOT CHECKED.*

---

## MUST-FIX

### MF-1 — LAW 4: the row declares the Reddit disagreement amended; three live lines of `position-v2-the-hire.md` still say `NOT CHECKED`, and the author edited that file in the target commit without touching them.

**Sentence at fault (A47):** *"Where the org's other artifacts disagreed — `position-v2-the-hire.md` once regraded Reddit `NOT CHECKED`; its channel table (line 509) was amended 2026-09-04 to the document's "BLOCKED on credentials" — this row is the anchor: the document's sentence governs."*

**What I ran, and what it returned** (23:42:31Z):
```
$ grep -n "NOT CHECKED" gtm/market/position-v2-the-hire.md      # Reddit-bearing hits:
475:> regraded **Reddit** to `NOT CHECKED` on the reasoning that …      (inside a > blockquote — historical, framed)
498:> **The Reddit row is regraded `NOT CHECKED`** — no credential-…     (inside a > blockquote — historical, framed)
509:| Reddit | **BLOCKED on credentials** … **AMENDED 2026-09-04 from `NOT CHECKED`.** …   (the amended table row the A47 sentence cites)
522:PARTIAL and unverified, **Reddit is NOT CHECKED** (regraded at the round-3   (LIVE prose, 13 lines under the amended table; no ~~, no ⚠, no >)
1054:| "Posts, replies and runs ads on Instagram and Facebook today. …" | … · **X or Reddit named at all** (X PARTIAL, Reddit **NOT CHECKED**) |   (LIVE — §6.2 "Sayable / not sayable")
1158:    that open (5 of 7 corroborated); **the Reddit grade is now NOT CHECKED**.   (LIVE — floor item 20, present tense)
$ for n in 475 498 522 1054 1158; do sed -n "${n}p" … | grep -c "~~\|^>"; done   # 1 1 0 0 0
$ grep -n "licensed to leave\|cascade column" gtm/market/position-v2-the-hire.md
55:the three that state the grade** — including §6.2's cascade column, which is
56:licensed to leave this file — …
$ git show 9a814c8 -- gtm/market/position-v2-the-hire.md    # two hunks: a ⚠ note after :537 and a ⚠ note at :1104 — neither touches :522, :1054 or :1158
$ sed -n '360,372p' gtm/market/copy/front-door-strings-v1.md
- Reddit's grade. `docs/channel-readiness.md:17` says BLOCKED-on-credentials;
  `position-v2` §6.2 says NOT CHECKED. **Two gated artifacts disagree and this
  file does not adjudicate them.**
```

**Why a gate-fail:** Law 4 — *"two artifacts stating different numbers for the same thing is a gate-fail for BOTH."* A47 states Reddit `BLOCKED on credentials`; `position-v2-the-hire.md` §6.2 (`:1054`, the column the file's own header says leaves the file through the cascade) and `:522` state `NOT CHECKED`. Neither is struck, neither carries a ⚠, and the file's own line 55 records that round 4 found the regrade *"had reached three narrative sites and none of the three that state the grade"* — the 2026-09-04 amendment fixed the table and left the prose, and A47's sentence repeats exactly that partial fix as if it were the whole. This is the law-4 corollary the chief wrote in on 7 Sep applied to itself: *the instrument that found the first answer (line 509) is not evidence the search was complete.* `front-door-strings-v1.md:365` has been saying out loud since 4 Sep that §6.2 disagrees; the row was written to be the anchor that adjudicates and did not look. **Both fail:** A47 for the sentence, `position-v2-the-hire.md` for the three lines.

**What it should say:** in A47, replace "its channel table (line 509) was amended 2026-09-04" with the true state at the fix commit — e.g. *"its channel table (`:509`) was amended 2026-09-04; its prose at `:522`, its §6.2 PROHIBITED column at `:1054` and floor item 20 at `:1158` still read `NOT CHECKED` and are amended in `<fix commit>` to this row's grade, with a dated ⚠ — grep count `NOT CHECKED` near `Reddit` before/after: 6 → 3 (the three inside blockquotes stay as history)"*. And amend the three lines in `position-v2-the-hire.md` (a correction to a claim-bearing sentence is a new draft — rule 1). `front-door-strings-v1.md:365` is CLOSED/SUPERSEDED by its own header, so a one-line ⚠ pointing at A47 is enough there (SF-3).

*Blind spot of my instrument: `grep -n "NOT CHECKED"` finds the literal string; a paraphrase ("unverified", "not established") that carries the same regrade would not appear. I read `:515–530`, `:1050–1058` and `:1140–1160` by eye and found none; the rest of the 1,160-line file was not read line by line.*

### MF-2 — CONDITION (a): the Reddit quotation is not verbatim — three of the document's five cells are replaced by an unbracketed "…".

**Sentence at fault (A47):** *"**Reddit** — "in the `Channel` union; **credentials still on Phin's list** \| … \| **BLOCKED on credentials**" (line 36)."*

**What I ran, and what it returned** (23:40:47Z): a script (`scratchpad/qcheck.py`) that extracts every `*"…"*` quotation from the A47 line, strips `**` and unescapes `\|` → `|` on both sides, collapses whitespace, and searches the paste joined into one line, reporting the paste lines a hit spans. Twenty-three quotations; twenty found exactly once at the row's stated lines; three not found. Of the three: the legend quote and the `SHELL_PLATFORMS` comment are not from the paste (see WHAT PASSED / NOT CHECKED). The Reddit cell:
```
NOT FOUND : in the `Channel` union; **credentials still on Phin's list** \| … \| **BLOCKED on credentials**
$ sed -n '36p' gtm/market/snapshots/2026-09-07-channel-readiness-from-clinkworthy.md
| **Reddit** | in the `Channel` union; **credentials still on Phin's list** | — | — | — | **BLOCKED on credentials** |
```
The row's "…" stands in for `— | — | —`.

**Why a gate-fail:** the rubric this gate runs under is condition (a) — the cell names the sentence it quotes — and the quotation standard the org has applied since the shift-14/15 gates (byte-exact; "one elided word" was a filed defect). The row treats `**`/`\|` as markup (fine, and every other platform row survives that treatment) but here it also drops content: the three em-dashes are the document saying Reddit has no read-back, no engagement and no ads path. TikTok's and Google Ads' `NONE`/`—` cells are quoted in full on lines 37–38; Reddit alone is cut. Nothing false is stated and the grade word is exact — this is the narrowest fail in the file — but a quotation that is not the sentence is not the citation condition (a) asks for.

**What it should say:** *"in the `Channel` union; **credentials still on Phin's list** \| — \| — \| — \| **BLOCKED on credentials**"* (line 36).

*Blind spot: my script normalises whitespace and strips bold, so a quotation that differs only in bold placement or line-wrap would pass it; that is the treatment the task allowed and I applied it uniformly. It cannot judge whether an elision is "material" — I judged that by reading the three dropped cells.*

---

## SHOULD-FIX

- **SF-1 — the X headline drops the document's qualifier.** Value-cell headline reads `X PARTIAL`; the document's grade cell (paste 35) is `PARTIAL — verify before claiming`, and 82–83 add *"do not promote it without tracing it."* The full cell is quoted verbatim later in the same row, so no grade is misstated — but law 4 says artifacts quote rows by ID, and a downstream artifact quoting the headline gets `PARTIAL` without the instruction. Carry the qualifier into the headline.
- **SF-2 — the chain from the paste (`3e24d43d`, file `5f0de311`) to the shift-24 re-derivation (`d4ae10d`) is by byte count, not hash.** `grep -rn "21abaa4c" gtm` (23:39:46Z) finds the hash only in the paste, A47, and the G19 status; the r2 verdict (`:173`) and the parent receipt (`:101`, `:503`) record `d4ae10d`'s copy as *"byte-identical (4,052 B)"* — size, never a digest. The row says *"what this row rests on is the paste's hash and the shift-24 gate's re-derivation at `d4ae10d`"*; the join between those two is an equal byte count plus the file's last commit predating `d4ae10d`. Probably identical; not shown. Name it in limitation (1).
- **SF-3 — `front-door-strings-v1.md:365`** still says *"two gated artifacts disagree and this file does not adjudicate them."* The file is CLOSED/SUPERSEDED by its own header; a dated ⚠ pointing at A47 keeps a reader from thinking the disagreement is still unowned.
- **SF-4 — the row does not state its scope, and four live artifacts state a different Instagram/Reddit capability that a reader will set beside it.** `risk-register.md:29` (R2) and `skeleton.md:252` say *"IG/TikTok signals secondhand pending API access"*; `ksp-funnel.md:224–227` bars implying *"firsthand IG/TikTok monitoring"*; `objection-bank.md:184`'s floor answer says *"It reads Reddit firsthand."* None of these is the document's fact — its four columns are Publish / Read back (metrics) / Engage / Ads on the connected account, and "signals" is Pulse's market-watching — so this is not a law-4 disagreement and I did not fail it. But A47 calls itself *"the law-4 anchor for every platform claim in copy"*, and *"reads Reddit firsthand"* is a platform claim in copy sitting next to `BLOCKED on credentials`. One clause naming the document's four columns as the row's scope, and naming R2 as the anchor for the signals claim, closes the seam.
- **SF-5 — `position-v2-the-hire.md:497`** (inside the framed blockquote) reads *"X publish ships; X engagement is tier-gated → PARTIAL"*. The frame above it (`:466–476`) amends only the Reddit grade. *"X publish ships"* is a stronger claim than the document's *"verify before claiming"*. Historical and quoted, so not a live disagreement — but the frame should say the X line is superseded too.
- **SF-6 — the legend quote is trimmed at both ends without marks.** The row quotes *"`channel-readiness.md` GRADES SOURCED — sixteen stated file-and-line receipts, all sixteen re-derived exact against the cloned code at `d4ae10d`"*; the legend (`:365`) reads *"**AND** `channel-readiness.md` GRADES SOURCED — … at `d4ae10d` **(2026-09-06)**."* Verified verbatim between those ends with `sed 's/\*\*//g' … | grep -F` (exit 0, 23:42:22Z). The dropped date is supplied by the row's own "(legend, 2026-09-06: …)". Fine as a fragment; say it is one.
- **SF-7 — law 5, file-level, not this row's.** The file's first breath (*"Player 2 is an AI marketing employee for small businesses; this file is the single table…"*) is at `:400–402`, after ~400 lines of legend. It is present, and the shift-15 verifier (`reviews/2026-09-03-shift15-position-r3-fresh-verifier.md:165`) accepted it there. The chief's 23:17Z item 4 puts a receipt's first breath on its first line; the truth table's is on its four-hundredth. Not failed here; noted for the chief.

---

## WHAT PASSED, WITH THE INSTRUMENT

- **The paste's own byte claim reproduces exactly** (23:38:14Z): `sed -n '20,$p' <paste> | wc -c` → **4052**; `sed -n '20,$p' <paste> | sha256sum` → **21abaa4cd0a0e30d5aa30594ecd051d5bd94490a9d5bf72f3fb10a758439afdb**; `tail -c 4052 <paste> | sha256sum` → the same. The slices that do NOT reproduce, so the boundary is unambiguous: from line 19 (the blank line under the rule) → 4053 B / `45b6f8f8…`; from line 20 without the final newline → 4051 B / `f9a9aed3…`; from line 19 without the final newline → 4052 B / `8e82adaf…` (same size, wrong bytes). Whole file 4,995 B, `c282d2fb…`, no CR bytes (`grep -c $'\r'` → 0), ends in `\n`. "Everything below the rule is the file, byte for byte" is true with "below the rule" meaning from the `# Channel readiness` heading, blank line excluded. *Blind spot: this proves the paste's body equals whatever the chief hashed; it cannot prove that was `origin/main:docs/channel-readiness.md` — the four commands were run in the chief's clone, not here.*
- **Twenty of twenty-three quotations verbatim at the stated lines** (script above, 23:40:47Z), each found exactly once — so no citation can be satisfied by two sentences: 62–63; 67–68; 32; 33; 34; 35; 82–83; 37; 45–46 (×2 uses); 38; 52–54; 26–27; 28; 81; 81–82; 84; 74–75; 85; 36 (`BLOCKED on credentials` alone). Treatment: `**` stripped, `\|` read as `|`, line-wraps collapsed. The row's "(line 80–85)" for the NOT CHECKED section and "(line 73–78)" for the blockers both match `cat -n`.
- **All seven grades agree** — table above.
- **The row's provenance facts match the paste's header:** `origin/main` = `3e24d43d180825a395a361f5e893c3dcd785f1f3` (paste :11); file last commit `5f0de311d89c748a573c062cf859d401e5777740 2026-09-03T19:53:52+00:00` (paste :13); retrieved 23:16Z (paste :3, :6); four commands (paste :6–:13). `git log -- <paste>` shows one commit, `7ecb276 2026-09-07 23:17:04 +0000`, the chief's 23:17Z inbox commit — consistent with "door opened by the paste, 23:17Z."
- **SOURCED fits the legend's definition** (`:277–278`: *"a document the org read, named"*): the document is named by path, in the tree, hashed, and read (`cat -n`). The grade cell names it; the value cell quotes it.
- **The row's provenance is exact:** `9a814c8` author/date `2026-09-07 23:37:05 +0000`, message names shift 26 and G19; `lock.md` records session v15 / shift 26; the UNGATED sentence is present verbatim and the legend (`:164`) and G19 status say the same.
- **Rule-2 register clean:** `grep -o -i` on the A47 line for fixed/checked/only/now true/verified/confirmed returns `CHECKED ×2` (both "NOT CHECKED" — the document's section and "were NOT re-derived") and `ONLY ×4` (the document's `SHELL ONLY`/`LABEL ONLY`). None about the author's own work.
- **Law 8 header present:** `assumptions.md:3` — `CONFIDENTIAL — internal-audit class (law 8).`
- **The limitations each carry an attempt or a source sentence:** (1) `add_repo` 23:23Z → denied, and an explicit "not re-tried" for `git clone` pointing at shift 25's recorded return (`ops-log.md:42–44`: *"could not read Username … terminal prompts disabled"*); (2) the document's own sentence at paste :28; (3) the document's NOT CHECKED at :80–85 under the STATED-LIMITATION clause; (4) cites gap list G19 and parent receipt §5, which is where the tension was logged (`…corpus-grade.md:426–429`, `gap-list…:598–602`). Nothing is filed as a limitation without a source or an attempt behind it; the "code may have moved since `5f0de311`" open item sits inside limitation (1) with the attempt that failed to close it — correctly placed under the attempt rule.
- **Law-4 sweep otherwise clean** (`grep -rn -i "tiktok\|google ads\|reddit\|shell only\|label only\|blocked on credentials\|partial" gtm/market gtm/raise --include=*.md`, 148 hits, 28 files, ops-log/inbox/lock/reviews excluded; every hit opened in context): `live-front-door-audit-2026-09-04.md:397–403, :739–742`, `position-v2-framing-v1.md:224`, `position-v2-the-hire.md:504–511`, `front-door-overhaul-receipts.md:431`, `front-door-strings-v1.md:321–324` all state the document's grades; their `channel-readiness.md:13–19` line numbers map to paste 32–38 (offset 19) and agree. The remaining hits are Adobe-survey "TikTok-active", Holo/Buy-editor competitor pages, objection-bank status words, and FEATURES-PARTIAL — none states a Player 2 platform grade.

---

## NOT CHECKED BY THIS VERDICT — the attempt behind each

- **The paste's four provenance commands** (`git show origin/main:docs/channel-readiness.md | wc -c`, `| sha256sum`, `git rev-parse origin/main`, `git log origin/main -1 … -- docs/channel-readiness.md`). Attempt: none possible — this box holds no clinkworthy clone (`ls /home/user` shows only `personal-projects`), and the gate brief bars `add_repo`, clone and fetch. What this verdict established instead is that the paste's body hashes to what the header claims. Whether `3e24d43d` was GitHub `main`'s tip at 23:16Z, or a stale `origin/main` in the chief's clone, is not knowable from here.
- **The document's sixteen code receipts at any commit.** Same attempt, same bar. The row rests on the r2 verdict's *"sixteen of sixteen resolve exactly at `d4ae10d`"* (`reviews/…r2.md:52–56`), which I read and did not re-run.
- **The `SHELL_PLATFORMS` code comment** *"Platforms we can publish to but not yet measure"*. Attempt: `grep -rn "not yet measure\|SHELL_PLATFORMS" gtm/org/reviews/` (23:42:26Z) → only the shift-15 verifier's `channel-data.ts:22` corroboration of `SHELL_PLATFORMS = ['tiktok']`; no reviewer has quoted the comment line itself. The row's fourth limitation rests on the parent receipt's reading, not on a gate's.
- **The `add_repo` denial at 23:23Z.** Attempt: `grep -n "23:2[0-9]Z\|23:23" gtm/org/ops-log.md` → no hit (shift 26's ops-log entry is not yet written; the attempt is recorded in the G19 status at `gap-list…:560–562` and in the row). It is stated as an attempt with a return, which is the rule's shape; I could not witness it.
- **`position-v2-the-hire.md` beyond the lines read.** Read: `:1–14`, `:45–80`, `:466–530`, `:1050–1058`, `:1100–1104`, `:1140–1162`, plus every `grep` hit for the sweep terms. The file is ~1,160 lines; a paraphrased regrade outside those windows would not have been seen.
- **`git clone` from this session.** Not attempted (barred by the brief), so the row's *"was not re-tried"* is neither confirmed nor contradicted here.

**Instrument of this verdict:** `git show`/`git log`/`git rev-parse`/`git status` on the frozen tree; `cat -n`, `sed -n`, `tail -c`, `wc -c`, `od -c`, `sha256sum` on the paste; a Python quotation matcher (`scratchpad/qcheck.py`) over the A47 line against the paste; `grep -rn -i` over `gtm/market` and `gtm/raise`; direct reads of the doctrine, `boss.md`, the legend, both inbox rulings, G19, the parent receipt §5 and the r2 verdict. Every time stamp is a `date -u` printed at the head of the command batch that produced the line. No external URL fetched, no repo added, no file in the tree edited but this one.

---

## FINAL RE-DERIVATION
```
$ date -u
Mon Sep  7 23:45:13 UTC 2026
$ git rev-parse --short 9a814c8; git rev-parse --short HEAD
9a814c8
b698b2d
$ git show 9a814c8:gtm/raise/model/assumptions.md | grep '^| A47' | sha256sum
861be4f9e879ea552a5f60f0e7c199fe5e7a44409c3b92eb207488531fb75581  -
$ grep '^| A47' gtm/raise/model/assumptions.md | sha256sum
861be4f9e879ea552a5f60f0e7c199fe5e7a44409c3b92eb207488531fb75581  -
$ sed -n '20,$p' gtm/market/snapshots/2026-09-07-channel-readiness-from-clinkworthy.md | sha256sum
21abaa4cd0a0e30d5aa30594ecd051d5bd94490a9d5bf72f3fb10a758439afdb  -
$ git log --name-only --format='%h %ad %s' --date=iso 9a814c8..HEAD
b698b2d 2026-09-07 23:37:06 +0000 gtm shift 26: lock — second gate convened on A47 (G19), target frozen at the READY FOR REVIEW commit

gtm/org/lock.md
$ git status --short   (expected: only this verdict file, untracked)
?? gtm/org/reviews/2026-09-07-shift26-g19-channel-row-hostile-investor-r1.md
```

Target unchanged before and after this review; the only tree difference is this file. **FAIL (round 1), 2 MUST-FIX, 7 SHOULD-FIX.**
