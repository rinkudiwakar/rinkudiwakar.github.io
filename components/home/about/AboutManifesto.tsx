import * as React from "react";

export function AboutManifesto() {
  return (
    <div className="w-full py-10 sm:py-14 border-t border-[var(--border)] flex flex-col items-center text-center space-y-10 sm:space-y-12">
      
      {/* ── 9. THE COMMON THREAD ── */}
      <div className="space-y-4 max-w-xl mx-auto">
        <span className="font-mono text-[10.5px] sm:text-[11.5px] tracking-[0.25em] text-[var(--foreground-subtle)] uppercase">
          THE COMMON THREAD
        </span>

        <h3 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-[var(--foreground)] tracking-tight">
          I like making things.
        </h3>

        {/* Reflective Stanzas with Generous Whitespace */}
        <div className="pt-4 space-y-2.5 sm:space-y-3 text-sm sm:text-base md:text-lg text-[var(--foreground-muted)] font-normal leading-relaxed">
          <p>Sometimes it&apos;s code.</p>
          <p>Sometimes it&apos;s a circuit.</p>
          <p>Sometimes it&apos;s an AI model.</p>
          <p>Sometimes it&apos;s all of them together.</p>
          <div className="py-2">
            <p className="text-xs sm:text-sm font-mono text-[var(--foreground-subtle)] italic">
              And sometimes...
            </p>
          </div>
          <p className="text-base sm:text-lg font-medium text-[var(--foreground)]">
            I just want to see what happens.
          </p>
        </div>
      </div>

      {/* ── 10. FINAL STATEMENT / PERSONAL MANIFESTO ── */}
      <div className="relative p-6 sm:p-8 md:p-10 rounded-2xl bg-[var(--background-subtle)] border border-[var(--border)] max-w-2xl w-full select-none text-left shadow-xs">
        {/* Subtle decorative pin/stamp in corner */}
        <div className="flex items-center justify-between pb-4 border-b border-[var(--border-subtle)] mb-5 text-[10px] font-mono tracking-widest text-[var(--foreground-subtle)] uppercase">
          <span>RINKU DIWAKAR · MANIFESTO</span>
          <span>EST. 2023</span>
        </div>

        <div className="space-y-3 text-base sm:text-lg md:text-xl text-[var(--foreground)] leading-snug">
          <p className="font-sans">Hardware gives me something to touch.</p>
          <p className="font-sans">Software gives me something to build.</p>
          
          {/* Hand-drawn accented final sentence */}
          <div className="pt-2">
            <div className="relative inline-block">
              <span
                className="font-handwritten text-2xl sm:text-3xl text-[var(--foreground)] tracking-wide font-medium leading-tight"
                style={{
                  fontFamily: "'Caveat', 'Kalam', 'Segoe Print', cursive",
                }}
              >
                I like working where the two meet.
              </span>
              {/* Hand-drawn underline SVG */}
              <svg
                viewBox="0 0 320 16"
                fill="none"
                className="w-full h-3 text-[var(--accent)] mt-0.5"
                aria-hidden="true"
              >
                <path
                  d="M 4 9 C 80 5, 180 14, 316 7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
