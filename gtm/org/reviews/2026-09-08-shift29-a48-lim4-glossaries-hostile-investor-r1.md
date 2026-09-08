# HOSTILE-INVESTOR GATE — A48 LIMITATION (4), THE SHIFT-29 RE-DRAFT FROM THE BUREAU'S TWO GLOSSARIES (assumptions.md A48 from *"Both directions"* to *"...counted by both programs."*; slide 4 §4's two re-drafted pieces; the shift-29 receipt, documents and two instruments; the status-only edits on A44 / A46 / A48's tail / slide 4's header / G16) — ROUND 1

CONFIDENTIAL — internal-audit class (law 8).

First breath: Player 2 is an AI marketing employee for small businesses; this verdict grades, at round 1 of two under AS-1, the re-draft of the one cell pulled at shift 28's round 2 — the sentences that map Phin's words "one person business" onto the Census category A48 counts — now written from the two Bureau glossaries the chief named as its documents (inbox 2026-09-08T14:59Z, item ii), with its quantifier required to be a bound or absent.

**VERDICT: FAIL (round 1). Two MUST-FIX, eight SHOULD-FIX.** Every pasted output in the receipt re-runs byte-identical (the extractor reproduces both extracted texts to the hash; the sixteen `sed -n` lines, the `grep -n`, the `cbp23us.zip` re-fetch and the bound instrument's fourteen output lines — all identical); every quoted glossary phrase is present once in the raw HTML; my own `awk` on the file re-derives 248,211 / 152,447 / 740,236 / 86,265 / 60,802; the bound's logic holds; the quantifier rule is met. The two fails are both sentences that say MORE than the two glossaries say — one contradicted by the glossary's own LFO list and by the receipt's own §3 table, one attributing a table figure to a segment the truth table says has no matched count — and both sit in the two mirrors alike, so law 4 holds between them and both are wrong together.

**Target:** `e5130a4` (e5130a4d551aa6fb7d1d678afc70129abccca481). Re-derived by this reviewer:

```
$ date -u                                   # Tue Sep  8 15:13:19 UTC 2026 (first act 15:1xZ; final 15:16:54Z)
$ git rev-parse HEAD                        # 406d274111ae6ad43a28d07060b7c5418bce4594
$ git log --oneline -6                      # 406d274 (lock.md, convene) → e5130a4 (target) → 081062c (READY FOR REVIEW) → 92960a3 (documents) → bd1300e (claim) → 5bf21df (chief)
$ git rev-parse HEAD^                       # e5130a4d551aa6fb7d1d678afc70129abccca481 — HEAD's parent IS the target
$ git diff --stat e5130a4 HEAD              # gtm/org/lock.md | 11 +  — the only commit after the target
$ git status --short                        # (empty), at 15:13Z and again at 15:16:54Z before this file was written
$ for p in <the six lock.md paths>; do git show e5130a4:$p | sha256sum | cut -c1-16; done
92a813a074e04356  assumptions.md · 07c7778c5838fc89  slide-04 · 9e77d603b7a71667  gap-list · 53c71a2e02c82483  receipt
a7b25f973f2111b7  cbp .extracted.txt · 4b61dfa8676dd306  nes .extracted.txt      — all six EQUAL lock.md's prints
$ cmp <(git show e5130a4:<p>) <p>           # worktree == target for the two .py, two .raw.html, two .headers
```
The READY FOR REVIEW commit `081062c` sits immediately before the target in the chain; the three commits `081062c` / `e5130a4` / `406d274` share the second 15:10:02Z, so precedence rests on chain order, not the clock (SF-8). Documents landed at `92960a3` (15:06:30Z), before the draft. *Blind spot: `sha256sum` proves bytes; `lock.md`'s printed hash is taken as the convening record, as the freeze rule directs.*

**FREEZE HONOURED.** One commit after the target, `406d274`, `gtm/org/lock.md` only; no `ops-log.md` commit in `5bf21df..HEAD`.

**Fan-out: one independent hostile-investor reviewer, gate time only.**

---

## EVERY PASTE, RE-RUN AS PASTED (law 4's amendment)

| Paste (receipt §) | Run | Result |
|---|---|---|
| §1 `sha256sum` of the two `.raw.html`, two `.extracted.txt`, `html-extract.py` | 15:13:19Z, in `snapshots/` | `e27985be…` / `e39e8a0d…` / `a7b25f97…` / `4b61dfa8…` / `91c7177e…` — **identical** |
| §1 `wc -l -c` of both extracted texts | 15:13:19Z | `375 14709` / `334 10776` — **identical** |
| §1 `python3 2026-09-08-shift29-html-extract.py <raw> \| sha256sum`, both pages | 15:13:19Z | `a7b25f97…` and `4b61dfa8…` — **the extractor reproduces both extracted texts to the hash** |
| §1 `grep -c "<script"` both raw files | 15:13:19Z | 47 / 47 — **identical** |
| §2 sixteen `sed -n Np` lines, `cut -c1-260` | 15:15:45Z, each matched as a whole line in the receipt by `grep -F -x` | **all sixteen identical** (cbp 238/287/289/295/300/301/312/313/317/329; nes 242/258/263/271/278/288) |
| §2 `grep -n -i 'nonemployer\|paid employ\|…' \| cut -c1-120` | 15:15:45Z, `diff` against receipt lines 133–150 | **identical, 18 lines** |
| §3 `curl … cbp23us.zip; sha256sum; unzip; sha256sum cbp23us.txt` | 15:13:30Z, fresh directory `scratchpad/reviewer-r1/` | `HTTP 200 bytes 750265`; `3f9018f8…`; `1d8dbbfa…` — **identical to the paste and to the 4 Sep hash** |
| §3 `sha256sum …cbp-under5-bound.py` | 15:13:19Z | `db460ad2…` — **identical** |
| §3 `python3 …cbp-under5-bound.py` from the data directory | 15:13:31Z, exit 0 | 14 lines, `diff` against receipt lines 198–211: **IDENTICAL** |
| Every quoted glossary phrase against the RAW HTML (`grep -c -F`, nine CBP phrases, five NES) | 15:13Z | **each present exactly once** in its raw page; cbp:289's `"<5"` is `&quot;&lt;5&quot;` in the raw and unescapes as extracted; the page itself carries a stray `'` before *The "<5" size group* which the receipt's row 5 quote starts after — the page's typo, not the org's |

**My own re-derivation** — `awk -F, '{gsub(/"/,"")}'` on `cbp23us.txt` (col 2 `naics`, 3 `lfo`, 10 `est`, 17 `n<5` — read from the header by `head -1 | tr ',' '\n' | cat -n`), 15:16:12Z. *Recorded because it is the kind of thing the rules exist for: my first pass summed column 21 (a different size-class field) and printed 5,188,360 for `-`; a wrong column reads like a clean result. Re-run on column 17.*

| Figure | My result | Target's | Agree? |
|---|---|---|---|
| `n<5`, `lfo='-'`, six codes | 248,211 | 248,211 (A48, slide §4 ×1, receipt) | YES |
| `n<5` by letter: C 42,587 · Z 109,860 · S 54,609 · P 40,690 · N 306 · O 159 | as listed | receipt §3 table | YES |
| C+Z | 152,447 | 152,447 (A48, receipt) | YES |
| `est`, `lfo='-'`, six codes | 740,236 | 740,236 | YES |
| personal-care three: all forms / C+Z | 86,265 / 60,802 | receipt §3 | YES |
| LFO partition (letters sum = `-`) on `n<5` | exact ×6 | "True" | YES |
| **Size-class partition**: nine `n*` columns for `lfo='-'` summed | **740,232 vs est 740,236** | not tested by the instrument (SF-7) | — the cbp:289 "slight difference" |
| Digits and grades between A48 lim (4) and the two slide pieces (law 4) | 248,211 · 740,236 · 0.2× · `<5` · "no fraction … stated" / "No fraction on either side is measured" · the same three-way mapping | one value each, both files | YES |
| `$` on added lines, whole diff `5bf21df..e5130a4` (raw HTML / extracted text excluded) | only `$1,000` / `$1` inside the quoted Bureau definition (receipt ×4, A48 ×1), A48's pre-existing `$25,000` / `$10,000` bands, and shell `$ ` prompts | none of the org's | YES |
| Rule-2 words on added lines and in the four commit messages (`fixed / now true / checked / only`) | `only` hits are the instrument's docstring ("Prints only what it computed" — true by reading the script: the code lists `SIX` and `LFOS`, types no figure) and pre-existing A44/A46 text; no `fixed`, `now true`, `checked` | — | YES on the letter; **"read in full" ×3 is the spirit (SF-3)** |

---

## WHAT PASSED, WITH THE INSTRUMENT

- **The documents are real, hashed, and the extraction is reproducible** — the extractor re-run on the retained raw HTML gives the retained extracted text to the byte, both pages; every phrase the re-draft quotes is in the raw HTML once (`grep -c -F`), so nothing rests on the extractor's judgment. *Blind spot: one fetch each; whether a later fetch's extracted text is stable was not tested by me either (I did not re-fetch census.gov's pages — the receipt says the raw bytes vary and it would have proved nothing about the content the org holds).*
- **The sixteen quoted lines are definitions, not menu items.** I read cbp 230–335 and nes 225–295 (`cat -n | sed -n`), the whole glossary body of each page: the cited lines all sit under glossary headings (Employment, Employment Size Class, Establishment, LFO, Nonemployer, Payroll; Firms or Establishments, LFO, Nonemployer, Receipts Size Class), and the footers are the pages' own revision dates.
- **The bound's logic holds.** cbp:289: class is set by mid-March paid employment, and the `<5` group also takes zero-in-March-but-wages-in-year establishments. An establishment whose only paid employee is its owner-officer has mid-March employment 1 or 0 → `<5` either way; distinct one-person businesses occupy distinct establishments; so their number on the six codes ≤ the published `n<5` — **248,211 is a valid upper bound**, and it is called one at every site ("An upper bound, not an estimate"; "an upper bound that also holds every two-to-four-employee shop"). It does not become an estimate anywhere in the drafts. The C+Z figure is qualified at A48 and receipt §3(b) as resting on a letter-code reading neither glossary defines.
- **The quantifier rule.** The only quantities in the re-draft are the two bounds and "0.2×" (a table figure); "no fraction … is measured, and none is stated" appears at both sites. Slide's "part of the customer" is an existence claim with its size disclaimed in the next sentence (SF-8, a note).
- **Law 4 between the three sites** — the same mapping (incorporated + salaried officer → CBP; sole proprietor → cannot be own employee; floor / taxes → neither), the same bound, the same disclaimer of fractions; A44's pointer now points at text that exists.
- **The status-only edits say no more than the chief's 14:59Z entry**: "CONFIRMED … item (i)" and "re-drafted at shift 29 … its own gate" at A44, A46, A48's tail, slide line 70, G16 line 314 — each matches items (i) and (ii). **Nothing else on slide 4 moved**: `git diff 5bf21df e5130a4 -- slide-04…` is exactly three hunks (line 70; §4 lines 269–281; §4 lines 316–327). **A48 is byte-identical between `046da44` and `5bf21df`**, and the word-diff `5bf21df..e5130a4` on the row touches only the banner-to-pulled-text region and the last sentence.
- **Both round-2 MUST-FIX are answered in form**: MF-1's "most" is gone and no fraction is stated; MF-2's definitions now cite lines of hashed documents, not a verdict.

---

## MUST-FIX

### MF-1 — *"below the floor, or not subject to federal income taxes, a one-person business is in neither program"* states more than the glossaries say, and the CBP glossary and the receipt's own table say otherwise (law 2; the chief's 14:59Z item ii — the documents are the two glossaries; boss.md gate criterion "an objection the artifact cannot answer").

**Where:** `gtm/raise/model/assumptions.md:457`, A48 limitation (4): *"…is a nonemployer; below the floor, or not subject to federal income taxes, a one-person business is in neither program."* Mirrored at `gtm/raise/deck/slide-04-market-size-v1.md:321–322`: *"and below the Bureau's receipts floor, or not subject to federal income taxes, a one-person business is in neither program."* On the slide it is the third of three semicolon-separated cases and reads generically; at A48 it follows the unincorporated case but names "a one-person business" without restriction.

**What the source says.** The receipts floor and the tax condition are NES's conditions only (nes:271; cbp:312). CBP's establishment count is *"the number of locations with paid employees any time during the year"* (cbp:295) — no receipts floor, no tax condition. And CBP's LFO list includes *"Non-profit — … Most non-profit organizations are exempt from income taxes"* (cbp:302). So a one-person business with a paid employee (its salaried officer) below $1,000 of receipts is in CBP; a one-person non-profit with its one person on payroll — "not subject to federal income taxes" — is in CBP. The receipt's own §3 table prints **N = 306** establishments in the `<5` class on the six codes under exactly that LFO. The sentence is true only for a one-person business **with no paid employee**, which is what the pulled text's replacement was supposed to make explicit. Direction of error: it moves tax-exempt and sub-floor employers out of the employer side the same sentence is trying to size.

**Instrument:** `sed -n 295p; sed -n 302p; sed -n 312p` on the CBP extract; `sed -n 271p` on the NES extract; the receipt's §3 table, N column, re-derived by my `awk` (306). *Blind spot: whether a business with an `N` LFO in CBP is "one person" is not in the file; the objection is definitional — the glossary places it in CBP — not a count.*

### MF-2 — *"the positioning's own examples include restaurants and gyms, which are 0.2× nonemployer in the table above"* attributes a table figure to a segment the same slide and A48 say has no matched count (law 2; law 4 — the truth table says the figure cannot be stated, the slide states it).

**Where:** `slide-04-market-size-v1.md:274–275`, inside the re-drafted clause (from the colon at 269 to `046da44`.)* at 281 — the piece under review). The words were carried over from the pulled clause; under rule 1 the re-draft is read as if nobody had checked them, and nobody had (round 2 read the same words for "large" and did not see this).

**What the source says.** The table above (slide 242–250) has six rows: three personal-care codes and three food codes. Gyms are `713940`; A48 limitation (1): *"No NES six-digit row exists for `812199`, `713940`, `311811` or any `448*` class"*; slide §4's own reason (1): *"a matched nonemployer count exists for six of the eighteen classes and no more."* Restaurants are 0.2× in the table; gyms are not in the table at all, and no NES figure for them exists in the org's files (round 2 re-derived that absence at every cut; I did not re-run it — the claim here is about the table on the slide, read by eye at lines 242–250). A diligence reader who checks the table against the sentence finds a segment invented into it.

**Instrument:** `sed -n 242,250p` and `sed -n 274,275p` on the slide at the target; `grep -c 713940` on the table lines → 0. *Blind spot: none needed — the table is on the same slide.*

---

## SHOULD-FIX

**SF-1 — The tighter figure drops the `N` and `O` legal forms without a glossary reason.** Receipt §3(b) excludes `S` and `P` from the tighter bound on rows 3, 6, 7, 8 (a proprietor or partner cannot be their own paid employee) — sound — and says nothing about `N` (306) and `O` (159), which nothing in either glossary excludes (a non-profit's one person can be its paid employee). As written at A48 the figure is scoped ("on the two corporate forms alone"), so it is a bound on a sub-population, not a fail; but the receipt's framing ("the tighter figure … `S` and `P` are excluded") invites reading it as the bound on the whole population after exclusions, which would be C+Z+N+O = **152,912** (my `awk`). Lands: receipt §3(b); A48's "at most 152,447 on the two corporate forms alone" is true as scoped.

**SF-2 — *"inside CBP and A42's base"*: A42 is SUSB 2022 firms under 20 employees, and neither glossary defines SUSB's scope.** cbp:292 only says *"For statistics at the enterprise level, refer to Statistics of U.S. Businesses"*. The pointer rests on the org's own sentence in the 4 Sep receipt line 118 (*"CBP and SUSB cover employer businesses only"*) and on the six codes sitting inside A40's eighteen (they do — A40's personal-care and food segments; 4 Sep receipt rows 69/77/126/131). A row whose documents are the two glossaries should either cite that receipt for the SUSB half or say "inside CBP (and, by the 4 Sep receipt's reading of SUSB, A42's base)". Lands: A48 lim (4), one clause; slide's "already inside step 3" has the same dependency.

**SF-3 — "read in full" ×3 is a claim about the author's own work in rule 2's shape.** A48: *"Documents, fetched, hashed and read in full BEFORE this draft was written"*; inbox 15:10Z: *"headers retained, read in full"*; receipt §0/intro: *"nobody in this org had hashed or read in full"*. No instrument can grade it; what a reader CAN grade is the cited range (cbp 238–329, nes 242–288, and the nes:235 FAQ sibling noted in §4), which is the whole glossary body of each page by my own read. Write the range read, with what (`cat -n | sed -n 230,335p`), and drop the phrase. Lands: A48, receipt intro; the inbox entry is outside the freeze and is noted only.

**SF-4 — Two present-tense sentences describe the pulled state that no longer exists.** A48's tail, unchanged: *"limitation (4)'s converse and its quantifier are PULLED under the banner"* — there is no banner in the row now, and the same cell's last sentence says the re-draft is IN-GATE. Slide line 237, unchanged: *"SPLIT at round 2 — the two pulled pieces are marked below"* — no marks remain below. Both are history written as present tense; a dated "was" or a strike fixes each. Lands: A48 tail (status text); slide §4's italic intro line.

**SF-5 — "Unincorporated" is used in the glossaries' LFO sense and the draft does not say so; the receipt §4 list of what the glossaries do not settle is one item short.** cbp:300–301 define Sole Proprietorship and Partnership as "an unincorporated business"; cbp:287/317 exclude "sole proprietors and partners of unincorporated businesses" from paid employment/payroll. So *"an unincorporated one cannot put its owner on payroll"* is true of those two LFOs. Neither glossary says where an LLC — unincorporated under state law, a corporation for tax on election — is assigned (cbp:297: LFO "is derived from administrative records data sources"), and a reader who owns an LLC taxed as an S-corp will object. Likewise *"outside NES"* leans on NES's undefined *"paid employees"* (nes:271) meaning CBP's *"paid employment"* (cbp:287) — receipt §4's first bullet names the mid-March timing gap but not this definitional one. Lands: receipt §4, two bullets; A48 one parenthetical ("unincorporated — the glossaries' sole proprietorship and partnership").

**SF-6 — Two sentences a notch wider than their lines.** *"Whether its one person is a paid employee turns on legal form"* — it turns on legal form AND on whether the officer is salaried (the next sentence and the slide's "owner off the payroll" carry the condition; this sentence alone does not). *"one person filing two business returns is two nonemployers"* — only if each return meets the definition (floor, taxes); nes:258 licenses "two firms". Lands: A48 lim (4), two clauses.

**SF-7 — The size-class partition was not tested and is not exact.** The instrument's printed check is the LFO partition of `n<5` (exact ×6). Summing the nine size-class `n*` columns for `lfo='-'` on the six codes gives **740,232 against `est` 740,236** — the *"slight difference"* cbp:289 warns of (class from pre-noise employment; totals noised). It does not disturb a bound stated on the published `n<5` cell, but the receipt §3(c) says "the class partition check printed above is arithmetic, not proof of the class boundaries" — the check that WAS printed is a different partition. Lands: receipt §3(c), one sentence naming which partition was checked and that the other is off by four.

**SF-8 — Notes, no re-draft required.** (a) `081062c`, `e5130a4`, `406d274` share the second 15:10:02Z; "committed immediately before the target" is true by chain order and unverifiable by clock. (b) Slide 272: *"excluded by construction part of the customer"* — "part" is an existence claim, licensed by the definitions and disclaimed in size at 273; under a stricter reading of "bound or absent" it is neither, and "some of" would be no better; noted, not failed. (c) The 4 Sep receipt line 118 — the sentence SF-2 leans on — is an org sentence with no Bureau line under it; if SF-2 is applied by citation, that receipt inherits the gap.

---

## VERDICT: FAIL, 2 MF / 8 SF

Under AS-1 this is round 1 of two. Both MUST-FIX are single sentences (one mirrored) and neither is a figure; what a correct sentence would have to rest on: MF-1 — cbp:295 and cbp:302 read together with nes:271, so that the "neither program" case is restricted to a one-person business with no paid employee; MF-2 — the six rows of the table on the slide, so that the 0.2× is attached to restaurants only, or gyms are named as a positioning example with no matched count (A48 limitation 1). Rule 1: each is a new draft, re-read against the lines, including its neighbours — the slide's three-case sentence and A48's are the same sentence twice and must move together (law 4).

---

## NOT CHECKED BY THIS VERDICT — the attempt behind each

- **census.gov's two glossary pages were not re-fetched** — the receipt says the raw bytes vary fetch to fetch; the org's retained raw HTML was verified against the extractor and the quotes instead. Whether the live page today differs in content is unknown to me.
- **The NES FAQ, NES methodology and CBP methodology pages** — not opened by the boss or me; receipt §4 says so. They could qualify "paid employees" (SF-5) or the mid-March de-duplication.
- **The A48 figures outside limitation (4)** (1,409,898 / 1,276,010 / 96.6% / 57.3% …) — not re-derived; round 2 re-derived them and the row is byte-identical `046da44..5bf21df` with the word-diff confined to the re-draft and the tail.
- **The absence of an NES row for `713940`** (MF-2's premise) — taken from A48 limitation (1) and round 2's re-derivation, not re-run on the NES file this round.
- **Slide 4's seven round-1 MUST-FIX** — out of scope; the slide diff shows three hunks and nothing else moved.
- **Whether `C`/`Z`/`N`/`O` mean what the receipt reads them as** — undefined by both glossaries, as the receipt says; not resolved by me.
- **The inbox entry's wording and the ops-log** — read for rule 2 only; not graded (outside the freeze).

---

## FINAL RE-DERIVATION

`date -u` → `Tue Sep  8 15:16:54 UTC 2026`; `git rev-parse HEAD` → `406d274111ae6ad43a28d07060b7c5418bce4594`; `git status --short` → empty before this file; the six target digests as printed at the top. This file is the only path this reviewer wrote; scratch (zip, extracted `cbp23us.txt`, paste diffs) lives in `scratchpad/reviewer-r1/`, outside the repo. Not committed; not pushed; no other file touched; no branch switched.

Verdict written 2026-09-08, one hostile-investor reviewer, gate time only.
