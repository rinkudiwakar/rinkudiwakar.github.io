import * as React from "react";

export function HeroAnnotation() {
  return (
    <div
      className="flex flex-col items-center select-none pointer-events-none"
      aria-hidden="true"
    >
      {/* Handwritten annotation text */}
      <div className="font-handwritten text-[var(--foreground)] text-lg sm:text-xl xl:text-2xl leading-tight -rotate-3 select-none opacity-90">
        <div className="italic text-base sm:text-lg opacity-80">From</div>
        <div className="whitespace-nowrap">
          Idea <span className="inline-block mx-0.5">→</span> Code
        </div>
        <div className="pl-6 whitespace-nowrap text-[var(--accent)] font-semibold">
          <span className="inline-block mx-0.5">→</span> Product
        </div>
      </div>

      {/* Curved hand-drawn arrow pointing toward MacBook screen */}
      <svg
        width="40"
        height="50"
        viewBox="0 0 40 50"
        fill="none"
        className="text-[var(--foreground)] opacity-70 translate-y-1"
        aria-hidden="true"
      >
        <path
          d="M12 2 C10 14, 6 28, 12 38 C14 41, 18 44, 24 46"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M17 41 L24 46 L26 38"
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
