import {
  Award,
  ClipboardCheck,
  HardHat,
  Shield,
  TriangleAlert,
  Factory,
  Leaf,
  HeartPulse,
  GraduationCap,
  ClipboardList,
  FolderKanban,
  ArrowRight,
  Briefcase,
  Eye,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ServiceHero } from "@/components/marketing/service-hero";

export const metadata = {
  title: "EHS Services | TDA Enterprises",
  description:
    "OSHA training, safety audits, equipment inspections, hazard assessments, and turnkey EHS program development from TDA Enterprises.",
};

const services = [
  {
    title: "OSHA Training & Certification",
    description:
      "OSHA 10-Hour and 30-Hour courses for construction and general industry, plus First Aid/CPR/AED, Bloodborne Pathogens, and Aerial Work Platform training.",
    icon: Award,
    href: "/business/services/osha-training",
  },
  {
    title: "Safety Audits & Compliance",
    description:
      "Comprehensive workplace audits that identify hazards, evaluate compliance gaps, and provide prioritized action plans.",
    icon: ClipboardCheck,
    href: "/business/services/safety-audits",
  },
  {
    title: "Equipment Inspection",
    description:
      "Certified inspections for aerial work platforms, scaffolding, fall protection, hoists, carts, and other jobsite equipment.",
    icon: HardHat,
    href: "/business/services/equipment-inspection",
  },
  {
    title: "Turnkey Program Development",
    description:
      "Custom EHS programs aligned with OSHA requirements and your operational needs — from written plans to training rollout.",
    icon: Shield,
    href: "/business/services/program-development",
  },
  {
    title: "Hazard Assessment",
    description:
      "Systematic identification of workplace hazards with practical controls and ongoing monitoring recommendations.",
    icon: TriangleAlert,
    href: "/business/services/hazard-assessment",
  },
  {
    title: "Industry-Specific Solutions",
    description:
      "Tailored safety support for manufacturing, construction, warehousing, logistics, and healthcare facilities.",
    icon: Factory,
    href: "/business/services/industry-specific-solutions",
  },
  {
    title: "Management & Consulting",
    description:
      "Safety leadership development, EHS management system design, and ongoing advisory support.",
    icon: Briefcase,
    href: "/business/services/management-consulting",
  },
  {
    title: "Employee Observations",
    description:
      "On-the-floor observations and in-the-moment coaching that catch at-risk behavior early.",
    icon: Eye,
    href: "/business/services/employee-observations",
  },
  {
    title: "Training & Coaching",
    description:
      "Hands-on training, practical exams, and proficiency evaluations that build lasting safety habits.",
    icon: GraduationCap,
    href: "/business/services/training-coaching",
  },
];

const capabilities = [
  {
    icon: Leaf,
    title: "Environmental Services",
    items: [
      "Environmental Compliance Audits",
      "Environmental Management Systems",
      "Waste Management Programs",
      "Environmental Impact Assessments",
    ],
  },
  {
    icon: HeartPulse,
    title: "Health & Safety",
    items: [
      "Safety Program Development",
      "Risk Assessments",
      "OSHA Compliance",
      "Workplace Safety Training",
    ],
  },
  {
    icon: GraduationCap,
    title: "Training & Development",
    items: [
      "Custom Training Programs",
      "Certification Courses",
      "Professional Development",
      "Compliance Training",
    ],
  },
  {
    icon: ClipboardList,
    title: "Consulting",
    items: [
      "Strategic Planning",
      "Process Improvement",
      "Regulatory Compliance",
      "Best Practices Implementation",
    ],
  },
  {
    icon: Shield,
    title: "Auditing",
    items: [
      "Compliance Audits",
      "Management System Audits",
      "Safety Program Audits",
      "Environmental Audits",
    ],
  },
  {
    icon: FolderKanban,
    title: "Program Management",
    items: [
      "Environmental Projects",
      "Safety Implementations",
      "Training Programs",
      "Compliance Projects",
    ],
  },
];

export default function BusinessServicesPage() {
  return (
    <>
      <ServiceHero
        title="Professional EHS Services"
        tagline="Practical safety, health, and environmental solutions for high-hazard workplaces."
        description="TDA Enterprises reduces risk, improves compliance, and protects the people who keep your business running — from OSHA training and safety audits to turnkey program development."
        image="https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
        imageAlt="Safety professionals reviewing workplace practices"
      />

      <section className="py-4">
        <div className="container">
          <div className="bg-primary text-primary-foreground rounded-2xl py-6 text-center">
            <p className="text-2xl md:text-3xl font-bold tracking-wide">TEACH ~ DEVELOP ~ ACHIEVE</p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Core EHS Offerings</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Practical safety solutions that reduce risk, improve compliance, and protect the people
              who keep your business running.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Card key={service.title} className="h-full">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                  {service.href && (
                    <Button variant="link" className="px-0 mt-2" asChild>
                      <Link href={service.href}>
                        Learn more
                        <ArrowRight className="ml-1 h-3 w-3" />
                      </Link>
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Complete EHS Capabilities</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A full spectrum of environmental, health, and safety consulting services designed to help
              your organization achieve and maintain regulatory excellence.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((capability) => (
              <Card key={capability.title} className="h-full">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <capability.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{capability.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    {capability.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Contact us to discuss how TDA Enterprises can help your organization achieve its environmental,
            health, and safety goals.
          </p>
          <Button size="lg" asChild>
            <Link href="/business/contact">
              Contact Us
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
