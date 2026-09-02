import * as React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, Filter, CheckCircle2, Circle, Clock } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { getPradrixData } from "@/lib/content";

export function PradrixSection() {
  const { status: pradrix, steps } = getPradrixData();

  return (
    <section
      id="pradrix"
      aria-label="Pradrix Venture Section"
      className="w-full py-20 md:py-32 border-b border-[var(--border)] bg-[var(--background-subtle)] transition-colors duration-200"
    >
      <div className="container-editorial space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[var(--border)]">
          <div className="space-y-3 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="accent">08 · CURRENT VENTURE</Badge>
              <Badge variant="mono">{pradrix.stage}</Badge>
              <Badge variant="default">AI × Automation × Operations</Badge>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-[var(--foreground)] leading-[1.08]">
              Pradrix:
              <br />
              <span className="text-[var(--accent)]">
                “Understand before automating.”
              </span>
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-[var(--foreground-muted)] font-normal leading-relaxed">
              An early-stage AI consulting and workflow engineering venture. We help
              businesses find their real operational bottlenecks, determine if AI is
              actually the right tool, and build reliable automated systems.
            </p>
          </div>

          <Link
            href="/pradrix"
            className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-[var(--accent)] hover:underline shrink-0"
          >
            <span>Full Pradrix methodology</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 8-Step Workflow Interactive Preview Rail */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <h3 className="font-display font-bold text-xl text-[var(--foreground)]">
              The 8-Stage Diagnostic & Execution Workflow
            </h3>
            <span className="text-xs font-mono text-[var(--foreground-subtle)]">
              First principles engineering over hype
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {steps.map((step) => {
              const isAiFilter = step.id === "appropriateness";
              return (
                <Card
                  key={step.id}
                  className={`p-5 space-y-3 bg-[var(--background-card)] border-[var(--border-strong)] flex flex-col justify-between ${
                    isAiFilter
                      ? "ring-2 ring-[var(--accent)] border-[var(--accent)] shadow-xs"
                      : ""
                  }`}
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono font-bold text-[var(--accent)]">
                        0{step.order}
                      </span>
                      {isAiFilter ? (
                        <span className="inline-flex items-center gap-1 text-[10px] font-mono uppercase font-bold text-[var(--accent)] bg-[var(--accent-subtle)] px-2 py-0.5 rounded-full">
                          <Filter className="w-3 h-3" />
                          Key Filter
                        </span>
                      ) : (
                        <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--foreground-subtle)]">
                          Phase 0{step.order}
                        </span>
                      )}
                    </div>

                    <h4 className="font-display font-bold text-base text-[var(--foreground)]">
                      {step.label}
                    </h4>

                    <p className="text-xs text-[var(--foreground-muted)] font-body leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  <div className="pt-2 text-[11px] font-mono text-[var(--foreground-subtle)] border-t border-[var(--border)]">
                    <span className="font-semibold text-[var(--foreground-muted)]">
                      Action:{" "}
                    </span>
                    {step.action}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Truthful Stage Card & Consultation CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center pt-4">
          <Card className="lg:col-span-8 p-6 md:p-8 space-y-4 bg-[var(--background-card)] border-[var(--border-strong)]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[var(--accent)]" />
                <span className="font-display font-bold text-lg text-[var(--foreground)]">
                  Transparent Venture Status
                </span>
              </div>
              <Badge variant="accent">{pradrix.stage}</Badge>
            </div>

            <p className="text-xs md:text-sm text-[var(--foreground-muted)] font-body leading-relaxed">
              Pradrix is intentionally presented at its truthful current state: an
              emerging technical consultancy founded by Rinku Diwakar. We are
              currently finalizing diagnostic rubrics and seeking initial pilot
              engagements with operators seeking genuine leverage.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-2 text-xs font-mono">
              <div className="p-2.5 rounded-[var(--radius-md)] bg-[var(--background-subtle)] border border-[var(--border-subtle)] flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[var(--success)] shrink-0" />
                <span>Diagnostic Rubric: Ready</span>
              </div>
              <div className="p-2.5 rounded-[var(--radius-md)] bg-[var(--background-subtle)] border border-[var(--border-subtle)] flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Audit Tooling: In Progress</span>
              </div>
              <div className="p-2.5 rounded-[var(--radius-md)] bg-[var(--background-subtle)] border border-[var(--border-subtle)] flex items-center gap-2">
                <Circle className="w-4 h-4 text-[var(--foreground-subtle)] shrink-0" />
                <span>Pilot Engagements: Open</span>
              </div>
            </div>
          </Card>

          <Card className="lg:col-span-4 p-6 md:p-8 space-y-4 bg-[var(--background-card)] border-[var(--border-strong)] text-center flex flex-col justify-between h-full">
            <div className="space-y-2">
              <div className="text-xs font-mono uppercase tracking-wider text-[var(--accent)] font-semibold">
                Collaborate & Pilot
              </div>
              <h3 className="font-display font-bold text-xl text-[var(--foreground)]">
                Have a bottleneck worth solving?
              </h3>
              <p className="text-xs text-[var(--foreground-muted)] leading-relaxed">
                Explore how the 8-step framework can unblock your team’s repetitive
                manual workflows.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 w-full px-5 py-2.5 rounded-[var(--radius-md)] bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] font-medium text-xs transition-all shadow-xs"
            >
              <span>Discuss an Operational Problem</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </Card>
        </div>
      </div>
    </section>
  );
}
