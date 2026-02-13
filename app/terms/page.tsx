import SiteShell from "@/components/site/SiteShell";

export default function TermsPage() {
  return (
    <SiteShell>
      <section className="bg-[var(--hero-bg)] py-20">
        <div className="mx-auto max-w-[960px] px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
            Terms of Service
          </p>
          <h1 className="mt-4 text-[32px] font-semibold md:text-[40px]">Usage & agreements</h1>
          <div className="mt-6 space-y-4 text-sm text-[var(--color-text-muted)]">
            <p>
              By using the Flerid Influence platform, you agree to our campaign terms, payment schedules,
              and compliance requirements. Engagements are governed by approved briefs and signed contracts.
            </p>
            <p>
              Cancellations and refunds follow agreed timelines and verified deliverable status. Disputes
              are resolved with documentation and campaign logs.
            </p>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
