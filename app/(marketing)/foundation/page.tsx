import Link from "next/link";
import { Heart, Users, HandHelping, Award, HandHeart, Shirt, ShieldCheck, MapPin, Mail, Phone, ShieldQuestion, Sparkles } from "lucide-react";
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

const missionObjectives = [
  {
    number: 1,
    text: "Experience cultural, academic, interpersonal, athletic, and career enrichment",
  },
  {
    number: 2,
    text: "Obtain behavioral and occupational empowerment",
  },
  {
    number: 3,
    text: "Gain access to resources and supportive services",
  },
];

export default function FoundationHomePage() {
  return (
    <>
      {/* Hero */}
      <RotatingHero slides={heroSlides} />

      {/* Scripture Band */}
      <section className="py-6 bg-primary text-primary-foreground">
        <div className="container text-center">
          <p className="text-lg md:text-xl font-medium italic">
            &ldquo;Let all that you do be done with love.&rdquo;
          </p>
          <p className="text-sm opacity-90 mt-1">— 1 Corinthians 16:14</p>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What We Do</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              B Love Foundation, Inc. is a faith-based, community-oriented, charitable organization.
              Our outreach services provide turnkey environmental, health, and safety program
              development, career coaching and counseling, academic and athletic enrichment for youth,
              and occupational empowerment training for veterans and under-represented citizens in
              transition.
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

      {/* Our Mission */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Our Mission</h2>
            <p className="text-xl text-muted-foreground">A Better World Through Service</p>
          </div>
          <p className="text-lg text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
            BLove First helps under-represented citizens in transition to:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {missionObjectives.map((obj) => (
              <Card key={obj.number} className="text-center h-full">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-primary">{obj.number}</span>
                  </div>
                  <CardTitle className="text-base leading-snug">{obj.text}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What We Envision */}
      <section className="py-16 md:py-24">
        <div className="container max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-6">What We Envision</h2>
          <p className="text-lg text-muted-foreground mb-6">
            We believe that our vision for the global community can and will be realized. We want to
            help those in transition by empowering them to become self-sufficient and employable.
            Through BLFI, we expect to positively impact society. Change cannot occur without growth,
            and society cannot grow without changing.
          </p>
          <p className="text-lg text-muted-foreground mb-6">
            Join our outreach community and discover the power of change. Regardless of our social
            economic circumstances, our race, our gender or religious beliefs — we are more
            resourceful as people than we are as a person.
          </p>
          <p className="text-lg font-medium text-primary">
            Start spreading love today in your community!
          </p>
        </div>
      </section>

      {/* Dual CTA Band */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="text-center h-full">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <ShieldQuestion className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">How Can We Help You?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  We offer free safety assessments and new customer discounts.
                </p>
                <Button asChild>
                  <Link href="/business/free-assessment">
                    Request Free Assessment
                  </Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="text-center h-full">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <HandHeart className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Here&apos;s How You Can Help Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Become a Training Sponsor and support our outreach programs.
                </p>
                <Button asChild>
                  <Link href="/foundation/give-love">
                    Donate Now
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact / Quote */}
      <section className="py-16 md:py-24">
        <div className="container text-center max-w-3xl">
          <blockquote className="text-2xl md:text-3xl font-medium italic text-foreground mb-6">
            &ldquo;Where There Is Love...There Is Life.&rdquo;
          </blockquote>
          <p className="text-muted-foreground mb-8">— Gandhi</p>
          <p className="text-lg text-muted-foreground mb-4">
            Partnerships with the private, public, and philanthropic community are vital to the
            success of our outreach. Through fundraising, youth programs, outreach consultation,
            and entertainment endeavors, BLove First aspires to change the world one act of love at a
            time.
          </p>
          <p className="text-lg font-medium text-primary mb-8">
            Love Never Fails — 1 Corinthians 13:8
          </p>
          <Button size="lg" asChild>
            <Link href="/foundation/give-love">
              <HandHeart className="mr-2 h-5 w-5" />
              Make an Impact
            </Link>
          </Button>
        </div>
      </section>

      {/* Contact / Location */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-6">Contact B Love Foundation</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center gap-2">
              <MapPin className="h-6 w-6 text-primary" />
              <p className="text-muted-foreground">P.O. Box 291521<br />Nashville, TN 37229</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Mail className="h-6 w-6 text-primary" />
              <a href="mailto:blovefoundation@yahoo.com" className="text-muted-foreground hover:text-primary">
                blovefoundation@yahoo.com
              </a>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Phone className="h-6 w-6 text-primary" />
              <a href="tel:+16156734323" className="text-muted-foreground hover:text-primary">
                615-673-4323
              </a>
            </div>
          </div>
          <Button variant="outline" className="mt-8" asChild>
            <Link href="/foundation/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </>
  );
}

