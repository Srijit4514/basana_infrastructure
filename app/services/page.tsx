import type { Metadata } from "next";
import { CTASection } from "@/components/cta-section";
import { ServicesGrid } from "@/components/services-grid";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Basana Infrastructure services including construction, renovation, civil engineering, maintenance, installation, and technical support."
};

export default function ServicesPage() {
  return (
    <>
      <ServicesGrid variant="full" />
      <CTASection />
    </>
  );
}
