"use client";

import * as React from "react";

export type ThemeMode = "light" | "dark";

interface ThemeModeContextValue {
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
  toggleMode: () => void;
}

const ThemeModeContext = React.createContext<ThemeModeContextValue | undefined>(
  undefined
);

export function ThemeModeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setModeState] = React.useState<ThemeMode>("light");

  // Initialize from system preference or localStorage
  React.useEffect(() => {
    const stored = localStorage.getItem("theme") as ThemeMode | null;
    if (stored === "light" || stored === "dark") {
      setModeState(stored);
      document.documentElement.setAttribute("data-theme", stored);
    } else if (
      typeof window !== "undefined" &&
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setModeState("dark");
      document.documentElement.setAttribute("data-theme", "dark");
    }
  }, []);

  const setMode = React.useCallback((newMode: ThemeMode) => {
    setModeState(newMode);
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("data-theme", newMode);
      localStorage.setItem("theme", newMode);
    }
  }, []);

  const toggleMode = React.useCallback(() => {
    setMode(mode === "light" ? "dark" : "light");
  }, [mode, setMode]);

  // Global keyboard shortcut (Ctrl/Cmd + Shift + D to toggle theme)
  React.useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.shiftKey && e.key.toLowerCase() === "d") {
        e.preventDefault();
        toggleMode();
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [toggleMode]);

  return (
    <ThemeModeContext.Provider
      value={{
        mode,
        setMode,
        toggleMode,
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
