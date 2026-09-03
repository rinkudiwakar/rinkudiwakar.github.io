import * as React from "react";

function HandDrawnUnderline() {
  return (
    <svg
      className="hero-underline hero-underline-animate absolute -bottom-2 left-0 w-full h-3"
      viewBox="0 0 280 12"
      fill="none"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M2 8 C30 4, 60 10, 90 6 C120 2, 150 9, 180 5 C210 1, 240 8, 278 4"
        stroke="url(#underline-gradient)"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      <defs>
        <linearGradient id="underline-gradient" x1="0" y1="0" x2="280" y2="0" gradientUnits="userSpaceOnUse">
          <stop stopColor="var(--hero-gradient-start)" />
          <stop offset="1" stopColor="var(--hero-gradient-end)" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function HeroHeadline() {
  return (
    <h1 className="text-[clamp(2.1rem,3.4vw,3.4rem)] font-bold tracking-tight text-[var(--foreground)] leading-[1.08] select-none">
      <span className="block hero-headline-line-1">I Build Software That</span>
      <span className="block hero-headline-line-2">Turns Ideas Into</span>
      <span className="relative inline-block mt-0.5 hero-headline-line-3">
        <span className="hero-gradient-text">Real Products.</span>
        <HandDrawnUnderline />
      </span>
    </h1>
  );
}
