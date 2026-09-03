import * as React from "react";

interface BuiltItAnnotationProps {
  className?: string;
  isActive?: boolean;
}

export function BuiltItAnnotation({
  className = "",
  isActive = false,
}: BuiltItAnnotationProps) {
  return (
    <div
      className={`built-it-wrapper flex flex-col items-center select-none pointer-events-none ${
        isActive ? "built-it-active opacity-100" : "opacity-0"
      } ${className}`}
      aria-hidden="true"
    >
      {/* Handwritten text: "Built it." with scroll-triggered pop */}
      <span
        className="built-it-text font-handwritten text-lg sm:text-xl lg:text-2xl text-[var(--foreground)] -rotate-3 tracking-wide font-medium leading-none mb-1"
        style={{ fontFamily: "'Caveat', 'Kalam', 'Segoe Print', cursive" }}
      >
        Built it.
      </span>

      {/* Short, curved hand-drawn arrow pointing down-left toward the laptop screen */}
      <svg
        width="48"
        height="44"
        viewBox="0 0 48 44"
        fill="none"
        className="text-[var(--foreground)] opacity-80"
        aria-hidden="true"
      >
        {/* Curved stem pointing down-leftward into the display screen */}
        <path
          d="M 40 4
            C 34 14, 26 24, 14 34
            C 11 37, 7 40, 4 41"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          className="built-it-stem"
          fill="none"
        />
        {/* Arrowhead angled directly toward the screen */}
        <path
          d="M 12 37
            L 4 41
            L 8 45"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="built-it-head"
          fill="none"
        />
      </svg>
    </div>
  );
}
