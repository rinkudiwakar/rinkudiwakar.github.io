import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/layout/Footer";
import { ThemeModeProvider } from "@/context/ThemeModeContext";

describe("Performance & Accessibility Full Audit", () => {
  it("renders Header with accessible navigation landmarks and button labels", () => {
    render(
      <ThemeModeProvider>
        <Header />
      </ThemeModeProvider>
    );

    // Verify main navigation landmark
    expect(screen.getByRole("navigation", { name: "Main navigation" })).toBeInTheDocument();

    // Verify accessible labels on action triggers
    expect(screen.getByLabelText(/Open Command Palette/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Switch to Developer Mode/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Open mobile navigation/i)).toBeInTheDocument();
  });

  it("renders Footer with semantic contentinfo landmark and verifiable outbound links", () => {
    render(<Footer />);

    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
    expect(screen.getByRole("navigation", { name: "Footer navigation" })).toBeInTheDocument();
  });
});
