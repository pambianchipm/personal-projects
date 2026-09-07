# HOSTILE-INVESTOR GATE — SHIFT 25, THE HOLO TEARDOWN GRADE (THE §4 RE-CUT) — ROUND 1

**VERDICT: FAIL (round 1).**

Target: `gtm/raise/model/snapshots/2026-09-07-shift25-holo-teardown-grade.md`
at commit **`3518455`** (`git rev-parse --short 3518455` → `3518455`, run
2026-09-07T22:57:34Z). Artifact SHA-256, re-derived twice:
`sha256sum` of the working-tree file → `7b30d72f6dbb973a43dae00810648649df22dcca3f91785b0a7dacab0331b95a`;
`git show 3518455:<path> | sha256sum` → the same
`7b30d72f6dbb973a…0331b95a`. Re-run at 23:04Z after the READY FOR REVIEW
commit: unchanged. Branch `claude/b2c-mlp-ideas-gtm-76bs8z`, clone unshallowed
(`git rev-list --count aa2b8a8` → 238, which is the count the artifact states
for the unshallow).

**FREEZE HONOURED, AND DISCLOSED.** Two commits landed after the target during
this review — `c788487` (22:56:10Z, `gtm/org/lock.md` only) and `fd8e5a4`
(23:00:26Z, `gtm/org/inbox.md` only) — from `git log --name-only
3518455..HEAD`. Both are inside the ruled freeze. The target's hash is
unchanged before and after.

**Fan-out: one independent hostile-investor reviewer, gate time only.**

---

## RESULT IN ONE LINE

**The provenance in the first line is right and every git command in §1 and §2
reproduces at its date. The artifact fails on what it built on top of that: its
only receipt for carrying two verdict tables un-re-read is a sentence it
attributes to the round-2 verdict that the round-2 verdict does not contain —
the sentence is the boss's own banner inside the pulled §4 — and four further
claim-bearing sentences state things the artifact's own pasted outputs and its
own primary contradict.**

Six MUST-FIX, eight SHOULD-FIX. The direction of the six is mixed: MF-3 and
MF-4 flatter the finding (a sharper sequence, a tidier geometry than the facts
give); MF-1 and MF-2 overstate what was checked; MF-5 and MF-6 are plain
instrument errors. That mix is better than round 1's on the parent receipt,
where every failure ran one way.

---

## MUST-FIX

### MF-1 — §WHAT THIS IS, lines 16–19: a quotation attributed to the round-2 verdict that the round-2 verdict does not contain; the words are the pulled §4's own banner

**Sentence at fault:** *"The two verdict tables in §3 are carried from it
because the round-2 verdict says they 'were re-derived at round 2 against the
primary and were not broken'."*

**What I ran (2026-09-07T22:59Z):**
`grep -rn "not broken" gtm/ | grep -v shift25-holo-teardown-grade.md` and
`grep -rn "re-derived at round 2" gtm/ | grep -v shift25-holo-teardown-grade.md`.
**Returned:** one file, one site —
`gtm/raise/model/snapshots/2026-09-05-shift23-g18-corpus-grade.md:245–246`:
*"**The two verdict tables were re-derived at round 2 against the primary and
were not broken** — they are usable as evidence; this section's framing around
them is not."* That line sits in the blockquoted PULL banner of §4 (§4 spans
lines 221–380 of that file; `grep -n "^## "`), written by the boss at shift 24.
`grep -n -i "table\|trustpilot\|1,048\|re-deriv"` over
`reviews/2026-09-06-shift24-g18-corpus-grade-hostile-investor-r2.md` returns
lines 13, 93, 104, 135, 160–161, 202, 215, 225, 233–234, 258 — none of them is
a statement that §4's two tables were re-derived. The r2 verdict re-derived the
`meta.ts` receipts (§5), the citescan hash, the `git log -S` result, and the
`dossier:316–318` transcription. It says nothing about the six numeric rows or
the four capability rows.

