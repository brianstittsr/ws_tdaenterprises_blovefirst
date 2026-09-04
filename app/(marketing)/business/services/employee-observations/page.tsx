import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ServiceHero } from "@/components/marketing/service-hero";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, Eye, AlertTriangle, MessageSquare, FileCheck } from "lucide-react";

export const metadata = {
  title: "Employee Observations | TDA Enterprise",
  description:
    "On-the-floor employee safety observations from TDA Enterprise — catching at-risk behaviors before they become incidents.",
};

const observationAreas = [
  "PPE usage and compliance",
  "Body mechanics and ergonomics",
  "Machine guarding and lockout/tagout adherence",
  "Housekeeping and walking-working surfaces",
  "Hazardous materials handling",
  "Safe work practices under real production conditions",
];

const process = [
  { icon: Eye, title: "Direct Observation", description: "Our team observes employees performing real tasks to identify at-risk behaviors as they happen." },
  { icon: MessageSquare, title: "Coaching in the Moment", description: "We provide immediate, constructive feedback that reinforces safe practices without disrupting workflow." },
  { icon: AlertTriangle, title: "Risk Identification", description: "Patterns and recurring hazards are documented and prioritized for corrective action." },
  { icon: FileCheck, title: "Trend Reporting", description: "Aggregated observation data helps leadership target training and process improvements." },
];

export default function EmployeeObservationsPage() {
  return (
    <>
      <ServiceHero
        title="Employee Observations"
        tagline="Real-time, on-the-floor observations that catch at-risk behavior before it becomes an incident."
        image="https://images.pexels.com/photos/37090943/pexels-photo-37090943.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
        imageAlt="Industrial workers in safety gear walking through a plant"
      />

      <section className="py-16 md:py-24">
        <div className="container max-w-4xl">
          <h2 className="text-2xl font-semibold mb-4">What We Observe</h2>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-12">
            {observationAreas.map((area) => (
              <li key={area}>{area}</li>
            ))}
          </ul>

          <h2 className="text-2xl font-semibold mb-6">Our Process</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {process.map((step) => (
              <Card key={step.title} className="h-full">
                <CardHeader>
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <step.icon className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild>
              <Link href="/business/contact">
                Contact Us
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

