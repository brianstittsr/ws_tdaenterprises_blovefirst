import { Calendar, MapPin, Music, Gift, Crown } from "lucide-react";
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

const upcomingEvents = [
  {
    title: "Dee Lucas Live at the Lighthouse",
    date: "August 20th",
    location: "Lighthouse on the Lake",
    description:
      "Artist meet & greet mixer, live performance, food and spirits, cigars, patio space, small business vending, and free on-site parking. Tickets on sale now.",
    icon: Music,
  },
  {
    title: "3rd Annual Holiday Giveaway Community Closet",
    date: "December 17th",
    location: "Dayton, OH",
    description:
      "Clothing items for the entire family this holiday season. Stop by and grab a bag!",
    icon: Gift,
  },
];

const pastEvents = [
  {
    title: "Juneteenth Celebration — A Crown Royalty Affair",
    date: "June 17th",
    location: "Lighthouse on the Lake",
    description: "Celebrating Our Kings & Queens with the community.",
    icon: Crown,
  },
  {
    title: "B Love on the Lake Benefit Showcase",
    date: "Past",
    location: "Lighthouse on the Lake",
    description:
      "A magical evening featuring Dee Lucas and community sponsors. Thank you to everyone who attended and supported our mission.",
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
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
