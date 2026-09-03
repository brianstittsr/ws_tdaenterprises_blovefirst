import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ServiceHero } from "@/components/marketing/service-hero";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, Shield, TriangleAlert, Building2, Zap, FileText, HardHat } from "lucide-react";

export const metadata = {
  title: "Construction Safety | TDA Enterprises",
  description:
    "EHS services for construction: fall protection, scaffolding inspections, OSHA 10/30 training, and jobsite hazard assessments.",
};

const challenges = [
  { icon: TriangleAlert, title: "Fall Protection", description: "Falls are the leading cause of construction fatalities. We develop fall protection plans, inspect systems, and train workers." },
  { icon: Building2, title: "Scaffolding Safety", description: "Scaffolding design review, inspections, and user training to prevent collapses, falls, and struck-by incidents." },
  { icon: Zap, title: "Electrical Safety", description: "Electrical hazard assessments, lockout/tagout for temporary power, and arc flash awareness training." },
  { icon: HardHat, title: "Struck-by & Caught-in/between", description: "Equipment and vehicle safety programs, traffic control plans, and trenching/excavation safety." },
  { icon: FileText, title: "OSHA Compliance", description: "Jobsite compliance audits, citation response, and OSHA 10/30-Hour training for workers and supervisors." },
  { icon: Shield, title: "Site Safety Plans", description: "Site-specific safety plans tailored to project scope, phases, and contractor requirements." },
];

const services = [
  "Site-specific safety plan development",
  "Fall protection program development and training",
  "Scaffolding inspections and user training",
  "OSHA 10-Hour and 30-Hour Construction training",
  "Excavation and trenching safety assessments",
  "Jobsite compliance audits and inspections",
  "Daily safety briefings and toolbox talks",
  "Equipment operator training and certification",
  "Incident investigation and root cause analysis",
  "Contractor safety management and coordination",
];

export default function ConstructionPage() {
  return (
    <>
      <ServiceHero
        title="Construction Safety"
        tagline="Fall protection, scaffolding inspections, OSHA 10/30 training, and jobsite hazard assessments for general and specialty contractors."
        image="https://images.pexels.com/photos/37635943/pexels-photo-37635943.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
        imageAlt="Construction workers on site wearing safety gear"
      />

      <section className="py-16 md:py-24">
        <div className="container max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Safety Challenges in Construction</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Construction sites are dynamic, high-hazard environments. TDA Enterprises helps
              contractors manage OSHA's "Fatal Four" — falls, struck-by, caught-in/between, and
              electrocution — plus comprehensive jobsite safety compliance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {challenges.map((challenge) => (
              <Card key={challenge.title} className="h-full">
                <CardHeader>
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <challenge.icon className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{challenge.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{challenge.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <h2 className="text-2xl font-semibold mb-4">Our Construction Safety Services</h2>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-12">
            {services.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild>
              <Link href="/business/contact">
                Discuss Your Construction Safety Needs
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/business/industries">View All Industries</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
