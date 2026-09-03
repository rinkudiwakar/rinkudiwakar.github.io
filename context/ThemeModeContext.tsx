"use client";

import * as React from "react";

export type ThemeMode = "normal" | "developer";

interface ThemeModeContextValue {
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
  toggleMode: () => void;
  isCommandPaletteOpen: boolean;
  setCommandPaletteOpen: (open: boolean) => void;
  toggleCommandPalette: () => void;
}

const ThemeModeContext = React.createContext<ThemeModeContextValue | undefined>(
  undefined
);

export function ThemeModeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setModeState] = React.useState<ThemeMode>("normal");
  const [isCommandPaletteOpen, setCommandPaletteOpen] = React.useState(false);

  // Sync mode with data-theme on HTML element
  const setMode = React.useCallback((newMode: ThemeMode) => {
    setModeState(newMode);
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("data-theme", newMode);
    }
  }, []);

  const toggleMode = React.useCallback(() => {
    setMode(mode === "normal" ? "developer" : "normal");
  }, [mode, setMode]);

  const toggleCommandPalette = React.useCallback(() => {
    setCommandPaletteOpen((prev) => !prev);
  }, []);

  // Global keyboard shortcut listener (Cmd/Ctrl + K, Cmd/Ctrl + Shift + D, Escape)
  React.useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      const activeTag = (document.activeElement?.tagName || "").toLowerCase();
      const isInputActive = activeTag === "input" || activeTag === "textarea" || (document.activeElement as HTMLElement)?.isContentEditable;

      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setCommandPaletteOpen((prev) => !prev);
      } else if ((e.metaKey || e.ctrlKey) && e.shiftKey && e.key.toLowerCase() === "d") {
        e.preventDefault();
        toggleMode();
      } else if (e.key === "`" && !isInputActive && !(e.metaKey || e.ctrlKey || e.altKey)) {
        e.preventDefault();
        toggleMode();
      } else if (e.key === "Escape" && isCommandPaletteOpen) {
        e.preventDefault();
        setCommandPaletteOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isCommandPaletteOpen, toggleMode]);

  return (
    <ThemeModeContext.Provider
      value={{
        mode,
        setMode,
        toggleMode,
        isCommandPaletteOpen,
        setCommandPaletteOpen,
        toggleCommandPalette,
      }}
    >
      {children}
    </ThemeModeContext.Provider>
  );
}

export function useThemeMode() {
  const context = React.useContext(ThemeModeContext);
  if (!context) {
    throw new Error("useThemeMode must be used within a ThemeModeProvider");
  }
  return context;
}
