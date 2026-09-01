import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight, Github, ExternalLink, Cpu, CheckCircle2, Lightbulb } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { getProjects, getProjectBySlug } from "@/lib/content";
import { constructMetadata } from "@/lib/seo/metadata";

export async function generateStaticParams() {
  const projects = getProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return constructMetadata({
      title: "Project Not Found",
      canonicalUrl: `/work/${slug}`,
    });
  }

  return constructMetadata({
    title: `${project.title} — Case Study`,
    description: project.tagline,
    canonicalUrl: `/work/${project.slug}`,
  });
}

export default async function ProjectCaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const allProjects = getProjects();
  const currentIndex = allProjects.findIndex((p) => p.slug === slug);
  const nextProject = allProjects[(currentIndex + 1) % allProjects.length];

  return (
    <main id="main-content" className="flex-1 flex flex-col">
      {/* Top Header / Breadcrumb */}
      <Section className="pt-12 pb-16 border-b border-[var(--border)]">
        <div className="space-y-6">
          {/* Breadcrumb back to Work */}
          <Link
            href="/work"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to all projects</span>
          </Link>

          <div className="max-w-4xl space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              {project.categories.map((cat) => (
                <Badge key={cat} variant="accent">
                  {cat}
                </Badge>
              ))}
              <Badge variant="default">{project.status}</Badge>
              {project.teamSize && (
                <span className="text-xs font-mono text-[var(--foreground-subtle)]">
                  {project.teamSize}-Person Team · {project.role || "Lead"}
                </span>
              )}
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight text-[var(--foreground)]">
              {project.title}
            </h1>

            <p className="text-xl sm:text-2xl text-[var(--foreground-muted)] font-normal leading-relaxed">
              {project.tagline}
            </p>

            {/* Quick Proof Links */}
            <div className="pt-2 flex flex-wrap gap-3">
              {project.repositoryUrl && (
                <a
                  href={project.repositoryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-[var(--radius-md)] bg-[var(--background-card)] border border-[var(--border)] text-xs font-mono font-medium text-[var(--foreground)] hover:bg-[var(--background-subtle)] transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>View Repository</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[var(--foreground-subtle)]" />
                </a>
              )}

              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-[var(--radius-md)] bg-[var(--accent)] text-xs font-mono font-medium text-white hover:bg-[var(--accent-hover)] transition-colors shadow-xs"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Launch Live System</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
                </a>
              )}
            </div>
          </div>
        </div>
      </Section>

      {/* Case Study Deep-Dive */}
      <Section className="py-16 bg-[var(--background-subtle)] space-y-16">
        {/* Narrative Flow */}
        <div className="max-w-3xl space-y-12">
          {/* Section 1: Problem vs Concept */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono uppercase tracking-widest text-[var(--accent)]">
              01 · The Problem & Hypothesis
            </h2>
            <h3 className="text-2xl font-display font-bold text-[var(--foreground)]">
              Why this needed to be built
            </h3>
            <p className="text-base md:text-lg text-[var(--foreground-muted)] font-body leading-relaxed">
              {project.problem}
            </p>
          </div>

          <Card className="p-6 space-y-3 bg-[var(--background-card)] border-l-4 border-l-[var(--accent)]">
            <div className="text-xs font-mono uppercase tracking-wider text-[var(--accent)] font-semibold flex items-center gap-2">
              <Cpu className="w-4 h-4" />
              <span>The Core Idea</span>
            </div>
            <p className="text-base text-[var(--foreground)] font-body leading-relaxed">
              {project.idea}
            </p>
          </Card>

          {/* Section 2: Technical Approach & Architecture */}
          <div className="space-y-4 pt-4 border-t border-[var(--border)]">
            <h2 className="text-xs font-mono uppercase tracking-widest text-[var(--accent)]">
              02 · Technical Implementation
            </h2>
            <h3 className="text-2xl font-display font-bold text-[var(--foreground)]">
              How the system was architected
            </h3>
            <p className="text-base md:text-lg text-[var(--foreground-muted)] font-body leading-relaxed">
              {project.story}
            </p>

            {/* Architecture Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {project.technologies.map((tech) => (
                <div
                  key={tech}
                  className="flex items-center gap-2.5 p-3 rounded-[var(--radius-md)] bg-[var(--background-card)] border border-[var(--border)] text-xs font-mono text-[var(--foreground)]"
                >
                  <CheckCircle2 className="w-4 h-4 text-[var(--accent)] shrink-0" />
                  <span>{tech}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: What Building This Taught Me */}
          {project.lessons && project.lessons.length > 0 && (
            <div className="space-y-4 pt-4 border-t border-[var(--border)]">
              <h2 className="text-xs font-mono uppercase tracking-widest text-[var(--accent)]">
                03 · Key Takeaways Earned
              </h2>
              <div className="space-y-3">
                {project.lessons.map((lesson, idx) => (
                  <Card key={idx} className="p-6 space-y-2 bg-[var(--background-card)]">
                    <div className="flex items-center gap-2 text-xs font-mono text-[var(--foreground-subtle)] uppercase tracking-wider">
                      <Lightbulb className="w-4 h-4 text-[var(--accent)]" />
                      <span>Takeaway 0{idx + 1}</span>
                    </div>
                    <blockquote className="font-display text-lg md:text-xl font-medium text-[var(--foreground)] leading-snug">
                      “{lesson}”
                    </blockquote>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Next Project Footer Bar */}
        {nextProject && (
          <div className="pt-12 border-t border-[var(--border)] flex items-center justify-between">
            <Link
              href="/work"
              className="text-xs font-mono text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors"
            >
              ← All Projects
            </Link>

            <Link
              href={`/work/${nextProject.slug}`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)] hover:underline"
            >
              <span>Next: {nextProject.title}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </Section>
    </main>
  );
}
