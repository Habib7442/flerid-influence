import SiteShell from "@/components/site/SiteShell";

export default function PrivacyPage() {
  return (
    <SiteShell>
      <section className="bg-[var(--hero-bg)] py-20">
        <div className="mx-auto max-w-[960px] px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
            Privacy Policy
          </p>
          <h1 className="mt-4 text-[32px] font-semibold md:text-[40px]">Data privacy & compliance</h1>
          <div className="mt-6 space-y-4 text-sm text-[var(--color-text-muted)]">
            <p>
              We collect only the data required to verify creators and support campaign performance.
              All personal data is handled in accordance with GDPR and local compliance requirements.
            </p>
            <p>
              Data includes contact details, performance insights, and campaign deliverables. Influencers
              and brands can request access, corrections, or deletion at any time.
            </p>
            <p>
              For questions about data handling, contact info@flerid.com.
            </p>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
