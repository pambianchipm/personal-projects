# HOSTILE-INVESTOR GATE — SHIFT 23, G18 CORPUS GRADE — ROUND 1

**VERDICT: FAIL (round 1).**

Target: `gtm/raise/model/snapshots/2026-09-05-shift23-g18-corpus-grade.md`
(reviewed at gtm HEAD `133885c`; the author committed four more times *during*
this review — `c0369da`, `287a7d0`, `c9bfd96`, `133885c` — so §3's channel count
moved from NINE to THIRTEEN under me. Findings below are against `133885c`.)
Clone under review: `/home/user/clinkworthy` @ `956028b4`.

**WHY FAIL AND NOT PASS-WITH-NOTES.** Every *mechanical* count in §2 reproduces
exactly. That is not where this breaks. It breaks in three places, and all three
run the same direction:

1. A §5 receipt states a defect in the graded document that **does not exist** —
   the "1-line drift" is the author's own off-by-one, and it is then re-used in
   NOT CHECKED as evidence the document may be stale.
2. The headline number — **"of eight gradeable claims, ONE holds"** — does not
   reconstruct from the artifact's own two tables, and the denominator was
   assembled by dropping every teardown claim the primary **confirms**.
3. The claim the whole "first-time finding" rests on — *"nobody in this org had
   opened `competitor-holo.md`"* — is refuted by a three-line **verbatim
   transcription** of that file sitting in a gated artifact in this tree.

Shift 22's filed lesson was that the direction of a finding predicts where its
evidence is weakest. All three of the above are the shift's most flattering
claims. §4 says the boss caught himself making that turn once. He made it three
more times in the same document and did not catch those.

---

## MUST-FIX

### MF-1 — §5 line 241: a receipt that does not reproduce, and it invents a defect in the document being graded

**File/line:** `gtm/raise/model/snapshots/2026-09-05-shift23-g18-corpus-grade.md:241`

> `| `replyToInstagramComment` `:359`, `replyToFacebookComment` `:372` | `console/lib/meta.ts:358`, `:371` | **PRESENT**, 1-line drift |`

**Instrument I used:** `grep -n 'export async function replyTo' /home/user/clinkworthy/console/lib/meta.ts` and `sed -n '357,359p;370,372p'` at `956028b4` — the same clone the artifact names.

**Result:**
```
126:export async function publishInstagramImage(
359:export async function replyToInstagramComment(
372:export async function replyToFacebookComment(
```
Line 357 is `}`. Line 358 is **blank**. Line 371 is **blank**.

`channel-readiness.md:13` says reply `:359`; `:14` says reply `:372`. Both are
**exact**. There is **zero drift**. The artifact reports reading these at 358
and 371 — two blank lines — and grades the result "PRESENT, 1-line drift."

**Why this is a MUST-FIX and not a typo.** The invented drift is then spent:
NOT CHECKED (line ~320) says *"the four spot-checks already show line drift"*
and uses it to cast doubt on whether `channel-readiness.md`'s grades are still
current. A defect that does not exist is being carried forward as a reason to
distrust the document. Under this org's own rule — *a result stated without its
instrument's blind spot is a claim, not a finding* — this is worse than a
claim: it is a finding pointing at the wrong file. **Three of four §5 receipts
resolve verbatim and exact; the fourth resolves exact and was written up as
drifted.**

**Blind spot of my instrument:** `grep -n` finds the `export async function`
line. If the author intended "the receipt points at the JSDoc block that opens
the function", that is a different convention and it is nowhere stated — and it
still would not be "drift", since the doc's numbers land on the declaration.

---

### MF-2 — §4 line 190: "of eight claims that can be graded at all" does not reconstruct from §4's own tables

**File/line:** `gtm/raise/model/snapshots/2026-09-05-shift23-g18-corpus-grade.md:190–191`

> **Running total against the primary: of eight claims that can be graded at all, ONE is confirmed.** Two more are unsupported and two remain not checked.

**Instrument I used:** hand-tally of the two tables at `:169–176` and `:182–188`.

| Table | Rows | Verdicts |
|---|---|---|
| Numeric (`:169–176`) | 6 | 1 CONFIRMED · 4 FALSE · 1 UNCONFIRMED |
| Capability (`:182–188`) | 4 rows / **5 claims** (the last row bundles Gap 2 *and* Gap 3) | 2 FALSE · 1 UNSUPPORTED · 2 NOT CHECKED |

