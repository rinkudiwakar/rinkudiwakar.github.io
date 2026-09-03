import * as React from "react";
import Link from "next/link";
import { ShieldCheck, TrendingUp, ArrowRight } from "lucide-react";

export function AboutProof() {
  return (
    <div className="w-full space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 pb-3 border-b border-[var(--border)]">
        <div>
          <span className="font-mono text-[10.5px] sm:text-[11.5px] tracking-[0.2em] text-[var(--foreground-subtle)] uppercase">
            EVIDENCE IN ACTION
          </span>
          <h3 className="text-xl sm:text-2xl font-display font-bold text-[var(--foreground)] tracking-tight mt-1">
            PROJECTS THAT SHOW THIS
          </h3>
        </div>
        <span className="text-xs text-[var(--foreground-muted)] font-mono">
          Hardware + Software in production
        </span>
      </div>

      {/* 2 Proof Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card 1: Kavach */}
        <div className="group p-6 sm:p-7 rounded-xl bg-[var(--background)] border border-[var(--border)] transition-all duration-200 hover:-translate-y-1 hover:border-[var(--border-strong)] hover:shadow-sm flex flex-col justify-between space-y-5">
          <div className="space-y-3">
            {/* Tag Badge */}
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[var(--background-subtle)] border border-[var(--border)] text-[11px] font-mono text-[var(--foreground)]">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                <span>KAVACH · HARDWARE + AI</span>
              </span>
            </div>

            {/* Title */}
            <h4 className="text-lg sm:text-xl font-display font-bold text-[var(--foreground)] tracking-tight">
              AI Voice Authentication &amp; Smart Access System
            </h4>

            {/* Relationship Chain */}
            <div className="flex flex-wrap items-center gap-1.5 text-xs font-mono text-[var(--accent)] font-medium pt-1">
              <span>AI</span>
              <span className="text-[var(--foreground-subtle)]">+</span>
              <span>Raspberry Pi</span>
              <span className="text-[var(--foreground-subtle)]">+</span>
              <span>Arduino</span>
              <span className="text-[var(--foreground-subtle)]">+</span>
              <span>Software</span>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-[var(--foreground-muted)] leading-relaxed pt-1">
              An AI voice authentication system connected to a Raspberry Pi and
              Arduino-based access-control pipeline.
            </p>
          </div>

          <Link
            href="/kavach"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors pt-2"
          >
            <span>Explore Kavach Architecture</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Card 2: NanoTrade */}
        <div className="group p-6 sm:p-7 rounded-xl bg-[var(--background)] border border-[var(--border)] transition-all duration-200 hover:-translate-y-1 hover:border-[var(--border-strong)] hover:shadow-sm flex flex-col justify-between space-y-5">
          <div className="space-y-3">
            {/* Tag Badge */}
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[var(--background-subtle)] border border-[var(--border)] text-[11px] font-mono text-[var(--foreground)]">
                <TrendingUp className="w-3.5 h-3.5 text-amber-500" />
                <span>NANOTRADE · HIGH-PERFORMANCE CODE</span>
              </span>
            </div>

            {/* Title */}
            <h4 className="text-lg sm:text-xl font-display font-bold text-[var(--foreground)] tracking-tight">
              Real-Time Trading Platform &amp; C++ Matching Engine
            </h4>

            {/* Relationship Chain */}
            <div className="flex flex-wrap items-center gap-1.5 text-xs font-mono text-[var(--accent)] font-medium pt-1">
              <span>C++</span>
              <span className="text-[var(--foreground-subtle)]">+</span>
              <span>FastAPI</span>
              <span className="text-[var(--foreground-subtle)]">+</span>
              <span>Redis</span>
              <span className="text-[var(--foreground-subtle)]">+</span>
              <span>WebSockets</span>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-[var(--foreground-muted)] leading-relaxed pt-1">
              A real-time paper trading platform built around a custom C++
              matching engine.
            </p>
          </div>

          <Link
            href="/work"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors pt-2"
          >
            <span>View Trading Architecture</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
