import { Eye, Target } from "lucide-react";
import { MotionWrapper } from "@/components/motion-wrapper";
import { site } from "@/lib/site";

export function MissionVisionSection() {
  const items = [
    { title: "Mission", text: site.mission, icon: Target },
    { title: "Vision", text: site.vision, icon: Eye }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container grid gap-6 md:grid-cols-2">
        {items.map((item, index) => {
          const Icon = item.icon;
          return (
            <MotionWrapper key={item.title} delay={index * 0.08}>
              <article className="h-full rounded-lg border border-slate-200 bg-slate-50 p-8 shadow-sm">
                <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-white text-primary shadow-sm">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h2 className="mt-8 text-2xl font-semibold text-slate-950">
                  {item.title}
                </h2>
                <p className="mt-4 leading-8 text-slate-600">{item.text}</p>
              </article>
            </MotionWrapper>
          );
        })}
      </div>
    </section>
  );
}
