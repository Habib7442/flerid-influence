import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import SiteShell from "@/components/site/SiteShell";
import { influencers } from "@/components/data/influencers";

export default function InfluencersPage() {
  return (
    <SiteShell>
      <section className="bg-[var(--hero-bg)] py-20">
        <div className="mx-auto max-w-[1320px] px-6">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
                Influencer Directory
              </p>
              <h1 className="mt-4 text-[32px] font-semibold md:text-[40px]">
                Curated creators with verified reach and real engagement
              </h1>
              <p className="mt-3 text-[16px] text-[var(--color-text-muted)] md:text-[18px]">
                Handpicked profiles from Assam and the Northeast, ready for brand partnerships.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--color-primary)] px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-on-primary)] shadow-cta hover:bg-[var(--color-primary-strong)]"
            >
              Start a Campaign
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {influencers.map((creator) => (
              <div
                key={creator.name}
                className="glass-card shadow-card flex h-[520px] flex-col overflow-hidden rounded-2xl border border-[var(--glass-border)] bg-[var(--glass-bg)]"
              >
                <div className="relative h-1/2 w-full">
                  <Image
                    src={creator.image}
                    alt={`${creator.name} photo`}
                    fill
                    sizes="(min-width: 1024px) 340px, (min-width: 640px) 300px, 260px"
                    className="object-cover object-top"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2 text-sm font-semibold text-[var(--color-text)]">
                        {creator.name}
                        <CheckCircle2 className="h-4 w-4 text-[var(--color-primary)]" />
                      </div>
                      <div className="text-xs text-[var(--color-text-subtle)]">{creator.platform}</div>
                    </div>
                  </div>
                  <div className="mt-5 grid grid-cols-2 gap-3 text-xs text-[var(--color-text-muted)]">
                    <div className="rounded-xl border border-[var(--color-border)] px-3 py-2">
                      Followers
                      <div className="text-sm font-semibold text-[var(--color-text)]">{creator.followers}</div>
                    </div>
                    <div className="rounded-xl border border-[var(--color-border)] px-3 py-2">
                      Reach
                      <div className="text-sm font-semibold text-[var(--color-text)]">{creator.reach}</div>
                    </div>
                  </div>
                  <div className="mt-3 text-xs text-[var(--color-text-muted)]">
                    Engagement: <span className="font-semibold text-[var(--color-text)]">{creator.engagement}</span>
                  </div>
                  <div className="mt-3 text-xs text-[var(--color-text-subtle)]">
                    Audience from: {creator.audienceFrom}
                  </div>
                  <div className="mt-auto flex items-center justify-start text-xs font-semibold text-[var(--color-primary)]">
                    <Link href="/contact">Invite</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 grid gap-8 rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8 lg:grid-cols-[1.1fr_1fr]">
            <div>
              <h2 className="text-[24px] font-semibold">Campaign fit insights</h2>
              <p className="mt-3 text-sm text-[var(--color-text-muted)]">
                Each profile includes verified reach, engagement, and top audience locations so your team
                can shortlist faster.
              </p>
              <div className="mt-5 grid gap-4 text-sm text-[var(--color-text-muted)] sm:grid-cols-3">
                <div className="rounded-xl border border-[var(--color-border)] px-4 py-3">
                  Verified reach
                  <div className="text-lg font-semibold text-[var(--color-text)]">15k–500k+</div>
                </div>
                <div className="rounded-xl border border-[var(--color-border)] px-4 py-3">
                  Engagement range
                  <div className="text-lg font-semibold text-[var(--color-text)]">1.8%–10%</div>
                </div>
                <div className="rounded-xl border border-[var(--color-border)] px-4 py-3">
                  Audience hubs
                  <div className="text-lg font-semibold text-[var(--color-text)]">Assam & NE</div>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-muted)] p-6 text-sm text-[var(--color-text-muted)]">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
                How to engage
              </div>
              <p className="mt-3">
                Tell us your goals and we will recommend creators, expected reach, and a timeline within
                24 hours.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]"
              >
                Request a proposal
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
