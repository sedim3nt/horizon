# Horizon Product Requirements

Status: Build candidate

Product owner: Sean

Technical source owner: Dekan

Design and brand owner: Suede

## 1. Product Thesis

Horizon is RaidGuild's business-development signal feed. It turns fragmented
Discord, meeting, and CRM activity into source-backed opportunity threads that
members can scan in minutes.

Horizon is not a chat archive. It is a decision surface: what changed, what
stage an opportunity is in, who owns it, and what should happen next.

## 2. Problem

RaidGuild's BD context is spread across channels, calls, transcripts, agents,
and CRM records. The people best positioned to help often miss an opportunity
because learning its current state takes too long.

Queen Raida and Prism already capture much of this context. Horizon should turn
that source material into a reliable, chronological feed without exposing raw
or sensitive records.

## 3. Product Decisions

These decisions replace conflicting direction in earlier drafts.

| Area | Decision |
| --- | --- |
| Web layer | Quartz 4, adapted from the ClawRyderz template |
| Primary view | Chronological thread feed |
| Feed order | `last_activity_at` descending |
| Update behavior | A meaningful accepted update moves its thread to the top |
| Thread history | Evidence-backed updates retained on a permanent thread page |
| Pilot audience | RaidGuild members behind authentication |
| Public outcome | Sanitized static projection after a separate release gate |
| Primary CTA | `Contact owner` |
| MVP imagery | One generated banner per thread; regenerate on material change |
| Later imagery | Optional image on individual thread updates |
| Image provider | ChatGPT via the locally authenticated Codex CLI and `$imagegen` |
| API billing | Prohibited for the image workflow |
| Source access | Read-only Queen Raida/Prism adapter |
| CRM writeback | Out of scope |

The funded outcome is a public-safe Horizon feed. The member-gated pilot is a
required trust gate, not a different product.

## 4. Users

### Guild Members

Need to understand active work, ownership, and useful ways to contribute without
reading every source channel.

### BD Operators

Need a compact view of stage, momentum, blockers, stale opportunities, and next
actions.

### Referrers And Prospective Contributors

After public launch, need a sanitized view of active themes and an approved way
to route relevant help or introductions.

### Maintainers

Need to see failed ingest runs, uncertain clusters, blocked disclosures, failed
image jobs, and stale publishing state.

## 5. Core Experience

### 5.1 Horizon Feed

The homepage is the product. It is not a marketing landing page and it is not
the stock Quartz explorer/graph layout.

The default feed:

- Shows active, approved threads.
- Sorts by latest meaningful activity, newest first.
- Moves an existing thread to the top when an accepted update changes its
  summary, stage, owner, next action, or momentum.
- Does not move a thread for duplicate, irrelevant, or rejected source records.
- Uses a stable thread ID so updates never create duplicate pages.
- Supports filters for stage, momentum, service line, owner, and needs action.
- Supports full-text search through Quartz.

Each feed item contains:

- Banner image or approved brand fallback.
- Thread title.
- Current public-safe summary.
- BD stage and momentum.
- Owner or `Owner needed`.
- Next action.
- Last meaningful activity time.
- `Contact owner` CTA when an approved route exists.

Confidence and disclosure diagnostics belong in the member/operator views, not
the public feed.

### 5.2 Thread Page

Each thread opens to a durable Quartz page containing:

- Current state and why it matters.
- Stage, momentum, owner, and next action.
- Latest banner image.
- Chronological update timeline.
- Stage transitions.
- Approved participants or organizations.
- Open questions.
- Related threads.
- Evidence labels and authorized source links in the member view.

Thread updates display oldest-to-newest on the detail page so the narrative is
causal. The feed itself remains newest-activity-first.

### 5.3 Review And Operations

The MVP does not need a large custom admin application. A focused operator
review surface or reviewed manifest must support:

- Approve, edit, reject, merge, and split.
- Set owner, stage, visibility, and archive state.
- Approve internal and public projections separately.
- Approve, reject, or regenerate an image.
- Preserve all human overrides across future runs.

The operations view shows source freshness, run status, pending reviews,
sanitizer blocks, image failures, and last successful deployment.

## 6. Product Shape

Horizon reuses the strongest ClawRyderz pattern:

