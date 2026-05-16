import { FeatureGrid } from "@/components/feature-grid";
import { SectionHeading } from "@/components/section-heading";
import { coreWorks, serviceWorks } from "@/lib/site";

type ServicesGridProps = {
  variant?: "home" | "full";
};

export function ServicesGrid({ variant = "home" }: ServicesGridProps) {
  const items = variant === "home" ? coreWorks : [...coreWorks, ...serviceWorks];

  return (
    <section className="section-padding bg-slate-50">
      <div className="container">
        <SectionHeading
          kicker="Services"
          title={
            variant === "home"
              ? "Construction and service work built around dependable delivery."
              : "Construction, renovation, engineering, maintenance, and technical support."
          }
          description="Every engagement is handled with practical planning, professional supervision, and an emphasis on durability, safety, and clear client communication."
        />
        <div className="mt-10">
          <FeatureGrid items={items} columns={variant === "home" ? "four" : "three"} />
        </div>
      </div>
    </section>
  );
}
