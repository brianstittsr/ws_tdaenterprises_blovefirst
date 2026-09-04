import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ServiceHero } from "@/components/marketing/service-hero";
import { ArrowRight, Clock, Users, Award, BookOpen } from "lucide-react";

export const metadata = {
  title: "Bloodborne Pathogens Training | TDA Enterprise",
  description:
    "OSHA-compliant bloodborne pathogens training on exposure control, PPE, and response procedures.",
};

const topics = [
  "OSHA Bloodborne Pathogens Standard (29 CFR 1910.1030)",
  "Types of bloodborne pathogens (HIV, HBV, HCV)",
  "Exposure control plan requirements",
  "Methods of transmission and risk assessment",
  "Engineering controls and work practices",
  "Personal protective equipment (PPE) selection and use",
  "Proper decontamination and cleanup procedures",
  "Sharps disposal and safety devices",
  "Post-exposure evaluation and follow-up",
  "Hepatitis B vaccination program",
  "Recordkeeping and training requirements",
  "Emergency response procedures",
];

const details = [
  { icon: Clock, label: "Duration", value: "1-2 hours" },
  { icon: Users, label: "Audience", value: "Workers with exposure risk" },
  { icon: Award, label: "Certification", value: "Annual training certificate" },
  { icon: BookOpen, label: "Format", value: "Classroom or online" },
];

export default function BloodbornePathogensPage() {
  return (
    <>
      <ServiceHero
        title="Bloodborne Pathogens"
        tagline="OSHA-compliant training on exposure control, PPE, and response procedures for bloodborne pathogens."
        image="https://images.pexels.com/photos/8460400/pexels-photo-8460400.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
        imageAlt="Healthcare worker in full PPE preparing for work"
      />

      <section className="py-16 md:py-24">
        <div className="container max-w-4xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {details.map((detail) => (
              <div key={detail.label} className="rounded-xl border bg-card p-4 text-center">
                <detail.icon className="h-6 w-6 text-primary mx-auto mb-2" />
                <p className="text-xs text-muted-foreground mb-1">{detail.label}</p>
                <p className="text-sm font-semibold">{detail.value}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-semibold mb-4">Course Topics</h2>
          <p className="text-muted-foreground mb-6">
            This OSHA-compliant course covers the Bloodborne Pathogens Standard (29 CFR 1910.1030)
            and is required annually for employees with reasonably anticipated occupational
            exposure to blood or other potentially infectious materials.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-12">
            {topics.map((topic) => (
              <li key={topic}>{topic}</li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild>
              <Link href="/business/contact">
                Schedule This Course
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/business/training">View All Training Programs</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

