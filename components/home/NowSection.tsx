import * as React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, CheckCircle2, Clock, Circle } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { getPradrixData, getNowData } from "@/lib/content";

export function NowSection() {
  const { status: pradrix } = getPradrixData();
  const now = getNowData();

  const getStatusIcon = (status: "completed" | "in-progress" | "planned") => {
    switch (status) {
      case "completed":
        return <CheckCircle2 className="w-4 h-4 text-[var(--success)] shrink-0" />;
      case "in-progress":
        return <Clock className="w-4 h-4 text-amber-500 shrink-0" />;
      case "planned":
        return <Circle className="w-4 h-4 text-[var(--foreground-subtle)] shrink-0" />;
    }
  };

  const getStatusBadge = (status: "completed" | "in-progress" | "planned") => {
    switch (status) {
      case "completed":
        return <Badge variant="success">Completed</Badge>;
      case "in-progress":
        return <Badge variant="warning">In Progress</Badge>;
      case "planned":
        return <Badge variant="default">Planned</Badge>;
    }
  };

  return (
    <section
      id="now"
      aria-label="Current Focus & Now"
      className="w-full py-16 md:py-24 border-b border-[var(--border)] bg-[var(--background-subtle)] transition-colors duration-200"
    >
      <div className="container-editorial space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-[var(--border)]">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2">
              <Badge variant="accent">02 · CURRENT STATUS</Badge>
              <span className="text-xs font-mono text-[var(--foreground-subtle)]">
                Last updated: {now.lastUpdated}
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-[var(--foreground)]">
              What I’m doing now.
            </h2>
            <p className="text-base md:text-lg text-[var(--foreground-muted)] font-normal leading-relaxed">
              A transparent view of active builds, operational systems, and
              studies. Truthful progress over manufactured hype.
            </p>
          </div>

          <Link
            href="/now"
            className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-[var(--accent)] hover:underline shrink-0"
          >
            <span>View full /now page</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Two-Column Grid: Pradrix Status Board + Active Streams */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Pradrix Status Card (7 cols) */}
          <Card className="lg:col-span-7 space-y-6 bg-[var(--background-card)]">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-display font-bold text-xl text-[var(--foreground)]">
                    Pradrix Status Board
                  </span>
                  <Badge variant="accent">Primary Venture</Badge>
                </div>
                <p className="text-xs font-mono text-[var(--foreground-muted)] mt-1">
                  AI Consulting & Operational Automation · {pradrix.stage}
                </p>
              </div>
              <Sparkles className="w-5 h-5 text-[var(--accent)]" />
            </div>

            <p className="text-sm text-[var(--foreground-muted)] leading-relaxed">
              {pradrix.problemStatement}
            </p>

            {/* Status Milestones Checklist */}
            <div className="space-y-2 pt-2">
              <div className="text-xs font-mono uppercase tracking-wider text-[var(--foreground-subtle)]">
                Milestone Progress
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {pradrix.statusList.map((item) => (
                  <div
                    key={item.item}
                    className="flex items-center justify-between p-2.5 rounded-[var(--radius-md)] bg-[var(--background-subtle)] border border-[var(--border-subtle)] text-xs"
                  >
                    <div className="flex items-center gap-2 min-w-0 pr-2">
                      {getStatusIcon(item.status)}
                      <span className="truncate font-medium text-[var(--foreground)]">
                        {item.item}
                      </span>
                    </div>
                    {getStatusBadge(item.status)}
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Link to Pradrix */}
            <div className="pt-2 flex items-center justify-between border-t border-[var(--border)]">
              <span className="text-xs font-mono text-[var(--foreground-subtle)]">
                “Understand before automating”
              </span>
              <Link
                href="/pradrix"
                className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-[var(--accent)] hover:underline"
              >
                <span>Explore Pradrix Framework</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </Card>

          {/* Right Column: Active Streams / Now Items (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="text-xs font-mono uppercase tracking-wider text-[var(--foreground-subtle)] px-1">
              Active Focus Streams
            </div>

            <div className="space-y-3">
              {now.items.map((item) => (
                <Card
                  key={item.title}
                  className="p-4 space-y-2 bg-[var(--background-card)]"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--foreground-subtle)]">
                      {item.category}
                    </span>
                    <Badge variant="default" className="text-[10px]">
                      {item.status}
                    </Badge>
                  </div>
                  <h3 className="text-sm font-semibold text-[var(--foreground)]">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[var(--foreground-muted)] leading-relaxed">
                    {item.description}
                  </p>
                  {item.link && (
                    <Link
                      href={item.link.href}
                      className="inline-flex items-center gap-1 text-[11px] font-mono font-medium text-[var(--accent)] hover:underline pt-1"
                    >
                      <span>{item.link.label}</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
