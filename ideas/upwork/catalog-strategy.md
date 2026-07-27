# Upwork Catalog Strategy — The Three-Project Ladder

Decided 2026-07-27. This file is the source of truth for what's listed, why, and at what
price. The paste-ready copy for each listing lives in its own file in this folder.

## The ladder

Three projects, one funnel. Every buyer enters wherever their confidence level is, and
each project hands off to the next:

1. **AI Workflow Audit** — the low-risk diagnostic. For buyers who know something should
   be automated but not what. Advanced tier produces a build-ready 90-day roadmap, which
   *is* the scope document for projects 2 and 3.
2. **AI Automation Build** — the core money-maker. One workflow automated end-to-end
   inside the client's existing tools. This is where audit buyers convert.
3. **AI Chatbot / Agent Build** — the search-volume play. "AI chatbot" is one of the
   highest-volume catalog searches; this captures buyers who arrive already knowing the
   shape of what they want. Ladders internally from answer-bot → agent-that-acts.

**KPI Dashboard** (the original doc's #3) is deferred: it targets a different buyer
intent and would dilute early reviews across a fourth listing. Add it once the first
three have reviews — it serves the data-analytics specialized profile.

## Pricing

Premium from day 1 (decided over the doc's cheap-early-jobs posture): round numbers, no
.99 — charm pricing reads consumer; round numbers read consulting.

| Project | Starter | Standard | Advanced | Delivery | Consult min |
|---|---|---|---|---|---|
| AI Workflow Audit | $250 | $450 | $850 | 3 / 5 / 7 d | 30 / 60 / 120 |
| AI Automation Build | $1,250 | $2,500 | $4,500 | 7 / 14 / 21 d | 30 / 60 / 90 |
| AI Chatbot/Agent Build | $1,000 | $2,000 | $3,500 | 7 / 14 / 21 d | 30 / 60 / 90 |

**Tier scoping axes** (each project scales along ONE axis so buyers self-select):

- Audit: **how many workflows** examined (1 / up to 3 / up to 6) + roadmap on Advanced.
- Automation Build: **complexity** — single-step automation with 1 integration → full
  workflow with up to 3 integrations + human-approval loop → multi-workflow system with
  shared data.
- Chatbot Build: **capability** — RAG chatbot on one knowledge source (web widget) →
  multi-source + one channel (Slack/site/support desk) + accuracy eval → agent that
  takes actions (booking, tickets, CRM writes) with human approval.

## Industry attributes & search tags (per listing)

Industry checkboxes act as browse filters (unchecked = invisible to that filter), so
each listing covers its 5 best verticals. Tags are deliberately de-overlapped — each
listing indexes separately, so distinct tags widen total search coverage.

| Listing | Industries (5) | Search tags (5) |
|---|---|---|
| Audit | Ecommerce, Financial Services, Legal, Real Estate, Health & Medical | ai audit, ai consulting, ai strategy, process improvement, automation consulting |
| Automation Build | Ecommerce, Financial Services, Legal, Real Estate, Marketing & Advertising | ai automation, workflow automation, business process automation, ai integration, api integration |
| Chatbot Build | Ecommerce, Retail & Wholesale, Health & Medical, Real Estate, Travel & Tourism | ai chatbot, chatbot development, rag, ai agent development, customer support ai |

Intent split: audit owns consulting/strategy queries, automation owns automation
queries, chatbot owns bot/agent queries. Deliberately skipped industries: Software
(SaaS founders hire hourly devs, not productized consulting), Government/Nonprofit
(procurement doesn't fit catalog buying).

## Economics floor

Every tier must pencil to **≥ $150/hr effective** at honest effort estimates. Current
check (keep this table updated when prices change):

| Tier | Price | Est. hours | Effective |
|---|---|---|---|
| Audit Starter / Standard / Advanced | 250 / 450 / 850 | 1.5 / 3 / 5 | $167 / $150 / $170 |
| Automation Starter / Standard / Advanced | 1,250 / 2,500 / 4,500 | 8 / 15 / 28 | $156 / $167 / $161 |
| Chatbot Starter / Standard / Advanced | 1,000 / 2,000 / 3,500 | 6 / 12 / 22 | $167 / $167 / $159 |

If a tier's real fulfillment time creeps past its estimate on two consecutive orders,
raise the price or cut the scope — don't eat it silently.

## Capacity & queue caps (Upwork "projects at one time")

Assumption: full-time freelance (ex-Meta as of 2026-07). The cap is a delivery
promise, not a marketing stat — a late delivery on a young profile is the fastest way
to kill JSS.

| Listing | Concurrent orders | Why |
|---|---|---|
| AI Workflow Audit | 3 | ~3–5 focused hrs each; calls are the only fixed points |
| AI Automation Build | 1 | 7–21-day builds with client-access dependencies |
| AI Chatbot/Agent Build | 1 | same |

Worst-case simultaneous load: 3 audits + 2 builds — heavy but deliverable full-time.
Raise caps only on real fulfillment data (after ~5 orders), same rule as pricing. A
full queue reads as demand ("next slot opens Monday"), not weakness. If asked
directly: "I cap concurrent projects deliberately so every delivery date I give is
real."

## Cross-sell mechanics

- **Audit credit:** audit fee credited toward any build started within 30 days. Stated
  in every listing's FAQ. Makes the audit feel free in hindsight and forces a decision
  window.
- **Roadmap = build spec:** Audit Advanced's deliverable is written so a buyer can hand
  it to me (or anyone) as the scope of an Automation/Chatbot build. Zero re-scoping
  friction.
- **Out-of-scope line:** every build listing carries the SOW skeleton's explicit
  out-of-scope statement (prevents 90% of disputes, protects JSS).

## Sequencing

1. Publish all three listings the same week (each is separately indexed = 3 ranking
   surfaces), gallery image per listing (1-page report/architecture mockup).
2. First 5 orders: over-deliver hard, ask for the review at handoff, keep everything
   on-platform.
3. After 5 five-star outcomes: revisit prices upward (~20%) and add the KPI Dashboard
   listing.