**Why this is a gate-fail and not a citation slip:** the sentence is the
artifact's entire warrant for carrying eight of ten table cells without
re-reading them (*"two of their cells were re-read … and are marked"*). With
the attribution gone, the warrant is the boss quoting himself from inside the
section the chief pulled — and line 15 of the same paragraph says *"Nothing
here cites the pulled §4."* It does, in the sentence right after.

**What it should say:** *"The two verdict tables in §3 are carried from the
pulled §4. The round-1 verdict (MF-3) re-read the teardown against the primary
claim by claim at `956028b4`; the round-2 verdict did not re-derive these
tables. Every cell below was re-read against the primary this shift at
`<lines>`."* — and then re-read them (see MF-2 for the one that does not
survive).

*Instrument blind spot, same breath: `grep` for the quoted string finds the
string; it would miss the r2 verdict saying the same thing in other words. I
read the r2 verdict in full (314 lines) to close that; a paraphrase I did not
recognise as equivalent would still escape.*

### MF-2 — §3 capability table, row 2: a FALSE verdict on a compound claim two-thirds of which the primary says it did NOT check; the artifact's own §4 ledger grades it narrower

**Sentence at fault:** the row *"Gap 5: 'No engagement, research, or autonomy…
Generates on demand, then silence' | §4, plus a Learnings surface … | FALSE"*.

**What I ran (2026-09-07T22:58Z):** `cat -n
gtm/market/competitors/snapshots/2026-09-03-holo-primary.md`, read in full
(348 lines). **Returned, under "What this snapshot does NOT establish":** line
166 *"Whether anything is human-gated before it posts or before ad spend"*;
lines 169–170 *"Whether an engagement / comment-reply surface exists. Not in
the nav read here; the nav may not be complete."* The primary falsifies
*"generates on demand, then silence"* (§4 :118–147, Addendum 2 :225–248). It
explicitly declines to rule on engagement and on autonomy. A cell that grades
the whole quoted clause FALSE says the primary established something the
primary says it did not.

**The artifact already knows this.** Its own §4 ledger (line 161–162) lists
under FALSIFIED only *"the BLUF, 'generates on demand, then silence'"* — not
"no engagement", not "no autonomy" — and `assumptions.md:414` at 3518455 lists
the same narrower set. Table and ledger disagree inside one artifact.

**What it should say:** split the row — *"'Generates on demand, then silence'
— FALSE (§4 :129–137; Addendum 2 :231–233)"* and *"'No engagement, research,
or autonomy' — NOT CHECKED (primary :166, :169–170: engagement surface and
human-gating not observed; nav may be incomplete)"*. §5 sentence 1's *"six it
did not warn about are false"* survives the split (4 numeric + BLUF + "then
silence" = 6) and should say so by count.

*Blind spot: I graded the row against what the primary states; the teardown's
own text is unreachable here (see NOT CHECKED), so whether "engagement" in the
teardown meant comment-reply or something the primary does observe is a
transcription question I cannot settle.*

### MF-3 — §2 line 112 and §5 line 181–182: "the next day" / "the day after" — the dossier and the primary are the same day, four and a half hours apart, and the artifact's own paste says so

**Sentences at fault:** §2: *"all three FALSE against the primary Phin captured
**the next day**."* §5.3: *"his capture landed **the day after** the dossier"*.

**What I ran (2026-09-07T22:59Z):**
`git log -1 --format="%h %ad %cd" --date=iso 3ba0165` →
`3ba0165 2026-09-03 12:48:05 +0000 2026-09-03 12:48:05 +0000`;
`git log -1 --format="%h %ad %cd" --date=iso 4893600` (the commit that filed
the primary) → `2026-09-03 17:12:31 +0000`; the primary's own header (line 1):
*"captured 2026-09-03 by Phin"*, line 9–10: *"pasted verbatim into the chief's
channel on 2026-09-03."* **Returned: same calendar day, 4 h 24 min apart.**
The artifact's own §1 paste prints `3ba0165 2026-09-03` and its §3 header says
*"Phin's primary capture of 3 Sep"* — the two sentences contradict the
document they sit in.

