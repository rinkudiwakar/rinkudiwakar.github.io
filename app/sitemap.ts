import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo/metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/story",
    "/work",
    "/work/kavach",
    "/pradrix",
    "/now",
    "/activity",
    "/thinking",
    "/about",
    "/resume",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: route === "" || route === "/now" || route === "/activity" ? "daily" : "monthly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}
