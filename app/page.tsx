import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { CTASection } from "@/components/cta-section";
import { HeroSection } from "@/components/hero-section";
import { MissionVisionSection } from "@/components/mission-vision-section";
import { ServicesGrid } from "@/components/services-grid";
import { SupplyGrid } from "@/components/supply-grid";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <MissionVisionSection />
      <ServicesGrid />
      <SupplyGrid />
      <CTASection />
      <ContactSection />
    </>
  );
}
