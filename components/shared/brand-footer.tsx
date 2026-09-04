import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, Linkedin, Mail, MapPin } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { ClientPhoneLink } from "@/components/shared/client-phone-link";
import { type BrandId, getBrand } from "@/lib/brands";

const businessLinks = {
  services: [
    { title: "OSHA Training & Certification", href: "/business/services/osha-training" },
    { title: "Safety Audits & Compliance", href: "/business/services/safety-audits" },
    { title: "Program Development", href: "/business/services/program-development" },
    { title: "Equipment Inspection", href: "/business/services/equipment-inspection" },
  ],
  company: [
    { title: "About", href: "/business/about" },
    { title: "Industries Served", href: "/business/industries" },
    { title: "Case Studies", href: "/business/case-studies" },
    { title: "Free Assessment", href: "/business/free-assessment" },
    { title: "Contact", href: "/business/contact" },
  ],
};

const foundationLinks = {
  services: [
    { title: "Youth Enrichment", href: "/foundation/programs/youth-enrichment" },
    { title: "Occupational Empowerment", href: "/foundation/programs/occupational-empowerment" },
    { title: "Supportive Services", href: "/foundation/programs/supportive-services" },
    { title: "EHS Outreach", href: "/foundation/programs/environmental-health-safety" },
  ],
  company: [
    { title: "About", href: "/foundation/about" },
    { title: "Events", href: "/foundation/events" },
    { title: "Give Love", href: "/foundation/give-love" },
    { title: "Community Partners", href: "/foundation/community-partners" },
    { title: "Contact", href: "/foundation/contact" },
  ],
};

const legal = [
  { title: "Privacy Policy", href: "/privacy" },
  { title: "Terms of Service", href: "/terms" },
  { title: "Accessibility", href: "/accessibility" },
];

interface BrandFooterProps {
  brandId: BrandId;
}

export function BrandFooter({ brandId }: BrandFooterProps) {
  const brand = getBrand(brandId);
  const links = brandId === "tda" ? businessLinks : foundationLinks;

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-4 space-y-4">
            <Link href={brand.routes.home} className="flex items-center gap-3">
              {brandId === "BLove" ? (
                <Image
                  src="/images/blove-logo.png"
                  alt="B Love Foundation Logo"
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-lg object-cover"
                />
              ) : (
                <Image
                  src="/images/TDA_Enterprise_vector_logo.svg"
                  alt="TDA Enterprise Logo"
                  width={240}
                  height={120}
                  className="h-16 w-auto"
                />
              )}
              <div className="flex flex-col">
                <span className="text-lg font-bold leading-none">{brand.name}</span>
                {brandId === "BLove" && (
                  <span className="text-xs text-gray-400">{brand.legalName}</span>
                )}
              </div>
            </Link>
            <p className="text-sm text-gray-400 max-w-xs">{brand.mission}</p>
            <div className="flex gap-4">
              {brand.social.instagram && (
                <Link href={brand.social.instagram} className="text-gray-400 hover:text-primary transition-colors" aria-label="Instagram">
                  <Instagram className="h-5 w-5" />
                </Link>
              )}
              {brand.social.facebook && (
                <Link href={brand.social.facebook} className="text-gray-400 hover:text-primary transition-colors" aria-label="Facebook">
                  <Facebook className="h-5 w-5" />
                </Link>
              )}
              {brand.social.linkedin && (
                <Link href={brand.social.linkedin} className="text-gray-400 hover:text-primary transition-colors" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </Link>
              )}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-primary">{brandId === "tda" ? "Services" : "Programs"}</h3>
            <ul className="space-y-2">
              {links.services.map((link) => (
                <li key={link.title}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-primary">Company</h3>
            <ul className="space-y-2">
              {links.company.map((link) => (
                <li key={link.title}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-primary">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-gray-400">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>
                  {brand.contact.address}
                  <br />
                  {brand.contact.cityState}
                </span>
              </li>
              <li>
                <Link href={`mailto:${brand.contact.email}`} className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
                  <Mail className="h-4 w-4" />
                  {brand.contact.email}
                </Link>
              </li>
              <li>
                <ClientPhoneLink
                  phone={brand.contact.phone}
                  className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                />
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-slate-700" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} {brand.legalName}. All rights reserved.
          </p>
          <div className="flex gap-6">
            {legal.map((link) => (
              <Link key={link.title} href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

