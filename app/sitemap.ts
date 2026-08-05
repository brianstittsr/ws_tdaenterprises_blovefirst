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
