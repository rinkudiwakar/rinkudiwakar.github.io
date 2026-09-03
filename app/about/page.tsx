import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  GraduationCap,
  Compass,
  ShieldCheck,
} from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { getProfile, getProofForContent } from "@/lib/content";
import { constructMetadata } from "@/lib/seo/metadata";
import { AboutIntro } from "@/components/home/about/AboutIntro";
import { AboutPortrait } from "@/components/home/about/AboutPortrait";
import { AboutJourney } from "@/components/home/about/AboutJourney";
import { AboutTransition } from "@/components/home/about/AboutTransition";
import { AboutCapabilities } from "@/components/home/about/AboutCapabilities";
import { AboutProof } from "@/components/home/about/AboutProof";
import { AboutManifesto } from "@/components/home/about/AboutManifesto";

export const metadata: Metadata = constructMetadata({
  title: "About — Rinku Diwakar",
  description:
    "Builder, electrical engineer from NIT Jalandhar, and founder of Pradrix. Dedicated to turning ideas into real-world hardware, software, and AI products.",
  canonicalUrl: "/about",
});

export default function AboutPage() {
  const profile = getProfile();
  const proofs = getProofForContent("/about");

  return (
    <main id="main-content" className="flex-1 flex flex-col bg-[var(--background)]">
      {/* ── Top Navigation & Back Link ── */}
      <Section className="pt-10 pb-6 border-b border-[var(--border)]">
        <div className="space-y-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors group"
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform duration-200 group-hover:-translate-x-1 text-[var(--accent)]" />
            <span>Back to Homepage</span>
          </Link>

          <div className="flex items-center gap-2">
            <Badge variant="accent">THE COMPLETE STORY</Badge>
            <Badge variant="mono">NIT Jalandhar EE</Badge>
          </div>
        </div>
      </Section>

      {/* ── 1. The Opening Narrative & Framed Portrait ── */}
      <Section className="py-12 sm:py-16 border-b border-[var(--border)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight text-[var(--foreground)] mb-6">
              Rinku Diwakar
            </h1>
            <AboutIntro />
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end pt-6 lg:pt-0">
            <AboutPortrait />
          </div>
        </div>
      </Section>

      {/* ── 2. Full 5-Stage Evolution Timeline ── */}
      <Section className="py-16 border-b border-[var(--border)]">
        <AboutJourney />
      </Section>

      {/* ── 3. Systems Thinking Transition & Schematic ── */}
      <Section className="py-16 border-b border-[var(--border)] bg-[var(--background-subtle)]">
        <AboutTransition />
      </Section>

      {/* ── 4. Technical Repertoire: 4 Capability Cards ── */}
      <Section className="py-16 border-b border-[var(--border)]">
        <AboutCapabilities />
      </Section>

      {/* ── 5. Projects as Proof: Kavach & NanoTrade Evidence ── */}
      <Section className="py-16 border-b border-[var(--border)] bg-[var(--background-subtle)]">
        <AboutProof />
      </Section>

      {/* ── 6. Core Philosophy & The Recursive Builder Loop ── */}
      <Section className="py-16 border-b border-[var(--border)]">
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

      {/* ── 7. Academic Foundation: NIT Jalandhar Credential ── */}
      <Section className="py-16 border-b border-[var(--border)] bg-[var(--background-subtle)]">
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
            <div className="p-4 rounded-[var(--radius-md)] bg-[var(--background)] border border-[var(--border-subtle)] flex items-center justify-between text-xs font-mono">
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

      {/* ── 8. The Common Thread & Personal Manifesto ── */}
      <Section className="py-16">
        <AboutManifesto />
      </Section>
    </main>
  );
}
