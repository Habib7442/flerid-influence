import { BarChart3, MessageSquare, Sparkles, UserCheck, Users } from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Discovery",
    description:
      "We identify perfect brand-influencer matches based on audience, values, and campaign goals.",
    icon: Sparkles,
  },
  {
    step: "02",
    title: "Screening",
    description: "Comprehensive background checks, engagement audits, and authenticity verification.",
    icon: UserCheck,
  },
  {
    step: "03",
    title: "Introduction",
    description:
      "Personalized introductions with campaign briefs and collaboration frameworks.",
    icon: MessageSquare,
  },
  {
    step: "04",
    title: "Management",
    description:
      "End-to-end campaign support, from negotiation to content approval to performance tracking.",
    icon: Users,
  },
  {
    step: "05",
    title: "Results",
    description: "Detailed analytics and ROI reporting for every collaboration.",
    icon: BarChart3,
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-[var(--hero-bg)] py-20 lg:py-28">
      <div className="mx-auto max-w-[1320px] px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
            How It Works
          </p>
          <h2 className="mt-4 text-[28px] font-semibold md:text-[34px]">
            A five-step process built for speed and transparency
          </h2>
          <p className="mt-3 text-[16px] text-[var(--color-text-muted)] md:text-[18px]">
            Launch in hours, track in real time, and scale with confidence.
          </p>
        </div>
        <div className="relative mt-16 space-y-10">
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-[var(--color-primary)]/10 lg:block" />
          {steps.map((step, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div
                key={step.step}
                className={`grid items-center gap-8 lg:grid-cols-12 ${
                  isLeft ? "lg:text-right" : "lg:text-left"
                }`}
              >
                <div className={`lg:col-span-5 ${isLeft ? "lg:col-start-1" : "lg:col-start-7"}`}>
                  <div className="glass-card shadow-card rounded-2xl border border-[var(--glass-border)] bg-[var(--glass-bg)] p-8">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-primary)] text-[var(--color-on-primary)]">
                        <step.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
                          {step.step}
                        </div>
                        <h3 className="text-[18px] font-semibold text-[var(--color-text)] md:text-[20px]">
                          {step.title}
                        </h3>
                      </div>
                    </div>
                    <p className="mt-4 text-[15px] text-[var(--color-text-muted)] md:text-[16px]">
                      {step.description}
                    </p>
                  </div>
                </div>
                <div className={`lg:col-span-2 ${isLeft ? "lg:col-start-6" : "lg:col-start-6"}`}>
                  <div className="hidden lg:flex h-6 w-6 items-center justify-center rounded-full border border-[var(--color-primary)]/40 bg-[var(--color-surface)]">
                    <div className="h-2 w-2 rounded-full bg-[var(--color-primary)]" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