**Why it matters:** §5.3 uses "the day after" to carry the sequencing argument
(*"by sequencing … not by having graded the alternative"*). The argument holds
at four hours; it does not need the extra day, and a hostile reader who checks
one timestamp stops trusting the paragraph.

**What it should say:** *"the primary Phin captured **the same afternoon**
(`3ba0165` 12:48Z; primary filed `4893600` 17:12Z, 3 Sep)."* — in both places.

*Blind spot: author-date and committer-date agree on both commits, but a commit
date is when the boss committed, not when Phin took the screenshots; the
primary's self-stated capture date is the only evidence for the capture time
and it says 3 Sep with no clock.*

### MF-4 — §2 lines 114–115: "six lines above three errors" — the disclosure is six lines BELOW the errors, and the sentence before it says so

**Sentence at fault:** *"Disclosure performed as diligence, six lines above
three errors."*

**What I ran (2026-09-07T22:58Z):** the artifact's own §2 command,
`git show 3ba0165:gtm/market/competitors/dossier-buy-holo.md | grep -n "not laundered"`
→ `51:`; `… | grep -n -E "4,200|650|14-day|35\+"` → `45:`, `47:`, `68:`,
`103:`; then `sed -n 40,56p` on the same blob. **Returned:** the fact table
occupies lines 41–49; the bold *"Provenance warning carried forward, not
laundered"* paragraph is line 51, after the table. The errors at 45 and 47 are
above the heading, which the artifact states correctly one sentence earlier
(*"six and four lines above it"*) and then inverts.

This is the sentence §2 exists to get exact — it is offered as the correction
to the pulled §4's *"in the same table"* — and the r2 verdict's *"one line
above three errors"* (r2:163) was already wrong in the same direction. The
re-cut repeats the direction error with a new number.

**What it should say:** *"Disclosure performed as diligence, six lines
**below** three errors — the warning is the paragraph after the table that
carries them."*

*Blind spot: line arithmetic on a markdown blob; a renderer that collapses the
blank lines would change "six" but not "below".*

### MF-5 — §1 lines 82–83: the predicted third `git log -S` commit is not the A15 rewrite; it is this artifact, and the blind spot that actually bit is unnamed

**Sentence at fault:** *"the list grows with each edit to the cell — this
shift's A15 rewrite will add a third"*.

**What I ran (2026-09-07T22:58:00Z), verbatim as pasted:**
`git log -S "SPOT-CHECK before any external use" --format="%h %ad %s" --date=short -- gtm/`
**Returned three commits:**
```
26da742 2026-09-07 gtm shift 25: the pulled §4 re-cut as its own artifact, first line the corrected provenance (18512e8, shift 5), instruments pasted as run — DRAFT, ungated
ca9f7fb 2026-09-06 gtm shift 24: gate round 2 FAILED — receipt SPLIT under AS-1, nine law-4 fails fixed, chief's rulings carried
18512e8 2026-09-02 gtm boss shift 5 (in progress): investor round-1 FAIL edits applied (end-to-end retracted, A15 added, A9 non-ceiling, AI-org provenance on-slide, dogfooding named, single-vendor COGS risk); round-2 re-gate running
```
The artifact's paste (two commits, dated 22:46Z) was true at its date:
`git log --date=iso` puts the A15 re-grade `f85399c` at 22:54:18Z and the
artifact's own draft `26da742` at 22:54:19Z, both after the run. But the
prediction is wrong about cause. **The A15 rewrite added nothing** — neither
`f85399c` nor `3518455` (which re-edited the A15 cell and the assumptions
header) appears, because both kept the occurrence count. **The third commit is
`26da742`: this artifact, which contains the string in its pasted commands and
its prose.** A receipt that pastes the flag becomes a hit in the instrument it
is pasting.

**What it should say:** *"…the list grows with each commit that changes the
occurrence count anywhere under `gtm/` — including the commit that lands this
file, which quotes the string three times. The A15 re-grade at `f85399c` did
not change the count and does not appear."*

*Blind spot: the run is at HEAD `fd8e5a4`; the list will grow again when the
fix for this verdict lands, for the same reason.*

