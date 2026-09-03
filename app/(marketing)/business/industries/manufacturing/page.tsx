import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ServiceHero } from "@/components/marketing/service-hero";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, Shield, Wrench, FlaskConical, Zap, Repeat, HardHat } from "lucide-react";

export const metadata = {
  title: "Manufacturing Safety | TDA Enterprises",
  description:
    "EHS services for manufacturing: machine guarding, lockout/tagout, hazcom, and comprehensive safety program development.",
};

const challenges = [
  { icon: Wrench, title: "Machine Guarding", description: "Ensuring all machinery has proper guarding, interlocks, and safety devices to prevent amputations and crush injuries." },
  { icon: Zap, title: "Lockout/Tagout (LOTO)", description: "Developing and implementing energy control programs that protect workers during maintenance and servicing." },
  { icon: FlaskConical, title: "Hazard Communication", description: "Chemical safety programs, SDS management, and worker training on hazardous materials handling." },
  { icon: Repeat, title: "Ergonomics & Repetitive Motion", description: "Addressing musculoskeletal disorders from repetitive assembly line tasks, lifting, and awkward postures." },
  { icon: Shield, title: "PPE Compliance", description: "Selecting and enforcing proper personal protective equipment for production environments." },
  { icon: HardHat, title: "Contractor Safety", description: "Managing contractor safety during facility upgrades, equipment installations, and maintenance shutdowns." },
];

const services = [
  "Machine guarding risk assessments",
  "LOTO program development and training",
  "Hazard communication and SDS management",
  "Production line ergonomic evaluations",
  "Noise exposure assessments and hearing conservation",
  "Chemical safety and spill response planning",
  "OSHA 10/30-Hour General Industry training",
  "Safety program development and auditing",
  "Forklift and mobile equipment operator training",
  "Incident investigation and root cause analysis",
];

export default function ManufacturingPage() {
  return (
    <>
      <ServiceHero
        title="Manufacturing Safety"
        tagline="Machine guarding, lockout/tagout, hazcom, and comprehensive safety program development for production environments."
        image="https://images.pexels.com/photos/8973132/pexels-photo-8973132.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
        imageAlt="Worker wearing safety gear operating machinery in a manufacturing factory"
      />

      <section className="py-16 md:py-24">
        <div className="container max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Safety Challenges in Manufacturing</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Manufacturing facilities face unique hazards from machinery, chemicals, and
              high-throughput production. TDA Enterprises helps you address these risks with
              practical, compliant safety solutions.
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

          <h2 className="text-2xl font-semibold mb-4">Our Manufacturing Safety Services</h2>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-12">
            {services.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild>
              <Link href="/business/contact">
                Discuss Your Manufacturing Safety Needs
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
