import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { HeroSection } from "@/components/home/HeroSection";
import { NowSection } from "@/components/home/NowSection";
import { Arrival } from "@/components/home/Arrival";

describe("Hero & Now Sections", () => {
  it("renders Hero Section with 5-second clarity answers", () => {
    render(<HeroSection />);

    // WHO
    expect(screen.getByRole("heading", { name: "Rinku Diwakar" })).toBeInTheDocument();
    
    // WHAT
    expect(screen.getByText("BUILDER · ENGINEER · EXPLORER")).toBeInTheDocument();
    
    // PHILOSOPHY
    expect(screen.getByText("“WHAT IF?”")).toBeInTheDocument();
    expect(screen.getByText("“IT ACTUALLY WORKS.”")).toBeInTheDocument();

    // NOW (Pradrix)
    expect(screen.getByText("Currently Building")).toBeInTheDocument();
    expect(screen.getByText("Pradrix")).toBeInTheDocument();

    // Primary CTA buttons
    expect(screen.getByRole("link", { name: /Explore the Story/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Things I’ve Built/i })).toBeInTheDocument();
  });

  it("renders Now Section with truthful status board", () => {
    render(<NowSection />);

    expect(screen.getByText("What I’m doing now.")).toBeInTheDocument();
    expect(screen.getByText("Pradrix Status Board")).toBeInTheDocument();
    expect(screen.getByText("Brand Positioning & Philosophy")).toBeInTheDocument();
    expect(screen.getByText("Active Focus Streams")).toBeInTheDocument();
  });

  it("renders Arrival wrapper without crashing", () => {
    render(
      <Arrival>
        <div data-testid="arrival-child">Content</div>
      </Arrival>
    );

    expect(screen.getByTestId("arrival-child")).toBeInTheDocument();
  });
});
