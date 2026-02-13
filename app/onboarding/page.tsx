import SiteShell from "@/components/site/SiteShell";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

export default function OnboardingPage() {
  return (
    <SiteShell>
      <section className="bg-[var(--hero-bg)] py-20">
        <div className="mx-auto max-w-[1320px] px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
              Influencer Onboarding
            </p>
            <h1 className="mt-4 text-[32px] font-semibold md:text-[40px]">
              Join a verified creator network
            </h1>
            <p className="mt-3 text-[16px] text-[var(--color-text-muted)] md:text-[18px]">
              Secure brand partnerships, faster payments, and long-term collaborations.
            </p>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_1fr]">
            <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-muted)] p-6 text-sm text-[var(--color-text-muted)]">
              <h2 className="text-[22px] font-semibold text-[var(--color-text)]">How it works</h2>
              <div className="mt-4 space-y-3">
                {[
                  "Apply with creator profile and niche tags",
                  "Verification of audience authenticity and engagement quality",
                  "Brand alignment review and compliance checks",
                  "Campaign invites with transparent payment terms",
                  "Performance reporting and payout within agreed timelines",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-[var(--color-primary)]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
              <h2 className="text-[22px] font-semibold">Required documents</h2>
              <ul className="mt-4 space-y-2 text-sm text-[var(--color-text-muted)]">
                <li>High-res profile photo</li>
                <li>Audience screenshots (top cities, age, gender)</li>
                <li>Past campaign links or post examples</li>
                <li>Government ID for verification</li>
              </ul>
              <button className="mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--color-primary)] px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-on-primary)] shadow-cta hover:bg-[var(--color-primary-strong)]">
                Start onboarding
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
