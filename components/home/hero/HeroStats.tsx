import * as React from "react";
import { Folder, Sparkles, Users, Code2 } from "lucide-react";

interface StatItem {
  icon: React.ReactNode;
  value: string;
  label: string;
}

const stats: StatItem[] = [
  {
    icon: <Folder className="w-5 h-5 text-[var(--foreground)] stroke-[1.75]" />,
    value: "8+",
    label: "AI/ML Projects",
  },
  {
    icon: <Sparkles className="w-5 h-5 text-[var(--foreground)] stroke-[1.75]" />,
    value: "34",
    label: "GitHub Stars",
  },
  {
    icon: <Users className="w-5 h-5 text-[var(--foreground)] stroke-[1.75]" />,
    value: "64",
    label: "Repositories",
  },
  {
    icon: <Code2 className="w-5 h-5 text-[var(--foreground)] stroke-[1.75]" />,
    value: "6+",
    label: "Featured Projects",
  },
];

export function HeroStats() {
  return (
    <div className="hero-stats select-none">
      <div className="flex flex-wrap sm:flex-nowrap items-center justify-between gap-4 sm:gap-0 sm:divide-x sm:divide-[var(--border)]">
        {stats.map((stat, idx) => (
          <div
            key={stat.label}
            className={`flex flex-col items-center sm:items-start ${
              idx === 0 ? "sm:pr-4 xl:sm:pr-6" : idx === stats.length - 1 ? "sm:pl-4 xl:sm:pl-6" : "sm:px-4 xl:sm:px-6"
            }`}
          >
            <div className="flex items-center gap-2 mb-1">
              <span className="shrink-0" aria-hidden="true">
                {stat.icon}
              </span>
              <span className="text-2xl sm:text-3xl font-bold font-display text-[var(--foreground)] tracking-tight">
                {stat.value}
              </span>
            </div>
            <span className="text-xs sm:text-[13px] text-[var(--foreground-muted)] font-normal whitespace-nowrap">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
