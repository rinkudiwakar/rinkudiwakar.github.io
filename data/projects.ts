import { Project } from "@/types/content";

export const projectsData: Project[] = [
  {
    slug: "kavach",
    title: "Kavach",
    tagline: "AI-powered voice authentication physical door lock system.",
    status: "completed",
    categories: ["AI", "Hardware", "IoT", "Software"],
    featured: true,
    problem:
      "Physical keys are prone to loss, theft, and unauthorized copying. Traditional contact biometrics require dedicated optical hardware and physical contact.",
    idea: "Turn human voice into a biometric key by combining deep learning speaker verification with Raspberry Pi and Arduino motor actuation.",
    story:
      "Built as a 5-person engineering team at NIT Jalandhar. Kavach integrated a local web client for voice registration, an AI biometric authentication pipeline, and an Arduino-driven physical motor assembly. Real-world edge cases like motor voltage drops and keyword trigger security flaws demanded rigorous debugging and end-to-end systems ownership.",
    role: "Core Team Member — AI pipeline, system integration, and hardware interfacing.",
    teamSize: 5,
    outcome:
      "Fully functional demonstration prototype achieving real-time speaker voice authentication and mechanical deadbolt actuation.",
    lessons: [
      "Hardware-software boundaries require defensive engineering and isolated power design.",
      "Software simulations do not reveal real-world acoustic and environmental noise edge cases.",
      "End-to-end building means taking ownership from the user prompt to the physical actuator.",
    ],
    technologies: [
      "Python",
      "PyTorch / AI Voice Recognition",
      "Raspberry Pi",
      "Arduino C++",
      "Embedded Hardware & Motors",
      "IoT Protocols",
    ],
    architecture:
      "Microphone Array → Local Audio Preprocessing → AI Biometric Model → Raspberry Pi Server → Serial Protocol → Arduino Microcontroller → Motor Driver → Physical Lock",
    repositoryUrl: "https://github.com/rinkudiwakar",
    proofIds: ["proof-kavach-nitj", "proof-kavach-repo"],
  },
  {
    slug: "skillgap-ai",
    title: "SkillGap AI",
    tagline: "Intelligent curriculum and professional skill gap analysis engine.",
    status: "completed",
    categories: ["AI", "Software", "NLP", "Product"],
    featured: true,
    problem:
      "Academic curricula and individual skill trajectories often lag behind fast-moving industry requirements, leaving students and professionals unaware of critical capability gaps.",
    idea: "Use NLP and semantic embeddings to analyze job market demand against user profiles and educational syllabi to pinpoint precise, actionable skill gaps.",
    story:
      "Developed to provide actionable intelligence for learners. The system maps real-world job specifications into skill taxonomy graphs, compares user competencies against dynamic market benchmarks, and generates prioritized learning roadmaps.",
    role: "Solo Builder / Architect.",
    outcome:
      "Validated taxonomy mapping engine providing structured gap analysis and personalized learning path recommendations.",
    lessons: [
      "Taxonomy design and data normalization are 80% of building useful semantic AI tools.",
      "Users need prioritized, actionable steps rather than exhaustive lists of shortcomings.",
    ],
    technologies: [
      "TypeScript",
      "Python",
      "NLP & Embeddings",
      "FastAPI",
      "Next.js",
      "Vector Search",
    ],
    architecture:
      "Job Market Dataset → NLP Entity Extraction → Skill Embedding Index → Profile Matcher → Gap Diagnostic Engine → Actionable Roadmap UI",
    repositoryUrl: "https://github.com/rinkudiwakar",
    proofIds: ["proof-skillgap-repo"],
  },
  {
    slug: "nanotrade",
    title: "NanoTrade",
    tagline: "Algorithmic market data processing and backtesting simulator.",
    status: "completed",
    categories: ["Software", "Data", "Quantitative Systems"],
    featured: true,
    problem:
      "Testing market trading strategies requires deterministic historical simulation, low-latency execution modeling, and strict risk control mechanisms without risking live capital.",
    idea: "Build a modular, fast backtesting engine to evaluate mathematical trading models and risk parameters against granular historical time-series data.",
    story:
      "Engineered to explore systems programming, quantitative data analysis, and deterministic event-driven architecture. The engine models slippage, order-book latency, and transaction fees across historical datasets.",
    role: "Solo Builder.",
    outcome:
      "Robust deterministic simulation environment capable of evaluating complex quantitative risk and momentum strategies.",
    lessons: [
      "Overfitting historical data is the primary trap of quantitative modeling.",
      "Deterministic event queues prevent subtle race conditions in stateful data pipelines.",
    ],
    technologies: [
      "Python",
      "Pandas & NumPy",
      "Event-Driven Architecture",
      "Time-Series Analysis",
      "Data Visualization",
    ],
    architecture:
      "Market Feed Normalizer → Event Queue → Strategy Execution Engine → Risk Management Filter → Performance & Drawdown Analytics",
    repositoryUrl: "https://github.com/rinkudiwakar",
    proofIds: ["proof-nanotrade-repo"],
  },
];
