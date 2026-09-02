import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, History, Radio, Calendar, Github, BookOpen, Sparkles, Terminal, ArrowUpRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { getBuildLog, getSignals } from "@/lib/content";
import { constructMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = constructMetadata({
  title: "Activity & Build Stream — Rinku Diwakar",
  description:
    "A chronological stream of technical logs, public signals, GitHub activity, and architecture notes from Rinku Diwakar.",
  canonicalUrl: "/activity",
});

export default function ActivityPage() {
  const buildLogs = getBuildLog();
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
              <Badge variant="accent">CHRONOLOGICAL ACTIVITY</Badge>
              <span className="flex items-center gap-1 text-xs font-mono text-[var(--success)] font-medium">
                <span className="w-2 h-2 rounded-full bg-[var(--success)] animate-pulse" />
                Live Engineering Pulse
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight text-[var(--foreground)]">
              Activity & Build Stream
            </h1>

            <p className="text-lg sm:text-xl text-[var(--foreground-muted)] font-body leading-relaxed">
              A transparent log of what is being built, refactored, and learned
              week by week across software, AI, and systems engineering.
            </p>
          </div>
        </div>
      </Section>

      {/* Public Signals Pulse */}
      <Section className="py-16 border-b border-[var(--border)] bg-[var(--background-subtle)]">
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[var(--accent)] font-semibold">
                <Radio className="w-4 h-4" />
                <span>Public Signals</span>
              </div>
              <h2 className="text-2xl font-display font-bold text-[var(--foreground)]">
                Recent Public Touchpoints
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {signals.map((signal) => (
              <Card
                key={signal.id}
                className="p-6 space-y-4 bg-[var(--background-card)] border-[var(--border-strong)] flex flex-col justify-between"
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

                  <h3 className="font-display font-bold text-base text-[var(--foreground)]">
                    {signal.title}
                  </h3>

                  <p className="text-xs text-[var(--foreground-muted)] font-body leading-relaxed">
                    {signal.summary}
                  </p>
                </div>

                {signal.url && (
                  <div className="pt-3 border-t border-[var(--border-subtle)]">
                    <a
                      href={signal.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-mono text-[var(--accent)] hover:underline"
                    >
                      <span>View Signal Source</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Complete Engineering Build Log */}
      <Section className="py-16">
        <div className="max-w-3xl space-y-8">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[var(--accent)] font-semibold">
              <History className="w-4 h-4" />
              <span>Engineering Log</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-[var(--foreground)]">
              Chronological Build History
            </h2>
          </div>

          <div className="space-y-4">
            {buildLogs.map((entry) => (
              <Card
                key={entry.id}
                className="p-6 space-y-3 bg-[var(--background-card)] border-[var(--border-strong)]"
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
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  )}
                </div>

                <h3 className="text-lg md:text-xl font-display font-bold text-[var(--foreground)]">
                  {entry.title}
                </h3>

                <p className="text-sm text-[var(--foreground-muted)] font-body leading-relaxed">
                  {entry.summary}
                </p>

                {entry.relatedContent && entry.relatedContent.length > 0 && (
                  <div className="pt-2 flex flex-wrap items-center gap-2 text-xs font-mono text-[var(--foreground-subtle)]">
                    <span className="text-[10px] uppercase tracking-wider">
                      Related:
                    </span>
                    {entry.relatedContent.map((rel) => (
                      <Link
                        key={rel}
                        href={rel}
                        className="px-2 py-0.5 rounded-sm bg-[var(--background-subtle)] border border-[var(--border-subtle)] hover:text-[var(--accent)] text-[11px] transition-colors"
                      >
                        {rel}
                      </Link>
                    ))}
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </Section>
    </main>
  );
}
