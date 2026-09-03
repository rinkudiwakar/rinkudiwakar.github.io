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
      <div className="container-hero relative pt-4 sm:pt-6 md:pt-8 pb-16 sm:pb-20 lg:pb-24">
        {/* ── TOP HERO ROW: Big Photo on Left + Intro, Headline, Description, Buttons on Right ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-12 items-center">

          {/* ── LEFT: Big Portrait Photo (Extends down to View My Work button) ── */}
          <div className="lg:col-span-6 xl:col-span-6 flex items-center justify-center lg:justify-start">
            <HeroPortrait />
          </div>

          {/* ── RIGHT: What I Do (Intro + Headline + Description + CTAs) ── */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center space-y-6 sm:space-y-7 relative lg:pl-2">
            {/* Intro ("Hey, I'm Rinku") */}
            <HeroIntro />

            {/* Headline ("I Build Software That Turns Ideas Into Real Products.") */}
            <HeroHeadline />

            {/* Description */}
            <HeroDescription />

            {/* CTA Buttons */}
            <HeroActions />

            {/* Handwritten Annotation */}
            <div className="hidden 2xl:block absolute -right-6 top-[280px]">
              <HeroAnnotation />
            </div>
          </div>
        </div>

        {/* ── BELOW THAT: Scroll Indicator on Left + Credibility Stats Data ── */}
        <div className="pt-8 sm:pt-12 pb-8 border-t border-[var(--border-subtle)] mt-8 sm:mt-10 lg:mt-12">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            {/* Left: Scroll to explore / know more (kept in same place) */}
            <div className="shrink-0">
              <ScrollIndicator />
            </div>

            {/* Credibility Stats row */}
            <div className="shrink-0">
              <HeroStats />
            </div>
          </div>
        </div>

        {/* ── MacBook Showcase: What I'm Best At (Coded Capabilities) ── */}
        <div className="pt-6 sm:pt-8 lg:pt-10 max-w-[840px] mx-auto">
          <MacBookShowcase />
        </div>

      </div>

      {/* Subtle bottom border */}
      <div className="w-full h-px bg-[var(--border)]" aria-hidden="true" />
    </section>
  );
}
