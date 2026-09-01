export interface NowSectionItem {
  category: "building" | "learning" | "exploring" | "thinking";
  title: string;
  description: string;
  status: string;
  link?: {
    label: string;
    href: string;
  };
}

export interface NowData {
  lastUpdated: string;
  headline: string;
  summary: string;
  items: NowSectionItem[];
}

export const nowData: NowData = {
  lastUpdated: "2026-09-01",
  headline: "What I’m focused on right now.",
  summary:
    "A living log of my primary engineering builds, active studies, and operational focus.",
  items: [
    {
      category: "building",
      title: "Pradrix Operational AI Frameworks",
      description:
        "Developing structured business diagnostic audits and deterministic automation connectors to help growing companies eliminate repetitive operational choke points.",
      status: "Active Focus",
      link: {
        label: "Explore Pradrix",
        href: "/pradrix",
      },
    },
    {
      category: "building",
      title: "rinkudiwakar.me",
      description:
        "Building this living builder's journal with Next.js App Router, strict type validation, and an accessible dual-mode editorial/terminal experience.",
      status: "In Progress",
      link: {
        label: "View Story",
        href: "/story",
      },
    },
    {
      category: "learning",
      title: "Resilient Multi-Agent Orchestration",
      description:
        "Studying deterministic state machines and verification safeguards for autonomous LLM workflows in production.",
      status: "Ongoing Study",
    },
    {
      category: "thinking",
      title: "The Architecture of Real Leverage",
      description:
        "Analyzing why 80% of business automation value comes from robust data contracts rather than complex model prompting.",
      status: "Active Exploration",
    },
  ],
};
