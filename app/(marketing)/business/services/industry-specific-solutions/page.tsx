import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ServiceHero } from "@/components/marketing/service-hero";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, Factory, HardHat, Warehouse, Truck, HeartPulse } from "lucide-react";

export const metadata = {
  title: "Industry-Specific Solutions | TDA Enterprise",
  description:
    "Tailored EHS safety support for manufacturing, construction, warehousing, logistics, and healthcare facilities from TDA Enterprise.",
};

const industries = [
  {
    icon: Factory,
    title: "Manufacturing",
    description: "Machine guarding, lockout/tagout programs, chemical handling, and production line safety assessments designed for high-throughput facilities.",
    services: ["Machine guarding assessments", "LOTO program development", "Chemical safety and SDS management", "Production line ergonomics"],
  },
  {
    icon: HardHat,
    title: "Construction",
    description: "Site-specific safety plans, fall protection programs, excavation safety, and OSHA-compliant training for contractors and subcontractors.",
    services: ["Site safety plans", "Fall protection programs", "Excavation and trenching safety", "Daily safety briefings and inspections"],
  },
  {
    icon: Warehouse,
    title: "Warehousing",
    description: "Forklift safety, rack inspections, material handling ergonomics, and warehouse-specific hazard assessments for distribution centers.",
    services: ["Forklift operator training and certification", "Storage rack inspections", "Material handling ergonomics", "Pedestrian-vehicle separation plans"],
  },
  {
    icon: Truck,
    title: "Logistics",
    description: "Fleet safety programs, loading dock hazard assessments, driver safety training, and DOT compliance support for transportation operations.",
    services: ["Fleet safety programs", "Loading dock safety assessments", "Driver safety training", "DOT compliance support"],
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    description: "Bloodborne pathogen compliance, patient handling ergonomics, workplace violence prevention, and healthcare-specific OSHA training.",
    services: ["Bloodborne pathogen programs", "Patient handling ergonomics", "Workplace violence prevention", "Healthcare OSHA training"],
  },
];

export default function IndustrySpecificSolutionsPage() {
  return (
    <>
      <ServiceHero
        title="Industry-Specific Solutions"
        tagline="Tailored safety support for manufacturing, construction, warehousing, logistics, and healthcare facilities."
        image="https://images.pexels.com/photos/8973132/pexels-photo-8973132.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
        imageAlt="Worker wearing safety gear operating machinery in a manufacturing factory"
      />

      <section className="py-16 md:py-24">
        <div className="container max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Safety Built for Your Industry</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Every industry faces unique hazards and regulatory requirements. TDA Enterprise
              delivers customized EHS solutions that address the specific risks of your operations
              — not generic checklists.
            </p>
          </div>

          <div className="space-y-8">
            {industries.map((industry) => (
              <Card key={industry.title} className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <industry.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{industry.title}</CardTitle>
                      <p className="text-sm text-muted-foreground mt-1">{industry.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-16">
                    {industry.services.map((service) => (
                      <div key={service} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-primary mt-0.5">•</span>
                        <span>{service}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-12">
            <Button asChild>
              <Link href="/business/contact">
                Discuss Your Industry Needs
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/business/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

