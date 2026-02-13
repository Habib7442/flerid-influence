import SiteShell from "@/components/site/SiteShell";
import Link from "next/link";

const levels = [
  { name: "Subtle", className: "shadow-subtle shadow-subtle-hover" },
  { name: "Medium", className: "shadow-medium shadow-medium-hover" },
  { name: "Strong", className: "shadow-strong shadow-strong-hover" },
  { name: "Emphasis", className: "shadow-emphasis shadow-emphasis-hover" },
];

export default function ShadowSystemPage() {
  return (
    <SiteShell>
      <section className="bg-[var(--hero-bg)] py-20">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
              Shadow System
            </p>
            <h1 className="mt-4 text-[32px] font-semibold md:text-[40px]">
              White theme shadow hierarchy with light + dark compatibility
            </h1>
            <p className="mt-3 text-[16px] text-[var(--color-text-muted)] md:text-[18px]">
              Hover and focus states are included for consistent elevation across interactive UI.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {levels.map((level) => (
              <div
                key={level.name}
                className={`glass-card rounded-2xl border border-[var(--glass-border)] bg-[var(--glass-bg)] p-6 transition ${level.className}`}
              >
                <div className="text-sm font-semibold text-[var(--color-text)]">{level.name}</div>
                <p className="mt-2 text-xs text-[var(--color-text-muted)]">
                  Interactive elevation with hover response.
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="glass-card shadow-medium rounded-3xl border border-[var(--glass-border)] bg-[var(--glass-bg)] p-8">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
                Cards
              </div>
              <h2 className="mt-3 text-[22px] font-semibold text-[var(--color-text)]">
                Medium elevation default
              </h2>
              <p className="mt-2 text-sm text-[var(--color-text-muted)]">
                Use strong or emphasis for primary callouts and hero cards.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-[var(--glass-border)] bg-[var(--glass-bg)] p-5 shadow-subtle">
                  <div className="text-sm font-semibold text-[var(--color-text)]">Subtle card</div>
                  <div className="mt-2 text-xs text-[var(--color-text-muted)]">Low elevation</div>
                </div>
                <div className="rounded-2xl border border-[var(--glass-border)] bg-[var(--glass-bg)] p-5 shadow-strong">
                  <div className="text-sm font-semibold text-[var(--color-text)]">Strong card</div>
                  <div className="mt-2 text-xs text-[var(--color-text-muted)]">High elevation</div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8 shadow-emphasis">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
                Modal
              </div>
              <h2 className="mt-3 text-[22px] font-semibold text-[var(--color-text)]">
                Emphasis elevation
              </h2>
              <p className="mt-2 text-sm text-[var(--color-text-muted)]">
                Reserved for overlays, modals, or high-priority flows.
              </p>
              <button className="mt-6 inline-flex items-center rounded-full bg-[var(--color-primary)] px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-on-primary)] shadow-focus shadow-medium-hover">
                Primary action
              </button>
            </div>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-subtle">
              <div className="flex items-center justify-between">
                <div className="text-sm font-semibold text-[var(--color-text)]">Navigation</div>
                <div className="text-xs text-[var(--color-text-subtle)]">Subtle elevation</div>
              </div>
              <div className="mt-4 flex flex-wrap gap-3 text-sm text-[var(--color-text-muted)]">
                <Link className="rounded-full border border-[var(--color-border)] px-4 py-2 shadow-subtle-hover" href="/features">
                  Features
                </Link>
                <Link className="rounded-full border border-[var(--color-border)] px-4 py-2 shadow-subtle-hover" href="/case-studies">
                  Case Studies
                </Link>
                <Link className="rounded-full border border-[var(--color-border)] px-4 py-2 shadow-subtle-hover" href="/contact">
                  Contact
                </Link>
              </div>
            </div>

            <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-medium">
              <div className="text-sm font-semibold text-[var(--color-text)]">Buttons</div>
              <div className="mt-4 flex flex-wrap gap-3">
                <button className="rounded-full bg-[var(--color-primary)] px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-on-primary)] shadow-medium-hover shadow-focus">
                  Primary
                </button>
                <button className="rounded-full border border-[var(--color-border)] px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-text)] shadow-subtle-hover shadow-focus">
                  Secondary
                </button>
                <button className="rounded-full border border-[var(--color-primary)] px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)] shadow-strong-hover shadow-focus">
                  Tertiary
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
