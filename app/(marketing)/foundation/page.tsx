import Link from "next/link";
import { Heart, Users, HandHelping, Award, HandHeart, Shirt, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { RotatingHero } from "@/components/marketing/rotating-hero";

const heroSlides = [
  {
    id: "be-love-first",
    image: "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
    alt: "Community volunteers working together",
    title: "Be Love... In Everything, Be Nothing But Love",
    description:
      "BLove First (B Love Foundation, Inc.) is a faith-based nonprofit providing youth enrichment, occupational empowerment, and supportive services to transitioning youth and adults.",
    primaryCta: { label: "Give Love", href: "/foundation/give-love" },
    secondaryCta: { label: "Explore Programs", href: "/foundation/programs" },
  },
  {
    id: "youth-enrichment",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
    alt: "Youth learning and growing together",
    title: "Empowering the Next Generation",
    description:
      "Through TSAP, arts & crafts, life skills, athletic enrichment, and the Young Entrepreneurs Program, we help young people build confidence, character, and capability.",
    primaryCta: { label: "Youth Programs", href: "/foundation/programs/youth-enrichment" },
    secondaryCta: { label: "Support the Mission", href: "/foundation/give-love" },
  },
  {
    id: "occupational-empowerment",
    image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
    alt: "Adults in job readiness training",
    title: "Building Skills. Restoring Hope.",
    description:
      "Our TCAP and occupational empowerment programs provide job readiness, behavioral awareness, and OSHA safety certification training for veterans and citizens in transition.",
    primaryCta: { label: "Occupational Programs", href: "/foundation/programs/occupational-empowerment" },
    secondaryCta: { label: "Partner With Us", href: "/foundation/community-partners" },
  },
];

export const metadata = {
  title: "BLove First | B Love Foundation, Inc.",
  description:
    "BLove First (B Love Foundation, Inc.) is a faith-based nonprofit providing youth enrichment, occupational empowerment, and supportive services to under-represented citizens in transition.",
};

const programs = [
  {
    title: "Youth Enrichment",
    description:
      "TSAP, arts & crafts, life skills athletic enrichment, and the Young Entrepreneurs Program.",
    icon: Users,
    href: "/foundation/programs/youth-enrichment",
  },
  {
    title: "Occupational Empowerment",
    description:
      "TCAP, job readiness, behavioral awareness, and OSHA safety certification training.",
    icon: Award,
    href: "/foundation/programs/occupational-empowerment",
  },
  {
    title: "Supportive Services",
    description:
      "Housing assistance, recovery support, and resources for employable citizens.",
    icon: HandHelping,
    href: "/foundation/programs/supportive-services",
  },
  {
    title: "EHS Outreach",
    description:
      "Free safety assessments and environmental, health, and safety training for the community.",
    icon: Heart,
    href: "/foundation/programs/environmental-health-safety",
  },
  {
    title: "Community Closet",
    description:
      "Free clothing, essentials, and care packages for under-privileged men, women, and children in transition.",
    icon: Shirt,
    href: "/foundation/programs/community-closet",
  },
  {
    title: "OSHA Outreach Training",
    description:
      "Free workplace safety certification and occupational empowerment for citizens in transition.",
    icon: ShieldCheck,
    href: "/foundation/programs/osha-outreach-training",
  },
];

export default function FoundationHomePage() {
  return (
    <>
      {/* Hero */}
      <RotatingHero slides={heroSlides} />

      {/* What We Do */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What We Do</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our outreach services provide turnkey EHS program development, career coaching,
              academic and athletic enrichment for youth, and occupational empowerment training for
              veterans and under-represented citizens in transition.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program) => (
              <Card key={program.title} className="h-full">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <program.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{program.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col h-full">
                  <CardDescription className="text-base flex-1">
                    {program.description}
                  </CardDescription>
                  <Button variant="link" className="px-0 mt-4 self-start" asChild>
                    <Link href={program.href}>Learn more</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact / Quote */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container text-center max-w-3xl">
          <blockquote className="text-2xl md:text-3xl font-medium italic text-foreground mb-6">
            &ldquo;Where There Is Love...There Is Life.&rdquo;
          </blockquote>
          <p className="text-muted-foreground mb-8">— Gandhi</p>
          <p className="text-lg text-muted-foreground mb-8">
            Partnerships with the private, public, and philanthropic community are vital to the
            success of our outreach. Through fundraising, youth programs, outreach consultation,
            and entertainment endeavors, BLove First aspires to change the world one act of love at a
            time.
          </p>
          <Button size="lg" asChild>
            <Link href="/foundation/give-love">
              <HandHeart className="mr-2 h-5 w-5" />
              Make an Impact
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
