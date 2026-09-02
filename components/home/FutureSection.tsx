import * as React from "react";
import { Sparkles, Wrench, Rocket, HeartHandshake } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { getFutureGoals } from "@/lib/content";

export function FutureSection() {
  const future = getFutureGoals();

  const pillars = [
    {
      icon: Wrench,
      title: "Technical Rigor",
      description:
        "Deepening mastery across applied AI, resilient backend systems, distributed architectures, and embedded hardware integrations.",
    },
    {
      icon: Sparkles,
      title: "Product & Craft",
      description:
        "Building software that feels alive, combining editorial typography, intuitive ergonomics, and robust performance.",
    },
    {
      icon: Rocket,
      title: "Entrepreneurial Execution",
      description:
        "Scaling Pradrix from foundational consulting into an enduring engineering company solving real operational friction.",
    },
  ];

  return (
    <section
      id="future"
      aria-label="Future Direction"
      className="w-full py-20 md:py-32 border-b border-[var(--border)] bg-[var(--background-subtle)] transition-colors duration-200"
    >
      <div className="container-editorial space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2">
            <Badge variant="accent">12 · FUTURE DIRECTION</Badge>
            <span className="text-xs font-mono text-[var(--foreground-subtle)]">
              Direction Over Rigid Titles
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-[var(--foreground)] leading-[1.08]">
            Where I’m going next.
          </h2>

          <p className="text-xl sm:text-2xl md:text-3xl text-[var(--foreground)] font-display font-semibold leading-snug">
            “I want to become really good at building — technically, creatively,
            and eventually as an entrepreneur — and use that ability to create
            things that actually matter.”
          </p>

          <p className="text-base sm:text-lg text-[var(--foreground-muted)] font-body leading-relaxed max-w-2xl">
            {future.coreDirection}
          </p>
        </div>

        {/* 3 Core Growth Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <Card
                key={pillar.title}
                className="p-6 md:p-8 space-y-4 bg-[var(--background-card)] border-[var(--border-strong)] flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-[var(--accent-subtle)] text-[var(--accent)] flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-[var(--foreground)]">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-[var(--foreground-muted)] font-body leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>

        {/* What I'm Open To */}
        <div className="p-6 md:p-8 rounded-[var(--radius-xl)] bg-[var(--background-card)] border border-[var(--border-strong)] space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono text-[var(--accent)] uppercase tracking-wider font-semibold">
            <HeartHandshake className="w-4 h-4" />
            <span>Open To High-Impact Opportunities</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            {future.openTo.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-[var(--radius-md)] bg-[var(--background-subtle)] border border-[var(--border-subtle)] text-xs text-[var(--foreground)] font-medium leading-relaxed"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
