import * as React from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Cpu } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { KavachInteractive } from "@/components/home/KavachInteractive";
import { getKavachStory } from "@/lib/content";

export function KavachSection() {
  const kavach = getKavachStory();

  return (
    <section
      id="kavach"
      aria-label="Kavach Signature Build Story"
      className="w-full py-20 md:py-32 border-b border-[var(--border)] bg-[var(--background)] transition-colors duration-200"
    >
      <div className="container-editorial space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[var(--border)]">
          <div className="space-y-3 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="accent">05 · FIRST MAJOR BUILD</Badge>
              <Badge variant="mono">5-Person Team · NIT Jalandhar</Badge>
              <Badge variant="default">AI × Hardware × IoT</Badge>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-[var(--foreground)] leading-[1.08]">
              Kavach:
              <br />
              <span className="text-[var(--accent)]">
                “What if AI could become the key?”
              </span>
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-[var(--foreground-muted)] font-normal leading-relaxed">
              My first production-grade project. An AI-powered voice authentication
              door lock that forced us to face real hardware brownouts, biometric
              security flaws, and the reality that building means owning edge cases.
            </p>
          </div>

          <Link
            href="/work/kavach"
            className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-[var(--accent)] hover:underline shrink-0"
          >
            <span>Deep case study</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* The Problem and Concept Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-6 space-y-3 bg-[var(--background-subtle)]">
            <div className="flex items-center gap-2 text-xs font-mono text-[var(--foreground-muted)] uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-[var(--foreground)]" />
              <span>The Human Problem</span>
            </div>
            <h3 className="font-display font-bold text-lg text-[var(--foreground)]">
              Keys are lost, forgotten, and friction-heavy.
            </h3>
            <p className="text-sm text-[var(--foreground-muted)] font-body leading-relaxed">
              {kavach.problem}
            </p>
          </Card>

          <Card className="p-6 space-y-3 bg-[var(--background-card)] border-l-4 border-l-[var(--accent)]">
            <div className="flex items-center gap-2 text-xs font-mono text-[var(--accent)] uppercase tracking-wider">
              <Cpu className="w-4 h-4" />
              <span>The Engineering Concept</span>
            </div>
            <h3 className="font-display font-bold text-lg text-[var(--foreground)]">
              Voice biometrics as a dynamic cryptographic key.
            </h3>
            <p className="text-sm text-[var(--foreground-muted)] font-body leading-relaxed">
              {kavach.concept}
            </p>
          </Card>
        </div>

        {/* The Interactive Controlled State Machine Simulation */}
        <KavachInteractive />

        {/* The Core Engineering Lesson Callout */}
        <div className="p-6 md:p-8 rounded-[var(--radius-xl)] bg-[var(--background-subtle)] border border-[var(--border)] space-y-3">
          <div className="text-xs font-mono uppercase tracking-wider text-[var(--accent)] font-semibold">
            The Takeaway
          </div>
          <blockquote className="text-base md:text-xl font-display font-medium text-[var(--foreground)] leading-snug">
            “{kavach.keyLesson}”
          </blockquote>
          <div className="text-xs font-mono text-[var(--foreground-subtle)]">
            Kavach Build Experience · Rinku Diwakar
          </div>
        </div>
      </div>
    </section>
  );
}
