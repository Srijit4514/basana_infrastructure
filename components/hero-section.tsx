import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, HardHat, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MotionWrapper } from "@/components/motion-wrapper";
import { site } from "@/lib/site";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute inset-x-0 top-0 h-40 bg-slate-50" aria-hidden="true" />
      <div className="container relative grid min-h-[calc(100vh-5rem)] items-center gap-12 py-12 lg:grid-cols-[1fr_0.9fr] lg:py-20">
        <MotionWrapper>
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-100 bg-red-50 px-4 py-2 text-sm font-semibold text-primary">
              <HardHat className="h-4 w-4" aria-hidden="true" />
              Trusted construction, supply, and support partner
            </div>
            <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl">
              Basana Infrastructure
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
              Professional construction, renovation, civil works, maintenance,
              and general supply solutions delivered with quality, safety, and
              client-focused execution.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/contact">
                  Start a Project
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href={`tel:${site.phone[0].replace(/\s/g, "")}`}>
                  <Phone className="h-5 w-5" aria-hidden="true" />
                  Call Now
                </a>
              </Button>
            </div>
            <div className="mt-10 grid gap-4 text-sm font-medium text-slate-700 sm:grid-cols-3">
              {["Quality workmanship", "Reliable supply chain", "Responsive support"].map(
                (item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" aria-hidden="true" />
                    {item}
                  </div>
                )
              )}
            </div>
          </div>
        </MotionWrapper>

        <MotionWrapper delay={0.12}>
          <div className="relative">
            <div className="overflow-hidden rounded-lg border border-slate-200 bg-slate-100 shadow-soft">
              <Image
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80"
                alt="Modern construction site with professional infrastructure work"
                width={1200}
                height={900}
                priority
                className="aspect-[4/3] h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 left-6 right-6 rounded-lg border bg-white p-5 shadow-soft sm:left-auto sm:w-80">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                Built for confidence
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                From project planning to material supply and service support,
                Basana Infrastructure keeps execution clear and accountable.
              </p>
            </div>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}
