"use client";

import * as React from "react";
import { Folder, Sparkles, Users, Code2 } from "lucide-react";

interface StatItem {
  icon: React.ReactNode;
  numericValue: number;
  suffix: string;
  displayValue: string;
  label: string;
}

const stats: StatItem[] = [
  {
    icon: <Folder className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--foreground)] stroke-[1.75]" />,
    numericValue: 8,
    suffix: "+",
    displayValue: "8+",
    label: "AI/ML Projects",
  },
  {
    icon: <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--foreground)] stroke-[1.75]" />,
    numericValue: 34,
    suffix: "",
    displayValue: "34",
    label: "GitHub Stars",
  },
  {
    icon: <Users className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--foreground)] stroke-[1.75]" />,
    numericValue: 64,
    suffix: "",
    displayValue: "64",
    label: "Repositories",
  },
  {
    icon: <Code2 className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--foreground)] stroke-[1.75]" />,
    numericValue: 6,
    suffix: "+",
    displayValue: "6+",
    label: "Featured Projects",
  },
];

function CountUpNumber({
  end,
  suffix = "",
  fallback,
}: {
  end: number;
  suffix?: string;
  fallback: string;
}) {
  const [display, setDisplay] = React.useState(fallback);
  const ref = React.useRef<HTMLSpanElement>(null);
  const animatedRef = React.useRef(false);

  React.useEffect(() => {
    // Respect reduced motion
    if (
      typeof window !== "undefined" &&
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const element = ref.current;
    if (!element || animatedRef.current || typeof IntersectionObserver !== "function") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animatedRef.current) {
          animatedRef.current = true;
          observer.disconnect();

          const duration = 850; // 850ms ease-out
          let startTimestamp: number | null = null;

          const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const elapsed = timestamp - startTimestamp;
            const progress = Math.min(elapsed / duration, 1);
            // Ease-out cubic
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(easeOut * end);

            setDisplay(`${current}${suffix}`);

            if (progress < 1) {
              requestAnimationFrame(step);
            } else {
              setDisplay(`${end}${suffix}`);
            }
          };

          // Trigger count-up right as stats reveal settles
          const timer = setTimeout(() => {
            requestAnimationFrame(step);
          }, 450);

          return () => clearTimeout(timer);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [end, suffix]);

  return <span ref={ref}>{display}</span>;
}

export function HeroStats() {
  return (
    <div className="hero-stats select-none w-full hero-stats-reveal">
      <div className="flex flex-wrap sm:flex-nowrap items-center justify-between gap-4 sm:gap-0 sm:divide-x sm:divide-[var(--border)]">
        {stats.map((stat, idx) => (
          <div
            key={stat.label}
            className={`group flex flex-col items-center sm:items-start cursor-default transition-all duration-200 ${
              idx === 0
                ? "sm:pr-3 md:pr-5 lg:pr-6"
                : idx === stats.length - 1
                ? "sm:pl-3 md:pl-5 lg:pl-6"
                : "sm:px-3 md:px-5 lg:px-6"
            }`}
          >
            <div className="flex items-center gap-1.5 sm:gap-2 mb-0.5">
              <span
                className="shrink-0 text-[var(--foreground)] opacity-85 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:opacity-100"
                aria-hidden="true"
              >
                {stat.icon}
              </span>
              <span className="text-xl sm:text-2xl lg:text-3xl font-bold font-display text-[var(--foreground)] tracking-tight transition-transform duration-200 origin-left group-hover:scale-[1.02]">
                <CountUpNumber
                  end={stat.numericValue}
                  suffix={stat.suffix}
                  fallback={stat.displayValue}
                />
              </span>
            </div>
            <span className="text-[11px] sm:text-xs text-[var(--foreground-muted)] font-normal whitespace-nowrap transition-colors duration-200 group-hover:text-[var(--foreground)]">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
