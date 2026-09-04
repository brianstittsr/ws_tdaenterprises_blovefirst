import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ServiceHero } from "@/components/marketing/service-hero";
import { ArrowRight, Clock, Users, Award, BookOpen } from "lucide-react";

export const metadata = {
  title: "Aerial Work Platform Training | TDA Enterprise",
  description:
    "Safe operation, inspection, and hazard awareness training for scissor lifts, boom lifts, and aerial work platforms.",
};

const topics = [
  "Types of aerial work platforms (scissor lifts, boom lifts, articulating lifts)",
  "OSHA and ANSI standards for aerial lifts",
  "Pre-operational inspection and walkaround",
  "Site hazard assessment before operation",
  "Fall protection requirements and harness use",
  "Safe operating procedures and load limits",
  "Platform capacity and stability principles",
  "Traveling and positioning the lift",
  "Working near power lines and electrical hazards",
  "Emergency lowering and rescue procedures",
  "Fueling and battery charging safety",
  "Hands-on practical evaluation",
];

const details = [
  { icon: Clock, label: "Duration", value: "Half-day to full-day" },
  { icon: Users, label: "Audience", value: "Equipment operators" },
  { icon: Award, label: "Certification", value: "Operator certification card" },
  { icon: BookOpen, label: "Format", value: "Classroom + hands-on evaluation" },
];

export default function AerialWorkPlatformPage() {
  return (
    <>
      <ServiceHero
        title="Aerial Work Platform"
        tagline="Safe operation, inspection, and hazard awareness for scissor lifts, boom lifts, and related equipment."
        image="https://images.pexels.com/photos/16105409/pexels-photo-16105409.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
        imageAlt="Blue aerial lift and forklift trucks at a construction site"
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
            This course trains operators on the safe use of aerial work platforms including
            scissor lifts and boom lifts. It combines classroom instruction with hands-on
            practical evaluation to ensure competency.
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

