import * as React from "react";
import { Radio, Github, BookOpen, Sparkles, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { getSignals } from "@/lib/content";

export function SignalsSection() {
  const signals = getSignals();

  const getSourceIcon = (source: string) => {
    switch (source) {
      case "github":
        return <Github className="w-4 h-4 text-[var(--foreground)]" />;
      case "writing":
        return <BookOpen className="w-4 h-4 text-[var(--accent)]" />;
      case "pradrix":
      case "systems":
      default:
        return <Sparkles className="w-4 h-4 text-[var(--accent)]" />;
    }
  };

  return (
    <section
      id="signals"
      aria-label="Public Signals Stream"
      className="w-full py-20 md:py-32 border-b border-[var(--border)] bg-[var(--background-subtle)] transition-colors duration-200"
    >
      <div className="container-editorial space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[var(--border)]">
          <div className="space-y-3 max-w-3xl">
            <div className="flex items-center gap-2">
              <Badge variant="accent">10 · SIGNALS</Badge>
              <span className="flex items-center gap-1 text-xs font-mono text-[var(--success)] font-medium">
                <span className="w-2 h-2 rounded-full bg-[var(--success)] animate-pulse" />
                Live Pulse
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-[var(--foreground)]">
              Activity & public signals.
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-[var(--foreground-muted)] font-normal leading-relaxed">
              Curated public activity across open-source code repositories,
              engineering essays, and operational venture milestones.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-[var(--foreground-subtle)] shrink-0">
            <Radio className="w-4 h-4 text-[var(--accent)]" />
            <span>Normalized Stream</span>
          </div>
        </div>

        {/* Signals Stream Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {signals.length === 0 ? (
            <div className="col-span-full py-12 text-center text-sm font-mono text-[var(--foreground-muted)] bg-[var(--background-card)] rounded-[var(--radius-lg)] border border-[var(--border)]">
              No recent signal updates available.
            </div>
          ) : (
            signals.map((signal) => (
              <Card
                key={signal.id}
                className="p-6 space-y-4 bg-[var(--background-card)] border-[var(--border-strong)] flex flex-col justify-between hover:border-[var(--accent-border)] transition-all duration-150"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b border-[var(--border-subtle)]">
                    <div className="flex items-center gap-2 text-xs font-mono text-[var(--foreground-muted)]">
                      {getSourceIcon(signal.source)}
                      <span className="uppercase tracking-wider font-semibold">
                        {signal.source}
                      </span>
                    </div>
                    <span className="text-[11px] font-mono text-[var(--foreground-subtle)]">
                      {signal.date}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-base md:text-lg text-[var(--foreground)] leading-snug">
                    {signal.title}
                  </h3>

                  <p className="text-xs md:text-sm text-[var(--foreground-muted)] font-body leading-relaxed">
                    {signal.summary}
                  </p>
                </div>

                {/* Bottom Source Link */}
                <div className="pt-3 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs font-mono">
                  {signal.url ? (
                    <a
                      href={signal.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[var(--accent)] hover:underline"
                    >
                      <span>View Signal Source</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <span className="text-[var(--foreground-subtle)] flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[var(--success)]" />
                      <span>Verified Record</span>
                    </span>
                  )}
                </div>
              </Card>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
