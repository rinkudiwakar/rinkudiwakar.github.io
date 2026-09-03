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
      { threshold: 0.12 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      aria-label="01 About Me — Hardware to Software Story"
      className="relative w-full py-10 sm:py-14 lg:py-16 border-b border-[var(--border)] bg-[var(--background)] transition-colors duration-200 overflow-hidden"
    >
      <div className="container-hero flex flex-col space-y-8 sm:space-y-10 lg:space-y-12">
        
        {/* ── 1. UPPER BLOCK: TWO-COLUMN EDITORIAL OPENING ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-10 items-center">
          
          {/* LEFT: Section Label, Headline, Narrative, and Education Metadata */}
          <div className="lg:col-span-7 flex flex-col space-y-5 order-2 lg:order-1">
            
            {/* 01 / ABOUT ME Label */}
            <div
              className={`flex items-center gap-2 transition-all duration-600 ease-out ${
                hasEntered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
              }`}
            >
              <span className="font-mono text-[10.5px] sm:text-[11.5px] tracking-[0.2em] text-[var(--foreground-subtle)] uppercase">
                01 / ABOUT ME
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
            </div>

            {/* Line-by-line Revealed Headline */}
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] xl:text-4xl font-display font-bold tracking-tight text-[var(--foreground)] leading-[1.18]">
              <span
                className={`block transition-all duration-600 delay-100 ease-out ${
                  hasEntered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                }`}
              >
                I started with{" "}
                <span className="font-serif italic text-[var(--accent)] underline decoration-[var(--border-strong)] underline-offset-4 decoration-1">
                  hardware.
                </span>
              </span>
              <span
                className={`block transition-all duration-600 delay-200 ease-out ${
                  hasEntered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                }`}
              >
                Then I discovered{" "}
                <span className="font-serif italic text-[var(--accent)] underline decoration-[var(--border-strong)] underline-offset-4 decoration-1">
                  software.
                </span>
              </span>
            </h2>

            {/* Short Introduction Paragraph (Tight, 3-4 lines maximum) */}
            <div
              className={`space-y-2 text-xs sm:text-sm md:text-[14.5px] text-[var(--foreground-muted)] leading-relaxed max-w-xl transition-all duration-600 delay-300 ease-out ${
                hasEntered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
              }`}
            >
              <p>
                I&apos;m a final-year Electrical Engineering student at NIT Jalandhar,
                building across software, AI, and embedded hardware.
              </p>
              <p className="font-medium text-[var(--foreground)]">
                I like working where software meets the real world.
              </p>
            </div>

            {/* Compact Education / Focus Metadata Row */}
            <div
              className={`pt-3 border-t border-[var(--border)] grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-xl transition-all duration-600 delay-400 ease-out ${
                hasEntered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
              }`}
            >
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

          {/* RIGHT (Desktop) / TOP (Mobile): Framed Photograph with single instance */}
          <div className="lg:col-span-5 flex justify-center pl-2 xl:pl-4 order-1 lg:order-2">
            <AboutPortrait hasEntered={hasEntered} />
          </div>

        </div>

        {/* ── 2. LOWER BLOCK: SHORT CIRCUIT JOURNEY, WHERE THEY MEET & CTA ── */}
        <div
          className={`w-full max-w-4xl mx-auto flex flex-col items-center text-center space-y-5 sm:space-y-6 pt-4 border-t border-[var(--border)] transition-all duration-700 delay-300 ease-out ${
            hasEntered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}
        >
          {/* Subtle Circuit Trace Journey (HARDWARE → CURIOSITY → SOFTWARE → AI + HARDWARE) */}
          <AboutJourneyTrace isActive={hasEntered} />

          {/* "WHERE THEY MEET" Statement */}
          <div className="space-y-1.5 max-w-xl pt-1">
            <span className="font-mono text-[10px] sm:text-[10.5px] tracking-[0.2em] text-[var(--foreground-subtle)] uppercase block mb-1">
              WHERE THEY MEET
            </span>
            <p className="text-sm sm:text-base md:text-lg font-medium text-[var(--foreground)] leading-snug">
              I didn&apos;t choose between hardware and software.
            </p>
            <p className="text-base sm:text-lg md:text-xl font-serif italic text-[var(--accent)] font-normal">
              I started connecting them.
            </p>
          </div>

          {/* CTA Group with tighter gap and supporting line */}
          <div className="flex flex-col items-center space-y-2 pt-0.5">
            {/* Supporting Microcopy */}
            <span className="text-[11.5px] sm:text-xs text-[var(--foreground-muted)] font-mono">
              Want to know the rest of the story?
            </span>

            {/* Editorial "More About Me →" Link */}
            <Link
              href="/about"
              className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[var(--border-strong)] bg-[var(--background)] text-[var(--foreground)] font-medium text-xs sm:text-sm transition-all duration-200 hover:border-[var(--foreground)] hover:shadow-xs active:translate-y-0"
            >
              <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                More About Me
              </span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1.5 text-[var(--accent)]" />
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
