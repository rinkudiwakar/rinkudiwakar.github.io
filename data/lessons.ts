import { Lesson } from "@/types/content";

export const lessonsData: Lesson[] = [
  {
    id: "lesson-focus",
    title: "Activity vs Meaningful Progress",
    category: "failure",
    principle: "Being busy is not the same as making meaningful progress.",
    context:
      "Early on, I tried to learn multiple technologies, pursue scattered opportunities, and start numerous projects at once. The result was high effort without deep mastery or completed systems.",
    learnings: [
      "Prioritize ruthless depth over shallow breadth.",
      "Finish and ship projects before context-switching.",
      "True momentum comes from completed loops, not open tabs.",
    ],
  },
  {
    id: "lesson-engineering",
    title: "Building is More Than Working Code",
    category: "technical",
    principle: "Building is not just writing code that works.",
    context:
      "Real-world systems, especially physical-digital integrations like Kavach, fail at the seams — power drops, acoustic interference, misaligned user assumptions, and edge-case security vulnerabilities.",
    learnings: [
      "Understand the real human problem before choosing the tech stack.",
      "Anticipate integration failures and design defensive fallbacks.",
      "A feature isn't complete until it survives stress in production conditions.",
    ],
  },
  {
    id: "lesson-ownership",
    title: "Ownership Before Certainty",
    category: "personal",
    principle: "Growth comes from taking ownership before having everything figured out.",
    context:
      "Waiting for perfect information or complete confidence stalls execution. The most meaningful learning occurred when taking responsibility for ambitious builds without knowing all the answers upfront.",
    learnings: [
      "Start with first principles and learn required tools along the way.",
      "Embrace constructive failure as the fastest diagnostic signal.",
      "Ask precise questions and iterate transparently.",
    ],
  },
];
