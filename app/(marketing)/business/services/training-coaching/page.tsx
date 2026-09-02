import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ServiceHero } from "@/components/marketing/service-hero";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, GraduationCap, Users, Repeat, Award } from "lucide-react";

export const metadata = {
  title: "Training & Coaching | TDA Enterprises",
  description:
    "Hands-on safety training and coaching from TDA Enterprises — building safety habits that last through practical exams and proficiency evaluations.",
};

const trainingFormats = [
  "Classroom-style instruction with practical exams",
  "One-on-one and small group coaching",
  "Ergonomic programs that work in real production environments",
  "Job-specific skill and proficiency evaluations",
  "Refresher training and continuous coaching cycles",
  "Bilingual training available upon request",
];

const benefits = [
  { icon: GraduationCap, title: "Practical Exams", description: "Employees demonstrate competency through hands-on practical exams, not just classroom time." },
  { icon: Users, title: "Personal Experiences", description: "Coaching is tailored to each employee's role, experience level, and learning style." },
  { icon: Repeat, title: "Program Efficiency", description: "Structured coaching cycles reinforce learning and drive lasting behavior change." },
  { icon: Award, title: "Proficiency Evaluations", description: "Ongoing evaluations confirm skills are retained and applied correctly on the job." },
];

export default function TrainingCoachingPage() {
  return (
    <>
      <ServiceHero
        title="Training & Coaching"
        tagline="Teach ~ Develop ~ Achieve: practical exams, proficiency evaluations, and hands-on coaching that builds lasting safety habits."
        image="/images/extracted/training-coaching.jpg"
        imageAlt="Employees in a hands-on safety training and coaching session"
      />

      <section className="py-16 md:py-24">
        <div className="container max-w-4xl">
          <h2 className="text-2xl font-semibold mb-4">Training Formats</h2>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-12">
            {trainingFormats.map((format) => (
              <li key={format}>{format}</li>
            ))}
          </ul>

          <h2 className="text-2xl font-semibold mb-6">Program Excellence</h2>
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
                Schedule Coaching
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
