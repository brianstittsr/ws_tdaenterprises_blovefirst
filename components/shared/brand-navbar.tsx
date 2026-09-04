"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Menu,
  HardHat,
  Award,
  ClipboardCheck,
  Briefcase,
  Heart,
  Users,
  Calendar,
  HandHelping,
  Phone,
  LogIn,
  UserPlus,
  Info,
  Eye,
  GraduationCap,
  Shirt,
  ShieldCheck,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { type BrandId, getBrand } from "@/lib/brands";

const businessServices = [
  {
    title: "OSHA Training & Certification",
    href: "/business/services/osha-training",
    description: "OSHA 10/30-Hour, First Aid/CPR/AED, and more.",
    icon: Award,
  },
  {
    title: "Safety Audits & Compliance",
    href: "/business/services/safety-audits",
    description: "Identify hazards and close compliance gaps.",
    icon: ClipboardCheck,
  },
  {
    title: "Program Development",
    href: "/business/services/program-development",
    description: "Turnkey EHS programs built for your operation.",
    icon: Briefcase,
  },
  {
    title: "Equipment Inspection",
    href: "/business/services/equipment-inspection",
    description: "Certified inspections that keep teams safe.",
    icon: HardHat,
  },
  {
    title: "Management & Consulting",
    href: "/business/services/management-consulting",
    description: "Expert guidance to build stronger safety leadership.",
    icon: Briefcase,
  },
  {
    title: "Employee Observations",
    href: "/business/services/employee-observations",
    description: "On-the-floor observations that catch risk early.",
    icon: Eye,
  },
  {
    title: "Training & Coaching",
    href: "/business/services/training-coaching",
    description: "Hands-on coaching that builds lasting safety habits.",
    icon: GraduationCap,
  },
];

const foundationPrograms = [
  {
    title: "Youth Enrichment",
    href: "/foundation/programs/youth-enrichment",
    description: "TSAP, arts & crafts, life skills, and more.",
    icon: Users,
  },
  {
    title: "Occupational Empowerment",
    href: "/foundation/programs/occupational-empowerment",
    description: "Job readiness, safety training, and certifications.",
    icon: Award,
  },
  {
    title: "Supportive Services",
    href: "/foundation/programs/supportive-services",
    description: "Housing, recovery, and employable citizen support.",
    icon: HandHelping,
  },
  {
    title: "Events",
    href: "/foundation/events",
    description: "Community showcases, fundraisers, and programs.",
    icon: Calendar,
  },
  {
    title: "Community Closet",
    href: "/foundation/programs/community-closet",
    description: "Free clothing and essentials for those in need.",
    icon: Shirt,
  },
  {
    title: "OSHA Outreach Training",
    href: "/foundation/programs/osha-outreach-training",
    description: "Free OSHA safety certification for the community.",
    icon: ShieldCheck,
  },
];

export function BrandNavbar() {
  const pathname = usePathname() ?? "";
  const [mobileOpen, setMobileOpen] = useState(false);

  const brandId: BrandId = pathname.startsWith("/foundation") ? "BLove" : "tda";
  const brand = getBrand(brandId);
  const isBusiness = brandId === "tda";

  const navLinks = isBusiness
    ? [
        { title: "Services", href: "/business/services", items: businessServices },
        { title: "Training", href: "/business/training" },
        { title: "Industries", href: "/business/industries" },
        { title: "About", href: "/business/about" },
        { title: "Contact", href: "/business/contact" },
      ]
    : [
        { title: "About", href: "/foundation/about" },
        { title: "Programs", href: "/foundation/programs", items: foundationPrograms },
        { title: "Events", href: "/foundation/events" },
        { title: "Give Love", href: "/foundation/give-love" },
        { title: "Contact", href: "/foundation/contact" },
      ];

  const ctaHref = isBusiness ? "/business/free-assessment" : "/foundation/give-love";
  const ctaLabel = isBusiness ? "Free Safety Assessment" : "Donate Now";

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
        <Link href={brand.routes.home} className="flex items-center gap-2">
          {brandId === "BLove" ? (
            <Image
              src="/images/blove-logo.jpg"
              alt="B Love Foundation Logo"
              width={40}
              height={40}
              className="h-10 w-10 rounded-lg object-cover"
            />
          ) : (
            <Image
              src="/images/tda-logo.svg"
              alt="TDA Enterprises Logo"
              width={80}
              height={40}
              className="h-10 w-auto"
            />
          )}
          <div className="flex flex-col">
            <span className="text-lg font-bold leading-none">{brand.name}</span>
            {brandId === "BLove" && (
              <span className="text-xs text-muted-foreground">{brand.legalName}</span>
            )}
          </div>
        </Link>

        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            {navLinks.map((link) =>
              "items" in link && link.items ? (
                <NavigationMenuItem key={link.title}>
                  <NavigationMenuTrigger>{link.title}</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[520px] gap-3 p-4 md:grid-cols-2">
                      {link.items.map((item) => (
                        <Link
                          key={item.title}
                          href={item.href}
                          className="flex items-start gap-3 rounded-lg p-3 hover:bg-accent transition-colors"
                        >
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                            <item.icon className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <div className="font-semibold">{item.title}</div>
                            <p className="text-sm text-muted-foreground">{item.description}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ) : (
                <NavigationMenuItem key={link.title}>
                  <NavigationMenuLink asChild
                    className={cn(
                      "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none"
                    )}>
                    <Link href={link.href}>{link.title}</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              )
            )}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="hidden lg:flex items-center gap-3">
          <Link href="/sign-in" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Sign In
          </Link>
          <Link href="/sign-up" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Register
          </Link>
          <Button asChild>
            <Link href={ctaHref}>{ctaLabel}</Link>
          </Button>
        </div>

        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon" aria-label="Open menu">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-4 mt-8">
              {navLinks.map((link) =>
                "items" in link && link.items ? (
                  <div key={link.title} className="space-y-2">
                    <h3 className="font-semibold text-lg">{link.title}</h3>
                    {link.items.map((item) => (
                      <Link
                        key={item.title}
                        href={item.href}
                        className="flex items-center gap-3 py-2"
                        onClick={() => setMobileOpen(false)}
                      >
                        <item.icon className="h-5 w-5 text-primary" />
                        <span className="font-medium">{item.title}</span>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    key={link.title}
                    href={link.href}
                    className="flex items-center gap-3 py-2"
                    onClick={() => setMobileOpen(false)}
                  >
                    <Info className="h-5 w-5 text-primary" />
                    <span className="font-medium">{link.title}</span>
                  </Link>
                )
              )}
              <div className="border-t pt-4 space-y-2">
                <Link href="/sign-in" className="flex items-center gap-3 py-2" onClick={() => setMobileOpen(false)}>
                  <LogIn className="h-5 w-5 text-primary" />
                  <span className="font-medium">Sign In</span>
                </Link>
                <Link href="/sign-up" className="flex items-center gap-3 py-2" onClick={() => setMobileOpen(false)}>
                  <UserPlus className="h-5 w-5 text-primary" />
                  <span className="font-medium">Register</span>
                </Link>
              </div>
              <div className="border-t pt-4">
                <Button className="w-full" asChild>
                  <Link href={ctaHref} onClick={() => setMobileOpen(false)}>
                    {ctaLabel}
                  </Link>
                </Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
