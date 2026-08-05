import Link from "next/link";
import {
  Shield,
  ClipboardCheck,
  HardHat,
  Award,
  TrendingUp,
  Phone,
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
      "TDA Enterprises delivers expert environmental, health, and safety services that reduce risk, maintain compliance, and build a stronger safety culture.",
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
  title: "TDA Enterprises | Professional EHS Services",
  description:
    "TDA Enterprises delivers OSHA training, safety audits, program development, and equipment inspections to reduce risk and keep your workforce safe.",
};

const services = [
  {
    title: "OSHA Training & Certification",
    description: "OSHA 10-Hour, 30-Hour, First Aid/CPR/AED, and specialized safety certifications.",
    icon: Award,
  },
  {
    title: "Safety Audits & Compliance",
    description: "Comprehensive workplace audits that identify hazards and close compliance gaps.",
    icon: ClipboardCheck,
  },
  {
    title: "Equipment Inspection",
    description: "Certified inspections for aerial work platforms, scaffolding, fall protection, and more.",
    icon: HardHat,
  },
  {
    title: "Program Development",
    description: "Turnkey EHS programs tailored to your industry, workforce, and regulatory requirements.",
    icon: Shield,
  },
];

const industries = [
  "Manufacturing",
  "Construction",
  "Warehousing & Logistics",
  "Healthcare Facilities",
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
              <Card key={service.title} className="h-full">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
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
                  <li key={industry} className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <TrendingUp className="h-4 w-4 text-primary" />
                    </div>
                    <span className="font-medium">{industry}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-card border rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Why TDA Enterprises?</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>Experienced, credentialed safety professionals</li>
                <li>Bilingual training and documentation support</li>
                <li>Free initial safety assessments for qualified businesses</li>
                <li>New customer discounts on training packages</li>
                <li>Programs aligned with OSHA and industry best practices</li>
              </ul>
              <Button className="mt-6" asChild>
                <Link href="/business/free-assessment">Schedule a Free Assessment</Link>
              </Button>
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
              Get a free safety assessment and discover how TDA Enterprises can reduce your risk,
              improve compliance, and protect your workforce.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/business/contact">
                  <Phone className="mr-2 h-4 w-4" />
                  Contact Us
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
                <Link href="/business/training">View Training Programs</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