```text
Queen Raida / Prism / CRM
  -> private immutable atoms
  -> classify
  -> conservatively cluster
  -> synthesize thread + updates
  -> sanitize and review
  -> generate or reuse illustration
  -> render Markdown + static assets
  -> build Quartz
  -> deploy member or public projection
```

Quartz provides Markdown pages, search, tags, graph capability, and static
deployment. Horizon adds a custom `HorizonFeed` component and thread schema.
The graph is secondary and can be enabled after thread quality is trusted.

## 7. Data And Threading

### Required Source

Queen Raida/Prism must provide stable records for the available subset of:

- Discord messages and threads.
- Meeting transcripts and summaries.
- CRM leads, opportunities, contacts, and notes.
- Proposals or RIP references.

Nexus CRM may be reached through Queen Raida/Prism or a separate read-only
adapter. Horizon depends on a normalized source contract, not the CRM table
layout.

### Threading Principle

Incorrect merges destroy trust faster than duplicate threads. Horizon therefore
prefers under-clustering:

- Stable CRM opportunity IDs and explicit Discord thread IDs are hard keys.
- Entity similarity and semantic similarity are supporting signals.
- Conflicting organizations, owners, or time windows can veto a merge.
- Uncertain records remain separate until confidence clears the threshold or an
  operator resolves them.
- Human `never merge`, `force merge`, and membership overrides persist.

### Meaningful Update

A source change creates a new thread update only when it materially changes at
least one of:

- Summary.
- BD stage.
- Momentum.
- Owner.
- Next action or due date.
- Confirmed participant or organization.
- Open question.

The system records the source activity time separately from the publication
time. Feed order uses the accepted source activity time.

## 8. AI Illustration System

### 8.1 MVP Behavior

The first approved version of a thread queues one banner illustration. A new
banner is queued only when:

- The thread changes stage.
- The summary or subject changes materially.
- An operator explicitly requests regeneration.

Routine comments do not generate images. The prior approved image remains live
while a replacement is queued or fails.

The schema supports images attached to individual updates, but automatic
per-update generation is disabled for the pilot. Sean may enable it after Suede
confirms style continuity and acceptable ChatGPT usage.

### 8.2 Generation Method

The scheduled local agent:

1. Builds a visual brief from sanitized, approved thread fields only.
2. Selects a small, version-pinned set of RaidGuild reference illustrations.
3. Invokes `codex exec` using Suede's saved ChatGPT/Codex sign-in.
4. Explicitly invokes `$imagegen` and supplies the reference images.
5. Does not set `OPENAI_API_KEY`, `CODEX_API_KEY`, or call the Image API.
6. Copies the generated output to the thread asset path.
7. Validates format, dimensions, hash, and file size.
8. Records prompt version, reference assets, generation time, and status.
9. Commits the approved static asset with the generated Quartz content.

Built-in image generation consumes Codex/ChatGPT usage limits. It does not use
API credits, but it has no production SLA. A deterministic RaidGuild brand
asset is therefore required as the failure fallback.

### 8.3 Visual Safety

Image prompts must never include raw messages, private names, contact details,
budgets, client secrets, or unpublished deal facts. Generated images must not
contain:

- Text, logos, or imitated trademarks.
- Recognizable real people unless explicitly approved.
- Client or partner branding unless public and approved.
- Violent, sexual, hateful, or otherwise unsafe content.
- Visual claims of funding, partnership, or delivery not supported by the
  approved summary.

## 9. Brand Direction

