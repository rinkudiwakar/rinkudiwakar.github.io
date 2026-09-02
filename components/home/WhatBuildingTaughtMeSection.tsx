import * as React from "react";
import { Compass, AlertTriangle, Layers, ShieldCheck, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { getLessons } from "@/lib/content";

export function WhatBuildingTaughtMeSection() {
  const lessons = getLessons();

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "failure":
        return <AlertTriangle className="w-4 h-4 text-amber-600" />;
      case "technical":
        return <Layers className="w-4 h-4 text-[var(--accent)]" />;
      case "building":
      case "personal":
        return <Compass className="w-4 h-4 text-[var(--accent)]" />;
      default:
        return <ShieldCheck className="w-4 h-4 text-[var(--accent)]" />;
    }
  };

  return (
    <section
      id="lessons"
      aria-label="What Building Taught Me"
      className="w-full py-20 md:py-32 border-b border-[var(--border)] bg-[var(--background)] transition-colors duration-200"
    >
      <div className="container-editorial space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2">
            <Badge variant="accent">07 · WHAT BUILDING TAUGHT ME</Badge>
            <span className="text-xs font-mono text-[var(--foreground-subtle)]">
              Reflections & Operating Principles
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-[var(--foreground)] leading-[1.08]">
            Hard lessons earned through execution.
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-[var(--foreground-muted)] font-normal leading-relaxed">
            Building systems when things break teaches you realities that tutorials
            and theories never mention. These are the principles that now guide how
            I choose, architect, and finish projects.
          </p>
        </div>

        {/* Featured Honest Reflection: The Biggest Failure */}
        <div className="p-6 md:p-8 rounded-[var(--radius-xl)] bg-amber-50/70 dark:bg-amber-950/20 border border-amber-300 dark:border-amber-800 space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono text-amber-900 dark:text-amber-300 uppercase tracking-wider font-bold">
            <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
            <span>The Biggest Personal Failure: Trying to do too many things simultaneously</span>
          </div>

          <h3 className="font-display font-bold text-xl md:text-2xl text-[var(--foreground)]">
            Being busy is not the same as making meaningful progress.
          </h3>

          <p className="text-sm md:text-base text-[var(--foreground-muted)] font-body leading-relaxed max-w-3xl">
            Early on, my natural curiosity led me to explore every new library,
            language, and tool at once. I started multiple ambitious experiments
            simultaneously. The result was scattered energy, mental fatigue, and
            several unfinished half-prototypes. The hardest lesson I had to learn
            was ruthless prioritization: choosing <em>one</em> problem worth
            solving, saying no to distracting tangents, and seeing the system
            through to production.
          </p>

          <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono text-[var(--foreground-muted)]">
            <span className="px-2.5 py-1 rounded-sm bg-white/80 dark:bg-black/40 border border-amber-200 dark:border-amber-900">
              Focus on fewer things
            </span>
            <span className="px-2.5 py-1 rounded-sm bg-white/80 dark:bg-black/40 border border-amber-200 dark:border-amber-900">
              Finish what you start
            </span>
            <span className="px-2.5 py-1 rounded-sm bg-white/80 dark:bg-black/40 border border-amber-200 dark:border-amber-900">
              Depth over superficial breadth
            </span>
          </div>
        </div>

        {/* Structured Lesson Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {lessons.map((lesson, idx) => (
            <Card
              key={lesson.id}
              className="p-6 space-y-4 bg-[var(--background-card)] border-[var(--border-strong)] flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-mono text-[var(--accent)] uppercase tracking-wider font-semibold">
                    {getCategoryIcon(lesson.category)}
                    <span>Lesson 0{idx + 1}</span>
                  </div>
                  <Badge variant="mono" className="text-[10px]">
                    {lesson.category}
                  </Badge>
                </div>

                <h3 className="font-display font-bold text-lg md:text-xl text-[var(--foreground)] leading-snug">
                  {lesson.title}
                </h3>

                <p className="text-xs md:text-sm text-[var(--foreground-muted)] font-body leading-relaxed">
                  {lesson.context}
                </p>
              </div>

              {/* Specific Learnings */}
              <div className="space-y-2 pt-4 border-t border-[var(--border)]">
                <div className="text-[10px] font-mono uppercase tracking-wider text-[var(--foreground-subtle)]">
                  Core Insight
                </div>
                <ul className="space-y-1.5 text-xs text-[var(--foreground)] font-body">
                  {lesson.learnings.map((learning, lIdx) => (
                    <li key={lIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent)] shrink-0 mt-0.5" />
                      <span>{learning}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>

        {/* Grounded Builder Creed Callout */}
        <div className="p-6 md:p-8 rounded-[var(--radius-xl)] bg-[var(--background-subtle)] border border-[var(--border)] flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1 max-w-2xl">
            <span className="text-xs font-mono text-[var(--accent)] uppercase tracking-wider font-semibold">
              The Engineering Mindset
            </span>
            <p className="font-display font-semibold text-lg md:text-xl text-[var(--foreground)]">
              “Building is not about feeling ready. It is about taking ownership
              before you have certainty, and learning through the feedback of reality.”
            </p>
          </div>
          <div className="text-xs font-mono text-[var(--foreground-subtle)] shrink-0">
            Rinku Diwakar · NIT Jalandhar
          </div>
        </div>
      </div>
    </section>
  );
}
