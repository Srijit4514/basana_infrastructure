import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MotionWrapper } from "@/components/motion-wrapper";
import { SectionHeading } from "@/components/section-heading";
import { contactCards, site } from "@/lib/site";

export function ContactSection() {
  return (
    <section className="section-padding bg-slate-50">
      <div className="container">
        <SectionHeading
          kicker="Contact"
          title="Let us know what you are planning."
          description="Call, email, WhatsApp, or send a message through the form. Basana Infrastructure is ready to discuss construction, service, and supply requirements."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <MotionWrapper>
            <div className="grid gap-5">
              {contactCards.map((card) => {
                const Icon = card.icon;
                return (
                  <Card key={card.title} className="border-slate-200 bg-white">
                    <CardHeader>
                      <span className="mb-3 flex h-11 w-11 items-center justify-center rounded-lg bg-red-50 text-primary">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <CardTitle>{card.title}</CardTitle>
                      <CardDescription>
                        {card.lines.map((line) => (
                          <span key={line} className="block">
                            {line}
                          </span>
                        ))}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                );
              })}
              <Button asChild size="lg" className="w-full">
                <a
                  href={`https://wa.me/${site.whatsapp}?text=Hello%20Basana%20Infrastructure%2C%20I%20would%20like%20to%20discuss%20a%20project.`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircle className="h-5 w-5" aria-hidden="true" />
                  Chat on WhatsApp
                </a>
              </Button>
            </div>
          </MotionWrapper>

          <MotionWrapper delay={0.1}>
            <div className="rounded-lg border bg-white p-6 shadow-sm md:p-8">
              <form className="grid gap-5">
                <div className="grid gap-5 md:grid-cols-2">
                  <label className="grid gap-2 text-sm font-semibold text-slate-700">
                    Name
                    <Input name="name" placeholder="Your name" autoComplete="name" />
                  </label>
                  <label className="grid gap-2 text-sm font-semibold text-slate-700">
                    Phone
                    <Input name="phone" placeholder="Your phone number" autoComplete="tel" />
                  </label>
                </div>
                <label className="grid gap-2 text-sm font-semibold text-slate-700">
                  Email
                  <Input
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    autoComplete="email"
                  />
                </label>
                <label className="grid gap-2 text-sm font-semibold text-slate-700">
                  Requirement
                  <Textarea
                    name="message"
                    placeholder="Tell us about your construction, supply, or service requirement"
                  />
                </label>
                <Button type="submit" size="lg">
                  Send Message
                </Button>
              </form>
            </div>
          </MotionWrapper>
        </div>

        <MotionWrapper className="mt-6" delay={0.12}>
          <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
            <div className="flex items-center justify-between gap-4 border-b border-slate-100 px-5 py-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                  Google Maps
                </p>
                <h3 className="mt-1 text-lg font-semibold text-slate-950">
                  Find us on the map
                </h3>
              </div>
              <a
                href={site.mapLink}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-semibold text-primary transition-colors hover:text-primary/80"
              >
                Open in Google Maps
              </a>
            </div>
            <div className="aspect-[16/9] min-h-[320px] w-full">
              <iframe
                title="Basana Infrastructure location"
                src={site.mapEmbedUrl}
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}
