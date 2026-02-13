import SiteShell from "@/components/site/SiteShell";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

type PageProps = {
  params: { slug: string };
};

export default function InfluencerProfilePage({ params }: PageProps) {
  const name = params.slug.replace(/-/g, " ");
  return (
    <SiteShell>
      <section className="bg-[var(--hero-bg)] py-20">
        <div className="mx-auto max-w-[960px] px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
            Influencer Profile
          </p>
          <h1 className="mt-4 text-[32px] font-semibold md:text-[40px]">
            {name} — Lifestyle Creator
          </h1>
          <div className="mt-3 text-sm text-[var(--color-text-muted)]">
            120k followers · 4.7% engagement · Verified by Flerid Influence
          </div>

          <div className="mt-8 grid gap-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-muted)] p-6 md:grid-cols-3">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-[var(--color-primary)]">Followers</div>
              <div className="mt-2 text-xl font-semibold">120k</div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-[var(--color-primary)]">Engagement</div>
              <div className="mt-2 text-xl font-semibold">4.7%</div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-[var(--color-primary)]">Avg CPM</div>
              <div className="mt-2 text-xl font-semibold">₹25k</div>
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 text-sm text-[var(--color-text-muted)]">
              <div className="text-xs uppercase tracking-[0.2em] text-[var(--color-primary)]">
                Audience breakdown
              </div>
              <div className="mt-3 space-y-2">
                <div>Top cities: Mumbai, Delhi</div>
                <div>Age range: 18-30</div>
                <div>Platforms: Instagram, YouTube</div>
              </div>
              <div className="mt-4 flex items-center gap-2 text-xs text-[var(--color-text-subtle)]">
                <CheckCircle2 className="h-4 w-4 text-[var(--color-primary)]" />
                Manual authenticity verification completed
              </div>
            </div>
            <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 text-sm text-[var(--color-text-muted)]">
              <div className="text-xs uppercase tracking-[0.2em] text-[var(--color-primary)]">
                Past campaign results
              </div>
              <div className="mt-3 space-y-2">
                <div>+220% engagement lift</div>
                <div>3.1x conversion boost</div>
                <div>Average CPM within premium tier</div>
              </div>
              <button className="mt-6 inline-flex items-center gap-2 rounded-full border border-[var(--color-primary)] px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
                Invite to campaign
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
