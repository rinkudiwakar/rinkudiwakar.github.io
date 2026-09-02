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
          size: "1.2 KB",
          lastModified: "2026-09-01",
          content: `/**
 * Rinku Diwakar — Profile Record
 * "What if? -> It actually works."
 */
export const builder = {
  name: "${profileData.name}",
  headline: "${profileData.headline}",
  tagline: "${profileData.tagline}",
  education: {
    degree: "${profileData.education.degree}",
    field: "${profileData.education.field}",
    institution: "${profileData.education.institution}",
  },
  currentFocus: {
    venture: "${profileData.currentFocus.name}",
    mission: "${profileData.currentFocus.description}",
  },
  social: {
    github: "https://github.com/rinkudiwakar",
    linkedin: "https://linkedin.com/in/rinkudiwakar",
    email: "rinkudiwakar01@gmail.com",
  },
} as const;`,
        },
        "skills.ts": {
          type: "file",
          name: "skills.ts",
          path: "/me/skills.ts",
          language: "typescript",
          size: "940 B",
          lastModified: "2026-08-30",
          content: `/**
 * Technical Competencies & Systems Tooling
 */
export const skillMatrix = {
  languages: ["TypeScript", "JavaScript", "Python", "C/C++ (Embedded)", "SQL"],
  frameworks: ["Next.js (App Router)", "React", "Node.js", "Tailwind CSS"],
  aiAndSystems: [
    "Workflow Automation Architecture",
    "LLM Orchestration & Prompt Routing",
    "NLP Semantic Taxonomy Mapping",
    "REST & Webhook Pipeline Engineering",
  ],
  hardwareAndIoT: [
    "Raspberry Pi 4B (Linux Kernel / GPIO)",
    "Arduino Uno / Nano Interfacing",
    "L298N Motor Actuation & Brownout Mitigation",
    "Hardware-Software Serial Communication",
  ],
} as const;`,
        },
        "beliefs.ts": {
          type: "file",
          name: "beliefs.ts",
          path: "/me/beliefs.ts",
          language: "typescript",
          size: "820 B",
          lastModified: "2026-08-28",
          content: `/**
 * Core Engineering & Operating Beliefs
 */
export const coreBeliefs = [
  "Understand the business problem before choosing the technology.",
  "Not AI everywhere. AI where it actually matters.",
  "Building is not just writing working code; it is deployment, maintenance, and user adoption.",
  "Doing three things exceptionally well outperforms chasing twenty half-finished experiments.",
  "Take full ownership before complete certainty exists.",
] as const;`,
        },
        "goals.ts": {
          type: "file",
          name: "goals.ts",
          path: "/me/goals.ts",
          language: "typescript",
          size: "680 B",
          lastModified: "2026-09-01",
          content: `/**
 * Directional Goals
 */
export const futureDirection = {
  statement:
    "I want to become really good at building — technically, creatively, and eventually as an entrepreneur — and use that ability to create things that matter.",
  pillars: [
    "Technical Rigor (AI systems, resilient backends, embedded integrations)",
    "Product Craft (ergonomics, typography, robust performance)",
    "Entrepreneurial Execution (Pradrix operational workflow automation)",
  ],
} as const;`,
        },
        "experience.log": {
          type: "file",
          name: "experience.log",
          path: "/me/experience.log",
          language: "text",
          size: "740 B",
          lastModified: "2026-09-01",
          content: `[2024] B.Tech Electrical Engineering, NIT Jalandhar (Graduated)
[2024] Kavach: Built voice-authentication IoT smart lock (5-person team)
[2025] SkillGap AI: Built semantic NLP curriculum-to-industry matching engine
[2025] NanoTrade: Engineered event-driven quantitative backtesting engine
[2026] Pradrix: Founded AI consulting and operational automation venture
[NOW]  Building rinkudiwakar.me Living Builder's Journal & Pradrix workflows`,
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
          size: "1.1 KB",
          lastModified: "2026-08-25",
          content: `# Origin: It Started with Curiosity

It didn't start with software. It started with reading, questioning how physical things work, and an obsession with mechanics.

Studying Electrical Engineering at NIT Jalandhar provided the foundation in mathematics, circuits, and structured problem solving.

Engineering taught me that real systems don't care about theory if the wiring drops voltage or the code crashes under latency.`,
        },
        "curiosity.md": {
          type: "file",
          name: "curiosity.md",
          path: "/story/curiosity.md",
          language: "markdown",
          size: "860 B",
          lastModified: "2026-08-26",
          content: `# The Five Stages of Evolution

1. CURIOUS: Asking why and exploring how things operate.
2. EXPLORING: Experimenting with electronics, logic, and early scripts.
3. ENGINEERING: Formal engineering training at NIT Jalandhar.
4. BUILDING: Shipping real, imperfect systems like Kavach.
5. PRADRIX: Applying diagnostic engineering to business workflows.`,
        },
        "first-build.md": {
          type: "file",
          name: "first-build.md",
          path: "/story/first-build.md",
          language: "markdown",
          size: "1.3 KB",
          lastModified: "2026-08-28",
          content: `# Kavach: The First Real Build

"Use AI as a key to open the door."

Five students. One physical door prototype. Voice biometrics, Raspberry Pi, Arduino, and an L298N motor driver.

## The Critical Failure:
A keyword-only check allowed anyone speaking the exact keyword to unlock the door.

## The Fix:
Engineered two-tier voice verification:
1. Speaker biometric voiceprint verification
2. Phrase phrase match confirmation

Result: Physical access granted only when the authorized voice spoke the authorized phrase.`,
        },
        "lessons.md": {
          type: "file",
          name: "lessons.md",
          path: "/story/lessons.md",
          language: "markdown",
          size: "1.4 KB",
          lastModified: "2026-08-30",
          content: `# What Building Taught Me

## Lesson 01: Activity vs Meaningful Progress
Biggest mistake: Trying to build 10 projects simultaneously without finishing any.
Fix: Focus ruthlessly on finishing one real thing.

## Lesson 02: Building is More Than Working Code
Code that works on localhost is 20% of the job. Deployment, edge cases, fallbacks, and user adoption are the other 80%.

## Lesson 03: Ownership Before Certainty
Don't wait for permission or perfect specifications. Take full responsibility and solve the problem.`,
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
              size: "1.1 KB",
              lastModified: "2024-05-15",
              content: `# Kavach — AI Voice-Authenticated Smart Door Lock

An end-to-end hardware-software access control system developed in a 5-person team.

- Microcontrollers: Arduino Uno, Raspberry Pi 4
- Actuation: 12V Solenoid & Geared DC Motor via L298N H-Bridge
- Voice Pipeline: Real-time spectrogram voiceprint extraction & authentication
- Web UI: React dashboard for user onboarding & access logs`,
            },
            "architecture.json": {
              type: "file",
              name: "architecture.json",
              path: "/projects/kavach/architecture.json",
              language: "json",
              size: "820 B",
              lastModified: "2024-05-15",
              content: `{
  "system": "Kavach Access Control",
  "nodes": [
    { "id": "mic", "type": "input", "device": "USB Microphone" },
    { "id": "pi", "type": "compute", "device": "Raspberry Pi 4B (Python Voice Service)" },
    { "id": "arduino", "type": "controller", "device": "Arduino Uno (C++ Firmware)" },
    { "id": "motor", "type": "actuator", "device": "12V Geared Motor / L298N Driver" }
  ],
  "powerTopology": {
    "logicRail": "5V Isolated (Pi & Arduino)",
    "motorRail": "12V External (Common Ground with Optocoupler)"
  }
}`,
            },
            "failure-analysis.md": {
              type: "file",
              name: "failure-analysis.md",
              path: "/projects/kavach/failure-analysis.md",
              language: "markdown",
              size: "980 B",
              lastModified: "2024-05-20",
              content: `# Failure Analysis & Postmortem

## Issue 1: Shared Keyword Vulnerability
Keyword matching alone let unauthorized voices unlock the system if they knew the phrase.
Resolution: Added speaker recognition biometric model to cross-validate acoustic pitch/formants before triggering GPIO.

## Issue 2: Motor Inductive Inrush & MCU Brownouts
Motor activation caused voltage drops that rebooted the Arduino.
Resolution: Separated 12V motor supply from 5V logic supply with common ground and flyback clamping diodes.`,
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
              size: "890 B",
              lastModified: "2025-02-10",
              content: `# SkillGap AI — Curriculum to Industry Diagnostic Engine

An NLP semantic embedding platform that parses academic course syllabi and compares them against real-time job market requirements.

- NLP Embeddings: Semantic vector similarity mapping
- Taxonomies: Industry skill graphs & prerequisite DAGs
- Output: Structured gap analysis report with actionable bridge roadmaps`,
            },
            "pipeline.ts": {
              type: "file",
              name: "pipeline.ts",
              path: "/projects/skillgap-ai/pipeline.ts",
              language: "typescript",
              size: "720 B",
              lastModified: "2025-02-12",
              content: `/**
 * Illustrative representation of SkillGap AI taxonomy matching pipeline
 */
export async function computeCurriculumSkillGap(
  syllabusTokens: string[],
  marketDemandVectors: number[][]
) {
  // 1. Extract semantic skill entities from syllabus
  // 2. Project into shared embedding space
  // 3. Compute cosine distance across required competencies
  // 4. Return ranked deficiency vectors
  return { status: "computed", gapsIdentified: true };
}`,
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
              size: "860 B",
              lastModified: "2025-07-18",
              content: `# NanoTrade — Quantitative Backtesting & Simulation Engine

An event-driven historical simulation engine for algorithmic strategy evaluation.

- Event Engine: Tick-by-tick order book queue simulation
- Risk Telemetry: Maximum drawdown, Sharpe ratio, slippage modeling
- Core Rule: Deterministic execution with zero lookahead bias`,
            },
            "engine.py": {
              type: "file",
              name: "engine.py",
              path: "/projects/nanotrade/engine.py",
              language: "python",
              size: "690 B",
              lastModified: "2025-07-20",
              content: `# Illustrative backtesting event loop
class BacktestEngine:
    def __init__(self, initial_capital=10000.0):
        self.capital = initial_capital
        self.positions = {}
        
    def process_tick(self, timestamp, price, signal):
        # Strict zero-lookahead order evaluation
        if signal == "BUY" and self.capital >= price:
            self.positions[timestamp] = price
            self.capital -= price
        return self.capital`,
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
          size: "760 B",
          lastModified: "2026-09-01",
          content: JSON.stringify(
            {
              venture: "Pradrix",
              stage: pradrixStatusData.stage,
              lastUpdated: nowData.lastUpdated,
              philosophy: "Understand before automating.",
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
