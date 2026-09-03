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
    <div className="w-full py-2">
      {/* ── DESKTOP: Horizontal Circuit Trace ── */}
      <div className="hidden sm:block relative w-full">
        {/* Background Trace Line */}
        <div className="absolute top-[18px] left-[5%] right-[5%] h-px bg-[var(--border)] z-0" />

        {/* Animated Circuit Trace Line */}
        <div
          className="absolute top-[18px] left-[5%] h-px bg-[var(--accent)] z-0 transition-all duration-1000 ease-out origin-left"
          style={{
            width: isActive ? "90%" : "0%",
            transitionDelay: "400ms",
          }}
        />

        {/* 4 Nodes */}
        <div className="grid grid-cols-4 gap-4 relative z-10">
          {traceSteps.map((step, idx) => {
            const isLast = idx === traceSteps.length - 1;
            return (
              <div
                key={step.id}
                className={`flex flex-col items-center text-center transition-all duration-700 ease-out ${
                  isActive
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-3"
                }`}
                style={{
                  transitionDelay: `${500 + idx * 300}ms`,
                }}
              >
                {/* Node Pill / Circle */}
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center border transition-colors duration-500 mb-2 ${
                    isLast
                      ? "bg-[var(--accent)] text-white border-[var(--accent)] shadow-sm"
                      : "bg-[var(--background)] text-[var(--foreground)] border-[var(--border-strong)]"
                  }`}
                >
                  {step.icon}
                </div>

                {/* Node Title */}
                <span
                  className={`font-mono text-xs font-semibold tracking-wider ${
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

      {/* ── MOBILE: Vertical Compact Trace ── */}
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
                transitionDelay: `${300 + idx * 200}ms`,
              }}
            >
              {/* Bullet node on the timeline line */}
              <div
                className={`absolute -left-[31px] top-1/2 -translate-y-1/2 w-5 h-5 rounded-full flex items-center justify-center border text-[9px] ${
                  isLast
                    ? "bg-[var(--accent)] text-white border-[var(--accent)]"
                    : "bg-[var(--background)] text-[var(--foreground)] border-[var(--border-strong)]"
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
