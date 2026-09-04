import Image from "next/image";
import Link from "next/link";
import { Factory, HardHat, Truck, HeartPulse, ArrowRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Industries Served | TDA Enterprise",
  description:
    "TDA Enterprise serves manufacturing, construction, warehousing & logistics, and healthcare facilities with professional EHS services.",
};

const industries = [
  {
    title: "Manufacturing",
    description:
      "Machine guarding, lockout/tagout, hazardous communication, and comprehensive safety program development for production environments.",
    icon: Factory,
    image:
      "https://images.pexels.com/photos/8973132/pexels-photo-8973132.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop",
    imageAlt: "Worker wearing safety gear operating machinery in a manufacturing factory",
    href: "/business/industries/manufacturing",
  },
  {
    title: "Construction",
    description:
      "Fall protection, scaffolding inspections, OSHA 10/30 training, and jobsite hazard assessments for general and specialty contractors.",
    icon: HardHat,
    image:
      "https://images.pexels.com/photos/37635943/pexels-photo-37635943.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop",
    imageAlt: "Construction workers on site wearing safety gear",
    href: "/business/industries/construction",
  },
  {
    title: "Warehousing & Logistics",
    description:
      "Forklift and mobile equipment safety, material handling, ergonomics, and warehouse hazard assessments.",
    icon: Truck,
    image:
      "https://images.pexels.com/photos/9090940/pexels-photo-9090940.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop",
    imageAlt: "Warehouse worker wearing a safety vest surrounded by stacked goods",
    href: "/business/industries/warehousing-logistics",
  },
  {
    title: "Healthcare Facilities",
    description:
      "Bloodborne pathogens, ergonomics, emergency action plans, and safety compliance support for clinics, hospitals, and long-term care.",
    icon: HeartPulse,
    image:
      "https://images.pexels.com/photos/8460400/pexels-photo-8460400.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop",
    imageAlt: "Healthcare worker in full PPE preparing for work",
    href: "/business/industries/healthcare",
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
            <Card key={industry.title} className="h-full flex flex-col overflow-hidden p-0">
              <div className="relative h-56 w-full overflow-hidden rounded-t-lg">
                <Image
                  src={industry.image}
                  alt={industry.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <industry.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{industry.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <p className="text-muted-foreground flex-1 mb-4">{industry.description}</p>
                <Button variant="link" className="px-0" asChild>
                  <Link href={industry.href}>
                    Learn more
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

