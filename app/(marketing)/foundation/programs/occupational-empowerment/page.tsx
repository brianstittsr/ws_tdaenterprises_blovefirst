import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata = {
  title: "Occupational Empowerment | BLove First",
  description:
    "BLove First occupational empowerment programs provide job readiness, behavioral awareness, basic life support skills, OSHA training, and career development for transitioning citizens.",
};

const programs = [
  {
    title: "Transitioning Citizens Assistance Program (TCAP)",
    description:
      "Helps underrepresented people reintegrate into society as employable citizens and restore hope from life&apos;s transition through education, training, and workshops.",
  },
  {
    title: "Behavioral and Occupational Safety Program",
    description:
      "Comprehensive training addressing workplace behavioral skills, personal behavioral awareness, latent behavioral patterns, and occupational safety protocols.",
  },
  {
    title: "Vocation Development Assistance Program",
    description:
      "Career development support including skills assessment, career planning, training opportunities, and professional development.",
  },
];

const jobReadiness = [
  "Resume writing and skills highlighting",
  "Job search strategies and application support",
  "Interview etiquette and professional presentation",
  "Networking guidance and resource access",
];

const safetySkills = [
  "First Aid, CPR, and AED training",
  "Blood-borne pathogen safety protocols",
  "OSHA 10-Hour and 30-Hour certifications",
  "Aerial Work Platform training and certification",
];

export default function OccupationalEmpowermentPage() {
  return (
    <section className="py-16 md:py-24">
      <div className="container max-w-4xl">
        <h1 className="text-4xl font-bold mb-6">Occupational Empowerment</h1>
        <p className="text-lg text-muted-foreground mb-12">
          Our Occupational Empowerment services provide job readiness skills, behavioral awareness
          skills, basic life support skills, and Occupational Health and Safety Training — including
          OSHA certification classes and Aerial Work Platform training.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {programs.map((program) => (
            <Card key={program.title} className="h-full">
              <CardHeader>
                <CardTitle className="text-lg">{program.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">{program.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Job Readiness Services</h2>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              {jobReadiness.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Safety & Life Support Skills</h2>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              {safetySkills.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

