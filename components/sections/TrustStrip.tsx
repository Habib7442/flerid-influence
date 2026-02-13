import { CheckCircle } from "lucide-react";

export default function TrustStrip() {
  return (
    <section className="bg-[var(--hero-bg)] py-6">
      <div className="mx-auto flex max-w-[1320px] flex-col items-start gap-3 px-6 text-sm text-[var(--color-text)] md:flex-row md:flex-wrap md:items-center md:justify-between md:gap-4">
        <div className="flex flex-wrap items-center gap-3">
          <CheckCircle className="h-4 w-4 text-[var(--color-primary)]" />
          <span>11x ROI · 0% Fake Followers · 24hrs Campaign Launch Time</span>
        </div>
        <div className="flex flex-wrap items-center gap-3 text-xs text-[var(--color-text-subtle)]">
          <span className="rounded-full border border-[var(--color-border)] px-3 py-1">IMA</span>
          <span className="rounded-full border border-[var(--color-border)] px-3 py-1">ASCI</span>
          <span className="rounded-full border border-[var(--color-border)] px-3 py-1">ISO 27001</span>
          <span className="rounded-full border border-[var(--color-border)] px-3 py-1">GDPR</span>
        </div>
        <span className="text-xs text-[var(--color-text-subtle)]">*Based on verified campaigns</span>
      </div>
    </section>
  );
}
