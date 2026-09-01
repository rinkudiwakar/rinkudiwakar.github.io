import { Arrival } from "@/components/home/Arrival";
import { HeroSection } from "@/components/home/HeroSection";
import { NowSection } from "@/components/home/NowSection";
import { OriginSection } from "@/components/home/OriginSection";
import { JourneySection } from "@/components/home/JourneySection";

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
      </main>
    </Arrival>
  );
}
