import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { WhatBuildingTaughtMeSection } from "@/components/home/WhatBuildingTaughtMeSection";

describe("What Building Taught Me Section", () => {
  it("renders the lessons section with honest reflections", () => {
    render(<WhatBuildingTaughtMeSection />);

    expect(screen.getByText("07 · WHAT BUILDING TAUGHT ME")).toBeInTheDocument();
    expect(
      screen.getByText("Hard lessons earned through execution.")
    ).toBeInTheDocument();

    // Verify biggest failure is highlighted honestly
    expect(
      screen.getByText(/The Biggest Personal Failure: Trying to do too many things simultaneously/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText("Being busy is not the same as making meaningful progress.")
    ).toBeInTheDocument();

    // Verify key titles
    expect(
      screen.getByText("Building is Different from Coding")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Ownership Accelerates Learning")
    ).toBeInTheDocument();
  });
});