The source of truth is
[RaidGuild Brand Assets](https://github.com/raid-guild/brand/blob/main/BRAND-ASSETS.md).

Required visual system:

- Scroll 100 `#F9F7E7` background.
- Moloch 800 `#29100A` primary text.
- Moloch 500 `#BD482D` primary accent and CTA.
- Mazius Display for display headings.
- EB Garamond for body copy.
- Ubuntu Mono for metadata.
- Official full logo or logomark according to the brand rules.
- Official WebP illustrations as style references and generation fallbacks.
- Original image aspect ratios preserved.

The illustration direction is technology-forward RaidGuild line art with strong
silhouettes, restrained palette, and editorial composition. Product copy uses
modern BD and AI terms: signal, context, stage, update, owner, next action,
pipeline, and review. It does not use D&D or fantasy language.

Initial reference scenes should be selected and approved by Suede from:

- `desk-work`
- `forge-duo`
- `portal-arch`
- `tree-mech`
- `trio-portal`
- `ship-mech`

These filenames are internal production references, not interface copy.

## 10. Privacy And Release Policy

Raw Discord messages, transcripts, CRM notes, private URLs, and source-bearing
prompts stay outside the published repository and Quartz build context.

Every synthesized version has separate review states:

- `candidate`
- `needs_review`
- `approved_internal`
- `approved_public`
- `blocked`
- `archived`

Internal approval never implies public approval. Public output includes only
`approved_public` fields and assets. Missing approval means exclusion.

The first public release requires:

- Sean's content approval.
- A named disclosure reviewer.
- A reviewed client-name and contributor-name policy.
- A static artifact leak scan.
- Manual review of every initial public thread.
- One-command rollback to the prior approved deployment.

## 11. Non-Goals

- Replacing Queen Raida, Prism, Discord, or the CRM.
- CRM writeback.
- Automatically acting on leads.
- Publishing raw source excerpts.
- Building a full CRM or complex admin dashboard.
- AI-generated video.
- Generating an image for every source message.
- Requiring a live database or model call to render the public site.

## 12. Success Measures

Horizon succeeds when it changes behavior:

| Metric | MVP target |
| --- | --- |
| Time to useful awareness | Median under 3 minutes |
| BD context scavenging | 30% reduction during pilot |
| Auto-merge precision | At least 97% on reviewed evaluation set |
| Stage accuracy | At least 85% accepted without correction |
| Public sanitizer recall | 100% on critical test fixtures |
| Horizon-assisted advances | Track weekly; target 5 during pilot |
| Feed freshness | Published within one scheduled cycle of accepted source update |
| Image job reliability | 90% ready without operator intervention; fallback always works |

## 13. MVP Acceptance Criteria

1. A read-only adapter performs seed and incremental Queen Raida/Prism ingest.
2. Raw atoms remain private and are excluded from committed Quartz content.
3. Conservative clustering passes the reviewed merge evaluation.
4. A meaningful update creates a new version and moves the thread to the top.
5. Non-meaningful activity does not reorder the feed.
6. Quartz renders the chronological feed and durable thread pages.
7. Filters and search work on mobile and desktop.
8. Review decisions and human overrides survive regeneration.
9. Internal and public approvals are technically separate.
10. A local ChatGPT-authenticated Codex run generates, validates, and places one
    thread banner without an API key.
11. Image failure leaves the previous approved image or brand fallback in place.
12. The scheduled job renders, builds, commits, pushes, and deploys an approved
    snapshot without source-data leakage.
13. The member pilot passes the trust gate before public publishing is enabled.

## 14. Delivery Plan

### Milestone 0: Inputs And Proofs

- Confirm source contract with Dekan.
- Obtain sanitized fixtures.
- Confirm BD taxonomy and review owner with Sean.
- Repair and smoke-test Suede's local Codex CLI image workflow.
- Approve the initial RaidGuild image reference pack.

### Milestone 1: Ingest And Threading

- Fork/adapt the ClawRyderz worker and Quartz shell.
- Implement Queen Raida adapter, private atoms, cursor state, classification,
  conservative clustering, and evaluation fixtures.

### Milestone 2: Synthesis And Review

- Implement thread versions, meaningful-update detection, evidence claims,
  sanitizer policy, review states, and durable overrides.

### Milestone 3: Feed And Images

- Build `HorizonFeed`, thread pages, filters, branding, banner generation,
  fallback behavior, and asset validation.

### Milestone 4: Member Pilot

- Deploy the gated Quartz site.
- Tune clustering, summaries, policy, and image prompts with Sean and Suede.
- Measure time-to-awareness and correction burden.

### Milestone 5: Public Gate

- Approve public projections.
- Run leak tests and manual review.
- Enable the sanitized public deployment and rollback procedure.

## 15. Open Inputs

All remaining questions, blockers, owners, and requested inputs are maintained
in [BLOCKERS_AND_QUESTIONS.md](BLOCKERS_AND_QUESTIONS.md). That file is the
single source of truth for unresolved decisions.
