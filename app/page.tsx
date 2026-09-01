import { Arrival } from "@/components/home/Arrival";
import { HeroSection } from "@/components/home/HeroSection";
import { NowSection } from "@/components/home/NowSection";

export default function HomePage() {
  return (
    <Arrival>
      <main id="main-content" className="flex-1 flex flex-col">
        {/* 01 Hero Section */}
        <HeroSection />

        {/* 02 Now Section */}
        <NowSection />
      </main>
    </Arrival>
  );
}
