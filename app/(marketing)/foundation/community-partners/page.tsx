import { Building2, Handshake, MapPin, Phone } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

export const metadata = {
  title: "Community Partners | BLove First",
  description:
    "BLove First partners with media, corporate, and community organizations across Tennessee, Ohio, Kentucky, Georgia, and Michigan.",
};

const featuredPartners = [
  {
    name: "WMOT Box 3",
    location: "MTSU, Murfreesboro, TN 37132",
    phone: "615-898-2800",
  },
  {
    name: "WizTech",
    location: "Clarksville, TN",
  },
  {
    name: "Trinity Associate Investment Group Inc.",
    location: "Nashville, TN",
  },
  {
    name: "BambiNaildit Boutique",
    location: "Murfreesboro, TN",
  },
  {
    name: "John E. Green Mechanical Contractors",
    location: "Michigan",
  },
  {
    name: "Lighthouse on the Lake",
    location: "Hendersonville, TN",
  },
];

const regionalPartners = [
  {
    state: "Tennessee",
    entries: [
      { address: "3430 Doverside Dr.", city: "Nashville, TN 37207", phone: "615-469-2227" },
      { address: "920 Rivergate Pkwy", city: "Goodlettsville, TN 37072", phone: "615-239-0674" },
      { address: "500 Lentz Dr. Suite 90A", city: "Madison, TN 37115", phone: "615-678-1051" },
      { address: "1125 12th Ave. S", city: "Nashville, TN 37203", phone: "615-248-1981" },
      { address: "1000 17th Ave. North", city: "Nashville, TN 37208", phone: "615-329-8754" },
      { address: "3833 Cleghorn Ave.", city: "Nashville, TN 37215", phone: "615-321-4939" },
      { address: "2594a Murfreesboro Pike", city: "Nashville, TN 37217", phone: "615-810-9926" },
      { address: "410 4th Avenue South", city: "Nashville, TN 37201", phone: "615-288-0880" },
      { city: "Franklin, TN" },
      { city: "Clarksville, TN" },
      { city: "Spring Hill, TN" },
      { city: "Smyrna, TN" },
      { city: "Gallatin, TN" },
    ],
  },
  {
    state: "Ohio",
    entries: [
      { address: "1101 West Park Rd.", city: "Elizabethtown, KY 42701", phone: "270-769-5526" },
      { address: "3730 Delphos Ave.", city: "Dayton, OH 45417" },
      { city: "Trotwood, OH" },
      { city: "Cincinnati, OH" },
    ],
  },
  {
    state: "Georgia",
    entries: [
      { city: "Brunswick, GA" },
    ],
  },
  {
    state: "Michigan",
    entries: [
      { city: "Statewide, MI" },
    ],
  },
];

export default function CommunityPartnersPage() {
  return (
    <section className="py-16 md:py-24">
      <div className="container max-w-5xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Community Partners</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Partnerships with the private, public, and philanthropic community are vital to our outreach.
            We are grateful for the organizations, media partners, and volunteers who help us spread
            love and create change.
          </p>
        </div>

        {/* Featured Partners */}
        <h2 className="text-2xl font-semibold mb-6">Featured Partners</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredPartners.map((partner) => (
            <Card key={partner.name} className="h-full">
              <CardHeader>
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Building2 className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="text-lg">{partner.name}</CardTitle>
                <CardDescription className="flex items-center gap-1 text-sm">
                  <MapPin className="h-3 w-3" />
                  {partner.location}
                </CardDescription>
              </CardHeader>
              {partner.phone && (
                <CardContent>
                  <p className="text-sm text-muted-foreground flex items-center gap-1">
                    <Phone className="h-3 w-3" />
                    {partner.phone}
                  </p>
                </CardContent>
              )}
            </Card>
          ))}
        </div>

        {/* Regional Partners */}
        <h2 className="text-2xl font-semibold mb-6">All Partners by Region</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {regionalPartners.map((region) => (
            <Card key={region.state} className="h-full">
              <CardHeader>
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Building2 className="h-5 w-5 text-primary" />
                </div>
                <CardTitle>{region.state}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {region.entries.map((entry, i) => (
                    <li key={i} className="flex flex-col">
                      {entry.address && <span>{entry.address}</span>}
                      <span>{entry.city}</span>
                      {entry.phone && <span className="text-xs">{entry.phone}</span>}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Become a Partner */}
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

