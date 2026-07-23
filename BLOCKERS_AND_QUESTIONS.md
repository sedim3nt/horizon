# Horizon Blockers, Questions, And Needed Inputs

This is the single source of truth for unresolved Horizon inputs. Each item
names the person who must answer or provide it.

## Current Defaults

These choices are adopted unless the named owner changes them:

- Quartz 4 with a custom chronological feed.
- Threads sort by latest accepted meaningful activity.
- Thread timelines display oldest-to-newest.
- Member-gated pilot before public release.
- `Contact owner` as the only MVP CTA.
- One generated banner per thread; regenerate on material stage or subject
  change.
- Per-update images supported but disabled during the pilot.
- Image generation through Suede's ChatGPT-authenticated Codex CLI only.
- No OpenAI API keys, API calls, or API credits for images.
- Read-only Queen Raida/Prism and CRM access.

## Hard Blockers

### Ask Dekan: Queen Raida Source Contract

Needed before production ingest:

- Confirm whether Horizon reads through Prism API, Queen Raida API, a database
  replica, or a scheduled export.
- Provide read-only access and authentication instructions.
- Provide sanitized example payloads for each available source type.
- Confirm stable IDs, update timestamps, pagination, rate limits, and deletion
  behavior.
- Identify relationship fields for Discord threads, meetings, CRM
  opportunities, proposals, people, and organizations.
- Confirm whether Horizon may keep normalized private copies locally.
- Confirm which system wins when Queen Raida, Prism, and Nexus CRM disagree.

Owner: Dekan

Blocks: Production adapter, backfill, incremental sync, and source precedence.

### Ask Sean: Content And Disclosure Authority

Needed before the member pilot and public release:

- Approve the BD stages and what qualifies as an active Horizon thread.
- Name the primary BD reviewer and backup reviewer.
- Name the person authorized to approve public disclosure.
- Provide examples of content that is allowed internally, allowed publicly,
  redacted, or blocked.
- Define the policy for client names, contributor names, budgets, funding
  claims, and governance context.
- Approve the owner-contact route and fallback when no owner exists.

Owner: Sean

Blocks: Review policy, pilot sign-off, and public projection.

### Ask Suede: Repair And Prove The No-API Image Runner

The local `codex` command was checked on 2026-07-23 and failed because its native
executable was missing. Before image automation is treated as production-ready:

- Repair or reinstall the Codex CLI.
- Confirm the CLI is signed in through the intended ChatGPT/Codex account.
- Run one non-interactive `$imagegen` smoke test with API-key environment
  variables removed.
- Confirm the generated file can be resolved, copied to an exact repository
  path, converted to WebP, and validated automatically.
- Confirm the account's usage limits are acceptable for the proposed cadence.
- Confirm the machine that will run the schedule is reliably online.

Owner: Suede

Blocks: Automated generated images. Text threads can use brand fallbacks until
this is resolved.

### Ask Suede: Hosting And Repository Boundary

Decide:

- Final route: `raidguild.org/horizon`, `horizon.raidguild.org`,
  `raidguild.ai/horizon`, or another approved location.
- Cloudflare account and project owner.
- Cloudflare Access versus the existing ClawRyderz HMAC login for the pilot.
- Whether generated member content lives in this repo or a separate private
  deployment repo.
- Where local private state is backed up and who can operate the scheduled
  runner.

Owner: Suede

Blocks: Production deployment and operations.

## Needed From Sean

- Approve or edit this proposed stage taxonomy:
  `new_signal`, `warm_intro`, `discovery`, `scoping`, `proposal`,
  `approved_funded`, `active_delivery`, `dormant`, `closed`.
- Provide 10-20 representative historical opportunities for the evaluation set.
- Label examples that must remain separate even when they sound similar.
- Identify the initial pilot members.
- Define `Horizon-assisted advance` for success reporting.
- Confirm whether active delivery stays in the feed or leaves after handoff.
- Confirm the staleness window and whether stale threads stay visible.
- Ratify banner-only generation for the pilot. Enabling per-update images is a
  later product decision, not an implementation blocker.
- Approve the final public feed before launch.

## Needed From Dekan

- Queen Raida/Prism schema or API documentation.
- Staging endpoint or anonymized export.
- Historical backfill size and normal daily update volume.
- Visibility hints and restricted-channel behavior.
- Identity normalization across Discord, meetings, Prism, and CRM.
- Tombstone or reconciliation strategy for edits and deletions.
- Internal source-link rules for member evidence.
- Contact path for adapter failures.
- Confirmation that CRM access stays read-only for the MVP.

## Needed From Suede

- Approve the initial illustration reference pack from the official RaidGuild
  WebP library.
- Pin the RaidGuild brand repository commit used by the implementation.
- Approve the Horizon visual prompt recipe and fallback images.
- Supply or approve the logo, fonts, favicon, and metadata treatment.
- Confirm that product copy uses Sean, Dekan, and Suede for people; `sedim3nt`
  appears only where it is part of a repository or account path.
- Confirm the local runner, schedule, backup, and deployment credentials.
- Review mobile and desktop feed composition.
- Approve any generated image before it becomes part of the initial public
  snapshot.

## Questions Assigned To Sean

1. When CRM and meeting context conflict, should CRM stage win automatically or
   enter review?
2. Can a thread be public with an anonymized organization, or must the entire
   thread remain hidden?
3. Which fields are useful enough to justify member visibility: evidence
   labels, internal links, confidence, and open questions?
4. Who receives `Contact owner` when an opportunity has no named owner?
5. What should close a thread: delivery handoff, inactivity, loss, or explicit
   operator action?

## Questions Assigned To Dekan

1. Does Queen Raida already aggregate Discord, meetings, and Nexus CRM into one
   stable thread or opportunity identifier?
2. Are meeting records linked to channels, participants, CRM records, or
   proposals?
3. Can Horizon query records changed since a cursor or watermark?
4. How are restricted records and revoked access represented?
5. Are prompts, summaries, or source bodies already sanitized anywhere in the
   Queen Raida pipeline, and can Horizon rely on that label?

## Questions Assigned To Suede

1. Which two to six WebP scenes best define Horizon's generation style?
2. Should generated banners use the `1440x550` landscape ratio exclusively?
3. Is manual image approval required throughout the pilot, or only for the
   initial public snapshot?
4. Should the scheduled local job commit directly to `main` or push a generated
   branch for review?
5. What is the recovery plan when the local runner is offline or ChatGPT usage
   is temporarily limited?

## Non-Blocking Later Decisions

- Enable images on individual timeline updates.
- Add a graph or signal map.
- Increase refresh cadence beyond nightly.
- Add Discord digests.
- Add CRM writeback.
- Add member matching.
- Add generated video.
