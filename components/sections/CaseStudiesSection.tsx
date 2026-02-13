import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const caseStudies = [
  {
    title: "Beauty Brand Transformation",
    industry: "Beauty & Cosmetics",
    challenge: "Low brand awareness among Gen Z consumers.",
    solution: "Partnered with 5 micro-influencers in beauty niche.",
    results: "300% increase in brand mentions, 45% boost in sales.",
    roi: "11x ROI",
    client: "Premium Beauty Co.",
    accent: "#1E63FF",
  },
  {
    title: "Tech Startup Launch",
    industry: "Technology",
    challenge: "Product launch with zero market presence.",
    solution: "Strategic campaign with tech reviewers and early adopters.",
    results: "50K app downloads in first month, 4.8 star rating.",
    roi: "8x ROI",
    client: "InnovateTech",
    accent: "#00C49A",
  },
  {
    title: "Fashion Brand Revival",
    industry: "Fashion & Lifestyle",
    challenge: "Declining engagement and outdated brand image.",
    solution: "Collaborated with fashion micro-influencers for authentic content.",
    results: "200% increase in engagement, 60% growth in followers.",
    roi: "9x ROI",
    client: "StyleForward",
    accent: "#FF4D8D",
  },
  {
    title: "Fitness Brand Expansion",
    industry: "Health & Fitness",
    challenge: "Expanding into new demographic segments.",
    solution: "Targeted campaigns with fitness enthusiasts and wellness advocates.",
    results: "150% increase in new customer acquisition.",
    roi: "12x ROI",
    client: "FitLife Pro",
    accent: "#1E63FF",
  },
];

const caseStudySvg = (accent: string) => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="520" height="300" viewBox="0 0 520 300">
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="${accent}"/>
        <stop offset="100%" stop-color="#07142a"/>
      </linearGradient>
    </defs>
    <rect width="520" height="300" rx="28" fill="#07142a"/>
    <rect x="36" y="36" width="448" height="228" rx="22" fill="url(#g)" opacity="0.35"/>
    <circle cx="120" cy="150" r="30" fill="${accent}" opacity="0.7"/>
    <circle cx="260" cy="120" r="12" fill="${accent}" opacity="0.5"/>
    <circle cx="380" cy="190" r="16" fill="${accent}" opacity="0.6"/>
  </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};

export default function CaseStudiesSection() {
  return (
    <section id="case-studies" className="bg-[var(--hero-bg)] py-20 lg:py-28">
      <div className="mx-auto max-w-[1320px] px-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
              Case Studies
            </p>
            <h2 className="mt-4 text-[28px] font-semibold md:text-[34px]">
              Real results from curated partnerships
            </h2>
            <p className="mt-3 text-[16px] text-[var(--color-text-muted)] md:text-[18px]">
              Results-driven narratives that prove performance in every industry.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)]"
          >
            View full case study
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="case-studies-scroll mt-12 flex gap-6 overflow-x-auto pb-4">
          {caseStudies.map((study) => (
            <div
              key={study.title}
              className="glass-card shadow-card min-w-[320px] max-w-[360px] flex-1 rounded-2xl border border-[var(--glass-border)] bg-[var(--glass-bg)] p-6"
            >
              <div className="relative h-40 w-full overflow-hidden rounded-2xl">
                <Image
                  src={caseStudySvg(study.accent)}
                  alt={`${study.industry} campaign`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mt-5">
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
                  {study.industry}
                </div>
                <h3 className="mt-2 text-[18px] font-semibold text-[var(--color-text)]">{study.title}</h3>
                <div className="mt-4 space-y-3 text-sm text-[var(--color-text-muted)]">
                  <p>
                    <span className="font-semibold text-[var(--color-text)]">Challenge:</span> {study.challenge}
                  </p>
                  <p>
                    <span className="font-semibold text-[var(--color-text)]">Solution:</span> {study.solution}
                  </p>
                  <p>
                    <span className="font-semibold text-[var(--color-text)]">Results:</span> {study.results}
                  </p>
                </div>
                <div className="mt-4 flex items-center justify-between border-t border-[var(--color-border)] pt-4">
                  <div>
                    <div className="text-xl font-semibold text-[var(--color-primary)]">{study.roi}</div>
                    <div className="text-xs text-[var(--color-text-subtle)]">Return on Investment</div>
                  </div>
                  <div className="text-right text-xs text-[var(--color-text-subtle)]">
                    Client
                    <div className="text-sm font-semibold text-[var(--color-text)]">{study.client}</div>
                  </div>
                </div>
                <button
                  type="button"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)]"
                >
                  View full case study
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
