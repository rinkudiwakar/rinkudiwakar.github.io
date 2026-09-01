import { JourneyStageItem } from "@/types/content";

export const journeyStages: JourneyStageItem[] = [
  {
    id: "curious",
    title: "Curious",
    label: "01 · Origin",
    period: "Early Years",
    summary: "Curiosity before technology.",
    description:
      "A broad interest in reading, sports, academics, and understanding how everyday systems and problems fit together.",
    keyMoments: [
      "Broad reading and academic interest",
      "Developing critical thinking and analytical habits",
      "Early inclination toward understanding 'why' and 'how'",
    ],
  },
  {
    id: "exploring",
    title: "Exploring",
    label: "02 · Discovery",
    period: "School to College",
    summary: "Discovering technology as a creative medium.",
    description:
      "Technology evolved from an external curiosity into an active domain for experimentation, logic, and self-taught exploration.",
    keyMoments: [
      "First exposure to programming and logical structures",
      "Experimenting with software tools and digital ideas",
      "Recognizing technology as an accessible problem-solving medium",
    ],
  },
  {
    id: "engineering",
    title: "Engineering",
    label: "03 · Foundation",
    period: "NIT Jalandhar",
    summary: "Rigorous academic and systems foundation.",
    description:
      "Electrical Engineering at NIT Jalandhar provided deep training in mathematics, circuits, systems thinking, and structured analysis.",
    keyMoments: [
      "Rigorous engineering coursework and analytical training",
      "Hardware, signals, and microcontrollers",
      "Transition toward software engineering and applied AI",
    ],
  },
  {
    id: "building",
    title: "Building",
    label: "04 · Execution",
    period: "Projects & Production",
    summary: "From theoretical code to real working systems.",
    description:
      "Taking ownership of end-to-end builds, hardware-software integrations like Kavach, and learning through failure and iteration.",
    keyMoments: [
      "Leading Kavach voice authentication hardware/software build",
      "Encountering security and motor integration failures",
      "Adopting the loop: Build → Break → Learn → Fix → Ship",
    ],
  },
  {
    id: "pradrix",
    title: "Pradrix",
    label: "05 · Current Chapter",
    period: "Present",
    summary: "Applied AI consulting and workflow automation.",
    description:
      "Building Pradrix to help businesses diagnose bottlenecks and implement purposeful, measurable AI workflows.",
    keyMoments: [
      "Diagnosing operational bottlenecks before applying AI",
      "Structuring client delivery frameworks and foundational systems",
      "Focusing on real business outcomes over superficial AI hype",
    ],
  },
];
