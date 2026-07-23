# Horizon V1 Build Proposal

### Project Submitted By

Suede, Sean, and Sam or Dekan

## Summary

Build Horizon, a public RaidGuild business-development signal feed that turns
Queen Raida's Discord, meeting, and CRM records into chronological opportunity
threads. Each thread will show its stage, owner, next action, history, and
automatically generated RaidGuild-style imagery.

Horizon will adapt the existing ClawRyderz pipeline, Quartz, and RaidGuild
design system. The product scope is in
[PRD.md](https://github.com/sedim3nt/horizon/blob/main/documents/PRD.md), and the
implementation design is in
[TECHNICAL_SPEC.md](https://github.com/sedim3nt/horizon/blob/main/documents/TECHNICAL_SPEC.md).

The
[live Horizon prototype](https://raidguild-horizon-prototype.sedim3nt.chatgpt.site)
uses fictional data to demonstrate the proposed experience.

## Deliverables

- Read-only Queen Raida/Prism and CRM ingestion.
- Conservative AI clustering and source-backed thread synthesis.
- Automatic public-safety filtering.
- Chronological Quartz feed, thread pages, search, filters, tags, and graph.
- RaidGuild design-system implementation using
  [BRAND-ASSETS.md](https://github.com/sedim3nt/horizon/blob/main/documents/BRAND-ASSETS.md).
- Automated thread and update images through Suede's ChatGPT-authenticated
  Codex account, without API credits.
- Six-hour generation, validation, deployment, monitoring, and rollback.
- Documentation and correction tools for withheld or inaccurate content.

## Team And Lanes

### Suede — Product Design And AI Build Lead

Suede owns the product experience and coordinates delivery. He is a
semi-technical builder with strengths in brand, UI/UX, HTML/CSS, JavaScript,
React, and AI-assisted development. He will direct Codex, implement and refine
the Quartz interface, steward the RaidGuild design system, manage generated
imagery, and keep the complete product coherent.

Suede is not positioned as the project's sole production engineer. Complex
integration and infrastructure decisions belong to the technical lead.

### Sean — BD Product And Agent Operations Lead

Sean owns the business-development and market-facing quality of Horizon. He
will define what information is useful to clients, map the existing Queen Raida
and Pinata agent workflows, provide representative opportunities, and review
generated threads, stages, images, owners, and calls to action.

Sean will use his BD judgment and agent-building experience to ensure the site
is persuasive, current, and operationally useful. Content drafting remains
automated; his role is direction, calibration, and acceptance.

### Sam Or Dekan — Technical Architecture And Integrations Lead

Sam or Dekan will fill one technical-lead role. Both are named because the final
assignee has not been selected. If both participate, they will share this
role's hours and allocation.

The technical lead owns API discovery, integration meetings, data contracts,
Queen Raida/Prism/Nexus connectivity, security boundaries, backend reliability,
deployment architecture, and production code review. This role turns Suede's
Codex-directed build into a maintainable system that fits RaidGuild's existing
infrastructure.

## Working Model

The lanes are intentionally distinct:

- **Suede:** product, design, front-end experience, Codex direction, and visual
  quality.
- **Sean:** BD requirements, agent workflows, editorial calibration, and client
  usefulness.
- **Sam or Dekan:** architecture, APIs, data, security, infrastructure, and
  engineering quality.

Decisions are made in the lane closest to the risk. Cross-lane decisions are
resolved in a short working session rather than handed between contributors.

## Work Plan And Cost

Rate: **$60 per hour**

### Suede

| Task | Hours | Cost |
| --- | ---: | ---: |
| Product definition, information architecture, and coordination | 8 | $480 |
| UX/UI design and RaidGuild brand implementation | 12 | $720 |
| Codex-directed Quartz and front-end implementation | 16 | $960 |
| Generated-image direction, prompting, and visual QA | 8 | $480 |
| End-to-end feature orchestration and acceptance | 10 | $600 |
| Documentation, launch support, and handoff | 6 | $360 |
| **Suede total** | **60** | **$3,600** |

### Sean

| Task | Hours | Cost |
| --- | ---: | ---: |
| BD taxonomy, priorities, ownership, and client-usefulness criteria | 10 | $600 |
| Queen Raida and Pinata agent-workflow mapping | 10 | $600 |
| Ground-truth opportunities and public-content rules | 10 | $600 |
| Iterative review of threads, summaries, stages, images, and CTAs | 18 | $1,080 |
| Client-facing experience QA and feedback | 8 | $480 |
| Launch acceptance and improvement brief | 4 | $240 |
| **Sean total** | **60** | **$3,600** |

### Sam Or Dekan

| Task | Hours | Cost |
| --- | ---: | ---: |
| API, database, and integration discovery meetings | 8 | $480 |
| System architecture, data contracts, privacy, and security | 10 | $600 |
| Queen Raida/Prism/Nexus adapter implementation | 16 | $960 |
| AI pipeline integration, code review, and hardening | 10 | $600 |
| Scheduling, deployment, monitoring, and rollback | 10 | $600 |
| Integration debugging, documentation, and handoff | 6 | $360 |
| **Technical lead total** | **60** | **$3,600** |

## Budget

| Team lane | Hours | Rate | Total |
| --- | ---: | ---: | ---: |
| Suede | 60 | $60/hour | $3,600 |
| Sean | 60 | $60/hour | $3,600 |
| Sam or Dekan | 60 | $60/hour | $3,600 |
| **Project total** | **180** |  | **$10,800** |

The three lanes receive equal allocations because product quality, BD
calibration, and infrastructure reliability are equally necessary. If Sam and
Dekan share the technical lane, they divide its $3,600 allocation without
changing the project total.

## Schedule

Four weeks at approximately 15 hours per lane per week:

1. API and workflow discovery, source access, product criteria, and
   architecture.
2. Ingestion, clustering, synthesis, sanitizer, and initial Quartz experience.
3. Real-data integration, design-system implementation, and image automation.
4. Editorial calibration, reliability work, deployment, and handoff.

## Cost Assumptions

- The budget covers labor only.
- Existing RaidGuild brand assets and ClawRyderz code are reused.
- Queen Raida/Prism access is provided read-only.
- Suede provides ChatGPT/Codex subscription usage; no OpenAI API credits are
  budgeted.
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
[PRD.md](https://github.com/sedim3nt/horizon/blob/main/documents/PRD.md) pass,
Horizon is deployed at `horizon.raidguild.org`, the six-hour automation is
operating, the technical lead accepts the integration, and Sean accepts the
populated feed as useful for RaidGuild BD.
