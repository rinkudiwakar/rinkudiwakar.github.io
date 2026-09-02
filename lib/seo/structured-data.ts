import { siteConfig } from "./metadata";
import { profileData } from "@/data/profile";

/**
 * Generate Person & WebSite JSON-LD structured data.
 */
export function getPersonStructuredData() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteConfig.url}/#person`,
        name: profileData.name,
        url: siteConfig.url,
        jobTitle: "Builder & Founder",
        description: profileData.coreIdentity,
        alumniOf: {
          "@type": "EducationalOrganization",
          name: profileData.education.institution,
          url: "https://www.nitj.ac.in",
        },
        founder: {
          "@type": "Organization",
          name: "Pradrix",
          url: `${siteConfig.url}/pradrix`,
          description: "AI × Automation × Operational Systems Consulting",
        },
        sameAs: profileData.socialLinks.map((link) => link.url),
        knowsAbout: [
          "Electrical Engineering",
          "Applied Artificial Intelligence",
          "Workflow Automation",
          "Internet of Things (IoT)",
          "Embedded Hardware Systems",
          "TypeScript",
          "Python",
          "Next.js",
          "FastAPI",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: "Rinku Diwakar — Living Builder’s Journal",
        description: siteConfig.description,
        publisher: {
          "@id": `${siteConfig.url}/#person`,
        },
      },
    ],
  };
}
