import * as React from "react";
import { Code2, Sparkles, Cpu, Box } from "lucide-react";

interface CapabilityCard {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

const capabilities: CapabilityCard[] = [
  {
    title: "SOFTWARE",
    icon: <Code2 className="w-4 h-4 text-[var(--foreground)]" />,
    skills: [
      "Backend systems",
      "APIs & Microservices",
      "Full-stack web applications",
      "Developer tools",
    ],
  },
  {
    title: "AI & ML",
    icon: <Sparkles className="w-4 h-4 text-[var(--accent)]" />,
    skills: [
      "Machine Learning",
      "RAG & Vector Search",
      "Agentic AI workflows",
      "Custom AI applications",
    ],
  },
  {
    title: "HARDWARE",
    icon: <Cpu className="w-4 h-4 text-[var(--foreground)]" />,
    skills: [
      "Embedded systems",
      "Microcontrollers (ESP32, Arduino)",
      "Sensors & Actuators",
      "Hardware-software integration",
    ],
  },
  {
    title: "PRODUCTS",
    icon: <Box className="w-4 h-4 text-[var(--accent)]" />,
    skills: [
      "Turning concepts into MVPs",
      "Production deployment",
      "User-centric architecture",
      "Real-world business value",
    ],
  },
];

export function AboutCapabilities() {
  return (
    <div className="w-full space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 pb-3 border-b border-[var(--border)]">
        <div>
          <span className="font-mono text-[10.5px] sm:text-[11.5px] tracking-[0.2em] text-[var(--foreground-subtle)] uppercase">
            TECHNICAL REPERTOIRE
          </span>
          <h3 className="text-xl sm:text-2xl font-display font-bold text-[var(--foreground)] tracking-tight mt-1">
            WHAT I LIKE BUILDING
          </h3>
        </div>
      </div>

      {/* 4 Minimal Editorial Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {capabilities.map((cap) => (
          <div
            key={cap.title}
            className="group p-5 rounded-xl bg-[var(--background)] border border-[var(--border)] transition-all duration-200 hover:-translate-y-1 hover:border-[var(--border-strong)] hover:shadow-sm flex flex-col justify-between"
          >
            <div>
              {/* Card Header with Icon */}
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-bold tracking-wider text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors">
                  {cap.title}
                </span>
                <span className="p-1.5 rounded-md bg-[var(--background-subtle)] border border-[var(--border-subtle)]">
                  {cap.icon}
                </span>
              </div>

              {/* Skills List */}
              <ul className="space-y-2">
                {cap.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-2 text-xs text-[var(--foreground-muted)] group-hover:text-[var(--foreground)] transition-colors"
                  >
                    <span className="w-1 h-1 rounded-full bg-[var(--border-strong)] group-hover:bg-[var(--accent)] transition-colors" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
