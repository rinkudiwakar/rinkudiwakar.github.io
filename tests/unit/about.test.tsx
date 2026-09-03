import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { AboutSection } from "@/components/home/AboutSection";

describe("AboutSection", () => {
  it("renders homepage AboutSection with headline, portrait image, metadata, circuit trace, and More About Me CTA", () => {
    render(<AboutSection />);

    // Label & Headline
    expect(screen.getByText(/01 \/ ABOUT ME/i)).toBeInTheDocument();
    expect(screen.getByText(/I started with/i)).toBeInTheDocument();
    expect(screen.getByText(/Then I discovered/i)).toBeInTheDocument();

    // Short Intro
    expect(
      screen.getByText(/final-year Electrical Engineering student at NIT Jalandhar/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/I like working where software meets the real world\./i)
    ).toBeInTheDocument();

    // Education metadata
    expect(screen.getAllByText(/NIT JALANDHAR/i)[0]).toBeInTheDocument();
    expect(screen.getByText(/B\.Tech — Electrical Eng\./i)).toBeInTheDocument();

    // Image & Handwritten Annotation
    const portraitImg = screen.getByAltText(
      /Rinku Diwakar soldering and wiring an autonomous hardware robotics system/i
    );
    expect(portraitImg).toBeInTheDocument();
    expect(screen.getByText(/Always curious\./i)).toBeInTheDocument();

    // Compact Circuit Trace nodes
    expect(screen.getAllByText("HARDWARE")[0]).toBeInTheDocument();
    expect(screen.getAllByText("CURIOSITY")[0]).toBeInTheDocument();
    expect(screen.getAllByText("SOFTWARE")[0]).toBeInTheDocument();
    expect(screen.getAllByText("AI + HARDWARE")[0]).toBeInTheDocument();

    // Key Statement & Label
    expect(screen.getByText("WHERE THEY MEET")).toBeInTheDocument();
    expect(
      screen.getByText(/I didn't choose between hardware and software\./i)
    ).toBeInTheDocument();
    expect(screen.getByText(/I started connecting them\./i)).toBeInTheDocument();

    // Supporting Line & CTA
    expect(
      screen.getByText(/Want to know the rest of the story\?/i)
    ).toBeInTheDocument();
    const ctaLink = screen.getByRole("link", { name: /More About Me/i });
    expect(ctaLink).toBeInTheDocument();
    expect(ctaLink).toHaveAttribute("href", "/about");
  });
});
