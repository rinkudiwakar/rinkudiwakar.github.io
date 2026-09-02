import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Clock, Sparkles, CheckCircle2, Circle, ArrowRight, ShieldAlert } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { getNowData, getPradrixData } from "@/lib/content";
import { constructMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = constructMetadata({
  title: "Now — Rinku Diwakar",
  description:
    "A public page explaining what Rinku Diwakar is currently building, studying, and focusing on right now. Truthful progress over manufactured hype.",
  canonicalUrl: "/now",
});

export default function NowPage() {
  const now = getNowData();
  const { status: pradrix } = getPradrixData();

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
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="accent">LIVE STATUS REPORT</Badge>
              <span className="flex items-center gap-1 text-xs font-mono text-[var(--foreground-muted)]">
                <Clock className="w-3.5 h-3.5 text-[var(--accent)]" />
                Updated: {now.lastUpdated}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight text-[var(--foreground)]">
              What I’m doing now.
            </h1>

            <p className="text-lg sm:text-xl text-[var(--foreground-muted)] font-body leading-relaxed">
              This is a &ldquo;Now page&rdquo; inspired by Derek Sivers. It serves as a
              public declaration of my current priorities, active builds, and
              where my attention is directed.
            </p>
          </div>
        </div>
      </Section>

      {/* Primary Focus: Pradrix Venture */}
      <Section className="py-16 border-b border-[var(--border)]">
        <div className="space-y-8">
          <div className="max-w-2xl space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[var(--accent)] font-semibold">
              <Sparkles className="w-4 h-4" />
              <span>Primary Venture</span>
            </div>
            <h2 className="text-3xl font-display font-bold text-[var(--foreground)]">
              Pradrix — Early Stage Foundation
            </h2>
            <p className="text-base text-[var(--foreground-muted)] font-body leading-relaxed">
              {pradrix.problemStatement}
            </p>
          </div>

          <Card className="p-6 md:p-8 space-y-6 bg-[var(--background-card)] border-[var(--border-strong)]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[var(--border)]">
              <div>
                <h3 className="font-display font-bold text-xl text-[var(--foreground)]">
                  Active Milestone Board
                </h3>
                <p className="text-xs font-mono text-[var(--foreground-muted)] mt-0.5">
                  Grounded progress with zero fabricated metrics or phantom clients
                </p>
              </div>

              <Link
                href="/pradrix"
                className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-[var(--accent)] hover:underline shrink-0"
              >
                <span>Full 8-Stage Methodology</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {pradrix.statusList.map((item) => (
                <div
                  key={item.item}
                  className="flex items-center justify-between p-3 rounded-[var(--radius-md)] bg-[var(--background-subtle)] border border-[var(--border-subtle)] text-xs font-mono"
                >
                  <div className="flex items-center gap-2 min-w-0 pr-2">
                    {getStatusIcon(item.status)}
                    <span className="truncate text-[var(--foreground)] font-medium">
                      {item.item}
                    </span>
                  </div>
                  <Badge
                    variant={
                      item.status === "completed"
                        ? "success"
                        : item.status === "in-progress"
                        ? "warning"
                        : "default"
                    }
                    className="text-[9px]"
                  >
                    {item.status}
                  </Badge>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </Section>

      {/* Active Focus Streams */}
      <Section className="py-16 bg-[var(--background-subtle)] border-b border-[var(--border)]">
        <div className="space-y-8">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[var(--accent)] font-semibold">
              Current Weekly Streams
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-[var(--foreground)]">
              Where time is being allocated
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {now.items.map((item) => (
              <Card
                key={item.title}
                className="p-6 space-y-4 bg-[var(--background-card)] border-[var(--border-strong)] flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b border-[var(--border-subtle)]">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--foreground-subtle)]">
                      {item.category}
                    </span>
                    <Badge variant="accent" className="text-[10px]">
                      {item.status}
                    </Badge>
                  </div>

                  <h3 className="font-display font-bold text-lg text-[var(--foreground)]">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[var(--foreground-muted)] font-body leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {item.link && (
                  <div className="pt-3 border-t border-[var(--border-subtle)]">
                    <Link
                      href={item.link.href}
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-[var(--accent)] hover:underline"
                    >
                      <span>{item.link.label}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* What I'm Not Doing Notice */}
      <Section className="py-16">
        <div className="max-w-2xl mx-auto p-6 rounded-[var(--radius-xl)] bg-[var(--background-card)] border border-[var(--border)] space-y-3 text-xs font-mono text-[var(--foreground-muted)]">
          <div className="flex items-center gap-2 text-[var(--accent)] font-bold uppercase tracking-wider">
            <ShieldAlert className="w-4 h-4" />
            <span>Explicit Priority Boundary</span>
          </div>
          <p className="font-body text-sm text-[var(--foreground)] leading-relaxed">
            In order to make meaningful progress on Pradrix and core engineering
            systems, I am currently not taking on freelance gigs that lack clear
            operational leverage, nor chasing ten side experiments simultaneously.
          </p>
        </div>
      </Section>
    </main>
  );
}
