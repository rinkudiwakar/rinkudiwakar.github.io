"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { selectedProjects } from "@/data/selected-work";
import { SelectedWorkCard } from "./SelectedWorkCard";

export function SelectedWorkSection() {
  const sectionRef = React.useRef<HTMLElement>(null);
  const [isInView, setIsInView] = React.useState<boolean>(false);

  React.useEffect(() => {
    const element = sectionRef.current;
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
      { threshold: 0.06 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="selected-work"
      aria-label="02 Selected Work — Curated Products & Systems"
      className="relative w-full pt-10 sm:pt-14 md:pt-16 pb-14 sm:pb-18 md:pb-20 border-b border-[var(--border)] bg-[var(--background)] transition-colors duration-200 overflow-visible scroll-mt-20"
    >
      <div className="container-hero flex flex-col items-center space-y-8 sm:space-y-10">
        {/* ── 1. SECTION HEADER ───────────────────────────────── */}
        <div className="w-full max-w-4xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-[var(--border)]">
          <div className="space-y-2.5 max-w-2xl">
            {/* Section Tag */}
            <div
              className={`flex items-center gap-2.5 transition-all duration-500 ease-out ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
              }`}
            >
              <span className="font-mono text-[11.5px] sm:text-xs tracking-[0.2em] text-[var(--foreground-subtle)] uppercase font-semibold">
                02 / SELECTED WORK
              </span>
              <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
            </div>

            {/* Main Heading */}
            <h2
              className={`text-2xl sm:text-3xl md:text-4xl font-display font-bold tracking-tight text-[var(--foreground)] transition-all duration-600 ease-out ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "100ms" }}
            >
              Things I&apos;ve built.
            </h2>

            {/* Supporting Text */}
            <p
              className={`text-sm sm:text-base text-[var(--foreground-muted)] leading-relaxed font-body transition-all duration-600 ease-out ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
              }`}
              style={{ transitionDelay: "160ms" }}
            >
              A curated selection of products, systems and experiments.
            </p>
          </div>

          {/* Desktop Top Archive Link */}
          <Link
            href="/work"
            className={`hidden md:inline-flex items-center gap-1.5 text-xs font-mono font-medium text-[var(--foreground-muted)] hover:text-[var(--foreground)] pb-1 transition-all duration-500 ease-out ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <span>All projects archive</span>
            <ArrowRight className="w-3.5 h-3.5 text-[var(--accent)]" />
          </Link>
        </div>

        {/* ── 2. REFINED CARDS GRID (COMPACT, EDITORIAL 2-COL ON DESKTOP, STICKY ON MOBILE) ── */}
        <div className="w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 sm:gap-y-14">
          {selectedProjects.map((project, index) => (
            <SelectedWorkCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>

        {/* ── 3. SECTION ENDING LINK (VIEW ALL WORK →) ─────────── */}
        <div
          className={`w-full flex flex-col items-center justify-center pt-8 sm:pt-12 pb-2 relative z-20 transition-all duration-500 ease-out ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}
          style={{ transitionDelay: "400ms" }}
        >
          <Link
            href="/work"
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--background-card)] hover:bg-[var(--background-subtle)] border border-[var(--border)] hover:border-[var(--border-strong)] text-[var(--foreground)] font-medium text-xs sm:text-sm shadow-xs hover:shadow-[var(--shadow-card)] transition-all duration-200"
          >
            <span className="relative">
              View all work
              <span className="absolute left-0 -bottom-0.5 w-full h-[1px] bg-current scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left opacity-70" />
            </span>
            <ArrowRight className="w-3.5 h-3.5 text-[var(--accent)] transition-transform duration-300 group-hover:translate-x-1.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
