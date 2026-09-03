import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { AboutSection } from "@/components/home/AboutSection";

describe("AboutSection", () => {
  it("renders AboutSection with headline, education, and portrait image", () => {
    render(<AboutSection />);

    // Label & Headline
    expect(screen.getByText(/02 \/ ABOUT ME/i)).toBeInTheDocument();
    expect(screen.getByText(/I started with/i)).toBeInTheDocument();
    expect(screen.getByText(/Then I discovered/i)).toBeInTheDocument();

    // Education metadata
    expect(screen.getByText(/NIT Jalandhar/i)).toBeInTheDocument();
    expect(screen.getByText(/B\.Tech — Electrical Eng\./i)).toBeInTheDocument();

    // Image
    const portraitImg = screen.getByAltText(
      /Rinku Diwakar soldering and wiring an autonomous hardware robotics system/i
    );
    expect(portraitImg).toBeInTheDocument();

    // Handwritten Annotation
    expect(screen.getByText(/Always curious\./i)).toBeInTheDocument();

    // Journey stages
    expect(screen.getByText("MY JOURNEY")).toBeInTheDocument();
    expect(screen.getAllByText("Electrical Engineering")[0]).toBeInTheDocument();
    expect(screen.getAllByText("Hardware + Software")[0]).toBeInTheDocument();

    // Transition & Schematic
    expect(
      screen.getByText(/I didn't choose between hardware and software\./i)
    ).toBeInTheDocument();
    expect(screen.getByText("REAL-WORLD PRODUCT")).toBeInTheDocument();

    // Capabilities
    expect(screen.getByText("WHAT I LIKE BUILDING")).toBeInTheDocument();
    expect(screen.getAllByText("SOFTWARE")[0]).toBeInTheDocument();
    expect(screen.getAllByText("HARDWARE")[0]).toBeInTheDocument();

    // Proof cards
    expect(screen.getByText("PROJECTS THAT SHOW THIS")).toBeInTheDocument();
    expect(
      screen.getByText(/AI Voice Authentication & Smart Access System/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Real-Time Trading Platform & C\+\+ Matching Engine/i)
    ).toBeInTheDocument();

    // Manifesto
    expect(screen.getByText(/THE COMMON THREAD/i)).toBeInTheDocument();
    expect(screen.getByText(/I like making things\./i)).toBeInTheDocument();
    expect(
      screen.getByText(/I like working where the two meet\./i)
    ).toBeInTheDocument();
  });
});
