import * as React from "react";

export function HeroIntro() {
  return (
    <div className="flex items-center gap-3 -rotate-2 select-none hero-intro-reveal">
      <span
        className="font-handwritten text-3xl sm:text-4xl text-[var(--foreground)] tracking-wide font-medium"
        style={{ fontFamily: "'Caveat', 'Kalam', 'Segoe Print', cursive" }}
      >
        Hey, I&apos;m Rinku
      </span>

      {/* Hand-drawn arrow pointing toward the headline */}
      <svg
        width="34"
        height="30"
        viewBox="0 0 34 30"
        fill="none"
        className="hero-intro-arrow-draw text-[var(--foreground)] opacity-75 translate-y-1"
        aria-hidden="true"
      >
        <path
          d="M2 15 C11 5, 24 3, 30 18 C31 20, 31 23, 29 25"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M24 21 L29 25 L31 20"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    </div>
  );
}
