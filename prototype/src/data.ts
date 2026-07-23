export type Stage = "Discovery" | "Scoping" | "Proposal" | "Contracting";
export type Momentum = "Rising" | "Active" | "Waiting";

export type ThreadUpdate = {
  date: string;
  label: string;
  title: string;
  detail: string;
  source: string;
  visual?: boolean;
};

export type HorizonThread = {
  id: string;
  title: string;
  organization: string;
  summary: string;
  whyItMatters: string;
  stage: Stage;
  momentum: Momentum;
  service: string;
  owner: string | null;
  ownerInitials: string;
  nextAction: string;
  activityLabel: string;
  activityISO: string;
  image: string;
  imageAlt: string;
  needsAction: boolean;
  related: string[];
  updates: ThreadUpdate[];
};

export const threads: HorizonThread[] = [
  {
    id: "portable-identity",
    title: "Portable identity pilot",
    organization: "Meridian Network",
    summary:
      "A privacy-first identity team is exploring a four-week prototype for portable credentials across three community platforms.",
    whyItMatters:
      "The engagement combines product strategy, protocol integration, and a visible public-good use case. A successful pilot could expand into a multi-platform implementation.",
    stage: "Scoping",
    momentum: "Rising",
    service: "Product + Protocol",
    owner: "Mira K.",
    ownerInitials: "MK",
    nextAction: "Confirm technical workshop and pilot success criteria",
    activityLabel: "18 min ago",
    activityISO: "2026-07-23T11:42:00-06:00",
    image: "/assets/threads/identity-network.jpg",
    imageAlt:
      "Illustrated decentralized identity core connecting a network of abstract people.",
    needsAction: true,
    related: ["Shared context agent"],
    updates: [
      {
        date: "Jul 18",
        label: "Signal captured",
        title: "Warm introduction surfaced",
        detail:
          "A mutual collaborator connected Meridian with RaidGuild to discuss portable, privacy-preserving credentials.",
        source: "Meeting summary",
      },
      {
        date: "Jul 21",
        label: "Discovery",
        title: "Use case narrowed to three platforms",
        detail:
          "The team aligned on a focused pilot spanning access, contributor reputation, and reusable attestations.",
        source: "Discord + CRM note",
      },
      {
        date: "Today",
        label: "Meaningful update",
        title: "Technical workshop requested",
        detail:
          "Meridian asked for a working session to define integration boundaries and measurable pilot outcomes.",
        source: "Meeting transcript",
        visual: true,
      },
    ],
  },
  {
    id: "treasury-console",
    title: "Treasury operations console",
    organization: "Arcfield Labs",
    summary:
      "A protocol operations team wants one decision surface for runway, permissions, execution queues, and cross-chain treasury activity.",
    whyItMatters:
      "This is a clear full-stack engagement with an immediate operational buyer and a reusable pattern for other protocol teams.",
    stage: "Proposal",
    momentum: "Active",
    service: "Full-stack",
    owner: "Tao R.",
    ownerInitials: "TR",
    nextAction: "Deliver phased estimate with security review option",
    activityLabel: "2 hr ago",
    activityISO: "2026-07-23T09:57:00-06:00",
    image: "/assets/threads/treasury-operations.jpg",
    imageAlt:
      "Illustrated treasury control instrument connecting modular monitoring nodes.",
    needsAction: true,
    related: ["Portable identity pilot"],
    updates: [
      {
        date: "Jul 10",
        label: "Discovery",
        title: "Operations bottleneck documented",
        detail:
          "Arcfield shared the current approval flow and the manual checks slowing weekly treasury operations.",
        source: "CRM note",
      },
      {
        date: "Jul 17",
        label: "Scoping",
        title: "MVP reduced to three critical views",
        detail:
          "The first release will focus on runway, queued actions, and signer visibility rather than broad analytics.",
        source: "Workshop notes",
      },
      {
        date: "Today",
        label: "Proposal",
        title: "Phased estimate requested",
        detail:
          "The buyer requested an implementation option with an independent security review and clear expansion path.",
        source: "Discord thread",
        visual: true,
      },
    ],
  },
  {
    id: "climate-rail",
    title: "Open climate data rail",
    organization: "Canopy Research",
    summary:
      "A research collective is seeking a technical partner for verifiable environmental data from field sensors to public datasets.",
    whyItMatters:
      "The opportunity connects public infrastructure, data engineering, and onchain verification with strong ecosystem visibility.",
    stage: "Discovery",
    momentum: "Active",
    service: "Data + Protocol",
    owner: null,
    ownerInitials: "?",
    nextAction: "Assign a data lead for the discovery call",
    activityLabel: "Yesterday",
    activityISO: "2026-07-22T15:20:00-06:00",
    image: "/assets/threads/climate-intelligence.jpg",
    imageAlt:
      "Illustrated mechanical tree linked to orbital and field environmental sensors.",
    needsAction: true,
    related: ["Treasury operations console"],
    updates: [
      {
        date: "Jul 16",
        label: "Signal captured",
        title: "Research request shared with the guild",
        detail:
          "Canopy is comparing technical partners for a verifiable sensor-to-dataset pipeline.",
        source: "Discord message",
      },
      {
        date: "Yesterday",
        label: "Discovery",
        title: "Data architecture lead requested",
        detail:
          "The initial call needs someone who can assess device trust, indexing, and public verification constraints.",
        source: "Meeting summary",
        visual: true,
      },
    ],
  },
  {
    id: "shared-context",
    title: "Shared context agent",
    organization: "Lattice Commons",
    summary:
      "A distributed organization wants an agent that turns meetings and channel activity into reliable decisions, ownership, and follow-through.",
    whyItMatters:
      "The project closely matches RaidGuild's emerging agent expertise and could become a reference implementation for coordination infrastructure.",
    stage: "Contracting",
    momentum: "Waiting",
    service: "AI Systems",
    owner: "Nia S.",
    ownerInitials: "NS",
    nextAction: "Resolve data retention language in the service agreement",
    activityLabel: "Jul 21",
    activityISO: "2026-07-21T13:15:00-06:00",
    image: "/assets/threads/community-coordination.jpg",
    imageAlt:
      "Illustrated team organizing contextual signals around a shared interface.",
    needsAction: false,
    related: ["Portable identity pilot"],
    updates: [
      {
        date: "Jun 28",
        label: "Discovery",
        title: "Coordination gaps mapped",
        detail:
          "The team documented where decisions disappear between meetings, chat, and project tracking.",
        source: "Meeting transcript",
      },
      {
        date: "Jul 9",
        label: "Proposal",
        title: "Agent architecture accepted",
        detail:
          "Lattice aligned on source adapters, human review boundaries, and a staged deployment plan.",
        source: "Proposal review",
      },
      {
        date: "Jul 21",
        label: "Contracting",
        title: "Data terms moved to legal review",
        detail:
          "Commercial terms are aligned. The remaining question is retention language for private source material.",
        source: "CRM opportunity",
        visual: true,
      },
    ],
  },
];
