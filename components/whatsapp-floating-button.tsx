"use client";

import { MessageCircle } from "lucide-react";
import { site } from "@/lib/site";

function normalizePhone(phone: string) {
  return phone.replace(/\D/g, "");
}

export function WhatsAppFloatingButton() {
  const phoneDigits = normalizePhone(site.whatsapp || site.phone?.[0] || "");
  const message = "Hello Basana Infrastructure, I would like to discuss a project.";
  const webHref = `https://wa.me/${phoneDigits}?text=${encodeURIComponent(message)}`;
  const isMobile = typeof navigator !== "undefined" && /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  const href = isMobile ? `whatsapp://send?phone=${phoneDigits}&text=${encodeURIComponent(message)}` : webHref;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-soft transition hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
      aria-label="Contact Basana Infrastructure on WhatsApp"
    >
      <MessageCircle className="h-7 w-7" aria-hidden="true" />
    </a>
  );
}
