import SiteShell from "@/components/site/SiteShell";
import { ArrowUpRight } from "lucide-react";

const posts = [
  {
    title: "How to measure influencer ROI in 2025",
    category: "For Brands",
    readTime: "8 min",
  },
  {
    title: "Micro vs macro influencers: which one delivers better lift?",
    category: "Strategy",
    readTime: "6 min",
  },
  {
    title: "Influencer contract checklist for brand-safe campaigns",
    category: "Operations",
    readTime: "7 min",
  },
  {
    title: "2025 creator economy trends report",
    category: "Insights",
    readTime: "10 min",
  },
];

export default function BlogPage() {
  return (
    <SiteShell>
      <section className="bg-[var(--hero-bg)] py-20">
        <div className="mx-auto max-w-[1320px] px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
              Blog & Resources
            </p>
            <h1 className="mt-4 text-[32px] font-semibold md:text-[40px]">
              Thought leadership for brands and creators
            </h1>
            <p className="mt-3 text-[16px] text-[var(--color-text-muted)] md:text-[18px]">
              Guides, trend reports, and downloadable templates to power your next campaign.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {posts.map((post) => (
              <div
                key={post.title}
                className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-muted)] p-6"
              >
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
                  {post.category}
                </div>
                <div className="mt-3 text-lg font-semibold text-[var(--color-text)]">{post.title}</div>
                <div className="mt-2 text-xs text-[var(--color-text-subtle)]">{post.readTime} read</div>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
              Lead Magnet
            </div>
            <h2 className="mt-3 text-[22px] font-semibold">Download the Campaign Brief Template</h2>
            <p className="mt-2 text-sm text-[var(--color-text-muted)]">
              Get a ready-to-send influencer brief and ROI tracker in one place.
            </p>
            <button className="mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--color-primary)] px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-on-primary)] shadow-cta hover:bg-[var(--color-primary-strong)]">
              Download now
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
