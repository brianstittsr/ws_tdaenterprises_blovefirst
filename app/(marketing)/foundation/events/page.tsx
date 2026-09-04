import { Calendar, MapPin, Music, Gift, Crown, Music2, ExternalLink, Instagram, type LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata = {
  title: "Events | BLove First",
  description:
    "Upcoming and past events hosted by BLove First (B Love Foundation, Inc.) — benefit showcases, community closets, and holiday gatherings.",
};

interface EventItem {
  title: string;
  date: string;
  location: string;
  description: string;
  icon: LucideIcon;
  ticketUrl?: string;
}

const upcomingEvents: EventItem[] = [];

const pastEvents = [
  {
    title: "Dee Lucas Live at the Lighthouse",
    date: "August 20",
    location: "Lighthouse on the Lake, Hendersonville, TN",
    description:
      "Artist meet & greet mixer, live performance, food and spirits, cigars, patio space, small business vending, and free on-site parking. Featuring Dee Lucas and music from his new album, No Boundaries.",
    icon: Music,
    ticketUrl: "https://www.eventbrite.com/e/dee-lucas-live-at-the-lighthouse-tickets-667335928727",
  },
  {
    title: "B Love Album Release Party & Birthday Bizazz",
    date: "March 17",
    location: "Lighthouse on the Lake, Hendersonville, TN",
    description:
      "B Love presents the Album Release Party recognizing Dee Lucas' new album, No Boundaries, and on top of that a Birthday Bizazz celebrating March birthdays.",
    icon: Music,
    ticketUrl: "https://www.eventbrite.com/e/b-love-album-release-party-birthday-bizazz-tickets-549225908477",
  },
  {
    title: "3rd Annual Holiday Giveaway Community Closet",
    date: "December 17",
    location: "Dayton, OH",
    description:
      "Spread the word and join us in Dayton for our 3rd Annual Holiday Giveaway Community Closet! We'll have plenty of clothing items for the entire family to be blessed this holiday season. Stop by and grab a bag!",
    icon: Gift,
  },
  {
    title: "B Love on the Lake Holiday Benefit Showcase featuring Paula Atherton",
    date: "December 19, 2021 — 7:30pm to 9:30pm",
    location: "The Lighthouse on the Lake, 133 Sanders Ferry Rd, Hendersonville, TN 37075",
    description:
      "An elegant evening of jazz and purpose during the holiday season! Join us for a live intimate performance by contemporary jazz saxophonist Paula Atherton. We will be raising awareness and support for workforce development programs and outreach programs in Middle TN.",
    icon: Music2,
    ticketUrl: "https://www.eventbrite.com/e/b-love-on-the-lake-holiday-benefit-showcase-tickets-214971875667",
  },
  {
    title: "Juneteenth Celebration — A Crown Royalty Affair",
    date: "June 17",
    location: "Lighthouse on the Lake, Hendersonville, TN",
    description: "Celebrating Our Kings & Queens. Thank you to all who came out for this special community celebration.",
    icon: Crown,
  },
  {
    title: "B Love on the Lake Benefit Showcase featuring Dee Lucas",
    date: "Past",
    location: "Lighthouse on the Lake, Hendersonville, TN",
    description:
      "A magical evening featuring Dee Lucas and community sponsors. Thank you to everyone who attended and supported our mission, and to our venue The Lighthouse on the Lake.",
    icon: Music,
  },
];

export default function FoundationEventsPage() {
  return (
    <section className="py-16 md:py-24">
      <div className="container max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Events</h1>
          <p className="text-lg text-muted-foreground">
            Join us for showcases, giveaways, and community gatherings that spread love and support our
            outreach mission.
          </p>
        </div>

        <h2 className="text-2xl font-semibold mb-6">Upcoming Events</h2>
        {upcomingEvents.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {upcomingEvents.map((event) => (
            <Card key={event.title} className="h-full">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <event.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>{event.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  {event.description}
                </CardDescription>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {event.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {event.location}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        ) : (
          <Card className="mb-12 bg-muted/50">
            <CardContent className="py-8 text-center">
              <p className="text-muted-foreground mb-4">
                No upcoming events scheduled at this time. Please check back soon!
              </p>
              <Button variant="outline" asChild>
                <a href="https://www.instagram.com/tdaentrprz/" target="_blank" rel="noopener noreferrer">
                  <Instagram className="mr-2 h-4 w-4" />
                  Follow us on Instagram for updates
                </a>
              </Button>
            </CardContent>
          </Card>
        )}

        <h2 className="text-2xl font-semibold mb-6">Past Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pastEvents.map((event) => (
            <Card key={event.title} className="h-full">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <event.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>{event.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  {event.description}
                </CardDescription>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {event.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {event.location}
                  </span>
                </div>
                {event.ticketUrl && (
                  <Button variant="link" className="px-0 mt-4" asChild>
                    <a href={event.ticketUrl} target="_blank" rel="noopener noreferrer">
                      View on Eventbrite
                      <ExternalLink className="ml-1 h-3 w-3" />
                    </a>
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Sponsorship CTA */}
        <Card className="mt-12 bg-muted/50">
          <CardContent className="py-8 text-center">
            <p className="text-muted-foreground mb-4">
              For sponsorship opportunities, email us at{" "}
              <a href="mailto:blovefoundation@yahoo.com" className="text-primary underline">
                blovefoundation@yahoo.com
              </a>
            </p>
            <p className="text-sm text-muted-foreground">
              For information on future events, follow us on{" "}
              <a href="https://www.instagram.com/tdaentrprz/" target="_blank" rel="noopener noreferrer" className="text-primary underline">
                Instagram
              </a>
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

