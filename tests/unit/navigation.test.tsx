import React from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/layout/Footer";
import { ThemeModeProvider } from "@/context/ThemeModeContext";

// Mock next/navigation
vi.mock("next/navigation", () => ({
  usePathname: () => "/",
  useRouter: () => ({
    push: vi.fn(),
  }),
}));

describe("Global Navigation & Layout Shell", () => {
  it("renders desktop navigation links", () => {
    render(
      <ThemeModeProvider>
        <Header />
      </ThemeModeProvider>
    );

    expect(screen.getAllByText("Home")[0]).toBeInTheDocument();
    expect(screen.getAllByText("About")[0]).toBeInTheDocument();
    expect(screen.getAllByText("Projects")[0]).toBeInTheDocument();
    expect(screen.getAllByText("Articles")[0]).toBeInTheDocument();
  });

  it("renders global footer with epilogue and connection channels", () => {
    render(<Footer />);

    expect(
      screen.getByText(/The story isn[’']t finished\./i)
    ).toBeInTheDocument();
    expect(screen.getByText("Work With Me")).toBeInTheDocument();
    expect(screen.getByText("Explore Pradrix")).toBeInTheDocument();
  });
});
