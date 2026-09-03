import * as React from "react";
import {
  Code2,
  BrainCircuit,
  Box,
  Lightbulb,
  Target,
  Rocket,
  Wifi,
  Battery,
  Search,
} from "lucide-react";

interface Capability {
  icon: React.ReactNode;
  title: string;
  description: string;
  badgeBg: string;
}

const capabilities: Capability[] = [
  {
    icon: <Code2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#10B981]" />,
    title: "Full-Stack Development",
    description: "Building scalable web apps with modern technologies.",
    badgeBg: "rgba(16, 185, 129, 0.15)",
  },
  {
    icon: <BrainCircuit className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#A855F7]" />,
    title: "AI & Machine Learning",
    description: "Integrating AI to solve real-world problems.",
    badgeBg: "rgba(168, 85, 247, 0.15)",
  },
  {
    icon: <Box className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#3B82F6]" />,
    title: "System Design",
    description: "Designing robust, scalable and fault-tolerant systems.",
    badgeBg: "rgba(59, 130, 246, 0.15)",
  },
  {
    icon: <Lightbulb className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#F59E0B]" />,
    title: "Problem Solving",
    description: "Turning complex problems into simple solutions.",
    badgeBg: "rgba(245, 158, 11, 0.15)",
  },
  {
    icon: <Target className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#EF4444]" />,
    title: "Product Thinking",
    description: "Building products users love and businesses need.",
    badgeBg: "rgba(239, 68, 68, 0.15)",
  },
  {
    icon: <Rocket className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#06B6D4]" />,
    title: "Rapid Learning",
    description: "Quickly learning, adapting, and applying new tech.",
    badgeBg: "rgba(6, 182, 212, 0.15)",
  },
];

export function MacWindow() {
  return (
    <div className="w-full h-full flex flex-col bg-gradient-to-br from-[#2E0F38] via-[#131726] to-[#0A0D15] text-[#E6EDF3] select-none font-sans overflow-hidden relative">
      {/* Ambient macOS Wallpaper Glow */}
      <div
        className="absolute -top-12 -left-12 w-64 h-64 rounded-full bg-[#E03A70]/15 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 -right-12 w-64 h-64 rounded-full bg-[#3B82F6]/10 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      {/* ── macOS Menu Bar ─────────────────────────────── */}
      <div className="h-[20px] sm:h-[22px] px-3 bg-black/40 backdrop-blur-md border-b border-white/[0.08] flex items-center justify-between text-[8px] sm:text-[9.5px] text-white/80 shrink-0 z-10">
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Apple Logo */}
          <svg className="w-2.5 h-2.5 text-white/95 fill-current" viewBox="0 0 170 170" aria-hidden="true">
            <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.7-3.08-7.71-7.94-12.04-14.58-6.19-9.56-11.13-20.91-14.81-34.05-3.68-13.14-5.52-25.17-5.52-36.08 0-14.45 3.52-26.65 10.57-36.59 7.05-9.94 16.14-14.98 27.27-15.13 4.8 0 10.33 1.29 16.6 3.86 6.27 2.57 10.15 3.86 11.64 3.86 1.74 0 5.86-1.35 12.37-4.05 6.51-2.7 12.18-3.93 17.01-3.69 12.61.64 22.84 5.39 30.69 14.25-10.98 6.64-16.35 15.77-16.11 27.39.24 9.14 3.75 16.89 10.53 23.24 6.78 6.35 14.82 10.02 24.11 11.02-2.18 6.64-4.8 12.63-7.87 17.98zM119.22 33.64c0-7.39 2.65-14.15 7.95-20.27 5.3-6.12 11.83-9.87 19.58-11.24.23 1.04.35 2.1.35 3.17 0 7.39-2.77 14.25-8.31 20.58-5.54 6.33-12.16 10.06-19.86 11.2-0.08-1.15-0.12-2.17-0.12-3.44z" />
          </svg>
          <span className="font-semibold text-white/95">Finder</span>
          <span className="hidden sm:inline text-white/60">File</span>
          <span className="hidden sm:inline text-white/60">Edit</span>
          <span className="hidden sm:inline text-white/60">View</span>
          <span className="hidden sm:inline text-white/60">Window</span>
        </div>
        <div className="flex items-center gap-2 sm:gap-2.5 text-white/80">
          <Search className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white/70" />
          <Wifi className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white/90" />
          <Battery className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white/90" />
          <span className="font-medium text-white/90">Tue 9:41 AM</span>
        </div>
      </div>

      {/* ── Realistic Floating macOS Window ────────────────── */}
      <div className="flex-1 p-2 sm:p-3 flex flex-col overflow-hidden z-10">
        <div className="flex-1 flex flex-col rounded-xl sm:rounded-2xl bg-[#11141D]/95 border border-white/[0.12] shadow-[0_18px_50px_rgba(0,0,0,0.85)] overflow-hidden backdrop-blur-2xl">
          {/* Realistic Window Chrome / Traffic Lights */}
          <div className="h-6 sm:h-7 px-3 flex items-center justify-between border-b border-white/[0.06] bg-white/[0.02] shrink-0">
            <div className="flex items-center gap-1.5" aria-hidden="true">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] border border-[#E0443E] shadow-inner cursor-pointer hover:opacity-85 transition-opacity" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] border border-[#DEA123] shadow-inner cursor-pointer hover:opacity-85 transition-opacity" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F] border border-[#1AAB29] shadow-inner cursor-pointer hover:opacity-85 transition-opacity" />
            </div>
            <div className="text-[8px] sm:text-[9.5px] font-medium text-white/40 tracking-wider">
              rinku.capabilities
            </div>
            <div className="w-8" />
          </div>

          {/* Window Body */}
          <div className="flex-1 px-3 sm:px-4 py-2 sm:py-3 flex flex-col justify-between overflow-hidden">
            {/* Title & Subtitle */}
            <div className="mb-1.5 sm:mb-2">
              <h3 className="text-xs sm:text-[14px] font-bold text-white tracking-tight">
                What I&apos;m Best At
              </h3>
              <p className="text-[8px] sm:text-[9.5px] text-white/55 mt-0.5 leading-tight">
                The skills and strengths that help me build exceptional products.
              </p>
            </div>

            {/* 6 Capability Cards in 3x2 Grid (Realistic macOS Glass Cards) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 sm:gap-2">
              {capabilities.map((item) => (
                <div
                  key={item.title}
                  className="group rounded-lg sm:rounded-xl p-1.5 sm:p-2.5 transition-all duration-300 cursor-pointer flex items-start gap-2 bg-[#171B26]/85 hover:bg-[#1E2332] border border-white/[0.06] hover:border-white/20 hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(0,0,0,0.6)]"
                >
                  <div
                    className="w-5 h-5 sm:w-6 sm:h-6 rounded-md flex items-center justify-center shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: item.badgeBg }}
                  >
                    {item.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[8.5px] sm:text-[10px] font-semibold text-white/95 leading-tight group-hover:text-white">
                      {item.title}
                    </div>
                    <div className="text-[7px] sm:text-[8.5px] text-white/50 leading-tight mt-0.5 line-clamp-2 group-hover:text-white/70 transition-colors">
                      {item.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Quote inside Window with Shimmer Text */}
            <div className="pt-1.5 sm:pt-2 border-t border-white/[0.06] text-center text-[7.5px] sm:text-[9px] text-white/55 tracking-wide">
              <span>Curious by nature. Builder by choice. </span>
              <span className="laptop-shimmer-text font-semibold">Impact-driven always.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
