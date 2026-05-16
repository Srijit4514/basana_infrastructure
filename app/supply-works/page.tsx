import type { Metadata } from "next";
import { CTASection } from "@/components/cta-section";
import { SupplyGrid } from "@/components/supply-grid";

export const metadata: Metadata = {
  title: "Supply Works",
  description:
    "Basana Infrastructure supplies construction materials, electrical and plumbing materials, hardware, industrial equipment, office supplies, and safety products."
};

export default function SupplyWorksPage() {
  return (
    <>
      <SupplyGrid />
      <CTASection />
    </>
  );
}
