import { Arrival } from "@/components/home/Arrival";
import { HeroSection } from "@/components/home/HeroSection";
import { CurrentlyBuildingSection } from "@/components/home/CurrentlyBuildingSection";
import { AboutSection } from "@/components/home/AboutSection";
import { SelectedWorkSection } from "@/components/home/selected-work/SelectedWorkSection";

export default function HomePage() {
  return (
    <Arrival>
      <main id="main-content" className="flex-1 flex flex-col">
        {/* 01 Hero Section */}
        <HeroSection />

        {/* 01.5 / Currently Building: Pradrix Storytelling & Product Showcase */}
        <CurrentlyBuildingSection />

        {/* 02 / About Me: Hardware to Software Story */}
        <AboutSection />

        {/* 03 / Selected Work: Curated Products, Systems & Experiments */}
        <SelectedWorkSection />
      </main>
    </Arrival>
  );
}
