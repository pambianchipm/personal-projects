# Upwork Catalog Listing 3 — AI Chatbot / Agent Build

Paste-ready copy. Prices/tiers per `catalog-strategy.md`. Limits: title ≤75, tier titles
≤30, tier descriptions ≤80, summary ≤1,200, FAQ answers ≤300.

---

## Title

- **A (recommended):** `a custom AI chatbot trained on your business data (RAG), deployed live` *(70)*
- **B:** `an AI chatbot or agent grounded in your docs — no generic answers` *(65)*

## Category & attributes

- Category: **AI Services → AI Chatbot Development**
- Attributes: "Chatbot development" / "RAG" where offered.
- Industry attributes (choose up to 5): **Ecommerce · Retail & Wholesale ·
  Health & Medical · Real Estate · Travel & Tourism**. Skews toward customer-facing,
  inquiry-heavy verticals — that's who buys bots; the Advanced action-agent tier maps
  directly to booking/scheduling use cases.

## Project summary (1,182 chars — limit 1,200)

A chatbot that actually knows your business — grounded in your documents, policies, and
data via retrieval (RAG), not a generic ChatGPT wrapper that makes things up.

What you get: a working assistant trained on your real content, deployed where your
customers or team already are (website widget, Slack, or support desk), an accuracy
evaluation pass on real questions, and documentation plus a handoff walkthrough. On the
Advanced tier the bot doesn't just answer — it acts: booking appointments, creating
tickets, updating your CRM, with human approval on anything sensitive.

Relevant background: I'm a business analyst at Meta, where I built an AI system serving
~35 engineering teams (pattern recognition + real-time drafting with human-in-the-loop
approval), and I shipped AutoFinder — a vehicle intelligence platform — solo end to
end. I design for the failure cases:
what the bot says when it doesn't know is what separates a production system from a
demo.

The prompt and retrieval architecture ship documented, so your team can maintain and
extend it after I'm gone. Not sure a chatbot is the right fix? Start with my AI
Workflow Audit — the fee credits toward this build.

## Pricing tiers

| Field | Starter | Standard | Advanced |
|---|---|---|---|
| **Custom title** | RAG Chatbot *(11)* | Multi-Source Chatbot *(20)* | AI Agent That Takes Action *(26)* |
| **Custom description** | Chatbot grounded in one knowledge source, deployed as a web widget. *(67)* | Multiple sources, one channel (Slack, site, or desk) + accuracy eval. *(69)* | Agent with tools — booking, tickets, CRM updates — human-approved. *(66)* |
| **Delivery days** | 7 | 14 | 21 |
| **Live consultation (min)** | 30 | 60 | 90 |
| **Price** | $1,000 | $2,000 | $3,500 |
| **Revisions** | 1 | 2 | 2 |

Tier logic: capability is the axis. Starter = answers questions from one source (your
site, docs, or FAQ). Standard = production-grade: multiple knowledge sources, deployed
into a real channel, with an eval pass proving accuracy. Advanced = the bot becomes an
agent — it does things, not just says things, with human approval gates.

## Project steps (buyer-visible)

1. **Scope call** — We define what the bot must know, where it lives, and what a
   right answer looks like. You send the knowledge sources (docs, site, help center).
2. **Knowledge build** — I structure your content for retrieval and design the prompt
   architecture — including the "I don't know" behavior and escalation path.
3. **Working version** — You get a private test link and break it with real questions.
   I tune retrieval and tone against your feedback.
4. **Evaluation & deploy** — We run an accuracy pass on a question set from your real
   traffic, then deploy to your channel (widget, Slack, or support desk).
5. **Handoff** — Documentation of the prompt + retrieval setup, a walkthrough call, and
   instructions for updating the bot's knowledge yourself.

## Requirements from the buyer (asked at order time)

1. What should the bot handle — support questions, sales questions, internal team
   questions? Give 5–10 example questions it must answer well.
2. What content should it learn from (website, docs, help center, PDFs), and can you
   share access or exports?
3. Where should it live — website widget, Slack, or support desk?
4. What should it do when it doesn't know — hand off to a human (who?), collect an
   email, or say so plainly?
5. (Advanced tier) What actions should it take — booking, tickets, CRM — and in which
   systems?

## FAQs (answers under 300 chars)

**How is this different from just using ChatGPT?**
ChatGPT doesn't know your business and will improvise when unsure. This bot answers
from your actual content, cites where answers came from, and says "I don't know — let
me connect you" instead of making things up. *(211)*

**What happens when the bot doesn't know the answer?**
That's designed, not left to chance: it admits it, then follows your chosen path —
escalate to a human, collect contact info, or point to a resource. The failure behavior
is part of every build, including Starter. *(208)*

**Can it update itself when our docs change?**
You'll be able to add or refresh knowledge sources yourself — the handoff includes
instructions. For frequently-changing content we can set up an automatic re-sync as a
scoped add-on. *(180)*

**Which platform/stack do you use?**
Claude or GPT APIs with a retrieval layer, chosen to fit your case — no proprietary
platform, no lock-in. You own the accounts, the code, and the data. *(150)*

**Is our data safe?**
Your content stays in your accounts; nothing is used to train public models. I'm happy
to sign an NDA, and API providers with zero-retention options are used where available. *(174)*

**What if we're not sure a chatbot is what we need?**
Start with my AI Workflow Audit project — it maps where automation actually pays off in
your operation, and the audit fee is credited toward this build within 30 days. *(166)*

## Search tags (5)

`ai chatbot` · `chatbot development` · `rag` · `ai agent development` · `customer support ai`

*(Already distinct from the other two listings' tag sets — no changes needed. Accept
Upwork's nearest official tag where the exact phrase isn't offered.)*

## Gallery note

Best image: side-by-side of a generic wrong answer vs. your bot's grounded answer with
a source citation. Second: architecture diagram (sources → retrieval → bot → channel,
with the human-escalation path visible). AutoFinder screenshots work as a third slot.
