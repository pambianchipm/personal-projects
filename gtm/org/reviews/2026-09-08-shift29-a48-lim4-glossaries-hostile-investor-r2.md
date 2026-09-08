# HOSTILE-INVESTOR GATE — A48 LIMITATION (4), THE SHIFT-29 RE-DRAFT FROM THE BUREAU'S TWO GLOSSARIES, WITH ROUND-1 MF-1, MF-2 AND SF-1–SF-7 APPLIED AS NEW DRAFTS (assumptions.md A48 from *"Both directions"* to *"...counted by both programs."* and the row's tail; slide 4 §4's two re-drafted pieces and its italic intro line; the shift-29 receipt §0/§3b/§3c/§4, its documents and two instruments) — ROUND 2, THE LAST UNDER AS-1

CONFIDENTIAL — internal-audit class (law 8).

First breath: Player 2 is an AI marketing employee for small businesses; this verdict grades, at round 2 of two under AS-1, the one cell pulled at shift 28's round 2 — the sentences mapping Phin's *"one person business"* onto the Census categories A48 counts — now written from the two Bureau glossaries (chief, inbox 2026-09-08T14:59Z item ii), quantifier a bound or absent, with round 1's ten findings applied. A fresh reviewer; I did not write round 1.

**VERDICT: PASS. No MUST-FIX; five SHOULD-FIX.** Both round-1 MUST-FIX are closed on the source, not reworded: the "neither program" case is now restricted to a business with no paid employee and CBP's side is carried by cbp:295's own words and the cbp:302 non-profit form; the 0.2× sits on restaurants alone and gyms carry A48 limitation (1)'s absence. Every pasted output re-runs identical at `0f16c8c` — the retained hashes, the extractor to the byte, the sixteen `sed -n` lines, the `grep -n`, the `cbp23us.zip` re-fetch to the 4 Sep hash, the bound instrument's fourteen lines and the new §3c size-class paste — with one exception that is bytes, not text (SF-2). No sentence in the re-draft moves a population across the CBP/NES line beyond what the two glossaries license; the one over-statement I found (SF-1) is a parenthetical whose operative claim holds for both forms it names and which moves no figure.

**Target:** `0f16c8c` (0f16c8c09bca03fe1c77ca78de436863fc9ef076). Re-derived by this reviewer:

```
$ date -u                              # Tue Sep  8 15:23:05 UTC 2026 (first act); final check 15:29:38Z
$ git rev-parse HEAD                   # 12f861ebd11dfad6b5465386f2a18552579a7e2d
$ git log --oneline -8                 # 12f861e (lock.md, convene r2) → 0f16c8c (TARGET) → ab24de9 (READY FOR REVIEW r2) → 5c47f4b (r1 verdict) → 406d274 → e5130a4 (r1 target) → 081062c → 92960a3
$ git rev-parse HEAD^ ; git rev-parse 0f16c8c^        # 0f16c8c… — HEAD's parent IS the target; the target's parent IS ab24de9
$ git diff --stat 0f16c8c HEAD         # gtm/org/lock.md | 8 +  — the only change after the target; no ops-log.md commit in 5bf21df..HEAD
$ git show --stat 0f16c8c              # slide-04 (17), assumptions.md (2), the shift-29 receipt (72) — three files, 15:22:06Z
$ for p in <the three lock.md round-2 paths>; do git show 0f16c8c:$p | sha256sum | cut -c1-16; done
251bb9f15af9cb66 assumptions.md · 6d245e40a04e1008 slide-04 · 2b708518bb58c5c7 receipt   — all three EQUAL lock.md's prints
$ git show 0f16c8c:<gap list, both .extracted.txt> | sha256sum      # 9e77d603… / a7b25f97… / 4b61dfa8… — unchanged from e5130a4, as lock.md says
$ git diff --stat 0f16c8c -- gtm/raise ; git status --short          # both empty: worktree == target; nothing modified at 15:23Z and 15:29Z
```
*Blind spot: `sha256sum` proves bytes; lock.md's printed hash is taken as the convening record, as the freeze rule directs.*

**FREEZE HONOURED.** One commit after the target, `12f861e`, `gtm/org/lock.md` only.

**Fan-out: one independent hostile-investor reviewer (fresh for round 2), gate time only.**

---

## EVERY PASTE, RE-RUN AS PASTED (law 4's amendment) — at `0f16c8c`, not carried from round 1

