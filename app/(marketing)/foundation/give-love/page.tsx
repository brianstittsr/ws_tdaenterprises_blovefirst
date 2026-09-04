import { Heart, HandHeart, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata = {
  title: "Give Love | BLove First",
  description:
    "Donate, sponsor, or volunteer with BLove First (B Love Foundation, Inc.). Your contribution supports youth enrichment, occupational empowerment, and supportive services.",
};

const givingOptions = [
  {
    title: "One-Time Donation",
    description:
      "Make an immediate impact by supporting youth enrichment, career coaching, and outreach programs.",
    icon: Heart,
  },
  {
    title: "Monthly Giving",
    description:
      "Sustain our mission year-round with recurring support for programs and community events.",
    icon: HandHeart,
  },
  {
    title: "Volunteer or Sponsor",
    description:
      "Share your time, skills, or resources. Partner with us for events, training sponsorships, and program support.",
    icon: Users,
  },
];

export default function GiveLovePage() {
  return (
    <section className="py-16 md:py-24">
      <div className="container max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Give Love</h1>
          <p className="text-lg text-muted-foreground">
            The expression of love comes without charge or measure, yet holds great value. Your
            contribution helps us cultivate a universal awareness of love through service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {givingOptions.map((option) => (
            <Card key={option.title} className="h-full text-center">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <option.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{option.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">{option.description}</p>
                <Button variant="outline" className="w-full" asChild>
                  <a href="mailto:blovefoundation@yahoo.com">Get Involved</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-muted/50">
          <CardHeader>
            <CardTitle>How Your Donation Helps</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
              <li>Youth enrichment programs</li>
              <li>Occupational empowerment training</li>
              <li>Supportive services for veterans and transitioning citizens</li>
              <li>Environmental, health, and safety program development</li>
              <li>Career coaching and counseling</li>
              <li>Academic and athletic enrichment for youth</li>
            </ul>
            <p className="text-sm text-muted-foreground">
              All contributions are tax-deductible. For donations or sponsorship opportunities, email
              us at{" "}
              <a href="mailto:blovefoundation@yahoo.com" className="text-primary underline">
                blovefoundation@yahoo.com
              </a>{" "}
              or call 615-673-4323.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

