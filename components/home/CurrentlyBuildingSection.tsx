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
      { threshold: 0.12 }
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
      <div className="container-hero flex flex-col items-center space-y-10 sm:space-y-12">
        {/* ── STAGE 1: Editorial Introduction ── */}
        <div
          className={`w-full max-w-3xl mx-auto flex flex-col items-center text-center space-y-3 transition-all duration-700 ease-out ${
            hasEntered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {/* Section Chapter Overline */}
          <div className="flex items-center gap-2">
            <span className="font-mono text-[11px] sm:text-xs tracking-widest text-[var(--foreground-subtle)] uppercase">
              01 / CURRENTLY BUILDING
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          </div>

          {/* Product Name */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-[var(--foreground)]">
            PRADRIX
          </h2>

          {/* Headline Statement */}
          <p className="text-base sm:text-lg md:text-xl font-medium text-[var(--foreground)]">
            I&apos;m currently building Pradrix.
          </p>

          {/* Short Description */}
          <p className="text-xs sm:text-sm md:text-[15px] text-[var(--foreground-muted)] max-w-2xl leading-relaxed">
            {PRADRIX_CONFIG.description}
          </p>

          {/* Technology & Product Descriptors */}
          <div className="flex items-center gap-2 sm:gap-3 text-[11px] sm:text-xs font-mono text-[var(--foreground-subtle)] pt-1">
            {PRADRIX_CONFIG.descriptors.map((item, idx) => (
              <React.Fragment key={item}>
                {idx > 0 && <span className="opacity-40">·</span>}
                <span>{item}</span>
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* ── STAGE 2 & 3: Smooth Rising MacBook with Live Playing Video ── */}
        <div className="relative w-full max-w-[680px] lg:max-w-[780px] xl:max-w-[860px] mx-auto flex items-center justify-center">
          {/* The Laptop with smooth rise/reveal */}
          <div
            className={`relative w-full transition-all duration-1000 ease-out ${
              hasEntered
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-16 scale-[0.94]"
            }`}
          >
            <PradrixMacBook inView={isInView} />

            {/* STAGE 5: "Built it." Hand-drawn Annotation */}
            <div
              className={`hidden md:block absolute -top-8 -right-8 lg:-top-10 lg:-right-12 z-30 transition-all duration-700 delay-500 ${
                hasEntered
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-3 pointer-events-none"
              }`}
            >
              <BuiltItAnnotation />
            </div>
          </div>
        </div>

        {/* ── STAGE 4: Action Footer — "Visit Pradrix →" ── */}
        <div
          className={`flex items-center justify-center pt-2 transition-all duration-700 delay-300 ${
            hasEntered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {/* Visit Pradrix CTA Button */}
          <a
            href={PRADRIX_CONFIG.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-[var(--foreground)] text-[var(--background)] font-medium text-sm transition-all duration-200 hover:shadow-[var(--shadow-elevated)] hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Visit Pradrix</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
