# Horizon

Horizon is RaidGuild's business-development signal feed. It turns Queen Raida,
Prism, meeting, Discord, and CRM context into source-backed opportunity threads
that move to the top of the feed when meaningful activity occurs.

The product adapts the
[ClawRyderz knowledge-graph template](https://github.com/sedim3nt/telegram-knowledge-graph):
private source atoms, scheduled AI synthesis, generated Markdown, and Quartz 4
publishing. Horizon adds a chronological thread feed, BD stages, review states,
public-safety controls, and automated illustrations.

## Product Decisions

- Quartz 4 is the web and publishing layer.
- The homepage is a chronological feed, not a stock Quartz knowledge-vault
  homepage.
- Active threads sort by `last_activity_at` descending. A meaningful update
  moves its thread to the top.
- Thread pages preserve an evidence-backed update timeline.
- The pilot is member-gated. Public publishing requires a separate sanitized
  projection and explicit approval.
- The MVP generates one banner image per thread and refreshes it only after a
  material change. Per-update images are supported but initially disabled.
- Image generation uses the local ChatGPT-authenticated Codex CLI and built-in
  `$imagegen`; it must not use OpenAI API keys or API credits.
- Raw source data, model prompts containing source text, and internal evidence
  never enter the published Quartz build.

## Ownership

- **Sean:** product vision, BD workflow, stage taxonomy, and content usefulness.
- **Dekan:** Queen Raida/Prism source access and integration contract.
- **Suede:** product design, RaidGuild brand stewardship, Quartz implementation,
  and the local Codex image-generation runner.

## Documents

- [PRD.md](PRD.md): product scope, experience, and success criteria.
- [TECHNICAL_SPEC.md](TECHNICAL_SPEC.md): build-ready architecture, schemas,
  pipeline, review states, and component map.
- [RIP.md](RIP.md): RaidGuild funding proposal.
- [BLOCKERS_AND_QUESTIONS.md](BLOCKERS_AND_QUESTIONS.md): decisions and inputs
  assigned to Sean, Dekan, or Suede.
- [meetings/](meetings/): project-specific meeting records.

## Brand

Use the official
[RaidGuild brand system](https://github.com/raid-guild/brand/blob/main/BRAND-ASSETS.md)
and its illustration library. Horizon uses modern BD and AI language such as
signal, context, stage, update, owner, and next action. Fantasy terminology is
not used in product copy.
