import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://tdaenterprises.com";

  // Static pages
  const staticPages = [
    "",
    "/business",
    "/business/about",
    "/business/services",
    "/business/training",
    "/business/industries",
    "/business/case-studies",
    "/business/free-assessment",
    "/business/contact",
    "/foundation",
    "/foundation/about",
    "/foundation/programs",
    "/foundation/events",
    "/foundation/give-love",
    "/foundation/community-partners",
    "/foundation/contact",
    "/privacy",
    "/terms",
    "/accessibility",
  ];

  const staticSitemap: MetadataRoute.Sitemap = staticPages.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1 : route.startsWith("/business") || route.startsWith("/foundation") ? 0.9 : 0.8,
  }));

  // Service pages with higher priority
  const servicePages = [
    { url: `${baseUrl}/business/services/osha-training`, priority: 0.9 },
    { url: `${baseUrl}/business/services/safety-audits`, priority: 0.9 },
    { url: `${baseUrl}/business/services/program-development`, priority: 0.9 },
    { url: `${baseUrl}/business/services/equipment-inspection`, priority: 0.9 },
    { url: `${baseUrl}/business/services/hazard-assessment`, priority: 0.8 },
    { url: `${baseUrl}/business/services/management-consulting`, priority: 0.8 },
    { url: `${baseUrl}/business/services/employee-observations`, priority: 0.8 },
    { url: `${baseUrl}/business/services/training-coaching`, priority: 0.8 },
    { url: `${baseUrl}/business/services/industry-specific-solutions`, priority: 0.8 },
    // Training pages
    { url: `${baseUrl}/business/training/first-aid-cpr-aed`, priority: 0.8 },
    { url: `${baseUrl}/business/training/aerial-work-platform`, priority: 0.8 },
    { url: `${baseUrl}/business/training/bloodborne-pathogens`, priority: 0.8 },
    { url: `${baseUrl}/business/training/osha-10-construction`, priority: 0.8 },
    { url: `${baseUrl}/business/training/osha-10-general-industry`, priority: 0.8 },
    { url: `${baseUrl}/business/training/osha-30-construction`, priority: 0.8 },
    // Industry pages
    { url: `${baseUrl}/business/industries/manufacturing`, priority: 0.8 },
    { url: `${baseUrl}/business/industries/construction`, priority: 0.8 },
    { url: `${baseUrl}/business/industries/warehousing-logistics`, priority: 0.8 },
    { url: `${baseUrl}/business/industries/healthcare`, priority: 0.8 },
    // Foundation program pages
    { url: `${baseUrl}/foundation/programs/youth-enrichment`, priority: 0.9 },
    { url: `${baseUrl}/foundation/programs/occupational-empowerment`, priority: 0.9 },
    { url: `${baseUrl}/foundation/programs/supportive-services`, priority: 0.9 },
    { url: `${baseUrl}/foundation/programs/environmental-health-safety`, priority: 0.9 },
  ];

  const serviceSitemap: MetadataRoute.Sitemap = servicePages.map((page) => ({
    url: page.url,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: page.priority,
  }));

  return [...staticSitemap, ...serviceSitemap];
}
