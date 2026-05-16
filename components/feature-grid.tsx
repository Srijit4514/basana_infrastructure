import type { LucideIcon } from "lucide-react";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MotionWrapper } from "@/components/motion-wrapper";

type Feature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

type FeatureGridProps = {
  items: Feature[];
  columns?: "three" | "four";
};

export function FeatureGrid({ items, columns = "four" }: FeatureGridProps) {
  const gridClass =
    columns === "three"
      ? "grid gap-5 md:grid-cols-2 lg:grid-cols-3"
      : "grid gap-5 md:grid-cols-2 lg:grid-cols-4";

  return (
    <div className={gridClass}>
      {items.map((item, index) => {
        const Icon = item.icon;
        return (
          <MotionWrapper key={item.title} delay={index * 0.06}>
            <Card className="h-full border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
              <CardHeader>
                <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-red-50 text-primary">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
            </Card>
          </MotionWrapper>
        );
      })}
    </div>
  );
}
