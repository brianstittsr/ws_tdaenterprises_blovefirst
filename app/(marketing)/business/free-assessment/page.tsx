import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const metadata = {
  title: "Free Safety Assessment | TDA Enterprises",
  description:
    "Request a free safety assessment from TDA Enterprises. Identify hazards, close compliance gaps, and protect your workforce.",
};

export default function FreeAssessmentPage() {
  return (
    <section className="py-16 md:py-24">
      <div className="container max-w-2xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Request a Free Safety Assessment</h1>
          <p className="text-lg text-muted-foreground">
            Tell us about your workplace and we will follow up to schedule a no-obligation safety
            assessment.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Assessment Request</CardTitle>
            <CardDescription>
              New customers may also qualify for training discounts. Fields marked with * are required.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-6" action="mailto:tdaentrprz@gmail.com" method="post" encType="text/plain">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input id="name" name="name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Company *</Label>
                  <Input id="company" name="company" required />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" name="email" type="email" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" name="phone" type="tel" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="industry">Industry</Label>
                <Input id="industry" name="industry" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">How can we help?</Label>
                <Textarea id="message" name="message" rows={4} />
              </div>
              <Button type="submit" className="w-full">
                Request Free Assessment
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
