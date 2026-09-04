import Link from "next/link";
import Image from "next/image";
import { Shield, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "TDA Enterprise | BLove First",
  description:
    "Professional EHS services from TDA Enterprise and faith-based community outreach from BLove First (B Love Foundation, Inc.).",
};

export default function HomePage() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 py-16 bg-background">
      <div className="text-center mb-12 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
          Empowering Safety. Transforming Lives.
        </h1>
        <p className="text-lg text-muted-foreground">
          Choose the path that fits your needs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        <Link
          href="/business"
          className="group relative overflow-hidden rounded-2xl border bg-card p-8 transition-all hover:shadow-lg hover:border-primary"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
          <div className="relative z-10 flex flex-col h-full">
            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Shield className="h-7 w-7" />
            </div>
            <h2 className="text-2xl font-bold mb-2">TDA Enterprise</h2>
            <p className="text-muted-foreground mb-6 flex-1">
              Professional environmental, health, and safety services for businesses. OSHA training,
              safety audits, program development, and equipment inspections.
            </p>
            <Button className="w-full" asChild>
              <span>Explore EHS Services</span>
            </Button>
          </div>
        </Link>

        <Link
          href="/foundation"
          className="group relative overflow-hidden rounded-2xl border bg-card p-8 transition-all hover:shadow-lg hover:border-primary"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
          <div className="relative z-10 flex flex-col h-full">
            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 overflow-hidden">
              <Image
                src="/images/blove-logo.jpg"
                alt="B Love Foundation Logo"
                width={56}
                height={56}
                className="h-14 w-14 rounded-xl object-cover"
              />
            </div>
            <h2 className="text-2xl font-bold mb-2">BLove First</h2>
            <p className="text-muted-foreground mb-6 flex-1">
              B Love Foundation, Inc. Faith-based outreach, youth enrichment, occupational
              empowerment, and supportive services for under-represented citizens.
            </p>
            <Button className="w-full" variant="secondary" asChild>
              <span>Support Our Mission</span>
            </Button>
          </div>
        </Link>
      </div>
    </div>
  );
}

