import SiteShell from "@/components/site/SiteShell";

export default function CookiesPage() {
  return (
    <SiteShell>
      <section className="bg-[var(--hero-bg)] py-20">
        <div className="mx-auto max-w-[960px] px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
            Cookie Policy
          </p>
          <h1 className="mt-4 text-[32px] font-semibold md:text-[40px]">Cookie usage</h1>
          <div className="mt-6 space-y-4 text-sm text-[var(--color-text-muted)]">
            <p>
              We use cookies to improve site performance, measure analytics, and personalize content. You
              can control cookie preferences through your browser settings.
            </p>
            <p>
              Essential cookies ensure core functionality and security. Analytics cookies help us improve
              campaign insights and user experience.
            </p>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
