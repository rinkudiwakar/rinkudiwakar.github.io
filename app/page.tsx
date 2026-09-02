import { Arrival } from "@/components/home/Arrival";
import { HeroSection } from "@/components/home/HeroSection";
import { NowSection } from "@/components/home/NowSection";
import { OriginSection } from "@/components/home/OriginSection";
import { JourneySection } from "@/components/home/JourneySection";
import { KavachSection } from "@/components/home/KavachSection";
import { ThingsIveBuiltSection } from "@/components/home/ThingsIveBuiltSection";
import { WhatBuildingTaughtMeSection } from "@/components/home/WhatBuildingTaughtMeSection";
import { PradrixSection } from "@/components/home/PradrixSection";
import { BuildLogSection } from "@/components/home/BuildLogSection";
import { SignalsSection } from "@/components/home/SignalsSection";
import { ProofSection } from "@/components/home/ProofSection";
import { FutureSection } from "@/components/home/FutureSection";
import { EpilogueSection } from "@/components/home/EpilogueSection";

export default function HomePage() {
  return (
    <Arrival>
      <main id="main-content" className="flex-1 flex flex-col">
        {/* 01 Hero Section */}
        <HeroSection />

        {/* 02 Now Section */}
        <NowSection />

        {/* 03 Origin Section */}
        <OriginSection />

        {/* 04 Journey Section */}
        <JourneySection />

        {/* 05 First Build / Kavach Signature Section */}
        <KavachSection />

        {/* 06 Things I've Built Section */}
        <ThingsIveBuiltSection />

        {/* 07 What Building Taught Me Section */}
        <WhatBuildingTaughtMeSection />

        {/* 08 Pradrix Venture Section */}
        <PradrixSection />

        {/* 09 Build Log Stream */}
        <BuildLogSection />

        {/* 10 Signals Stream */}
        <SignalsSection />

        {/* 11 Proof, Not Promises */}
        <ProofSection />

        {/* 12 Future Direction */}
        <FutureSection />

        {/* 13 Epilogue & Connection */}
        <EpilogueSection />
      </main>
    </Arrival>
  );
}
