import React from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { NowSection } from "@/components/home/NowSection";
import { CurrentlyBuildingSection } from "@/components/home/CurrentlyBuildingSection";
import { Arrival } from "@/components/home/Arrival";

describe("Hero & Now Sections", () => {
  it("renders Now Section with truthful status board", () => {
    render(<NowSection />);

    expect(screen.getByText(/What I[’']m doing now\./i)).toBeInTheDocument();
    expect(screen.getByText("Pradrix Status Board")).toBeInTheDocument();
    expect(screen.getByText("Brand Positioning & Philosophy")).toBeInTheDocument();
    expect(screen.getByText("Active Focus Streams")).toBeInTheDocument();
  });

  it("renders CurrentlyBuildingSection with Pradrix introduction and visit link", () => {
    render(<CurrentlyBuildingSection />);

    expect(screen.getByText(/01 \/ CURRENTLY BUILDING/i)).toBeInTheDocument();
    expect(screen.getByText("PRADRIX")).toBeInTheDocument();
    expect(
      screen.getByText(/Turning high-friction operations into autonomous AI systems\./i)
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Visit Pradrix/i })).toHaveAttribute(
      "href",
      "https://pradrix.com/"
    );
  });
});
