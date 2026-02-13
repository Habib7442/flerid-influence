import Link from "next/link";
import { useLeadForm } from "@/components/site/LeadFormContext";

export default function MobileCtaBar() {
  const leadForm = useLeadForm();
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 flex items-center justify-center gap-3 border-t border-[var(--color-nav-border)] bg-[var(--color-nav-bg)] px-4 py-3 text-[var(--color-nav-text)] md:hidden">
      <Link
        href="/#features"
        className="flex-1 rounded-full border border-[var(--color-nav-border)] px-4 py-2 text-center text-xs font-semibold uppercase tracking-[0.16em]"
      >
        Explore Features
      </Link>
      <button
        type="button"
        onClick={() => leadForm?.open()}
        className="flex-1 rounded-full bg-[var(--color-primary)] px-4 py-2 text-center text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-on-primary)] hover:bg-[var(--color-primary-strong)]"
      >
        Get Started
      </button>
    </div>
  );
}
