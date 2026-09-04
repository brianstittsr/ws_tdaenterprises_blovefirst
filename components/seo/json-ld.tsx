import Script from "next/script";

// Organization Schema
export function OrganizationJsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "TDA Enterprise / B Love Foundation, Inc.",
    alternateName: "TDA Enterprise | BLove First",
    url: "https://tdaenterprises.com",
    logo: "https://tdaenterprises.com/images/TDA_Enterprise_vector_logo.svg",
    description:
      "TDA Enterprise provides professional environmental, health, and safety services. BLove First (B Love Foundation, Inc.) offers faith-based community outreach, youth enrichment, and occupational empowerment.",
    foundingDate: "2020",
    address: {
      "@type": "PostalAddress",
      addressCountry: "US",
      addressRegion: "TN",
      addressLocality: "Nashville",
      postalCode: "37229",
      streetAddress: "P.O. Box 291521",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+1-615-673-4323",
        contactType: "sales",
        availableLanguage: ["English"],
      },
      {
        "@type": "ContactPoint",
        email: "tdaentrprz@gmail.com",
        contactType: "customer service",
      },
    ],
    sameAs: [
      "https://www.linkedin.com/company/tda-enterprises",
      "https://www.instagram.com/tdaentrprz",
      "https://www.facebook.com/blovefirst",
    ],
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    knowsAbout: [
      "Environmental Health and Safety",
      "OSHA Training",
      "Safety Audits",
      "Workplace Safety",
      "Community Outreach",
      "Youth Enrichment",
      "Occupational Empowerment",
      "Nonprofit Services",
    ],
  };

  return (
    <Script
      id="organization-jsonld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
    />
  );
}

// Local Business Schema (for local SEO)
export function LocalBusinessJsonLd() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "TDA Enterprise",
    image: "https://tdaenterprises.com/images/TDA_Enterprise_vector_logo.svg",
    url: "https://tdaenterprises.com",
    telephone: "+1-615-673-4323",
    email: "tdaentrprz@gmail.com",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressCountry: "US",
      addressRegion: "TN",
      addressLocality: "Nashville",
      postalCode: "37229",
      streetAddress: "P.O. Box 291521",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 36.1627,
      longitude: -86.7816,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "17:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "47",
    },
  };

  return (
    <Script
      id="localbusiness-jsonld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
    />
  );
}

// Service Schema
interface ServiceJsonLdProps {
  name: string;
  description: string;
  url: string;
  provider?: string;
  areaServed?: string;
}

export function ServiceJsonLd({
  name,
  description,
  url,
  provider = "TDA Enterprise",
  areaServed = "United States",
}: ServiceJsonLdProps) {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    provider: {
      "@type": "Organization",
      name: provider,
      url: "https://tdaenterprises.com",
    },
    areaServed: {
      "@type": "Country",
      name: areaServed,
    },
    serviceType: "Environmental Health and Safety Services",
  };

  return (
    <Script
      id={`service-jsonld-${name.toLowerCase().replace(/\s+/g, "-")}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
    />
  );
}

// FAQ Schema
interface FAQItem {
  question: string;
  answer: string;
}

interface FAQJsonLdProps {
  faqs: FAQItem[];
}

export function FAQJsonLd({ faqs }: FAQJsonLdProps) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <Script
      id="faq-jsonld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
  );
}

// Breadcrumb Schema
interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbJsonLdProps {
  items: BreadcrumbItem[];
}

export function BreadcrumbJsonLd({ items }: BreadcrumbJsonLdProps) {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <Script
      id="breadcrumb-jsonld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
    />
  );
}

// Article/Blog Schema
interface ArticleJsonLdProps {
  title: string;
  description: string;
  url: string;
  image: string;
  datePublished: string;
  dateModified: string;
  authorName: string;
}

export function ArticleJsonLd({
  title,
  description,
  url,
  image,
  datePublished,
  dateModified,
  authorName,
}: ArticleJsonLdProps) {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url,
    image,
    datePublished,
    dateModified,
    author: {
      "@type": "Person",
      name: authorName,
    },
    publisher: {
      "@type": "Organization",
      name: "TDA Enterprise / B Love Foundation, Inc.",
      logo: {
        "@type": "ImageObject",
        url: "https://tdaenterprises.com/images/TDA_Enterprise_vector_logo.svg",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };

  return (
    <Script
      id="article-jsonld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
    />
  );
}

// WebSite Schema with SearchAction
export function WebsiteJsonLd() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "TDA Enterprise | BLove First",
    alternateName: "TDA Enterprise / B Love Foundation, Inc.",
    url: "https://tdaenterprises.com",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://tdaenterprises.com/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <Script
      id="website-jsonld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
    />
  );
}

