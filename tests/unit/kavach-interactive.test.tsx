import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { KavachInteractive } from "@/components/home/KavachInteractive";
import { KavachSection } from "@/components/home/KavachSection";

describe("Kavach Signature Experience", () => {
  it("renders KavachSection with team context and problem statement", () => {
    render(<KavachSection />);

    expect(screen.getByText("05 · FIRST MAJOR BUILD")).toBeInTheDocument();
    expect(screen.getByText(/5-Person Team · NIT Jalandhar/i)).toBeInTheDocument();
    expect(screen.getByText("The Human Problem")).toBeInTheDocument();
    expect(screen.getByText("The Engineering Concept")).toBeInTheDocument();
  });

  it("starts in Step 1 (idle state) and advances through state machine", () => {
    render(<KavachInteractive />);

    // Initial state: Step 1 of 8
    expect(screen.getByText("Step 1 of 8")).toBeInTheDocument();
    expect(screen.getByText("System Idle & Ready")).toBeInTheDocument();

    // Click Next Phase
    const nextBtn = screen.getByRole("button", { name: /Next step/i });
    fireEvent.click(nextBtn);

    // Step 2: Assembly
    expect(screen.getByText("Step 2 of 8")).toBeInTheDocument();
    expect(screen.getByText("Hardware-Software Integration")).toBeInTheDocument();

    // Advance to Step 5 (Failure state)
    fireEvent.click(nextBtn); // Step 3
    fireEvent.click(nextBtn); // Step 4
    fireEvent.click(nextBtn); // Step 5: Failure

    expect(screen.getByText("Step 5 of 8")).toBeInTheDocument();
    expect(screen.getByText("Real-World Failure Encountered")).toBeInTheDocument();
    expect(
      screen.getByText(/Documented Failure: Keyword Vulnerability & Brownout/i)
    ).toBeInTheDocument();

    // Advance to Step 6 (Debugging state)
    fireEvent.click(nextBtn);
    expect(screen.getByText("Step 6 of 8")).toBeInTheDocument();
    expect(screen.getByText("Root Cause Isolation & Debugging")).toBeInTheDocument();
    expect(
      screen.getByText(/Root Cause Fix: Biometric Separation & Power Isolation/i)
    ).toBeInTheDocument();

    // Advance to Step 8 (Working state)
    fireEvent.click(nextBtn); // Step 7
    fireEvent.click(nextBtn); // Step 8
    expect(screen.getByText("Step 8 of 8")).toBeInTheDocument();
    expect(screen.getByText("Working Production Prototype")).toBeInTheDocument();
    expect(screen.getByText("Lock: Disengaged")).toBeInTheDocument();

    // Click Reset
    const resetBtn = screen.getByRole("button", { name: /Reset simulation/i });
    fireEvent.click(resetBtn);
    expect(screen.getByText("Step 1 of 8")).toBeInTheDocument();
  });

  it("navigates states using keyboard arrow keys", () => {
    render(<KavachInteractive />);

    const container = screen.getByLabelText("Kavach Interactive Build Simulation");
    expect(screen.getByText("Step 1 of 8")).toBeInTheDocument();

    // Press ArrowRight to advance
    fireEvent.keyDown(container, { key: "ArrowRight" });
    expect(screen.getByText("Step 2 of 8")).toBeInTheDocument();

    // Press ArrowLeft to go back
    fireEvent.keyDown(container, { key: "ArrowLeft" });
    expect(screen.getByText("Step 1 of 8")).toBeInTheDocument();
  });
});
