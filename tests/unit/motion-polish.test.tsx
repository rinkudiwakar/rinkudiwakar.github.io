import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Arrival } from "@/components/home/Arrival";
import { JourneySection } from "@/components/home/JourneySection";
import { KavachInteractive } from "@/components/home/KavachInteractive";

describe("Motion Polish & Reduced Motion Audit", () => {
  it("renders Arrival wrapper without blocking children", () => {
    render(
      <Arrival>
        <div data-testid="child-content">Story Content</div>
      </Arrival>
    );

    expect(screen.getByTestId("child-content")).toBeInTheDocument();
  });

  it("handles smooth state transitions in JourneySection via tab selection", () => {
    render(<JourneySection />);

    // Initial stage is Curious (01)
    const exploringTab = screen.getByRole("tab", { name: /Exploring/i });
    fireEvent.click(exploringTab);

    expect(screen.getByRole("tabpanel")).toBeInTheDocument();
    expect(screen.getAllByText(/Exploring/i).length).toBeGreaterThanOrEqual(1);
  });

  it("advances Kavach state machine without throwing or jumping", () => {
    render(<KavachInteractive />);

    const nextBtn = screen.getByLabelText("Next step");
    expect(screen.getByText("Step 1 of 8")).toBeInTheDocument();

    fireEvent.click(nextBtn);
    expect(screen.getByText("Step 2 of 8")).toBeInTheDocument();
  });
});
