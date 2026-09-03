import * as React from "react";

export function HeroAnnotation() {
  return (
    <div
      className="flex flex-col items-center select-none pointer-events-none"
      aria-hidden="true"
    >
      {/* Handwritten annotation text */}
      <div
        className="font-handwritten text-[var(--foreground)] text-base sm:text-lg xl:text-xl leading-tight -rotate-3 select-none opacity-90"
        style={{ fontFamily: "'Caveat', 'Kalam', 'Segoe Print', cursive" }}
      >
        <div className="italic text-xs sm:text-sm opacity-75">From</div>
        <div className="whitespace-nowrap">
          Idea <span className="inline-block mx-0.5">→</span> Code
        </div>
        <div className="pl-5 whitespace-nowrap text-[var(--accent)] font-semibold">
          <span className="inline-block mx-0.5">→</span> Product
        </div>
      </div>

      {/* Hand-drawn arrow from Product → MacBook corner */}
      <svg
        width="52"
        height="58"
        viewBox="0 0 52 58"
        fill="none"
        className="text-[var(--foreground)] opacity-65"
        aria-hidden="true"
      >
        {/* Curved arrow stem */}
        <path
          d="M 40 3
            C 37 13, 34 23, 34 31
            C 34 39, 29 46, 21 51"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          fill="none"
        />

        {/* Arrowhead */}
        <path
          d="M 27 47
            L 21 51
            L 28 53"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    </div>
  );
}
