# Horizon V1 Required Access

No product or technical decision is waiting on a stakeholder. The PRD and
technical specification contain the final V1 decisions.

## Send This To Dekan

> Please give Suede's Horizon agent read-only access to Queen Raida/Prism.
>
> Provide:
>
> - The API base URL and authentication method, or the read-only database
>   connection method if there is no API.
> - A read-only credential with access to the Discord, meeting, transcript, and
>   CRM records Horizon should analyze.
> - API documentation, an OpenAPI file, or the first endpoint from which the
>   agent can discover available resources.
> - Confirmation of whether Nexus CRM data is already included. If not, provide
>   equivalent read-only Nexus CRM access.
> - A contact for access failures.
>
> The credential will be used by Suede's local Horizon agent for inspection and
> scheduled reads. Do not put it in GitHub, this document, or a public message.
> Install it on Suede's machine, use the agreed secret manager, or transfer it
> through an approved private credential channel.

Preferred environment variables:

```text
QUEEN_RAIDA_BASE_URL=
QUEEN_RAIDA_API_TOKEN=
```

For database access:

```text
QUEEN_RAIDA_DATABASE_URL=
```

If Nexus CRM is separate:

```text
NEXUS_CRM_BASE_URL=
NEXUS_CRM_API_TOKEN=
```

## What Happens After Access

The agent will inspect the source directly to determine:

- Record types, fields, stable IDs, and cross-source relationships.
- Historical depth, data volume, pagination, cursors, and rate limits.
- Edit, deletion, visibility, and restricted-record behavior.
- Existing opportunity, stage, owner, and thread fields.
- Whether Nexus CRM needs a separate adapter.

Dekan only needs to clarify behavior that remains ambiguous after inspection.

## Build Tasks, Not Stakeholder Questions

- Repair the local Codex CLI and sign it into Suede's ChatGPT/Codex account.
- Pin the RaidGuild brand assets and select the generation references.
- Configure the six-hour runner, Cloudflare Pages, and
  `horizon.raidguild.org`.

Read-only Queen Raida/Prism access is the sole external blocker to building with
real data.