### MF-6 — Law 4: `assumptions.md:127–128` at 3518455 states, live, the provenance the artifact's first line corrects

**Artifact sentence:** line 3, *"entered A15's cell at `18512e8`, 2 September
2026, shift 5 … Not `c3e9f91`/shift 15."* and §1 line 75, *"the flag reached
the truth table at shift 5"*.

**What I ran (2026-09-07T23:01Z):**
`git show 3518455:gtm/raise/model/assumptions.md | sed -n 110,140p` and the
sweep `grep -rn "shift 15\|c3e9f91" gtm/ --include=*.md` excluding
`ops-log.md`, `inbox.md`, `lock.md` and `reviews/`. **Returned, live and
unstruck, `assumptions.md:126–128`:** *"**AND THE SEQUENCE REFUTES THE
FLATTERING READING OF THAT, INCLUDING THE ONE THIS BOSS REACHED FIRST.** The
spot-check flag landed at **shift 15**, *after* shift 13's capture had already
found the errors"* — and `:133`: *"Four of the five failures sit outside what
it warned about"* against the artifact's *"six it did not warn about are
false"*. Nine lines above, `:92–94` carries the shift-5 correction with its ⚠
note. **The SSOT states both shifts for the same fact, twenty-five lines
apart, and the artifact under gate agrees with one of them.**

Law 4: *"Two artifacts stating different numbers for the same thing is a
gate-fail for BOTH."* The round-2 verdict listed `assumptions.md:91` as the
site and it was fixed at that line; this is the same class — a fix at the
cited line and not one inch further — that round 2 named as the pattern. The
artifact's §1 says the sweep for this string was run; `grep -n "shift 15"
gtm/raise/model/assumptions.md` returns 94 and 127 in one call.

**What should happen:** `assumptions.md:127–128` and `:133` are corrected in
the same landing as the re-draft, and the artifact's §1 names them as the
residue its own sweep found (*"`assumptions.md:127` carried shift 15 live until
this landing"*). The chief's freeze rule puts the SSOT fix after this verdict
as part of the new target.

*Blind spot: my sweep is string-keyed on "shift 15" and "c3e9f91"; a restatement
in other words ("after the capture", "written down afterwards") would escape
it. `gap-list-2026-09-04.md:521` is the only other hit and it is the corrected
form.*

---

## SHOULD-FIX

- **SF-1 — pasted outputs abbreviated without a marker, four places.** (a) §1
  line 57: the `grep -n "SPOT-CHECK"` output is cut mid-word at `SPOT-`; the
  real line continues `CHECK before any external use; never load-bearing alone
  |` (run 22:58Z). (b) §1 line 52–55: `head -12` on the 18512e8 stat drops the
  summary `2 files changed, 49 insertions(+), 17 deletions(-)`. (c) §2 line
  98: *"(two snapshot files)"* stands in for
  `.../snapshots/2026-09-03-buy-editor-pricing.md` and
  `.../2026-09-03-opusclip-pricing.extracted.txt` (one is an extracted-text
  file, not a snapshot) and drops `8 files changed, 1102 insertions(+)`. (d)
  `date -u` prints `Mon Sep  7 22:46:xx UTC 2026`, not `2026-09-07T22:46Z`.
  None misleads about the finding; under the 7 Sep amendment (*"paste only what
  you ran, re-runnable verbatim"*) each should carry `…` or the full line. The
  `...` inside commit subjects (lines 36, 39–42, 53) were checked against the
  full subjects and do not mislead.
- **SF-2 — §5.2's `dossier-buy-holo.md:316–318` resolves to 318–320 at the
  target.** `git show <rev>:…dossier-buy-holo.md | grep -n "Holo generates 200
  assets"` → 316 at `133885c`, `f95eb61`, `ca9f7fb`; **318 at `3518455`** —
  the target commit itself inserted two lines at dossier :103–105 (`git show
  3518455 -- …dossier-buy-holo.md`). `assumptions.md:117` carries the same
  stale 316–318 (law-4 consistent, both stale). Also: *"character-identical
  transcription"* drops the qualifier both verdicts attached — r1:150–151
  *"for the first two-and-a-half lines, diverging only where the dossier's
  strike-note begins"*, r2:94–95 *"diverging only at the strike-note"*. State
  the commit the line numbers are for, or update them, and keep the qualifier.
