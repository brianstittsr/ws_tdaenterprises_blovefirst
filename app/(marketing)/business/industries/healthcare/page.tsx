import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ServiceHero } from "@/components/marketing/service-hero";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, HeartPulse, Shield, Syringe, Repeat, FileText, AlertTriangle } from "lucide-react";

export const metadata = {
  title: "Healthcare Facilities Safety | TDA Enterprises",
  description:
    "EHS services for healthcare: bloodborne pathogens, ergonomics, emergency action plans, and safety compliance for clinics and hospitals.",
};

const challenges = [
  { icon: Syringe, title: "Bloodborne Pathogens", description: "Exposure control plans, sharps safety, and OSHA-mandated annual bloodborne pathogens training." },
  { icon: Repeat, title: "Patient Handling Ergonomics", description: "Safe patient handling programs to prevent musculoskeletal injuries among nursing and care staff." },
  { icon: AlertTriangle, title: "Workplace Violence Prevention", description: "Risk assessments, de-escalation training, and workplace violence prevention program development." },
  { icon: Shield, title: "PPE & Infection Control", description: "PPE selection, respiratory protection programs, and infection control safety compliance." },
  { icon: FileText, title: "Emergency Action Plans", description: "Emergency preparedness planning for fires, medical emergencies, and facility evacuations." },
  { icon: HeartPulse, title: "Chemical & Hazardous Drug Safety", description: "Hazcom programs for disinfectants, sterilants, and hazardous drugs including chemotherapy agents." },
];

const services = [
  "Bloodborne pathogens exposure control plans and training",
  "Safe patient handling and ergonomics assessments",
  "Workplace violence prevention program development",
  "Respiratory protection program development and fit testing",
  "Hazard communication for healthcare chemicals",
  "Emergency action and fire prevention plans",
  "OSHA compliance audits for healthcare facilities",
  "PPE program development and training",
  "Incident investigation and corrective action",
  "Safety committee development and support",
];

export default function HealthcarePage() {
  return (
    <>
      <ServiceHero
        title="Healthcare Facilities Safety"
        tagline="Bloodborne pathogens, ergonomics, emergency action plans, and safety compliance support for clinics, hospitals, and long-term care."
        image="https://images.pexels.com/photos/8460400/pexels-photo-8460400.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
        imageAlt="Healthcare worker in full PPE preparing for work"
      />

      <section className="py-16 md:py-24">
        <div className="container max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Safety Challenges in Healthcare</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Healthcare workers face unique hazards from infectious materials, patient handling,
              and workplace violence. TDA Enterprises helps clinics, hospitals, and long-term
              care facilities maintain compliance while protecting their workforce.
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

          <h2 className="text-2xl font-semibold mb-4">Our Healthcare Safety Services</h2>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-12">
            {services.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild>
              <Link href="/business/contact">
                Discuss Your Healthcare Safety Needs
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
