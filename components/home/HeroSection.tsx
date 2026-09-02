import * as React from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, Layers } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { getProfile } from "@/lib/content";

export function HeroSection() {
  const profile = getProfile();

  return (
    <section
      aria-label="Hero Introduction"
      className="relative w-full pt-12 md:pt-20 pb-16 md:pb-24 overflow-hidden border-b border-[var(--border)]"
    >
      <div className="container-editorial">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Main Narrative Column (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            {/* Tagline & Identity Eyebrow */}
            <div className="flex flex-wrap items-center gap-2.5">
              <Badge variant="accent">BUILDER · ENGINEER · EXPLORER</Badge>
              <Badge variant="mono">NIT Jalandhar · EE</Badge>
            </div>

            {/* Core Philosophy & Name */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight text-[var(--foreground)] leading-[1.06]">
                Rinku Diwakar
              </h1>

              <div className="space-y-1">
                <p className="text-xl sm:text-2xl md:text-3xl text-[var(--foreground-muted)] font-normal leading-snug">
                  I like turning
                </p>
                <p className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-[var(--foreground)] tracking-tight">
                  “WHAT IF?”
                </p>
                <p className="text-xl sm:text-2xl md:text-3xl text-[var(--foreground-muted)] font-normal leading-snug">
                  into
                </p>
                <p className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-[var(--accent)] tracking-tight">
                  “IT ACTUALLY WORKS.”
                </p>
              </div>
            </div>

            {/* Subtext */}
            <p className="text-base sm:text-lg md:text-xl text-[var(--foreground-muted)] font-body leading-relaxed max-w-xl">
              I build software, AI systems, and products around problems worth
              solving. Grounded in electrical engineering fundamentals, exploring
              where intelligent automation creates genuine leverage.
            </p>

            {/* Current Focus Banner */}
            <div className="p-4 rounded-[var(--radius-lg)] bg-[var(--background-card)] border border-[var(--border-strong)] shadow-[var(--shadow-subtle)] space-y-2 max-w-xl">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="flex items-center gap-1.5 text-[var(--accent)] font-semibold uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
                  Currently Building
                </span>
                <span className="text-[var(--foreground-subtle)]">
                  Early Stage
                </span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <div>
                  <span className="font-display font-bold text-lg text-[var(--foreground)] block">
                    Pradrix
                  </span>
                  <span className="text-xs text-[var(--foreground-muted)] font-mono">
                    AI × Automation × Business Operations
                  </span>
                </div>
                <Link
                  href="/pradrix"
                  className="inline-flex items-center gap-1 text-xs font-mono font-medium text-[var(--accent)] hover:underline shrink-0"
                >
                  <span>Explore</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="/story"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-[var(--radius-md)] bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] font-medium text-sm transition-all shadow-[var(--shadow-subtle)] active:translate-y-px"
              >
                <BookOpen className="w-4 h-4" />
                <span>Explore the Story</span>
              </Link>

              <Link
                href="/work"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-[var(--radius-md)] bg-[var(--background-card)] border border-[var(--border)] text-[var(--foreground)] hover:bg-[var(--background-subtle)] font-medium text-sm transition-all active:translate-y-px"
              >
                <Layers className="w-4 h-4 text-[var(--foreground-muted)]" />
                <span>Things I’ve Built</span>
              </Link>
            </div>
          </div>

          {/* Integrated Portrait / Editorial Visual Card (5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm rounded-[var(--radius-xl)] bg-[var(--background-card)] border border-[var(--border-strong)] p-6 shadow-[var(--shadow-card)] space-y-6">
              {/* Header inside card */}
              <div className="flex items-center justify-between pb-3 border-b border-[var(--border)] text-xs font-mono text-[var(--foreground-muted)]">
                <span>IDENTITY · RD-01</span>
                <span className="flex items-center gap-1 text-[var(--success)] font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--success)]" />
                  Available for Impact
                </span>
              </div>

              {/* Architectural Portrait Frame */}
              <div className="relative aspect-4/5 w-full rounded-[var(--radius-lg)] bg-gradient-to-br from-[var(--background-subtle)] to-[var(--border)] overflow-hidden border border-[var(--border)] flex flex-col justify-between p-6">
                {/* Background Grid Accent */}
                <div className="absolute inset-0 bg-[radial-gradient(#c8c7c0_1px,transparent_1px)] dark:bg-[radial-gradient(#30363d_1px,transparent_1px)] [background-size:16px_16px] opacity-40" />

                {/* Top Technical Metadata */}
                <div className="relative z-10 flex justify-between items-start text-[10px] font-mono text-[var(--foreground-muted)] uppercase tracking-wider">
                  <span>NIT JALANDHAR</span>
                  <span>2023 – 2027</span>
                </div>

                {/* Center Monogram / Builder Emblem */}
                <div className="relative z-10 my-auto text-center space-y-2">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[var(--background-card)] border border-[var(--border-strong)] shadow-[var(--shadow-subtle)] text-2xl font-display font-bold text-[var(--foreground)]">
                    RD
                  </div>
                  <div className="font-display font-semibold text-base text-[var(--foreground)]">
                    Rinku Diwakar
                  </div>
                  <div className="text-xs font-mono text-[var(--foreground-muted)]">
                    Electrical Engineer · Builder
                  </div>
                </div>

                {/* Bottom Loop Annotation */}
                <div className="relative z-10 text-[10px] font-mono text-[var(--foreground-subtle)] text-center pt-2 border-t border-[var(--border)]">
                  {profile.loop}
                </div>
              </div>

              {/* Quick Identity Footnote */}
              <div className="space-y-2 pt-1 text-xs text-[var(--foreground-muted)] font-body">
                <div className="flex items-center justify-between font-mono text-[11px]">
                  <span>Core Domain</span>
                  <span className="text-[var(--foreground)] font-medium">
                    Software × Applied AI × IoT
                  </span>
                </div>
                <div className="flex items-center justify-between font-mono text-[11px]">
                  <span>Signature Build</span>
                  <span className="text-[var(--accent)] font-medium">
                    Kavach (Voice AI Lock)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
