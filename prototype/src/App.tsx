import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  CircleDot,
  Clock3,
  Filter,
  Mail,
  RefreshCw,
  Search,
  SlidersHorizontal,
  Sparkles,
  TrendingUp,
  UserRound,
  X,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { threads, type HorizonThread, type Momentum, type Stage } from "./data";

const stages: Array<"All" | Stage> = [
  "All",
  "Discovery",
  "Scoping",
  "Proposal",
  "Contracting",
];

const activeStages: Stage[] = [
  "Discovery",
  "Scoping",
  "Proposal",
  "Contracting",
];

const momentums: Array<"All momentum" | Momentum> = [
  "All momentum",
  "Rising",
  "Active",
  "Waiting",
];

const services = [
  "All services",
  ...Array.from(new Set(threads.map((thread) => thread.service))),
];

const stageSlug = (stage: Stage) => stage.toLowerCase();
const momentumSlug = (momentum: Momentum) => momentum.toLowerCase();

function MomentumIcon({ momentum }: { momentum: Momentum }) {
  if (momentum === "Rising") {
    return <TrendingUp aria-hidden="true" size={14} strokeWidth={2} />;
  }

  if (momentum === "Waiting") {
    return <Clock3 aria-hidden="true" size={14} strokeWidth={2} />;
  }

  return <CircleDot aria-hidden="true" size={14} strokeWidth={2} />;
}

function Owner({
  thread,
  compact = false,
}: {
  thread: HorizonThread;
  compact?: boolean;
}) {
  return (
    <span className={`owner ${compact ? "owner--compact" : ""}`}>
      <span className={`avatar ${thread.owner ? "" : "avatar--open"}`}>
        {thread.ownerInitials}
      </span>
      <span>
        {!compact && <span className="field-label">Owner</span>}
        <strong>{thread.owner ?? "Owner needed"}</strong>
      </span>
    </span>
  );
}

function ThreadCard({
  thread,
  onOpen,
  onContact,
}: {
  thread: HorizonThread;
  onOpen: (thread: HorizonThread) => void;
  onContact: (thread: HorizonThread) => void;
}) {
  return (
    <article className="thread-card">
      <button
        className="thread-image"
        onClick={() => onOpen(thread)}
        aria-label={`Open ${thread.title}`}
      >
        <img src={thread.image} alt={thread.imageAlt} />
        <span className="image-index">{thread.id.slice(0, 2).toUpperCase()}</span>
        {thread.momentum === "Rising" && (
          <span className="image-signal">
            <Sparkles aria-hidden="true" size={14} />
            New signal
          </span>
        )}
      </button>

      <div className="thread-content">
        <div className="thread-meta">
          <span className={`stage stage--${stageSlug(thread.stage)}`}>
            {thread.stage}
          </span>
          <span
            className={`momentum momentum--${momentumSlug(thread.momentum)}`}
          >
            <MomentumIcon momentum={thread.momentum} />
            {thread.momentum}
          </span>
          <span>{thread.service}</span>
          <span className="thread-time">
            <Clock3 aria-hidden="true" size={13} />
            {thread.activityLabel}
          </span>
        </div>

        <div className="thread-heading">
          <div>
            <span className="organization">{thread.organization}</span>
            <h2>
              <button onClick={() => onOpen(thread)}>{thread.title}</button>
            </h2>
          </div>
          {thread.needsAction && (
            <span className="attention">
              <span aria-hidden="true" />
              Needs action
            </span>
          )}
        </div>

        <p className="summary">{thread.summary}</p>

        <div className="thread-status">
          <Owner thread={thread} />
          <div className="next-action">
            <span className="field-label">Next action</span>
            <strong>{thread.nextAction}</strong>
          </div>
        </div>

        <div className="thread-actions">
          <button className="text-action" onClick={() => onOpen(thread)}>
            View thread
            <ArrowRight aria-hidden="true" size={16} />
          </button>
          {thread.owner && (
            <button
              className="primary-action"
              onClick={() => onContact(thread)}
            >
              <Mail aria-hidden="true" size={16} />
              Contact owner
            </button>
          )}
        </div>
      </div>
    </article>
  );
}

