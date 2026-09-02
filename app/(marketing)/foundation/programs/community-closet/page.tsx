import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, Shirt, Gift, Users, Heart } from "lucide-react";

const galleryImages = [
  { src: "/images/extracted/community-closet-1.jpg", alt: "Volunteers with clothing donations at the Community Closet" },
  { src: "/images/extracted/community-closet-2.jpg", alt: "Children receiving care packages from BLUV First" },
  { src: "/images/extracted/community-closet-3.jpg", alt: "Community members receiving Community Closet essentials" },
  { src: "/images/extracted/community-closet-4.jpg", alt: "Volunteer delivering a care package curbside" },
];

export const metadata = {
  title: "Community Closet | BLUV First",
  description:
    "BLUV First's Community Closet provides free clothing, essentials, and supportive resources for under-privileged men, women, and children in transition.",
};

const offerings = [
  "Free clothing for adults and children",
  "Seasonal coat, shoe, and essentials drives",
  "Care packages distributed at community events",
  "Support for veterans, seniors, and families in transition",
];

const impact = [
  { icon: Shirt, title: "Clothing Access", description: "Community members can find quality clothing at no cost, sorted and ready for pickup." },
  { icon: Gift, title: "Care Packages", description: "We distribute bagged essentials at community outreach events throughout the year." },
  { icon: Users, title: "Community Engagement", description: "Volunteers and partners help sort, stock, and distribute donations to those in need." },
  { icon: Heart, title: "Dignity & Support", description: "Every distribution is delivered with compassion, respect, and a spirit of service." },
];

export default function CommunityClosetPage() {
  return (
    <section className="py-16 md:py-24">
      <div className="container max-w-4xl">
        <h1 className="text-4xl font-bold mb-6">Community Closet</h1>
        <p className="text-lg text-muted-foreground mb-12">
          BLUV First&rsquo;s Community Closet provides personal, professional, and workforce
          development support to under-privileged men, women, and children in transition — starting
          with something as fundamental as clothing and everyday essentials.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {galleryImages.map((image) => (
            <div key={image.src} className="relative aspect-square rounded-lg overflow-hidden border">
              <Image src={image.src} alt={image.alt} fill className="object-cover" />
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-semibold mb-4">What We Provide</h2>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-12">
          {offerings.map((item) => (
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
              Donate or Volunteer
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
