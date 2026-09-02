import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, GraduationCap, Compass, ShieldCheck, Code, Wrench, Sparkles } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { getProfile, getProofForContent } from "@/lib/content";
import { constructMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = constructMetadata({
  title: "About — Rinku Diwakar",
  description:
    "Builder, electrical engineer from NIT Jalandhar, and founder of Pradrix. Dedicated to turning 'What if?' into 'It actually works.'",
  canonicalUrl: "/about",
});

export default function AboutPage() {
  const profile = getProfile();
  const proofs = getProofForContent("/about");

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
              <Badge variant="accent">BIOGRAPHY & PROFILE</Badge>
              <Badge variant="mono">NIT Jalandhar EE</Badge>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight text-[var(--foreground)]">
              Rinku Diwakar
            </h1>

            <p className="text-2xl text-[var(--accent)] font-display font-medium">
              “{profile.tagline}”
            </p>

            <p className="text-lg sm:text-xl text-[var(--foreground-muted)] font-body leading-relaxed max-w-2xl">
              {profile.coreIdentity}
            </p>
          </div>
        </div>
      </Section>

      {/* Philosophy & The Builder Loop */}
      <Section className="py-16 border-b border-[var(--border)] bg-[var(--background-subtle)]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[var(--accent)] font-semibold">
              <Compass className="w-4 h-4" />
              <span>Core Philosophy</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-[var(--foreground)]">
              Building as an act of learning
            </h2>
            <p className="text-base text-[var(--foreground-muted)] font-body leading-relaxed">
              {profile.philosophy}
            </p>
          </div>

          <Card className="p-6 md:p-8 space-y-4 bg-[var(--background-card)] border-[var(--border-strong)]">
            <div className="text-xs font-mono uppercase tracking-wider text-[var(--accent)] font-semibold">
              The Recursive Builder Loop
            </div>
            <p className="text-lg font-display font-bold text-[var(--foreground)] leading-snug">
              {profile.loop}
            </p>
            <p className="text-xs text-[var(--foreground-muted)] font-mono leading-relaxed">
              Every system built begins with a question, survives through debugging,
              and yields lasting engineering intuition.
            </p>
          </Card>
        </div>
      </Section>

      {/* Academic Foundation: NIT Jalandhar */}
      <Section className="py-16 border-b border-[var(--border)]">
        <div className="space-y-8 max-w-3xl">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[var(--accent)] font-semibold">
              <GraduationCap className="w-4 h-4" />
              <span>Academic Engineering Foundation</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-[var(--foreground)]">
              {profile.education.degree} in {profile.education.field}
            </h2>
            <p className="text-sm font-mono text-[var(--accent)] font-medium">
              {profile.education.institution} ({profile.education.period || "2023 – 2027"} · CGPA: {profile.education.cgpa || "7.44"})
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {profile.education.focus.map((item) => (
              <div
                key={item}
                className="p-4 rounded-[var(--radius-md)] bg-[var(--background-card)] border border-[var(--border)] text-xs font-mono text-[var(--foreground)] flex items-start gap-2.5"
              >
                <span className="text-[var(--accent)] font-bold">→</span>
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* Institutional Proof Record */}
          {proofs.length > 0 && (
            <div className="p-4 rounded-[var(--radius-md)] bg-[var(--background-subtle)] border border-[var(--border-subtle)] flex items-center justify-between text-xs font-mono">
              <span className="text-[var(--foreground-muted)] flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[var(--success)]" />
                Verified Institutional Degree Credential
              </span>
              <a
                href="https://www.nitj.ac.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--accent)] hover:underline"
              >
                nitj.ac.in ↗
              </a>
            </div>
          )}
        </div>
      </Section>

      {/* Technical Interests */}
      <Section className="py-16 bg-[var(--background-subtle)]">
        <div className="space-y-8">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[var(--accent)] font-semibold">
              Focus Areas
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-[var(--foreground)]">
              What I spend my attention on
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 space-y-3 bg-[var(--background-card)] border-[var(--border-strong)]">
              <div className="flex items-center gap-2 text-xs font-mono text-[var(--accent)] uppercase font-semibold">
                <Code className="w-4 h-4" />
                <span>Technical</span>
              </div>
              <ul className="space-y-2 text-xs font-mono text-[var(--foreground-muted)]">
                {profile.interests.technical.map((item) => (
                  <li key={item} className="flex items-center gap-1.5">
                    <span className="text-[var(--accent)]">·</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-6 space-y-3 bg-[var(--background-card)] border-[var(--border-strong)]">
              <div className="flex items-center gap-2 text-xs font-mono text-[var(--accent)] uppercase font-semibold">
                <Wrench className="w-4 h-4" />
                <span>Personal</span>
              </div>
              <ul className="space-y-2 text-xs font-mono text-[var(--foreground-muted)]">
                {profile.interests.personal.map((item) => (
                  <li key={item} className="flex items-center gap-1.5">
                    <span className="text-[var(--accent)]">·</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-6 space-y-3 bg-[var(--background-card)] border-[var(--border-strong)]">
              <div className="flex items-center gap-2 text-xs font-mono text-[var(--accent)] uppercase font-semibold">
                <Sparkles className="w-4 h-4" />
                <span>Early Roots</span>
              </div>
              <ul className="space-y-2 text-xs font-mono text-[var(--foreground-muted)]">
                {profile.interests.early.map((item) => (
                  <li key={item} className="flex items-center gap-1.5">
                    <span className="text-[var(--accent)]">·</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </Section>
    </main>
  );
}
