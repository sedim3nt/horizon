# Horizon V1 Build Proposal

### Project Submitted By

Suede and Sean

## Summary

Build Horizon, a public RaidGuild business-development signal feed that turns
Queen Raida's Discord, meeting, and CRM records into chronological opportunity
threads. Each thread will show its current stage, owner, next action, history,
and automatically generated RaidGuild-style imagery.

Horizon will adapt the existing ClawRyderz pipeline and Quartz site rather than
starting from scratch. The complete product requirements are in
[PRD.md](PRD.md), and the build design is in
[TECHNICAL_SPEC.md](TECHNICAL_SPEC.md).

## Deliverables

- Read-only Queen Raida/Prism and CRM ingestion.
- Conservative AI clustering and source-backed thread synthesis.
- Automatic public-safety filtering.
- Chronological Quartz feed, thread pages, search, filters, tags, and graph.
- RaidGuild design-system implementation using
  [BRAND-ASSETS.md](BRAND-ASSETS.md).
- Automated thread banners and update images through Suede's
  ChatGPT-authenticated Codex account, without API credits.
- Six-hour generation, validation, Git commit, Cloudflare deployment, alerts,
  and rollback.
- Operating documentation and a correction workflow for withheld or inaccurate
  content.

## Team And Lanes

### Suede — Product And Engineering Lead

Suede is accountable for shipping Horizon. He will direct Codex as the
full-stack development agent, integrate Queen Raida, implement the AI pipeline
and Quartz experience, apply the RaidGuild design system, automate imagery, and
operate deployment. He has final authority over implementation and visual
quality.

### Sean — BD Editorial Lead And Product QA

Sean is accountable for whether Horizon's output is useful and persuasive to BD
clients. He will define the editorial standard, review populated threads,
correct stages and emphasis, identify unsafe or unhelpful content, and test
whether owners and calls to action make business sense. He has final authority
over BD usefulness and content acceptance.

Content drafting is automated from Queen Raida. Sean reviews and improves the
system's output; he is not manually writing the feed.

## Work Plan And Cost

Rate: **$60 per hour**

### Suede

| Task | Hours | Cost |
| --- | ---: | ---: |
| Architecture, source inspection, and implementation setup | 8 | $480 |
| Queen Raida/Prism adapter and private data layer | 14 | $840 |
| Classification, clustering, synthesis, and sanitizer pipeline | 18 | $1,080 |
| Quartz feed, thread pages, graph, and design-system implementation | 14 | $840 |
| Automated ChatGPT image generation and asset handling | 10 | $600 |
| Verification, deployment automation, monitoring, and documentation | 16 | $960 |
| **Suede total** | **80** | **$4,800** |

### Sean

| Task | Hours | Cost |
| --- | ---: | ---: |
| BD stages, thread criteria, ownership, and content priorities | 10 | $600 |
| Public-content rules and client-impression standards | 10 | $600 |
| Initial opportunity review and ground-truth examples | 16 | $960 |
| Iterative review of generated threads, summaries, stages, and images | 24 | $1,440 |
| CTA, usability, and client-facing experience QA | 12 | $720 |
| Final content acceptance, launch review, and improvement brief | 8 | $480 |
| **Sean total** | **80** | **$4,800** |

## Budget

| Team member | Hours | Rate | Total |
| --- | ---: | ---: | ---: |
| Suede | 80 | $60/hour | $4,800 |
| Sean | 80 | $60/hour | $4,800 |
| **Project total** | **160** |  | **$9,600** |

The split is equal because engineering and editorial calibration are both
required for a trustworthy BD product. Automating content generation reduces
writing labor but increases the importance of sustained review against real
business context.

## Schedule

Four weeks at approximately 20 hours per person per week:

1. Source access, data inspection, editorial criteria, and architecture.
2. Ingestion, clustering, synthesis, and public-safety pipeline.
3. Quartz experience, brand implementation, and image automation.
4. Real-data iteration, content QA, deployment, and operating handoff.

## Cost Assumptions

- The budget covers labor only.
- Existing RaidGuild brand assets and ClawRyderz code are reused.
- Queen Raida/Prism access is provided read-only.
- ChatGPT/Codex subscription usage is provided by Suede; no OpenAI API credits
  are budgeted.
- Cloudflare Pages and the existing RaidGuild domain are available.
- Material scope additions require a separate estimate.

## Out Of Scope

- Queen Raida or CRM replacement.
- CRM writeback or automated lead outreach.
- Generated video.
- Paid API usage.
- Ongoing operation after the four-week build.

## Completion

The project is complete when the V1 acceptance criteria in
[PRD.md](PRD.md) pass, Horizon is deployed at `horizon.raidguild.org`, the
six-hour automation is operating, and Sean accepts the populated feed as useful
for RaidGuild BD.
