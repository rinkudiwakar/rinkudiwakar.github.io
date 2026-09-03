"use client";

import * as React from "react";
import Image from "next/image";

interface AboutPortraitProps {
  hasEntered?: boolean;
}

export function AboutPortrait({ hasEntered = true }: AboutPortraitProps) {
  return (
    <div className="relative flex items-center justify-center select-none w-full max-w-[500px]">
      
      {/* ── 1. BACKGROUND CIRCUIT TRACES (FAINT SCHEMATIC LINES BEHIND PHOTO) ── */}
      <svg
        className="absolute inset-0 w-full h-full text-[var(--foreground)] opacity-[0.08] dark:opacity-[0.14] pointer-events-none -z-10"
        viewBox="0 0 480 380"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Left-side traces */}
        <path d="M 0 160 L 90 160 L 120 190 L 170 190" stroke="currentColor" strokeWidth="1.2" strokeDasharray="3 3" />
        <circle cx="170" cy="190" r="2.5" fill="currentColor" />
        <path d="M 20 220 L 80 220 L 100 200 L 140 200" stroke="currentColor" strokeWidth="1.2" />
        <circle cx="140" cy="200" r="2.5" fill="none" stroke="currentColor" strokeWidth="1.2" />

        {/* Right-side traces */}
        <path d="M 330 140 L 370 140 L 400 170 L 480 170" stroke="currentColor" strokeWidth="1.2" />
        <circle cx="330" cy="140" r="2.5" fill="currentColor" />
        <circle cx="480" cy="170" r="2.5" fill="none" stroke="currentColor" strokeWidth="1.2" />
        <path d="M 350 220 L 400 220 L 430 250 L 470 250" stroke="currentColor" strokeWidth="1.2" strokeDasharray="4 3" />
        <circle cx="470" cy="250" r="2.5" fill="currentColor" />
      </svg>

      {/* ── 2. FRAMED POLAROID PHOTOGRAPH ── */}
      <div className="relative flex items-center">
        <div
          className={`relative group p-3 sm:p-3.5 bg-[#14171F] text-white border border-[#232734] rounded-sm shadow-[0_16px_40px_rgba(0,0,0,0.18)] dark:shadow-[0_20px_48px_rgba(0,0,0,0.6)] -rotate-2 hover:rotate-0 hover:scale-[1.015] transition-all duration-500 ease-out w-[270px] sm:w-[300px] md:w-[325px] ${
            hasEntered ? "opacity-100 scale-100" : "opacity-0 scale-[0.97]"
          }`}
        >
          {/* Masking tape piece at top center */}
          <div
            className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-5.5 bg-[#d4c3a3]/80 dark:bg-[#c9b794]/40 backdrop-blur-xs border border-[#bfae8b]/60 rotate-1 opacity-80 pointer-events-none shadow-xs z-10"
            aria-hidden="true"
          />

          {/* Actual Photograph */}
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xs bg-[#0c0d12]">
            <Image
              src="/images/rinku_about.jpg"
              alt="Rinku Diwakar soldering and wiring an autonomous hardware robotics system"
              fill
              sizes="(max-width: 640px) 270px, (max-width: 1024px) 300px, 325px"
              className="object-cover object-center grayscale contrast-110 group-hover:grayscale-0 transition-all duration-500"
              priority
            />
          </div>

          {/* Polaroid Dark Frame Caption */}
          <div className="pt-2.5 px-0.5 flex items-center justify-between text-[10px] font-mono text-[#8e97aa] tracking-widest uppercase">
            <span>HARDWARE LAB</span>
            <span>CIRCUITS &amp; CODE</span>
          </div>
        </div>

        {/* ── 3. HANDWRITTEN ANNOTATION & ARROW (POSITIONED TO THE RIGHT OF PHOTO) ── */}
        <div className="hidden sm:flex flex-col items-start pl-4 md:pl-5 -mt-16 pointer-events-none select-none z-10">
          <span
            className="font-handwritten text-[15px] sm:text-base md:text-[17px] text-[var(--foreground)] leading-tight tracking-wide font-medium"
            style={{ fontFamily: "'Caveat', 'Kalam', 'Segoe Print', cursive" }}
          >
            Always curious.
            <br />
            Always building.
          </span>

          {/* Curved hand-drawn arrow pointing LEFT at the photo */}
          <svg
            width="46"
            height="40"
            viewBox="0 0 46 40"
            fill="none"
            className="text-[var(--foreground)] opacity-75 mt-1 ml-1"
            aria-hidden="true"
          >
            <path
              d="M 32 4 C 35 15, 26 27, 8 31"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M 15 25 L 7 31 L 14 36"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>
        </div>
      </div>

    </div>
  );
}
