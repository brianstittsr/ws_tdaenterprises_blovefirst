/**
 * Brand configuration for the dual-site platform.
 *
 * TDA Enterprises = professional EHS business
 * BLove First = B Love Foundation, Inc. nonprofit
 */

export type BrandId = "tda" | "BLove";

export interface BrandConfig {
  id: BrandId;
  /** Public display name */
  name: string;
  /** Legal entity name */
  legalName: string;
  /** Short tagline */
  tagline: string;
  /** Full mission statement */
  mission: string;
  /** Primary domain for links/metadata */
  domain: string;
  /** Public routes */
  routes: {
    home: string;
    about: string;
    services: string;
    training?: string;
    industries?: string;
    caseStudies?: string;
    assessment?: string;
    contact: string;
    programs?: string;
    events?: string;
    getInvolved?: string;
    partners?: string;
  };
  /** Contact details */
  contact: {
    email: string;
    phone: string;
    address: string;
    cityState: string;
  };
  /** Social handles/links */
  social: {
    instagram?: string;
    facebook?: string;
    linkedin?: string;
    twitter?: string;
    youtube?: string;
  };
  /** CSS variable color names (must match globals.css) */
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    foreground: string;
  };
  /** Logo asset keys from Image Library */
  logos: {
    main: string;
    white?: string;
    dark?: string;
  };
}

export const tdaBrand: BrandConfig = {
  id: "tda",
  name: "TDA Enterprises",
  legalName: "TDA Enterprises",
  tagline: "Professional Environmental, Health & Safety Solutions",
  mission:
    "Delivering professional EHS services that reduce risk, ensure compliance, and protect your workforce.",
  domain: "https://tdaenterprises.com",
  routes: {
    home: "/business",
    about: "/business/about",
    services: "/business/services",
    training: "/business/training",
    industries: "/business/industries",
    caseStudies: "/business/case-studies",
    assessment: "/business/free-assessment",
    contact: "/business/contact",
  },
  contact: {
    email: "tdaentrprz@gmail.com",
    phone: "615-673-4323",
    address: "P.O. Box 291521",
    cityState: "Nashville, TN 37229",
  },
  social: {
    linkedin: "https://linkedin.com/company/tda-enterprises",
    instagram: "https://instagram.com/tdaentrprz",
  },
  colors: {
    primary: "tda-primary",
    secondary: "tda-secondary",
    accent: "tda-accent",
    background: "tda-background",
    foreground: "tda-foreground",
  },
  logos: {
    main: "logo-tda-main",
  },
};

export const BLoveBrand: BrandConfig = {
  id: "BLove",
  name: "BLove First",
  legalName: "B Love Foundation, Inc.",
  tagline: "Be love first! Let all that you do be done with love.",
  mission:
    "A faith-based, community-oriented charitable organization providing enrichment, empowerment, and outreach services to transitioning youth and adults.",
  domain: "https://blovefirst.org",
  routes: {
    home: "/foundation",
    about: "/foundation/about",
    services: "/foundation/programs",
    programs: "/foundation/programs",
    events: "/foundation/events",
    getInvolved: "/foundation/give-love",
    partners: "/foundation/community-partners",
    contact: "/foundation/contact",
  },
  contact: {
    email: "blovefoundation@yahoo.com",
    phone: "615-673-4323",
    address: "P.O. Box 291521",
    cityState: "Nashville, TN 37229",
  },
  social: {
    instagram: "https://instagram.com/tdaentrprz",
    facebook: "https://facebook.com/blovefirst",
  },
  colors: {
    primary: "BLove-primary",
    secondary: "BLove-secondary",
    accent: "BLove-accent",
    background: "BLove-background",
    foreground: "BLove-foreground",
  },
  logos: {
    main: "logo-BLove-main",
  },
};

export const brandsById: Record<BrandId, BrandConfig> = {
  tda: tdaBrand,
  BLove: BLoveBrand,
};

export function getBrand(brandId: BrandId): BrandConfig {
  return brandsById[brandId];
}
