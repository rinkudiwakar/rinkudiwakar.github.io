import * as React from "react";
import Link from "next/link";
import { ArrowRight, ArrowDown } from "lucide-react";

export function HeroActions() {
  return (
    <div className="flex flex-wrap items-center gap-3 pt-1">
      {/* Primary CTA */}
      <Link
        href="/work"
        className="group inline-flex items-center gap-2 px-6 py-2.5 rounded-[var(--radius-md)] bg-[var(--foreground)] text-[var(--background)] font-medium text-sm transition-all duration-200 hover:shadow-[var(--shadow-elevated)] hover:-translate-y-0.5 active:translate-y-0"
      >
        <span>View My Work</span>
        <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
      </Link>

      {/* Secondary CTA — opens /resume in new tab */}
      <Link
        href="/resume"
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center gap-2 px-6 py-2.5 rounded-[var(--radius-md)] bg-transparent border border-[var(--border-strong)] text-[var(--foreground)] font-medium text-sm transition-all duration-200 hover:border-[var(--foreground-muted)] hover:shadow-[var(--shadow-card)] hover:-translate-y-0.5 active:translate-y-0"
      >
        <span>Download Resume</span>
        <ArrowDown className="w-4 h-4 transition-transform duration-200 group-hover:translate-y-0.5" />
      </Link>
    </div>
  );
}
