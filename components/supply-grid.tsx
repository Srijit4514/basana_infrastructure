import { FeatureGrid } from "@/components/feature-grid";
import { SectionHeading } from "@/components/section-heading";
import { supplyWorks } from "@/lib/site";

export function SupplyGrid() {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        <SectionHeading
          kicker="Supply Works"
          title="Materials and equipment supplied with reliability and accountability."
          description="Basana Infrastructure supports projects, institutions, offices, and facilities with construction materials, MEP supplies, hardware, equipment, office supplies, and safety products."
        />
        <div className="mt-10">
          <FeatureGrid items={supplyWorks} columns="three" />
        </div>
      </div>
    </section>
  );
}