| Paste (receipt §) | Run | Result |
|---|---|---|
| §1 `sha256sum` of two `.raw.html`, two `.extracted.txt`, `html-extract.py` | 15:24:49Z, `snapshots/` | `e27985be…` `e39e8a0d…` `a7b25f97…` `4b61dfa8…` `91c7177e…` — **identical** |
| §1 `wc -l -c` both extracted texts | 15:24:49Z | `375 14709` / `334 10776` — **identical** |
| §1 extractor re-run on both raw pages `\| sha256sum` | 15:24:49Z | `a7b25f97…` / `4b61dfa8…` — **reproduces both extracted texts to the hash** |
| §1 `grep -c "<script"` | 15:24:49Z | 47 / 47 — **identical** |
| §1 `head -3 <.headers>; grep -i …` (lines 50–53, 55–58) | 15:26Z, `cat -A` and `cmp` | **text identical, BYTES DIFFER**: the `.headers` files (unchanged since `92960a3`) are CRLF and the command prints `^M`; the paste at `e5130a4` carried the `^M` (cmp: identical) and the paste at `0f16c8c` does not (cmp: differ at char 36, line 1). Not listed in the 15:22Z READY FOR REVIEW. → SF-2 |
| §2 sixteen `sed -n Np … \| cut -c1-260` | 15:24:49Z, each matched as a whole line by `grep -F -x` | **all sixteen identical** |
| §2 `grep -n -i '…' \| cut -c1-120` | 15:24:49Z, `diff` against receipt 135–152 | **identical, 18 lines** |
| §3 `curl … cbp23us.zip; sha256sum; unzip; sha256sum cbp23us.txt` | 15:23:49Z, fresh `scratchpad/reviewer-r2/` | `HTTP 200 bytes 750265`; `3f9018f8…`; `1d8dbbfa…` — **identical to the paste and to the 4 Sep hash** |
| §3 `sha256sum` of the bound instrument | 15:24Z | `db460ad2…` — **identical** |
| §3 `python3 …cbp-under5-bound.py` on the fresh `cbp23us.txt` | 15:24:58Z, exit 0 | 14 lines, `diff` against receipt 200–213: **IDENTICAL** |
| §3c `sizeclass.py` (script taken from the paste, lines 249–259) on the fresh file | 15:24:58Z, exit 0 | `740232 vs est 740236 difference 4`, twelve `N` cells listed — `diff` against line 260: **IDENTICAL** |
| My own `awk` on col 17 (`n<5`) / col 10 (`est`), header read by `cat -n` | 15:24:58Z | `-` 248,211 · C 42,587 · Z 109,860 · S 54,609 · P 40,690 · N 306 · O 159 · est 740,236 · C+Z 152,447 · C+Z+N+O 152,912 — **all agree with the receipt and A48**; `713940` has a CBP row (est 41,556) and none in the slide table |

---

## EACH ROUND-1 FINDING, CLOSED OR NOT, WITH THE INSTRUMENT

