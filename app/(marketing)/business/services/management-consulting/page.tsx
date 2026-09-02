import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ServiceHero } from "@/components/marketing/service-hero";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, Users, Target, TrendingUp, ClipboardList } from "lucide-react";

export const metadata = {
  title: "Management & Consulting | TDA Enterprises",
  description:
    "Professional EHS management and consulting services from TDA Enterprises — building safety leadership and program excellence.",
};

const consultingAreas = [
  "Safety leadership development and coaching",
  "EHS management system design and gap analysis",
  "Policy and procedure consulting",
  "Regulatory compliance strategy",
  "Safety culture assessments",
  "Ongoing advisory and retainer support",
];

const excellencePillars = [
  "Personnel Engagement",
  "Personal Experiences",
  "Practical Exams",
  "Proficiency Evaluations",
  "Physical Exercise",
  "Policy Enforcement",
  "Program Efficiency",
];

const benefits = [
  { icon: Users, title: "Engaged Personnel", description: "We work directly with your leadership and frontline teams to build buy-in at every level." },
  { icon: Target, title: "Targeted Strategy", description: "Consulting tailored to your industry, workforce, and specific compliance gaps." },
  { icon: TrendingUp, title: "Measurable Progress", description: "Clear benchmarks and proficiency evaluations track improvement over time." },
  { icon: ClipboardList, title: "Consistent Enforcement", description: "Practical policy enforcement strategies that stick long after our engagement ends." },
];

export default function ManagementConsultingPage() {
  return (
    <>
      <ServiceHero
        title="Management & Consulting"
        tagline="Teach ~ Develop ~ Achieve: professional experience and world-class approach toward cultivating occupational health and safety programs."
        image="/images/extracted/management-consulting.jpg"
        imageAlt="Safety management team consulting session"
      />

      <section className="py-16 md:py-24">
        <div className="container max-w-4xl">
          <h2 className="text-2xl font-semibold mb-4">Consulting Services</h2>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-8">
            {consultingAreas.map((area) => (
              <li key={area}>{area}</li>
            ))}
          </ul>

          <h2 className="text-2xl font-semibold mb-4">Program Excellence</h2>
          <p className="text-muted-foreground mb-4">
            Our approach yields elite performance for general and construction industry clients through:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
            {excellencePillars.map((pillar) => (
              <div key={pillar} className="text-center p-3 rounded-lg border bg-card text-sm font-medium">
                {pillar}
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-semibold mb-6">Why Partner With Us?</h2>
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
                Talk to a Consultant
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
