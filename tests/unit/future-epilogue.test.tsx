import React from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { FutureSection } from "@/components/home/FutureSection";
import { EpilogueSection } from "@/components/home/EpilogueSection";
import ContactPage from "@/app/contact/page";

// Mock next/navigation
vi.mock("next/navigation", () => ({
  usePathname: () => "/contact",
  useRouter: () => ({
    push: vi.fn(),
  }),
}));

describe("Future & Epilogue Sections", () => {
  it("renders FutureSection with builder direction and growth pillars", () => {
    render(<FutureSection />);

    expect(screen.getByText("12 · FUTURE DIRECTION")).toBeInTheDocument();
    expect(screen.getByText("Where I’m going next.")).toBeInTheDocument();
    expect(
      screen.getByText(
        /“I want to become really good at building — technically, creatively/i
      )
    ).toBeInTheDocument();

    // Verify 3 growth pillars
    expect(screen.getByText("Technical Rigor")).toBeInTheDocument();
    expect(screen.getByText("Product & Craft")).toBeInTheDocument();
    expect(screen.getByText("Entrepreneurial Execution")).toBeInTheDocument();
  });

  it("renders EpilogueSection with narrative closing and 3 connection pathways", () => {
    render(<EpilogueSection />);

    expect(screen.getByText("13 · EPILOGUE")).toBeInTheDocument();
    expect(screen.getByText("The story isn’t finished.")).toBeInTheDocument();
    expect(
      screen.getByText("Maybe you can be part of the next chapter.")
    ).toBeInTheDocument();

    // Verify 3 distinct connection pathways
    expect(screen.getByText("Work With Me")).toBeInTheDocument();
    expect(screen.getByText("Build With Me")).toBeInTheDocument();
    expect(screen.getByText("Talk To Me")).toBeInTheDocument();
  });

  it("renders ContactPage with direct channels and response guarantee", () => {
    render(<ContactPage />);

    expect(
      screen.getByRole("heading", { name: "Let’s start the next chapter." })
    ).toBeInTheDocument();
    expect(
      screen.getAllByText("rinkudiwakar01@gmail.com").length
    ).toBeGreaterThanOrEqual(1);
    expect(screen.getByText("Within 24 Hours")).toBeInTheDocument();
  });
});
