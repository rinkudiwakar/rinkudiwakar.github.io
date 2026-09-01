import React from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { CommandPalette } from "@/components/command-palette/CommandPalette";
import { ThemeModeProvider, useThemeMode } from "@/context/ThemeModeContext";

// Mock next/navigation
vi.mock("next/navigation", () => ({
  usePathname: () => "/",
  useRouter: () => ({
    push: vi.fn(),
  }),
}));

function TestWrapperWithTrigger() {
  const { setCommandPaletteOpen } = useThemeMode();
  return (
    <div>
      <button onClick={() => setCommandPaletteOpen(true)}>Open Palette</button>
      <CommandPalette />
    </div>
  );
}

describe("Command Palette Component", () => {
  it("opens when triggered and filters results based on input", () => {
    render(
      <ThemeModeProvider>
        <TestWrapperWithTrigger />
      </ThemeModeProvider>
    );

    // Initial state: not open
    expect(screen.queryByPlaceholderText("Search or jump to...")).not.toBeInTheDocument();

    // Trigger open
    fireEvent.click(screen.getByText("Open Palette"));
    const input = screen.getByPlaceholderText("Search or jump to...");
    expect(input).toBeInTheDocument();

    // Verify key commands appear
    expect(screen.getByText("Pradrix")).toBeInTheDocument();
    expect(screen.getByText("Kavach Case Study")).toBeInTheDocument();

    // Filter by search query
    fireEvent.change(input, { target: { value: "kavach" } });
    expect(screen.getByText("Kavach Case Study")).toBeInTheDocument();
    expect(screen.queryByText("About Rinku")).not.toBeInTheDocument();
  });
});
