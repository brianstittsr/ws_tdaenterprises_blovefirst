import Link from "next/link";
import {
  Shield,
  ClipboardCheck,
  HardHat,
  Award,
  TrendingUp,
  Phone,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { RotatingHero } from "@/components/marketing/rotating-hero";

const heroSlides = [
  {
    id: "safety-culture",
    image: "https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
    alt: "Construction workers focused on safety",
    title: "Protect Your People. Protect Your Business.",
    description:
      "TDA Enterprise delivers expert environmental, health, and safety services that reduce risk, maintain compliance, and build a stronger safety culture.",
    primaryCta: { label: "Request Free Safety Assessment", href: "/business/free-assessment" },
    secondaryCta: { label: "Explore EHS Services", href: "/business/services" },
  },
  {
    id: "warehouse-safety",
    image: "https://images.pexels.com/photos/4480505/pexels-photo-4480505.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
    alt: "Warehouse safety and equipment inspection",
    title: "Practical Safety Solutions for High-Hazard Workplaces",
    description:
      "From OSHA training and safety audits to equipment inspections and turnkey program development, we help you stay compliant and keep operations running smoothly.",
    primaryCta: { label: "View Training Programs", href: "/business/training" },
    secondaryCta: { label: "Schedule a Consultation", href: "/business/contact" },
  },
  {
    id: "team-training",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
    alt: "Safety training session",
    title: "Training That Sticks. Results That Last.",
    description:
      "Bilingual, hands-on training and documentation support designed for multilingual workforces in manufacturing, construction, warehousing, and healthcare.",
    primaryCta: { label: "Book OSHA Training", href: "/business/services/osha-training" },
    secondaryCta: { label: "Contact Our Team", href: "/business/contact" },
  },
];

export const metadata = {
  title: "TDA Enterprise | Professional EHS Services",
  description:
    "TDA Enterprise delivers OSHA training, safety audits, program development, and equipment inspections to reduce risk and keep your workforce safe.",
};

const services = [
  {
    title: "OSHA Training & Certification",
    description: "OSHA 10-Hour, 30-Hour, First Aid/CPR/AED, and specialized safety certifications.",
    icon: Award,
    href: "/business/services/osha-training",
  },
  {
    title: "Safety Audits & Compliance",
    description: "Comprehensive workplace audits that identify hazards and close compliance gaps.",
    icon: ClipboardCheck,
    href: "/business/services/safety-audits",
  },
  {
    title: "Equipment Inspection",
    description: "Certified inspections for aerial work platforms, scaffolding, fall protection, and more.",
    icon: HardHat,
    href: "/business/services/equipment-inspection",
  },
  {
    title: "Program Development",
    description: "Turnkey EHS programs tailored to your industry, workforce, and regulatory requirements.",
    icon: Shield,
    href: "/business/services/program-development",
  },
];

const industries = [
  { title: "Manufacturing", href: "/business/industries/manufacturing" },
  { title: "Construction", href: "/business/industries/construction" },
  { title: "Warehousing & Logistics", href: "/business/industries/warehousing-logistics" },
  { title: "Healthcare Facilities", href: "/business/industries/healthcare" },
];

export default function BusinessHomePage() {
  return (
    <>
      {/* Hero */}
      <RotatingHero slides={heroSlides} />

      {/* Services */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our EHS Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Practical, results-driven safety solutions designed for high-hazard industries and
              multilingual workforces.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <Link key={service.title} href={service.href} className="block">
                <Card className="h-full transition-shadow hover:shadow-lg">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-3">{service.description}</CardDescription>
                    <span className="text-sm font-medium text-primary flex items-center gap-1">
                      Learn more
                      <ArrowRight className="h-3 w-3" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Industries We Serve</h2>
              <p className="text-muted-foreground mb-8">
                We specialize in companies with 50-500 employees, high-hazard operations, and
                multilingual teams that need clear, practical safety support.
              </p>
              <ul className="space-y-4">
                {industries.map((industry) => (
                  <li key={industry.title}>
                    <Link
                      href={industry.href}
                      className="flex items-center gap-3 group hover:text-primary transition-colors"
                    >
                      <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <TrendingUp className="h-4 w-4 text-primary" />
                      </div>
                      <span className="font-medium">{industry.title}</span>
                      <ArrowRight className="h-3 w-3 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-card border rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Why TDA Enterprise?</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>Experienced, credentialed safety professionals</li>
                <li>Bilingual training and documentation support</li>
                <li>Free initial safety assessments for qualified businesses</li>
                <li>New customer discounts on training packages</li>
                <li>Programs aligned with OSHA and industry best practices</li>
              </ul>
              <div className="flex flex-wrap gap-3 mt-6">
                <Button asChild>
                  <Link href="/business/free-assessment">Schedule a Free Assessment</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/business/industries">
                    View All Industries
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="bg-primary text-primary-foreground rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to strengthen your safety program?</h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
              Get a free safety assessment and discover how TDA Enterprise can reduce your risk,
              improve compliance, and protect your workforce.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/business/contact">
                  <Phone className="mr-2 h-4 w-4" />
                  Contact Us
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground" asChild>
                <Link href="/business/training">View Training Programs</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

