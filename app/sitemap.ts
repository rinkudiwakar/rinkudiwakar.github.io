import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo/metadata";
import { getProjects } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const projects = getProjects();

  const staticRoutes = [
    "",
    "/story",
    "/work",
    "/pradrix",
    "/now",
    "/activity",
    "/thinking",
    "/about",
    "/resume",
    "/contact",
    "/dev",
  ];

  const projectRoutes = projects.map((p) => `/work/${p.slug}`);

  const allRoutes = [...staticRoutes, ...projectRoutes];

  return allRoutes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency:
      route === "" || route === "/now" || route === "/activity"
        ? "daily"
        : "monthly",
    priority: route === "" ? 1.0 : route.startsWith("/work/") ? 0.9 : 0.8,
  }));
}
