import { BuildLogEntry } from "@/types/content";

export const buildLogData: BuildLogEntry[] = [
  {
    id: "log-01",
    date: "2026-08-25",
    title: "Initiated Living Builder’s Journal Architecture",
    summary:
      "Drafted product and technical requirements for rinkudiwakar.me, establishing an editorial-first storytelling experience combined with an optional developer filesystem mode.",
    category: "Architecture",
    relatedContent: ["/story", "/about"],
    published: true,
  },
  {
    id: "log-02",
    date: "2026-08-29",
    title: "Pradrix 8-Stage Diagnostic Process Structured",
    summary:
      "Defined the core philosophy of 'Not AI everywhere. AI where it actually matters.' Codified the operational audit steps from discovery to telemetry measurement.",
    category: "Pradrix",
    relatedContent: ["/pradrix"],
    published: true,
  },
  {
    id: "log-03",
    date: "2026-09-01",
    title: "Foundation Setup & Type-Safe Content Schemas",
    summary:
      "Implemented Next.js App Router, Tailwind tokens, Zod validation models, and automated Vitest verification suites.",
    category: "Engineering",
    relatedContent: ["/now"],
    published: true,
  },
];
