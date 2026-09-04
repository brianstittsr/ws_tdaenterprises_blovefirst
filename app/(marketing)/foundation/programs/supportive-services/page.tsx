import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata = {
  title: "Supportive Services | BLove First",
  description:
    "BLove First supportive services provide housing assistance, recovery support, employment resources, healthcare access, and hygiene resources for veterans, seniors, and citizens in transition.",
};

const services = [
  {
    title: "Housing and Furnishing Assistance",
    description:
      "Access to housing resources and furnishing assistance for transitioning citizens, veterans, and senior citizens.",
  },
  {
    title: "Refuge To Recovery Program",
    description:
      "Recovery support services, transitional assistance, and community reintegration support for individuals rebuilding their lives.",
  },
  {
    title: "Employable Citizens Assistance Program",
    description:
      "Employment support, job placement assistance, and career development resources for citizens seeking work.",
  },
];

const resources = [
  "Employment resources and career counseling",
  "Housing support and housing options information",
  "Transportation assistance",
  "Health & wellness program access",
  "Healthcare provider connections",
  "Basic hygiene supplies and facilities",
  "Additional support services as needed",
];

export default function SupportiveServicesPage() {
  return (
    <section className="py-16 md:py-24">
      <div className="container max-w-4xl">
        <h1 className="text-4xl font-bold mb-6">Supportive Services</h1>
        <p className="text-lg text-muted-foreground mb-12">
          BLove First offers services that support employment, housing, transportation, health &
          wellness, healthcare access, hygiene, and other human resources for community members in
          transition.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {services.map((service) => (
            <Card key={service.title} className="h-full">
              <CardHeader>
                <CardTitle className="text-lg">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <h2 className="text-2xl font-semibold mb-4">How We Help</h2>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          {resources.map((resource) => (
            <li key={resource}>{resource}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

