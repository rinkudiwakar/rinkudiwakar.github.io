import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Github, ExternalLink, Lightbulb } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { getProjects } from "@/lib/content";
import { constructMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = constructMetadata({
  title: "Work & Projects",
  description:
    "Archive of software, AI systems, hardware, and quantitative tools built by Rinku Diwakar.",
  canonicalUrl: "/work",
});

export default function WorkPage() {
  const projects = getProjects();

  return (
    <main id="main-content" className="flex-1 flex flex-col">
      <Section className="py-16 md:py-24 border-b border-[var(--border)]">
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2">
            <Badge variant="accent">PROJECT ARCHIVE</Badge>
            <span className="text-xs font-mono text-[var(--foreground-subtle)]">
              {projects.length} Documented Systems
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight text-[var(--foreground)]">
            Things I’ve Built
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-[var(--foreground-muted)] font-normal leading-relaxed">
            Every project was built to explore a real problem, test an engineering
            hypothesis, and learn from physical and digital failure modes.
          </p>
        </div>
      </Section>

      <Section className="py-16 bg-[var(--background-subtle)]">
        <div className="space-y-8">
          {projects.map((project, idx) => (
            <Card
              key={project.slug}
              className="p-6 md:p-8 space-y-6 bg-[var(--background-card)] border-[var(--border-strong)] hover:border-[var(--accent-border)] transition-all duration-200"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-4 border-b border-[var(--border)]">
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono font-bold text-[var(--accent)]">
                      0{idx + 1}
                    </span>
                    {project.categories.map((cat) => (
                      <Badge key={cat} variant="mono">
                        {cat}
                      </Badge>
                    ))}
                    <Badge variant="default" className="text-[10px]">
                      {project.status}
                    </Badge>
                    {project.featured && (
                      <Badge variant="accent">Featured</Badge>
                    )}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-[var(--foreground)] mt-1">
                    {project.title}
                  </h2>
                  <p className="text-sm font-medium text-[var(--foreground-muted)]">
                    {project.tagline}
                  </p>
                </div>

                <div className="text-left sm:text-right text-xs font-mono text-[var(--foreground-subtle)] shrink-0">
                  {project.role && (
                    <div className="font-medium text-[var(--foreground)]">
                      {project.role}
                    </div>
                  )}
                  {project.teamSize && (
                    <div>{project.teamSize}-Person Team</div>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs md:text-sm font-body">
                <div className="space-y-2 p-4 rounded-[var(--radius-md)] bg-[var(--background-subtle)] border border-[var(--border-subtle)]">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-[var(--foreground-subtle)] font-semibold">
                    The Problem
                  </div>
                  <p className="text-[var(--foreground-muted)] leading-relaxed">
                    {project.problem}
                  </p>
                </div>

                <div className="space-y-2 p-4 rounded-[var(--radius-md)] bg-[var(--background-subtle)] border border-[var(--border-subtle)]">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-[var(--foreground-subtle)] font-semibold">
                    The Solution & Idea
                  </div>
                  <p className="text-[var(--foreground-muted)] leading-relaxed">
                    {project.idea}
                  </p>
                </div>
              </div>

              {project.lessons && project.lessons.length > 0 && (
                <div className="p-4 rounded-[var(--radius-md)] bg-[var(--background-subtle)] border border-[var(--border)] text-xs text-[var(--foreground)] flex items-start gap-3">
                  <Lightbulb className="w-4 h-4 text-[var(--accent)] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-mono font-bold uppercase tracking-wider block mb-0.5 text-[var(--foreground-muted)]">
                      Key Takeaway Earned
                    </span>
                    <span className="font-body leading-relaxed text-[var(--foreground)]">
                      “{project.lessons[0]}”
                    </span>
                  </div>
                </div>
              )}

              <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-[var(--border)]">
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded-sm bg-[var(--background-subtle)] text-[var(--foreground-muted)] border border-[var(--border)] text-[11px] font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 text-xs font-mono shrink-0">
                  {project.repositoryUrl && (
                    <a
                      href={project.repositoryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Source</span>
                      <ArrowUpRight className="w-3 h-3 text-[var(--foreground-subtle)]" />
                    </a>
                  )}

                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Demo</span>
                      <ArrowUpRight className="w-3 h-3 text-[var(--foreground-subtle)]" />
                    </a>
                  )}

                  <Link
                    href={`/work/${project.slug}`}
                    className="inline-flex items-center gap-1 font-semibold text-[var(--accent)] hover:underline"
                  >
                    <span>Full Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>
    </main>
  );
}
