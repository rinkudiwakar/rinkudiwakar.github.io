import { VFSDirectory } from "./types";
import { profileData } from "@/data/profile";
import { pradrixStatusData } from "@/data/pradrix";
import { nowData } from "@/data/now";

export const virtualFileSystem: VFSDirectory = {
  type: "directory",
  name: "",
  path: "/",
  children: {
    me: {
      type: "directory",
      name: "me",
      path: "/me",
      children: {
        "profile.ts": {
          type: "file",
          name: "profile.ts",
          path: "/me/profile.ts",
          language: "typescript",
          size: "1.4 KB",
          lastModified: "2026-09-02",
          content: `/**
 * Rinku Diwakar — Profile & Identity Record
 * "What if? -> It actually works."
 */
export const builder = {
  name: "${profileData.name}",
  headline: "${profileData.headline}",
  tagline: "${profileData.tagline}",
  coreIdentity: "${profileData.coreIdentity}",
  education: {
    degree: "${profileData.education.degree}",
    field: "${profileData.education.field}",
    institution: "${profileData.education.institution}",
    period: "${profileData.education.period || "2023 – 2027"}",
    cgpa: "${profileData.education.cgpa || "7.44"}",
  },
  currentFocus: {
    venture: "${profileData.currentFocus.name}",
    mission: "${profileData.currentFocus.description}",
  },
  social: {
    github: "https://github.com/rinkudiwakar",
    linkedin: "https://www.linkedin.com/in/rinkudiwakar/",
    medium: "https://rinkudiwakar.medium.com/",
    x: "https://x.com/_mrdiwakar",
    instagram: "https://instagram.com/_mrdiwakar",
  },
} as const;`,
        },
        "skills.ts": {
          type: "file",
          name: "skills.ts",
          path: "/me/skills.ts",
          language: "typescript",
          size: "1.2 KB",
          lastModified: "2026-09-02",
          content: `/**
 * Technical Competencies & Systems Tooling (content.md Section 07)
 */
export const technicalStack = {
  programming: ["Python", "C++", "SQL", "JavaScript", "TypeScript"],
  backendAndIntegration: ["FastAPI", "Flask", "REST APIs", "Celery", "Redis", "React.js"],
  aiAndMachineLearning: ["PyTorch", "TensorFlow", "Scikit-learn", "XGBoost", "Pandas", "NumPy"],
  generativeAI: [
    "RAG (Retrieval-Augmented Generation)",
    "Agentic AI",
    "LangChain",
    "Hugging Face Transformers",
    "OpenAI API",
    "Vector Databases",
    "Prompt Engineering",
  ],
  cloudAndMLOps: [
    "AWS (EC2, S3)",
    "Docker",
    "Kubernetes",
    "Amazon EKS",
    "GitHub Actions CI/CD",
    "MLflow",
    "DVC",
  ],
  databases: ["PostgreSQL", "MySQL", "MongoDB", "Supabase"],
  toolsAndEmbedded: ["Git", "Linux", "Raspberry Pi", "Arduino C++", "Postman", "VS Code"],
} as const;`,
        },
        "beliefs.ts": {
          type: "file",
          name: "beliefs.ts",
          path: "/me/beliefs.ts",
          language: "typescript",
          size: "950 B",
          lastModified: "2026-09-02",
          content: `/**
 * Core Operating Beliefs (content.md Section 54)
 */
export const beliefs = [
  "Build before you feel completely ready.",
  "Understand the problem before choosing the technology.",
  "Busy does not always mean progress.",
  "Real systems fail differently than tutorials.",
  "Finish things.",
  "Technology is a means, not the destination.",
  "Good ideas become interesting when they survive contact with reality.",
] as const;`,
        },
        "goals.ts": {
          type: "file",
          name: "goals.ts",
          path: "/me/goals.ts",
          language: "typescript",
          size: "720 B",
          lastModified: "2026-09-02",
          content: `/**
 * Directional Goals (content.md Section 34 & 35)
 */
export const futureDirection = {
  statement:
    "Become really good at building — technically, creatively, and eventually as an entrepreneur — and use that ability to create things that matter.",
  pillars: [
    "Technical Depth (AI systems, MLOps, low-latency backends, embedded IoT)",
    "Product Thinking (user ergonomics, problem diagnostics, workflow design)",
    "Entrepreneurial Execution (Pradrix AI consulting & automation)",
  ],
} as const;`,
        },
        "experience.log": {
          type: "file",
          name: "experience.log",
          path: "/me/experience.log",
          language: "text",
          size: "1.1 KB",
          lastModified: "2026-09-02",
          content: `[2023 – 2027] B.Tech in Electrical Engineering, NIT Jalandhar (CGPA: 7.44)
[2024] Data Science Intern @ CourseVita (50,000+ records data preprocessing & EDA)
[2024] Kavach: Built AI voice-authenticated smart lock (5-person team, Resemblyzer + Pi/Arduino)
[2024] Winner, ImaGenAI Innovation Challenge (IIT Delhi) | 3rd Place, What If Ideation (IIT Ropar)
[2025] Data Analytics & ML Intern @ TS Bridge (Bike demand prediction ML, 91% accuracy, AWS/MLflow/DVC)
[2025] SkillGap AI: Built semantic NLP & RAG curriculum-to-job fit diagnostic engine
[2025] NanoTrade: Engineered event-driven real-time paper trading engine with C++ matching
[2025] MovieSentiment: Automated MLOps deployment pipeline on Kubernetes / Amazon EKS
[2025 – Present] President, SEED Society (30+ members) & Co-Head, IIC @ NIT Jalandhar
[2026 – Present] Pradrix: Founded AI consulting and operational workflow automation company
[NOW]  Building rinkudiwakar.me Living Builder's Journal & scaling Pradrix workflows`,
        },
      },
    },
    story: {
      type: "directory",
      name: "story",
      path: "/story",
      children: {
        "origin.md": {
          type: "file",
          name: "origin.md",
          path: "/story/origin.md",
          language: "markdown",
          size: "1.2 KB",
          lastModified: "2026-09-02",
          content: `# Origin: It Started with Curiosity

It didn't start with technology. It started with curiosity.

I wasn't the kid who knew at ten that he wanted to become a software engineer.

I was interested in understanding things: reading, playing badminton, looking around, and asking questions:
- Why does this work?
- Why does this fail?
- Could this be done differently?
- What happens if I change this?
- Can I make something myself?

Electrical Engineering at NIT Jalandhar provided the analytical foundation in mathematics, circuits, and systems thinking.

Technology became the most powerful canvas I found to turn questions into experiments, and experiments into things that actually work.`,
        },
        "curiosity.md": {
          type: "file",
          name: "curiosity.md",
          path: "/story/curiosity.md",
          language: "markdown",
          size: "890 B",
          lastModified: "2026-09-02",
          content: `# The Five Stages of Evolution

01 · CURIOUS: Learning how to ask better questions.
02 · EXPLORING: Trying different things instead of deciding too early what I was supposed to become.
03 · ENGINEERING: Learning to think in systems at NIT Jalandhar.
04 · BUILDING: Turning ideas into things that can actually break and iterate.
05 · PRADRIX: Thinking beyond technology and asking whether what I build is actually useful.`,
        },
        "first-build.md": {
          type: "file",
          name: "first-build.md",
          path: "/story/first-build.md",
          language: "markdown",
          size: "1.4 KB",
          lastModified: "2026-09-02",
          content: `# Kavach: The First Real Build

"What if AI could become the key?"

Five students. A door. A Raspberry Pi. An Arduino. A motor. A microphone.

## The Reality:
Hardware does not behave like a diagram. Motors draw stall current, acoustic noise distorts voice features, and servers fail.

## The Critical Security Bug:
When an unauthorized speaker uttered the identical keyword, early keyword matching allowed access.

## The Debugging & Resolution:
We separated keyword recognition from speaker biometric verification:
1. Vosk speech-to-text handles phrase detection.
2. Resemblyzer deep learning voiceprint analysis verifies biometric authenticity.
3. Only a cryptographic serial authorization signal triggers the Arduino and L298N motor driver.

Result: A working physical prototype and the realization that real engineering happens at failure seams.`,
        },
        "lessons.md": {
          type: "file",
          name: "lessons.md",
          path: "/story/lessons.md",
          language: "markdown",
          size: "1.5 KB",
          lastModified: "2026-09-02",
          content: `# What Building Taught Me (content.md Section 13)

## Lesson 01: Building is Different from Coding
A working program is not automatically a useful product. Real building requires understanding users, making trade-offs, handling physical/digital failures, integrating systems, and measuring usefulness.

## Lesson 02: You Don't Need to Know Everything Before Starting
Start before you feel completely ready: Start → Discover what you don't know → Learn → Ask → Build → Fix.

## Lesson 03: Ownership Accelerates Learning
Growth happens when you take responsibility without having every answer available upfront.

## Lesson 04: Focus Creates Depth
Doing ten things badly can feel productive while doing one important thing deeply actually moves you forward.`,
        },
      },
    },
    projects: {
      type: "directory",
      name: "projects",
      path: "/projects",
      children: {
        kavach: {
          type: "directory",
          name: "kavach",
          path: "/projects/kavach",
          children: {
            "README.md": {
              type: "file",
              name: "README.md",
              path: "/projects/kavach/README.md",
              language: "markdown",
              size: "1.2 KB",
              lastModified: "2024-05-15",
              content: `# Kavach — AI Voice-Authenticated Smart Access System

5-person engineering team project at NIT Jalandhar.

- Biometrics: Resemblyzer speaker verification & Vosk STT engine
- Edge Compute: Raspberry Pi 4 running Flask REST API & WebRTC VAD
- Actuation: Arduino Uno & L298N driver controlling 12V deadbolt motor
- Client: React dashboard with MongoDB & JWT authentication`,
            },
            "architecture.json": {
              type: "file",
              name: "architecture.json",
              path: "/projects/kavach/architecture.json",
              language: "json",
              size: "890 B",
              lastModified: "2024-05-15",
              content: `{
  "system": "Kavach Voice Access System",
  "pipeline": [
    { "stage": "Audio Capture", "module": "USB Mic + WebRTC VAD" },
    { "stage": "Keyword Detection", "module": "Vosk STT" },
    { "stage": "Speaker Verification", "module": "Resemblyzer Voiceprint Model" },
    { "stage": "Server & Auth", "module": "Flask REST API + MongoDB" },
    { "stage": "Microcontroller Interface", "module": "Raspberry Pi Serial -> Arduino Uno" },
    { "stage": "Electromechanical Actuation", "module": "L298N H-Bridge Driver -> 12V Motor" }
  ]
}`,
            },
          },
        },
        "skillgap-ai": {
          type: "directory",
          name: "skillgap-ai",
          path: "/projects/skillgap-ai",
          children: {
            "README.md": {
              type: "file",
              name: "README.md",
              path: "/projects/skillgap-ai/README.md",
              language: "markdown",
              size: "920 B",
              lastModified: "2025-02-10",
              content: `# SkillGap AI — Semantic Embeddings & RAG Resume Fit Engine

Semantic RAG platform analyzing resume vs job description fit and generating targeted learning roadmaps.

- Tech: React, FastAPI, Celery, Redis, Supabase, Semantic Vector Embeddings, RAG
- Focus: Pinpointing latent capability gaps that superficial keyword matchers miss`,
            },
          },
        },
        nanotrade: {
          type: "directory",
          name: "nanotrade",
          path: "/projects/nanotrade",
          children: {
            "README.md": {
              type: "file",
              name: "README.md",
              path: "/projects/nanotrade/README.md",
              language: "markdown",
              size: "940 B",
              lastModified: "2025-07-18",
              content: `# NanoTrade — Real-Time Paper Trading Platform

Real-time paper trading engine built to understand low-level matching mechanics.

- Tech: Custom C++ Matching Engine, FastAPI, Redis, Celery, Supabase, WebSockets
- Architecture: Event-driven queue execution with live price & portfolio state streaming`,
            },
          },
        },
        moviesentiment: {
          type: "directory",
          name: "moviesentiment",
          path: "/projects/moviesentiment",
          children: {
            "README.md": {
              type: "file",
              name: "README.md",
              path: "/projects/moviesentiment/README.md",
              language: "markdown",
              size: "960 B",
              lastModified: "2025-08-10",
              content: `# MovieSentiment — Automated MLOps Discovery Platform

End-to-end production ML system taking sentiment analysis models beyond notebooks into Kubernetes.

- Tech: MLflow, DVC, Docker, GitHub Actions, Kubernetes, Amazon EKS, Prometheus, Grafana
- Loop: Model -> Version -> Package -> Deploy -> Monitor`,
            },
          },
        },
        "bike-demand-ml": {
          type: "directory",
          name: "bike-demand-ml",
          path: "/projects/bike-demand-ml",
          children: {
            "README.md": {
              type: "file",
              name: "README.md",
              path: "/projects/bike-demand-ml/README.md",
              language: "markdown",
              size: "980 B",
              lastModified: "2025-07-30",
              content: `# Bike Demand Prediction ML Application (TS Bridge Internship)

End-to-end regression application deployed on AWS with Power BI analytics for 5+ stakeholders.

- Tech: XGBoost, Scikit-learn, Flask REST API, DVC, MLflow, Docker, AWS EC2/S3, Power BI
- Results: 91% prediction accuracy, MAE < 35`,
            },
          },
        },
      },
    },
    now: {
      type: "directory",
      name: "now",
      path: "/now",
      children: {
        "current-focus.json": {
          type: "file",
          name: "current-focus.json",
          path: "/now/current-focus.json",
          language: "json",
          size: "820 B",
          lastModified: "2026-09-02",
          content: JSON.stringify(
            {
              focus: "Pradrix",
              stage: "early",
              philosophy: "Understand before automating.",
              exploring: [
                "AI automation",
                "business workflows",
                "real operational problems",
                "product thinking",
              ],
              goal: "find meaningful problems worth solving",
              activeStreams: nowData.items,
              statusList: pradrixStatusData.statusList,
            },
            null,
            2
          ),
        },
      },
    },
  },
};
