"use client";

import * as React from "react";
import { HeroPortrait } from "./hero/HeroPortrait";
import { HeroIntro } from "./hero/HeroIntro";
import { HeroHeadline } from "./hero/HeroHeadline";
import { HeroDescription } from "./hero/HeroDescription";
import { HeroActions } from "./hero/HeroActions";
import { HeroAnnotation } from "./hero/HeroAnnotation";
import { MacBookShowcase } from "./hero/MacBookShowcase";
import { HeroStats } from "./hero/HeroStats";
import { ScrollIndicator } from "./hero/ScrollIndicator";

export function HeroSection() {
  return (
    <section
      aria-label="Hero Introduction"
      className="relative w-full overflow-hidden bg-[var(--background)] transition-colors duration-200"
    >
      {/* ═══════════════════════════════════════════════════════════════════
          SCREEN 1: Full-page view when user opens on PC
          Left: Big artistic portrait of Rinku
          Right: "Hey, I'm Rinku" (handwritten) + Headline + Description + CTAs
      ═══════════════════════════════════════════════════════════════════ */}
      <div className="min-h-[calc(100vh-5rem)] flex items-center justify-center py-4 sm:py-6">
        <div className="container-hero w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-center">

            {/* Left: Big Portrait Photo */}
            <div className="lg:col-span-6 flex items-center justify-center lg:justify-start">
              <HeroPortrait />
            </div>

            {/* Right: What I Do */}
            <div className="lg:col-span-6 flex flex-col justify-center space-y-5 sm:space-y-6 lg:space-y-7 relative lg:pl-4">
              <HeroIntro />
              <HeroHeadline />
              <HeroDescription />
              <HeroActions />
            </div>

          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════
          SCREEN 2: Directly Below That (Tight gap, non-overlapping annotation)
          Left: Those Data in the centre of left + Scroll button below that
          Right: Floating Animated MacBook with Annotation positioned safely above
      ═══════════════════════════════════════════════════════════════════ */}
      <div className="border-t border-[var(--border-subtle)] pt-6 sm:pt-10 lg:pt-12 pb-14 sm:pb-20">
        <div className="container-hero w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-12 items-center">

            {/* Left Side: Those Data in the centre of left + Scroll button below */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center space-y-8 lg:space-y-10">
              {/* Those Data in the centre of left */}
              <div className="w-full flex justify-center">
                <HeroStats />
              </div>

              {/* Scroll button below that */}
              <div className="flex justify-center pt-2">
                <ScrollIndicator />
              </div>
            </div>

            {/* Right Side: MacBook with Annotation pointing cleanly down to it */}
            <div className="lg:col-span-7 flex flex-col items-center lg:items-end relative pt-24 sm:pt-28">
              {/* "From Idea -> Code -> Product" text placed safely above laptop */}
              <div className="hidden lg:block absolute top-0 right-6 sm:right-10 xl:right-14 z-20">
                <HeroAnnotation />
              </div>

              {/* Animated MacBook Pro Showcase */}
              <div className="w-full max-w-[640px] xl:max-w-[700px] 2xl:max-w-[760px]">
                <MacBookShowcase />
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Subtle bottom border */}
      <div className="w-full h-px bg-[var(--border)]" aria-hidden="true" />
    </section>
  );
}
