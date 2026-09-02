import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Mail, Github, Linkedin, Briefcase, Code, MessageSquare, Globe } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { getProfile } from "@/lib/content";
import { constructMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = constructMetadata({
  title: "Contact & Connect — Rinku Diwakar",
  description:
    "Work with me on applied AI consulting via Pradrix, collaborate on engineering projects, or start a conversation.",
  canonicalUrl: "/contact",
});

const CONTACT_EMAIL = "rinkudiwakar01@gmail.com";

export default function ContactPage() {
  const profile = getProfile();

  const getSocialIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case "github":
        return <Github className="w-4 h-4" />;
      case "linkedin":
        return <Linkedin className="w-4 h-4" />;
      default:
        return <Globe className="w-4 h-4" />;
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
              <Badge variant="accent">CONNECT & INITIATE</Badge>
              <Badge variant="mono">Response within 24h</Badge>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight text-[var(--foreground)]">
              Let’s start the next chapter.
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-[var(--foreground-muted)] font-body leading-relaxed max-w-2xl">
              Whether you want to audit your team’s operational bottlenecks with
              Pradrix, collaborate on open-source engineering, or just talk
              systems, I’d love to hear from you.
            </p>
          </div>
        </div>
      </Section>

      {/* 3 Channels Grid */}
      <Section className="py-16 border-b border-[var(--border)] bg-[var(--background-subtle)]">
        <div className="space-y-12">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[var(--accent)] font-semibold">
              Three Connection Pathways
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-[var(--foreground)]">
              How would you like to connect?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* 1. Work With Me */}
            <Card className="p-6 md:p-8 space-y-4 bg-[var(--background-card)] border-[var(--border-strong)] flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[var(--accent-subtle)] text-[var(--accent)] flex items-center justify-center">
                  <Briefcase className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-xl text-[var(--foreground)]">
                  Work With Me
                </h3>
                <p className="text-xs font-mono text-[var(--accent)] font-medium">
                  Pradrix Consulting & Automation
                </p>
                <p className="text-xs sm:text-sm text-[var(--foreground-muted)] font-body leading-relaxed">
                  Operational workflow audits, custom API integrations, AI
                  feasibility assessments, and internal process automation.
                </p>
              </div>

              <div className="pt-3 border-t border-[var(--border-subtle)]">
                <a
                  href={`mailto:${CONTACT_EMAIL}?subject=Pradrix%20Consulting%20Inquiry`}
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-[var(--accent)] hover:underline"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Email for Consulting</span>
                </a>
              </div>
            </Card>

            {/* 2. Build With Me */}
            <Card className="p-6 md:p-8 space-y-4 bg-[var(--background-card)] border-[var(--border-strong)] flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[var(--accent-subtle)] text-[var(--accent)] flex items-center justify-center">
                  <Code className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-xl text-[var(--foreground)]">
                  Build With Me
                </h3>
                <p className="text-xs font-mono text-[var(--accent)] font-medium">
                  Open Source & Technical Projects
                </p>
                <p className="text-xs sm:text-sm text-[var(--foreground-muted)] font-body leading-relaxed">
                  Collaborative software development, hackathons, robotics/IoT
                  experiments, or contributing to shared repositories.
                </p>
              </div>

              <div className="pt-3 border-t border-[var(--border-subtle)]">
                <a
                  href={`mailto:${CONTACT_EMAIL}?subject=Engineering%20Collaboration`}
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-[var(--accent)] hover:underline"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Propose Collaboration</span>
                </a>
              </div>
            </Card>

            {/* 3. Talk To Me */}
            <Card className="p-6 md:p-8 space-y-4 bg-[var(--background-card)] border-[var(--border-strong)] flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[var(--accent-subtle)] text-[var(--accent)] flex items-center justify-center">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-xl text-[var(--foreground)]">
                  Talk To Me
                </h3>
                <p className="text-xs font-mono text-[var(--accent)] font-medium">
                  General Dialogue & Feedback
                </p>
                <p className="text-xs sm:text-sm text-[var(--foreground-muted)] font-body leading-relaxed">
                  Exchanging ideas on hardware, AI architectures, philosophy of
                  building, or providing critique on this website.
                </p>
              </div>

              <div className="pt-3 border-t border-[var(--border-subtle)]">
                <a
                  href={`mailto:${CONTACT_EMAIL}?subject=Hello%20Rinku`}
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-[var(--accent)] hover:underline"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Say Hello</span>
                </a>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* Direct Contact & Social Section */}
      <Section className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-[var(--foreground)]">
              Direct Contact
            </h2>
            <p className="text-sm text-[var(--foreground-muted)] leading-relaxed">
              Prefer writing a direct message? Reach out directly via email or
              connect across social profiles.
            </p>

            <div className="pt-2 space-y-3">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-flex items-center gap-3 p-4 rounded-[var(--radius-lg)] bg-[var(--background-card)] border border-[var(--border-strong)] hover:border-[var(--accent)] transition-colors text-sm font-mono text-[var(--foreground)] w-full sm:w-auto"
              >
                <Mail className="w-5 h-5 text-[var(--accent)] shrink-0" />
                <span className="font-medium">{CONTACT_EMAIL}</span>
              </a>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                {profile.socialLinks.map((link) => (
                  <a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-[var(--radius-md)] bg-[var(--background-card)] border border-[var(--border)] text-xs font-mono text-[var(--foreground)] hover:text-[var(--accent)] transition-colors"
                  >
                    {getSocialIcon(link.platform)}
                    <span>{link.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Availability Card */}
          <Card className="p-6 md:p-8 space-y-4 bg-[var(--background-card)] border-[var(--border-strong)]">
            <h3 className="font-display font-bold text-lg text-[var(--foreground)]">
              Availability & Focus
            </h3>

            <div className="space-y-3 text-xs font-mono text-[var(--foreground-muted)]">
              <div className="flex items-center justify-between pb-2 border-b border-[var(--border-subtle)]">
                <span>Current Focus</span>
                <span className="text-[var(--foreground)] font-medium">
                  {profile.currentFocus.name}
                </span>
              </div>
              <div className="flex items-center justify-between pb-2 border-b border-[var(--border-subtle)]">
                <span>Timezone</span>
                <span className="text-[var(--foreground)] font-medium">
                  IST (UTC+5:30)
                </span>
              </div>
              <div className="flex items-center justify-between pb-2 border-b border-[var(--border-subtle)]">
                <span>Pradrix Status</span>
                <span className="text-[var(--accent)] font-medium">
                  Accepting Pilot Audits
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span>Response Time</span>
                <span className="text-[var(--success)] font-medium">
                  Within 24 Hours
                </span>
              </div>
            </div>
          </Card>
        </div>
      </Section>
    </main>
  );
}
