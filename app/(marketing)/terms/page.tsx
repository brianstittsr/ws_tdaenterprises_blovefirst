import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Terms of Service | TDA Enterprises",
  description: "Terms of Service for TDA Enterprises platform and EHS services.",
};

export default function TermsPage() {
  return (
    <section className="py-12 md:py-16">
      <div className="container max-w-4xl">
        <Button variant="ghost" asChild className="mb-8">
          <Link href="/">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
        </Button>

        <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
        <p className="text-muted-foreground mb-8">Last updated: September 2025</p>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-3">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground">
              By accessing or using the TDA Enterprises website and services, you agree to be bound
              by these Terms of Service. If you do not agree to these terms, please do not use our
              website or services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">2. Description of Services</h2>
            <p className="text-muted-foreground">
              TDA Enterprises provides professional environmental, health, and safety (EHS) services
              including OSHA training and certification, safety audits and compliance assessments,
              equipment inspections, program development, hazard assessments, management consulting,
              and employee training and coaching. We serve manufacturing, construction, warehousing
              and logistics, and healthcare industries.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">3. User Accounts</h2>
            <p className="text-muted-foreground mb-3">To access certain features, you may need to create an account. You agree to:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Provide accurate and complete information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Notify us immediately of any unauthorized access</li>
              <li>Accept responsibility for all activities under your account</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">4. Acceptable Use</h2>
            <p className="text-muted-foreground mb-3">You agree not to:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Use the website for any unlawful purpose</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Interfere with or disrupt the website&apos;s operation</li>
              <li>Upload malicious code or content</li>
              <li>Violate any applicable laws or regulations</li>
              <li>Misrepresent your identity or affiliation with any person or entity</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">5. Professional Services Disclaimer</h2>
            <p className="text-muted-foreground">
              The information and materials provided by TDA Enterprises are for general informational
              and educational purposes. While we strive to provide accurate and current safety guidance,
              our services do not constitute legal advice. OSHA regulations and industry standards may
              change. Clients are responsible for verifying compliance with all applicable federal,
              state, and local regulations. TDA Enterprises is not liable for any regulatory citations
              or penalties that may result from a client&apos;s implementation (or failure to implement)
              of our recommendations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">6. Intellectual Property</h2>
            <p className="text-muted-foreground">
              All content, training materials, features, and functionality of this website are owned by
              TDA Enterprises and are protected by intellectual property laws. You may not copy, modify,
              distribute, or reproduce our content without prior written permission. Training materials
              provided to clients are licensed for internal use only and may not be redistributed.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">7. Privacy</h2>
            <p className="text-muted-foreground">
              Your use of our website is also governed by our{" "}
              <Link href="/privacy" className="text-primary hover:underline">
                Privacy Policy
              </Link>
              . Please review our Privacy Policy to understand how we collect, use, and protect your
              personal information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">8. Limitation of Liability</h2>
            <p className="text-muted-foreground">
              TDA Enterprises shall not be liable for any indirect, incidental, special, consequential,
              or punitive damages resulting from your use of or inability to use our website or services.
              Our total liability for any claim arising from these terms shall not exceed the amount you
              have paid us for services in the twelve (12) months preceding the claim.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">9. Third-Party Links</h2>
            <p className="text-muted-foreground">
              Our website may contain links to third-party websites or services. TDA Enterprises is not
              responsible for the content, privacy policies, or practices of any third-party websites.
              You access these links at your own risk.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">10. Changes to Terms</h2>
            <p className="text-muted-foreground">
              We reserve the right to modify these terms at any time. We will notify users of significant
              changes by posting the updated terms on this page with a revised date. Continued use of
              our website after changes constitutes acceptance of the updated terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">11. Governing Law</h2>
            <p className="text-muted-foreground">
              These terms shall be governed by and construed in accordance with the laws of the State of
              Tennessee, without regard to its conflict of law provisions. Any disputes arising under
              these terms shall be resolved in the courts located in Tennessee.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">12. Contact Us</h2>
            <p className="text-muted-foreground mb-2">
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <address className="not-italic text-muted-foreground">
              <strong>TDA Enterprises</strong>
              <br />
              P.O. Box 291521
              <br />
              Nashville, TN 37229
              <br />
              Email:{" "}
              <Link href="mailto:tdaentrprz@gmail.com" className="text-primary hover:underline">
                tdaentrprz@gmail.com
              </Link>
              <br />
              Phone:{" "}
              <Link href="tel:6156734323" className="text-primary hover:underline">
                615-673-4323
              </Link>
            </address>
          </section>
        </div>
      </div>
    </section>
  );
}
