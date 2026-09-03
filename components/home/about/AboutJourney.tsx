"use client";

import * as React from "react";
import { Cpu, Search, Terminal, Sparkles, Layers } from "lucide-react";

interface JourneyStage {
  step: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const stages: JourneyStage[] = [
  {
    step: "01",
    title: "Electrical Engineering",
    description:
      "Learned systems, circuits, and how different components work together.",
    icon: <Cpu className="w-4 h-4 text-[var(--foreground)]" />,
  },
  {
    step: "02",
    title: "Curiosity",
    description:
      "Started exploring programming and building things on my own.",
    icon: <Search className="w-4 h-4 text-[var(--foreground)]" />,
  },
  {
    step: "03",
    title: "Software",
    description:
      "Dived into backend, web, databases and real-world applications.",
    icon: <Terminal className="w-4 h-4 text-[var(--foreground)]" />,
  },
  {
    step: "04",
    title: "AI & ML",
    description:
      "Explored machine learning, AI and intelligent systems.",
    icon: <Sparkles className="w-4 h-4 text-[var(--foreground)]" />,
  },
  {
    step: "05",
    title: "Hardware + Software",
    description:
      "Connecting both worlds to build useful and interesting things.",
    icon: <Layers className="w-4 h-4 text-[var(--accent)]" />,
  },
];

export function AboutJourney() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = React.useState<boolean>(false);
  const [activeStep, setActiveStep] = React.useState<number>(4);

  React.useEffect(() => {
    const element = containerRef.current;
    if (!element || typeof IntersectionObserver !== "function") {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="w-full space-y-8 sm:space-y-10">
      {/* Subsection Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 pb-4 border-b border-[var(--border)]">
        <div>
          <span className="font-mono text-[10.5px] sm:text-[11.5px] tracking-[0.2em] text-[var(--foreground-subtle)] uppercase">
            PROGRESSION
          </span>
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-[var(--foreground)] tracking-tight mt-1">
            MY JOURNEY
          </h3>
        </div>
        <p className="text-xs sm:text-sm text-[var(--foreground-muted)] max-w-md">
          How electrical systems thinking evolved into code, intelligence, and product engineering.
        </p>
      </div>

      {/* ── DESKTOP: Horizontal Journey Flow ── */}
      <div className="hidden lg:block relative w-full pt-6 pb-2">
        {/* Continuous Connecting Line Behind Nodes */}
        <div className="absolute top-[38px] left-[6%] right-[6%] h-px bg-[var(--border)] z-0" />
        <div
          className="absolute top-[38px] left-[6%] h-px bg-[var(--foreground)] z-0 transition-all duration-1000 ease-out"
          style={{
            width: isInView ? "88%" : "0%",
          }}
        />

        {/* 5 Progression Steps */}
        <div className="grid grid-cols-5 gap-6 relative z-10">
          {stages.map((stage, idx) => {
            const isLatest = idx === stages.length - 1;
            const isHovered = activeStep === idx;

            return (
              <div
                key={stage.step}
                onMouseEnter={() => setActiveStep(idx)}
                className={`group flex flex-col items-center text-center cursor-default transition-all duration-300 ${
                  isInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${idx * 120}ms` }}
              >
                {/* Node Circle */}
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-300 mb-4 ${
                    isLatest
                      ? "bg-[var(--accent)] border-[var(--accent)] text-white shadow-sm"
                      : isHovered
                      ? "bg-[var(--foreground)] border-[var(--foreground)] text-[var(--background)]"
                      : "bg-[var(--background)] border-[var(--border-strong)] text-[var(--foreground)]"
                  }`}
                >
                  <span className="text-xs font-mono font-semibold">
                    {stage.step}
                  </span>
                </div>

                {/* Stage Title */}
                <h4
                  className={`text-sm font-semibold tracking-tight mb-2 transition-colors duration-200 ${
                    isLatest
                      ? "text-[var(--accent)]"
                      : "text-[var(--foreground)] group-hover:text-[var(--foreground)]"
                  }`}
                >
                  {stage.title}
                </h4>

                {/* Stage Description */}
                <p className="text-xs text-[var(--foreground-muted)] leading-relaxed max-w-[190px]">
                  {stage.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── MOBILE / TABLET: Vertical Timeline ── */}
      <div className="lg:hidden relative pl-6 sm:pl-8 space-y-6 sm:space-y-8 border-l border-[var(--border)] ml-2 sm:ml-4">
        {stages.map((stage, idx) => {
          const isLatest = idx === stages.length - 1;

          return (
            <div
              key={stage.step}
              className={`relative flex flex-col items-start transition-all duration-500 ${
                isInView
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-3"
              }`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              {/* Timeline Bullet Node */}
              <div
                className={`absolute -left-[31px] sm:-left-[39px] top-0.5 w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center border text-[10px] font-mono font-bold ${
                  isLatest
                    ? "bg-[var(--accent)] border-[var(--accent)] text-white"
                    : "bg-[var(--background)] border-[var(--border-strong)] text-[var(--foreground)]"
                }`}
              >
                {stage.step}
              </div>

              {/* Stage Header */}
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-mono text-[var(--foreground-subtle)]">
                  PHASE {stage.step}
                </span>
                <span className="text-[var(--border)]">·</span>
                <h4
                  className={`text-sm sm:text-base font-semibold tracking-tight ${
                    isLatest
                      ? "text-[var(--accent)]"
                      : "text-[var(--foreground)]"
                  }`}
                >
                  {stage.title}
                </h4>
              </div>

              {/* Stage Description */}
              <p className="text-xs sm:text-sm text-[var(--foreground-muted)] leading-relaxed max-w-lg">
                {stage.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
