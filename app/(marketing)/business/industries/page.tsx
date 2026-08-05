import { Factory, HardHat, Truck, HeartPulse } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata = {
  title: "Industries Served | TDA Enterprises",
  description:
    "TDA Enterprises serves manufacturing, construction, warehousing & logistics, and healthcare facilities with professional EHS services.",
};

const industries = [
  {
    title: "Manufacturing",
    description:
      "Machine guarding, lockout/tagout, hazardous communication, and comprehensive safety program development for production environments.",
    icon: Factory,
  },
  {
    title: "Construction",
    description:
      "Fall protection, scaffolding inspections, OSHA 10/30 training, and jobsite hazard assessments for general and specialty contractors.",
    icon: HardHat,
  },
  {
    title: "Warehousing & Logistics",
    description:
      "Forklift and mobile equipment safety, material handling, ergonomics, and warehouse hazard assessments.",
    icon: Truck,
  },
  {
    title: "Healthcare Facilities",
    description:
      "Bloodborne pathogens, ergonomics, emergency action plans, and safety compliance support for clinics, hospitals, and long-term care.",
    icon: HeartPulse,
  },
];

export default function IndustriesPage() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Industries We Serve</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We specialize in companies with 50-500 employees, high-hazard operations, and multilingual
            teams that need practical, hands-on safety support.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {industries.map((industry) => (
            <Card key={industry.title} className="h-full">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <industry.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{industry.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{industry.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
