import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ServiceHero } from "@/components/marketing/service-hero";
import { ArrowRight, Clock, Users, Award, BookOpen } from "lucide-react";

export const metadata = {
  title: "OSHA 10-Hour General Industry | TDA Enterprises",
  description:
    "OSHA 10-Hour General Industry safety training for manufacturing, warehousing, healthcare, and other general industry workers.",
};

const topics = [
  "Introduction to OSHA and worker rights",
  "Walking and working surfaces",
  "Exit routes and emergency action plans",
  "Electrical safety",
  "Personal protective equipment (PPE)",
  "Hazard communication and chemical safety",
  "Materials handling and storage",
  "Machine guarding",
  "Introduction to industrial hygiene",
  "Bloodborne pathogens awareness",
  "Ergonomics",
  "Fall protection awareness",
];

const details = [
  { icon: Clock, label: "Duration", value: "10 hours (1-2 days)" },
  { icon: Users, label: "Audience", value: "General industry workers" },
  { icon: Award, label: "Certification", value: "OSHA 10-Hour completion card" },
  { icon: BookOpen, label: "Format", value: "Classroom or on-site" },
];

export default function OSHA10GeneralIndustryPage() {
  return (
    <>
      <ServiceHero
        title="OSHA 10-Hour General Industry"
        tagline="Safety essentials for manufacturing, warehousing, healthcare, and other general industry settings."
        image="https://images.pexels.com/photos/8973132/pexels-photo-8973132.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
        imageAlt="Worker wearing safety gear operating machinery in a manufacturing factory"
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
            The OSHA 10-Hour General Industry course covers the fundamental safety hazards
            encountered in manufacturing, warehousing, healthcare, and other non-construction
            settings. It fulfills OSHA outreach training requirements for general industry workers.
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
