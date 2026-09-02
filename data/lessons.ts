import { Lesson } from "@/types/content";

export const lessonsData: Lesson[] = [
  {
    id: "lesson-building-vs-coding",
    title: "Building is Different from Coding",
    category: "building",
    principle: "A working program is not automatically a useful product.",
    context:
      "Real building requires understanding the human problem, making difficult technical trade-offs, handling real failure modes, integrating disparate systems, and measuring whether anyone actually benefits.",
    learnings: [
      "Understand the real user and operational problem before choosing technologies.",
      "Anticipate integration failures and design defensive fallbacks for physical and digital edge cases.",
      "A build is only complete when it survives stress in production conditions.",
    ],
  },
  {
    id: "lesson-start-before-ready",
    title: "You Don't Need to Know Everything Before Starting",
    category: "personal",
    principle: "Start before you feel completely ready.",
    context:
      "Waiting to learn everything before writing a single line leads to endless delay. The loop that works is: Start → Discover what you don't know → Learn → Ask → Build → Fix.",
    learnings: [
      "Action clarifies what textbooks and documentation obscure.",
      "Embrace constructive breakage as the fastest diagnostic feedback loop.",
      "Ask precise questions and learn tools in the direct context of building.",
    ],
  },
  {
    id: "lesson-ownership",
    title: "Ownership Accelerates Learning",
    category: "personal",
    principle: "Growth happens when you take responsibility without having every answer available.",
    context:
      "Some of my strongest technical growth occurred during Kavach and complex ML pipelines where no one had pre-packaged solutions. Taking total ownership forces you to handle uncertainty and learn while building.",
    learnings: [
      "Take responsibility for end-to-end outcomes, not just isolated subtasks.",
      "Handle uncertainty with structured first-principles experimentation.",
      "Be honest about what you don't know, and ask for help when necessary.",
    ],
  },
  {
    id: "lesson-focus-depth",
    title: "Focus Creates Depth (Activity vs Progress)",
    category: "failure",
    principle: "Doing ten things badly can feel productive while doing one important thing deeply actually moves you forward.",
    context:
      "My biggest personal failure was trying to do too many things simultaneously — learning 10 technologies, chasing scattered opportunities, and opening endless tabs. Focus taught me that true progress is measured by taking something from idea to working reality.",
    learnings: [
      "Prioritize ruthless depth over shallow, scattered breadth.",
      "Finish, test, and ship one system before switching contexts.",
      "Stop switching too early; real mastery lives in the final 20% of difficult polish.",
    ],
  },
];
