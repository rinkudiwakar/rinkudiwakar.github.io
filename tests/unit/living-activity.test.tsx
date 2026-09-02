import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { BuildLogSection } from "@/components/home/BuildLogSection";
import { SignalsSection } from "@/components/home/SignalsSection";
import { ProofSection } from "@/components/home/ProofSection";

describe("Living Activity: Build Log, Signals & Proof", () => {
  it("renders BuildLogSection with ongoing engineering log entries", () => {
    render(<BuildLogSection />);

    expect(screen.getByText("09 · BUILD LOG")).toBeInTheDocument();
    expect(
      screen.getByText("The evolution of active builds.")
    ).toBeInTheDocument();

    // Verify key build log entry titles exist
    expect(
      screen.getByText("Initiated Living Builder’s Journal Architecture")
    ).toBeInTheDocument();
  });

  it("renders SignalsSection with normalized public signals", () => {
    render(<SignalsSection />);

    expect(screen.getByText("10 · SIGNALS")).toBeInTheDocument();
    expect(
      screen.getByText("Activity & public signals.")
    ).toBeInTheDocument();

    // Verify key signals exist
    expect(
      screen.getByText("rinkudiwakar.me — Next.js Living Builder’s Journal")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Pradrix Operational AI Workflow Engine")
    ).toBeInTheDocument();
  });

  it("renders ProofSection with verified first-party claims", () => {
    render(<ProofSection />);

    expect(screen.getByText("11 · PROOF, NOT PROMISES")).toBeInTheDocument();
    expect(screen.getByText("Proof, not promises.")).toBeInTheDocument();

    // Verify key claims exist
    expect(
      screen.getByText(/Bachelor of Technology in Electrical Engineering/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Kavach: Built an end-to-end voice authentication/i)
    ).toBeInTheDocument();

    // Verify inspect links exist
    const inspectLinks = screen.getAllByText("Inspect Source");
    expect(inspectLinks.length).toBeGreaterThanOrEqual(1);
  });
});