Totals: **11 claims** — 1 CONFIRMED, 6 FALSE, 1 UNSUPPORTED, 3 UNCONFIRMED/NOT
CHECKED. The summary sentence says 1 + 2 unsupported + 2 not checked. **The
tables show exactly ONE row graded UNSUPPORTED, not two.** And "eight" only
reaches eight by counting 1 CONFIRMED + 6 FALSE + 1 UNSUPPORTED — in which case
the same sentence's "two remain not checked" is describing items *outside* the
eight, and "two more are unsupported" is still wrong.

There is no arithmetic that makes `:190–191` true of `:169–188`. **Either the
sentence or the tables is wrong and the reader cannot tell which.**

**Blind spot of my instrument:** a hand tally depends on whether the Gap 2 / Gap
3 row is one claim or two. It does not matter — neither reading yields the
stated sub-counts.

---

### MF-3 — §4 lines 161 / 190: the denominator was built by excluding every teardown claim the primary CONFIRMS

**File/line:** `gtm/raise/model/snapshots/2026-09-05-shift23-g18-corpus-grade.md:161` ("ONE OF SIX NUMERIC CHECKABLE CLAIMS") and `:190` ("of eight claims that can be graded at all")

**Instrument I used:** read `/home/user/clinkworthy/docs/competitor-holo.md`
(89 lines) in full against `gtm/market/competitors/snapshots/2026-09-03-holo-primary.md`
(348 lines) in full, claim by claim, at `956028b4`.

**No selection rule for "checkable" or "gradeable" is stated anywhere in §4.**
Applying the only rule §4 demonstrates — *a teardown claim the primary bears on*
— produces claims the artifact did not count, and **the omissions are one-directional:**

