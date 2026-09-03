"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AboutPortrait } from "./about/AboutPortrait";
import { AboutJourneyTrace } from "./about/AboutJourneyTrace";

export function AboutSection() {
  const sectionRef = React.useRef<HTMLElement>(null);
  const [hasEntered, setHasEntered] = React.useState<boolean>(false);

  React.useEffect(() => {
    const element = sectionRef.current;
    if (!element || typeof IntersectionObserver !== "function") {
      setHasEntered(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEntered(true);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      aria-label="01 About Me — Hardware to Software Story"
      className="relative w-full py-12 sm:py-16 lg:py-20 border-b border-[var(--border)] bg-[var(--background)] transition-colors duration-200 overflow-hidden"
    >
      <div className="container-hero flex flex-col space-y-10 sm:space-y-12 lg:space-y-14">
        
        {/* ── UPPER BLOCK: TWO-COLUMN EDITORIAL OPENING ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-14 items-center">
          
          {/* LEFT: Headline, Short Narrative & Education Metadata */}
          <div
            className={`lg:col-span-7 flex flex-col space-y-6 transition-all duration-700 ease-out ${
              hasEntered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {/* Subtle Editorial Section Label */}
            <div className="flex items-center gap-2">
              <span className="font-mono text-[10.5px] sm:text-[11.5px] tracking-[0.2em] text-[var(--foreground-subtle)] uppercase">
                01 / ABOUT ME
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
            </div>

            {/* Main Headline — Editorial, smaller than Hero */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold tracking-tight text-[var(--foreground)] leading-[1.18]">
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

            {/* Short Introduction Paragraph (Max ~4 lines on desktop) */}
            <div className="space-y-2 text-xs sm:text-sm md:text-[14.5px] text-[var(--foreground-muted)] leading-relaxed max-w-xl">
              <p>
                I&apos;m a final-year Electrical Engineering student at NIT Jalandhar
                who enjoys building across software, AI, and embedded hardware.
              </p>
              <p className="font-medium text-[var(--foreground)]">
                I like working where software meets the real world.
              </p>
            </div>

            {/* Compact Education / Focus Metadata Row */}
            <div className="pt-4 border-t border-[var(--border)] grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-xl">
              <div className="flex flex-col space-y-0.5">
                <span className="text-[10px] sm:text-[10.5px] font-mono uppercase tracking-wider text-[var(--foreground-subtle)]">
                  FINAL YEAR
                </span>
                <span className="text-xs sm:text-[12.5px] font-medium text-[var(--foreground)]">
                  B.Tech — Electrical Eng.
                </span>
              </div>

              <div className="flex flex-col space-y-0.5">
                <span className="text-[10px] sm:text-[10.5px] font-mono uppercase tracking-wider text-[var(--foreground-subtle)]">
                  NIT JALANDHAR
                </span>
                <span className="text-xs sm:text-[12.5px] font-medium text-[var(--foreground)]">
                  2023 — 2027
                </span>
              </div>

              <div className="flex flex-col space-y-0.5">
                <span className="text-[10px] sm:text-[10.5px] font-mono uppercase tracking-wider text-[var(--foreground-subtle)]">
                  FOCUS
                </span>
                <span className="text-xs sm:text-[12.5px] font-medium text-[var(--foreground)]">
                  Software · AI · Embedded
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT: Framed Editorial Photograph with Handwritten Annotation */}
          <div
            className={`lg:col-span-5 flex justify-center lg:justify-end pt-4 lg:pt-0 transition-all duration-700 delay-200 ease-out ${
              hasEntered ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <AboutPortrait />
          </div>

        </div>

        {/* ── LOWER BLOCK: SHORT CIRCUIT JOURNEY, KEY STATEMENT & CTA ── */}
        <div
          className={`w-full max-w-4xl mx-auto flex flex-col items-center text-center space-y-6 sm:space-y-8 pt-4 border-t border-[var(--border)] transition-all duration-700 delay-300 ease-out ${
            hasEntered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {/* Compact 4-Stage Circuit Trace */}
          <AboutJourneyTrace isActive={hasEntered} />

          {/* Key Statement — Strong visual moment */}
          <div className="space-y-1.5 max-w-xl">
            <p className="text-sm sm:text-base md:text-lg font-medium text-[var(--foreground)] leading-snug">
              I didn&apos;t choose between hardware and software.
            </p>
            <p className="text-base sm:text-lg md:text-xl font-serif italic text-[var(--accent)] font-normal">
              I started connecting them.
            </p>
          </div>

          {/* About Page CTA — "More About Me →" linking to /about */}
          <div className="pt-1">
            <Link
              href="/about"
              className="group inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full border border-[var(--border-strong)] bg-[var(--background)] text-[var(--foreground)] font-medium text-xs sm:text-sm transition-all duration-200 hover:border-[var(--foreground)] hover:shadow-xs active:translate-y-0"
            >
              <span>More About Me</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1 text-[var(--accent)]" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
