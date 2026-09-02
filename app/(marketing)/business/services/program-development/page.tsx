import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ServiceHero } from "@/components/marketing/service-hero";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, ClipboardList, FileText, GraduationCap, RefreshCw } from "lucide-react";

export const metadata = {
  title: "EHS Program Development | TDA Enterprises",
  description:
    "Turnkey environmental, health, and safety program development from TDA Enterprises.",
};

const programs = [
  "Hazard communication and chemical safety",
  "Fall protection and scaffolding safety",
  "Lockout/tagout (LOTO)",
  "Machine guarding and equipment safety",
  "Emergency action and fire prevention plans",
  "Injury and illness prevention programs",
  "Respiratory protection and PPE programs",
];

const processSteps = [
  { icon: ClipboardList, title: "Assessment", description: "We review your operation, hazards, and existing programs to identify gaps and priorities." },
  { icon: FileText, title: "Policy & Procedure Development", description: "We create clear, OSHA-aligned written plans tailored to your workflows and facility." },
  { icon: GraduationCap, title: "Training Rollout", description: "We deliver targeted employee training and provide documentation to prove compliance." },
  { icon: RefreshCw, title: "Implementation Support", description: "We help put the program into practice with audits, coaching, and continuous improvement." },
];

export default function ProgramDevelopmentPage() {
  return (
    <>
      <ServiceHero
        title="Turnkey EHS Program Development"
        tagline="Practical, OSHA-aligned safety programs built for your operation, workforce, and industry."
        image="/images/extracted/program-development.jpg"
        imageAlt="EHS team developing safety program documentation"
      />

      <section className="py-16 md:py-24">
        <div className="container max-w-4xl">
          <h2 className="text-2xl font-semibold mb-4">Programs We Develop</h2>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-8">
            {programs.map((program) => (
              <li key={program}>{program}</li>
            ))}
          </ul>

          <h2 className="text-2xl font-semibold mb-6">Our Process</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {processSteps.map((step) => (
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
              <Link href="/business/free-assessment">
                Request a Free Assessment
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