| Finding | Applied sentence | Read against | Status |
|---|---|---|---|
| **MF-1** (neither-program case too wide) | A48: *"…is an employer … inside CBP … and outside NES, whatever its receipts or tax status: CBP's count names no receipts floor and no tax condition (cbp:295 states neither), and its legal forms include the non-profit, 'Most non-profit organizations are exempt from income taxes' (cbp:302)"*; *"…so with no paid employee it is a nonemployer if it meets the floor and is subject to federal income taxes, and otherwise is counted by neither program"*. Slide 318–327 the same three cases, "neither" restricted to *"with no paid employee"* | `sed -n 295p; 302p; 312p` cbp; `271p` nes. cbp:295 is the establishment-count sentence and its exclusion list (government establishments, ten named exceptions) — no receipts floor, no tax condition; "states neither" is a claim about that sentence, not about the program, and is true of it; cbp:302 is verbatim and is the positive half for tax. "Neither program" now requires no paid employee (not in CBP by cbp:295) AND below floor or not taxed (not in NES by nes:271) | **CLOSED** on the source, at both mirrors (law 4) |
| **MF-2** (gyms 0.2×) | Slide 275–277: *"restaurants, which are 0.2× nonemployer in the table above, and gyms, for which no matched nonemployer count exists (A48, limitation 1)"* | Table 242–250: three food rows 0.2×, no `713940` (`grep -c` → 0); A48 lim (1): *"No NES six-digit row exists for … `713940` …"* and the coarser `7139` row *"stands in for"* no class; 4 Sep receipt row 74 maps `713940` = Fitness and Recreational Sports Centers | **CLOSED** |
| SF-1 (N/O dropped without reason) | Receipt §3b: N, O *"outside that figure by its scope only"*, C+Z+N+O = 152,912; A48: *"the non-profit and other forms, 306 and 159 in the class, are outside it by scope, not by a glossary reason"* | 42,587 + 109,860 + 306 + 159 = 152,912, on the printed cells (line 208) and my `awk` | **CLOSED** (residual: SF-4 below) |
| SF-2 (A42 via SUSB) | A48: *"(and, by the 4 Sep receipt's reading of SUSB as employer-only, its line 118, inside A42's base)"* | `sed -n 118p` 4 Sep receipt: *"CBP and SUSB cover **employer** businesses only."* — says exactly that; attributed as a reading | **CLOSED** |
| SF-3 ("read in full") | A48 and receipt §0: the range (cbp 238–329, nes 242–288) and the instrument (`cat -n`) | word-diff: "read in full" gone from both; remains in the 15:10Z inbox entry and lock.md's CLAIMED line, outside the freeze | **CLOSED** on the artifact |
| SF-4 (present-tense pulled state) | A48 tail: *"were PULLED under a banner at `046da44` and are replaced by the shift-29 re-draft above"*; slide 237: *"were marked below at `046da44` and are re-drafted at shift 29, in their own gate"* | both true of the tree at the target | **CLOSED** |
| SF-5 (unincorporated; LLC; NES/CBP "paid employees") | A48 parenthetical; receipt §4 bullets 2–3 | cbp:300–301, 297; nes:271 / cbp:287 | **CLOSED in substance**; the parenthetical's "or" over-states cbp:301 → SF-1 below |
| SF-6 (two wider clauses) | *"turns on legal form and on whether that person is on the payroll"*; *"two business returns that each meet the definition"* | cbp:287 *"who are on the payroll"*; nes:258, nes:271 | **CLOSED** |
| SF-7 (size-class partition) | Receipt §3c paste, 740,232 vs 740,236, twelve `N` cells | re-run identical on the fresh file; cbp:250–251 `N` = "Not available or not comparable" | **CLOSED** |
| SF-8 (notes) | (a) no change needed; (b) "part of the customer" — see quantifiers below; (c) line 118 now cited as the receipt's reading | — | noted |

---

## WHAT PASSED, WITH THE INSTRUMENT

