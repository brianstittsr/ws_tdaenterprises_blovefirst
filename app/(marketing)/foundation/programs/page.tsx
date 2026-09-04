import Link from "next/link";
import { Users, Award, HandHelping, Heart, Shield, Shirt, ShieldCheck, ArrowRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Programs | BLove First",
  description:
    "BLove First programs include youth enrichment, occupational empowerment, supportive services, and environmental health & safety outreach.",
};

const programs = [
  {
    title: "Youth Enrichment",
    description:
      "Programs that foster interpersonal and character development, athletic enrichment, education, life skills, team building, and ethical decision-making.",
    items: [
      "Arts and Crafts Development",
      "Comfort Cushion Campaign",
      "Life Skills Athletic Enrichment Program",
      "Young Entrepreneurs Program",
      "Transitioning Student Achievement Program (TSAP)",
    ],
    icon: Users,
  },
  {
    title: "Occupational Empowerment",
    description:
      "The Transitioning Citizen Assistance Program (TCAP) helps underrepresented people reintegrate into society as employable citizens through education, training, and workshops.",
    items: [
      "Behavioral and Occupational Safety Program",
      "Vocation Development Assistance Program",
      "Transitioning Citizens Assistance Program (TCAP)",
      "Safety Outreach Training",
    ],
    icon: Award,
  },
  {
    title: "Supportive Services",
    description:
      "Access to housing, furnishing assistance, and information on support services for veterans, seniors, and citizens in transition.",
    items: [
      "Housing and Furnishing Assistance",
      "Refuge To Recovery Program",
      "Employable Citizens Assistance Program",
    ],
    icon: HandHelping,
  },
  {
    title: "Environmental, Health & Safety Outreach",
    description:
      "Turnkey safety program development, OSHA training, and free safety assessments that connect community members and businesses to vital safety resources.",
    items: [
      "OSHA certification classes",
      "Safety audits and assessments",
      "Free safety assessments and new customer discounts",
      "Equipment inspection support",
    ],
    icon: Shield,
  },
  {
    title: "Community Closet",
    description:
      "Free clothing, essentials, and care packages for under-privileged men, women, and children in transition.",
    items: [
      "Free clothing for adults and children",
      "Seasonal coat, shoe, and essentials drives",
      "Care packages at community outreach events",
    ],
    icon: Shirt,
    href: "/foundation/programs/community-closet",
  },
  {
    title: "OSHA Outreach Training",
    description:
      "Free workplace safety certification and occupational empowerment for citizens in transition.",
    items: [
      "OSHA 10-Hour and 30-Hour outreach certification",
      "Workplace safety fundamentals",
      "Occupational empowerment workshops",
    ],
    icon: ShieldCheck,
    href: "/foundation/programs/osha-outreach-training",
  },
];

export default function FoundationProgramsPage() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Programs</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            BLove First focuses on the interpersonal, occupational, and tangible needs of
            under-represented citizens — empowering disadvantaged individuals with the tools to manage
            family relations, become employable, and build ethical community leadership.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {programs.map((program) => (
            <Card key={program.title} className="h-full">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <program.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{program.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  {program.description}
                </CardDescription>
                <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                  {program.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                {program.href && (
                  <Button variant="link" className="px-0 mt-4" asChild>
                    <Link href={program.href}>
                      Learn more
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

