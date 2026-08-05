import { Mail, Phone, MapPin } from "lucide-react";

export const metadata = {
  title: "Contact | BLUV First",
  description: "Contact BLUV First (B Love Foundation, Inc.) for donations, partnerships, volunteer opportunities, and program information.",
};

export default function FoundationContactPage() {
  return (
    <section className="py-16 md:py-24">
      <div className="container max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Contact BLUV First</h1>
          <p className="text-lg text-muted-foreground">
            We would love to hear from you. Reach out to learn more about our programs, events,
            volunteer opportunities, and partnership options.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
            <a href="mailto:blovefoundation@yahoo.com" className="text-muted-foreground hover:text-foreground">
              blovefoundation@yahoo.com
            </a>
          </div>
          <div className="flex flex-col items-center text-center p-6 rounded-xl border bg-card">
            <MapPin className="h-8 w-8 text-primary mb-4" />
            <h3 className="font-semibold mb-2">Mailing Address</h3>
            <p className="text-muted-foreground">
              B Love Foundation, Inc.<br />
              P.O. Box 291521<br />
              Nashville, TN 37229
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
