import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ServiceHero } from "@/components/marketing/service-hero";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, ClipboardCheck, Wrench, Shield, FileCheck } from "lucide-react";

export const metadata = {
  title: "Equipment Inspection | TDA Enterprises",
  description:
    "Certified equipment inspections for aerial work platforms, scaffolding, fall protection, and more from TDA Enterprises.",
};

const inspectionServices = [
  "Aerial work platforms and boom lifts",
  "Scaffolding systems",
  "Fall protection equipment",
  "Hoists, carts, and material handling equipment",
  "Ladders and access equipment",
  "Mobile equipment and forklifts",
];

const documentationItems = [
  "Detailed inspection reports",
  "Deficiency findings and corrective actions",
  "Compliance certification records",
  "Scheduled re-inspection reminders",
];

const benefits = [
  { icon: ClipboardCheck, title: "Pre-Use Verification", description: "Catch defects and compliance issues before equipment goes into service." },
  { icon: Wrench, title: "Corrective Guidance", description: "Get clear action items and priorities for repairs or replacements." },
  { icon: Shield, title: "Incident Prevention", description: "Reduce risk of equipment-related injuries and costly downtime." },
  { icon: FileCheck, title: "Audit-Ready Records", description: "Maintain documented proof of compliance for OSHA and internal reviews." },
];

export default function EquipmentInspectionPage() {
  return (
    <>
      <ServiceHero
        title="Equipment Inspection"
        tagline="Certified inspections that verify compliance, identify defects, and keep your jobsite safe."
        image="https://images.pexels.com/photos/9242919/pexels-photo-9242919.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
        imageAlt="Steel machine equipment beside safety glasses on a metal surface"
      />

      <section className="py-16 md:py-24">
        <div className="container max-w-4xl">
          <h2 className="text-2xl font-semibold mb-4">Inspection Services</h2>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-8">
            {inspectionServices.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>

          <h2 className="text-2xl font-semibold mb-4">Documentation</h2>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-12">
            {documentationItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h2 className="text-2xl font-semibold mb-6">Why Inspect With TDA?</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {benefits.map((benefit) => (
              <Card key={benefit.title} className="h-full">
                <CardHeader>
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <benefit.icon className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild>
              <Link href="/business/contact">
                Schedule an Inspection
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
