import SiteShell from "@/components/site/SiteShell";
import HeroSection from "@/components/sections/HeroSection";
import TrustStrip from "@/components/sections/TrustStrip";
import FeaturedInfluencersSection from "@/components/sections/FeaturedInfluencersSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import CaseStudiesSection from "@/components/sections/CaseStudiesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <SiteShell>
      <HeroSection />
      <TrustStrip />
      <FeaturedInfluencersSection />
      <FeaturesSection />
      <HowItWorksSection />
      <CaseStudiesSection />
      <TestimonialsSection />
      <ContactSection />
    </SiteShell>
  );
}
