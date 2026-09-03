"use client";

import * as React from "react";
import { ArrowRight } from "lucide-react";
import { PRADRIX_CONFIG } from "@/config/pradrix";
import { PradrixMacBook } from "./pradrix/PradrixMacBook";
import { BuiltItAnnotation } from "./pradrix/BuiltItAnnotation";

export function CurrentlyBuildingSection() {
  const sectionRef = React.useRef<HTMLElement>(null);
  const [isInView, setIsInView] = React.useState<boolean>(false);
  const [hasEntered, setHasEntered] = React.useState<boolean>(false);

  React.useEffect(() => {
    const element = sectionRef.current;
    if (!element || typeof IntersectionObserver !== "function") {
      setIsInView(true);
      setHasEntered(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
        if (entry.isIntersecting) {
          setHasEntered(true);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="currently-building"
      aria-label="01 Currently Building — Pradrix"
      className="relative w-full py-16 sm:py-20 lg:py-24 border-b border-[var(--border)] bg-[var(--background)] transition-colors duration-200 overflow-hidden"
    >
      <div className="container-hero flex flex-col items-center space-y-8 sm:space-y-10 lg:space-y-11">
        
        {/* ── 1. EDITORIAL INTRODUCTION & TYPOGRAPHIC HIERARCHY ── */}
        <div
          className={`w-full max-w-4xl mx-auto flex flex-col items-center text-center space-y-2.5 sm:space-y-3 transition-all duration-700 ease-out ${
            hasEntered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {/* Subtle editorial section label */}
          <div className="flex items-center gap-2">
            <span className="font-mono text-[10.5px] sm:text-[11.5px] tracking-[0.2em] text-[var(--foreground-subtle)] uppercase">
              01 / CURRENTLY BUILDING
            </span>
          </div>

          {/* PRADRIX Heading — Balanced visual scale */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold tracking-tight text-[var(--foreground)]">
            PRADRIX
          </h2>

          {/* Subtitle Statement */}
          <p className="text-sm sm:text-base lg:text-[17px] font-medium text-[var(--foreground)]">
            I&apos;m currently building Pradrix.
          </p>

          {/* Editorial Description — Constrained to ~780px max-width, center aligned */}
          <p className="text-xs sm:text-[13px] md:text-sm text-[var(--foreground-muted)] max-w-[780px] mx-auto leading-relaxed text-balance">
            {PRADRIX_CONFIG.description}
          </p>

          {/* Category / Technology Line — AI · Automation · Software · Systems */}
          <div className="flex items-center justify-center gap-2.5 sm:gap-3 text-[10.5px] sm:text-xs font-mono text-[var(--foreground-subtle)] pt-0.5">
            {PRADRIX_CONFIG.descriptors.map((item, idx) => (
              <React.Fragment key={item}>
                {idx > 0 && <span className="opacity-35">·</span>}
                <span>{item}</span>
              </React.Fragment>
            ))}
          </div>

          {/* Understated Product Preview Label */}
          <div className="flex items-center gap-1.5 pt-1" aria-hidden="true">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--foreground-muted)] opacity-60" />
            <span className="font-mono text-[9.5px] sm:text-[10.5px] tracking-widest uppercase text-[var(--foreground-subtle)]">
              PRODUCT PREVIEW
            </span>
          </div>
        </div>

        {/* ── 2. MACBOOK SHOWCASE WITH FLOATING macOS WINDOW & PLAYING VIDEO ── */}
        <div className="relative w-full max-w-[760px] lg:max-w-[880px] xl:max-w-[1000px] mx-auto flex items-center justify-center">
          {/* Laptop with smooth rising entrance */}
          <div
            className={`relative w-full transition-all duration-1000 ease-out ${
              hasEntered
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-14 scale-[0.95]"
            }`}
          >
            {/* Pradrix MacBook with space on all sides and continuous video playback */}
            <PradrixMacBook inView={isInView} />

            {/* "Built it." Hand-Drawn Annotation Pointing into the Screen Window */}
            <div
              className={`hidden md:block absolute -top-8 right-2 lg:-top-10 lg:right-6 xl:-top-11 xl:right-10 z-30 transition-all duration-700 delay-500 ${
                hasEntered
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-3 pointer-events-none"
              }`}
            >
              <BuiltItAnnotation />
            </div>
          </div>
        </div>

        {/* ── 3. ACTION FOOTER — VISIT PRADRIX CTA ── */}
        <div
          className={`flex items-center justify-center pt-1 transition-all duration-700 delay-300 ${
            hasEntered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {/* Visit Pradrix CTA Button */}
          <a
            href={PRADRIX_CONFIG.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-[var(--foreground)] text-[var(--background)] font-medium text-xs sm:text-sm transition-all duration-200 hover:shadow-[var(--shadow-elevated)] hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Visit Pradrix</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </div>

      </div>
    </section>
  );
}
