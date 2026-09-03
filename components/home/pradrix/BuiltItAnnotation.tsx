import * as React from "react";

export function BuiltItAnnotation({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex flex-col items-center select-none pointer-events-none ${className}`}
      aria-hidden="true"
    >
      {/* Handwritten text: "Built it." */}
      <span
        className="font-handwritten text-xl sm:text-2xl lg:text-3xl text-[var(--foreground)] -rotate-3 tracking-wide font-medium"
        style={{ fontFamily: "'Caveat', 'Kalam', 'Segoe Print', cursive" }}
      >
        Built it.
      </span>

      {/* Curved hand-drawn arrow pointing toward the MacBook screen */}
      <svg
        width="44"
        height="50"
        viewBox="0 0 44 50"
        fill="none"
        className="text-[var(--foreground)] opacity-75 mt-0.5"
        aria-hidden="true"
      >
        <path
          d="M 32 3
            C 28 14, 22 25, 20 34
            C 18 40, 15 44, 8 47"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          className="hero-annotation-stem-draw"
          fill="none"
        />
        <path
          d="M 14 43
            L 8 47
            L 13 49"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="hero-annotation-head-draw"
          fill="none"
        />
      </svg>
    </div>
  );
}
