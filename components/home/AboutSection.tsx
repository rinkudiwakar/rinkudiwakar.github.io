"use client";

import * as React from "react";
import { AboutIntro } from "./about/AboutIntro";
import { AboutPortrait } from "./about/AboutPortrait";
import { AboutJourney } from "./about/AboutJourney";
import { AboutTransition } from "./about/AboutTransition";
import { AboutCapabilities } from "./about/AboutCapabilities";
import { AboutProof } from "./about/AboutProof";
import { AboutManifesto } from "./about/AboutManifesto";

export function AboutSection() {
  return (
    <section
      id="about"
      aria-label="02 About Me — Hardware to Software Story"
      className="relative w-full py-16 sm:py-20 lg:py-24 border-b border-[var(--border)] bg-[var(--background)] transition-colors duration-200 overflow-hidden"
    >
      <div className="container-hero flex flex-col space-y-16 sm:space-y-20 lg:space-y-24">
        
        {/* ── TWO-COLUMN OPENING: Story Narrative (Left) & Framed Portrait (Right) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start pt-2">
          {/* Left: Headline, Narrative & Identity Metadata */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <AboutIntro />
          </div>

          {/* Right: Framed Engineering Notebook Photograph */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end pt-8 lg:pt-4">
            <AboutPortrait />
          </div>
        </div>

        {/* ── FULL-WIDTH SECTION: MY JOURNEY (5-Stage Progressive Timeline) ── */}
        <AboutJourney />

        {/* ── CENTRAL IDEA: Hardware-Software-AI-Product System Architecture ── */}
        <AboutTransition />

        {/* ── TECHNICAL REPERTOIRE: 4 Capability Cards ── */}
        <AboutCapabilities />

        {/* ── PROJECTS AS PROOF: Kavach & NanoTrade Evidence ── */}
        <AboutProof />

        {/* ── THE COMMON THREAD & PERSONAL MANIFESTO ── */}
        <AboutManifesto />

      </div>
    </section>
  );
}
