import {
  Building2,
  ClipboardCheck,
  Factory,
  HardHat,
  Headphones,
  Home,
  Mail,
  MapPin,
  PackageCheck,
  Phone,
  ShieldCheck,
  Sparkles,
  Truck,
  Wrench,
  Zap
} from "lucide-react";

export const site = {
  name: "Basana Infrastructure",
  phone: ["+91 8981789150", "+91 8013938526"],
  email: "basana.infrastructure@gmail.com",
  whatsapp: "918981789150",
  mapEmbedUrl:
    "https://www.google.com/maps?q=22.871778,88.414106&z=15&output=embed",
  mapLink:
    "https://www.google.com/maps/place/22%C2%B052'18.4%22N+88%C2%B024'50.8%22E/@22.8692137,88.4136492,1191m/data=!3m1!1e3!4m4!3m3!8m2!3d22.871778!4d88.414106",
  mission:
    "To deliver high-quality construction, supply, and service solutions through professionalism, innovation, and customer-focused approaches while maintaining safety and sustainability standards.",
  vision:
    "To become a trusted and leading organization in construction and general supply services by consistently exceeding client expectations.",
  closing:
    "We believe that true success is built on trust, quality, and long-term relationships. Every project we undertake-whether in construction, general supply, or service work-is executed with dedication, integrity, and a strong commitment to excellence."
};

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/supply-works", label: "Supply Works" },
  { href: "/contact", label: "Contact" }
];

export const coreWorks = [
  {
    title: "Commercial & Residential Construction",
    description:
      "End-to-end building works planned around quality, timelines, compliance, and dependable site execution.",
    icon: Building2
  },
  {
    title: "Renovation & Remodeling",
    description:
      "Practical upgrades for homes, offices, institutions, and operating facilities with minimal disruption.",
    icon: Home
  },
  {
    title: "Civil Engineering Works",
    description:
      "Civil works, structural coordination, and project support delivered with disciplined supervision.",
    icon: HardHat
  },
  {
    title: "Structural & Finishing Works",
    description:
      "Strong foundations, clean finishes, and detail-focused delivery from shell to final handover.",
    icon: ClipboardCheck
  }
];

export const serviceWorks = [
  {
    title: "Maintenance & Repair Services",
    description:
      "Reliable upkeep and responsive repair work for residential, commercial, and institutional needs.",
    icon: Wrench
  },
  {
    title: "Installation Works",
    description:
      "Professional installation support for electrical, plumbing, fixtures, systems, and facility assets.",
    icon: Zap
  },
  {
    title: "Facility Support Services",
    description:
      "Operational support that keeps buildings, offices, and project locations running smoothly.",
    icon: Factory
  },
  {
    title: "Technical Support Services",
    description:
      "Skilled assistance for site coordination, troubleshooting, compliance checks, and execution support.",
    icon: Headphones
  }
];

export const supplyWorks = [
  {
    title: "Construction Materials",
    description:
      "Sourcing and supply of project-critical materials aligned with site requirements and schedules.",
    icon: Truck
  },
  {
    title: "Electrical & Plumbing Materials",
    description:
      "Dependable supply support for MEP, repair, and fit-out requirements.",
    icon: Zap
  },
  {
    title: "Hardware & Industrial Equipment",
    description:
      "Hardware, tools, and industrial supplies for construction and maintenance operations.",
    icon: PackageCheck
  },
  {
    title: "Office & Institutional Supplies",
    description:
      "General supplies for offices, schools, institutions, and operational facilities.",
    icon: Mail
  },
  {
    title: "Safety Equipment",
    description:
      "Safety products that support responsible, compliant, and protected work environments.",
    icon: ShieldCheck
  }
];

export const values = [
  {
    title: "Trust",
    description:
      "Clear communication, honest commitments, and long-term client relationships guide every engagement.",
    icon: ShieldCheck
  },
  {
    title: "Quality",
    description:
      "Materials, methods, and workmanship are selected with durability and professional finish in mind.",
    icon: Sparkles
  },
  {
    title: "Safety",
    description:
      "Projects are handled with practical safety awareness and responsible site coordination.",
    icon: HardHat
  },
  {
    title: "Responsiveness",
    description:
      "We stay accessible, adaptable, and focused on resolving client needs efficiently.",
    icon: Phone
  }
];

export const contactCards = [
  {
    title: "Call Us",
    lines: site.phone,
    icon: Phone
  },
  {
    title: "Email",
    lines: [site.email],
    icon: Mail
  },
  {
    title: "Service Area",
    lines: ["Construction, supply, and support services"],
    icon: MapPin
  }
];
