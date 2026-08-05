import { Building2, Handshake } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata = {
  title: "Community Partners | BLUV First",
  description:
    "BLUV First partners with media, corporate, and community organizations across Tennessee, Ohio, Kentucky, Georgia, and Michigan.",
};

const partners = [
  {
    state: "Tennessee",
    cities: ["Nashville", "Murfreesboro", "Hendersonville", "Goodlettsville", "Madison", "Clarksville", "Franklin", "Gallatin", "Spring Hill", "Smyrna"],
  },
  {
    state: "Ohio",
    cities: ["Dayton", "Trotwood", "Cincinnati"],
  },
  {
    state: "Kentucky",
    cities: ["Elizabethtown"],
  },
  {
    state: "Georgia",
    cities: ["Brunswick"],
  },
  {
    state: "Michigan",
    cities: ["Statewide"],
  },
];

export default function CommunityPartnersPage() {
  return (
    <section className="py-16 md:py-24">
      <div className="container max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Community Partners</h1>
          <p className="text-lg text-muted-foreground">
            Partnerships with the private, public, and philanthropic community are vital to our outreach.
            We are grateful for the organizations, media partners, and volunteers who help us spread
            love and create change.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {partners.map((region) => (
            <Card key={region.state} className="h-full">
              <CardHeader>
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Building2 className="h-5 w-5 text-primary" />
                </div>
                <CardTitle>{region.state}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {region.cities.join(", ")}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-muted/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Handshake className="h-6 w-6 text-primary" />
              Become a Partner
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              We welcome corporate sponsors, media partners, and community organizations who share our
              vision of love in action. Contact us at{" "}
              <a href="mailto:blovefoundation@yahoo.com" className="text-primary underline">
                blovefoundation@yahoo.com
              </a>{" "}
              to explore partnership opportunities.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
