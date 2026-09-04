import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Clock, Users, ArrowRight, GraduationCap } from "lucide-react";

export const metadata = {
  title: "Training Programs | TDA Enterprise",
  description:
    "OSHA 10/30-Hour, First Aid/CPR/AED, Aerial Work Platform, Bloodborne Pathogens, and custom safety training from TDA Enterprise.",
};

const courses = [
  {
    title: "OSHA 10-Hour Construction",
    duration: "10 hours",
    audience: "Entry-level construction workers",
    description:
      "Foundation-level safety training covering common construction hazards, worker rights, and employer responsibilities.",
    image:
      "https://images.pexels.com/photos/37635943/pexels-photo-37635943.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop",
    imageAlt: "Construction workers on site wearing safety gear",
    href: "/business/training/osha-10-construction",
  },
  {
    title: "OSHA 30-Hour Construction",
    duration: "30 hours",
    audience: "Supervisors and managers",
    description:
      "Comprehensive construction safety outreach training with in-depth coverage of OSHA standards and hazard mitigation.",
    image:
      "https://images.pexels.com/photos/8961027/pexels-photo-8961027.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop",
    imageAlt: "Two construction workers reviewing plans on site with hard hats",
    href: "/business/training/osha-30-construction",
  },
  {
    title: "OSHA 10-Hour General Industry",
    duration: "10 hours",
    audience: "General industry workers",
    description:
      "Safety essentials for manufacturing, warehousing, healthcare, and other general industry settings.",
    image:
      "https://images.pexels.com/photos/8973132/pexels-photo-8973132.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop",
    imageAlt: "Worker wearing safety gear operating machinery in a manufacturing factory",
    href: "/business/training/osha-10-general-industry",
  },
  {
    title: "First Aid / CPR / AED",
    duration: "Varies",
    audience: "All employees",
    description:
      "Life-saving skills training tailored to workplace emergencies, including CPR and automated external defibrillator use.",
    image:
      "https://images.pexels.com/photos/37277086/pexels-photo-37277086.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop",
    imageAlt: "CPR training session with a dummy in a classroom environment",
    href: "/business/training/first-aid-cpr-aed",
  },
  {
    title: "Aerial Work Platform",
    duration: "Half-day to full-day",
    audience: "Equipment operators",
    description:
      "Safe operation, inspection, and hazard awareness for scissor lifts, boom lifts, and related equipment.",
    image:
      "https://images.pexels.com/photos/16105409/pexels-photo-16105409.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop",
    imageAlt: "Blue aerial lift and forklift trucks at a construction site",
    href: "/business/training/aerial-work-platform",
  },
  {
    title: "Bloodborne Pathogens",
    duration: "1-2 hours",
    audience: "Workers with exposure risk",
    description:
      "OSHA-compliant training on exposure control, PPE, and response procedures for bloodborne pathogens.",
    image:
      "https://images.pexels.com/photos/8460400/pexels-photo-8460400.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop",
    imageAlt: "Healthcare worker in full PPE preparing for work",
    href: "/business/training/bloodborne-pathogens",
  },
];

export default function BusinessTrainingPage() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Safety Training Programs</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Open-enrollment and on-site training options designed to keep your team certified,
            compliant, and safe.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <Card key={course.title} className="h-full flex flex-col overflow-hidden p-0">
              <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                <Image
                  src={course.image}
                  alt={course.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>{course.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <CardDescription className="text-base flex-1 mb-4">
                  {course.description}
                </CardDescription>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {course.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    {course.audience}
                  </span>
                </div>
                <Button variant="link" className="px-0" asChild>
                  <Link href={course.href}>
                    Learn more
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Academy LMS CTA */}
        <div className="mt-12 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 p-8 text-center">
          <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
            <GraduationCap className="h-7 w-7" />
          </div>
          <h2 className="text-2xl font-bold mb-2">Access Online Training Through Our Academy</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            All of our certification courses are available online through the TDA Enterprise Academy.
            Enroll, learn at your own pace, and earn your certificates through our learning management system.
          </p>
          <Button size="lg" asChild>
            <Link href="/academy/courses">
              Browse Academy Courses
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