- **SF-3 — §1 lines 71–72 and 73–74, two unreceipted characterisations of
  other people's instruments.** *"the reviewer's three case variants would
  have seen this"* — the r2 verdict records only that `c3e9f91` appears in
  none of three variants (r2:146–147) and that the uppercase run returned one
  commit (r2:124); it never lists `8d6648e`, `3ba0165` or `d80a8c9`.
  Counterfactual, no receipt. And *"carried and then struck the uppercase
  form"* for `3ba0165`/`d80a8c9`: `git show 3ba0165 | grep -n -i "spot-check
  before any external use"` → diff line 185, `SPOT-CHECK BEFORE ANY EXTERNAL
  USE` (all caps, in `battle-cards.md`); `git show d80a8c9 | …` → diff line 48
  strikes that same all-caps form. That is a **third** case variant, not the
  A15 cell's `SPOT-CHECK before any external use`; the case-sensitive `-S`
  would never match it. Name the three forms.
- **SF-4 — the open item "rows 2, 3 and 6 against the 7 Sep fetch — no
  attempt stands behind these" is not an open item.** The cited fetch file's
  own §4 table (lines 133, 137) already compares TWO PLANS ONLY and 120 / 350
  against the fetch — rows 2 and 3 have an attempt and a return. And for row
  6: `grep -n -i brand
  gtm/market/competitors/snapshots/2026-09-07-holo-pricing.extracted.txt` →
  **lines 125–126: *"Can I manage multiple brands in one account?" / "Yes. Run
  up to 5 brands under a single Holo account. Each with its own Brand DNA,
  workspace, and templates."*** — a public-page FAQ answer (not the compare
  table, not logged-in, not tier-specific) that neither the fetch receipt nor
  the artifact read. It bears on the teardown's *"up to 10"*, on the primary's
  Addendum (a) *"5 in the lower tier and 10 in the higher, I think"*, and on
  the primary's *"Neither the dossier's 'up to 10' nor the 5 in Phin's research
  is confirmed by this page"* (:48–50, which was true of the compare table).
  Row 6 stays UNCONFIRMED against the primary; the fetch gives it a dated
  data point. File as a limitation with the returns; hand the line to Phin.
- **SF-5 — §4 ledger carries claims with no receipt in this artifact.** The
  four *"uncounted"* CONFIRMED items (URL-scan onboarding, email campaigns, ad
  creatives, *"deliberately slippery"* promo framing) and the NOT CHECKED items
  (*"10M assets + 19,000 ads"*, *"OpenAI under the hood"*, team/funding) appear
  in no §3 row and cite no primary line. Receipts exist and should be pointed
  to: the r1 verdict's MF-3 table (teardown `:12–13`, `:15`, `:18`, `:34`
  against primary `:57`, `:58`, `:58–59`, `:25`); dossier@`3ba0165:48` for the
  10M/19,000 and OpenAI claims, `:43–44` for team and funding. The ledger is
  carried near-verbatim from the pulled §4 (`corpus-grade.md:291–297`); unlike
  the tables it is not disclosed as carried.
- **SF-6 — Law 5, first breath.** No sentence says what Player 2 is; the only
  occurrence of the category is inside the teardown's BLUF quote. Doctrine law
  5 reads *"Every artifact … fails the gate on sight."* I am not making this a
  MUST-FIX because the org's own precedent runs the other way — the parent
  receipt and `2026-09-06-shift24-adobe-express-433.md` open the same way and
  were gated/filed without one (`sed -n 1,14p` on each), and the brief for
  this gate frames the rule as *"what Player 2 IS / what this document is"*.
  The artifact's WHAT THIS IS paragraph satisfies the second half. One clause
  fixes it; the chief should rule whether internal-audit-class receipts are
  exempt, because the doctrine as written says they are not.
- **SF-7 — line cites that name one line for a multi-line quote.** Row 6
  *"(line 48)"*: *"The compare table has no brand row"* is :48; *"Remains NOT
  CHECKED"* is :50. Row 5 *"(line 92)"*: the §3.2 clause spans :91–92. Cite
  the ranges.
- **SF-8 — NOT CHECKED limitation 2 is a finding, not a blind spot.** *"The
  pulled §4's 'same table' wording"* was checked, and §2 states the result.
  Filing a checked thing under NOT CHECKED blurs the attempt rule that the
  other two entries apply correctly.

---

## WHAT PASSED, WITH THE INSTRUMENT

- **The first line's provenance.** `git show 18512e8 --
  gtm/raise/model/assumptions.md | grep -n "SPOT-CHECK"` → line 25, a `+` line
  carrying the flag; `git show 18512e8^:gtm/raise/model/assumptions.md | grep
  -c "A15"` → **0** — the row did not exist before that commit. *"In the commit
  that CREATED the row"* is exact. `git show --stat c3e9f91` → one file,
  `front-door-overhaul-v1.md`; `git show c3e9f91 | grep -c -i "spot-check"` →
  0. Both reproduce byte for byte.
- **"Shift 12 shipped three false figures from the same file."**
  `git show 3ba0165:…dossier-buy-holo.md` lines 45 and 47 carry 4,200+ /
  200–650 / 14-day-35+, each sourced *"Teardown"*; the primary says 1,048
  (:68), 120 / 350 (:35), 7 days and any single generation (:89–92). Three
  figures, three FALSE.
- **§1's shift-1 claim.** `git show 8d6648e | grep -n -i "spot-check before any
  external use"` → diff line 96, the `+| **A. "AI marketing platform"** |` row
  of `positioning.md`, lowercase form, commit dated 2026-08-31. Exact.
