import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ServiceHero } from "@/components/marketing/service-hero";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle, ArrowRight, Shield, Users, Calendar } from "lucide-react";

export const metadata = {
  title: "OSHA Training & Certification | TDA Enterprises",
  description:
    "OSHA 10/30-Hour, First Aid/CPR/AED, Bloodborne Pathogens, and Aerial Work Platform training from TDA Enterprises.",
};

const courses = [
  "OSHA 10-Hour Construction",
  "OSHA 30-Hour Construction",
  "OSHA 10-Hour General Industry",
  "OSHA 30-Hour General Industry",
  "First Aid / CPR / AED",
  "Bloodborne Pathogens",
  "Aerial Work Platform",
];

const deliveryOptions = [
  "Open-enrollment public classes",
  "Private on-site training at your facility",
  "Weekday, weekend, and evening scheduling",
  "Group discounts for 10+ employees",
  "English and Spanish instruction upon request",
];

const benefits = [
  { icon: Shield, title: "Compliance Confidence", description: "Meet OSHA training requirements with documented, instructor-led instruction." },
  { icon: Users, title: "Workforce-Ready Teams", description: "Give employees practical skills they can apply immediately on the jobsite." },
  { icon: Calendar, title: "Flexible Scheduling", description: "Choose dates and formats that fit your operation without shutting down production." },
];

export default function OSHATrainingPage() {
  return (
    <>
      <ServiceHero
        title="OSHA Training & Certification"
        tagline="Bilingual, hands-on instruction for construction, general industry, and specialized equipment operations."
        image="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
        imageAlt="OSHA safety training classroom"
      />

      <section className="py-16 md:py-24">
        <div className="container max-w-4xl">
          <h2 className="text-2xl font-semibold mb-4">Available Courses</h2>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-8">
            {courses.map((course) => (
              <li key={course}>{course}</li>
            ))}
          </ul>

          <h2 className="text-2xl font-semibold mb-4">Delivery Options</h2>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-12">
            {deliveryOptions.map((option) => (
              <li key={option}>{option}</li>
            ))}
          </ul>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
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
                Schedule Training
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
