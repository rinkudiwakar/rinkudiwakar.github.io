"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { getJourneyStages } from "@/lib/content";
import { cn } from "@/lib/utils/cn";

export function JourneySection() {
  const stages = getJourneyStages();
  const [activeStageId, setActiveStageId] = React.useState<string>(stages[0]?.id || "curious");

  const activeStage = stages.find((s) => s.id === activeStageId) || stages[0];

  return (
    <section
      id="journey"
      aria-label="Evolution Journey"
      className="w-full py-20 md:py-32 border-b border-[var(--border)] bg-[var(--background-subtle)] transition-colors duration-200"
    >
      <div className="container-editorial space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-[var(--border)]">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2">
              <Badge variant="accent">04 · THE JOURNEY</Badge>
              <span className="text-xs font-mono text-[var(--foreground-subtle)]">
                5 Stages of Evolution
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-[var(--foreground)]">
              From curiosity to building.
            </h2>
            <p className="text-base md:text-lg text-[var(--foreground-muted)] font-normal leading-relaxed">
              Every stage was a natural progression: asking questions, finding tools,
              building systems, learning from failure, and moving forward.
            </p>
          </div>

          <Link
            href="/story"
            className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-[var(--accent)] hover:underline shrink-0"
          >
            <span>Full story page</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Desktop View: Interactive Horizontal Rail + Active Detail Showcase */}
        <div className="hidden lg:block space-y-8">
          {/* Horizontal Stepper Rail */}
          <div className="grid grid-cols-5 gap-3" role="tablist" aria-label="Journey stages">
            {stages.map((stage, idx) => {
              const isActive = stage.id === activeStageId;
              return (
                <button
                  key={stage.id}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`panel-${stage.id}`}
                  id={`tab-${stage.id}`}
                  onClick={() => setActiveStageId(stage.id)}
                  className={cn(
                    "text-left p-4 rounded-[var(--radius-lg)] border transition-all duration-200 cursor-pointer flex flex-col justify-between h-28 relative group",
                    isActive
                      ? "bg-[var(--background-card)] border-[var(--accent)] shadow-[var(--shadow-card)] ring-2 ring-[var(--ring)]"
                      : "bg-[var(--background)] border-[var(--border)] hover:bg-[var(--background-card)] hover:border-[var(--border-strong)]"
                  )}
                >
                  <div className="flex items-center justify-between w-full">
                    <span
                      className={cn(
                        "text-[11px] font-mono uppercase tracking-wider font-semibold",
                        isActive ? "text-[var(--accent)]" : "text-[var(--foreground-subtle)]"
                      )}
                    >
                      {stage.label}
                    </span>
                    <span className="text-xs font-mono text-[var(--foreground-subtle)]">
                      0{idx + 1}
                    </span>
                  </div>

                  <div>
                    <span
                      className={cn(
                        "font-display font-bold text-lg block tracking-tight",
                        isActive ? "text-[var(--foreground)]" : "text-[var(--foreground-muted)] group-hover:text-[var(--foreground)]"
                      )}
                    >
                      {stage.title}
                    </span>
                    <span className="text-[11px] text-[var(--foreground-subtle)] font-mono">
                      {stage.period}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Stage Display Panel */}
          {activeStage && (
            <Card
              id={`panel-${activeStage.id}`}
              role="tabpanel"
              aria-labelledby={`tab-${activeStage.id}`}
              className="p-8 space-y-6 bg-[var(--background-card)] border-[var(--border-strong)] animate-in fade-in duration-200"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[var(--border)]">
                <div>
                  <div className="text-xs font-mono text-[var(--accent)] uppercase tracking-wider font-semibold">
                    {activeStage.label} · {activeStage.period}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-[var(--foreground)] mt-1">
                    {activeStage.title} — {activeStage.summary}
                  </h3>
                </div>
                <Badge variant="accent">{activeStage.period}</Badge>
              </div>

              <p className="text-base md:text-lg text-[var(--foreground-muted)] font-body leading-relaxed max-w-3xl">
                {activeStage.description}
              </p>

              {/* Key Moments */}
              <div className="pt-2 space-y-3">
                <div className="text-xs font-mono uppercase tracking-wider text-[var(--foreground-subtle)]">
                  Defining Milestones
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {activeStage.keyMoments.map((moment, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 p-3 rounded-[var(--radius-md)] bg-[var(--background-subtle)] border border-[var(--border-subtle)] text-xs text-[var(--foreground)] font-medium"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[var(--accent)] shrink-0 mt-0.5" />
                      <span>{moment}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          )}
        </div>

        {/* Mobile View: Vertical Sequential Timeline */}
        <div className="lg:hidden space-y-6">
          <div className="relative border-l-2 border-[var(--border-strong)] ml-4 pl-6 space-y-8">
            {stages.map((stage, idx) => (
              <div key={stage.id} className="relative space-y-3">
                {/* Step Marker Dot */}
                <div className="absolute -left-[33px] top-1 flex items-center justify-center w-6 h-6 rounded-full bg-[var(--accent)] text-white text-xs font-mono font-bold shadow-xs">
                  {idx + 1}
                </div>

                <div className="space-y-1">
                  <div className="text-[11px] font-mono text-[var(--accent)] font-semibold uppercase tracking-wider">
                    {stage.label} · {stage.period}
                  </div>
                  <h3 className="text-xl font-display font-bold text-[var(--foreground)]">
                    {stage.title}
                  </h3>
                </div>

                <Card className="p-4 space-y-3 bg-[var(--background-card)]">
                  <p className="text-sm text-[var(--foreground-muted)] font-body leading-relaxed">
                    {stage.description}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-[var(--border)]">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-[var(--foreground-subtle)]">
                      Key Highlights
                    </div>
                    <ul className="space-y-1.5 text-xs text-[var(--foreground-muted)]">
                      {stage.keyMoments.map((m, mIdx) => (
                        <li key={mIdx} className="flex items-start gap-1.5">
                          <ChevronRight className="w-3.5 h-3.5 text-[var(--accent)] shrink-0 mt-0.5" />
                          <span>{m}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
