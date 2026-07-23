# Horizon Portal Module: Framing And Scope

Date: 2026-07-23

Source: Granola meeting summary pasted into Codex. The source text did not
include an explicit meeting date, so this filename uses the capture date.

## Project Framing

Horizon is framed as a RaidGuild BD visibility tool that turns Queen Raida's
Discord, meeting, and CRM context into public-safe web surfaces. It should
surface active opportunities, project threads, and calls to action.

The meeting positioned Horizon as a portal module rather than a standalone
site. In that framing, the portal has a module registry, and Horizon would
appear as a canonical discoverable entry. A module can be as simple as a link or
as involved as an app that inherits authentication.

One tension surfaced against the technical spec at the time: the meeting
described Horizon as public-facing, while the spec scoped the first release as
member-gated. The post-meeting decision resolves this as one product with a
required member pilot before its sanitized public projection is enabled.

## Existing Documents

The Horizon GitHub repo was referenced as the home for the PRD, technical spec,
README, and RIP:

- Repository: <https://github.com/sedim3nt/horizon>
- README: Horizon is a RaidGuild BD visibility tool.
- PRD: product summary, problem, goals, primary users, blockers, and open
  questions.
- RIP: funding proposal intended for guild compensation.

## Content Pipeline

The intended flow is:

1. Queen Raida ingests meetings and relevant Discord context.
2. The BD agent processes the source material into threads.
3. Prism classifies and clusters related activity into opportunity threads.
4. Horizon surfaces the resulting threads on the site or portal module.

Relevant data sources discussed:

- Queen Raida for Discord meetings and related context.
- Prism for classification, clustering, memory, and thread organization.
- Nexus CRM for lead and opportunity context.
- Telegram bot flows for warm intro and qualification context that already
  exists.
- Discord bot ingestion is desired but not yet a priority.

## Visual Layer

Each thread may eventually receive an auto-generated image that updates as the
thread changes, giving the page a live-blog feel. ChatGPT image generation and
Livepeer were discussed as possible tools for generating brand-consistent
visuals.

At the time of the meeting, this was not treated as an MVP dependency. The
technical priority remained source access, thread clustering, synthesis
quality, sanitizer policy, and member/operator review.

## Post-Meeting Product Decisions

Suede subsequently clarified the implementation direction:

- Horizon will adapt the ClawRyderz Quartz pattern.
- The primary page will be a chronological feed of threads.
- A meaningful update moves its existing thread to the top of the feed.
- The MVP will include one automatically generated banner per thread.
- Per-update images are supported later but disabled during the pilot.
- Image generation will use Suede's ChatGPT-authenticated Codex CLI and built-in
  image generation. OpenAI API credits must not be used.
- The official RaidGuild brand system and WebP illustrations are the visual
  source of truth.
- Product language will not use D&D or fantasy terminology.

These decisions change generated imagery from a later possibility to a scoped
MVP feature while preserving the meeting's priority order: image failure must
not compromise threading, privacy, or publication reliability.

## CRM Integration Notes

The session also focused on connecting the BD agent to the Nexus CRM tool and
testing read/write behavior on leads.

Relevant CRM references:

- Lead lifecycle doc:
  <https://github.com/raid-guild/nexus-crm/blob/main/docs/raid-guild/lead-lifecycle.md>
- Hosted CRM:
  <https://nextcrm-production-6c46.up.railway.app/>

Setup progress:

- API token was generated in CRM developer settings with a one-year expiry.
- Secret was added to Pinata as `RAID_GUILD_CRM_KEY`.
- `skill.md` and MCP config were copied and passed to the BD agent.
- The agent confirmed read access by querying lead statuses and finding 34
  entries, including 14 existing outbound cold leads.
- The session ended before a full write/update test completed because the
  Pinata agent got stuck.

Implication for Horizon: CRM read access appears close, but write behavior is
not required for Horizon v1. Horizon should keep CRM access read-only unless a
later phase explicitly approves writeback.

## CRM Data Model Concerns

The current CRM schema includes targets, leads, accounts, contacts,
opportunities, contracts, and invoices. There was concern that the schema may be
too complex for the BD agent and for thread-oriented opportunity tracking.

Sam's preference was a flatter model with one contact table plus a touchpoints
activity table. Dekan framed a lead as a step in a thread rather than a
separate entity.

Decision from the meeting: do not rewrite the CRM schema now. First attempt the
agent hookup and let the complexity of the real integration guide whether a
simpler replacement is needed.

Implication for Horizon: the Queen Raida/Prism adapter should be loosely
coupled to CRM internals. Horizon should depend on normalized source records,
stable IDs, timestamps, ownership fields, opportunity fields, and source links,
not on the CRM table structure directly.

## Risks And Open Questions

- The source of truth among Queen Raida, Prism, and Nexus CRM needs to be
  defined when records disagree.
- If the CRM data model is too complex, Horizon should avoid inheriting that
  complexity in its own canonical schema.
- Visual generation should not distract from the harder trust problems:
  clustering, synthesis, privacy, and review.
- The local ChatGPT/Codex image workflow needs an end-to-end smoke test before
  it can be considered operational.

## Horizon Next Steps

- Submit Horizon as a portal module with the RIP for guild funding.
- Get feedback from Dekan on the PRD and RIP before guild submission.
- Confirm the Queen Raida/Prism source access path Horizon should use.
- Prove the no-API Codex image workflow and approve a RaidGuild reference pack.
- Keep Horizon's v1 implementation focused on read-only ingest, conservative
  clustering, source-backed summaries, sanitizer policy, operator review, and a
  gated path to public release.
