import type { Metadata } from "next";

export const siteConfig = {
  name: "Rinku Diwakar",
  title: "Rinku Diwakar — Builder, Engineer, Explorer",
  tagline: "I like turning “WHAT IF?” into “IT ACTUALLY WORKS.”",
  description:
    "The living builder’s journal of Rinku Diwakar. Building software, AI systems, and products around real problems. Currently building Pradrix.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://rinkudiwakar.me",
  ogImage: "/images/og-image.png",
  links: {
    github: "https://github.com/rinkudiwakar",
    linkedin: "https://linkedin.com/in/rinkudiwakar",
  },
};

export function constructMetadata({
  title = siteConfig.title,
  description = siteConfig.description,
  image = siteConfig.ogImage,
  canonicalUrl,
}: {
  title?: string;
  description?: string;
  image?: string;
  canonicalUrl?: string;
} = {}): Metadata {
  const url = canonicalUrl
    ? `${siteConfig.url}${canonicalUrl}`
    : siteConfig.url;

  return {
    title: {
      default: title,
      template: `%s | Rinku Diwakar`,
    },
    description,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "Rinku Diwakar",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
