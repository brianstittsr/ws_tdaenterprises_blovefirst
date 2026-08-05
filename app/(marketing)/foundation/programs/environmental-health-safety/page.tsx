import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata = {
  title: "EHS Outreach | BLUV First",
  description:
    "BLUV First Environmental Health & Safety outreach provides occupational safety training, safety audits, equipment inspection, hazard assessments, and turnkey program development.",
};

const services = [
  {
    title: "Occupational Safety Training",
    description:
      "OSHA certification classes, safety awareness training, industry-specific safety programs, and compliance training.",
  },
  {
    title: "Safety Audits",
    description:
      "Workplace safety assessments, compliance audits, risk identification, and safety program evaluation.",
  },
  {
    title: "Equipment Inspection",
    description:
      "Safety equipment evaluation, compliance verification, maintenance recommendations, and equipment certification.",
  },
  {
    title: "Hazard Assessments",
    description:
      "Workplace hazard identification, risk analysis, safety recommendations, and mitigation strategies.",
  },
  {
    title: "Program Development",
    description:
      "Turnkey environmental, health, and safety program development, custom safety programs, policy creation, and training program design.",
  },
  {
    title: "Program Evaluation",
    description:
      "Existing program assessment, effectiveness measurement, improvement recommendations, and ongoing support.",
  },
];

export default function FoundationEHSPage() {
  return (
    <section className="py-16 md:py-24">
      <div className="container max-w-4xl">
        <h1 className="text-4xl font-bold mb-6">Environmental, Health & Safety Outreach</h1>
        <p className="text-lg text-muted-foreground mb-12">
          Our EHS outreach provides occupational safety training, audits, equipment inspection, hazard
          assessments, program development, and evaluation — with special focus on companies with high
          hazard, injury, and language barriers.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {services.map((service) => (
            <Card key={service.title} className="h-full">
              <CardHeader>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="rounded-2xl border bg-muted/50 p-8 text-center">
          <h2 className="text-2xl font-semibold mb-4">How can we help you?</h2>
          <p className="text-muted-foreground">
            We offer free safety assessments and new customer discounts. Contact us to schedule your
            assessment or learn more about our EHS outreach services.
          </p>
        </div>
      </div>
    </section>
  );
}
