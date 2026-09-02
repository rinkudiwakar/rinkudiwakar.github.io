import { describe, it, expect } from "vitest";
import { constructMetadata, siteConfig } from "@/lib/seo/metadata";
import { getPersonStructuredData } from "@/lib/seo/structured-data";
import sitemap from "@/app/sitemap";
import robots from "@/app/robots";

describe("SEO & Discoverability System", () => {
  it("constructs canonical metadata with OpenGraph and Twitter tags", () => {
    const meta = constructMetadata({
      title: "Custom Title",
      description: "Custom Description",
      canonicalUrl: "/test-route",
    });

    expect(meta.description).toBe("Custom Description");
    expect(meta.alternates?.canonical).toBe(`${siteConfig.url}/test-route`);
    expect(meta.openGraph?.url).toBe(`${siteConfig.url}/test-route`);
    expect(meta.openGraph?.siteName).toBe("Rinku Diwakar");
    expect((meta.twitter as { card?: string })?.card).toBe("summary_large_image");
  });

  it("generates valid Person and WebSite JSON-LD structured data", () => {
    const jsonLd = getPersonStructuredData();

    expect(jsonLd["@context"]).toBe("https://schema.org");
    expect(jsonLd["@graph"].length).toBe(2);

    const person = jsonLd["@graph"].find((item) => item["@type"] === "Person");
    expect(person?.name).toBe("Rinku Diwakar");
    expect(person?.affiliation?.name).toContain("National Institute of Technology");
    expect(person?.founder?.name).toBe("Pradrix");

    const website = jsonLd["@graph"].find((item) => item["@type"] === "WebSite");
    expect(website?.name).toContain("Rinku Diwakar");
  });

  it("generates complete sitemap including all core routes and project case studies", () => {
    const sitemapEntries = sitemap();
    const urls = sitemapEntries.map((e) => e.url);

    expect(urls).toContain(`${siteConfig.url}`);
    expect(urls).toContain(`${siteConfig.url}/story`);
    expect(urls).toContain(`${siteConfig.url}/work`);
    expect(urls).toContain(`${siteConfig.url}/work/kavach`);
    expect(urls).toContain(`${siteConfig.url}/work/skillgap-ai`);
    expect(urls).toContain(`${siteConfig.url}/work/nanotrade`);
    expect(urls).toContain(`${siteConfig.url}/pradrix`);
    expect(urls).toContain(`${siteConfig.url}/now`);
    expect(urls).toContain(`${siteConfig.url}/activity`);
    expect(urls).toContain(`${siteConfig.url}/thinking`);
    expect(urls).toContain(`${siteConfig.url}/about`);
    expect(urls).toContain(`${siteConfig.url}/resume`);
    expect(urls).toContain(`${siteConfig.url}/contact`);
    expect(urls).toContain(`${siteConfig.url}/dev`);
  });

  it("generates robots.txt pointing to canonical sitemap", () => {
    const robotsConfig = robots();

    expect(robotsConfig.rules).toBeDefined();
    expect(robotsConfig.sitemap).toBe(`${siteConfig.url}/sitemap.xml`);
  });
});
