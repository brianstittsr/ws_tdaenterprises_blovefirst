export const metadata = {
  title: "About TDA Enterprises",
  description:
    "Learn about TDA Enterprises — a professional EHS services company committed to reducing risk, ensuring compliance, and protecting workforces.",
};

export default function BusinessAboutPage() {
  return (
    <section className="py-16 md:py-24">
      <div className="container max-w-4xl">
        <h1 className="text-4xl font-bold mb-6">About TDA Enterprises</h1>
        <p className="text-lg text-muted-foreground mb-8">
          TDA Enterprises provides professional environmental, health, and safety services designed to
          help businesses protect their people, reduce risk, and maintain compliance. From OSHA
          training and safety audits to turnkey program development, our team works alongside
          organizations to build practical, sustainable safety cultures.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="text-muted-foreground mb-8">
          Delivering professional EHS services that reduce risk, ensure compliance, and protect your
          workforce — with clear communication, practical training, and measurable outcomes.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Program Excellence</h2>
        <p className="text-muted-foreground mb-4">
          Professional experience and a world-class approach toward cultivating occupational health
          and safety programs that yield elite performance for general and construction industry
          clients. Our program excellence is centered around:
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {[
            "Personnel Engagement",
            "Personal Experiences",
            "Practical Exams",
            "Proficiency Evaluations",
            "Physical Exercise",
            "Policy Enforcement",
            "Program Efficiency",
          ].map((pillar) => (
            <div key={pillar} className="text-center p-3 rounded-lg border bg-card text-sm font-medium">
              {pillar}
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-semibold mb-4">Credentials & Experience</h2>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-8">
          <li>OSHA outreach training for construction and general industry</li>
          <li>Certified safety audits, equipment inspections, and hazard assessments</li>
          <li>Experience supporting high-hazard industries across Tennessee, Ohio, Kentucky, Georgia, and Michigan</li>
          <li>Bilingual training capabilities for multilingual workforces</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">Why Work With Us?</h2>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li>Practical, hands-on safety solutions</li>
          <li>Free initial safety assessments for qualified businesses</li>
          <li>New customer discounts on training packages</li>
          <li>Responsive, relationship-driven service</li>
        </ul>
      </div>
    </section>
  );
}