- **Rule 1 on every applied sentence.** I diffed the A48 row (`--word-diff`, `e5130a4..0f16c8c`) and the two slide hunks and read each changed token against its cited line and its neighbours: every quoted phrase in the re-draft (cbp:287 ×2, 289, 295, 302, 317; nes:258, 271) is verbatim in the extracted text at the cited line; "Construction" capitalised as NES writes it, cited to both nes:271 and cbp:312 with the receipt noting the case difference. The words that are neither the verdict's nor the source's are: *"and nothing else on either page"*, *"whatever its receipts or tax status"*, *"(cbp:295 states neither)"*, *"its legal forms include the non-profit"*, *"or partnership"*, *"the non-profit and other forms"*, *"conditions NES sets and CBP does not"* — each checked; two of them are SF-1 and SF-4.
- **No sentence states more than the two glossaries say in a way that moves a business across the line.** I read cbp 236–330 and nes 230–290 by `cat -n`. The three-way mapping — incorporated + salaried officer → CBP and outside NES; unincorporated → cannot be own employee; no paid employee + (below floor or not taxed) → neither — is licensed by cbp:287/295/317 and nes:271, and "outside NES" leans on NES's undefined *"paid employees"* being CBP's *"paid employment"*, which receipt §4 now names as unsettled. The slide's *"corporations and partnerships are among them"* rests on nes:261–262/264 (the NES LFO list), which is in the read range though not in the pasted sixteen (SF-3).
- **Law 4 between A48 limitation (4) and the two slide pieces after the mirror edits.** Same conditions (no paid employee; floor; taxed), same "neither" restriction, same 248,211 / `<5` / 740,236 / 0.2×, same "no fraction … stated" / "No fraction on either side is measured", same "whatever its receipts or tax status", the slide citing A48 limitation 4 at both pieces. The slide omits 152,447 and cbp:302; an omission, not a differing claim. The slide's *"CBP's definition"* is A48's *"CBP's count"* (cbp:295).
- **The bound.** Unchanged from round 1 and re-derived by me on a fresh file: 248,211 is the published `n<5` cell for `lfo='-'` on the six codes, every letter partition exact; it is called an upper bound at every site and never becomes an estimate. The only new figures are arithmetic on printed cells (152,912) and the size-class paste (740,232), each labelled as such.
- **Quantifiers.** The only quantities are the two bounds, the table's 0.2×, and figures the instruments printed (33.5% is the instrument's own line). *"Most non-profit organizations…"* is the Bureau's quoted word. Slide 272–273 *"excluded by construction part of the customer … How large a part is not measured"*: I agree with round 1's SF-8b — "part" asserts existence, not size, the next sentence disclaims size, and the existence is licensed by the table (1,409,898 nonemployers on codes the positioning names) — passed, not failed.
- **Rule 2.** `grep -i` for *fixed / now true / checked / only / read in full / verified* on every added line of `5bf21df..0f16c8c` outside raw HTML, extracted text and `reviews/`, and on the four commit messages: every `only` is a logical restriction ("nonemployer only when", "employer businesses only", the instrument's docstring) or pre-existing A44/A46 text (*"confirmed as the total by summing"* is at `5bf21df`); every CONFIRMED is the chief's ruling word; no *fixed / now true / checked* on an artifact line. "read in full" survives in the 15:10Z inbox entry and lock.md's CLAIMED line only (outside the freeze).
- **`$` on added lines** (`git diff 5bf21df 0f16c8c`, raw/extracted/headers excluded): `$1,000` / `$1` inside the Bureau's quoted definition (receipt ×4, A48 ×1), A48's pre-existing `$25,000` / `$10,000` bands, the r1 verdict's own text, and shell prompts — none of the org's.
- **Slide 4's seven MUST-FIX did not move.** `git diff 5bf21df 0f16c8c -- slide-04…` is four hunks: line 70's status sentence (item i and ii of the 14:59Z ruling, nothing more), the §4 intro line 237, and §4's two pieces (266–284, 314–333). Nothing else.
- **Status text.** A48's tail: *"round 1 FAIL 2 MF / 8 SF at `e5130a4`"*, the r1 file name, *"nothing else in this row moved from `046da44`"* — `git diff 046da44 0f16c8c -- assumptions.md` touches A44, A46 and A48 only, each a single row line; A48's word-diff is confined to the status pointer, the limitation (4) region and the tail.

---

## MUST-FIX

None.

---

## SHOULD-FIX

**SF-1 — *"An unincorporated one — the glossaries' sole proprietorship or partnership (cbp:300–301; …) —"* (`assumptions.md:457`, A48 limitation (4)) says a one-person business may be a partnership; cbp:301 defines a partnership as *"two or more persons join to carry on a trade or business"* (law 2; rule 1).** Round 1's SF-5 proposed *"sole proprietorship and partnership"* as a gloss on "unincorporated"; the applied draft wrote "or", which makes the parenthetical predicate the one-person business itself. The word that differs from the verdict's is the word that over-states — the exact shape rule 1 names. This is the finding closest to the MUST-FIX line and it is not one: the sentence's operative claim (*"cannot put its owner on payroll (cbp:287, 317)"*) is true of both forms, the case's outcome (nonemployer or neither) is unchanged, and no figure rests on it. Instrument: `sed -n 300,301p` on the CBP extract; the word-diff. *Blind spot: whether a one-person business in Phin's sense could file as a partnership (two owners, one working) is not something either glossary settles; the objection is to the sentence's letter against cbp:301.*

**SF-2 — The receipt §1 header paste (lines 50–53, 55–58) is no longer byte-identical to what its command prints, and the change is not in the 15:22Z READY FOR REVIEW list (law 4's amendment — *"paste only what you ran, re-runnable verbatim"*).** At `e5130a4` the paste carried the `^M` (CR) the CRLF `.headers` files print; at `0f16c8c` the CRs are gone (an editor's line-ending normalisation on the round-2 save, by the look of it). Visible text is identical in any rendering; the `.headers` files themselves are unchanged since `92960a3`. Named because the amendment's check is "fails … if the output differs" and a `cmp` does differ; not a MUST-FIX because the difference is invisible, the provenance is retained beside it, and it lives in the receipt's §1, not in the cell — a pull decision on the cell is unaffected either way. Instrument: `cat -A` on both versions and on the command's live output; `cmp`. *Blind spot: I did not test whether the other pasted blocks ever carried CRs; only §1's header lines come from CRLF sources.*

**SF-3 — Receipt §2's completeness sentence is stale after MF-1: *"Every sentence the re-draft states about either program is one of these lines or a plain consequence of two of them"* (receipt:95–96), but A48 now quotes cbp:302, which is not among the sixteen pasted lines.** cbp:302 is verbatim in the extract (I ran `sed -n 302p`), so the claim is true on the source and false on the receipt's index; likewise the slide's *"corporations and partnerships are among them"* rests on nes:261–264, not pasted. Lands: receipt §2 (one `sed -n 302p` paste and a table row, or a narrower sentence).

**SF-4 — *"the non-profit and other forms, 306 and 159"* (A48) and *"nothing in either glossary keeps a non-profit's one person off its payroll"* (receipt §3b) read the file's `N` and `O` letters as those forms, while the same A48 sentence says the `C`/`Z` reading *"neither glossary defines"* and receipt §3b says the seven-letter mapping is a blind spot.** The words came from round 1's SF-1; rule 1 applies to them too. Lands: A48 one clause; receipt §3b.

**SF-5 — Notes, smallest first.** (a) A48: *"the floor and the tax condition are NES's alone (nes:271)"* — "alone" is licensed by cbp:295's silence (stated one sentence earlier), not by nes:271, which is the cited line. (b) A48: *"and nothing else on either page"* beside receipt §4's citation of nes:235 (the FAQ nav item) — the receipt's own *"scrolled past as navigation and footer"* is the truer sentence. (c) Receipt §3c: *"the four may sit in suppressed cells"* — the glossary's `N` is *"Not available or not comparable"* (cbp:251), and `D` is the withheld code; the paste's own gloss *"(not available)"* is right. (d) Outside the freeze, noted only: the 15:22Z inbox entry's *"each re-read against its lines (rule 1)"* and the 15:10Z entry's *"read in full"* are rule-2 shapes; the 15:22Z entry's *"Same cell, same three files, same receipt"* omits SF-2's change.

---

## VERDICT: PASS

(0 MUST-FIX; 5 SHOULD-FIX — the shift-28 pattern applies: drafted by the boss after the verdict on the shipping text, each naming what was run, not re-gated.)

## WHAT THE SPLIT SHOULD BE

None — **the whole cell ships**: A48 limitation (4) from *"Both directions"* to *"…counted by both programs."* and the row's tail; slide 4 §4's clause (269–284), its closing paragraph (318–333) and the intro line 237; the shift-29 receipt, its documents and both instruments. If the boss reads law 4's amendment on bytes rather than text, SF-2's remedy is a re-paste of eight lines in receipt §1 and the cell still ships whole; if SF-1 is judged a pull, the smallest piece is the parenthetical *"— the glossaries' sole proprietorship or partnership (cbp:300–301; where an LLC is assigned, neither glossary says, receipt §4) —"* and nothing else — I do not recommend either.

---

## NOT CHECKED BY THIS VERDICT — the attempt behind each

- **census.gov's two glossary pages were not re-fetched** — the receipt says the raw bytes vary; the retained raw HTML was re-extracted to the hash instead. Whether the live content today differs is unknown to me.
- **The NES FAQ, NES methodology and CBP methodology pages** — not opened (receipt §4 says so). *"Cbp:295 states neither"* is an absence in one glossary sentence; a methodology page could add a receipts condition to CBP that the glossary does not carry, and the draft's *"names no receipts floor"* is a claim about the glossary sentence only, which is how it is written.
- **The meaning of *"subject to federal income taxes"*** — not interpreted by the draft or by me; nes:264 lists the S-corporation, *"where the entity does not pay any federal income taxes"*, as an NES legal form, so the phrase is not "pays". The draft repeats the Bureau's words without interpreting them; the one place tax status is used as evidence (cbp:302, "exempt") reads "exempt" as "not subject", which I accept.
- **A48's figures outside limitation (4)** (1,409,898 / 1,276,010 / 96.6% / 57.3% …) — not re-derived; the row's word-diff from `046da44` is confined to status text, limitation (4) and the tail.
- **The absence of an NES row for `713940`** — taken from A48 limitation (1) and shift 28's re-derivation; I confirmed only the CBP row exists and the slide table has none.
- **Whether `C`/`Z`/`N`/`O` mean what the receipt reads them as** — undefined by both glossaries; not resolved (SF-4 names the asymmetry, not the answer).
- **The inbox entries, lock.md and ops-log** — read for rule 2 only; not graded.

---

## FINAL RE-DERIVATION

`git rev-parse HEAD` → `12f861ebd11dfad6b5465386f2a18552579a7e2d`; `git status --short` → empty before this file was written (15:29:38Z); the three round-2 digests and the three unchanged digests as printed at the top. This file is the only path this reviewer wrote; scratch (zip, `cbp23us.txt`, paste diffs, `sizeclass.py` copied from the paste) lives in `scratchpad/reviewer-r2/`, outside the repo. Not committed; not pushed; no other file touched; no branch switched.

Verdict written 2026-09-08, one hostile-investor reviewer (fresh for round 2), gate time only.
