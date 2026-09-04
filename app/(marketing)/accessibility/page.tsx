import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  CheckCircle,
  Eye,
  Keyboard,
  MousePointer,
  Volume2,
  Smartphone,
  Mail,
  Phone,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description:
    "TDA Enterprise is committed to ensuring digital accessibility for people with disabilities. Learn about our accessibility features and Section 508 and WCAG compliance.",
};

const accessibilityFeatures = [
  {
    icon: Keyboard,
    title: "Keyboard Navigation",
    description:
      "All functionality is available using a keyboard. Use Tab to navigate, Enter to activate, and Escape to close dialogs.",
  },
  {
    icon: Eye,
    title: "Screen Reader Support",
    description:
      "Our site is compatible with popular screen readers including JAWS, NVDA, and VoiceOver. We use proper ARIA labels and semantic HTML.",
  },
  {
    icon: MousePointer,
    title: "Focus Indicators",
    description:
      "Clear visual focus indicators help you track your position when navigating with a keyboard or assistive technology.",
  },
  {
    icon: Volume2,
    title: "Text Alternatives",
    description:
      "All images and non-text content have descriptive alt text. Videos include captions when available.",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description:
      "Our site works on all devices and screen sizes. Content reflows properly when zoomed up to 400%.",
  },
];

const wcagCriteria = [
  {
    level: "A",
    title: "Level A (Minimum)",
    items: [
      "1.1.1 Non-text Content - Alt text for images",
      "1.3.1 Info and Relationships - Semantic HTML structure",
      "1.4.1 Use of Color - Color is not the only visual means",
      "2.1.1 Keyboard - All functionality keyboard accessible",
      "2.4.1 Bypass Blocks - Skip navigation links",
      "2.4.2 Page Titled - Descriptive page titles",
      "3.1.1 Language of Page - HTML lang attribute",
      "4.1.1 Parsing - Valid HTML markup",
    ],
  },
  {
    level: "AA",
    title: "Level AA (Standard)",
    items: [
      "1.4.3 Contrast (Minimum) - 4.5:1 text contrast ratio",
      "1.4.4 Resize Text - Text resizable to 200%",
      "1.4.10 Reflow - Content reflows at 320px width",
      "2.4.6 Headings and Labels - Descriptive headings",
      "2.4.7 Focus Visible - Visible keyboard focus",
      "3.2.3 Consistent Navigation - Consistent navigation",
      "3.2.4 Consistent Identification - Consistent naming",
    ],
  },
  {
    level: "AAA",
    title: "Level AAA (Enhanced)",
    items: [
      "1.4.6 Contrast (Enhanced) - 7:1 contrast where possible",
      "2.3.3 Animation from Interactions - Reduced motion support",
      "2.4.9 Link Purpose - Clear link text",
      "2.5.5 Target Size - Adequate touch target sizes",
    ],
  },
];

export default function AccessibilityPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-black text-white">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Accessibility Statement
            </h1>
            <p className="mt-6 text-xl text-gray-300">
              TDA Enterprise is committed to ensuring digital accessibility for people
              with disabilities. We continually improve the user experience for everyone
              and apply the relevant accessibility standards, including Section 508 of the
              Rehabilitation Act and the Web Content Accessibility Guidelines (WCAG) 2.1
              and 2.2.
            </p>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-16 md:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Our Commitment</h2>
            <p className="text-muted-foreground mb-4">
              We believe that the internet should be accessible to everyone, regardless of
              ability. TDA Enterprise strives to conform to Section 508 of the Rehabilitation
              Act and the Web Content Accessibility Guidelines (WCAG) 2.1 and 2.2 at Level AA,
              and we are working toward Level AAA compliance where feasible.
            </p>
            <p className="text-muted-foreground">
              We use the UserWay accessibility widget to provide additional accessibility 
              features and allow users to customize their browsing experience according to 
              their needs.
            </p>
          </div>
        </div>
      </section>

      {/* Accessibility Features */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8 text-center">Accessibility Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {accessibilityFeatures.map((feature) => (
              <Card key={feature.title}>
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section 508 Compliance */}
      <section className="py-16 md:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Section 508 Compliance</h2>
            <p className="text-muted-foreground mb-4">
              TDA Enterprise is committed to complying with Section 508 of the Rehabilitation Act
              (29 U.S.C. &sect; 794d), which requires federal agencies and contractors to make their
              electronic and information technology accessible to people with disabilities. While
              TDA Enterprise is not a federal agency, we voluntarily adopt Section 508 standards
              to ensure our website is accessible to all users, including those using assistive
              technologies.
            </p>
            <p className="text-muted-foreground mb-4">
              Our Section 508 compliance measures include:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <span>Semantic HTML structure with proper heading hierarchy</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <span>ARIA labels and roles for interactive elements</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <span>Skip-to-content link for keyboard navigation bypass</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <span>Text alternatives for all non-text content</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <span>Color contrast ratios meeting WCAG AA standards (4.5:1)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <span>Forms with proper labels, error identification, and instructions</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <span>Keyboard-accessible navigation and interactive components</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <span>Support for screen readers including JAWS, NVDA, and VoiceOver</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* WCAG Conformance */}
      <section className="py-16 md:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8 text-center">WCAG 2.1 & 2.2 Conformance</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {wcagCriteria.map((level) => (
              <Card key={level.level} className="h-full">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                      {level.level}
                    </div>
                    <h3 className="font-semibold">{level.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {level.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* UserWay Widget */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-6">Accessibility Widget</h2>
            <p className="text-muted-foreground mb-6">
              We use UserWay to provide an accessibility widget that allows you to customize 
              your browsing experience. Look for the accessibility icon (usually in the corner 
              of the screen) to access features like:
            </p>
            <div className="grid sm:grid-cols-2 gap-4 text-left max-w-xl mx-auto">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>Increase text size</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>Change contrast</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>Highlight links</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>Pause animations</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>Reading guide</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>Text-to-speech</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feedback Section */}
      <section className="py-16 md:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-6">Feedback & Contact</h2>
            <p className="text-muted-foreground mb-8">
              We welcome your feedback on the accessibility of our website. If you encounter 
              any accessibility barriers or have suggestions for improvement, please contact us:
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild>
                <Link href="mailto:tdaentrprz@gmail.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Email Us
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/business/contact">
                  <Phone className="mr-2 h-4 w-4" />
                  Contact Form
                </Link>
              </Button>
            </div>
            <p className="mt-8 text-sm text-muted-foreground">
              We try to respond to accessibility feedback within 2 business days.
            </p>
          </div>
        </div>
      </section>

      {/* Last Updated */}
      <section className="py-8 border-t">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-muted-foreground">
            This accessibility statement was last updated on September 2025.
          </p>
        </div>
      </section>
    </>
  );
}

