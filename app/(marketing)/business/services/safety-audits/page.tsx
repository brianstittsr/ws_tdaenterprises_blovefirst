import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ServiceHero } from "@/components/marketing/service-hero";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, Search, ClipboardCheck, FileText, RefreshCw } from "lucide-react";

export const metadata = {
  title: "Safety Audits & Compliance | TDA Enterprises",
  description:
    "Comprehensive workplace safety audits and compliance assessments from TDA Enterprises.",
};

const evaluationAreas = [
  "Fall protection and scaffolding",
  "Machine guarding and lockout/tagout",
  "Hazard communication and chemical safety",
  "Fire prevention and emergency action plans",
  "Personal protective equipment (PPE)",
  "Recordkeeping and documentation",
];

const deliverables = [
  "Written findings report with photos",
  "Risk-ranked corrective actions",
  "Regulatory citation references",
  "Follow-up support and re-audit options",
];

const auditSteps = [
  { icon: Search, title: "Discovery", description: "We review your operations, programs, and incident history to understand your risk profile." },
  { icon: ClipboardCheck, title: "On-Site Evaluation", description: "Our auditors inspect work areas, interview employees, and observe practices against OSHA and industry standards." },
  { icon: FileText, title: "Findings Report", description: "You receive a clear, photo-documented report with prioritized corrective actions and regulatory references." },
  { icon: RefreshCw, title: "Continuous Improvement", description: "Optional follow-up audits and implementation support keep your program moving forward." },
];

export default function SafetyAuditsPage() {
  return (
    <>
      <ServiceHero
        title="Safety Audits & Compliance"
        tagline="Identify hazards, close compliance gaps, and build confidence in your safety program."
        image="https://images.pexels.com/photos/1181400/pexels-photo-1181400.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
        imageAlt="Industrial workplace safety audit"
      />

      <section className="py-16 md:py-24">
        <div className="container max-w-4xl">
          <h2 className="text-2xl font-semibold mb-4">What We Evaluate</h2>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-8">
            {evaluationAreas.map((area) => (
              <li key={area}>{area}</li>
            ))}
          </ul>

          <h2 className="text-2xl font-semibold mb-4">Deliverables</h2>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-12">
            {deliverables.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h2 className="text-2xl font-semibold mb-6">Our Audit Process</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {auditSteps.map((step) => (
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
