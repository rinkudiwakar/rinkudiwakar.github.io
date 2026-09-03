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
    <div className="hero-stats select-none w-full max-w-[440px]">
      <div className="grid grid-cols-2 gap-x-8 gap-y-6 sm:gap-x-10 sm:gap-y-8">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col items-start"
          >
            <div className="flex items-center gap-2.5 mb-1">
              <span className="shrink-0 text-[var(--accent)]" aria-hidden="true">
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
