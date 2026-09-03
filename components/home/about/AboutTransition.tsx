import * as React from "react";
import { Cpu, Terminal, Sparkles, Box } from "lucide-react";

export function AboutTransition() {
  return (
    <div className="w-full py-8 sm:py-10 border-y border-[var(--border)] flex flex-col items-center text-center space-y-8">
      {/* Central Idea Headline */}
      <div className="space-y-2 max-w-2xl">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-[var(--foreground)] tracking-tight">
          I didn&apos;t choose between hardware and software.
          <br />
          <span className="text-[var(--accent)] font-serif italic font-normal">
            I started connecting them.
          </span>
        </h3>
        <p className="text-xs sm:text-sm text-[var(--foreground-muted)] max-w-lg mx-auto">
          Electrical Engineering gave me systems thinking. Software gave me another way to build those systems.
        </p>
      </div>

      {/* ── Schematic System Architecture Diagram ── */}
      <div className="relative p-6 sm:p-8 bg-[var(--background-subtle)] border border-[var(--border)] rounded-xl max-w-2xl w-full select-none shadow-xs">
        
        {/* Top Horizontal Tier: HARDWARE ── SYSTEM ── SOFTWARE */}
        <div className="grid grid-cols-3 items-center gap-2 sm:gap-4 relative">
          
          {/* HARDWARE Node */}
          <div className="flex flex-col items-center p-3 rounded-lg bg-[var(--background)] border border-[var(--border)] shadow-xs">
            <Cpu className="w-4 h-4 text-[var(--foreground)] mb-1" />
            <span className="font-mono text-[10px] sm:text-xs font-semibold tracking-wider text-[var(--foreground)]">
              HARDWARE
            </span>
          </div>

          {/* SYSTEM Hub (Center Junction) */}
          <div className="relative flex flex-col items-center p-3 rounded-lg bg-[var(--foreground)] text-[var(--background)] shadow-sm">
            <span className="font-mono text-[10px] sm:text-xs font-bold tracking-widest">
              SYSTEM
            </span>
            {/* Horizontal interconnecting bus lines */}
            <div className="absolute -left-4 sm:-left-6 top-1/2 -translate-y-1/2 w-4 sm:w-6 h-px bg-[var(--border-strong)] pointer-events-none" />
            <div className="absolute -right-4 sm:-right-6 top-1/2 -translate-y-1/2 w-4 sm:w-6 h-px bg-[var(--border-strong)] pointer-events-none" />
          </div>

          {/* SOFTWARE Node */}
          <div className="flex flex-col items-center p-3 rounded-lg bg-[var(--background)] border border-[var(--border)] shadow-xs">
            <Terminal className="w-4 h-4 text-[var(--foreground)] mb-1" />
            <span className="font-mono text-[10px] sm:text-xs font-semibold tracking-wider text-[var(--foreground)]">
              SOFTWARE
            </span>
          </div>

        </div>

        {/* Vertical Downward Trunk */}
        <div className="flex flex-col items-center my-3 relative">
          <div className="w-px h-6 bg-[var(--border-strong)]" />
          <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
        </div>

        {/* Middle Tier: AI Layer */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-[var(--background)] border border-[var(--border)] shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[var(--accent)]" />
            <span className="font-mono text-[11px] sm:text-xs font-semibold tracking-wider text-[var(--foreground)]">
              AI &amp; INTELLIGENCE
            </span>
          </div>
        </div>

        {/* Second Vertical Downward Trunk */}
        <div className="flex flex-col items-center my-3 relative">
          <div className="w-px h-6 bg-[var(--border-strong)]" />
          <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
        </div>

        {/* Bottom Tier: SHIPPED PRODUCT */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-[var(--accent)] text-white shadow-sm font-mono text-xs font-bold tracking-widest uppercase">
            <Box className="w-4 h-4" />
            <span>REAL-WORLD PRODUCT</span>
          </div>
        </div>

      </div>
    </div>
  );
}
