import Link from "next/link";

type NavItem = {
  label: string;
  href: string;
};

type FooterSectionProps = {
  navItems: NavItem[];
};

export default function FooterSection({ navItems }: FooterSectionProps) {
  return (
    <footer className="bg-[var(--hero-bg)] text-[var(--hero-text)]">
      <div className="mx-auto max-w-[1320px] px-6 py-10">
        <div className="grid gap-10 md:grid-cols-5">
          <div>
            <div className="text-lg font-semibold text-[var(--hero-text)]">Flerid Influence</div>
            <p className="mt-3 text-sm text-[var(--hero-text-muted)]">
              Premium Influencer Marketing Platform designed for authentic partnerships and measurable ROI.
            </p>
          </div>
          <div className="text-sm text-[var(--hero-text-muted)]">
            <div className="font-semibold text-[var(--hero-text)]">Sitemap</div>
            <div className="mt-3 space-y-2">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="block hover:text-[var(--hero-text)]">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="text-sm text-[var(--hero-text-muted)]">
            <div className="font-semibold text-[var(--hero-text)]">Services</div>
            <div className="mt-3 space-y-2">
              <Link href="/services" className="block hover:text-[var(--hero-text)]">Influencer Discovery</Link>
              <Link href="/services" className="block hover:text-[var(--hero-text)]">Campaign Management</Link>
              <Link href="/services" className="block hover:text-[var(--hero-text)]">Performance Analytics</Link>
              <Link href="/services" className="block hover:text-[var(--hero-text)]">Creative Direction</Link>
            </div>
          </div>
          <div className="text-sm text-[var(--hero-text-muted)]">
            <div className="font-semibold text-[var(--hero-text)]">Resources</div>
            <div className="mt-3 space-y-2">
              <Link href="/blog" className="block hover:text-[var(--hero-text)]">Blog</Link>
              <Link href="/faq" className="block hover:text-[var(--hero-text)]">FAQ</Link>
              <Link href="/onboarding" className="block hover:text-[var(--hero-text)]">Influencer Onboarding</Link>
            </div>
          </div>
          <div className="text-sm text-[var(--hero-text-muted)]">
            <div className="font-semibold text-[var(--hero-text)]">Contact</div>
            <div className="mt-3 space-y-2">
              <div>Email Us info@flerid.com</div>
              <div>Call Us +91 6003351943</div>
              <div className="mt-3 text-xs text-[var(--hero-text-muted)]">
                <Link href="/privacy" className="block hover:text-[var(--hero-text)]">Privacy</Link>
                <Link href="/terms" className="block hover:text-[var(--hero-text)]">Terms</Link>
                <Link href="/cookies" className="block hover:text-[var(--hero-text)]">Cookie Policy</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-[var(--color-border)] pt-6 text-xs text-[var(--hero-text-muted)]">
          © 2025 Flerid Influence - Premium Influencer Marketing Platform. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
