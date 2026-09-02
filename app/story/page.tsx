import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { getStoryChapters, getJourneyStages } from "@/lib/content";
import { constructMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = constructMetadata({
  title: "My Story — Rinku Diwakar",
  description:
    "The journey of a builder: from childhood curiosity and electrical engineering at NIT Jalandhar to shipping real systems and founding Pradrix.",
  canonicalUrl: "/story",
});

export default function StoryPage() {
  const chapters = getStoryChapters();
  const journey = getJourneyStages();

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
              <Badge variant="accent">AUTOBIOGRAPHY</Badge>
              <Badge variant="mono">5-Stage Evolution</Badge>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight text-[var(--foreground)]">
              “It didn’t start with technology. It started with curiosity.”
            </h1>

            <p className="text-lg sm:text-xl text-[var(--foreground-muted)] font-body leading-relaxed">
              How questioning physical mechanics and studying electrical
              engineering at NIT Jalandhar shaped an engineering mindset grounded
              in first principles, real systems, and relentless execution.
            </p>
          </div>
        </div>
      </Section>

      {/* Chapters Prose */}
      <Section className="py-16 border-b border-[var(--border)]">
        <div className="max-w-3xl mx-auto space-y-16">
          {chapters.map((chapter, idx) => (
            <article key={chapter.id} className="space-y-6">
              <div className="flex items-center gap-2 text-xs font-mono text-[var(--accent)] font-semibold">
                <span className="w-6 h-6 rounded-full bg-[var(--accent-subtle)] flex items-center justify-center text-[11px]">
                  0{idx + 1}
                </span>
                {chapter.period && (
                  <span className="uppercase tracking-wider">{chapter.period}</span>
                )}
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-[var(--foreground)]">
                  {chapter.title}
                </h2>
                <p className="text-sm font-mono text-[var(--accent)] mt-1">
                  {chapter.subtitle}
                </p>
              </div>

              <div className="prose-editorial text-base sm:text-lg text-[var(--foreground-muted)] font-body leading-relaxed space-y-4">
                {chapter.content.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              {chapter.keyInsight && (
                <Card className="p-5 bg-[var(--background-subtle)] border-l-4 border-l-[var(--accent)] text-sm font-mono text-[var(--foreground)]">
                  <span className="text-[10px] uppercase tracking-wider text-[var(--accent)] block mb-1">
                    Core Realization
                  </span>
                  “{chapter.keyInsight}”
                </Card>
              )}
            </article>
          ))}
        </div>
      </Section>

      {/* 5-Stage Evolution Progression */}
      <Section className="py-16 bg-[var(--background-subtle)] border-b border-[var(--border)]">
        <div className="space-y-12">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[var(--accent)] font-semibold">
              The Journey Framework
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-[var(--foreground)]">
              The Five Stages of Evolution
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {journey.map((stage, idx) => (
              <Card
                key={stage.id}
                className="p-5 space-y-3 bg-[var(--background-card)] border-[var(--border-strong)] flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[var(--accent)]">
                      0{idx + 1}
                    </span>
                    {stage.period && (
                      <Badge variant="mono" className="text-[9px]">
                        {stage.period}
                      </Badge>
                    )}
                  </div>
                  <h3 className="font-display font-bold text-base text-[var(--foreground)]">
                    {stage.title}
                  </h3>
                  <p className="text-xs text-[var(--foreground-muted)] font-body leading-relaxed">
                    {stage.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-[var(--border-subtle)] text-[11px] font-mono text-[var(--accent)]">
                  {stage.summary}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Next Step CTA */}
      <Section className="py-16 text-center">
        <div className="max-w-xl mx-auto space-y-6">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-[var(--foreground)]">
            Explore what was built along the way.
          </h2>
          <div className="flex justify-center gap-4">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-[var(--radius-md)] bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] font-medium text-sm transition-all"
            >
              <span>View Projects Archive</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </Section>
    </main>
  );
}
