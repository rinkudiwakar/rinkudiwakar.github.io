"use client";

import * as React from "react";
import { ThemeModeProvider } from "@/context/ThemeModeContext";
import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/layout/Footer";
import { CommandPalette } from "@/components/command-palette/CommandPalette";
import { DevModeGlobalOverlay } from "@/components/developer-mode/DevModeGlobalOverlay";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <ThemeModeProvider>
      <div className="min-h-screen flex flex-col bg-[var(--background)] text-[var(--foreground)] transition-colors duration-200">
        <Header />
        <div className="flex-1 flex flex-col">{children}</div>
        <Footer />
        <CommandPalette />
        <DevModeGlobalOverlay />
      </div>
    </ThemeModeProvider>
  );
}
