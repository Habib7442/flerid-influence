import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

const tiers = [
  {
    name: "Starter",
    price: "Tailored",
    summary: "Launch with 3-5 vetted creators.",
    items: ["Micro-influencer mix", "Campaign brief support", "Performance summary"],
  },
  {
    name: "Growth",
    price: "Tailored",
    summary: "Scale to multi-creator activations.",
    items: ["Creator shortlisting", "Content approvals", "Mid-campaign insights"],
  },
  {
    name: "Enterprise",
    price: "Custom",
    summary: "Full-service strategy with analytics.",
    items: ["Dedicated strategist", "Advanced reporting", "Paid amplification"],
  },
];

export default function PricingSnapshotSection() {
  return (
    <section className="bg-[var(--hero-bg)] py-20 lg:py-28">
      <div className="mx-auto max-w-[1320px] px-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
              Pricing Snapshot
            </p>
            <h2 className="mt-4 text-[28px] font-semibold md:text-[34px]">
              Flexible packages that scale with your goals
            </h2>
            <p className="mt-3 text-[16px] text-[var(--color-text-muted)] md:text-[18px]">
              Choose a tier or request a custom quote for complex campaigns and enterprise needs.
            </p>
          </div>
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)]"
          >
            View full pricing
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className="glass-card shadow-card rounded-2xl border border-[var(--glass-border)] bg-[var(--glass-bg)] p-8"
            >
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
                {tier.name}
              </div>
              <div className="mt-3 text-3xl font-semibold text-[var(--color-text)]">{tier.price}</div>
              <p className="mt-2 text-sm text-[var(--color-text-muted)]">{tier.summary}</p>
              <div className="mt-5 space-y-2 text-sm text-[var(--color-text-muted)]">
                {tier.items.map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[var(--color-primary)]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-muted)] p-6 text-sm text-[var(--color-text-muted)]">
          Not sure which package fits? Book a 15-minute audit to match creators, budget, and KPIs.
        </div>
      </div>
    </section>
  );
}
