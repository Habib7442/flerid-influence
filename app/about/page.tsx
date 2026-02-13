import SiteShell from "@/components/site/SiteShell";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function AboutPage() {
  return (
    <SiteShell>
      <section className="bg-[var(--hero-bg)] py-20">
        <div className="mx-auto max-w-[1320px] px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
              About
            </p>
            <h1 className="mt-4 text-[32px] font-semibold md:text-[40px]">
              Authentic influence backed by human verification
            </h1>
            <p className="mt-3 text-[16px] text-[var(--color-text-muted)] md:text-[18px]">
              Flerid Influence is a branch of Flerid Technologies based in Assam, India. Our mission is
              to bridge authentic influencers and quality brands for meaningful partnerships.
            </p>
          </div>

          <div className="mt-12 grid gap-10 lg:grid-cols-2">
            <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-muted)] p-8">
              <h2 className="text-[24px] font-semibold">Our story</h2>
              <div className="mt-4 space-y-3 text-sm text-[var(--color-text-muted)]">
                <p>2023 — Flerid Technologies founded as a technology company in Assam.</p>
                <p>2024 — Research & development focused on influencer marketing integrity.</p>
                <p>2025 — Flerid Influence launched as a premium, human-verified platform.</p>
              </div>
            </div>
            <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8">
              <h2 className="text-[24px] font-semibold">Leadership team</h2>
              <div className="mt-4 grid gap-4 text-sm text-[var(--color-text-muted)]">
                <div>
                  <div className="font-semibold text-[var(--color-text)]">CEO</div>
                  <div>Strategy, partnerships, and brand growth.</div>
                </div>
                <div>
                  <div className="font-semibold text-[var(--color-text)]">Head of Operations</div>
                  <div>Campaign execution, creator verification, and compliance.</div>
                </div>
                <div>
                  <div className="font-semibold text-[var(--color-text)]">Head of Creator Relations</div>
                  <div>Creator onboarding, community, and retention.</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              "IMA Certified",
              "ASCI Compliant",
              "ISO 27001",
              "GDPR Compliant",
              "HypeAuditor Partner",
              "Trusted by 50+ brands",
            ].map((badge) => (
              <div
                key={badge}
                className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 text-sm text-[var(--color-text-muted)]"
              >
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
                  Trust
                </div>
                <div className="mt-2 font-semibold text-[var(--color-text)]">{badge}</div>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-muted)] p-8 text-sm text-[var(--color-text-muted)]">
            We prioritize long-term partnerships, brand safety, and transparent reporting. Join our network
            to access verified creators and measurable results.
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--color-primary)] px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-on-primary)] shadow-cta hover:bg-[var(--color-primary-strong)]"
              >
                Work with us
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
