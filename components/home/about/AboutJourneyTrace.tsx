"use client";

import * as React from "react";
import { Cpu, Search, Code2, Layers } from "lucide-react";

interface AboutJourneyTraceProps {
  isActive?: boolean;
}

const traceSteps = [
  {
    id: "hardware",
    label: "HARDWARE",
    sub: "Origins & circuits",
    icon: <Cpu className="w-5 h-5" />,
    isFinal: false,
  },
  {
    id: "curiosity",
    label: "CURIOSITY",
    sub: "Self-driven exploration",
    icon: <Search className="w-5 h-5" />,
    isFinal: false,
  },
  {
    id: "software",
    label: "SOFTWARE",
    sub: "Backend & web systems",
    icon: <Code2 className="w-5 h-5" />,
    isFinal: false,
  },
  {
    id: "ai-hardware",
    label: "AI + HARDWARE",
    sub: "Connected products",
    icon: <Layers className="w-5 h-5" />,
    isFinal: true,
  },
];

export function AboutJourneyTrace({ isActive = false }: AboutJourneyTraceProps) {
  return (
    <div className="w-full py-4 select-none">
      {/* ── DESKTOP: Horizontal Schematic Circuit Bar Matching Reference UI ── */}
      <div className="hidden sm:block relative w-full">
        
        {/* 
          Left glowing blue dot and Right glowing blue dot with connecting lines
        */}
        <div className="absolute top-[22px] left-0 right-0 flex items-center z-0 pointer-events-none">
          {/* Left glowing dot */}
          <div className="w-2.5 h-2.5 rounded-full bg-[#2563EB] shadow-[0_0_8px_rgba(37,99,235,0.8)] shrink-0" />

          {/* Segment 1: Dot to Node 1 (Solid Blue Line) */}
          <div
            className="h-[2px] bg-[#2563EB] transition-all duration-700 ease-out origin-left flex-1"
            style={{ transform: isActive ? "scaleX(1)" : "scaleX(0)" }}
          />

          {/* Spacer for Node 1 */}
          <div className="w-14 shrink-0" />

          {/* Segment 2: Node 1 to Node 2 (Solid Blue Line) */}
          <div
            className="h-[2px] bg-[#2563EB] transition-all duration-700 delay-200 ease-out origin-left flex-1"
            style={{ transform: isActive ? "scaleX(1)" : "scaleX(0)" }}
          />

          {/* Spacer for Node 2 */}
          <div className="w-14 shrink-0" />

          {/* Segment 3: Node 2 to Node 3 (Dotted / Dashed Blue Line) */}
          <div
            className="h-0 border-t-2 border-dashed border-[#2563EB] transition-all duration-700 delay-400 ease-out origin-left flex-1"
            style={{ transform: isActive ? "scaleX(1)" : "scaleX(0)" }}
          />

          {/* Spacer for Node 3 */}
          <div className="w-14 shrink-0" />

          {/* Segment 4: Node 3 to Node 4 (Solid Blue Line) */}
          <div
            className="h-[2px] bg-[#2563EB] transition-all duration-700 delay-600 ease-out origin-left flex-1"
            style={{ transform: isActive ? "scaleX(1)" : "scaleX(0)" }}
          />

          {/* Spacer for Node 4 */}
          <div className="w-14 shrink-0" />

          {/* Segment 5: Node 4 to Right Dot (Solid Blue Line) */}
          <div
            className="h-[2px] bg-[#2563EB] transition-all duration-700 delay-800 ease-out origin-left flex-1"
            style={{ transform: isActive ? "scaleX(1)" : "scaleX(0)" }}
          />

          {/* Right glowing dot */}
          <div className="w-2.5 h-2.5 rounded-full bg-[#2563EB] shadow-[0_0_8px_rgba(37,99,235,0.8)] shrink-0" />
        </div>

        {/* 4 Nodes Grid */}
        <div className="grid grid-cols-4 gap-6 relative z-10">
          {traceSteps.map((step, idx) => {
            const isFinal = step.isFinal;
            return (
              <div
                key={step.id}
                className={`flex flex-col items-center text-center transition-all duration-600 ease-out cursor-default ${
                  isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
                }`}
                style={{
                  transitionDelay: `${250 + idx * 200}ms`,
                }}
              >
                {/* Rounded Square Card Icon */}
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 mb-2.5 ${
                    isFinal
                      ? "bg-[#2563EB] text-white shadow-[0_6px_20px_rgba(37,99,235,0.4)] scale-105"
                      : "bg-white dark:bg-[#181C26] text-[var(--foreground)] border border-[var(--border-strong)] shadow-xs hover:border-[var(--foreground)] hover:scale-105"
                  }`}
                >
                  {step.icon}
                </div>

                {/* Node Title */}
                <span
                  className={`font-mono text-[11.5px] sm:text-xs font-bold tracking-wider ${
                    isFinal ? "text-[#2563EB]" : "text-[var(--foreground)]"
                  }`}
                >
                  {step.label}
                </span>

                {/* Node Subtitle */}
                <span
                  className={`text-[11px] font-mono mt-0.5 ${
                    isFinal ? "text-[#2563EB]/80" : "text-[var(--foreground-muted)]"
                  }`}
                >
                  {step.sub}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── MOBILE: Vertical Compact Trace ── */}
      <div className="sm:hidden relative pl-8 border-l-2 border-[#2563EB] ml-4 space-y-5 py-2">
        {traceSteps.map((step, idx) => {
          const isFinal = step.isFinal;
          return (
            <div
              key={step.id}
              className={`relative flex items-center gap-3.5 transition-all duration-500 ${
                isActive ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
              }`}
              style={{
                transitionDelay: `${200 + idx * 150}ms`,
              }}
            >
              {/* Card Node on vertical track */}
              <div
                className={`absolute -left-[45px] top-1/2 -translate-y-1/2 w-8.5 h-8.5 rounded-lg flex items-center justify-center shadow-xs ${
                  isFinal
                    ? "bg-[#2563EB] text-white shadow-[0_4px_12px_rgba(37,99,235,0.4)]"
                    : "bg-white dark:bg-[#181C26] text-[var(--foreground)] border border-[var(--border-strong)]"
                }`}
              >
                {step.icon}
              </div>

              <div>
                <span
                  className={`font-mono text-xs font-bold tracking-wide block ${
                    isFinal ? "text-[#2563EB]" : "text-[var(--foreground)]"
                  }`}
                >
                  {step.label}
                </span>
                <span
                  className={`block text-[11px] font-mono ${
                    isFinal ? "text-[#2563EB]/80" : "text-[var(--foreground-muted)]"
                  }`}
                >
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
