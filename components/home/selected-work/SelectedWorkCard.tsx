"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import { SelectedProject } from "@/data/selected-work";

interface SelectedWorkCardProps {
  project: SelectedProject;
  index: number;
}

export function SelectedWorkCard({ project, index }: SelectedWorkCardProps) {
  const cardRef = React.useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = React.useState<boolean>(false);

  React.useEffect(() => {
    const el = cardRef.current;
    if (!el || typeof IntersectionObserver !== "function") {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Check if viewport is mobile (< 768px) for sticky stacking
  const [isMobile, setIsMobile] = React.useState<boolean>(false);

  React.useEffect(() => {
    const updateSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <article
      ref={cardRef}
      className={`group flex flex-col w-full max-w-[390px] mx-auto rounded-3xl bg-[var(--background-card)] border border-[var(--border)] px-5 sm:px-6 pb-6 sm:pb-7 pt-0 shadow-[0_12px_36px_rgba(0,0,0,0.06)] dark:shadow-[0_12px_36px_rgba(0,0,0,0.45)] hover:shadow-[0_18px_48px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_18px_48px_rgba(0,0,0,0.6)] hover:border-[var(--border-strong)] mt-8 sm:mt-10 ${
        isMobile ? "sticky" : "relative"
      } ${
        isVisible
          ? "opacity-100 blur-0 translate-y-0 scale-100"
          : "opacity-0 blur-md translate-y-8 scale-[0.94]"
      }`}
      style={{
        // Smooth blur-to-focus transition coming out on scroll
        transition:
          "filter 0.75s cubic-bezier(0.16, 1, 0.3, 1), transform 0.75s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.75s ease-out, box-shadow 0.3s ease, border-color 0.3s ease",
        transitionDelay: `${(index % 2) * 120}ms`,
        top: isMobile ? `calc(5rem + ${index * 12}px)` : undefined,
        zIndex: isMobile ? 10 + index : 1,
      }}
      aria-label={`${project.number} — ${project.name}`}
    >
      {/* ── 1. PROTRUDING ROUNDED TOP VISUAL (EXACT MATCH TO REFERENCE UI) ── */}
      <div className="relative -mt-7 sm:-mt-9 w-full aspect-[16/10] overflow-hidden rounded-2xl bg-[var(--background-subtle)] border border-[var(--border-subtle)] shadow-[0_8px_20px_rgba(0,0,0,0.08)] select-none">
        {/* Project Image */}
        <Image
          src={project.imageSrc}
          alt={`${project.name} preview`}
          fill
          sizes="(max-width: 768px) 100vw, 400px"
          priority={index < 2}
          className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
        />

        {/* Subtle dark vignette overlay at bottom for discovery badge contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 md:opacity-0 md:group-hover:opacity-100 max-md:opacity-80 transition-opacity duration-300 pointer-events-none" />

        {/* Project Number Watermark Tag in Top-Right */}
        <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-md bg-[var(--background-card)]/90 backdrop-blur-md border border-[var(--border)] font-mono text-[10.5px] font-bold text-[var(--foreground-muted)] shadow-xs">
          {project.number}
        </div>

        {/* ── SYSTEM DISCOVERY LAYER (HIGH CONTRAST & CLEAR READABILITY) ── */}
        <div className="absolute bottom-2.5 inset-x-2.5 flex items-center justify-center transition-all duration-300 ease-out transform opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 max-md:opacity-100 max-md:translate-y-0 pointer-events-none">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/85 backdrop-blur-md border border-white/20 shadow-xl text-xs font-mono select-none">
            <span className="text-[9.5px] uppercase tracking-wider text-sky-400 font-bold mr-0.5">
              FLOW:
            </span>
            {project.discoveryPipeline.map((step, sIdx) => (
              <React.Fragment key={step}>
                <span className="text-[11px] font-semibold text-white drop-shadow-xs">
                  {step}
                </span>
                {sIdx < project.discoveryPipeline.length - 1 && (
                  <span className="text-[10px] text-white/60">
                    →
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* ── 2. CARD CONTENT BODY (CLEAN WHITESPACE & REFINED HIERARCHY) ── */}
      <div className="flex flex-col flex-1 pt-5 sm:pt-6 space-y-3">
        {/* Category & Number Row */}
        <div className="flex items-center gap-2">
          <span className="font-mono text-[11px] text-[var(--accent)] font-semibold tracking-wide">
            {project.number}
          </span>
          <span className="text-[var(--border-strong)] text-xs">·</span>
          <span className="font-mono text-[10.5px] sm:text-[11px] uppercase tracking-wider text-[var(--foreground-subtle)] font-medium">
            {project.category}
          </span>
        </div>

        {/* Project Title with Micro-Shift */}
        <h3 className="text-xl sm:text-[23px] font-display font-bold tracking-tight text-[var(--foreground)] leading-tight flex items-center gap-1.5 transition-transform duration-200 group-hover:-translate-y-0.5">
          <Link
            href={project.caseStudyUrl}
            className="hover:text-[var(--accent)] transition-colors inline-flex items-center gap-1"
          >
            <span>{project.name}</span>
            <ArrowUpRight className="w-4 h-4 text-[var(--foreground-subtle)] transition-all duration-200 group-hover:text-[var(--accent)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </h3>

        {/* Description */}
        <p className="text-xs sm:text-[13.5px] text-[var(--foreground-muted)] leading-relaxed font-body line-clamp-3 flex-1">
          {project.description}
        </p>

        {/* Technology Pills */}
        <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded-md bg-[var(--background-subtle)] border border-[var(--border-subtle)] font-mono text-[10.5px] text-[var(--foreground-muted)] font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* ── 3. ACTION BUTTONS (VIBRANT ACCENT CTA LIKE REFERENCE UI) ── */}
        <div className="flex items-center gap-2.5 pt-3 border-t border-[var(--border-subtle)]">
          {/* Primary CTA: READ MORE / Explore ↗ */}
          <Link
            href={project.caseStudyUrl}
            className="group/btn inline-flex items-center justify-center gap-1.5 px-4 sm:px-5 py-2 rounded-xl bg-[var(--accent)] text-white font-semibold text-xs tracking-wider uppercase shadow-[0_4px_14px_rgba(37,99,235,0.32)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.45)] hover:bg-[var(--accent-hover)] transition-all duration-200 active:translate-y-px shrink-0"
          >
            <span>Explore</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
          </Link>

          {/* Secondary CTA: GitHub ↗ */}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.name} GitHub repository (opens in a new tab)`}
            className="group/gh inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl bg-transparent border border-[var(--border-strong)] text-[var(--foreground)] font-medium text-xs transition-all duration-200 hover:border-[var(--foreground-muted)] hover:bg-[var(--background-subtle)] active:translate-y-px shrink-0"
          >
            <Github className="w-3.5 h-3.5 text-[var(--foreground-muted)] group-hover/gh:text-[var(--foreground)] transition-colors" />
            <span>GitHub</span>
            <ArrowUpRight className="w-3 h-3 text-[var(--foreground-subtle)] group-hover/gh:text-[var(--foreground)] transition-transform duration-200 group-hover/gh:translate-x-0.5 group-hover/gh:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </article>
  );
}
