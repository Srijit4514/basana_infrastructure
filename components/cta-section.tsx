import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MotionWrapper } from "@/components/motion-wrapper";
import { site } from "@/lib/site";

export function CTASection() {
  return (
    <section className="bg-slate-950 py-16 text-white md:py-20">
      <MotionWrapper className="container">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-red-200">
              Start with clarity
            </p>
            <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight md:text-4xl">
              Discuss your construction, supply, or service requirement with
              Basana Infrastructure.
            </h2>
            <p className="mt-5 max-w-2xl leading-8 text-slate-300">
              Share your scope, timeline, and priorities. We will help you move
              from requirement to responsible execution.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-blue-50">
              <Link href="/contact">
                Request a Quote
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white">
              <a href={`mailto:${site.email}`}>
                <Mail className="h-5 w-5" aria-hidden="true" />
                Email Us
              </a>
            </Button>
          </div>
        </div>
      </MotionWrapper>
    </section>
  );
}
