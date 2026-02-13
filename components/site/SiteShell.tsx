"use client";

import { useState } from "react";
import Script from "next/script";
import Navbar from "@/components/sections/Navbar";
import FooterSection from "@/components/sections/FooterSection";
import MobileCtaBar from "@/components/sections/MobileCtaBar";
import LeadFormModal from "@/components/sections/LeadFormModal";
import { LeadFormProvider } from "@/components/site/LeadFormContext";
import { ThemeProvider } from "@/components/site/ThemeContext";
import StarfieldBackground from "@/components/site/StarfieldBackground";

const navItems = [
  { label: "HOME", href: "/" },
  { label: "HOW IT WORKS", href: "/#how-it-works" },
  { label: "CASE STUDIES", href: "/case-studies" },
  { label: "INFLUENCERS", href: "/influencers" },
  { label: "CONTACT", href: "/contact" },
];

type SiteShellProps = {
  children: React.ReactNode;
};

export default function SiteShell({ children }: SiteShellProps) {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <ThemeProvider>
      <div className="relative bg-[var(--color-bg)] text-[var(--color-text)]">
        <StarfieldBackground />
        <div className="relative z-10">
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-[var(--color-surface)] focus:px-4 focus:py-2 focus:rounded-lg"
          >
            Skip to content
          </a>
          <Script
            id="organization-jsonld"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Organization",
                name: "Flerid Influence",
                url: "https://influence.flerid.com",
                logo: "https://influence.flerid.com/logo.png",
                sameAs: ["https://www.linkedin.com", "https://www.instagram.com", "https://x.com"],
                contactPoint: [
                  {
                    "@type": "ContactPoint",
                    telephone: "+91 6003351943",
                    contactType: "sales",
                    areaServed: "IN",
                  },
                ],
              }),
            }}
          />
        <LeadFormProvider value={{ open: () => setFormOpen(true) }}>
          <Navbar navItems={navItems} />
          <main id="main" className="pt-[var(--nav-height)]">
            {children}
          </main>
          <FooterSection navItems={navItems} />
          <MobileCtaBar />
          <LeadFormModal open={formOpen} onClose={() => setFormOpen(false)} />
        </LeadFormProvider>
      </div>
      </div>
    </ThemeProvider>
  );
}
