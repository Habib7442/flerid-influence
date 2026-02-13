import SiteShell from "@/components/site/SiteShell";
import { ArrowUpRight } from "lucide-react";

const studies = [
  {
    client: "Lustre Beauty",
    sector: "Beauty",
    result: "11x ROI, 45% sales lift",
    challenge: "Low brand awareness among Gen Z consumers.",
    strategy: "Micro-influencers, tutorial reels, weekly product drops.",
    outcome: "+300% mentions • 45% sales boost • 11x ROI",
  },
  {
    client: "NovaTech",
    sector: "Technology",
    result: "8x ROI, 50k app downloads",
    challenge: "New product launch with zero market presence.",
    strategy: "Tech reviewers, launch live streams, app demo series.",
    outcome: "50k downloads • 4.8 rating • 8x ROI",
  },
  {
    client: "Velvet Fit",
    sector: "Health & Fitness",
    result: "12x ROI, 150% customer growth",
    challenge: "Expand into new demographics.",
    strategy: "Fitness creators, transformation stories, wellness guides.",
    outcome: "150% acquisition • 12x ROI • 2x retention",
  },
];

export default function CaseStudiesPage() {
  return (
    <SiteShell>
      <section className="bg-[var(--hero-bg)] py-20">
        <div className="mx-auto max-w-[1320px] px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
              Case Studies
            </p>
            <h1 className="mt-4 text-[32px] font-semibold md:text-[40px]">
              Proof that authenticity drives measurable growth
            </h1>
            <p className="mt-3 text-[16px] text-[var(--color-text-muted)] md:text-[18px]">
              Each campaign combines verified creators, performance content, and ROI reporting.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {studies.map((study) => (
              <div
                key={study.client}
                className="glass-card shadow-card rounded-2xl border border-[var(--glass-border)] bg-[var(--glass-bg)] p-6"
              >
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
                  {study.sector}
                </div>
                <h2 className="mt-3 text-[20px] font-semibold text-[var(--color-text)]">
                  {study.client} — {study.result}
                </h2>
                <div className="mt-4 space-y-3 text-sm text-[var(--color-text-muted)]">
                  <p>Challenge: {study.challenge}</p>
                  <p>Strategy: {study.strategy}</p>
                  <p>Outcome: {study.outcome}</p>
                </div>
                <button className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)]">
                  Start a campaign like this
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface-muted)] p-8">
            <h2 className="text-[24px] font-semibold">Case study template</h2>
            <div className="mt-4 text-sm text-[var(--color-text-muted)]">
              Client: [Brand] • Sector: [Beauty] • Result: [11x ROI]
            </div>
            <div className="mt-2 text-sm text-[var(--color-text-muted)]">
              Challenge: [one-sentence pain]. Strategy: [one-sentence solution]. Outcome: [three metrics].
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
