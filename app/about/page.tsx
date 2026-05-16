import type { Metadata } from "next";
import { FeatureGrid } from "@/components/feature-grid";
import { MissionVisionSection } from "@/components/mission-vision-section";
import { MotionWrapper } from "@/components/motion-wrapper";
import { SectionHeading } from "@/components/section-heading";
import { values } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Basana Infrastructure's mission, vision, values, and professional approach to construction, service work, and general supply."
};

export default function AboutPage() {
  return (
    <>
      <section className="section-padding bg-white">
        <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <MotionWrapper>
            <SectionHeading
              kicker="About Us"
              title="A modern infrastructure partner built on trust, clarity, and execution."
              description="Basana Infrastructure serves construction, renovation, engineering, maintenance, installation, technical support, and general supply requirements with a practical, client-focused approach."
            />
          </MotionWrapper>
          <MotionWrapper delay={0.1}>
            <div className="rounded-lg border bg-slate-50 p-8 shadow-sm">
              <p className="text-lg leading-8 text-slate-700">
                We help clients move from requirement to reliable delivery by
                coordinating people, materials, services, and timelines with
                professional discipline. Our work spans residential,
                commercial, institutional, and facility support needs.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {["Professional", "Responsive", "Accountable"].map((item) => (
                  <div key={item} className="rounded-lg bg-white p-5 text-center shadow-sm">
                    <p className="text-sm font-semibold text-slate-800">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </MotionWrapper>
        </div>
      </section>
      <MissionVisionSection />
      <section className="section-padding bg-slate-50">
        <div className="container">
          <SectionHeading
            kicker="Core Values"
            title="The principles behind every project and supply commitment."
          />
          <div className="mt-10">
            <FeatureGrid items={values} columns="four" />
          </div>
        </div>
      </section>
    </>
  );
}
