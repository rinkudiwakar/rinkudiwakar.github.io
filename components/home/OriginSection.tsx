import * as React from "react";
import Link from "next/link";
import { ArrowRight, Compass, Sparkles, BookOpen } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { getStoryChapters } from "@/lib/content";

export function OriginSection() {
  const chapters = getStoryChapters();
  const originChapter = chapters.find((c) => c.id === "origin");
  const engineeringChapter = chapters.find((c) => c.id === "engineering");

  return (
    <section
      id="origin"
      aria-label="Origin Story"
      className="w-full py-20 md:py-32 border-b border-[var(--border)] bg-[var(--background)] transition-colors duration-200"
    >
      <div className="container-editorial space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2">
            <Badge variant="accent">03 · ORIGIN</Badge>
            <span className="text-xs font-mono text-[var(--foreground-subtle)]">
              Narrative Foundation
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-6xl font-display font-bold tracking-tight text-[var(--foreground)] leading-[1.1]">
            It didn’t start with technology.
            <br />
            <span className="text-[var(--accent)]">
              It started with curiosity.
            </span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-[var(--foreground-muted)] font-normal leading-relaxed">
            Before there were circuits, terminals, or AI models, there was simply
            a desire to understand how the world around me operated.
          </p>
        </div>

        {/* Two-Column Editorial Prose Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Main Narrative Column (7 cols) */}
          <div className="lg:col-span-7 space-y-8 text-base md:text-lg text-[var(--foreground)] font-body leading-relaxed">
            {originChapter?.content.map((paragraph, idx) => (
              <p key={idx} className="text-[var(--foreground-muted)]">
                {paragraph}
              </p>
            ))}

            {engineeringChapter && (
              <div className="pt-4 space-y-4 border-t border-[var(--border)]">
                <h3 className="font-display font-bold text-xl md:text-2xl text-[var(--foreground)]">
                  {engineeringChapter.title}
                </h3>
                {engineeringChapter.content.map((paragraph, idx) => (
                  <p key={idx} className="text-[var(--foreground-muted)]">
                    {paragraph}
                  </p>
                ))}
              </div>
            )}

            <div className="pt-4">
              <Link
                href="/story"
                className="inline-flex items-center gap-2 text-sm font-mono font-medium text-[var(--accent)] hover:underline"
              >
                <span>Read the complete narrative journey</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Side Editorial Insights / Reflection Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Callout Quote 1 */}
            <Card className="p-6 space-y-4 bg-[var(--background-card)] border-l-4 border-l-[var(--accent)]">
              <div className="flex items-center gap-2 text-xs font-mono text-[var(--accent)] uppercase tracking-wider">
                <Compass className="w-4 h-4" />
                <span>Foundational Truth</span>
              </div>
              <blockquote className="font-display text-lg md:text-xl font-medium text-[var(--foreground)] leading-snug">
                “Technology was never an obsession for its own sake. It became a
                medium for solving problems, creating things, and understanding
                the world.”
              </blockquote>
              <div className="text-xs font-mono text-[var(--foreground-subtle)]">
                Early Curiosity → Software & Systems
              </div>
            </Card>

            {/* Callout Quote 2: Engineering Foundation */}
            <Card className="p-6 space-y-3 bg-[var(--background-subtle)]">
              <div className="flex items-center gap-2 text-xs font-mono text-[var(--foreground-muted)] uppercase tracking-wider">
                <BookOpen className="w-4 h-4 text-[var(--foreground)]" />
                <span>Analytical Rigor</span>
              </div>
              <h4 className="font-display font-semibold text-base text-[var(--foreground)]">
                Electrical Engineering at NIT Jalandhar
              </h4>
              <p className="text-xs md:text-sm text-[var(--foreground-muted)] leading-relaxed font-body">
                Provided deep training in mathematics, signals, and systems
                thinking. It taught me how to break complex, uncertain problems
                into structured first-principles engineering blocks.
              </p>
            </Card>

            {/* Quick Transition Note */}
            <div className="p-4 rounded-[var(--radius-lg)] bg-[var(--background-card)] border border-[var(--border)] text-xs text-[var(--foreground-muted)] font-mono flex items-center gap-3">
              <Sparkles className="w-4 h-4 text-[var(--accent)] shrink-0" />
              <span>Next: How curiosity evolved through 5 clear stages.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
