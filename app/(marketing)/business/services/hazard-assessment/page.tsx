import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ServiceHero } from "@/components/marketing/service-hero";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, Search, AlertTriangle, ShieldCheck, TrendingDown } from "lucide-react";

export const metadata = {
  title: "Hazard Assessment | TDA Enterprises",
  description:
    "Systematic workplace hazard identification with practical controls and ongoing monitoring from TDA Enterprises.",
};

const assessmentTypes = [
  "Job hazard analysis (JHA) for specific tasks and roles",
  "Workplace hazard identification surveys",
  "Chemical and physical hazard evaluations",
  "Ergonomic risk assessments",
  "Noise exposure assessments",
  "Heat stress evaluations",
  "Fall hazard assessments",
  "Machine guarding risk assessments",
];

const processSteps = [
  { step: "1", title: "Identify Hazards", description: "Systematic walkthrough of your facility to identify potential hazards across all work areas, equipment, and processes." },
  { step: "2", title: "Evaluate Risk", description: "Assess the severity and likelihood of each hazard to prioritize which require immediate attention versus long-term monitoring." },
  { step: "3", title: "Recommend Controls", description: "Practical, actionable control measures following the hierarchy of controls — elimination, substitution, engineering, administrative, and PPE." },
  { step: "4", title: "Monitor & Review", description: "Ongoing monitoring recommendations and scheduled re-assessments to ensure controls remain effective as operations evolve." },
];

const benefits = [
  { icon: Search, title: "Proactive Identification", description: "Find hazards before they cause incidents, reducing workplace injuries and associated costs." },
  { icon: AlertTriangle, title: "Prioritized Action", description: "Risk-ranked findings so you know exactly what to address first, second, and third." },
  { icon: ShieldCheck, title: "Compliance Confidence", description: "Documented hazard assessments demonstrate due diligence to OSHA inspectors and auditors." },
  { icon: TrendingDown, title: "Reduced Incidents", description: "Organizations with regular hazard assessments see measurable reductions in workplace incidents." },
];

export default function HazardAssessmentPage() {
  return (
    <>
      <ServiceHero
        title="Hazard Assessment"
        tagline="Systematic identification of workplace hazards with practical controls and ongoing monitoring recommendations."
        image="https://images.pexels.com/photos/36301974/pexels-photo-36301974.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
        imageAlt="Close-up of industrial machinery with warning signs and mechanical components"
      />

      <section className="py-16 md:py-24">
        <div className="container max-w-4xl">
          <h2 className="text-2xl font-semibold mb-4">Types of Assessments</h2>
          <p className="text-muted-foreground mb-6">
            TDA Enterprises conducts a wide range of hazard assessments tailored to your
            industry, operations, and regulatory requirements. Each assessment produces
            documented findings with prioritized recommendations.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-12">
            {assessmentTypes.map((type) => (
              <li key={type}>{type}</li>
            ))}
          </ul>

          <h2 className="text-2xl font-semibold mb-6">Our Assessment Process</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {processSteps.map((item) => (
              <Card key={item.step} className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                      {item.step}
                    </div>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <h2 className="text-2xl font-semibold mb-6">Why Assess With TDA?</h2>
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
                Schedule a Hazard Assessment
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
