import Link from "next/link";
import { Building2, Mail, Phone } from "lucide-react";
import { navItems, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t bg-slate-950 text-white">
      <div className="container grid gap-10 py-12 md:grid-cols-[1.4fr_0.8fr_1fr]">
        <div>
          <Link href="/" className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-white text-primary">
              <Building2 className="h-6 w-6" aria-hidden="true" />
            </span>
            <span>
              <span className="block text-lg font-bold">{site.name}</span>
              <span className="text-sm text-slate-300">
                Construction, supply, and service solutions
              </span>
            </span>
          </Link>
          <p className="mt-6 max-w-md text-sm leading-7 text-slate-300">
            Built on trust, quality, and long-term relationships for commercial,
            residential, institutional, and operational project needs.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">
            Company
          </h2>
          <nav className="mt-5 grid gap-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-slate-300 transition hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">
            Contact
          </h2>
          <div className="mt-5 grid gap-4 text-sm text-slate-300">
            {site.phone.map((phone) => (
              <a
                key={phone}
                href={`tel:${phone.replace(/\s/g, "")}`}
                className="flex items-center gap-3 transition hover:text-white"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                {phone}
              </a>
            ))}
            <a
              href={`mailto:${site.email}`}
              className="flex items-center gap-3 transition hover:text-white"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              {site.email}
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5">
        <div className="container flex flex-col justify-between gap-3 text-sm text-slate-400 md:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>Designed for speed, accessibility, and future CMS expansion.</p>
        </div>
      </div>
    </footer>
  );
}
