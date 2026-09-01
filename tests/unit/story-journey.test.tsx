import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { OriginSection } from "@/components/home/OriginSection";
import { JourneySection } from "@/components/home/JourneySection";

describe("Story Experience: Origin & Journey", () => {
  it("renders Origin Section with authentic narrative truth", () => {
    render(<OriginSection />);

    expect(screen.getByText("03 · ORIGIN")).toBeInTheDocument();
    expect(
      screen.getByText("It started with curiosity.")
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Before there were circuits, terminals, or AI models/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText("Electrical Engineering at NIT Jalandhar")
    ).toBeInTheDocument();
  });

  it("renders Journey Section with all 5 evolution stages", () => {
    render(<JourneySection />);

    expect(screen.getByText("04 · THE JOURNEY")).toBeInTheDocument();
    expect(screen.getByText("From curiosity to building.")).toBeInTheDocument();

    // Verify all 5 stages exist in the document
    expect(screen.getAllByText("Curious").length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText("Exploring").length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText("Engineering").length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText("Building").length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText("Pradrix").length).toBeGreaterThanOrEqual(1);
  });

  it("allows selecting journey stages in desktop tablist", () => {
    render(<JourneySection />);

    const exploringTab = screen.getByRole("tab", { name: /Exploring/i });
    expect(exploringTab).toBeInTheDocument();

    fireEvent.click(exploringTab);
    expect(exploringTab).toHaveAttribute("aria-selected", "true");
  });
});
