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
      <div className="container-hero relative pt-2 sm:pt-4 md:pt-6 pb-12 sm:pb-16 lg:pb-20">
        {/* ── Main Editorial 2-Column Grid ─────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 xl:gap-8 items-start">

          {/* ── LEFT COLUMN: Portrait + Bottom Stats Row (lg:col-span-6) ── */}
          <div className="lg:col-span-6 flex flex-col justify-between order-1">
            {/* Artistic Portrait */}
            <div className="w-full flex justify-center lg:justify-start">
              <HeroPortrait />
            </div>

            {/* Bottom row under portrait: Scroll indicator + Stats in single horizontal row */}
            <div className="hidden lg:flex items-end gap-6 xl:gap-8 pt-6 xl:pt-8">
              <div className="shrink-0 pb-1">
                <ScrollIndicator />
              </div>
              <div className="flex-1 min-w-0">
                <HeroStats />
              </div>
            </div>
          </div>

          {/* ── RIGHT COLUMN: Content + MacBook Showcase (lg:col-span-6) ── */}
          <div className="lg:col-span-6 flex flex-col space-y-5 sm:space-y-6 order-2 relative lg:pt-4 xl:pt-6">
            {/* Intro ("Hey, I'm Rinku") */}
            <HeroIntro />

            {/* Headline ("I Build Software That Turns Ideas Into Real Products.") */}
            <HeroHeadline />

            {/* Description */}
            <HeroDescription />

            {/* CTA Buttons */}
            <HeroActions />

            {/* Handwritten Annotation ("From Idea → Code → Product") */}
            <HeroAnnotation />

            {/* MacBook Showcase with real coded window UI */}
            <div className="pt-2 sm:pt-4 w-full max-w-[620px] xl:max-w-[660px] lg:self-end">
              <MacBookShowcase />
            </div>
          </div>

          {/* ── Mobile/Tablet Bottom Stats & Scroll (visible < lg) ── */}
          <div className="lg:hidden col-span-1 flex flex-col items-center gap-8 pt-6 order-3">
            <HeroStats />
            <ScrollIndicator />
          </div>

        </div>
      </div>

      {/* Subtle bottom border matching the warm editorial palette */}
      <div className="w-full h-px bg-[var(--border)]" aria-hidden="true" />
    </section>
  );
}
