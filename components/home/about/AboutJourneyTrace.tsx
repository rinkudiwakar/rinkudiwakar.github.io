"use client";

import * as React from "react";
import { Cpu, Search, Terminal, Layers } from "lucide-react";

interface AboutJourneyTraceProps {
  isActive?: boolean;
}

const traceSteps = [
  {
    id: "hardware",
    label: "HARDWARE",
    sub: "Origins & circuits",
    icon: <Cpu className="w-3.5 h-3.5" />,
  },
  {
    id: "curiosity",
    label: "CURIOSITY",
    sub: "Self-driven exploration",
    icon: <Search className="w-3.5 h-3.5" />,
  },
  {
    id: "software",
    label: "SOFTWARE",
    sub: "Backend & web systems",
    icon: <Terminal className="w-3.5 h-3.5" />,
  },
  {
    id: "ai-hardware",
    label: "AI + HARDWARE",
    sub: "Connected products",
    icon: <Layers className="w-3.5 h-3.5" />,
  },
];

export function AboutJourneyTrace({ isActive = false }: AboutJourneyTraceProps) {
  return (
    <div className="w-full py-1">
      {/* ── DESKTOP: Horizontal Circuit Trace (○───────○───────○───────●) ── */}
      <div className="hidden sm:block relative w-full">
        {/* Subtle Inactive Line */}
        <div className="absolute top-[16px] left-[6%] right-[6%] h-[1px] bg-[var(--border)] z-0" />

        {/* Thinner Animated Circuit Trace Drawing Line */}
        <div
          className="absolute top-[16px] left-[6%] h-[1px] bg-[var(--accent)] z-0 transition-all duration-1200 ease-out origin-left"
          style={{
            width: isActive ? "88%" : "0%",
            transitionDelay: "250ms",
          }}
        />

        {/* 4 Nodes */}
        <div className="grid grid-cols-4 gap-4 relative z-10">
          {traceSteps.map((step, idx) => {
            const isLast = idx === traceSteps.length - 1;
            return (
              <div
                key={step.id}
                className={`flex flex-col items-center text-center transition-all duration-500 ease-out ${
                  isActive
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-2.5"
                }`}
                style={{
                  transitionDelay: `${350 + idx * 280}ms`,
                }}
              >
                {/* 
                  Node Circle: 
                  Hollow circle for 1-3 (○), Solid accent for final 4th node (●)
                */}
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 mb-2 ${
                    isLast
                      ? "bg-[var(--accent)] text-white border border-[var(--accent)] shadow-xs"
                      : "bg-[var(--background)] text-[var(--foreground-muted)] border border-[var(--border-strong)] hover:text-[var(--foreground)] hover:border-[var(--foreground)]"
                  }`}
                >
                  {step.icon}
                </div>

                {/* Node Label */}
                <span
                  className={`font-mono text-xs font-semibold tracking-wider transition-colors duration-300 ${
                    isLast
                      ? "text-[var(--accent)]"
                      : "text-[var(--foreground)]"
                  }`}
                >
                  {step.label}
                </span>

                {/* Node Subtitle */}
                <span className="text-[11px] text-[var(--foreground-subtle)] font-mono mt-0.5">
                  {step.sub}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── MOBILE: Vertical Compact Trace (○ HARDWARE │ ○ CURIOSITY │ ○ SOFTWARE │ ● AI + HARDWARE) ── */}
      <div className="sm:hidden relative pl-6 border-l border-[var(--border)] ml-3 space-y-4">
        {traceSteps.map((step, idx) => {
          const isLast = idx === traceSteps.length - 1;
          return (
            <div
              key={step.id}
              className={`relative flex items-center gap-3 transition-all duration-500 ${
                isActive
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-2"
              }`}
              style={{
                transitionDelay: `${250 + idx * 200}ms`,
              }}
            >
              {/* Node on vertical line */}
              <div
                className={`absolute -left-[30px] top-1/2 -translate-y-1/2 w-4.5 h-4.5 rounded-full flex items-center justify-center text-[9px] ${
                  isLast
                    ? "bg-[var(--accent)] text-white border border-[var(--accent)]"
                    : "bg-[var(--background)] text-[var(--foreground-muted)] border border-[var(--border-strong)]"
                }`}
              >
                {step.icon}
              </div>

              <div>
                <span
                  className={`font-mono text-xs font-semibold tracking-wide ${
                    isLast ? "text-[var(--accent)]" : "text-[var(--foreground)]"
                  }`}
                >
                  {step.label}
                </span>
                <span className="block text-[11px] text-[var(--foreground-muted)] font-mono">
                  {step.sub}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
