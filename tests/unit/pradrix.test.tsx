import React from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { PradrixSection } from "@/components/home/PradrixSection";
import PradrixPage from "@/app/pradrix/page";

// Mock next/navigation
vi.mock("next/navigation", () => ({
  usePathname: () => "/pradrix",
  useRouter: () => ({
    push: vi.fn(),
  }),
}));

describe("Pradrix Experience", () => {
  it("renders PradrixSection on homepage with 8-stage diagnostic workflow", () => {
    render(<PradrixSection />);

    expect(screen.getByText("08 · CURRENT VENTURE")).toBeInTheDocument();
    expect(
      screen.getByText("The 8-Stage Diagnostic & Execution Workflow")
    ).toBeInTheDocument();
    expect(screen.getByText("“Understand before automating.”")).toBeInTheDocument();

    // Verify key steps exist with exact labels
    expect(screen.getByText("Understand the Business")).toBeInTheDocument();
    expect(screen.getByText("Identify the Bottleneck")).toBeInTheDocument();
    expect(screen.getByText("Is AI Appropriate?")).toBeInTheDocument();
    expect(screen.getByText("Measure Real Impact")).toBeInTheDocument();
  });

  it("renders deep PradrixPage with methodology and transparent roadmap", () => {
    render(<PradrixPage />);

    expect(screen.getByRole("heading", { name: "Pradrix" })).toBeInTheDocument();
    expect(
      screen.getByText("The 8-Stage Execution Pipeline")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Where Pradrix stands right now.")
    ).toBeInTheDocument();

    // Verify target archetypes are present (not fake clients)
    expect(screen.getByText("Service & Agency Operations")).toBeInTheDocument();
    expect(screen.getByText("Document-Heavy Workflows")).toBeInTheDocument();
    expect(screen.getByText("Founder Operational Drag")).toBeInTheDocument();
  });
});
