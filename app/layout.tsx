import type { Metadata } from "next";
import { Manrope, DM_Sans } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tdaenterprises.com"),
  title: {
    default: "TDA Enterprises | BLove First — Empowering Safety. Transforming Lives.",
    template: "%s | TDA Enterprises",
  },
  description:
    "TDA Enterprises provides professional environmental, health, and safety services. BLove First (B Love Foundation, Inc.) offers faith-based community outreach, youth enrichment, and occupational empowerment.",
  keywords: [
    "TDA Enterprises",
    "BLove First",
    "B Love Foundation",
    "EHS services",
    "OSHA training",
    "safety audits",
    "workplace safety",
    "environmental health and safety",
    "nonprofit outreach",
    "youth enrichment",
    "occupational empowerment",
    "community outreach",
  ],
  authors: [{ name: "TDA Enterprises / BLove First", url: "https://blovefirst.org" }],
  creator: "TDA Enterprises / BLove First",
  publisher: "TDA Enterprises / BLove First",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://tdaenterprises.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tdaenterprises.com",
    siteName: "TDA Enterprises | BLove First",
    title: "TDA Enterprises | BLove First — Empowering Safety. Transforming Lives.",
    description:
      "TDA Enterprises provides professional environmental, health, and safety services. BLove First offers faith-based community outreach, youth enrichment, and occupational empowerment.",
    images: [],
  },
  twitter: {
    card: "summary_large_image",
    title: "TDA Enterprises | BLove First",
    description:
      "TDA Enterprises provides professional environmental, health, and safety services. BLove First offers faith-based community outreach.",
    creator: "@tdaentrprz",
  },
  verification: {
    google: "your-google-verification-code",
  },
  category: "business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US" suppressHydrationWarning>
      <head>
        {/* Skip to main content link for keyboard users - WCAG 2.4.1 */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${manrope.variable} ${dmSans.variable} font-sans antialiased`}>
        {/* Skip to main content link - WCAG 2.4.1 Bypass Blocks */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
        >
          Skip to main content
        </a>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
