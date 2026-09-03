"use client";

import * as React from "react";
import Image from "next/image";

interface AboutPortraitProps {
  hasEntered?: boolean;
}

export function AboutPortrait({ hasEntered = true }: AboutPortraitProps) {
  return (
    <div className="relative flex flex-col items-center select-none w-full max-w-[365px] sm:max-w-[405px] lg:max-w-[430px]">
      {/* 
        Handwritten Annotation:
        ~20-25% smaller than before, positioned closer to the photo
      */}
      <div className="absolute -top-9 left-2 sm:-top-10 sm:-left-2 z-20 flex flex-col items-start pointer-events-none">
        <span
          className="font-handwritten text-[13px] sm:text-[14.5px] md:text-base text-[var(--foreground)] -rotate-6 tracking-wide font-medium leading-tight"
          style={{ fontFamily: "'Caveat', 'Kalam', 'Segoe Print', cursive" }}
        >
          Always curious.
          <br />
          Always building.
        </span>

        {/* Small curved hand-drawn arrow pointing down-right toward the photo */}
        <svg
          width="34"
          height="28"
          viewBox="0 0 34 28"
          fill="none"
          className="text-[var(--foreground)] opacity-70 ml-4 -mt-0.5"
          aria-hidden="true"
        >
          <path
            d="M 4 3 C 9 11, 16 18, 26 22 C 28 23, 30 24, 31 24"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M 25 25 L 31 24 L 29 19"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      </div>

      {/* 
        Framed Photograph:
        Pinned into a personal engineering notebook feel:
        Off-white paper border, subtle counter-clockwise tilt, soft drop shadow.
        Visual scale increased by ~6% for balanced connection with text.
      */}
      <div
        className={`relative group p-3 sm:p-4 bg-white dark:bg-[#1B1E26] border border-[var(--border)] rounded-sm shadow-[0_10px_30px_rgba(0,0,0,0.07)] dark:shadow-[0_16px_36px_rgba(0,0,0,0.35)] -rotate-1.5 hover:rotate-0 transition-all duration-700 ease-out w-full ${
          hasEntered
            ? "opacity-100 scale-100"
            : "opacity-0 scale-[0.97]"
        }`}
      >
        {/* Subtle tape accent on top edge */}
        <div
          className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-5 bg-[var(--background-muted)]/85 dark:bg-white/10 backdrop-blur-xs border border-[var(--border-subtle)] rotate-1 opacity-70 pointer-events-none shadow-xs"
          aria-hidden="true"
        />

        {/* The Actual Photo: Rinku working on hardware robotics chassis */}
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xs bg-[var(--background-subtle)]">
          <Image
            src="/images/rinku_about.jpg"
            alt="Rinku Diwakar soldering and wiring an autonomous hardware robotics system"
            fill
            sizes="(max-width: 640px) 340px, (max-width: 1024px) 390px, 430px"
            className="object-cover object-center grayscale contrast-105 group-hover:grayscale-0 transition-all duration-500"
            priority
          />
        </div>

        {/* Paper frame bottom caption */}
        <div className="pt-2.5 flex items-center justify-between text-[10.5px] font-mono text-[var(--foreground-subtle)] tracking-wider">
          <span>HARDWARE LAB</span>
          <span>CIRCUITS & CODE</span>
        </div>
      </div>
    </div>
  );
}
