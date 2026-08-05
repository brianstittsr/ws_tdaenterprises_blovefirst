import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Award, Clock, Users } from "lucide-react";

export const metadata = {
  title: "Training Programs | TDA Enterprises",
  description:
    "OSHA 10/30-Hour, First Aid/CPR/AED, Aerial Work Platform, Bloodborne Pathogens, and custom safety training from TDA Enterprises.",
};

const courses = [
  {
    title: "OSHA 10-Hour Construction",
    duration: "10 hours",
    audience: "Entry-level construction workers",
    description:
      "Foundation-level safety training covering common construction hazards, worker rights, and employer responsibilities.",
  },
  {
    title: "OSHA 30-Hour Construction",
    duration: "30 hours",
    audience: "Supervisors and managers",
    description:
      "Comprehensive construction safety outreach training with in-depth coverage of OSHA standards and hazard mitigation.",
  },
  {
    title: "OSHA 10-Hour General Industry",
    duration: "10 hours",
    audience: "General industry workers",
    description:
      "Safety essentials for manufacturing, warehousing, healthcare, and other general industry settings.",
  },
  {
    title: "First Aid / CPR / AED",
    duration: "Varies",
    audience: "All employees",
    description:
      "Life-saving skills training tailored to workplace emergencies, including CPR and automated external defibrillator use.",
  },
  {
    title: "Aerial Work Platform",
    duration: "Half-day to full-day",
    audience: "Equipment operators",
    description:
      "Safe operation, inspection, and hazard awareness for scissor lifts, boom lifts, and related equipment.",
  },
  {
    title: "Bloodborne Pathogens",
    duration: "1-2 hours",
    audience: "Workers with exposure risk",
    description:
      "OSHA-compliant training on exposure control, PPE, and response procedures for bloodborne pathogens.",
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
            <Card key={course.title} className="h-full flex flex-col">
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
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {course.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    {course.audience}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
