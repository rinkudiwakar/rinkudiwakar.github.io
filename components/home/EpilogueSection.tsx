import * as React from "react";
import Link from "next/link";
import { ArrowRight, Briefcase, Code, MessageSquare } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";

export function EpilogueSection() {
  const paths = [
    {
      id: "work",
      icon: Briefcase,
      title: "Work With Me",
      tagline: "Consulting & Workflow Automation",
      description:
        "Partner with Pradrix to diagnose operational bottlenecks, evaluate AI feasibility, and build robust automated pipelines for your business.",
      cta: "Explore Consulting",
      href: "/contact?intent=work",
      badge: "Pradrix · Commercial",
    },
    {
      id: "build",
      icon: Code,
      title: "Build With Me",
      tagline: "Engineering Collaborations",
      description:
        "Collaborate on ambitious open-source projects, hackathons, and hardware-software experiments where we can test tough technical ideas.",
      cta: "Propose a Collaboration",
      href: "/contact?intent=build",
      badge: "Open Source · Projects",
    },
    {
      id: "talk",
      icon: MessageSquare,
      title: "Talk To Me",
      tagline: "Systems, Philosophy & Coffee",
      description:
        "Reach out for thoughtful conversations on systems thinking, electrical engineering, AI architectures, or simply sharing feedback on this journal.",
      cta: "Start a Conversation",
      href: "/contact?intent=talk",
      badge: "Connect · Dialogue",
    },
  ];

  return (
    <section
      id="epilogue"
      aria-label="Epilogue and Connection"
      className="w-full py-24 md:py-36 bg-[var(--background)] transition-colors duration-200"
    >
      <div className="container-editorial space-y-16">
        {/* Cinematic Section Closing Header */}
        <div className="max-w-3xl space-y-6">
          <div className="flex items-center gap-2">
            <Badge variant="accent">13 · EPILOGUE</Badge>
            <span className="text-xs font-mono text-[var(--foreground-subtle)]">
              Closing Reflections
            </span>
          </div>

          <div className="space-y-3">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight text-[var(--foreground)] leading-[1.06]">
              The story isn’t finished.
            </h2>
            <p className="text-2xl sm:text-3xl md:text-4xl font-display font-medium text-[var(--accent)] tracking-tight">
              Maybe you can be part of the next chapter.
            </p>
          </div>

          <p className="text-base sm:text-lg md:text-xl text-[var(--foreground-muted)] font-body leading-relaxed max-w-2xl">
            A portfolio is not a tombstone for past work — it is an open invitation
            for what comes next. Whether you have an operational bottleneck to solve,
            an ambitious system to build, or simply want to connect, here are the three
            ways we can work together.
          </p>
        </div>

        {/* 3 Connection Paths */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {paths.map((path) => {
            const Icon = path.icon;
            return (
              <Card
                key={path.id}
                className="p-6 md:p-8 space-y-6 bg-[var(--background-card)] border-[var(--border-strong)] hover:border-[var(--accent-border)] transition-all duration-200 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-[var(--accent-subtle)] text-[var(--accent)] flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono text-[var(--foreground-subtle)]">
                      {path.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl md:text-2xl font-display font-bold text-[var(--foreground)]">
                      {path.title}
                    </h3>
                    <p className="text-xs font-mono text-[var(--accent)] font-medium mt-0.5">
                      {path.tagline}
                    </p>
                  </div>

                  <p className="text-sm text-[var(--foreground-muted)] font-body leading-relaxed">
                    {path.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[var(--border)]">
                  <Link
                    href={path.href}
                    className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-[var(--radius-md)] bg-[var(--background-subtle)] border border-[var(--border)] hover:bg-[var(--accent)] hover:text-white hover:border-[var(--accent)] text-xs font-medium transition-all group cursor-pointer"
                  >
                    <span>{path.cta}</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
