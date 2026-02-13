import { ArrowRight, Shield, TrendingUp, Users } from "lucide-react";

const features = [
  {
    title: "Zero Fake Followers",
    description: "Authentic engagement guaranteed with a human-first verification process.",
    icon: Shield,
  },
  {
    title: "Relationship Management",
    description: "Direct communication and concierge-style support for brands and creators.",
    icon: Users,
  },
  {
    title: "ROI Focus",
    description: "Campaigns designed for measurable business impact, not vanity metrics.",
    icon: TrendingUp,
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="bg-[var(--hero-bg)] py-20 lg:py-28">
      <div className="mx-auto max-w-[1320px] px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
            Features
          </p>
          <h2 className="mt-4 text-[28px] font-semibold text-[var(--color-text)] md:text-[34px]">
            Trusted infrastructure for authentic influencer partnerships
          </h2>
          <p className="mt-3 text-[16px] text-[var(--color-text-muted)] md:text-[18px]">
            Premium, trust-first experiences that highlight authenticity, ROI, and speed from discovery to reporting.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="glass-card shadow-card rounded-2xl border border-[var(--glass-border)] bg-[var(--glass-bg)] p-8 transition hover:-translate-y-1"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-[20px] font-semibold text-[var(--color-text)] md:text-[22px]">
                {feature.title}
              </h3>
              <p className="mt-3 text-[15px] text-[var(--color-text-muted)] md:text-[16px]">
                {feature.description}
              </p>
              <button
                type="button"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)]"
              >
                Learn more
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
