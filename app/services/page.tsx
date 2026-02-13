import SiteShell from "@/components/site/SiteShell";
import Link from "next/link";
import { ArrowUpRight, BarChart3, CheckCircle2, ShieldCheck, Sparkles, Users } from "lucide-react";

const services = [
  {
    title: "Influencer Discovery",
    description: "AI-assisted shortlisting with human verification to align creators and brand values.",
    icon: Sparkles,
  },
  {
    title: "Campaign Strategy & Management",
    description: "From briefing and negotiation to delivery timelines and creator coordination.",
    icon: Users,
  },
  {
    title: "Creative Direction",
    description: "Content guidance, approvals, and brand-safe messaging for every launch.",
    icon: ShieldCheck,
  },
  {
    title: "Performance Analytics",
    description: "Dashboards and ROI reports aligned to your KPIs and conversions.",
    icon: BarChart3,
  },
];

const timeline = [
  { step: "01", title: "Discovery", detail: "Audience insights, creator vetting, fit scoring." },
  { step: "02", title: "Screening", detail: "Fraud checks, manual validation, compliance review." },
  { step: "03", title: "Introduction", detail: "Creator briefs, content guidelines, contracts." },
  { step: "04", title: "Management", detail: "Approvals, scheduling, content QA." },
  { step: "05", title: "Results", detail: "Real-time reporting and ROI insights." },
];

export default function ServicesPage() {
  return (
    <SiteShell>
      <section className="bg-[var(--hero-bg)] py-20">
        <div className="mx-auto max-w-[1320px] px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
              Services
            </p>
            <h1 className="mt-4 text-[32px] font-semibold md:text-[40px]">
              How we work: premium campaigns with measurable ROI
            </h1>
            <p className="mt-3 text-[16px] text-[var(--color-text-muted)] md:text-[18px]">
              We combine manual verification with performance analytics to deliver safe, authentic partnerships.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div
                key={service.title}
                className="glass-card shadow-card rounded-2xl border border-[var(--glass-border)] bg-[var(--glass-bg)] p-6"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-[var(--color-text)]">{service.title}</h3>
                <p className="mt-2 text-sm text-[var(--color-text-muted)]">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 grid gap-10 lg:grid-cols-2">
            <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-muted)] p-8">
              <h2 className="text-[24px] font-semibold">Deep dive: verification & reporting</h2>
              <div className="mt-4 space-y-3 text-sm text-[var(--color-text-muted)]">
                <p>Discovery process based on audience-first data and creator alignment.</p>
                <p>Screening includes fraud checks, authenticity audits, and manual reviews.</p>
                <p>Content creation with approvals, workflows, and brand-safe execution.</p>
                <p>Reporting includes engagement, reach, conversion lift, and ROI.</p>
              </div>
              <div className="mt-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
                <CheckCircle2 className="h-4 w-4" />
                Guaranteed manual verification
              </div>
            </div>
            <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8">
              <h2 className="text-[24px] font-semibold">Pricing models</h2>
              <div className="mt-4 space-y-3 text-sm text-[var(--color-text-muted)]">
                <p>Flat retainer for ongoing creator partnerships.</p>
                <p>Commission-based for performance-led campaigns.</p>
                <p>Hybrid engagements for scale + precision.</p>
              </div>
              <div className="mt-6 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-muted)] p-4 text-xs text-[var(--color-text-subtle)]">
                Budgets are tailored to scope, creator mix, and deliverables.
              </div>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)]"
              >
                Book a strategy call
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-center text-[24px] font-semibold">Process timeline</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-5">
              {timeline.map((item) => (
                <div
                  key={item.step}
                  className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 text-center"
                >
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
                    {item.step}
                  </div>
                  <div className="mt-2 text-sm font-semibold text-[var(--color-text)]">{item.title}</div>
                  <div className="mt-2 text-xs text-[var(--color-text-subtle)]">{item.detail}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
