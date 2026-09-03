"use client";

import * as React from "react";
import Image from "next/image";

export function AboutPortrait() {
  return (
    <div className="relative flex flex-col items-center select-none">
      {/* Handwritten Annotation above/beside photo */}
      <div className="absolute -top-12 -left-6 sm:-top-14 sm:-left-10 z-20 flex flex-col items-start pointer-events-none">
        <span
          className="font-handwritten text-lg sm:text-xl md:text-2xl text-[var(--foreground)] -rotate-6 tracking-wide font-medium"
          style={{ fontFamily: "'Caveat', 'Kalam', 'Segoe Print', cursive" }}
        >
          Always curious.
          <br />
          Always building.
        </span>

        {/* Curved hand-drawn arrow pointing down-right toward the photo */}
        <svg
          width="46"
          height="42"
          viewBox="0 0 46 42"
          fill="none"
          className="text-[var(--foreground)] opacity-75 ml-6 -mt-1"
          aria-hidden="true"
        >
          <path
            d="M 6 4
              C 12 16, 22 26, 36 32
              C 39 34, 42 35, 43 36"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M 36 37
              L 43 36
              L 40 29"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      </div>

      {/* 
        Framed Photograph:
        Pinned into a personal engineering notebook feel:
        Off-white paper border, subtle counter-clockwise tilt, soft drop shadow
      */}
      <div className="relative group p-3 sm:p-4 bg-white dark:bg-[#1B1E26] border border-[var(--border)] rounded-sm shadow-[0_10px_30px_rgba(0,0,0,0.08)] dark:shadow-[0_16px_36px_rgba(0,0,0,0.4)] -rotate-1 sm:-rotate-2 hover:rotate-0 transition-transform duration-300 ease-out max-w-[340px] sm:max-w-[380px] lg:max-w-[420px] w-full">
        {/* Subtle tape accent on top edge */}
        <div
          className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-[var(--background-muted)]/80 dark:bg-white/10 backdrop-blur-xs border border-[var(--border-subtle)] rotate-1 opacity-75 pointer-events-none shadow-xs"
          aria-hidden="true"
        />

        {/* The Actual Photo: Rinku working on hardware robotics chassis */}
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xs bg-[var(--background-subtle)]">
          <Image
            src="/images/rinku_about.jpg"
            alt="Rinku Diwakar soldering and wiring an autonomous hardware robotics system"
            fill
            sizes="(max-width: 640px) 340px, (max-width: 1024px) 380px, 420px"
            className="object-cover object-center grayscale contrast-105 group-hover:grayscale-0 transition-all duration-500"
            priority
          />
        </div>

        {/* Paper frame bottom caption */}
        <div className="pt-2.5 flex items-center justify-between text-[11px] font-mono text-[var(--foreground-subtle)] tracking-wider">
          <span>HARDWARE LAB</span>
          <span>CIRCUITS & CODE</span>
        </div>
      </div>
    </div>
  );
}
