import { Mail, Phone, MapPin } from "lucide-react";

export const metadata = {
  title: "Contact | TDA Enterprises",
  description: "Contact TDA Enterprises for professional EHS services, training, and free safety assessments.",
};

export default function BusinessContactPage() {
  return (
    <section className="py-16 md:py-24">
      <div className="container max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Contact TDA Enterprises</h1>
          <p className="text-lg text-muted-foreground">
            Reach out to discuss your safety needs, request a quote, or schedule a free assessment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="flex flex-col items-center text-center p-6 rounded-xl border bg-card">
            <Phone className="h-8 w-8 text-primary mb-4" />
            <h3 className="font-semibold mb-2">Phone</h3>
            <a href="tel:6156734323" className="text-muted-foreground hover:text-foreground">
              615-673-4323
            </a>
          </div>
          <div className="flex flex-col items-center text-center p-6 rounded-xl border bg-card">
            <Mail className="h-8 w-8 text-primary mb-4" />
            <h3 className="font-semibold mb-2">Email</h3>
            <a href="mailto:info@tdaenterprises.com" className="text-muted-foreground hover:text-foreground">
              info@tdaenterprises.com
            </a>
          </div>
          <div className="flex flex-col items-center text-center p-6 rounded-xl border bg-card">
            <MapPin className="h-8 w-8 text-primary mb-4" />
            <h3 className="font-semibold mb-2">Mailing Address</h3>
            <p className="text-muted-foreground">
              P.O. Box 291521<br />Nashville, TN 37229
            </p>
          </div>
        </div>

        <div className="rounded-2xl border bg-card p-8">
          <h2 className="text-2xl font-semibold mb-4">Request More Information</h2>
          <p className="text-muted-foreground">
            Use the portal or email us directly. Our team typically responds within 24-48 business
            hours.
          </p>
        </div>
      </div>
    </section>
  );
}
