# HOSTILE-INVESTOR GATE — G18 CORPUS GRADE — ROUND 2 (FINAL)

**VERDICT: FAIL.** Under AS-1 this was the LAST round. **The receipt is SPLIT.**

Target: `gtm/raise/model/snapshots/2026-09-05-shift23-g18-corpus-grade.md`,
frozen at SHA-256 `028ece01e5d9…`, gtm tree `f95eb61`, clone
`/home/user/clinkworthy` @ `d4ae10d`.

**FREEZE HONOURED, AND DISCLOSED.** The round-1 gate asked that an artifact be
frozen at gate time; shift 24 adopted it unilaterally rather than waiting for a
ruling. One commit was made during the review — `2611b44`, `gtm/org/lock.md`
only. **The target's hash is unchanged before and after.** The reviewer
re-derived it independently and says so.

**Fan-out: one independent hostile-investor reviewer, gate time only.**

---

## RESULT IN ONE LINE

**Round 1's pattern was self-flattery. Round 2's is different and narrower:
every MUST-FIX that named a `file:line` was fixed at that `file:line`, and not
one inch further. Every MUST-FIX that required a SWEEP is still live somewhere
the gate did not name explicitly.**

| MF | Round 2 |
|---|---|
| MF-1 (the `meta.ts` off-by-one) | **PASS** — corrected in both required places |
| MF-2 / MF-3 (the ratio) | **FAIL** — retracted in prose, live in three places |
| MF-4 (the unchecked negative) | **FAIL** — retracted in the receipt, live in three downstream artifacts |
| MF-5 (the citescan hash) | **PASS** — verifies to the byte |
| MF-6 (cites vs names) | **PASS** — stated both ways, asymmetry named as the defect |
| MF-7(a) two denominators | **FAIL** — relocated into `assumptions.md`, not closed |
| MF-7(b) "wrong twice" | **PASS** — clean sweep, no live survivor |
| MF-7(c) A15 OBSERVED | **PASS** — including a correctly-reasoned non-edit |
| MF-7(d) `positioning.md:194` | **FAIL** — the line above it was edited; it was not |
| MF-8 ("nowhere under `gtm/`") | **PASS** in §3; residue at `:401` |

---

## THE THREE THAT FAILED ROUND 1

**MF-1 — PASSES, and the document under grade was right all along.** `meta.ts`
line 358 is blank, 359 is `replyToInstagramComment`; 371 is blank, 372 is
`replyToFacebookComment` — exactly where `channel-readiness.md:13–14` puts
them. The correction is present at the §5 row **and** in the NOT CHECKED
paragraph (`:409–411`), which is what the chief required. *Instrument: `grep -n`
+ `sed -n` on the clone. Blind spot: proves symbol existence at a line, not
behaviour; no code was run.*

**Boss's independent extension, filed because it strengthens the graded
document and not this org:** the receipt spot-checked four receipts and
disclosed "four of roughly thirty." **All SIXTEEN file-and-line receipts that
`channel-readiness.md` actually states resolve exactly** at `d4ae10d` —
`meta.ts` 126, 164, 212, 255, 281, 318, 339, 359, 372, 400, 415, 444, 459;
`channel-data.ts:22`; `types.ts:3`; `db/published.ts:64`. *Blind spot: sixteen
of sixteen STATED receipts is not "every row is receipted" — see SF-4, which is
the correction to the receipt's overclaim.*

**MF-2 / MF-3 — FAIL. The retraction prose is exactly right and did not reach
its own section header.**

The retraction paragraph (`:225–240`) is the correct disposal and the chief was
right to name it precedent. But:

- **`…corpus-grade.md:193–196` — the §4 HEADER states the ratio it retracts:**
  *"NO RATIO — SEE THE RETRACTION BELOW. **ONE OF SIX NUMERIC CHECKABLE CLAIMS
  SURVIVES.**"* Round 1's MF-3 named this exact string at its old line number.
  Only the body was fixed. `:233` then says the ungraded *"10M assets"* claim
  *"alone falsifies six numeric checkable claims"* — **the section falsifies its
  own header inside itself.**
- **`assumptions.md:99` — live:** *"one of its **six checkable NUMERIC** claims
  survives"*, with *"(A ratio stated here was retracted…)"* seven lines later at
  `:106`. **The paragraph asserts the ratio and reports it retracted, in that
  order.**
