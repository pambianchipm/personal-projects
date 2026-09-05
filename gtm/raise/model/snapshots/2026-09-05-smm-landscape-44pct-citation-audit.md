# RECEIPT — the three 44%s in `research-smm-landscape.md`, and which one A30 cites

CONFIDENTIAL — Lane A raise receipt (law 8). **Internal-audit class:** it grades
this org's own citations, so it is confidential regardless of directory.
STATUS: **RAW CAPTURE + AUDIT.** The capture is mechanical and re-checkable; the
reading in §4 is an inference and is labelled as one.
OWNER: GTM boss · shift 21, 2026-09-05
MANDATE: the chief's directive of 2026-09-05 07:0x, items 1-3. Shift 20 flagged
this as "a judgement call you may want to reverse" and did not clone the repo.
This shift cloned it.

---

## §1. THE ARTEFACT, HASHED

| Field | Value |
|---|---|
| Repo | `pambianchipm/clinkworthy` (read-only; the GTM org never writes there) |
| Clone HEAD | `5eeb1c8714b57796255411746473a93bac809301` |
| Last commit touching the file | `5eeb1c8` · 2026-09-05 06:56:42 +0000 |
| Path | `docs/research-smm-landscape.md` |
| SHA-256 | `696a6b69fd52be9875677b213084e77b78e9f5968bc7abc8228e3375bf15c269` |
| Bytes | 62,637 |
| Lines | 451 |
| Fetched | 2026-09-05, shift 21, `git clone --depth 1` |

Every quotation below is verbatim from that file at that hash.

---

## §2. THERE ARE **THREE** UNRELATED 44%s, NOT TWO

The chief's directive warned of two. `grep -n "44%"` over the file returns
**12 lines carrying three distinct statistics**:

**CORRECTED 2026-09-05 by the round-1 gate (SHOULD-FIX 1): this sentence
originally read "eight lines". `grep -c "44%"` returns 12, and the table below
always listed 12. A receipt whose banner reads "mechanical and re-checkable" 
miscounted its own mechanism, and an outside reviewer caught it, not its
author.**

| # | Statistic | Instrument | Population | Lines |
|---|---|---|---|---|
| **44-A** | **44% post weekly** (cadence) | Adobe Express, n=433 | **NOT STATED** — see §4 | 38, 63, 225, 230, 256 |
| **44-B** | **44% spend $500-2,000/mo** on SMM (spend) | Clutch 2025 | SMBs **already buying** SMM | 11, 59, 257, 439 |
| **44-C** | **44% can't fully disconnect** (well-being) | Metricool 2026, n=927 | **Freelance SMMs**, not owners | 73, 224, 298 |

**44-C was not in the directive and is the one most likely to be crossed next:**
it is about *practitioners*, and it sits in the same pain-ranking sentence as
owner statistics at line 224. Any future row citing "44%" for owner burnout
would be citing a freelancer survey.

**Blind spot of the instrument used:** `grep -n "44%"` finds only the literal
string `44%`. It cannot see the same statistic written as `0.44`, "forty-four",
"just under half", or restated without its figure. Those forms were not searched
for and may exist.

---

## §3. WHICH ONE A30 CITES — ANSWERED, AND THEY ARE **NOT** CROSSED

**A30 cites 44-A, the Adobe cadence figure.** Its grade cell names the
instrument, the sample size and the section: *"63/44 and the reach figure:
landscape report §2.1 (Adobe Express n=433 [VERIFIED, vendor-adjacent — treat as
a ceiling])"*. Line 63 is inside §2.1 (§2.1 spans lines 51-66). The figure at
line 63 is the cadence figure.

**A11 separately and correctly carries 44-B**, the Clutch spend band, with the
source's own sampling caveat attached: *"SOURCED (VERIFIED grade in origin doc,
with its own sampling caveat) — Clutch 2025"*.

