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
    stageIndex: 1,
  },
  {
    id: "curiosity",
    label: "CURIOSITY",
    sub: "Self-driven exploration",
    icon: <Search className="w-5 h-5" />,
    stageIndex: 2,
  },
  {
    id: "software",
    label: "SOFTWARE",
    sub: "Backend & web systems",
    icon: <Code2 className="w-5 h-5" />,
    stageIndex: 3,
  },
  {
    id: "ai-hardware",
    label: "AI + HARDWARE",
    sub: "Connected products",
    icon: <Layers className="w-5 h-5" />,
    stageIndex: 4,
  },
];

export function AboutJourneyTrace({ isActive = false }: AboutJourneyTraceProps) {
  // Stateful progressive activation stage: 0 = all neutral, 1 = Hardware, 2 = Curiosity, 3 = Software, 4 = AI+Hardware
  const [activeStage, setActiveStage] = React.useState<number>(0);

  React.useEffect(() => {
    if (!isActive) {
      setActiveStage(0);
      return;
    }

    const t1 = setTimeout(() => setActiveStage(1), 300);
    const t2 = setTimeout(() => setActiveStage(2), 700);
    const t3 = setTimeout(() => setActiveStage(3), 1100);
    const t4 = setTimeout(() => setActiveStage(4), 1500);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [isActive]);

  return (
    <div className="w-full py-2 select-none">
      {/* ── DESKTOP: Horizontal Schematic Circuit Bar (Draws Progressive Blue Trace) ── */}
      <div className="hidden sm:block relative w-full">
        
        {/* Base Neutral Trace Line */}
        <div className="absolute top-[22px] left-0 right-0 h-[2px] bg-[var(--border)] z-0" />

        {/* 
          Progressive Blue Circuit Trace passing through node centers
        */}
        <div className="absolute top-[22px] left-0 right-0 flex items-center z-0 pointer-events-none">
          {/* Left glowing dot */}
          <div
            className={`w-2.5 h-2.5 rounded-full transition-all duration-400 shrink-0 z-10 ${
              activeStage >= 1
                ? "bg-[#2563EB] shadow-[0_0_8px_rgba(37,99,235,0.8)] scale-100"
                : "bg-[var(--border-strong)] scale-75"
            }`}
          />

          {/* Segment 1: Left Dot to Col 1 Center (Solid Blue) */}
          <div
            className="h-[2px] bg-[#2563EB] transition-all duration-400 ease-out origin-left flex-1"
            style={{ transform: activeStage >= 1 ? "scaleX(1)" : "scaleX(0)" }}
          />

          {/* Segment 2: Col 1 Center to Col 2 Center (Solid Blue) */}
          <div
            className="h-[2px] bg-[#2563EB] transition-all duration-400 ease-out origin-left flex-2"
            style={{ transform: activeStage >= 2 ? "scaleX(1)" : "scaleX(0)" }}
          />

          {/* Segment 3: Col 2 Center to Col 3 Center (Dashed Blue Line) */}
          <div
            className="h-[2px] border-t-2 border-dashed border-[#2563EB] transition-all duration-400 ease-out origin-left flex-2"
            style={{ transform: activeStage >= 3 ? "scaleX(1)" : "scaleX(0)" }}
          />

          {/* Segment 4: Col 3 Center to Col 4 Center (Solid Blue) */}
          <div
            className="h-[2px] bg-[#2563EB] transition-all duration-400 ease-out origin-left flex-2"
            style={{ transform: activeStage >= 4 ? "scaleX(1)" : "scaleX(0)" }}
          />

          {/* Segment 5: Col 4 Center to Right Dot (Solid Blue) */}
          <div
            className="h-[2px] bg-[#2563EB] transition-all duration-300 ease-out origin-left flex-1"
            style={{ transform: activeStage >= 4 ? "scaleX(1)" : "scaleX(0)" }}
          />

          {/* Right glowing dot */}
          <div
            className={`w-2.5 h-2.5 rounded-full transition-all duration-400 shrink-0 z-10 ${
              activeStage >= 4
                ? "bg-[#2563EB] shadow-[0_0_8px_rgba(37,99,235,0.8)] scale-100"
                : "bg-[var(--border-strong)] scale-75"
            }`}
          />
        </div>

        {/* 4 Nodes Grid with Sequential Activation */}
        <div className="grid grid-cols-4 gap-6 relative z-10">
          {traceSteps.map((step) => {
            const isNodeActive = activeStage >= step.stageIndex;
            const isFinal = step.stageIndex === 4;

            return (
              <div
                key={step.id}
                className="flex flex-col items-center text-center cursor-default transition-all duration-500 ease-out"
              >
                {/* 
                  Rounded Square Card Icon:
                  Inactive: neutral muted border/text.
                  Active: subtle scale pulse, neutral → blue.
                */}
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-400 mb-2.5 ${
                    isFinal && isNodeActive
                      ? "bg-[#2563EB] text-white shadow-[0_6px_20px_rgba(37,99,235,0.4)] scale-105"
                      : isNodeActive
                      ? "bg-[var(--background-card)] text-[#2563EB] border-2 border-[#2563EB] shadow-xs scale-105"
                      : "bg-[var(--background-card)] text-[var(--foreground-muted)] border border-[var(--border-strong)] opacity-70 scale-95"
                  }`}
                  style={{
                    backgroundColor: isFinal && isNodeActive ? "#2563EB" : "var(--background-card)",
                    color: isFinal && isNodeActive ? "#ffffff" : isNodeActive ? "#2563EB" : "var(--foreground-muted)",
                  }}
                >
                  {step.icon}
                </div>

                {/* Node Title: Blue ONLY when active */}
                <span
                  className={`font-mono text-[11.5px] sm:text-xs font-bold tracking-wider transition-colors duration-400 ${
                    isNodeActive ? "text-[#2563EB]" : "text-[var(--foreground-subtle)]"
                  }`}
                >
                  {step.label}
                </span>

                {/* Node Subtitle */}
                <span
                  className={`text-[11px] font-mono mt-0.5 transition-colors duration-400 ${
                    isNodeActive ? "text-[var(--foreground-muted)]" : "text-[var(--foreground-subtle)] opacity-70"
                  }`}
                >
                  {step.sub}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── MOBILE: Vertical Compact Trace with Matching Sequential Activation ── */}
      <div className="sm:hidden relative pl-8 border-l-2 border-[var(--border)] ml-4 space-y-5 py-2">
        {traceSteps.map((step) => {
          const isNodeActive = activeStage >= step.stageIndex;
          const isFinal = step.stageIndex === 4;

          return (
            <div
              key={step.id}
              className="relative flex items-center gap-3.5 transition-all duration-400"
            >
              {/* Card Node on vertical track */}
              <div
                className={`absolute -left-[45px] top-1/2 -translate-y-1/2 w-8.5 h-8.5 rounded-lg flex items-center justify-center shadow-xs transition-all duration-400 ${
                  isFinal && isNodeActive
                    ? "bg-[#2563EB] text-white shadow-[0_4px_12px_rgba(37,99,235,0.4)] scale-105"
                    : isNodeActive
                    ? "bg-[var(--background-card)] text-[#2563EB] border-2 border-[#2563EB] scale-105"
                    : "bg-[var(--background-card)] text-[var(--foreground-muted)] border border-[var(--border-strong)] opacity-60 scale-95"
                }`}
              >
                {step.icon}
              </div>

              <div>
                <span
                  className={`font-mono text-xs font-bold tracking-wide block transition-colors duration-400 ${
                    isNodeActive ? "text-[#2563EB]" : "text-[var(--foreground-subtle)]"
                  }`}
                >
                  {step.label}
                </span>
                <span
                  className={`block text-[11px] font-mono transition-colors duration-400 ${
                    isNodeActive ? "text-[var(--foreground-muted)]" : "text-[var(--foreground-subtle)] opacity-60"
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
