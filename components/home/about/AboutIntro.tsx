import * as React from "react";

export function AboutIntro() {
  return (
    <div className="flex flex-col space-y-6 sm:space-y-8 max-w-2xl">
      {/* ── 1. SECTION INTRODUCTION ── */}
      <div className="space-y-4">
        {/* Subtle Editorial Label */}
        <div className="flex items-center gap-2">
          <span className="font-mono text-[10.5px] sm:text-[11.5px] tracking-[0.2em] text-[var(--foreground-subtle)] uppercase">
            02 / ABOUT ME
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
        </div>

        {/* Main Section Headline — Large & Editorial (smaller than Hero) */}
        <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-display font-bold tracking-tight text-[var(--foreground)] leading-[1.15]">
          I started with{" "}
          <span className="font-serif italic text-[var(--accent)] underline decoration-[var(--border-strong)] underline-offset-4 decoration-1">
            hardware.
          </span>
          <br />
          Then I discovered{" "}
          <span className="font-serif italic text-[var(--accent)] underline decoration-[var(--border-strong)] underline-offset-4 decoration-1">
            software.
          </span>
        </h2>

        {/* Primary Education Anchor */}
        <p className="text-base sm:text-lg font-medium text-[var(--foreground)] leading-snug">
          I&apos;m currently in the final year of my B.Tech in Electrical
          Engineering at Dr. B. R. Ambedkar National Institute of Technology (NIT)
          Jalandhar.
        </p>
      </div>

      {/* Narrative Body: Transition from Hardware to Software */}
      <div className="space-y-4 text-xs sm:text-sm md:text-[15px] text-[var(--foreground-muted)] font-normal leading-relaxed">
        <p>
          Electrical engineering introduced me to something I still love today —
          understanding how different parts of a system work together.
        </p>
        <p>
          But while studying electrical engineering, I became increasingly curious
          about the other side of the equation: software.
        </p>
        <p>
          I started programming, building projects, exploring machine learning and
          AI, and eventually found myself spending more and more time creating
          things with code.
        </p>
      </div>

      {/* ── 2. EDUCATION / IDENTITY METADATA ROW ── */}
      <div className="pt-2 border-t border-[var(--border)] grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
        {/* Final Year */}
        <div className="flex flex-col space-y-1">
          <span className="text-[11px] font-mono uppercase tracking-wider text-[var(--foreground-subtle)]">
            Final Year
          </span>
          <span className="text-xs sm:text-[13px] font-medium text-[var(--foreground)]">
            B.Tech — Electrical Eng.
          </span>
        </div>

        {/* University */}
        <div className="flex flex-col space-y-1">
          <span className="text-[11px] font-mono uppercase tracking-wider text-[var(--foreground-subtle)]">
            University
          </span>
          <span className="text-xs sm:text-[13px] font-medium text-[var(--foreground)]">
            NIT Jalandhar
          </span>
          <span className="text-[11px] text-[var(--foreground-subtle)] font-mono">
            2023 — 2027
          </span>
        </div>

        {/* Focus */}
        <div className="flex flex-col space-y-1">
          <span className="text-[11px] font-mono uppercase tracking-wider text-[var(--foreground-subtle)]">
            Focus
          </span>
          <span className="text-xs sm:text-[13px] font-medium text-[var(--foreground)]">
            Software · AI · Systems
          </span>
        </div>
      </div>
    </div>
  );
}