**So step 4 of slide 4 does not rest on a spend statistic.** The failure mode
the chief told this shift to look for **is not present**. Two rows cite two
different 44%s and each cites the right one.

**What this does NOT establish:** that step 4 is sound. It establishes only that
it is not *this* defect. §4 and the gate address whether it is another one.

---

## §4. THE POPULATION OF n=433 — **THE SOURCE NEVER STATES IT**

This is the question shift 20 sent here to answer. **The answer is that the file
does not contain one.**

Every line naming `Adobe` or `433` (six lines: 13, 38, 63, 141, 225, 441) was
read in full. **None states who the 433 respondents were.** The file names the
vendor, the sample size and a grade; it never defines the panel.

**What the file DOES say, verbatim:**

> **line 63 (§2.1):** *"63% feel pressure to post daily; ideal 7x/wk vs 44%
> posting weekly; 88% of owners **on TikTok** report posting burnout (Adobe
> Express, n=433 [VERIFIED, vendor-adjacent])."*
>
> **line 38 (§1.7):** *"Actual owner cadence: 44% weekly, 18% daily, vs a felt
> ideal of 7x/week (Adobe Express, n=433 [VERIFIED])."*
>
> **line 13 (editor's note 5):** *"**The Adobe Express 88% burnout figure** is
> owners-on-TikTok, self-selected, vendor survey — a ceiling for the segment."*
>
> **line 441 (open question 6):** *"**Adobe Express n=433 sample bias unflagged
> in use**: the 88% burnout figure is from owners *on TikTok* (self-selected,
> vendor survey) but is generalized to the whole solo segment."*

**THE AMBIGUITY IS UPSTREAM OF `assumptions.md`, EXACTLY AS THE CHIEF SAID.**
A14 copied line 63's *"88% of owners on TikTok"* into *"TikTok-active owners"*.
A30 copied line 63's *"44% posting weekly"* into *"owners"*. **Both copies are
faithful.** Neither row invented a population; the source attaches the qualifier
to one figure and drops it from the other, in a single sentence, and never
defines the panel behind either. **A row that inherits a source's ambiguity is a
different defect from a row that invents one, and the remedy is different: the
methodology, not the table.**

### §4a. AN INFERENCE THAT POINTS **AGAINST** THE CONSERVATIVE READING — DISCLOSED BECAUSE IT FLATTERS OUR NUMBER

The chief recommended the conservative reading (44% as a fraction of an
already-posting / TikTok-active panel), which moves the estimate toward the LOW
end of the published band. **The evidence this shift found points the other
way**, and it is recorded here rather than omitted, because omitting evidence
that cuts against a recommendation is how a table gets laundered.

The inference: **this document flags population defects attentively and by
name.** Editor's note 3 flags the Clutch numerator. Editor's note 5 flags the
88% as owners-on-TikTok. Open question 6 flags the 88% again as
over-generalized. Note 2 reconciles two engagement-hours figures explicitly *by
population*. The AI-adoption stat at §2.1 carries its own "vendor research —
treat as ceiling." **In a file this attentive to denominators, the 44% cadence
figure is never once flagged as population-limited** — and open question 6, the
one place the panel's bias is discussed at length, names only the 88%. Had the
whole n=433 panel been TikTok-only, that complaint would apply to the cadence
figure identically and the editor would have said so.

**WHY THAT INFERENCE IS NOT ENOUGH TO MOVE THE ROW, AND WHY THIS SHIFT TAKES
THE CONSERVATIVE READING ANYWAY:**

1. **It is an argument from editorial silence.** An unflagged figure is not a
   stated population. Law 2 wants a real document read, and the document read
   here **does not answer the question** — that is the finding, not a licence to
   fill the hole with the reading we prefer.
2. **The panel is unstated, and an unstated population on a survey already
   graded "treat as a ceiling" cannot be defended at its top.** The direction of
   an unknown is not evidence about it.
3. **Shift 20's asymmetry finding independently argues the same direction:**
   doubling the fraction yields 88% of every firm under 20 employees in five
   industries, which is not credible; halving it yields ~123,000, which is.

**THE READING THIS SHIFT ADOPTS AND WHY IT DIFFERS FROM THE CHIEF'S STATED
REASON.** Same destination — the conservative reading, the low end of the band —
but **not** on the ground that the source says the panel is TikTok-active. **It
does not say that.** On the ground that the source states no panel at all.

### §4b. THE DEFECT NEITHER READING FIXES

**Resolving A14 against A30 does not repair step 4, and this shift wants that on
the record before the gate rules on it.** Whatever the 433 were, they were
respondents to a design vendor's survey. Slide 4's base is 556,857 employer
firms drawn from Census SUSB. **Applying a percentage measured on the first
population to the second is a population transfer with no bridge**, and that
holds under *both* readings of the qualifier. The A14/A30 question is about
which of two wrong denominators is less wrong.

**This is stated as the audit's own view and is NOT a gate verdict.** The gate
is a separate act by a separate reviewer (law 7); its verdict is filed to
`gtm/org/reviews/`.

---

## §5. THE THIRD ITEM — G16 ARRIVING FROM A SECOND DIRECTION

Open question 4, line 439, verbatim:

> *"**Owner-run vs. outsourced contradiction in 2.1**: segment defined as 'no
> marketing hire, owner posts personally,' yet the load-bearing Clutch stat says
> 44% of small businesses already spend $500-2,000/mo on social media
> *management* — if true, a large share of the 'solo owner' TAM is already
> someone else's client, which the ICP pay score of 7 quietly depends on."*

Shift 20 opened **G16** — *does a one-person business count as a customer?* —
from the employer/nonemployer ratio. **The product repo's own research reached
an adjacent hole independently**, from the opposite direction: not "is the unit
too small to count" but "is the unit already someone else's account."

**These are two different questions and this receipt does not merge them.** G16
asks who is IN the base. Line 439 asks who in the base is ALREADY SERVED — a
step-4 question, not a step-1 question. **They compound rather than duplicate:**
a firm can be both counted and taken. Note that 44-B's own caveat (line 11)
caps how far line 439 goes — Clutch sampled businesses *already buying*, so it
does not license "44% of the base is served."

---

## §5a. WHAT THIS AUDIT WALKED PAST — added by its author after the round-1 gate

**This audit asked what population `n=433` has. It never asked whether
`research-smm-landscape.md` is evidence at all.** The round-1 hostile-investor
gate did, and the answer is on the file's own line 3: it is the output of a
**16-agent research swarm** that **"grades itself"**, containing **zero URLs**
(`grep -c http` = 0) and **100 `[VERIFIED]` tags** assigned by agents to other
agents' output. **Every quotation in this receipt is faithfully transcribed and
every hash is correct — and the document under all of it is self-graded.**

**The NOT CHECKED item below — "the primary instrument was not retrieved" — was
written by this audit as a missing detail. It was the whole question.** Verdict:
`gtm/org/reviews/2026-09-05-slide4-a40-a46-hostile-investor-r1.md`.

---

## §6. NOT CHECKED

- **Whether the Adobe Express survey itself states its panel.** The primary
  instrument was not retrieved; only the landscape report's citations of it.
  That retrieval is the only thing that actually answers §4.
- **Non-literal restatements of any of the three 44%s** (§2 blind spot).
- **Whether `research-smm-landscape.md` changed between shift 20's reasoning and
  this hash.** The file's last commit is 2026-09-05 06:56:42Z — *after* shift 20
  closed at ~18:57 on 4 Sep. **This shift did not diff the two versions**, so it
  cannot say whether the lines it quotes are the ones shift 20 reasoned about.
- **Every other citation in `assumptions.md` against this source.** Only the
  44%-family rows (A11, A14, A30, A45) were traced.
- **The other two 44%-adjacent instruments' panels** (Clutch 2025, Metricool
  2026 n=927) beyond what the file states.