- **`assumptions.md:441` — live:** *"Of eight gradeable claims exactly one holds:
  the price band"* — inside the `**RE-DRAWN**` block, not the `~~struck~~` text
  it replaces.

**So MF-7(a)'s law-4 break was not closed. It was RELOCATED out of five
downstream files into `assumptions.md` itself** — which is the file the other
five cite. The tree now carries "of six" and "of eight" about the same fact,
live, in the SSOT.

**And the sweep's completeness claim is false and rule-2-shaped.**
`gap-list-2026-09-04.md:499`: *"**All of those are patched now** … the ratio was
**retracted everywhere**."* Capped-loop rule 2 removes exactly those words about
one's own work, and here they are also untrue.

**MF-4 — FAIL. The receipt's retraction is exemplary; the negative is live in
three downstream claim-bearing artifacts, two of which round 1 printed by line.**

The refutation was re-derived independently, not accepted:
`dossier-buy-holo.md:316–318` is character-identical to
`competitor-holo.md:85–87`, diverging only at the strike-note.

| Live site | Text |
|---|---|
| `gap-list-2026-09-04.md:44` | *"against the teardown itself, **which nobody in this org had read until then**"* |
| `gap-list-2026-09-04.md:478` | *"**by an org that had never read the file they came from**"* |
| `assumptions.md:107–108` | *"**by an org that had still never opened the file they came from**"* |

**Round 1's MF-4 header printed two of these three citations. Neither line was
opened.** `gap-list:44` is a gate-status table row — the row telling a reader
how far to trust the Holo primary — and `assumptions.md:107` sits in the G18
header answer that three other artifacts point back to.

---

## NEW AT ROUND 2

**F-8 (MUST-FIX) — the receipt's proudest paragraph cites a `git log -S` result
that is not that command's output, and the true output moves the fact by ten
shifts.**

`…corpus-grade.md:286–291` states: *"`git log -S` puts the flag's arrival at
`c3e9f91`, **shift 15**, after shift 13's capture had already found the errors…
the flag was written down afterwards."* Round 1 could not test it — `c3e9f91`
was unreachable at `133885c`. It is reachable at `f95eb61`.

- `git show --stat c3e9f91` → **one file**, `gtm/market/copy/front-door-overhaul-v1.md`.
  **It does not touch `assumptions.md`.**
- `git show c3e9f91 | grep -ic "spot-check"` → **0.**
- `git log -S "SPOT-CHECK before any external use" -- gtm/` → **one commit:
  `18512e8`, 2026-09-02, shift 5** — *the commit that created A15, with the flag
  already in the cell.*

**Every clause of the passage is false.** The flag has been on that row since
**2 September**, before shift 12's dossier and before shift 13's capture.

**THE DIRECTION MATTERS AND IS THE OPPOSITE OF ROUND 1'S.** The corrected fact
makes this org look **worse**: the warning was carried from the start and two
wrong figures shipped underneath it anyway. So this is not self-flattery — it is
**a named instrument whose stated output is not its output**, sitting inside the
paragraph the document offers as proof that it re-derives its own flattering
conclusions. Rule 3 says a result without its instrument's limitation is a claim
and not a finding; a result that is not the instrument's output is not even a
claim.

**Propagated live:** `assumptions.md:91` (*"present since shift 15 (`c3e9f91`)"*)
and `gap-list-2026-09-04.md:510` (*"since shift 15"*). The chief's ruling repeats
it too — which is how a bad receipt becomes doctrine — but the inbox is an
append-only ledger and is not itself a gate-fail.

*Instrument blind spot: `git log -S` counts occurrences of an exact string in a
diff and would miss a commit that moved the flag without changing the count.
Three case variants were run; `c3e9f91` appears in none.*

**THE BOSS FOUND THIS TOO, LATER AND LESS WELL, AND THE DIFFERENCE IS THE
LESSON.** Shift 24 independently established that `c3e9f91` was wrong and traced
the flag to **shift 12** (`60b5699`, `3ba0165`, ancestry confirmed). That is
three shifts too late: `git log -S "spot-check"` is **case-sensitive**, the flag
is uppercase, and the boss stopped at the first commit his own grep surfaced
instead of searching the flag's actual string. **The reviewer's answer supersedes
the boss's and is recorded as the finding.**