function ThreadDetail({
  thread,
  onClose,
  onContact,
}: {
  thread: HorizonThread;
  onClose: () => void;
  onContact: (thread: HorizonThread) => void;
}) {
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.body.classList.add("modal-open");
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.classList.remove("modal-open");
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  return (
    <div className="modal-backdrop" onMouseDown={onClose}>
      <section
        className="thread-detail"
        role="dialog"
        aria-modal="true"
        aria-labelledby="thread-detail-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="detail-topbar">
          <span>Opportunity thread</span>
          <button className="icon-button" onClick={onClose} aria-label="Close">
            <X aria-hidden="true" size={20} />
          </button>
        </div>

        <div className="detail-scroll">
          <div className="detail-image">
            <img src={thread.image} alt={thread.imageAlt} />
          </div>

          <div className="detail-body">
            <div className="detail-eyebrow">
              <span className={`stage stage--${stageSlug(thread.stage)}`}>
                {thread.stage}
              </span>
              <span
                className={`momentum momentum--${momentumSlug(thread.momentum)}`}
              >
                <MomentumIcon momentum={thread.momentum} />
                {thread.momentum}
              </span>
              <span>{thread.service}</span>
            </div>

            <span className="organization">{thread.organization}</span>
            <h2 id="thread-detail-title">{thread.title}</h2>
            <p className="detail-summary">{thread.summary}</p>

            <div className="detail-state">
              <Owner thread={thread} />
              <div>
                <span className="field-label">Next action</span>
                <strong>{thread.nextAction}</strong>
              </div>
              <div>
                <span className="field-label">Last signal</span>
                <strong>{thread.activityLabel}</strong>
              </div>
            </div>

            <section className="why-section">
              <span className="section-kicker">Why it matters</span>
              <p>{thread.whyItMatters}</p>
            </section>

            <section className="timeline-section">
              <div className="section-heading">
                <div>
                  <span className="section-kicker">Activity</span>
                  <h3>Thread history</h3>
                </div>
                <span className="source-count">
                  {thread.updates.length} accepted signals
                </span>
              </div>

              <ol className="timeline">
                {thread.updates.map((update, index) => (
                  <li key={`${thread.id}-${update.date}-${update.title}`}>
                    <div className="timeline-date">{update.date}</div>
                    <div className="timeline-marker">
                      {index === thread.updates.length - 1 ? (
                        <span className="timeline-marker--current" />
                      ) : (
                        <span />
                      )}
                    </div>
                    <div className="timeline-content">
                      <span className="timeline-label">{update.label}</span>
                      <h4>{update.title}</h4>
                      <p>{update.detail}</p>
                      {update.visual && (
                        <div className="update-visual">
                          <img src={thread.image} alt="" />
                          <span>
                            <Sparkles aria-hidden="true" size={14} />
                            Generated visual
                          </span>
                        </div>
                      )}
                      <span className="evidence">
                        <Check aria-hidden="true" size={13} />
                        {update.source}
                      </span>
                    </div>
                  </li>
                ))}
              </ol>
            </section>

            <section className="related-section">
              <span className="section-kicker">Related signals</span>
              <div>
                {thread.related.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </section>
          </div>
        </div>

        <div className="detail-footer">
          <Owner thread={thread} compact />
          {thread.owner ? (
            <button
              className="primary-action"
              onClick={() => onContact(thread)}
            >
              <Mail aria-hidden="true" size={16} />
              Contact owner
            </button>
          ) : (
            <span className="owner-open-note">Owner assignment pending</span>
          )}
        </div>
      </section>
    </div>
  );
}

function App() {
  const [query, setQuery] = useState("");
  const [stage, setStage] = useState<(typeof stages)[number]>("All");
  const [momentum, setMomentum] =
    useState<(typeof momentums)[number]>("All momentum");
  const [service, setService] = useState("All services");
  const [needsAction, setNeedsAction] = useState(false);
  const [selected, setSelected] = useState<HorizonThread | null>(null);
  const [syncing, setSyncing] = useState(false);
  const [syncLabel, setSyncLabel] = useState("Synced 12 min ago");
  const [toast, setToast] = useState<string | null>(null);

  const filteredThreads = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return threads.filter((thread) => {
      const matchesQuery =
        !normalizedQuery ||
        [
          thread.title,
          thread.organization,
          thread.summary,
          thread.service,
          thread.owner ?? "",
          thread.nextAction,
        ]
          .join(" ")
          .toLowerCase()
          .includes(normalizedQuery);
      const matchesStage = stage === "All" || thread.stage === stage;
      const matchesMomentum =
        momentum === "All momentum" || thread.momentum === momentum;
      const matchesService =
        service === "All services" || thread.service === service;
      const matchesAction = !needsAction || thread.needsAction;

      return (
        matchesQuery &&
        matchesStage &&
        matchesMomentum &&
        matchesService &&
        matchesAction
      );
    });
  }, [momentum, needsAction, query, service, stage]);

  const hasFilters =
    query ||
    stage !== "All" ||
    momentum !== "All momentum" ||
    service !== "All services" ||
    needsAction;

  const clearFilters = () => {
    setQuery("");
    setStage("All");
    setMomentum("All momentum");
    setService("All services");
    setNeedsAction(false);
  };

  const refresh = () => {
    if (syncing) return;
    setSyncing(true);
    window.setTimeout(() => {
      setSyncing(false);
      setSyncLabel("Synced just now");
    }, 750);
  };

  const contactOwner = (thread: HorizonThread) => {
    if (!thread.owner) return;
    setToast(`Request routed to ${thread.owner}`);
    window.setTimeout(() => setToast(null), 2600);
  };

  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="header-inner">
          <a className="brand" href="#top" aria-label="RaidGuild Horizon">
            <img src="/assets/raidguild-full.svg" alt="RaidGuild" />
            <span className="brand-divider" />
            <strong>Horizon</strong>
          </a>

          <nav aria-label="Primary navigation">
            <a className="nav-link nav-link--active" href="#signals">
              Signals
            </a>
            <a className="nav-link" href="#digest">
              Digest
            </a>
          </nav>

          <button className="sync-button" onClick={refresh} disabled={syncing}>
            <RefreshCw
              aria-hidden="true"
              className={syncing ? "is-spinning" : ""}
              size={15}
            />
            <span>{syncLabel}</span>
          </button>
        </div>
      </header>

      <main id="top">
        <section className="intro">
          <div className="intro-inner">
            <div className="prototype-label">
              <span />
              Prototype · Fictional data
            </div>
            <div className="intro-copy">
              <h1>Horizon</h1>
              <p>
                The opportunities moving through RaidGuild, organized into
                clear signals.
              </p>
            </div>
            <div className="metrics" aria-label="Signal summary">
              <div>
                <strong>04</strong>
                <span>Active threads</span>
              </div>
              <div>
                <strong>03</strong>
                <span>Need action</span>
              </div>
              <div>
                <strong>12</strong>
                <span>Signals this week</span>
              </div>
            </div>
          </div>
        </section>

        <section className="filter-bar" aria-label="Filter opportunity threads">
          <div className="filter-inner">
            <label className="search-field">
              <Search aria-hidden="true" size={18} />
              <span className="sr-only">Search signals</span>
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search signals"
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  aria-label="Clear search"
                  type="button"
                >
                  <X aria-hidden="true" size={15} />
                </button>
              )}
            </label>

            <div className="stage-tabs" aria-label="Filter by stage">
              {stages.map((item) => (
                <button
                  key={item}
                  className={stage === item ? "is-active" : ""}
                  onClick={() => setStage(item)}
                >
                  {item}
                </button>
              ))}
            </div>

            <label className="select-wrap">
              <span className="sr-only">Filter by momentum</span>
              <select
                value={momentum}
                onChange={(event) =>
                  setMomentum(event.target.value as (typeof momentums)[number])
                }
              >
                {momentums.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
              <ChevronDown aria-hidden="true" size={15} />
            </label>

            <label className="select-wrap select-wrap--service">
              <span className="sr-only">Filter by service</span>
              <select
                value={service}
                onChange={(event) => setService(event.target.value)}
              >
                {services.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
              <ChevronDown aria-hidden="true" size={15} />
            </label>

            <button
              className={`action-filter ${needsAction ? "is-active" : ""}`}
              onClick={() => setNeedsAction((value) => !value)}
              aria-pressed={needsAction}
            >
              <Filter aria-hidden="true" size={15} />
              Needs action
            </button>
          </div>
        </section>

        <div className="content-grid">
          <section className="feed" id="signals" aria-labelledby="feed-title">
            <div className="feed-heading">
              <div>
                <span className="section-kicker">Newest meaningful activity</span>
                <h2 id="feed-title">Active signals</h2>
              </div>
              <div className="result-count">
                {filteredThreads.length.toString().padStart(2, "0")} threads
              </div>
            </div>

            <div className="thread-list">
              {filteredThreads.map((thread) => (
                <ThreadCard
                  key={thread.id}
                  thread={thread}
                  onOpen={setSelected}
                  onContact={contactOwner}
                />
              ))}
            </div>

            {filteredThreads.length === 0 && (
              <div className="empty-state">
                <SlidersHorizontal aria-hidden="true" size={26} />
                <h3>No signals match</h3>
                <p>Adjust the active filters to return to the full feed.</p>
                <button className="text-action" onClick={clearFilters}>
                  Clear filters
                  <ArrowRight aria-hidden="true" size={16} />
                </button>
              </div>
            )}

            {hasFilters && filteredThreads.length > 0 && (
              <button className="clear-filters" onClick={clearFilters}>
                <X aria-hidden="true" size={14} />
                Clear all filters
              </button>
            )}
          </section>

          <aside className="digest" id="digest" aria-labelledby="digest-title">
            <div className="digest-header">
              <span className="section-kicker">Today</span>
              <h2 id="digest-title">Signal digest</h2>
            </div>

            <section className="digest-section">
              <div className="digest-section-heading">
                <h3>Needs attention</h3>
                <span>3</span>
              </div>
              <div className="attention-list">
                {threads
                  .filter((thread) => thread.needsAction)
                  .map((thread) => (
                    <button key={thread.id} onClick={() => setSelected(thread)}>
                      <span className="attention-dot" />
                      <span>
                        <strong>{thread.title}</strong>
                        <small>{thread.nextAction}</small>
                      </span>
                      <ArrowUpRight aria-hidden="true" size={15} />
                    </button>
                  ))}
              </div>
            </section>

            <section className="digest-section">
              <div className="digest-section-heading">
                <h3>Stage mix</h3>
                <span>4 active</span>
              </div>
              <div className="stage-mix">
                {activeStages.map((item) => {
                  const count = threads.filter(
                    (thread) => thread.stage === item,
                  ).length;
                  return (
                    <button key={item} onClick={() => setStage(item)}>
                      <span>{item}</span>
                      <span className="stage-track">
                        <span
                          className={`stage-fill stage-fill--${stageSlug(item)}`}
                          style={{ width: `${Math.max(count * 25, 7)}%` }}
                        />
                      </span>
                      <strong>{count}</strong>
                    </button>
                  );
                })}
              </div>
            </section>

            <section className="digest-section source-health">
              <div className="digest-section-heading">
                <h3>Source health</h3>
                <span className="healthy">
                  <span />
                  Current
                </span>
              </div>
              <dl>
                <div>
                  <dt>Queen Raida</dt>
                  <dd>8 min</dd>
                </div>
                <div>
                  <dt>Meeting notes</dt>
                  <dd>12 min</dd>
                </div>
                <div>
                  <dt>CRM</dt>
                  <dd>18 min</dd>
                </div>
              </dl>
            </section>
          </aside>
        </div>
      </main>

      <footer>
        <img src="/assets/raidguild-symbol.svg" alt="" />
        <span>Horizon prototype</span>
        <span>All organizations, people, and opportunity data are fictional.</span>
      </footer>

      {selected && (
        <ThreadDetail
          thread={selected}
          onClose={() => setSelected(null)}
          onContact={contactOwner}
        />
      )}

      {toast && (
        <div className="toast" role="status">
          <Check aria-hidden="true" size={16} />
          {toast}
        </div>
      )}
    </div>
  );
}

export default App;
