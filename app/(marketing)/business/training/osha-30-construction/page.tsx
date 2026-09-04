import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ServiceHero } from "@/components/marketing/service-hero";
import { ArrowRight, Clock, Users, Award, BookOpen } from "lucide-react";

export const metadata = {
  title: "OSHA 30-Hour Construction | TDA Enterprise",
  description:
    "OSHA 30-Hour Construction outreach training for supervisors and managers with in-depth OSHA standards and hazard mitigation.",
};

const topics = [
  "Introduction to OSHA and the OSH Act",
  "Managing safety on the jobsite",
  "OSHA inspection procedures and employer rights",
  "Fall protection systems and planning",
  "Scaffolding design, inspection, and use",
  "Excavation and trenching safety",
  "Electrical safety and lockout/tagout",
  "Cranes, derricks, and rigging",
  "Motor vehicles, equipment, and heavy machinery",
  "Materials handling and storage",
  "PPE selection and respiratory protection",
  "Health hazards: silica, asbestos, lead, and noise",
  "Fire prevention and emergency action plans",
  "Stairways and ladders",
  "Welding and cutting safety",
  "Concrete and masonry construction",
  "Steel erection awareness",
  "Demolition safety",
  "Confined space entry",
  "Recordkeeping (OSHA 300 logs)",
];

const details = [
  { icon: Clock, label: "Duration", value: "30 hours (4 days)" },
  { icon: Users, label: "Audience", value: "Supervisors, managers, foremen" },
  { icon: Award, label: "Certification", value: "OSHA 30-Hour completion card" },
  { icon: BookOpen, label: "Format", value: "Classroom or on-site" },
];

export default function OSHA30ConstructionPage() {
  return (
    <>
      <ServiceHero
        title="OSHA 30-Hour Construction"
        tagline="Comprehensive construction safety outreach training with in-depth coverage of OSHA standards and hazard mitigation."
        image="https://images.pexels.com/photos/8961027/pexels-photo-8961027.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
        imageAlt="Two construction workers reviewing plans on site with hard hats"
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
            The OSHA 30-Hour Construction course is designed for supervisors, managers, and
            safety professionals responsible for jobsite safety. It provides a deep dive into
            OSHA standards, hazard recognition, and safety management practices.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-12 columns-1 md:columns-2 gap-4">
            {topics.map((topic) => (
              <li key={topic} className="break-inside-avoid">{topic}</li>
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

