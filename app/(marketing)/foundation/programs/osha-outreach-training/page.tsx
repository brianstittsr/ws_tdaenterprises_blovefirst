import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, ShieldCheck, Award, Users, HeartHandshake } from "lucide-react";

const galleryImages = [
  { src: "/images/extracted/osha-outreach-1.jpg", alt: "OSHA outreach training session at a community venue" },
  { src: "/images/extracted/osha-outreach-2.jpg", alt: "Graduates holding OSHA outreach training certificates" },
  { src: "/images/extracted/osha-outreach-3.jpg", alt: "Two young graduates holding safety training certificates" },
];

export const metadata = {
  title: "OSHA Outreach Training | BLove First",
  description:
    "BLove First's OSHA Outreach Training brings free workplace safety certification and occupational empowerment to under-represented citizens in transition.",
};

const trainingOfferings = [
  "OSHA 10-Hour and 30-Hour outreach certification",
  "Workplace safety fundamentals and hazard awareness",
  "Occupational empowerment workshops",
  "Certificates awarded at community graduation events",
];

const impact = [
  { icon: ShieldCheck, title: "Safety Certification", description: "Participants earn recognized OSHA outreach certifications that improve employability." },
  { icon: Award, title: "Occupational Empowerment", description: "Training connects directly to our broader occupational empowerment and TCAP programming." },
  { icon: Users, title: "Community Access", description: "Free training removes cost barriers for under-represented citizens seeking safety credentials." },
  { icon: HeartHandshake, title: "Employer Partnerships", description: "We work with community partners and employers to connect graduates with job opportunities." },
];

export default function OshaOutreachTrainingPage() {
  return (
    <section className="py-16 md:py-24">
      <div className="container max-w-4xl">
        <h1 className="text-4xl font-bold mb-6">OSHA Outreach Training</h1>
        <p className="text-lg text-muted-foreground mb-12">
          Through our OSHA Outreach Training program, BLove First delivers free, certified workplace
          safety education to under-represented citizens in transition — helping participants build
          occupational empowerment and become employable, safety-conscious members of the workforce.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {galleryImages.map((image) => (
            <div key={image.src} className="relative aspect-video rounded-lg overflow-hidden border">
              <Image src={image.src} alt={image.alt} fill className="object-cover" />
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-semibold mb-4">What We Offer</h2>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-12">
          {trainingOfferings.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <h2 className="text-2xl font-semibold mb-6">Our Impact</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {impact.map((item) => (
            <Card key={item.title} className="h-full">
              <CardHeader>
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="text-lg">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild>
            <Link href="/foundation/give-love">
              Support This Program
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/foundation/programs">View All Programs</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