- **§1's case-insensitive run** reproduces (five commits at the artifact's
  date; six now, the sixth being `26da742` — same mechanism as MF-5).
- **§2's arithmetic.** 51 − 45 = 6, 51 − 47 = 4. *"Same file, in the table the
  heading sits under"* — the heading is the paragraph after the table (blob
  lines 41–49 table, 51 heading). Exact, up to the inverted "above" in MF-4.
- **§3 numeric table, rows 1, 3, 4, 5, 6, and capability rows 1, 3, 4,
  re-read against the primary by line:** row 1 — :32–33; and the fetch's
  extracted text lines 21, 22, 36, 37 read `$20`, `$12`, `$48`, `$29`. Row 3 —
  :35; 200/120 = 1.67, 650/350 = 1.857. Row 4 — :68 and :77–80 (*"roughly
  4×, in the direction that flatters the competitor"*). Row 5 — :89, :91–92,
  :95, :96–97. Row 6 — :48–50. BLUF row — :129, :131–134, :135–137; the
  dossier's positioning line is struck *"2026-09-03"* (dossier@3518455:320).
  Gap 1 — Addendum 2 :253–257. Gap 2/3 — :162–163 (followers), :121 (Ads in
  nav), :150–154 (Phin's hedges). No cell in these rows overstates the
  primary.
- **The tables are carried faithfully.** Compared against
  `corpus-grade.md:257–262` and `:270–273`: rewordings only, no verdict
  changed, the two "re-read this shift" marks are the only additions.
- **§3 row 1's citation of the 7 Sep fetch, and that file's internal
  consistency.** `sha256sum …/2026-09-07-holo-pricing.extracted.txt` →
  `0e12080ead6be388b0c83582e166a8eb323bcfd14367c1557fe81a9d0481950d`, as
  stated; `wc -l` → 169, as stated; `sed -n 10,47p` and `sed -n 60,84p`
  reproduce the fetch file's §2 and §3 blocks line for line; its §4 line
  cites (21, 22, 25, 27–29, 36–38, 40, 42–44, 81–84) all resolve; the
  *"1.2M+ not looked for"* disclosure is honest — it is at line 85. The URL
  was not re-fetched (see NOT CHECKED).
- **Attributions to the pulled §4 that ARE the pulled §4's words:** *"exactly
  one"* (`corpus-grade.md:346`), *"in the same table"* (`:353`), *"puts the
  flag's arrival at c3e9f91, shift 15"* (`:342`). Each is quoted to name a
  defect, which is the permitted use.
- **Headers.** CONFIDENTIAL, internal-audit class (law 8) — present, line 5.
  STATUS IN-GATE with the target-hash pointer — line 6–8; `lock.md` prints
  `3518455`. The teardown's size and date (4,423 B, 19 Aug 2026) match the
  parent receipt's census row (`corpus-grade.md:93`, `:249`) — graded as a
  transcription of a transcription, which is all it claims to be.
- **Law-4 diff against the A15 row itself** (`assumptions.md:414` at
  3518455): grade SOURCED, figures, the FALSE set (*"plan count (three),
  creative allowances (200 / 650), Trustpilot count, refund terms, BLUF and
  'generates on demand, then silence'"*), the flag's shift-5 arrival, the
  fetch receipt — all agree with the artifact. The disagreement is at :127
  (MF-6), outside the row.
- **§5 sentence 1 and sentence 3's "ten shifts".** 4 numeric FALSE + 2
  capability FALSE = 6; 15 − 5 = 10. Both reconstruct from the artifact's own
  tables, and sentence 1 survives MF-2's split.
- **The two NOT CHECKED limitations that are limitations** (the shut
  clinkworthy door; the `git log -S` scope) each record an attempt and a
  return, and the `-S` blind spot is stated in §1 in the same breath as the
  result, as rule 3 requires.

---

## NOT CHECKED BY THIS VERDICT — the attempt behind each

- **`clinkworthy/docs/competitor-holo.md` was not opened.** Attempt: none —
  the gate brief forbids `add_repo` and external fetches from this session.
  Returned: nothing. Every "teardown's claim" cell in §3 was graded only as a
  transcription carried from the parent receipt; whether the transcription
  matches the file is outside this verdict, as the artifact says it is
  outside the artifact.
- **The artifact's two recorded attempts** (`add_repo` denied by the
  permission classifier; `git clone --depth 1` failing on *"terminal prompts
  disabled"*) were not re-run, for the same reason. `sed -n 1,40p
  gtm/org/ops-log.md` shows shift 24's entry at the top — shift 25's is not
  yet written — so the artifact's own NOT CHECKED is the only record of those
  attempts.
- **"The clone was shallow (51 commits)"** — no instrument can see the
  pre-unshallow state from here. `git rev-list --count aa2b8a8` → 238 confirms
  only the post-unshallow count the artifact states.
- **`tryholo.ai/pricing` was not re-fetched**, per the brief. The fetch file's
  raw-HTML hash `8bc11e1f…` cannot be checked because the raw HTML is not
  retained by design; only the extracted text was verified.
- **Blind spot of this verdict, in the same breath:** it is a text-and-hash
  audit on one tree. Its law-4 sweep was string-keyed on `shift 15`,
  `c3e9f91`, `not broken`, `re-derived at round 2`, `next day`, `day after`
  and would miss a restatement in other words. Where it says an output
  "reproduces" it means the bytes agree at 22:57–23:04Z on 7 Sep; the `-S`
  outputs are date-dependent and the artifact is right that they are. It
  opened the r1 verdict only in part (the MF-3 and MF-4 sections, via `grep
  -A`), and the r2 verdict in full.

---

**Instrument of this verdict:** direct read of the tree at `3518455` and
`fd8e5a4`; `sha256sum`, `wc -l`/`-c`, `grep -n`/`-c`/`-rn`/`-i`, `sed -n`,
`cat -n`, `git rev-parse`, `git show <rev>:<path>`, `git show --stat`, `git
log -S` in both pasted case variants, `git log --date=iso`, `git rev-list
--count`, `git log --name-only`. Ledgers (`ops-log.md`, `inbox.md`, `lock.md`)
and `reviews/` excluded from the law-4 sweep; every remaining hit opened and
read for `~~` strike and `⚠ CORRECTED` context before being called live.
