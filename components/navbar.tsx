"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Building2, Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { navItems, site } from "@/lib/site";

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
      <div className="container flex h-20 items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label="Basana Infrastructure home"
          onClick={() => setIsOpen(false)}
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-sm">
            <Building2 className="h-6 w-6" aria-hidden="true" />
          </span>
          <span className="leading-tight">
            <span className="block text-base font-bold text-slate-950">
              Basana
            </span>
            <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Infrastructure
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-md px-4 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-100 hover:text-slate-950",
                pathname === item.href && "bg-slate-100 text-primary"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button asChild variant="outline" size="sm">
            <a href={`tel:${site.phone[0].replace(/\s/g, "")}`}>
              <Phone className="h-4 w-4" aria-hidden="true" />
              {site.phone[0]}
            </a>
          </Button>
          <Button asChild size="sm">
            <Link href="/contact">Request Quote</Link>
          </Button>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={() => setIsOpen((value) => !value)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </Button>
      </div>

      {isOpen ? (
        <div className="border-t bg-white lg:hidden">
          <nav className="container grid gap-1 py-4" aria-label="Mobile">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "rounded-md px-3 py-3 text-sm font-semibold text-slate-700",
                  pathname === item.href && "bg-slate-100 text-primary"
                )}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild className="mt-2">
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                Request Quote
              </Link>
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
