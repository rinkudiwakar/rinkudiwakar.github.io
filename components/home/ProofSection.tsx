import * as React from "react";
import { ShieldCheck, ArrowUpRight, CheckCircle2, Lock, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { getProofClaims } from "@/lib/content";

export function ProofSection() {
  const claims = getProofClaims();

  return (
    <section
      id="proof"
      aria-label="Proof Not Promises"
      className="w-full py-20 md:py-32 border-b border-[var(--border)] bg-[var(--background)] transition-colors duration-200"
    >
      <div className="container-editorial space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[var(--border)]">
          <div className="space-y-3 max-w-3xl">
            <div className="flex items-center gap-2">
              <Badge variant="accent">11 · PROOF, NOT PROMISES</Badge>
              <span className="flex items-center gap-1 text-xs font-mono text-[var(--success)] font-medium">
                <ShieldCheck className="w-3.5 h-3.5" />
                Evidence-First Architecture
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-[var(--foreground)] leading-[1.08]">
              Proof, not promises.
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-[var(--foreground-muted)] font-normal leading-relaxed">
              Every factual claim made on this site is backed by first-party,
              publicly verifiable evidence — from institutional credentials to
              open-source code repositories.
            </p>
          </div>

          <div className="text-xs font-mono text-[var(--foreground-subtle)] shrink-0">
            {claims.length} Sourced Evidence Points
          </div>
        </div>

        {/* Proof Claims Table / Grid */}
        <div className="space-y-4">
          {claims.map((claim, idx) => (
            <Card
              key={claim.id}
              className="p-6 md:p-8 space-y-4 bg-[var(--background-card)] border-[var(--border-strong)] flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-[var(--accent-border)] transition-colors duration-150"
            >
              {/* Claim Description & ID */}
              <div className="space-y-2 max-w-2xl">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-[var(--accent)]">
                    #0{idx + 1}
                  </span>
                  <Badge variant="mono" className="text-[10px]">
                    {claim.sourceType}
                  </Badge>
                  <span className="flex items-center gap-1 text-xs font-mono text-[var(--success)] font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    {claim.verificationStatus === "verified" ? "Verified" : claim.verificationStatus}
                  </span>
                </div>

                <p className="text-base md:text-lg font-display font-semibold text-[var(--foreground)] leading-snug">
                  {claim.claim}
                </p>

                {claim.notes && (
                  <p className="text-xs text-[var(--foreground-muted)] font-mono">
                    {claim.notes}
                  </p>
                )}
              </div>

              {/* Authoritative External Verification Link */}
              <div className="shrink-0 flex items-center gap-3">
                <a
                  href={claim.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-[var(--radius-md)] bg-[var(--background-subtle)] border border-[var(--border)] hover:bg-[var(--border)] text-xs font-mono text-[var(--foreground)] transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-[var(--accent)]" />
                  <span>Inspect Source</span>
                  <ArrowUpRight className="w-3 h-3 text-[var(--foreground-subtle)]" />
                </a>
              </div>
            </Card>
          ))}
        </div>

        {/* Verification Guarantee Notice */}
        <div className="p-6 rounded-[var(--radius-xl)] bg-[var(--background-subtle)] border border-[var(--border)] flex items-start gap-4 text-xs font-mono text-[var(--foreground-muted)]">
          <Lock className="w-4 h-4 text-[var(--accent)] shrink-0 mt-0.5" />
          <div className="space-y-1">
            <span className="font-bold text-[var(--foreground)] uppercase tracking-wider block">
              Integrity Guarantee
            </span>
            <p className="font-body text-xs text-[var(--foreground-muted)] leading-relaxed">
              This portfolio contains zero fabricated metrics, zero ghost clients,
              and zero unverified claims. What you see is what was actually built.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
