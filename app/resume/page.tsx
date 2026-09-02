import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, GraduationCap, Code, Briefcase, ShieldCheck, Mail, ArrowUpRight, ExternalLink } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { getProfile, getProjects, getProofClaims } from "@/lib/content";
import { constructMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = constructMetadata({
  title: "Resume & Evidence Document — Rinku Diwakar",
  description:
    "Verifiable engineering credentials, systems architecture experience, and education record for Rinku Diwakar.",
  canonicalUrl: "/resume",
});

export default function ResumePage() {
  const profile = getProfile();
  const projects = getProjects();
  const proofs = getProofClaims();

  return (
    <main id="main-content" className="flex-1 flex flex-col">
      {/* Header Section */}
      <Section className="pt-12 pb-16 border-b border-[var(--border)]">
        <div className="space-y-6">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Journal</span>
          </Link>

          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2">
              <Badge variant="accent">CURRICULUM VITAE</Badge>
              <Badge variant="mono">Verifiable Evidence Document</Badge>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight text-[var(--foreground)]">
              Rinku Diwakar
            </h1>

            <p className="text-lg sm:text-xl text-[var(--foreground-muted)] font-body leading-relaxed max-w-2xl">
              Builder working across software engineering, applied AI, and
              hardware-software systems. Founder of Pradrix.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2 text-xs font-mono text-[var(--foreground-muted)]">
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[var(--accent)]" />
                rinkudiwakar01@gmail.com
              </span>
              <span>·</span>
              <a
                href="https://github.com/rinkudiwakar"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--accent)] transition-colors"
              >
                github.com/rinkudiwakar ↗
              </a>
              <span>·</span>
              <a
                href="https://linkedin.com/in/rinku-diwakar"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--accent)] transition-colors"
              >
                linkedin.com/in/rinku-diwakar ↗
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* Main Resume Content */}
      <Section className="py-16">
        <div className="max-w-3xl space-y-16">
          {/* 1. Education */}
          <section className="space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono text-[var(--accent)] uppercase tracking-wider font-semibold">
              <GraduationCap className="w-4 h-4" />
              <span>Education</span>
            </div>

            <Card className="p-6 space-y-4 bg-[var(--background-card)] border-[var(--border-strong)]">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <div>
                  <h3 className="font-display font-bold text-xl text-[var(--foreground)]">
                    {profile.education.institution}
                  </h3>
                  <p className="text-sm font-mono text-[var(--accent)] font-medium">
                    {profile.education.degree} in {profile.education.field}
                  </p>
                </div>
                <Badge variant="mono" className="text-xs shrink-0 self-start sm:self-auto">
                  2023 – 2027 · CGPA: 7.44
                </Badge>
              </div>

              <div className="pt-2 border-t border-[var(--border-subtle)] space-y-2 text-xs font-mono text-[var(--foreground-muted)]">
                <span className="text-[10px] uppercase tracking-wider text-[var(--foreground-subtle)] block">
                  Core Engineering & Systems Focus:
                </span>
                <div className="flex flex-wrap gap-2">
                  {profile.education.focus.map((focus) => (
                    <span
                      key={focus}
                      className="px-2.5 py-1 rounded bg-[var(--background-subtle)] border border-[var(--border-subtle)] text-[var(--foreground)]"
                    >
                      {focus}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          </section>

          {/* 2. Technical Stack */}
          <section className="space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono text-[var(--accent)] uppercase tracking-wider font-semibold">
              <Code className="w-4 h-4" />
              <span>Technical Competencies (content.md)</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="p-5 space-y-2 bg-[var(--background-card)] border-[var(--border-strong)]">
                <span className="text-xs font-mono uppercase tracking-wider text-[var(--accent)] font-semibold">
                  Programming & Backend
                </span>
                <p className="text-xs font-mono text-[var(--foreground-muted)] leading-relaxed">
                  Python, C++, SQL, JavaScript, TypeScript, FastAPI, Flask, REST APIs, Celery, Redis, React.js
                </p>
              </Card>

              <Card className="p-5 space-y-2 bg-[var(--background-card)] border-[var(--border-strong)]">
                <span className="text-xs font-mono uppercase tracking-wider text-[var(--accent)] font-semibold">
                  AI, ML & Generative AI
                </span>
                <p className="text-xs font-mono text-[var(--foreground-muted)] leading-relaxed">
                  PyTorch, TensorFlow, Scikit-learn, XGBoost, Pandas, NumPy, RAG, Agentic AI, LangChain, Hugging Face, Vector DBs
                </p>
              </Card>

              <Card className="p-5 space-y-2 bg-[var(--background-card)] border-[var(--border-strong)]">
                <span className="text-xs font-mono uppercase tracking-wider text-[var(--accent)] font-semibold">
                  Cloud, DevOps & MLOps
                </span>
                <p className="text-xs font-mono text-[var(--foreground-muted)] leading-relaxed">
                  AWS (EC2, S3), Docker, Kubernetes, Amazon EKS, GitHub Actions CI/CD, MLflow, DVC
                </p>
              </Card>

              <Card className="p-5 space-y-2 bg-[var(--background-card)] border-[var(--border-strong)]">
                <span className="text-xs font-mono uppercase tracking-wider text-[var(--accent)] font-semibold">
                  Databases & Embedded
                </span>
                <p className="text-xs font-mono text-[var(--foreground-muted)] leading-relaxed">
                  PostgreSQL, MySQL, MongoDB, Supabase, Raspberry Pi, Arduino C++, Linux, Git, Postman
                </p>
              </Card>
            </div>
          </section>

          {/* 3. Featured System Architectures */}
          <section className="space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono text-[var(--accent)] uppercase tracking-wider font-semibold">
              <Briefcase className="w-4 h-4" />
              <span>Engineered Systems & Projects</span>
            </div>

            <div className="space-y-4">
              {projects.map((project) => (
                <Card
                  key={project.slug}
                  className="p-6 space-y-3 bg-[var(--background-card)] border-[var(--border-strong)]"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h4 className="font-display font-bold text-lg text-[var(--foreground)]">
                      {project.title}
                    </h4>
                    <span className="text-xs font-mono text-[var(--accent)] uppercase font-semibold">
                      {project.status}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm font-mono text-[var(--accent)] font-medium">
                    {project.tagline}
                  </p>

                  <p className="text-xs sm:text-sm text-[var(--foreground-muted)] font-body leading-relaxed">
                    {project.problem}
                  </p>

                  <div className="pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-[var(--border-subtle)]">
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded text-[10px] font-mono bg-[var(--background-subtle)] text-[var(--foreground-muted)]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={`/work/${project.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-mono text-[var(--accent)] hover:underline"
                    >
                      <span>Read Case Study</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* 4. Verifiable Institutional Evidence */}
          <section className="space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono text-[var(--success)] uppercase tracking-wider font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>Verifiable Evidence & Records</span>
            </div>

            <Card className="p-6 space-y-4 bg-[var(--background-card)] border-[var(--border-strong)]">
              <div className="space-y-3 divide-y divide-[var(--border-subtle)]">
                {proofs.map((proof) => (
                  <div
                    key={proof.id}
                    className="pt-3 first:pt-0 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono"
                  >
                    <div>
                      <div className="text-[var(--foreground)] font-medium">
                        {proof.claim}
                      </div>
                      <div className="text-[var(--foreground-subtle)] text-[11px]">
                        {proof.sourceType} {proof.date && `· ${proof.date}`}
                      </div>
                    </div>

                    <a
                      href={proof.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[var(--accent)] hover:underline shrink-0"
                    >
                      <span>Verify Source</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                ))}
              </div>
            </Card>
          </section>
        </div>
      </Section>
    </main>
  );
}
