import type { Metadata } from "next";
import { ContactSection } from "@/components/contact-section";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Basana Infrastructure by phone, email, WhatsApp, or inquiry form for construction, service, and supply requirements."
};

export default function ContactPage() {
  return <ContactSection />;
}