| Teardown | Primary | Verdict the artifact did not count |
|---|---|---|
| `:12–13` *"paste a website URL → 'Brand DNA' scans site/products/tone"* | `:57` *"Point Holo at your website and get launch-ready content for every channel"*; `:122` nav carries **Brand DNA** | **CONFIRMED** |
| `:15` static + carousel ad creatives | `:58` *"Done-for-you ad creatives"*; `:132` content chip **Carousel**; nav **Ads** | **CONFIRMED** |
| `:18` full email campaigns | `:58–59` *"Done-for-you emails"*, *"Klaviyo, Mailchimp"*; nav **Emails** | **CONFIRMED** |
| `:34` *"Pricing presentation is deliberately slippery (permanent sale framing)"* | `:25` billing toggle **6 months — "Save up to 41%"** + a standing promo column | **CONFIRMED** (and the org relies on it — "near-permanent promo column" is A15's own wording) |
| `:17` social posts *"(IG, FB, TikTok, LinkedIn, X)"* | `:60–61` integration logos: Instagram, TikTok, LinkedIn, **Snapchat, YouTube** — no FB, no X | **PARTLY FALSE** — never graded |
| `:40–41` *"trained on **10M** marketing assets + **19,000** high-performing ads"* | `:62–63` *"trained on high-performing ads from the world's leading brands"* — no figures | a **numeric checkable claim**, never graded, which alone falsifies "six numeric checkable claims" |
| `:22` *"Team: Lithuanian, ex-operators… VC-backed"* | `:107` entity **Holo AI Inc., Dover, Delaware** | never graded — and still carried live at `dossier-buy-holo.md:101` as **DIRECTIONAL**, sourced to this teardown |
| `:33` *"No free trial"* | not addressed | never graded |

**At minimum four additional teardown claims are CONFIRMED by the primary and
sit outside the denominator.** Counted honestly, the file is not "one of eight"
— it is closer to **five or more confirmed of twelve-plus**, with six false. The
teardown is a bad source. It is not the near-worthless source the headline
number describes, and the number that describes it that way is the number this
shift propagated into five artifacts and into the gap-list's answer to G18.

**This is precisely the shape shift 22 filed.** The excluded claims are all
confirmations; the retained claims are all failures; and the resulting ratio is
the one that makes this org's diligence look largest. §4's own honesty passage
(`:203–214`) catches one flattering turn and then ships this one uncaught.

**Blind spot of my instrument:** "what counts as a claim" is a judgement, and
mine is contestable. That is the point — **the artifact states no rule at all**,
so its denominator is unauditable. The fix is to publish the selection rule and
apply it symmetrically, or state the number as *"six FALSE findings"* and drop
the ratio.

---

### MF-4 — §4 line 197: *"nobody in this org had opened `competitor-holo.md`"* is refuted by a verbatim transcription in this tree

**File/line:** `gtm/raise/model/snapshots/2026-09-05-shift23-g18-corpus-grade.md:197`; propagated at `gtm/raise/model/assumptions.md:107–108`, `gtm/raise/deck/gap-list-2026-09-04.md:44` (*"which nobody in this org had read until then"*) and `:479–480`.

**Instrument I used:** `diff` of `competitor-holo.md:85–87` against
`dossier-buy-holo.md:316–318` with strikethrough markers stripped.

**Result: character-identical for the first two-and-a-half lines**, diverging
only where the dossier's strike-note begins:

```
"Holo generates 200 assets a month; nobody knows if any of them sold.
Player2 posts them, replies to the comments, tells you which one made money,
and gets smarter every week."
```

That is `competitor-holo.md`'s **"Positioning line"** section, transcribed
verbatim into a gated dossier. Nobody produces a three-line exact copy of a
file's closing section without opening the file. Corroborating, from the same
grep sweep:

- `gtm/market/positioning.md:112` cites *"`competitor-holo.md` BLUF"* by name.
- `dossier-buy-holo.md:101` carries the teardown's **Team paragraph** (`:22`) as a graded row.
- `assumptions.md:380` (A34) quotes the teardown's refund sentence (`:33`) verbatim.
- The dossier carried *"up to 10 brands"* — teardown `:19`, in the **"What it is"** section, not the pricing table.
- `2026-09-03-holo-primary.md:311–313` records *"the build org's backlog carries item 49, **'Swipe variants (the Holo steal)'**, from our own teardown"* — that is the teardown's **"steal list"** section, `:76–77`.

**The org has transcribed from at least six distinct sections of this file.**
The defensible sentence is *"no one had graded it"* or *"no one had read it
against a primary."* The sentence as written is a claim about org history with
**no instrument named and no evidence offered**, and it is the load-bearing
premise of the shift's proudest finding (`:196` *"Claims 2 and 3 are found here
for the first time, **because** …"*). Strike it or receipt it.

**Related, same line 198:** *"No live artifact carries 200/650 or a third plan,
so **no copy is wrong**."* The 200 figure **did** ship into the dossier's
positioning line and was struck on 3 Sep **for a different reason** ("they
measure"), not because 200 was false. Present tense makes the sentence survive
only because of a strikethrough. And `dossier-buy-holo.md:101` **still carries a
live, ungraded teardown claim today**. "No copy is wrong" is not supported.

**Blind spot of my instrument:** `diff` and `grep -rn` prove text identity, not
reading order — in principle the teardown could have copied the dossier. It
cannot: the teardown self-dates 19 Aug, the dossier is a shift-12/13 artifact,
and the dossier's own line 318 says *"**Struck 2026-09-03**"* of the inherited
sentence.

---

### MF-5 — §3 line 100: the instrument's receipt hash is for a file state this shift then overwrote, and the artifact does not say so

**File/line:** `gtm/raise/model/snapshots/2026-09-05-shift23-g18-corpus-grade.md:100`

> run against `assumptions.md` at SHA-256 `b469d60f…`, 53,970 B

**Instrument I used:** ran `gtm/raise/model/snapshots/2026-09-05-shift23-citescan.py`
against the shipped tree, and against every historical blob of `assumptions.md`.

```
shipped (HEAD):        a2c78a86…   61,161 B
18edb84 (pre-shift-23): b469d60f…   53,970 B
```

`b469d60f` / 53,970 B is `assumptions.md` **as of commit `18edb84`** — *before*
this shift's own two amendment commits (`de4c026`, `5943a6c`). The scan
reproduces **exactly** at that blob (I re-ran it there: same hash, same 48 rows,
same inverted index), so the number is honest. **But the receipt names a state
that no longer exists in the tree**, and nothing in §3 says the scan predates
the shift's own edits to the scanned file.

That matters concretely: at HEAD the A15 row now cites
`snapshots/2026-09-05-shift23-g18-corpus-grade.md` and
`gtm/market/competitors/snapshots/2026-09-03-holo-primary.md`, and Trustpilot
goes from 1 row to 2. **A reader who runs the filed instrument against the filed
table gets different output from the filed receipt, with no note explaining
why.** Shift 22 failed for letting one hash cover two states. This is the same
class, one degree milder.

**Fix:** re-run post-amendment and file both, or state plainly *"scanned at
`b469d60f`, which is `assumptions.md` before this shift's amendments; the
amendments add N citations to A15 and do not change the enumeration's
conclusions."*

**Blind spot of my instrument:** `git cat-file -s` / `sha256sum` prove which
blob matches; they cannot prove the author knew. Nothing here alleges intent.

---

### MF-6 — §3 line 113: *"`competitor-holo.md` — 1 row: A15, and only A15"* is contradicted by §4 of the same document

**File/line:** artifact `:113`; propagated verbatim to `gtm/raise/model/assumptions.md:134`.

**Instrument I used:** the filed `citescan.py`, plus `grep -n -i 'teardown' gtm/raise/model/assumptions.md`.

The scan's `PROSE_SOURCES` maps the **exact string** `"Holo teardown"` to
`competitor-holo.md`. `assumptions.md:378` (**A34**) names the source as
*"the 19 Aug teardown's '14-day money-back, voided after 35+ pieces'"* — a form
**not on the hand-maintained list**, therefore invisible to the instrument.
A34's whole grade is *"Supersedes the 19 Aug teardown"*. The scan reports A34
with **zero** extracted sources.

The artifact's own §4 (`:194–196`) says *"A34 and A35 carry the primary and name
the teardown FALSE"* — i.e. §4 knows A34 names this document while §3 states
nothing but A15 does. **The document disagrees with itself across seven pages.**

This is doubly disqualifying because §3 *does* apply the mention/citation
distinction by hand for the landscape report (`:109–111`: *"A15 and A25 are
mentions, not citations"*) and does **not** apply it to the Holo file. The hand
pass was run where it shrinks a number and skipped where it would enlarge one.

**Blind spot of my instrument:** whether A34's supersession counts as a
"citation" is a judgement call; a defensible answer is *"A34 cites the teardown
as superseded, not as evidence."* **Then say that.** "Only A15" is not that
sentence, and `assumptions.md:134` now ships it as a bare fact.

---

### MF-7 — LAW-4 SWEEP: this shift's own sweep left the tree carrying two different Holo error counts and two different A15 grades

**Instrument I used:** `grep -rn --include='*.md'` over `gtm/` at HEAD `133885c`
for `of six`, `of eight`, `wrong twice`, `A15 … OBSERVED`.

**(a) TWO DENOMINATORS, both live, and the qualifier is dropped downstream:**

| File:line | States |
|---|---|
| `gtm/market/competitors/battle-cards.md:243` | *"one surviving claim **of six**"* — bare, no qualifier |
| `gtm/market/competitors/dossier-buy-holo.md:106` | *"one surviving claim **of six**"* — bare, no qualifier |
| `gtm/raise/deck/skeleton.md:106` | *"pricing is the one claim **of eight** the teardown got right"* — bare, no qualifier |
| `gtm/raise/deck/gap-list-2026-09-04.md:44`, `:473` | *"**of eight** gradeable claims"* |
| `gtm/raise/model/assumptions.md:99` / `:109` / `:316` / `:440` | *"six checkable NUMERIC"* **and** *"eight gradeable"* **and** *"one claim of six"* **and** *"Of eight gradeable"* |

In `assumptions.md` and the artifact the two numbers carry distinguishing
qualifiers (six = numeric only; eight = including capability claims). **In the
three patched downstream files the qualifier is gone**, so `battle-cards.md`
and `dossier-buy-holo.md` say *six* while `skeleton.md` says *eight* about the
same fact. Two artifacts disagreeing is a gate-fail for both. **This break did
not exist before this shift; the sweep created it.**

**(b) "WRONG TWICE" SURVIVES IN TWO FILES AFTER BEING RE-DRAWN IN A THIRD:**

- `gtm/raise/model/assumptions.md:436–441` — struck and **RE-DRAWN to SIX**.
- `gtm/market/competitors/battle-cards.md:437–438` — still *"has now been wrong twice (refund terms, Trustpilot count)"*.
- `gtm/market/competitors/dossier-buy-holo.md:381` — still *"that document has now been wrong twice."*
- `gtm/raise/deck/gap-list-2026-09-04.md:283` (**G10**) — still *"has now been **wrong twice** (refund terms, Trustpilot count)."*

The gap-list is the sharpest: **line 44 and line 473 say six; line 283 of the
same file says two.** The author edited this file three times this shift and
did not sweep it.

**(c) A15 STILL READS OBSERVED IN THREE PLACES THE ARTIFACT CLAIMS IT CLOSED.**
`gap-list-2026-09-04.md:485–488` asserts *"the label is now carried in **all
five files** that were disagreeing"* and *"**The law-4 break is closed**"*:

- `gtm/market/competitors/battle-cards.md:436` — live `NOT CHECKED` list, not a quote block: *"**RETIRED 2026-09-03** — A15 is now **OBSERVED** from Phin's primary snapshot."* **Unpatched.** (battle-cards `:243` got the note; `:436` did not.)
- `gtm/market/competitors/dossier-buy-holo.md:94`, `:95`, `:96` — the Key-stats **grade cells** still read *"A15 — OBSERVED"*. The amendment at `:106` sits below the table; a reader scanning the grade column sees OBSERVED.
- `gtm/market/competitors/snapshots/2026-09-03-holo-primary.md:45` — *"**Carry A15 as OBSERVED**, not DIRECTIONAL."* A standing present-tense **instruction**, in the very snapshot A15 cites, never touched by the sweep. Not in the "five files."

**"The law-4 break is closed" is false as written.** Under law 4 that sentence
is itself a gate-fail.

**(d) `gtm/market/positioning.md:194` contradicts the legend clause written this
same shift.** It says the teardown's *"spot-check caveat **is discharged**."*
The new STATED-LIMITATION clause at `assumptions.md:312–315` says carrying a
limitation *"**discharges NOTHING** about the rest of the document."*
`positioning.md` was amended in this shift's own commit `de4c026` and the
contradiction was left standing one line from the amendment.

**Blind spot of my instrument:** `grep` cannot tell a live assertion from a
quoted historical record. I checked each hit by reading its surrounding lines;
`battle-cards.md:59` and `:436` differ — `:59` is inside a `>` quote block of
the chief's 3 Sep message (historical, acceptable), `:436` is a live
`NOT CHECKED` bullet (not acceptable). I excluded `ops-log.md` and `inbox.md`
throughout as append-only ledgers.

---

### MF-8 — §3 line 124: *"appear nowhere under `gtm/`"* is false at HEAD, and no instrument is named for it

**File/line:** `gtm/raise/model/snapshots/2026-09-05-shift23-g18-corpus-grade.md:121–126`

> `claude-ads-steal-report.md`, `onboarding-funnel-plan.md` and `design-partner-candidates-nyc.md` appear **nowhere under `gtm/`** except inside the chief's own inbox entry naming them.

**Instrument I used:** `grep -rn --include='*.md' <name> gtm/` at HEAD.

All three also appear in `gtm/org/ops-log.md:37–38` and in
`gtm/raise/deck/gap-list-2026-09-04.md:504–505`;
`design-partner-candidates-nyc.md` additionally at `ops-log.md:111`.

Two of those are this shift's own writing, so the practical harm is small. The
**process** harm is not. Compare the two passages:

- The channel-readiness sentence (now `:132–143`) names its instrument
  (`grep -rl`), states its exclusions, states its residual blind spot, and
  **discloses that its first version was wrong** (nine → thirteen).
- This sentence, twelve lines earlier, names **no instrument**, states no
  exclusions, and concludes *"nothing rests on it"* — a claim about **content
  dependence** inferred from a **filename grep**. An artifact can lean on
  `claude-ads-steal-report.md`'s content without naming the file, which is the
  exact failure mode `citescan.py`'s own docstring blind spot (1) describes.

**The disclosure discipline is applied where it enlarges the org's finding and
omitted where it lets the org close a question.** That asymmetry is the finding.

---

## SHOULD-FIX

**SF-1 — §2 line 45: two columns of one table use two different counting modes, undeclared.**
Instrument: I re-ran every cell. All 21 rows reproduce **byte-for-byte**. But
`grep -c 'http'` counts **matching lines**, while the `[VERIFIED` column is an
**occurrence** count:
```
research-smm-landscape.md:  grep -c '\[VERIFIED' = 63   |  grep -o … | wc -l = 100
```
The table publishes 100. Declare the mode per column.
*Blind spot of my instrument: none material — `grep -c` vs `grep -o|wc -l` is
determinate.*

**SF-2 — §2 line 82 and NOT CHECKED line 313: "87 `http`" is 87 lines; there are 99 URLs.**
```
design-partner-candidates-nyc.md   lines with http: 87   http(s):// occurrences: 99   unique URLs: 98
```
§2 narrates the line count as *"87 hits are bare URLs in prose"* and NOT CHECKED
calls them *"`design-partner-candidates-nyc.md`'s **87 URLs**"*. The file has
**98 distinct URLs**. Since §2's entire argument is that a crude instrument
mis-grades a document, publishing the crude instrument's output as if it were
the semantic quantity undercuts the argument in its own example.
*Blind spot of my instrument: my URL regex `https?://[^ )>,"]+` may split or
join at unusual delimiters; the line-vs-occurrence gap (87 vs 99) is robust
regardless.*

**SF-3 — §2 line 73: "100 `[VERIFIED]`" flattens 18 self-qualified tags, and §6 is the reason that matters.**
Instrument: `grep -o '\[VERIFIED[^]]*\]' | sort | uniq -c`:
```
82  [VERIFIED]
 3  [VERIFIED verbatim]        2  [VERIFIED 2026-08]       2  [VERIFIED norm]
 1  [VERIFIED but vendor research — treat as ceiling]
 1  [VERIFIED at mid-market; brand-side proxy elsewhere]
 1  [VERIFIED, vendor-adjacent]      1  [VERIFIED, proxy]
 1  [VERIFIED practitioner source]   1  [VERIFIED practitioner writeup]
 1  [VERIFIED practitioner]          1  [VERIFIED live]
 1  [VERIFIED quote]                 1  [VERIFIED via Forge]
 1  [VERIFIED — Forge Agency Benchmarks 2026]
```
**Bare `[VERIFIED]` is 82, not 100.** At least four of the qualified tags carry
a **stated limitation** — *"treat as ceiling"*, *"proxy"*, *"vendor-adjacent"*,
*"brand-side proxy elsewhere"*. §6 invents a legend clause saying a source's
stated limitation is part of the receipt; §2 simultaneously reports this corpus
as a single homogeneous 100. **The corpus that most needs the new clause is the
one §2 counts as if it had no self-grading at all.** Say "100 `[VERIFIED`-prefixed
tags, of which 82 bare and 18 qualified — four carrying their own limitation."
*Blind spot: my regex requires the tag close on the same line; a tag wrapped
across a newline would be miscounted. The 82/100 split does not depend on that.*

**SF-4 — §2 line 88 and §5 line 230: "Every capability row names a source file and a line number" is false of the file it praises.**
Instrument: read `/home/user/clinkworthy/docs/channel-readiness.md` in full (66 lines).
Of the **seven** capability rows (`:13–19`): Instagram and Facebook carry
file+line; **Meta ads** (`:15`) names `lib/meta-ads.ts` with **no line**;
**X** (`:16`) names `lib/x-oauth.ts` with **no line**; **TikTok** (`:18`) and
**Google Ads** (`:19`) name **no file in the table at all** (they get one in the
prose below); **Reddit** (`:17`) names **no file anywhere**. So **three of seven
rows have no line and two have no file.** The claim is stated twice, in the
section that grades the document SOURCED and calls it *"the strongest external
document this org cites"* (`:256`). The grade may well survive a corrected
sentence — but the sentence as written is a flattering overstatement about the
artifact this shift is using to argue for a whole new enumeration unit.

**SF-5 — §5 line 244: "four of roughly thirty receipts" — there are sixteen.**
Instrument: enumerated every `file:line` reference in `channel-readiness.md`:
row `:13` = 7 (meta.ts:126,164,212 · :415 · :400 · :318 · :359); row `:14` = 6
(:281 · :255 · :459 · :444 · :339 · :372); prose = 3 (channel-data.ts:22 ·
published.ts:64 · types.ts:3). **Total 16 line-numbered receipts**, plus 2
file-only references. Four of sixteen is **25% sampled**, not 13%. The error
runs toward *more* humility, but a blind-spot disclosure whose own number is
2× off is not a receipt. Restate as "four of sixteen line-numbered receipts."

**SF-6 — §3 lines 107–119: the "cited-document set" is billed as an enumeration and silently drops what the instrument found.**
Instrument: the filed `citescan.py`'s inverted index — **29 entries**. §3 lists a
subset. Missing entirely: `gtm/raise/accelerators.md` (A13), `model-v1.md` (A9),
`gtm/market/position-v2-the-hire.md` (A38), `positioning.md` (A40),
`landing-content.test.ts` (A2), and
`snapshots/2026-09-05-smm-landscape-44pct-citation-audit.md` (A14, A30, A45 —
a retrieved-and-hashed org snapshot omitted from the line that enumerates
retrieved-and-hashed org snapshots, `:116`). Two of the omissions are
**gtm/ claim-bearing artifacts cited by rows**, which is exactly the category
§3's argument turns on. Either publish the instrument's full index or label the
list "selected."

**SF-7 — §3's channel count moved 9 → 13 in the artifact, `assumptions.md` and G19, but "nine" was published first and the receipt trail is now split.**
Instrument: `git log --oneline` / `git diff 5943a6c HEAD`. Credit where due —
the correction (`c0369da`) is real, self-flagged, names its instrument, and
moves the number **against** the author's convenience. My independent count
finds **16** gtm/ files naming the string, or **13** under the artifact's stated
exclusions (four org-ledger files + the two written this shift), so **13
reproduces under its own scope.** Two residues: (a) `gtm/org/ops-log.md:85`
still narrates the nine; (b) the artifact is timestamped as a **gated-in-progress
receipt being edited during its own gate** — `133885c` literally reads
*"ops-log entry (IN PROGRESS — gate running)"*. A receipt that changes under the
gate reviewing it cannot be cited by hash. **Freeze the artifact before the next
round.**

**SF-8 — §4's grade table understates its own strongest row.** Claim 1 is graded
*"CONFIRMED EXACTLY"* against a teardown that writes **"~$20/mo"**, **"~$12"**,
**"~$48"**, **"~$29"** — approximations. The primary gives exact figures. The
match is real and the grade should say *"CONFIRMED — the teardown's approximate
figures round to the primary's exact ones."* Minor, but "EXACTLY" is doing
rhetorical work in a table whose whole point is precision about what a source
did and did not establish.

---

## WHAT I COULD NOT CHECK, AND WHY

- **Whether `competitor-holo.md` was ever actually opened by a prior shift.** I
  proved a verbatim three-line transcription exists in `dossier-buy-holo.md`
  (MF-4). I cannot prove *who* did it or *when*: the clone is `--depth 1` —
  `git log` in `/home/user/clinkworthy` returns one commit — so **no authorship
  or history exists for any clinkworthy file**, and I inherit that blind spot
  from the artifact. The transcription is decisive against "nobody had opened
  it"; it is silent on which shift did.

- **Whether the artifact's `git log -S` provenance claim in §4 (`:206–208`) is
  true** — *"`git log -S` puts the flag's arrival at `c3e9f91`, shift 15."*
  `c3e9f91` is not reachable from this session's gtm tree (`git cat-file -e`
  fails), and the shallow clinkworthy clone has no history to run `-S` against.
  **This is the one receipt in the document I could not reproduce by any
  instrument available to me.** It is load-bearing: it is the evidence for §4's
  centrepiece self-correction. Flagged, not disputed.

- **Whether `channel-readiness.md`'s grades are behaviourally correct.** I
  reproduced the four §5 receipts as symbol-existence checks (and found MF-1). I
  did not run the code, so like the artifact I establish that citations resolve
  and nothing about whether the code works. I did **not** re-check the other
  twelve line-numbered receipts.

- **Anything about `research-smm-landscape.md`'s contents.** I re-derived its
  hash (`696a6b69fd52be98…`, matching the `5eeb1c8` record at
  `assumptions.md:10` and `:287`) and its tag counts. I did not read the file,
  so the eleven AGENT-REPORTED rows are untouched by this verdict.

- **Sixteen of the twenty-one docs files.** I counted them (all 21 rows of §2's
  table reproduce byte-for-byte) and read only `competitor-holo.md` and
  `channel-readiness.md` in full — the same two the artifact read. **So this
  gate has the same coverage hole the artifact has**, and cannot say whether the
  other nineteen contain anything.

- **Whether any live Holo figure is currently correct.** `tryholo.ai` is
  egress-blocked here as it is everywhere in this org. Every Holo verdict in
  MF-3 is graded against Phin's 3 Sep capture, which is now **two days old** and
  captured a refund policy that had changed **the day before**.

- **Whether the artifact is final.** It was committed to four times during this
  review. Findings are against `133885c`; anything the author has changed since
  is outside this verdict.

---

## THE DILIGENCE QUESTION THIS ARTIFACT CANNOT ANSWER

> **"You just discovered that in September you shipped two false competitor
> figures — a 4× overstatement of a rival's review count and a materially wrong
> refund term — and you caught them by luck of sequencing, not by process. So:
> how many of your forty-eight rows are in that same state right now, and what
> is the number?"**

The artifact cannot answer, and §3 is the reason. It enumerates the cited-source
set beautifully and then grades **two documents out of it**. What its own
enumeration leaves standing:

- **Eleven rows** rest on `research-smm-landscape.md`, whose *"contents were not
  re-read this shift"* (NOT CHECKED, `:307`) and which carries **100
  self-assigned `[VERIFIED]` tags that are the swarm's own** (`skeleton.md:108`:
  *"THAT `VERIFIED` IS THE SWARM'S OWN TAG AND MUST NOT REACH A SLIDE"*).
- **Three externals — Adobe Express n=433, Clutch, Metricool n=927 — have never
  been retrieved** (`:117–119`), and they sit under A14, A30 and **A45**, the
  serviceable-market fraction on the market-size slide.
- The two documents that *were* graded came out at opposite extremes — one
  mostly false, one sound. **A sample of two with a 100% spread establishes no
  rate.** The artifact's honest position is that it does not know the base rate
  of contamination in its own evidence, and it never says so in those words.

**The second question, and it is the one that lands after the first:** the
*single* teardown claim that survived grading is the **$20–48 price band** — the
anchor on the competitive slide. It rests on one screenshot, taken by one
person, on 3 September, from a page whose refund policy had changed the day
before, on a domain **no machine in this company can reach**. `gap-list` G10
(`:280–286`) states this and calls it *"structural — this org cannot fix it."*
So: **who owns re-capture, on what cadence, and what happens to slide 5 the week
Holo reprices?** There is no owner, no cadence and no detection in this tree.
The one number that survived the audit is the one with the shortest half-life
and a single-person dependency, and the artifact records that as a paid debt
(`assumptions.md:427–433`: *"the debt itself is paid either way"*) rather than
as an open one.

---

## WHAT THIS ARTIFACT GETS RIGHT, SO THE FAIL IS READ CORRECTLY

Round-1 fails are cheap to write and this one should not be read as a rejection
of the work.

- **Every mechanical count in §2 reproduces byte-for-byte** — all 21 rows, the
  landscape hash `696a6b69fd52be98…`, the 87, the 7 markdown links, the 100 tag
  prefixes, `strategy.md` as the only file with clickable links. I tried to
  break the table and could not.
- **`citescan.py` reproduces exactly at its stated hash**, matches all 48 rows
  including `A7b`/`A25b`, and its docstring blind-spot list is honest and
  specific. Blind spot (1) is the one that bit it (MF-6), and it *named that
  blind spot itself* — the failure is not disclosing the hole, it is making a
  positive claim through it.
- **Three of four §5 code receipts resolve verbatim and exact.** The fourth
  resolves exactly too (MF-1).
- **The 9 → 13 correction (SF-7) is the best thing in the shift**: self-flagged,
  instrument named, residual blind spot stated, and it moves the number against
  the author. That is the standard the rest of the document should have met.
- **§6's second clause is correct and load-bearing.** *A stated limitation is a
  floor on unreliability, never a description of it* is the right rule, and §4's
  observation that the teardown's warning covered the one claim that held is a
  genuinely sharp argument for it — even after MF-3 corrects the ratio it is
  built on.
- **Not writing the channel row (§7.2) was the right call**, and refusing the
  A15 revaluation under law 7 was too.

**The pattern to fix is narrow and it is one pattern, not eight.** Where this
shift was disclosing a limitation, it was rigorous. Where it was reporting a
result that reflected well on the org — a file nobody had read, a source that
graded 1-in-8, a document whose receipts had drifted, a law-4 break declared
closed — it stopped naming instruments and stopped checking. **That is shift
22's filed lesson, and it applies to the file that cites it.**

---

**ROUND 2 GATES ON:** MF-1 through MF-8. MF-7 alone (the tree carrying "six" and
"eight" and "twice" simultaneously, plus three unpatched A15 OBSERVED sites) is
an independent gate-fail for `battle-cards.md`, `dossier-buy-holo.md`,
`skeleton.md`, `gap-list-2026-09-04.md`, `positioning.md` and
`2026-09-03-holo-primary.md` under law 4.

**Instrument of this verdict:** direct read of the clone at `956028b4` and the
gtm tree at `133885c`; `wc -c`, `grep -c` / `grep -o | wc -l`, `sha256sum`,
`diff`, `git cat-file -s`, `git log --format=%h`, and one execution of the filed
`citescan.py` against both HEAD and `18edb84`.
**Blind spot of this verdict:** it is entirely a text-and-hash audit. It read
two of twenty-one clinkworthy documents, ran no code, opened no external URL,
and has **no history for any clinkworthy file** (`--depth 1`). It cannot tell a
true claim from a claim that is merely internally consistent, and it inherits
every egress block the artifact discloses. Where it says a count reproduces, it
means the bytes agree — not that the number means what the sentence around it
says.
