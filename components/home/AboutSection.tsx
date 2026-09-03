"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight, GraduationCap, Landmark, Cpu } from "lucide-react";
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
      { threshold: 0.1 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      aria-label="01 About Me — Hardware to Software Story"
      className="relative w-full pt-8 sm:pt-12 lg:pt-14 pb-8 sm:pb-10 lg:pb-12 border-b border-[var(--border)] bg-[var(--background)] transition-colors duration-200 overflow-hidden scroll-mt-20"
    >
      {/* ── VERTICAL PAGINATION DOTS (AS SEEN ON FAR RIGHT IN REFERENCE UI) ── */}
      <div className="hidden xl:flex flex-col items-center gap-2.5 absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none select-none z-20">
        <div className="w-2 h-2 rounded-full bg-[#2563EB]" />
        <div className="w-2 h-2 rounded-full border border-[var(--border-strong)]" />
        <div className="w-2 h-2 rounded-full border border-[var(--border-strong)]" />
        <div className="w-2 h-2 rounded-full border border-[var(--border-strong)]" />
        <div className="w-2 h-2 rounded-full border border-[var(--border-strong)]" />
      </div>

      <div className="container-hero flex flex-col space-y-8 sm:space-y-10 lg:space-y-11">
        
        {/* ── 1. UPPER BLOCK: TWO-COLUMN EDITORIAL OPENING WITH PROFESSIONAL GAP & SCALE ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-14 items-center">
          
          {/* LEFT: Section Label, Headline, Narrative, and 3-Col Metadata */}
          <div className="lg:col-span-7 flex flex-col space-y-5 sm:space-y-6 max-w-2xl">
            
            {/* 01 / ABOUT ME Label with Blue Indicator */}
            <div
              className={`flex items-center gap-2.5 transition-all duration-500 ease-out ${
                hasEntered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
              }`}
            >
              <span className="font-mono text-[11.5px] sm:text-xs tracking-[0.2em] text-[var(--foreground-subtle)] uppercase font-semibold">
                01 / ABOUT ME
              </span>
              <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
            </div>

            {/* Main Headline — Enhanced Visual Scale */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] xl:text-[52px] font-display font-bold tracking-tight text-[var(--foreground)] leading-[1.12]">
              <span
                className={`block transition-all duration-500 delay-100 ease-out ${
                  hasEntered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                }`}
              >
                I started with{" "}
                <span className="font-serif italic font-bold text-[#2563EB]">
                  hardware.
                </span>
              </span>
              <span
                className={`block transition-all duration-500 delay-200 ease-out ${
                  hasEntered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                }`}
              >
                Then I discovered{" "}
                <span className="font-serif italic font-bold text-[#2563EB]">
                  software.
                </span>
              </span>
            </h2>

            {/* Short Introduction Copy — Increased Size & Line-Height */}
            <div
              className={`space-y-2.5 text-sm sm:text-base md:text-[17px] text-[var(--foreground-muted)] leading-relaxed transition-all duration-500 delay-300 ease-out ${
                hasEntered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
              }`}
            >
              <p>
                I&apos;m a final-year Electrical Engineering student at NIT Jalandhar,
                building across software, AI, and embedded hardware.
              </p>
              <p className="text-sm sm:text-base md:text-[17px] font-semibold text-[var(--foreground)]">
                I like working where software meets the real world.
              </p>
            </div>

            {/* 3-Column Metadata Row inside a frosted rounded rectangular box */}
            <div
              className={`p-3.5 sm:p-4 rounded-xl bg-[var(--background-card)] border border-[var(--border)] shadow-xs grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 transition-all duration-500 delay-400 ease-out ${
                hasEntered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
              }`}
            >
              {/* Col 1: Final Year with Graduation Cap */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[var(--background-subtle)] border border-[var(--border)] flex items-center justify-center shrink-0">
                  <GraduationCap className="w-5 h-5 text-[#2563EB]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--foreground-subtle)]">
                    FINAL YEAR
                  </span>
                  <span className="text-[12.5px] sm:text-xs md:text-[13px] font-bold text-[var(--foreground)]">
                    B.Tech — Electrical Eng.
                  </span>
                </div>
              </div>

              {/* Col 2: NIT Jalandhar with Classical Building Icon */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[var(--background-subtle)] border border-[var(--border)] flex items-center justify-center shrink-0">
                  <Landmark className="w-5 h-5 text-[#2563EB]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--foreground-subtle)]">
                    NIT JALANDHAR
                  </span>
                  <span className="text-[12.5px] sm:text-xs md:text-[13px] font-bold text-[var(--foreground)]">
                    2023 — 2027
                  </span>
                </div>
              </div>

              {/* Col 3: Focus with Microchip CPU Icon */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[var(--background-subtle)] border border-[var(--border)] flex items-center justify-center shrink-0">
                  <Cpu className="w-5 h-5 text-[#2563EB]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--foreground-subtle)]">
                    FOCUS
                  </span>
                  <span className="text-[12.5px] sm:text-xs md:text-[13px] font-bold text-[var(--foreground)]">
                    Software · AI · Embedded
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT: Framed Polaroid Photo with Balanced Professional Gap */}
          <div className="lg:col-span-5 flex justify-center lg:justify-center">
            <AboutPortrait hasEntered={hasEntered} />
          </div>

        </div>

        {/* ── 2. BOTTOM BLOCK: HORIZONTAL SCHEMATIC CIRCUIT BAR & CLIMAX ── */}
        <div
          className={`w-full max-w-5xl mx-auto flex flex-col items-center text-center space-y-5 pt-4 border-t border-[var(--border)] transition-all duration-700 delay-300 ease-out ${
            hasEntered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}
        >
          {/* Circuit Bar: Glowing Dots + Continuous Blue Segments + High-Contrast Card Icons */}
          <AboutJourneyTrace isActive={hasEntered} />

          {/* "WHERE THEY MEET" Statement — Visual Climax */}
          <div className="space-y-1.5 max-w-xl pt-1">
            <span className="inline-block px-2.5 py-0.5 rounded-full font-mono text-[9.5px] sm:text-[10px] tracking-[0.2em] bg-[var(--background-subtle)] border border-[var(--border)] text-[var(--foreground-subtle)] uppercase mb-0.5">
              WHERE THEY MEET
            </span>
            <p className="text-base sm:text-lg md:text-xl font-medium text-[var(--foreground)] leading-snug">
              I didn&apos;t choose between hardware and software.
            </p>
            <p className="text-lg sm:text-xl md:text-2xl font-serif italic text-[#2563EB] font-normal">
              I started connecting them.
            </p>
          </div>

          {/* CTA Group: "Want to know the rest of the story?" + "More About Me →" */}
          <div className="flex flex-col items-center space-y-1.5 pt-0.5">
            <span className="text-xs text-[var(--foreground-muted)] font-mono">
              Want to know the rest of the story?
            </span>

            <Link
              href="/about"
              className="group inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-[var(--foreground)] text-[var(--background)] font-medium text-xs sm:text-sm transition-all duration-200 hover:shadow-[var(--shadow-elevated)] hover:-translate-y-0.5 active:translate-y-0"
            >
              <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                More About Me
              </span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1 text-[#2563EB]" />
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
