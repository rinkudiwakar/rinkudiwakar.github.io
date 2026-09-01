import { describe, it, expect } from "vitest";
import { cn } from "@/lib/utils/cn";
import { constructMetadata, siteConfig } from "@/lib/seo/metadata";

describe("Foundation Utilities & Metadata", () => {
  describe("cn utility", () => {
    it("merges class names correctly without duplicates", () => {
      const result = cn("px-2 py-1", "px-4", { "bg-red-500": true, "text-white": false });
      expect(result).toBe("py-1 px-4 bg-red-500");
    });
  });

  describe("SEO Metadata Constructor", () => {
    it("returns canonical defaults", () => {
      const metadata = constructMetadata();
      expect(metadata.title).toEqual({
        default: siteConfig.title,
        template: "%s | Rinku Diwakar",
      });
      expect(metadata.description).toBe(siteConfig.description);
    });

    it("constructs page-specific metadata with canonical URL", () => {
      const metadata = constructMetadata({
        title: "Kavach Case Study",
        description: "Signature build case study.",
        canonicalUrl: "/work/kavach",
      });
      expect(metadata.alternates?.canonical).toBe(
        "https://rinkudiwakar.me/work/kavach"
      );
    });
  });
});
