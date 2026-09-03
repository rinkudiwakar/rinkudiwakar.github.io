"use client";

import * as React from "react";
import {
  BrainCircuit,
  Server,
  Cpu,
  Workflow,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

interface SuperpowerDomain {
  id: string;
  title: string;
  badge: string;
  description: string;
  icon: React.ElementType;
  color: string;
  skills: { name: string; level: number; note: string }[];
  deliverables: string[];
}

const SUPERPOWERS: SuperpowerDomain[] = [
  {
    id: "ai-mlops",
    title: "Applied AI, LLMs & MLOps",
    badge: "CORE PILLAR",
    description:
      "Architecting production-ready ML inference pipelines, Retrieval-Augmented Generation (RAG), and agentic workflows with low latency and verifiable guardrails.",
    icon: BrainCircuit,
    color: "emerald",
    skills: [
      { name: "PyTorch & TensorFlow", level: 92, note: "Neural nets, custom training loops, model optimization" },
      { name: "RAG & Vector Search", level: 95, note: "ChromaDB, LangChain, embeddings, hybrid search" },
      { name: "Scikit-Learn & XGBoost", level: 90, note: "Tabular modeling, cross-validation, feature pipelines" },
      { name: "Agentic Systems", level: 88, note: "Autonomous workflow agents, tool calling, execution loops" },
    ],
    deliverables: [
      "Built custom RAG knowledge retrievers with sub-200ms latency",
      "Deployed automated business extraction pipelines at Pradrix",
      "End-to-end model evaluation & hallucination prevention harnesses",
    ],
  },
  {
    id: "backend-systems",
    title: "Distributed Backends & Microservices",
    badge: "HIGH THROUGHPUT",
    description:
      "Engineering resilient asynchronous microservices, REST APIs, WebSocket streaming endpoints, and database schemas built for reliability and scale.",
    icon: Server,
    color: "sky",
    skills: [
      { name: "FastAPI & Async Python", level: 94, note: "Pydantic validation, dependency injection, high concurrency" },
      { name: "PostgreSQL & Supabase", level: 90, note: "Schema design, relational indexing, RPC functions" },
      { name: "Redis & Celery", level: 88, note: "Distributed job queues, caching, rate limiting" },
      { name: "Docker & Linux", level: 86, note: "Multi-stage containers, systemd daemonization, CI/CD" },
    ],
    deliverables: [
      "Asynchronous background task processing clusters",
      "Low-latency streaming APIs for interactive AI agents",
      "Secure authentication, RBAC, and data privacy isolation",
    ],
  },
  {
    id: "hardware-iot",
    title: "Embedded Systems & Hardware Interfacing",
    badge: "PHYSICAL × DIGITAL",
    description:
      "Leveraging Electrical Engineering foundations (NIT Jalandhar) to interface microcontrollers, sensors, and telemetry units directly with cloud backends.",
    icon: Cpu,
    color: "purple",
    skills: [
      { name: "Microcontrollers & C++", level: 86, note: "ESP32, Arduino, Raspberry Pi, GPIO & I2C/SPI" },
      { name: "Sensor Telemetry", level: 90, note: "Pulse sensors, accelerometers, GPS/GSM modules" },
      { name: "Circuit Systems Thinking", level: 88, note: "Power management, hardware debugging, signal integrity" },
      { name: "Edge Computing", level: 84, note: "Local sensor filtering, MQTT telemetry packets" },
    ],
    deliverables: [
      "Engineered Kavach: Smart Band for Women's Safety with instant SOS trigger",
      "Multi-sensor hardware-to-cloud telemetry sync with failover SMS/GPS",
      "Direct bridge between physical sensor triggers and cloud alert workers",
    ],
  },
  {
    id: "fullstack-systems",
    title: "Full-Stack Web & Developer Tooling",
    badge: "END-TO-END",
    description:
      "Crafting hyper-polished, responsive user interfaces and developer tools that feel snappy, accessible, and delightful.",
    icon: Workflow,
    color: "amber",
    skills: [
      { name: "TypeScript & React / Next.js", level: 92, note: "Server components, hooks, rigorous type systems" },
      { name: "Vanilla CSS & Modern UI", level: 90, note: "Glassmorphism, animations, responsive layouts" },
      { name: "Vitest & Quality Testing", level: 89, note: "Unit, integration, accessibility and edge cases" },
      { name: "Virtual Filesystems & CLIs", level: 92, note: "Interactive terminal emulators, command parsers" },
    ],
    deliverables: [
      "Custom macOS-styled virtual workspace & dev mode terminal",
      "100% test-verified component architectures across portfolio",
      "Keyboard-first navigation (⌘K, terminal commands, shortcuts)",
    ],
  },
];

export function DevSuperpowers() {
  const [activeTab, setActiveTab] = React.useState<string>("ai-mlops");
  const selectedDomain = SUPERPOWERS.find((s) => s.id === activeTab) || SUPERPOWERS[0];

  return (
    <div className="h-full overflow-y-auto p-4 md:p-6 space-y-6 custom-scrollbar text-zinc-200">
      {/* Header */}
      <div className="space-y-2 border-b border-zinc-800 pb-4">
        <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono uppercase tracking-wider">
          <Sparkles className="w-4 h-4" />
          <span>SUPERPOWERS & CORE CAPABILITIES</span>
        </div>
        <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight">
          What I Am Best At: Engineering Depth & Precision
        </h2>
        <p className="text-xs md:text-sm text-zinc-400 max-w-3xl">
          From high-level AI model orchestrations to low-level hardware circuitry and distributed backends, here is a breakdown of my engineering capabilities and verified deliverables.
        </p>
      </div>

      {/* Domain Selector Pills */}
      <div className="flex flex-wrap gap-2">
        {SUPERPOWERS.map((domain) => {
          const Icon = domain.icon;
          const isActive = activeTab === domain.id;
          return (
            <button
              key={domain.id}
              type="button"
              onClick={() => setActiveTab(domain.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-mono flex items-center gap-2 border transition-all cursor-pointer ${
                isActive
                  ? "bg-emerald-500/20 border-emerald-400 text-white font-semibold shadow-[0_0_15px_rgba(16,185,129,0.15)]"
                  : "bg-zinc-950/70 border-zinc-800 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900"
              }`}
            >
              <Icon className={`w-3.5 h-3.5 ${isActive ? "text-emerald-400" : "text-zinc-500"}`} />
              <span>{domain.title.split("&")[0].trim()}</span>
            </button>
          );
        })}
      </div>

      {/* Active Domain Spotlight */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Domain Overview & Deliverables */}
        <div className="lg:col-span-6 space-y-5 rounded-xl border border-zinc-800 bg-zinc-950/80 p-5 backdrop-blur-md">
          <div className="flex items-center justify-between">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-semibold">
              {selectedDomain.badge}
            </span>
            <span className="text-[11px] font-mono text-zinc-500">Verified Skills</span>
          </div>

          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <selectedDomain.icon className="w-5 h-5 text-emerald-400" />
            <span>{selectedDomain.title}</span>
          </h3>

          <p className="text-xs md:text-sm text-zinc-300 leading-relaxed">
            {selectedDomain.description}
          </p>

          <div className="space-y-2 pt-2 border-t border-zinc-800/80">
            <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block">
              Key Deliverables & Implementations:
            </span>
            <div className="space-y-2">
              {selectedDomain.deliverables.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Technical Mastery Bars & Notes */}
        <div className="lg:col-span-6 space-y-4 rounded-xl border border-zinc-800 bg-zinc-950/80 p-5 backdrop-blur-md">
          <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider block">
            Technical Competencies:
          </span>

          <div className="space-y-4">
            {selectedDomain.skills.map((skill, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-zinc-200 font-semibold">{skill.name}</span>
                  <span className="text-emerald-400 font-bold">{skill.level}%</span>
                </div>
                {/* Progress bar */}
                <div className="h-2 w-full rounded-full bg-zinc-900 border border-zinc-800 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-emerald-500 to-sky-400 rounded-full transition-all duration-700"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
                <p className="text-[11px] text-zinc-400 italic">{skill.note}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
