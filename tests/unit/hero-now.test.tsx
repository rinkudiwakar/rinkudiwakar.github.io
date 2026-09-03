import React from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { NowSection } from "@/components/home/NowSection";
import { Arrival } from "@/components/home/Arrival";

describe("Hero & Now Sections", () => {
  it("renders Now Section with truthful status board", () => {
    render(<NowSection />);

    expect(screen.getByText(/What I[’']m doing now\./i)).toBeInTheDocument();
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
