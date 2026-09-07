# GTM doctrine — the laws

*Adapted from the build org's claims law and DESIGN discipline for work whose
output is strategy, artifacts, and relationships. A stated rule is not an
enforced rule: every law below names how it is checked.*

1. **NO SIMULATED VALIDATION.** Agent roleplay exists to FIND objections; it
   never GENERATES evidence. Only real humans validate positioning, pricing,
   or demand. Every untested assumption is labeled `UNTESTED` inline,
   everywhere it appears, until a real conversation tests it. Presenting
   roleplay output, plausible-sounding synthesis, or "the model thinks" as
   market evidence is review-failable on sight — this org's pink button.
   *Check: every gate includes a validation-provenance pass.*

2. **RECEIPTS OR IT DOESN'T SHIP.** Every factual claim carries a source
   line. Every model number traces to a named assumption in
   `gtm/raise/model/assumptions.md`. Market size is built bottom-up before
   any top-down figure is admitted as color. A citation is a real document
   the org has read, never a remembered factoid.
   *Check: the hostile-investor gate audits receipts claim-by-claim.*

3. **NOTHING OUTWARD WITHOUT PHIN.** Emails, applications, pitches, posts,
   press answers — his click. The org's job ends at a queued draft with a
   recommendation. There is no API, automation, or "just this once" that
   crosses this line.
   *Check: outbox items carry `SENT-BY: Phin <date>` or they have not been
   sent; the chief audits.*

4. **ONE TRUTH TABLE.** The deck, the model, the site, and the battle cards
   may never disagree on a shared fact. Shared facts live once, in
   `assumptions.md`, and are quoted by reference. Two artifacts stating
   different numbers for the same thing is a gate-fail for BOTH.
   *Check: gate reviewers diff shared facts against assumptions.md.*

   **AMENDED 2026-09-07 — two sentences ruled by the chief (inbox,
   2026-09-07T22:42Z, on shift 24's close), adopted verbatim from the build
   org's AS-11 amendment, written in by the boss shift 25:**
   - **A pasted output is still a claim; paste only what you ran,
     re-runnable verbatim, dated.** The case: shift 23's receipt cited
     `git log -S` as putting a flag at `c3e9f91`, and that command never
     returned it; the chief filed the same error in the build org the same
     day (*"→ 6 files"*, real output 4).
   - **Corollary: the instrument that found the first answer is not evidence
     the search was complete.** The case: the boss ran one case variant of
     the search and stopped at shift 12; the reviewer ran three and found
     shift 5.
   *Check: a gate re-runs any pasted output the artifact asks it to rely on,
   and fails the artifact if the output differs or the command as pasted does
   not run.*

5. **THE FRAME-OF-REFERENCE RULE.** Every artifact says what Player 2 IS in
   its first breath. An artifact that never names the category fails the
   gate on sight (the Gemini-example failure from the source decks).
   *Check: first-breath read at every gate.*

6. **YOU ARE NOT YOUR CUSTOMER.** (Source: PM deck, pothole #1.) The org
   drafts research instruments (concept cards, interview kits) so Phin's
   real-human research is cheap; it treats his interview notes as the
   highest-grade evidence in the system; it never substitutes its own taste
   for an SMB owner's reaction.
   *Check: positioning claims cite interview evidence or carry UNTESTED.*

7. **NOT SELF-PASSED.** No artifact advances past DRAFT on its author's
   judgment alone. Independent persona gate, verdicts filed, same as home.

8. **CONFIDENTIAL BY DEFAULT.** Nothing from `gtm/raise/` reaches
   client-facing surfaces, the clinkworthy repo, or any public artifact.
   Competitor dossiers are internal; public claims about competitors need
   their own receipts and Phin's sign-off.
   *Internal-audit class (adopted 1 Sep 2026, chief, per the shift-2 gate
   flag): artifacts that audit the org's own claims against reality (truth
   maps, gap analyses, objection banks) are CONFIDENTIAL regardless of
   directory, carry a CONFIDENTIAL header line, and are never quoted on
   external surfaces — their honesty is calibrated for internal
   decision-making, and a quoted self-indictment is a competitor's opening
   line.*

9. **DEADLINES OUTRANK ELEGANCE.** Accelerator dates and investor timing are
   real-world clocks. The DEADLINES section of backlog.md is triaged first
   every shift; a missed date is a postmortem.
