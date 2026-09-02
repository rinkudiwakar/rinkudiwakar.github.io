import * as React from "react";
import { ArrowRight, History, Calendar, Terminal } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { getBuildLog } from "@/lib/content";

export function BuildLogSection() {
  const logEntries = getBuildLog();

  return (
    <section
      id="build-log"
      aria-label="Build Log Stream"
      className="w-full py-20 md:py-32 border-b border-[var(--border)] bg-[var(--background)] transition-colors duration-200"
    >
      <div className="container-editorial space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[var(--border)]">
          <div className="space-y-3 max-w-3xl">
            <div className="flex items-center gap-2">
              <Badge variant="accent">09 · BUILD LOG</Badge>
              <span className="text-xs font-mono text-[var(--foreground-subtle)]">
                Ongoing Engineering Log
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-[var(--foreground)]">
              The evolution of active builds.
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-[var(--foreground-muted)] font-normal leading-relaxed">
              A transparent chronological stream documenting technical choices,
              experiments, system refactors, and lessons earned week by week.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-[var(--foreground-subtle)] shrink-0">
            <History className="w-4 h-4 text-[var(--accent)]" />
            <span>Living Builder Stream</span>
          </div>
        </div>

        {/* Build Log Entries Timeline */}
        <div className="space-y-4">
          {logEntries.length === 0 ? (
            <Card className="p-8 text-center text-sm text-[var(--foreground-muted)] font-mono">
              No build log entries available at this time.
            </Card>
          ) : (
            logEntries.map((entry) => (
              <Card
                key={entry.id}
                className="p-6 space-y-3 bg-[var(--background-card)] border-[var(--border-strong)] hover:border-[var(--accent-border)] transition-colors duration-150"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-[var(--border-subtle)]">
                  <div className="flex items-center gap-2.5">
                    <span className="flex items-center gap-1.5 text-xs font-mono text-[var(--foreground-subtle)]">
                      <Calendar className="w-3.5 h-3.5 text-[var(--accent)]" />
                      {entry.date}
                    </span>
                    <Badge variant="mono" className="text-[10px]">
                      {entry.category}
                    </Badge>
                  </div>

                  {entry.sourceUrl && (
                    <a
                      href={entry.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-mono text-[var(--accent)] hover:underline"
                    >
                      <Terminal className="w-3 h-3" />
                      <span>Reference</span>
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  )}
                </div>

                <h3 className="text-lg md:text-xl font-display font-bold text-[var(--foreground)]">
                  {entry.title}
                </h3>

                <p className="text-sm text-[var(--foreground-muted)] font-body leading-relaxed max-w-3xl">
                  {entry.summary}
                </p>

                {entry.relatedContent && entry.relatedContent.length > 0 && (
                  <div className="pt-2 flex flex-wrap items-center gap-2 text-xs font-mono text-[var(--foreground-subtle)]">
                    <span className="text-[10px] uppercase tracking-wider">
                      Related:
                    </span>
                    {entry.relatedContent.map((rel) => (
                      <span
                        key={rel}
                        className="px-2 py-0.5 rounded-sm bg-[var(--background-subtle)] border border-[var(--border-subtle)] text-[11px]"
                      >
                        {rel}
                      </span>
                    ))}
                  </div>
                )}
              </Card>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
