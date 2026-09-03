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

      {/* Curved hand-drawn arrow pointing toward MacBook screen */}
      <svg
        width="34"
        height="38"
        viewBox="0 0 34 38"
        fill="none"
        className="text-[var(--foreground)] opacity-70 mt-1 translate-y-0.5"
        aria-hidden="true"
      >
        <path
          d="M8 2 C6 12, 4 22, 10 28 C12 30, 16 32, 22 34"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M16 30 L22 34 L23 27"
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