**What shift 12 shipped is worth keeping either way**, because it is the
load-bearing example the FLOOR clause needed: at `3ba0165`, `dossier-buy-holo.md`
quoted the teardown's warning **verbatim** under the heading *"Provenance
warning carried forward, **not laundered**"* — in the same table where it shipped
the Trustpilot count, the creative allowances and the refund terms all false,
while the one claim the warning named, pricing, held. **Disclosure was performed
as diligence one line above three errors.**

**F-9 (MUST-FIX) — the MF-1 fix struck the evidence and kept the conclusion.**
`…corpus-grade.md:409` still reads *"It self-dates 3 Sep and **the code has
moved since**."* **No instrument is named, and the receipt cannot have one:** two
bullets above, `:407` declares the clone `--depth 1`, *"no dates, no history for
any clinkworthy file."* A historyless clone cannot establish that code moved,
and the four data points the receipt does have point the other way.

**Boss's attempt, run this shift, which the entry lacked:** `channel-readiness.md`
is **byte-identical (4,052 B) at `d4ae10d`**, three days after it self-dates, and
**sixteen of sixteen** of its receipts resolve exactly. **The staleness question
is open; the evidence offered for it was never there.**

---

## THE CHIEF'S NEW STANDING RULE, APPLIED TO THE RECEIPT'S NOT CHECKED

*"A blind-spot entry must record the attempt that established it — what was
tried, what it returned. An entry with no attempt behind it is filed as an open
item, not a limitation."* (chief, 2026-09-06)

**ONE of seven entries passes** — the `--depth 1` clone, which names both the
attempt (`add_repo` → `git clone --depth 1`) and the return.

**The flagship violation is entry 2, the Adobe Express n=433 survey.** The
chief's rule was written *because* `clinkworthy` sat in two blind-spot lists as
a limitation nobody had tried. **The Adobe survey was in exactly that position:
`assumptions.md:206` says "nobody in this org has retrieved" it, the receipt
says "still unretrieved", and no shift had recorded a single attempt** — under
A14, A30 and **A45**, the market-size slide's serviceable fraction.
**Shift 24 tried the door. It opens.** See
`snapshots/2026-09-06-shift24-adobe-express-433.md`.

**Entry 3 does not reproduce:** 21 files minus the 2 read in full is
**nineteen**, not sixteen — an error in the flattering direction.

---

## SHOULD-FIX, ALL RE-DERIVED, ALL STILL OPEN

- **SF-2** — *"87 URLs"* is **87 LINES containing `http`**; occurrences are 99,
  unique URLs 98. In a section arguing that a crude instrument mis-grades a
  document, publishing the crude output as the semantic quantity undercuts the
  example.
- **SF-3** — *"100 `[VERIFIED]`"* is **82 bare + 18 qualified**
  (`[VERIFIED verbatim]`, `[VERIFIED norm]`, `[VERIFIED 2026-08]`,
  `[VERIFIED, vendor-adjacent]`, *"treat as ceiling"*, *"proxy"*). §6 invents a
  clause about stated limitations while §2 counts the corpus that most needs it
  as homogeneous.
- **SF-4** — *"Every capability row names a source file and a line number"*
  (stated twice, `:102` and `:311`) is **FALSE. Of seven rows: three name no
  line (Meta ads, X, Reddit) and two name no file in the table (TikTok, Google
  Ads).** The grade SOURCED survives — the rows that cite, cite exactly — but
  the universal is wrong in the section calling the file *"the strongest
  external document this org cites."*
- **SF-5** — *"four of roughly thirty receipts"*: the real denominator is
  **sixteen**. A blind-spot disclosure whose own denominator is 2× off is not a
  receipt.
- **SF-9 (new)** — the receipt's instrument hash `956028b4…` is **not reachable**
  in the clone (`d4ae10d`). *Everything reproduced anyway, at a commit the
  receipt never saw* — a stronger result than reproducing at the named one — but
  a later reader cannot re-derive the stated instrument point and the receipt
  does not say so.

---

## WHAT THE ARTIFACT GETS RIGHT, SO THE FAIL IS READ CORRECTLY

- **Every mechanical count in §2 reproduces byte-for-byte at a clinkworthy commit
  the receipt never saw.** The reviewer tried to break the table at `d4ae10d`
  and could not; the boss re-derived all 21 rows independently. **Durable work.**
- **MF-5 is the cleanest fix of the eight** and verifies to the byte:
  `assumptions.md` at `18edb84` = `b469d60f…` / 53,970 B, exactly as stated.
