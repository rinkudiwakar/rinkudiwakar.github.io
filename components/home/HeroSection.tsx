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
          Left: Big artistic portrait of Rinku + Data just below it in horizontal way
          Right: "Hey, I'm Rinku" (handwritten) + Headline + Description + CTAs
      ═══════════════════════════════════════════════════════════════════ */}
      <div className="min-h-[calc(100vh-5rem)] flex items-center justify-center py-6 sm:py-10">
        <div className="container-hero w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-center">

            {/* ── Left: Big Portrait Photo + That Data just below it in horizontal way ── */}
            <div className="lg:col-span-6 flex flex-col items-center lg:items-start space-y-6 sm:space-y-8">
              {/* Portrait Image */}
              <div className="w-full flex justify-center lg:justify-start">
                <HeroPortrait />
              </div>

              {/* That Data just below the image in horizontal way */}
              <div className="w-full pt-1 flex items-end gap-5 xl:gap-6">
                <div className="shrink-0 pb-1">
                  <ScrollIndicator />
                </div>
                <div className="flex-1 min-w-0">
                  <HeroStats />
                </div>
              </div>
            </div>

            {/* ── Right: What I Do ── */}
            <div className="lg:col-span-6 flex flex-col justify-center space-y-5 sm:space-y-6 lg:space-y-7 relative lg:pl-4">
              <HeroIntro />
              <HeroHeadline />
              <HeroDescription />
              <HeroActions />
            </div>

          </div>
        </div>
      </div>

      {/* Subtle bottom border */}
      <div className="w-full h-px bg-[var(--border)]" aria-hidden="true" />
    </section>
  );
}
