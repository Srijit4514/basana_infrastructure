import { MessageCircle } from "lucide-react";
import { site } from "@/lib/site";

export function WhatsAppFloatingButton() {
  return (
    <a
      href={`https://wa.me/${site.whatsapp}?text=Hello%20Basana%20Infrastructure%2C%20I%20would%20like%20to%20discuss%20a%20project.`}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-soft transition hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
      aria-label="Contact Basana Infrastructure on WhatsApp"
    >
      <MessageCircle className="h-7 w-7" aria-hidden="true" />
    </a>
  );
}