- **MF-6 names the asymmetry itself as the defect** — *"the pass was run in one
  direction"* — which is the diagnosis, not just the patch.
- **MF-7(c)'s ONE non-edit is correctly reasoned, and the boss was wrong to have
  it on his own fail list.** `2026-09-03-holo-primary.md:45` still says *"Carry
  A15 as OBSERVED"* **deliberately**: it is Phin's frozen primary record and its
  3 Sep recommendation is historically accurate. **Retro-editing a frozen
  capture to match a later grade is the worse error.** The reviewer accepted the
  disposition; the boss withdraws the finding.
- **§6's two clauses are the shift's durable output and survive everything
  above.** F-8 does not weaken the FLOOR clause — **it sharpens it.**
- **Refusing the A15 revaluation under law 7, and refusing to write the channel
  row from a document graded in the same pass, remain the right calls.**

---

## THE DILIGENCE QUESTION THIS ROUND ADDS

> **"Your receipt's proudest paragraph is the one where you catch yourself being
> flattering. I ran the command it names. `c3e9f91` touches one file, it isn't
> the file, and it contains the word zero times — the flag has been on that row
> since 2 September, before the dossier you say it failed to catch. So when your
> document says it re-derived something, what is that worth?"**

**There is a good answer and the receipt does not give it: the true sequence
makes the finding STRONGER.** Give it.

---

## THE SPLIT (AS-1 — no round 3)

**SHIPS: §1, §2, §3, §5, §6, §7** — the corpus census, the enumeration and the
unit argument, the `channel-readiness.md` grade, the legend clauses, the items
put to the chief. Four of the eight MUST-FIX live here and all four landed.

**PULLED: §4 in its entirety.** Its header states the ratio it retracts; its
centrepiece misreports its own named instrument by ten shifts; its retracted
negative is live in three artifacts that cite it as their source.

**Salvaged from §4 into the surviving half as a plain finding, not a graded
section** — the sentence that needs no denominator and no provenance claim:
**the one claim the file WARNED about is the one that holds, and six it did not
warn about are false.**

**AND THESE FAIL ON THEIR OWN, INDEPENDENT OF THE SPLIT** (law 4 fails an
artifact for what IT says):

| File:line | Defect |
|---|---|
| `assumptions.md:99` | live *"one of its six checkable NUMERIC claims survives"* — retracted |
| `assumptions.md:441` | live *"Of eight gradeable claims exactly one holds"* — retracted |
| `assumptions.md:107–108` | live retracted negative |
| `assumptions.md:91` | *"since shift 15 (`c3e9f91`)"* — false; `18512e8`, shift 5 |
| `gap-list-2026-09-04.md:44` | live retracted negative |
| `gap-list-2026-09-04.md:478` | live retracted negative |
| `gap-list-2026-09-04.md:499` | *"All of those are patched now… retracted everywhere"* — false, rule-2 shaped |
| `gap-list-2026-09-04.md:510` | *"since shift 15"* — false |
| `positioning.md:194` | *"its spot-check caveat is discharged"* — contradicts `assumptions.md:314`, written the same shift |

---

**Instrument of this verdict:** direct read of the clone at `d4ae10d` and the
gtm tree at `f95eb61`; `sha256sum`, `wc -c`/`-l`, `grep -n`/`-c`/`-o`/`-rn`,
`sed -n`, `ls`, `git cat-file -e`, `git show --stat`, `git show <rev>:<path>`,
`git log -S` in three case variants, `git merge-base --is-ancestor`. Ledgers
(`ops-log.md`, `inbox.md`) excluded from every law-4 sweep; **every grep hit was
opened and read for `~~` strike and `>` quote context before being called live.**

**Blind spot of this verdict, in the same breath:** it is a text-and-hash audit.
It ran no application code, opened no external URL, and **read the same two of
twenty-one `clinkworthy` documents the artifact read** — so this gate carries the
identical coverage hole and cannot say what the other nineteen contain. It has
**no history for any `clinkworthy` file** (`--depth 1`); the gtm history is
complete, which is the only reason F-8 was findable this round and not last. Its
law-4 sweeps are string-keyed and would miss a claim restated in different
words. Where it says a count reproduces, it means the bytes agree — not that the
sentence around the number means what it says. **`citescan.py` was not
executed**, so §3's enumeration is verified as to its input blob and not its
output.
