import Link from "next/link";
import { ArrowRight, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MotionWrapper } from "@/components/motion-wrapper";
import { SectionHeading } from "@/components/section-heading";
import { site } from "@/lib/site";

export function AboutSection() {
  return (
    <section className="section-padding bg-slate-50">
      <div className="container grid gap-10 lg:grid-cols-[0.9fr_1fr] lg:items-center">
        <MotionWrapper>
          <div className="rounded-lg border bg-white p-8 shadow-sm">
            <span className="flex h-14 w-14 items-center justify-center rounded-lg bg-blue-50 text-primary">
              <Building2 className="h-7 w-7" aria-hidden="true" />
            </span>
            <h2 className="mt-8 text-3xl font-semibold tracking-tight text-slate-950">
              Practical infrastructure solutions with a professional standard.
            </h2>
            <p className="mt-5 leading-8 text-slate-600">{site.closing}</p>
          </div>
        </MotionWrapper>
        <MotionWrapper delay={0.1}>
          <SectionHeading
            kicker="About Basana"
            title="A dependable partner for construction, supplies, and service work."
            description="Basana Infrastructure supports clients with coordinated building works, renovation, civil engineering, maintenance, installation, and general supply requirements. The company is structured around responsive communication, careful material selection, and dependable execution."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              ["01", "Construction"],
              ["02", "Service Works"],
              ["03", "General Supply"]
            ].map(([count, label]) => (
              <div key={label} className="rounded-lg border bg-white p-5">
                <p className="text-2xl font-semibold text-primary">{count}</p>
                <p className="mt-2 text-sm font-semibold text-slate-700">{label}</p>
              </div>
            ))}
          </div>
          <Button asChild className="mt-8" variant="outline">
            <Link href="/about">
              Learn More
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        </MotionWrapper>
      </div>
    </section>
  );
}
