import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Sparkles, CheckCircle2, Clock, Circle, ArrowLeft, Target, ShieldCheck, Mail } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { getPradrixData } from "@/lib/content";
import { constructMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = constructMetadata({
  title: "Pradrix — AI & Operational Automation",
  description:
    "An early-stage AI consulting and workflow automation venture founded by Rinku Diwakar. Understand before automating.",
  canonicalUrl: "/pradrix",
});

export default function PradrixPage() {
  const { status: pradrix, steps } = getPradrixData();

  return (
    <main id="main-content" className="flex-1 flex flex-col">
      {/* Hero Header Section */}
      <Section className="pt-12 pb-20 border-b border-[var(--border)]">
        <div className="space-y-6">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Journal</span>
          </Link>

          <div className="max-w-4xl space-y-6">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="accent">VENTURE BLUEPRINT</Badge>
              <Badge variant="mono">{pradrix.stage}</Badge>
              <Badge variant="default">Founded by Rinku Diwakar</Badge>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold tracking-tight text-[var(--foreground)] leading-[1.06]">
              Pradrix
            </h1>

            <p className="text-2xl sm:text-3xl text-[var(--accent)] font-display font-medium leading-snug">
              “Understand before automating.”
            </p>

            <p className="text-base sm:text-lg md:text-xl text-[var(--foreground-muted)] font-body leading-relaxed max-w-3xl">
              Most automation initiatives fail because teams apply AI to broken,
              ill-defined processes. Pradrix is built on an engineering-first
              premise: diagnose the root operational bottleneck first, determine
              if AI is actually appropriate, and architect dependable, measured
              systems.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-[var(--radius-md)] bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] font-medium text-sm transition-all shadow-xs"
              >
                <Mail className="w-4 h-4" />
                <span>Discuss an Operational Problem</span>
              </Link>

              <a
                href="#workflow"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-[var(--radius-md)] bg-[var(--background-card)] border border-[var(--border)] text-[var(--foreground)] hover:bg-[var(--background-subtle)] font-medium text-sm transition-all"
              >
                <span>View 8-Step Workflow</span>
                <ArrowRight className="w-4 h-4 text-[var(--foreground-muted)]" />
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* Target Problem Areas (Truthful Archetypes) */}
      <Section className="py-20 bg-[var(--background-subtle)] border-b border-[var(--border)]">
        <div className="space-y-12">
          <div className="max-w-3xl space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-[var(--accent)] font-semibold">
              Problem Space
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-[var(--foreground)]">
              Who has this problem?
            </h2>
            <p className="text-base md:text-lg text-[var(--foreground-muted)] leading-relaxed">
              We focus on operational bottlenecks where high-friction manual work
              slows down throughput, introduces data errors, or consumes founder bandwidth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 space-y-4 bg-[var(--background-card)] border-[var(--border-strong)]">
              <div className="flex items-center gap-2 text-xs font-mono text-[var(--accent)] uppercase tracking-wider font-semibold">
                <Target className="w-4 h-4" />
                <span>Archetype 01</span>
              </div>
              <h3 className="font-display font-bold text-lg text-[var(--foreground)]">
                Service & Agency Operations
              </h3>
              <p className="text-xs md:text-sm text-[var(--foreground-muted)] font-body leading-relaxed">
                Teams managing client communication handoffs, intake form triage,
                and proposal drafting manually across disconnected tools (Slack,
                email, spreadsheets).
              </p>
            </Card>

            <Card className="p-6 space-y-4 bg-[var(--background-card)] border-[var(--border-strong)]">
              <div className="flex items-center gap-2 text-xs font-mono text-[var(--accent)] uppercase tracking-wider font-semibold">
                <Target className="w-4 h-4" />
                <span>Archetype 02</span>
              </div>
              <h3 className="font-display font-bold text-lg text-[var(--foreground)]">
                Document-Heavy Workflows
              </h3>
              <p className="text-xs md:text-sm text-[var(--foreground-muted)] font-body leading-relaxed">
                Businesses spending 15+ hours weekly reviewing PDFs, invoices,
                compliance filings, or contract terms that require structured
                extraction with audit guarantees.
              </p>
            </Card>

            <Card className="p-6 space-y-4 bg-[var(--background-card)] border-[var(--border-strong)]">
              <div className="flex items-center gap-2 text-xs font-mono text-[var(--accent)] uppercase tracking-wider font-semibold">
                <Target className="w-4 h-4" />
                <span>Archetype 03</span>
              </div>
              <h3 className="font-display font-bold text-lg text-[var(--foreground)]">
                Founder Operational Drag
              </h3>
              <p className="text-xs md:text-sm text-[var(--foreground-muted)] font-body leading-relaxed">
                Early-stage founders caught acting as the mechanical glue between
                customer support, CRM tagging, and lead research instead of
                building the product.
              </p>
            </Card>
          </div>
        </div>
      </Section>

      {/* The 8-Step Core Workflow */}
      <Section id="workflow" className="py-20 border-b border-[var(--border)]">
        <div className="space-y-16">
          <div className="max-w-3xl space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-[var(--accent)] font-semibold">
              Core Methodology
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-[var(--foreground)]">
              The 8-Stage Execution Pipeline
            </h2>
            <p className="text-base md:text-lg text-[var(--foreground-muted)] leading-relaxed">
              Every Pradrix engagement moves through a structured, transparent sequence.
              We never pitch AI until Phase 03 confirms it is the simplest, most
              cost-effective solution.
            </p>
          </div>

          <div className="space-y-6">
            {steps.map((step) => {
              const isAiFilter = step.id === "appropriateness";
              return (
                <Card
                  key={step.id}
                  className={`p-6 md:p-8 space-y-4 bg-[var(--background-card)] border-[var(--border-strong)] ${
                    isAiFilter
                      ? "ring-2 ring-[var(--accent)] border-[var(--accent)] shadow-md"
                      : ""
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-[var(--border)]">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[var(--accent-subtle)] text-[var(--accent)] font-mono font-bold text-sm">
                        0{step.order}
                      </span>
                      <h3 className="text-xl md:text-2xl font-display font-bold text-[var(--foreground)]">
                        {step.label} — {step.subtitle}
                      </h3>
                    </div>

                    {isAiFilter ? (
                      <Badge variant="accent">Crucial Filter Point</Badge>
                    ) : (
                      <Badge variant="mono">Step 0{step.order}</Badge>
                    )}
                  </div>

                  <p className="text-sm md:text-base text-[var(--foreground-muted)] font-body leading-relaxed max-w-3xl">
                    {step.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 text-xs font-mono">
                    <div className="p-3 rounded-[var(--radius-md)] bg-[var(--background-subtle)] border border-[var(--border-subtle)]">
                      <span className="text-[var(--foreground-subtle)] uppercase tracking-wider block mb-1">
                        Why It Matters
                      </span>
                      <span className="text-[var(--foreground)] font-medium">
                        {step.whyItMatters}
                      </span>
                    </div>

                    <div className="p-3 rounded-[var(--radius-md)] bg-[var(--background-subtle)] border border-[var(--border-subtle)]">
                      <span className="text-[var(--foreground-subtle)] uppercase tracking-wider block mb-1">
                        Operational Action
                      </span>
                      <span className="text-[var(--accent)] font-medium">
                        {step.action}
                      </span>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </Section>

      {/* Honest Status & Roadmap */}
      <Section className="py-20 bg-[var(--background-subtle)] border-b border-[var(--border)]">
        <div className="space-y-12">
          <div className="max-w-3xl space-y-3">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[var(--accent)]" />
              <span className="text-xs font-mono uppercase tracking-widest text-[var(--accent)] font-semibold">
                Transparent Roadmap
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-[var(--foreground)]">
              Where Pradrix stands right now.
            </h2>
            <p className="text-base md:text-lg text-[var(--foreground-muted)] leading-relaxed">
              We do not fabricate client logos, fake metrics, or exaggerated traction.
              Here is our real roadmap and development status as of {pradrix.lastUpdated}.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {pradrix.statusList.map((item) => (
              <div
                key={item.item}
                className="flex items-center justify-between p-4 rounded-[var(--radius-lg)] bg-[var(--background-card)] border border-[var(--border-strong)] text-xs font-mono"
              >
                <div className="flex items-center gap-3">
                  {item.status === "completed" && (
                    <CheckCircle2 className="w-4 h-4 text-[var(--success)] shrink-0" />
                  )}
                  {item.status === "in-progress" && (
                    <Clock className="w-4 h-4 text-amber-500 shrink-0" />
                  )}
                  {item.status === "planned" && (
                    <Circle className="w-4 h-4 text-[var(--foreground-subtle)] shrink-0" />
                  )}
                  <span className="font-medium text-[var(--foreground)]">
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
                >
                  {item.status}
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Epilogue CTA */}
      <Section className="py-20 text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="inline-flex items-center justify-center p-3 rounded-full bg-[var(--accent-subtle)] text-[var(--accent)] mb-2">
            <ShieldCheck className="w-6 h-6" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[var(--foreground)]">
            Ready to audit your operational workflows?
          </h2>

          <p className="text-base text-[var(--foreground-muted)] leading-relaxed">
            Whether you want a diagnostic breakdown of your team’s bottlenecks or
            want to partner on an initial pilot project, let’s talk.
          </p>

          <div className="pt-2 flex justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-[var(--radius-md)] bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] font-medium text-sm transition-all shadow-xs"
            >
              <Mail className="w-4 h-4" />
              <span>Contact Rinku / Pradrix</span>
            </Link>
          </div>
        </div>
      </Section>
    </main>
  );
}
