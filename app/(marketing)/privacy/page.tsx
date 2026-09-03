import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | TDA Enterprises",
  description: "Privacy Policy for TDA Enterprises platform and EHS services.",
};

export default function PrivacyPage() {
  return (
    <section className="py-12 md:py-16">
      <div className="container max-w-4xl">
        <Button variant="ghost" asChild className="mb-8">
          <Link href="/">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
        </Button>

        <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-muted-foreground mb-8">Last updated: September 2025</p>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-3">1. Introduction</h2>
            <p className="text-muted-foreground">
              TDA Enterprises (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) respects your privacy
              and is committed to protecting your personal data. This privacy policy explains how we
              collect, use, and safeguard your information when you use our website and services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">2. Information We Collect</h2>
            <p className="text-muted-foreground mb-3">We may collect the following types of information:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li><strong>Personal Information:</strong> Name, email address, phone number, company name, and job title provided through our contact form or during service engagement</li>
              <li>Account Information: Login credentials and account preferences for portal access</li>
              <li>Usage Data: Information about how you navigate and use our website</li>
              <li>Technical Data: IP address, browser type, and device information collected automatically</li>
              <li>Service Records: Training attendance records, audit results, and inspection reports created during client engagements</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">3. How We Use Your Information</h2>
            <p className="text-muted-foreground mb-3">We use your information to:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Provide and maintain our EHS services, including training, audits, and inspections</li>
              <li>Process your contact form submissions and service requests</li>
              <li>Send you important updates, training schedules, and communications</li>
              <li>Maintain training records and certification documentation</li>
              <li>Improve our website and service offerings</li>
              <li>Comply with legal and regulatory obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">4. Legal Basis for Processing</h2>
            <p className="text-muted-foreground">
              We process your personal data based on: your consent (when you submit our contact form or
              register for an account); our legitimate business interests (providing services you have
              requested); and compliance with legal obligations (maintaining training records as required
              by OSHA and other regulatory bodies).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">5. Data Sharing and Disclosure</h2>
            <p className="text-muted-foreground mb-3">
              We do not sell your personal information. We may share your data with:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Service providers who support our operations (e.g., email delivery, hosting)</li>
              <li>Regulatory agencies when required by law (e.g., OSHA training records)</li>
              <li>Your employer, if training or services were arranged through your company</li>
              <li>Legal authorities in response to a valid subpoena or court order</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">6. Data Security</h2>
            <p className="text-muted-foreground">
              We implement appropriate technical and organizational measures to protect your personal data
              against unauthorized access, alteration, disclosure, or destruction. These measures include
              encrypted data transmission, secure cloud storage, access controls, and regular security
              reviews. However, no method of transmission over the internet is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">7. Data Retention</h2>
            <p className="text-muted-foreground">
              We retain your personal information only as long as necessary to fulfill the purposes
              outlined in this policy, unless a longer retention period is required by law. Training
              records and certification documentation may be retained for up to five (5) years as
              required by OSHA regulations. Contact form submissions are retained for up to three (3)
              years.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">8. Your Rights</h2>
            <p className="text-muted-foreground mb-3">You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Access your personal data and receive a copy of it</li>
              <li>Correct inaccurate or incomplete data</li>
              <li>Request deletion of your data (subject to legal retention requirements)</li>
              <li>Object to or restrict the processing of your data</li>
              <li>Request data portability</li>
              <li>Withdraw consent at any time (where processing is based on consent)</li>
            </ul>
            <p className="text-muted-foreground mt-3">
              To exercise any of these rights, please contact us using the information in Section 10.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">9. Cookies and Tracking</h2>
            <p className="text-muted-foreground">
              Our website uses cookies and similar technologies to improve your browsing experience,
              analyze website traffic, and understand how visitors use our site. You can control cookies
              through your browser settings. We do not use cookies for targeted advertising.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">10. Contact Us</h2>
            <p className="text-muted-foreground mb-2">
              If you have any questions about this Privacy Policy or wish to exercise your data protection
              rights, please contact us at:
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

          <section>
            <h2 className="text-2xl font-semibold mb-3">11. Changes to This Policy</h2>
            <p className="text-muted-foreground">
              We may update this Privacy Policy from time to time. We will notify you of any changes by
              posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date.
              We encourage you to review this policy periodically.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
