import * as React from "react";

export function HeroIntro() {
  return (
    <div className="flex items-center gap-3 -rotate-2 select-none">
      <span className="font-handwritten text-2xl sm:text-3xl text-[var(--foreground)] tracking-wide">
        Hey, I&apos;m Rinku
      </span>

      {/* Hand-drawn arrow pointing toward the headline */}
      <svg
        width="32"
        height="28"
        viewBox="0 0 32 28"
        fill="none"
        className="text-[var(--foreground)] opacity-70 translate-y-1"
        aria-hidden="true"
      >
        <path
          d="M2 14 C10 4, 22 2, 28 16 C29 18, 29 22, 27 24"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M23 20 L27 24 L29 19"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    </div>
  );
}
