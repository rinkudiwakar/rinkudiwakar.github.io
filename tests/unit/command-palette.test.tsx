import React from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { CommandPalette } from "@/components/command-palette/CommandPalette";
import { ThemeModeProvider, useThemeMode } from "@/context/ThemeModeContext";

const mockPush = vi.fn();
vi.mock("next/navigation", () => ({
  usePathname: () => "/",
  useRouter: () => ({
    push: mockPush,
  }),
}));

function OpenPaletteWrapper() {
  const { setCommandPaletteOpen } = useThemeMode();

  React.useEffect(() => {
    setCommandPaletteOpen(true);
  }, [setCommandPaletteOpen]);

  return <CommandPalette />;
}

describe("Command Palette Component", () => {
  it("renders all required navigation and project destinations", () => {
    render(
      <ThemeModeProvider>
        <OpenPaletteWrapper />
      </ThemeModeProvider>
    );

    // Verify all specified destinations exist
    expect(screen.getByText("Now")).toBeInTheDocument();
    expect(screen.getByText("Story & Origin")).toBeInTheDocument();
    expect(screen.getByText("Work & Projects")).toBeInTheDocument();
    expect(screen.getByText("Kavach Case Study")).toBeInTheDocument();
    expect(screen.getByText("Pradrix")).toBeInTheDocument();
    expect(screen.getByText("Build Log Stream")).toBeInTheDocument();
    expect(screen.getByText("Public Signals")).toBeInTheDocument();
    expect(screen.getByText("What Building Taught Me")).toBeInTheDocument();
    expect(screen.getByText("About Rinku")).toBeInTheDocument();
    expect(screen.getByText("Resume & Evidence")).toBeInTheDocument();
    expect(screen.getByText("Contact & Connect")).toBeInTheDocument();
    expect(screen.getByText("Enter Developer Mode")).toBeInTheDocument();
  });

  it("filters results dynamically based on search query", () => {
    render(
      <ThemeModeProvider>
        <OpenPaletteWrapper />
      </ThemeModeProvider>
    );

    const input = screen.getByPlaceholderText(/Type a command or search/i);
    fireEvent.change(input, { target: { value: "kavach" } });

    expect(screen.getByText("Kavach Case Study")).toBeInTheDocument();
    expect(screen.queryByText("About Rinku")).not.toBeInTheDocument();
  });

  it("handles keyboard navigation and execution", () => {
    render(
      <ThemeModeProvider>
        <OpenPaletteWrapper />
      </ThemeModeProvider>
    );

    const input = screen.getByPlaceholderText(/Type a command or search/i);

    // Press ArrowDown to navigate list
    fireEvent.keyDown(input, { key: "ArrowDown", code: "ArrowDown" });
    // Press Enter on the selected item
    fireEvent.keyDown(input, { key: "Enter", code: "Enter" });

    expect(mockPush).toHaveBeenCalled();
  });

  it("handles Escape key to close the palette", () => {
    render(
      <ThemeModeProvider>
        <OpenPaletteWrapper />
      </ThemeModeProvider>
    );

    const input = screen.getByPlaceholderText(/Type a command or search/i);
    fireEvent.keyDown(input, { key: "Escape", code: "Escape" });

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });
});
