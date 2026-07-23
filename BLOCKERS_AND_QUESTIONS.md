# Horizon Blockers, Questions, And Needed Inputs

This document lists the key dependencies that need to be resolved with the
Queen Raida/Prism developer and RaidGuild before Horizon can move from planning
to implementation.

## Hard Blockers

- Queen Raida/Prism source access: Horizon needs read-only access to the system
  where Discord, meeting, transcript, and CRM records are stored.
- Source contract confirmation: the team needs to confirm whether Horizon will
  connect through an API, database replica, export job, or another Prism
  interface.
- Stable source identifiers: Horizon needs stable IDs for messages,
  transcripts, CRM notes, meetings, proposals, and opportunity records so it can
  deduplicate and update records safely.
- Incremental sync support: Horizon needs a cursor, updated-at watermark, event
  stream, or equivalent mechanism so it can refresh without reprocessing the
  entire history every run.
- Authorization model: RaidGuild needs to confirm how v1 member gating should
  work, including Discord OAuth, server membership checks, and any role-based
  operator permissions.
- Privacy policy owner: RaidGuild needs one accountable person or small group
  to approve disclosure rules for internal summaries and any future public
  projection.
- Synthetic or staging data: implementation needs representative non-sensitive
  fixtures or staging samples before connecting to production data.

## Needed From The Queen Raida / Prism Developer

- API or database documentation for the records Horizon should ingest.
- Authentication method, credential process, and minimum read-only scope.
- List of available source types, such as Discord messages, Discord threads,
  meeting transcripts, meeting summaries, CRM notes, CRM opportunities, and RIP
  or proposal records.
- Field definitions for each source type, including IDs, timestamps, author
  metadata, channel/container metadata, source URLs, body text, and relationship
  fields.
- Explanation of how deleted, edited, revoked, or private records are
  represented.
- Confirmation of whether source records include visibility hints, privacy tags,
  CRM stages, owners, opportunity IDs, or proposal IDs.
- Expected data volume, historical backfill size, and normal daily update
  volume.
- Rate limits, query limits, pagination behavior, and retry expectations.
- A staging endpoint, fixture export, or anonymized sample payload.
- Guidance on whether Horizon may store normalized copies of source records in
  its private database.
- Contact path for debugging adapter failures during development.

## Needed From RaidGuild

- Confirmation that v1 should be internal/member-gated and not public by
  default.
- The Discord guild ID and role IDs that should grant member access.
- The role or user list that should grant operator/reviewer access.
- Initial BD stage taxonomy approval. Proposed stages: intake, warm intro,
  discovery, scoping, proposal, RIP/funding, staffing, active raid, blocked,
  dormant, complete, lost.
- Default CTA approval. Proposed MVP CTA: contact owner.
- Definition of who can be assigned as a thread owner and how ownership should
  be inferred or corrected.
- Initial list of BD operators who can review clustering, summaries, owners,
  stage changes, and disclosure flags.
- Sanitizer policy examples for what is allowed, redacted, blocked, or sent to
  review.
- List of highly sensitive terms, clients, partners, wallets, channels, or
  project names that should be blocked or always reviewed.
- Hosting preference: `raidguild.org/horizon`, `horizon.raidguild.org`, or a
  RaidGuild AI property.
- Preferred deploy target and infrastructure owner.
- Visual direction for the member dashboard using RaidGuild's current AI and
  web tone without fantasy framing.
- Success criteria for the funded build.

## Open Product Questions

- Which source should be treated as canonical when Discord discussion,
  transcript notes, and CRM status disagree?
- Should Horizon show only active BD opportunities, or also internal project
  delivery threads that started as BD opportunities?
- How far back should the first historical import go?
- How should stale threads be handled: hidden, marked stale, or surfaced as
  needs follow-up?
- Should members see evidence snippets, source links, or only synthesized
  summaries in v1?
- Should thread owner contact route to Discord DM, a profile link, email, or an
  internal request action?
- What is the minimum review workflow needed before members trust the output?
- Who has final say when the AI stage classification disagrees with a BD
  operator?

## Open Technical Questions

- Does Queen Raida/Prism already have opportunity IDs that can be used as hard
  clustering keys?
- Are meeting transcripts linked to Discord channels, threads, CRM records, or
  participants?
- Are author identities normalized across Discord, meetings, CRM, and proposals?
- Can Horizon receive tombstones or change events for deleted and edited source
  records?
- Can source URLs be stored and displayed to authorized members?
- Are there existing environments for development, staging, and production?
- Which model provider should Horizon use for classification, comparison,
  synthesis, and sanitizer checks?
- Are there existing RaidGuild secrets management, logging, and monitoring
  conventions the implementation should follow?

## Build Inputs Needed Before Implementation Starts

- Read-only Queen Raida/Prism access path.
- Staging or synthetic fixture data.
- Discord auth and role requirements.
- Approved v1 stage taxonomy.
- Approved v1 sanitizer examples.
- Initial reviewer/operator list.
- Hosting and deployment decision.
- Agreement that public output is deferred until v2.
