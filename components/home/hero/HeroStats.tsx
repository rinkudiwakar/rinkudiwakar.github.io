import * as React from "react";
import { Folder, Sparkles, Users, Code2 } from "lucide-react";

interface StatItem {
  icon: React.ReactNode;
  value: string;
  label: string;
}

const stats: StatItem[] = [
  {
    icon: <Folder className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--foreground)] stroke-[1.75]" />,
    value: "8+",
    label: "AI/ML Projects",
  },
  {
    icon: <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--foreground)] stroke-[1.75]" />,
    value: "34",
    label: "GitHub Stars",
  },
  {
    icon: <Users className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--foreground)] stroke-[1.75]" />,
    value: "64",
    label: "Repositories",
  },
  {
    icon: <Code2 className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--foreground)] stroke-[1.75]" />,
    value: "6+",
    label: "Featured Projects",
  },
];

export function HeroStats() {
  return (
    <div className="hero-stats select-none w-full">
      <div className="flex flex-wrap sm:flex-nowrap items-center justify-between gap-4 sm:gap-0 sm:divide-x sm:divide-[var(--border)]">
        {stats.map((stat, idx) => (
          <div
            key={stat.label}
            className={`flex flex-col items-center sm:items-start ${
              idx === 0
                ? "sm:pr-3 md:pr-5 lg:pr-6"
                : idx === stats.length - 1
                ? "sm:pl-3 md:pl-5 lg:pl-6"
                : "sm:px-3 md:px-5 lg:px-6"
            }`}
          >
            <div className="flex items-center gap-1.5 sm:gap-2 mb-0.5">
              <span className="shrink-0 text-[var(--foreground)]" aria-hidden="true">
                {stat.icon}
              </span>
              <span className="text-xl sm:text-2xl lg:text-3xl font-bold font-display text-[var(--foreground)] tracking-tight">
                {stat.value}
              </span>
            </div>
            <span className="text-[11px] sm:text-xs text-[var(--foreground-muted)] font-normal whitespace-nowrap">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
