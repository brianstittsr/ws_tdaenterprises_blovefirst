import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ServiceHero } from "@/components/marketing/service-hero";
import { ArrowRight, Clock, Users, Award, BookOpen } from "lucide-react";

export const metadata = {
  title: "First Aid / CPR / AED Training | TDA Enterprises",
  description:
    "Life-saving first aid, CPR, and AED training tailored to workplace emergencies from TDA Enterprises.",
};

const topics = [
  "Recognizing and responding to medical emergencies",
  "CPR for adults, children, and infants",
  "Using an automated external defibrillator (AED)",
  "Choking relief (Heimlich maneuver)",
  "Bleeding control and wound care",
  "Burn treatment and chemical exposure response",
  "Shock recognition and treatment",
  "Fractures, sprains, and immobilization",
  "Heat and cold-related emergencies",
  "First aid kit contents and maintenance",
  "OSHA first aid requirements and recordkeeping",
  "Scene safety and bloodborne pathogen precautions",
];

const details = [
  { icon: Clock, label: "Duration", value: "4-8 hours (varies by scope)" },
  { icon: Users, label: "Audience", value: "All employees, designated responders" },
  { icon: Award, label: "Certification", value: "2-year First Aid/CPR/AED certificate" },
  { icon: BookOpen, label: "Format", value: "Hands-on classroom training" },
];

export default function FirstAidCpraedPage() {
  return (
    <>
      <ServiceHero
        title="First Aid / CPR / AED"
        tagline="Life-saving skills training tailored to workplace emergencies, including CPR and automated external defibrillator use."
        image="https://images.pexels.com/photos/37277086/pexels-photo-37277086.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
        imageAlt="CPR training session with a dummy in a classroom environment"
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
            This hands-on course equips employees with the skills to respond confidently to
            workplace medical emergencies. Training includes CPR techniques, AED operation,
            and first aid for common workplace injuries.
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
