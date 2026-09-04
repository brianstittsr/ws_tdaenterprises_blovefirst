import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ServiceHero } from "@/components/marketing/service-hero";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, Truck, Package, Repeat, Shield, Warehouse, ClipboardCheck } from "lucide-react";

export const metadata = {
  title: "Warehousing & Logistics Safety | TDA Enterprise",
  description:
    "EHS services for warehousing and logistics: forklift safety, material handling, ergonomics, and warehouse hazard assessments.",
};

const challenges = [
  { icon: Truck, title: "Forklift & Mobile Equipment", description: "Operator training, certification, and pedestrian-vehicle separation plans to prevent struck-by incidents." },
  { icon: Package, title: "Material Handling", description: "Ergonomic assessments for manual lifting, carrying, and stacking tasks that cause musculoskeletal injuries." },
  { icon: Repeat, title: "Repetitive Motion Injuries", description: "Addressing strains from order picking, packing, and sorting through workstation design and job rotation." },
  { icon: Warehouse, title: "Storage & Racking Safety", description: "Rack inspections, load capacity reviews, and storage layout optimization for safe material storage." },
  { icon: Shield, title: "Loading Dock Safety", description: "Dock plate inspection, trailer restraint procedures, and fall protection at loading dock edges." },
  { icon: ClipboardCheck, title: "Hazard Assessments", description: "Comprehensive warehouse hazard assessments covering walking surfaces, lighting, fire safety, and more." },
];

const services = [
  "Forklift operator training and certification",
  "Pedestrian-vehicle traffic separation planning",
  "Storage rack inspections and load capacity reviews",
  "Material handling ergonomic assessments",
  "Loading dock safety evaluations",
  "Warehouse hazard assessments",
  "OSHA 10-Hour General Industry training",
  "PPE program development and enforcement",
  "Emergency action and fire prevention plans",
  "Incident investigation and corrective action",
];

export default function WarehousingLogisticsPage() {
  return (
    <>
      <ServiceHero
        title="Warehousing & Logistics Safety"
        tagline="Forklift and mobile equipment safety, material handling, ergonomics, and warehouse hazard assessments."
        image="https://images.pexels.com/photos/9090940/pexels-photo-9090940.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
        imageAlt="Warehouse worker wearing a safety vest surrounded by stacked goods"
      />

      <section className="py-16 md:py-24">
        <div className="container max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Safety Challenges in Warehousing & Logistics</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Distribution centers and warehouses face significant risks from forklift operations,
              material handling, and repetitive tasks. TDA Enterprise helps you build a safety
              culture that protects workers while maintaining throughput.
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

          <h2 className="text-2xl font-semibold mb-4">Our Warehousing Safety Services</h2>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-12">
            {services.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild>
              <Link href="/business/contact">
                Discuss Your Warehousing Safety Needs
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

