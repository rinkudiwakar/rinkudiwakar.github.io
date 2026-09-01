"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Terminal, Search } from "lucide-react";
import { useThemeMode } from "@/context/ThemeModeContext";
import { MobileNav } from "@/components/navigation/MobileNav";
import { navigation } from "@/data/navigation";
import { cn } from "@/lib/utils/cn";

export function Header() {
  const pathname = usePathname();
  const { mode, toggleMode, setCommandPaletteOpen } = useThemeMode();
  const [isMobileNavOpen, setMobileNavOpen] = React.useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-[var(--border)] bg-[var(--background)]/85 backdrop-blur-md transition-colors duration-200">
        <div className="container-editorial flex h-16 items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="/"
            className="group flex items-center gap-2.5 focus-visible:outline-2 focus-visible:outline-offset-2 rounded-sm"
            aria-label="Rinku Diwakar — Home"
          >
            <span className="font-display font-bold text-lg md:text-xl tracking-tight text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors">
              RINKU
            </span>
            <span className="hidden sm:inline-block text-[11px] font-mono text-[var(--foreground-subtle)] border-l border-[var(--border)] pl-2.5">
              builder’s journal
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden md:flex items-center gap-1 lg:gap-2"
            aria-label="Main navigation"
          >
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "px-3 py-1.5 rounded-[var(--radius-md)] text-sm font-medium transition-all duration-150 relative",
                    isActive
                      ? "text-[var(--accent)] font-semibold"
                      : "text-[var(--foreground-muted)] hover:text-[var(--foreground)] hover:bg-[var(--background-subtle)]"
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[var(--accent)] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action Tools: Command Palette & Developer Mode Toggle */}
          <div className="flex items-center gap-2">
            {/* ⌘K Trigger Button */}
            <button
              onClick={() => setCommandPaletteOpen(true)}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-[var(--radius-md)] bg-[var(--background-subtle)] hover:bg-[var(--border)] text-[var(--foreground-muted)] hover:text-[var(--foreground)] border border-[var(--border)] transition-colors cursor-pointer text-xs font-mono"
              aria-label="Open Command Palette (Cmd + K)"
              title="Open Command Palette (⌘K / Ctrl+K)"
            >
              <Search className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">⌘K</span>
            </button>

            {/* Developer Mode Toggle */}
            <button
              onClick={toggleMode}
              className={cn(
                "flex items-center gap-1.5 px-2.5 py-1.5 rounded-[var(--radius-md)] border text-xs font-mono transition-all cursor-pointer",
                mode === "developer"
                  ? "bg-[var(--accent-subtle)] text-[var(--accent)] border-[var(--accent-border)] font-semibold shadow-xs"
                  : "bg-[var(--background-subtle)] hover:bg-[var(--border)] text-[var(--foreground-muted)] hover:text-[var(--foreground)] border-[var(--border)]"
              )}
              aria-label={
                mode === "developer"
                  ? "Switch to Normal Mode"
                  : "Switch to Developer Mode"
              }
              title={
                mode === "developer"
                  ? "Switch to Normal Mode"
                  : "Switch to Developer Mode"
              }
            >
              <Terminal className="w-3.5 h-3.5" />
              <span className="font-semibold">DEV</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileNavOpen(true)}
              className="md:hidden p-2 rounded-[var(--radius-md)] bg-[var(--background-subtle)] text-[var(--foreground-muted)] hover:text-[var(--foreground)] border border-[var(--border)] cursor-pointer"
              aria-label="Open mobile navigation"
            >
              <Menu className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <MobileNav
        isOpen={isMobileNavOpen}
        onClose={() => setMobileNavOpen(false)}
        navigation={navigation}
      />
    </>
  );
}
