import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, AlertTriangle, ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { getLessons } from "@/lib/content";
import { constructMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = constructMetadata({
  title: "Thinking & Lessons — Rinku Diwakar",
  description:
    "Reflections on building real systems, technical failure modes, prioritization, and the philosophy of ownership.",
  canonicalUrl: "/thinking",
});

export default function ThinkingPage() {
  const lessons = getLessons();

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
              <Badge variant="accent">REFLECTIONS & MENTAL MODELS</Badge>
              <Badge variant="mono">Grounded Wisdom</Badge>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight text-[var(--foreground)]">
              What building taught me.
            </h1>

            <p className="text-lg sm:text-xl text-[var(--foreground-muted)] font-body leading-relaxed">
              Theory is clean, but real systems are messy. Here are the core
              principles, mental models, and painful mistakes earned across
              hardware, software, and venture building.
            </p>
          </div>
        </div>
      </Section>

      {/* Honest Postmortem on Major Failure */}
      <Section className="py-16 border-b border-[var(--border)] bg-[var(--background-subtle)]">
        <div className="max-w-3xl mx-auto space-y-6">
          <Card className="p-6 md:p-8 space-y-4 bg-[var(--background-card)] border-l-4 border-l-amber-500 border-[var(--border-strong)]">
            <div className="flex items-center gap-2 text-xs font-mono text-amber-500 uppercase tracking-wider font-semibold">
              <AlertTriangle className="w-4 h-4" />
              <span>The Biggest Personal Failure Mode</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-display font-bold text-[var(--foreground)]">
              “Trying to do too many things simultaneously.”
            </h2>

            <div className="prose-editorial text-sm sm:text-base text-[var(--foreground-muted)] font-body leading-relaxed space-y-3">
              <p>
                Early in my builder journey, I mistook high velocity across
                twenty divergent ideas for genuine progress. I would start an
                IoT experiment, sketch a SaaS UI, read a machine learning
                paper, and draft a trading strategy — all within the same 48-hour
                window.
              </p>
              <p>
                The outcome was predictable: twenty half-baked prototypes, zero
                production polish, and immense cognitive exhaustion.
              </p>
              <p className="text-[var(--foreground)] font-medium">
                The hardest lesson was learning to say &ldquo;no&rdquo; to good ideas so
                that the essential idea could actually reach completion. Doing
                three things exceptionally well beats chasing twenty half-finished
                experiments every single time.
              </p>
            </div>
          </Card>
        </div>
      </Section>

      {/* The 3 Core Principles */}
      <Section className="py-16 border-b border-[var(--border)]">
        <div className="max-w-3xl mx-auto space-y-16">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[var(--accent)] font-semibold">
              Operating Principles
            </span>
            <h2 className="text-3xl font-display font-bold text-[var(--foreground)]">
              Three Non-Negotiable Tenets
            </h2>
          </div>

          <div className="space-y-12">
            {lessons.map((lesson, idx) => (
              <article key={lesson.id} className="space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono text-[var(--accent)] font-semibold">
                  <span className="w-6 h-6 rounded-full bg-[var(--accent-subtle)] flex items-center justify-center text-[11px]">
                    0{idx + 1}
                  </span>
                  <span className="uppercase tracking-wider">
                    {lesson.category}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-display font-bold text-[var(--foreground)]">
                  {lesson.title}
                </h3>

                <blockquote className="p-4 rounded-[var(--radius-md)] bg-[var(--background-subtle)] border-l-4 border-l-[var(--accent)] text-base font-display font-semibold text-[var(--foreground)]">
                  “{lesson.principle}”
                </blockquote>

                <p className="text-base sm:text-lg text-[var(--foreground-muted)] font-body leading-relaxed">
                  {lesson.context}
                </p>

                {lesson.learnings && lesson.learnings.length > 0 && (
                  <div className="p-4 rounded-[var(--radius-md)] bg-[var(--background-card)] border border-[var(--border)] text-xs font-mono text-[var(--foreground-subtle)] space-y-2">
                    <span className="text-[10px] uppercase tracking-wider text-[var(--accent)] block font-bold">
                      Key Takeaways
                    </span>
                    <ul className="space-y-1 text-[var(--foreground)]">
                      {lesson.learnings.map((learn, lIdx) => (
                        <li key={lIdx} className="flex items-start gap-2">
                          <span className="text-[var(--accent)]">·</span>
                          <span>{learn}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </Section>

      {/* Next Step CTA */}
      <Section className="py-16 text-center">
        <div className="max-w-xl mx-auto space-y-6">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-[var(--foreground)]">
            See how these principles are applied in Pradrix.
          </h2>
          <div className="flex justify-center gap-4">
            <Link
              href="/pradrix"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-[var(--radius-md)] bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] font-medium text-sm transition-all"
            >
              <span>Explore Pradrix Methodology</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </Section>
    </main>
  );
}
