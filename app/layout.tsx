import type { Metadata } from "next";
import "@/styles/globals.css";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { WhatsAppFloatingButton } from "@/components/whatsapp-floating-button";

export const metadata: Metadata = {
  metadataBase: new URL("https://basana-infrastructure.vercel.app"),
  title: {
    default: "Basana Infrastructure | Construction, Supply & Service Solutions",
    template: "%s | Basana Infrastructure"
  },
  description:
    "Basana Infrastructure delivers professional construction, renovation, civil engineering, maintenance, and general supply services across commercial and residential projects.",
  keywords: [
    "Basana Infrastructure",
    "construction company",
    "civil engineering",
    "renovation",
    "general supply",
    "construction materials",
    "facility support"
  ],
  openGraph: {
    title: "Basana Infrastructure",
    description:
      "Trusted construction, supply, and service solutions built on quality, safety, and long-term client relationships.",
    url: "https://basana-infrastructure.vercel.app",
    siteName: "Basana Infrastructure",
    locale: "en_IN",
    type: "website"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <body className="min-h-screen font-sans">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
