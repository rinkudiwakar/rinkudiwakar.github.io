import { StoryChapter } from "@/types/content";

export const storyChapters: StoryChapter[] = [
  {
    id: "origin",
    title: "Before Technology",
    subtitle: "It didn’t start with technology. It started with curiosity.",
    period: "Early Years",
    content: [
      "I was not born with an obsession for computers or circuits. In my early years, my curiosity was broad: reading, playing badminton, exploring how things worked around me, and taking academics seriously.",
      "Around the eighth grade, that general curiosity sharpened into a love for critical thinking, structured problem solving, and understanding underlying mechanisms.",
      "Technology was never an end in itself; it gradually became the most powerful canvas to test ideas and solve real problems.",
    ],
    keyInsight: "Curiosity came first; technology became the medium.",
  },
  {
    id: "engineering",
    title: "Electrical Engineering",
    subtitle: "Building the analytical foundation at NIT Jalandhar.",
    period: "College",
    content: [
      "My path to Electrical Engineering at NIT Jalandhar was shaped by academic ranking, institutional opportunity, and an eagerness to understand complex physical and mathematical systems.",
      "It was neither a lifelong singular obsession nor something I sought to escape. It provided a rigorous training ground in analytical thinking, mathematics, signals, and systems engineering.",
      "Over time, my interests naturally expanded toward software, data, and intelligent systems because software allowed the shortest distance between having an idea and making it real.",
    ],
    keyInsight: "Engineering gave me the discipline to understand complex systems.",
  },
  {
    id: "programming",
    title: "Programming as Building",
    subtitle: "From studying syntax to creating solutions.",
    period: "Exploration",
    content: [
      "Programming entered my life through coursework and self-directed exploration. But the real breakthrough happened when code stopped being an academic exercise and became a tool for construction.",
      "The loop became unmistakable: start with an idea, break it down into modular problems, learn what is missing, write the code, break it in testing, debug the failure, and see it actually run.",
      "That thrill of watching a concept come to life remains the heartbeat of everything I build.",
    ],
    keyInsight: "The turning point was shifting from writing code to building systems.",
  },
  {
    id: "first-build",
    title: "First Major Build: Kavach",
    subtitle: "Voice as a key — hardware, AI, real-world failure, and recovery.",
    period: "Signature Project",
    content: [
      "Kavach was my first production-grade project, built in a team of five. The problem was everyday and human: people forgetting their physical keys. The question was simple: 'What if AI could be the key?'",
      "We engineered an end-to-end prototype integrating voice authentication AI, a Raspberry Pi server, Arduino microcontrollers, and physical motor locks.",
      "During testing, we hit severe real-world failures — including a critical vulnerability where another voice speaking the keyword could trigger authentication. Debugging that failure and hardening the system taught me that real engineering happens at the edge cases.",
    ],
    keyInsight: "Building end-to-end means taking ownership of physical and software failures alike.",
  },
  {
    id: "pradrix-story",
    title: "Building Pradrix",
    subtitle: "Not AI everywhere. AI where it actually matters.",
    period: "Present Chapter",
    content: [
      "Today, businesses are inundated with ChatGPT, AI hype, and autonomous agents, but most struggle with a fundamental question: 'Where can AI actually save time, eliminate repetitive work, or improve operations?'",
      "I started Pradrix to bridge that gap. Rather than selling generic chatbots, Pradrix focuses on understanding the business first, diagnosing genuine operational bottlenecks, and designing targeted automation workflows.",
      "Pradrix is in its early foundation stage, building systems, developing client frameworks, and proving that clarity matters more than complexity.",
    ],
    keyInsight: "Understand the business workflow before writing a single line of AI code.",
  },
];
