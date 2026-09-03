export const metadata = {
  title: "About | BLove First",
  description:
    "Learn about BLove First (B Love Foundation, Inc.) — a faith-based nonprofit built on love, service, and community empowerment.",
};

export default function FoundationAboutPage() {
  return (
    <section className="py-16 md:py-24">
      <div className="container max-w-4xl">
        <h1 className="text-4xl font-bold mb-6">About BLove First</h1>

        <h2 className="text-2xl font-semibold mb-4">Be Nothing But Love</h2>
        <p className="text-lg text-muted-foreground mb-8">
          Let all that you do be done with love — 1 Corinthians 16:14. By delivering expressions of
          love, BLove First (B Love Foundation, Inc.) cultivates a universal awareness of love. Love is
          the most powerful force known to man, and there is no defense for true, unconditional love.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="text-muted-foreground mb-6">
          A better world through service. BLove First helps under-represented citizens in transition to:
        </p>
        <ul className="list-decimal pl-6 space-y-2 text-muted-foreground mb-8">
          <li>Experience cultural, academic, interpersonal, athletic, and career enrichment.</li>
          <li>Obtain behavioral and occupational empowerment.</li>
          <li>Gain access to resources and supportive services.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">Company Overview</h2>
        <p className="text-muted-foreground mb-8">
          To provide personal, professional, and workforce development for under-privileged men,
          women, and children in transition.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Company Outreach</h2>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-8">
          <li>Occupational Empowerment</li>
          <li>Environmental Health &amp; Safety</li>
          <li>Career Coaching &amp; Counseling</li>
          <li>Personal &amp; Interpersonal Development</li>
          <li>Health &amp; Wellness Workshops</li>
          <li>Community Engagement</li>
          <li>Youth Enrichment</li>
          <li>Supportive Services</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">What We Envision</h2>
        <p className="text-muted-foreground mb-8">
          We believe that our vision for the global community can and will be realized. We want to help
          those in transition become self-sufficient and employable. Through BLove First, we expect to
          positively impact society — because change cannot occur without growth, and society cannot
          grow without changing.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Love Never Fails</h2>
        <p className="text-muted-foreground mb-8">
          1 Corinthians 13:8. True acceptance of the gift of love imparts an internal obligation to
          share spiritual love with others through service and community involvement. Join our outreach
          community and discover the power of change.
        </p>

        <p className="text-lg font-medium text-primary">
          Start spreading love today in your community!
        </p>
      </div>
    </section>
  );
}
