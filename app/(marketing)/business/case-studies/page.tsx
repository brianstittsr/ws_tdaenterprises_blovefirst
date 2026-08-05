import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata = {
  title: "Case Studies | TDA Enterprises",
  description:
    "See how TDA Enterprises helps businesses reduce risk, improve compliance, and protect their workforce.",
};

const caseStudies = [
  {
    title: "Manufacturing Client — Hazard Reduction",
    summary:
      "A 200-employee metal fabrication facility reduced recordable incidents by 40% within 12 months after implementing TDA&apos;s hazard assessment and machine-guarding action plan.",
  },
  {
    title: "Construction Contractor — OSHA Compliance",
    summary:
      "A regional contractor avoided citations during an OSHA inspection by closing fall-protection and scaffolding gaps identified in a pre-inspection safety audit.",
  },
  {
    title: "Logistics Warehouse — Multilingual Training",
    summary:
      "A distribution center improved safety awareness across a multilingual workforce with bilingual OSHA 10-Hour training and visual hazard communication tools.",
  },
];

export default function CaseStudiesPage() {
  return (
    <section className="py-16 md:py-24">
      <div className="container max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Case Studies</h1>
          <p className="text-lg text-muted-foreground">
            Real results from businesses that partnered with TDA Enterprises to improve safety and
            compliance.
          </p>
        </div>

        <div className="space-y-6">
          {caseStudies.map((study) => (
            <Card key={study.title}>
              <CardHeader>
                <CardTitle>{study.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{study.summary}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Interested in similar results? Request a free safety assessment.
          </p>
          <a
            href="/business/free-assessment"
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            Request Free Assessment
          </a>
        </div>
      </div>
    </section>
  );
}
