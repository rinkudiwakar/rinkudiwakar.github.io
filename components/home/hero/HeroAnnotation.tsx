import * as React from "react";

export function HeroAnnotation() {
  return (
    <div
      className="hidden lg:block absolute right-0 xl:right-2 top-[340px] xl:top-[330px] z-30 select-none pointer-events-none"
      aria-hidden="true"
    >
      <div className="relative">
        {/* Handwritten annotation text */}
        <div className="font-handwritten text-[var(--foreground)] text-base sm:text-lg xl:text-xl leading-snug -rotate-6 select-none opacity-85">
          <div className="italic">From</div>
          <div className="whitespace-nowrap">
            Idea <span className="inline-block mx-0.5">→</span> Code
          </div>
          <div className="pl-6 sm:pl-8 whitespace-nowrap">
            <span className="inline-block mx-0.5">→</span> Product
          </div>
        </div>

        {/* Curved hand-drawn arrow pointing toward MacBook */}
        <svg
          width="44"
          height="64"
          viewBox="0 0 44 64"
          fill="none"
          className="absolute -bottom-14 left-6 text-[var(--foreground)] opacity-60"
        >
          <path
            d="M20 2 C18 16, 12 32, 16 46 C18 50, 20 54, 24 56"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M20 52 L24 56 L26 48"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      </div>
    </div>
  );
}
