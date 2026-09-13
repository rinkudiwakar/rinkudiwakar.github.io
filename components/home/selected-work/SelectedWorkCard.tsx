"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import { SelectedProject } from "@/data/selected-work";

interface SelectedWorkCardProps {
  project: SelectedProject;
  index: number;
  isSectionInView: boolean;
}

export function SelectedWorkCard({
  project,
  index,
  isSectionInView,
}: SelectedWorkCardProps) {
  // Mobile sticky stack offset: Each successive card stacks slightly lower
  const mobileTopOffset = `calc(5rem + ${index * 14}px)`;

  return (
    <article
      className={`group relative flex flex-col rounded-2xl bg-[var(--background-card)] border border-[var(--border)] p-4 sm:p-5 md:p-6 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elevated)] hover:border-[var(--border-strong)] transition-all duration-500 ease-out md:relative md:top-auto ${
        isSectionInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{
        // Mobile sticky stacking; on desktop it is static/relative in grid
        top: mobileTopOffset,
        zIndex: 10 + index,
        // Entrance animation stagger (80–120ms between cards)
        transitionDelay: `${index * 100}ms`,
      }}
      aria-label={`${project.number} — ${project.name}`}
    >
      {/* ── 1. LARGE VISUAL AREA (DOMINANT TOP) ────────────────── */}
      <div className="relative w-full aspect-[16/10] overflow-hidden rounded-xl bg-[var(--background-subtle)] border border-[var(--border-subtle)] select-none">
        {/* Project Image */}
        <Image
          src={project.imageSrc}
          alt={`${project.name} interface preview`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          priority={index < 2}
          className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />

        {/* Subtle dark vignette overlay at bottom for discovery badge contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 md:opacity-0 md:group-hover:opacity-100 max-md:opacity-70 transition-opacity duration-300 pointer-events-none" />

        {/* Project Number Watermark Tag in Top-Right */}
        <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-[var(--background-card)]/85 backdrop-blur-md border border-[var(--border)] font-mono text-[11px] font-bold text-[var(--foreground-muted)] shadow-xs">
          {project.number}
        </div>

        {/* ── SYSTEM DISCOVERY LAYER (HOVER ON DESKTOP, SUBTLY VISIBLE ON MOBILE) ── */}
        <div className="absolute bottom-3 inset-x-3 flex items-center justify-center transition-all duration-300 ease-out transform opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 max-md:opacity-100 max-md:translate-y-0">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[var(--background-card)]/90 dark:bg-[#0d1117]/90 backdrop-blur-md border border-[var(--border)] shadow-md text-xs font-mono">
            <span className="text-[10px] uppercase tracking-wider text-[var(--accent)] font-semibold mr-1 hidden sm:inline">
              FLOW:
            </span>
            {project.discoveryPipeline.map((step, sIdx) => (
              <React.Fragment key={step}>
                <span className="text-[11px] font-medium text-[var(--foreground)]">
                  {step}
                </span>
                {sIdx < project.discoveryPipeline.length - 1 && (
                  <span className="text-[10px] text-[var(--foreground-subtle)]">
                    →
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* ── 2. CARD CONTENT BODY ───────────────────────────────── */}
      <div className="flex flex-col flex-1 mt-5 sm:mt-6 space-y-3.5 sm:space-y-4">
        {/* Category Row */}
        <div className="flex items-center gap-2">
          <span className="font-mono text-[11.5px] sm:text-xs text-[var(--accent)] font-semibold tracking-wide">
            {project.number}
          </span>
          <span className="text-[var(--border-strong)]">·</span>
          <span className="font-mono text-[11px] sm:text-[11.5px] uppercase tracking-wider text-[var(--foreground-subtle)] font-medium">
            {project.category}
          </span>
        </div>

        {/* Project Title with Interactive Arrow */}
        <h3 className="text-2xl sm:text-[26px] font-display font-bold tracking-tight text-[var(--foreground)] leading-tight flex items-center gap-1.5 transition-transform duration-200 group-hover:-translate-y-0.5">
          <Link
            href={project.caseStudyUrl}
            className="hover:text-[var(--accent)] transition-colors inline-flex items-center gap-1"
          >
            <span>{project.name}</span>
            <ArrowUpRight className="w-5 h-5 text-[var(--foreground-subtle)] transition-all duration-200 group-hover:text-[var(--accent)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </h3>

        {/* Description */}
        <p className="text-sm sm:text-[14.5px] text-[var(--foreground-muted)] leading-relaxed font-body flex-1">
          {project.description}
        </p>

        {/* Technology Pills */}
        <div className="flex flex-wrap items-center gap-1.5 pt-1">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-[var(--radius-sm)] bg-[var(--background-subtle)] border border-[var(--border-subtle)] font-mono text-[11px] text-[var(--foreground-muted)] font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* ── 3. ACTION BUTTONS ROW (PRIMARY EXPLORE & SECONDARY GITHUB) ── */}
        <div className="flex items-center gap-3 pt-2 sm:pt-3 border-t border-[var(--border-subtle)]">
          {/* Primary CTA: Explore ↗ */}
          <Link
            href={project.caseStudyUrl}
            className="group/btn inline-flex items-center justify-center gap-1.5 px-4 sm:px-5 py-2.5 rounded-[var(--radius-md)] bg-[var(--foreground)] text-[var(--background)] font-medium text-xs sm:text-sm transition-all duration-200 hover:shadow-[var(--shadow-elevated)] hover:-translate-y-0.5 active:translate-y-0 shrink-0"
          >
            <span>Explore</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 text-[var(--accent)]" />
          </Link>

          {/* Secondary CTA: GitHub ↗ */}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.name} GitHub repository (opens in a new tab)`}
            className="group/gh inline-flex items-center justify-center gap-1.5 px-3.5 sm:px-4 py-2.5 rounded-[var(--radius-md)] bg-transparent border border-[var(--border-strong)] text-[var(--foreground)] font-medium text-xs sm:text-sm transition-all duration-200 hover:border-[var(--foreground-muted)] hover:bg-[var(--background-subtle)] hover:-translate-y-0.5 active:translate-y-0 shrink-0"
          >
            <Github className="w-3.5 h-3.5 text-[var(--foreground-muted)] group-hover/gh:text-[var(--foreground)] transition-colors" />
            <span>GitHub</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[var(--foreground-subtle)] group-hover/gh:text-[var(--foreground)] transition-transform duration-200 group-hover/gh:translate-x-0.5 group-hover/gh:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </article>
  );
}
