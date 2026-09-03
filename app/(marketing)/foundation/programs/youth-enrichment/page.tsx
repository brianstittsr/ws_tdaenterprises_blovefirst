import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata = {
  title: "Youth Enrichment | BLove First",
  description:
    "BLove First youth enrichment programs build interpersonal skills, character, athletic enrichment, education, and career readiness through TSAP and related initiatives.",
};

const programs = [
  {
    title: "Transitioning Student Achievement Program (TSAP)",
    description:
      "Our primary youth empowerment program helps underrepresented students transition and integrate into society as employable citizens through occupational empowerment, personal development, academic support, career readiness, and life skills training.",
  },
  {
    title: "Arts and Crafts Development",
    description:
      "Creative expression and skill development through art projects, craft workshops, and self-expression opportunities — including the Comfort Cushion Campaign community initiative.",
  },
  {
    title: "Life Skills Athletic Enrichment Program",
    description:
      "Combining athletics with life skills development: team sports, physical fitness, leadership, sportsmanship, goal setting, discipline, and positive peer relationships.",
  },
  {
    title: "Young Entrepreneurs Program",
    description:
      "Fostering business skills and entrepreneurial thinking through business basics, financial literacy, marketing concepts, problem-solving, innovation, and leadership development.",
  },
];

const outcomes = [
  "Character development and ethical decision making",
  "Interpersonal skills, communication, and conflict resolution",
  "Life skills, time management, and critical thinking",
  "Team building, cooperation, and leadership",
  "Career readiness and employment preparation",
];

export default function YouthEnrichmentPage() {
  return (
    <section className="py-16 md:py-24">
      <div className="container max-w-4xl">
        <h1 className="text-4xl font-bold mb-6">Youth Enrichment</h1>
        <p className="text-lg text-muted-foreground mb-12">
          Our youth enrichment programs foster interpersonal and character development, athletic
          enrichment, education, life and team-building skills, and ethical decision-making for
          underrepresented and at-risk youth.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {programs.map((program) => (
            <Card key={program.title} className="h-full">
              <CardHeader>
                <CardTitle className="text-xl">{program.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{program.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <h2 className="text-2xl font-semibold mb-4">Program Outcomes</h2>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          {outcomes.map((outcome) => (
            <li key={outcome}>{outcome}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
