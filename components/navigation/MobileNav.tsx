"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, ArrowUpRight, Terminal, Search } from "lucide-react";
import { useThemeMode } from "@/context/ThemeModeContext";
import { cn } from "@/lib/utils/cn";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  navigation: { label: string; href: string }[];
}

export function MobileNav({ isOpen, onClose, navigation }: MobileNavProps) {
  const pathname = usePathname();
  const { mode, toggleMode, setCommandPaletteOpen } = useThemeMode();

  // Close on Escape or route change
  React.useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  React.useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation"
      className="fixed inset-0 z-50 flex flex-col justify-end bg-black/60 backdrop-blur-xs md:hidden animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="w-full bg-[var(--background-card)] border-t border-[var(--border-strong)] rounded-t-[var(--radius-xl)] shadow-[var(--shadow-elevated)] p-6 space-y-6 max-h-[85vh] overflow-y-auto animate-in slide-in-from-bottom duration-200">
        {/* Header inside mobile drawer */}
        <div className="flex items-center justify-between pb-4 border-b border-[var(--border)]">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[var(--foreground-muted)]">
              Menu · rinkudiwakar.me
            </div>
            <div className="text-base font-bold text-[var(--foreground)]">
              Living Builder’s Journal
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-[var(--background-subtle)] text-[var(--foreground-muted)] hover:text-[var(--foreground)] cursor-pointer"
            aria-label="Close navigation menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Routes */}
        <nav className="space-y-1" aria-label="Mobile main navigation">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className={cn(
                  "flex items-center justify-between px-4 py-3 rounded-[var(--radius-md)] text-lg font-medium transition-colors duration-150",
                  isActive
                    ? "bg-[var(--accent-subtle)] text-[var(--accent)] font-semibold"
                    : "text-[var(--foreground)] hover:bg-[var(--background-subtle)]"
                )}
              >
                <span>{item.label}</span>
                <span className="text-xs font-mono text-[var(--foreground-subtle)]">
                  {item.href}
                </span>
              </Link>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="pt-4 border-t border-[var(--border)] grid grid-cols-2 gap-3">
          <button
            onClick={() => {
              onClose();
              setCommandPaletteOpen(true);
            }}
            className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-[var(--radius-md)] bg-[var(--background-subtle)] text-sm font-medium text-[var(--foreground)] border border-[var(--border)] hover:bg-[var(--border)] cursor-pointer transition-colors"
          >
            <Search className="w-4 h-4 text-[var(--foreground-muted)]" />
            <span>Command ⌘K</span>
          </button>

          <button
            onClick={() => {
              toggleMode();
              onClose();
            }}
            className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-[var(--radius-md)] bg-[var(--background-subtle)] text-sm font-mono font-medium text-[var(--foreground)] border border-[var(--border)] hover:bg-[var(--border)] cursor-pointer transition-colors"
          >
            <Terminal className="w-4 h-4 text-[var(--accent)]" />
            <span>{mode === "developer" ? "Normal Mode" : "DEV Mode"}</span>
          </button>
        </div>

        {/* Contact Links */}
        <div className="pt-2 flex items-center justify-between text-xs text-[var(--foreground-muted)] font-mono">
          <a
            href="https://github.com/rinkudiwakar"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-[var(--foreground)]"
          >
            GitHub <ArrowUpRight className="w-3 h-3" />
          </a>
          <a
            href="https://linkedin.com/in/rinkudiwakar"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-[var(--foreground)]"
          >
            LinkedIn <ArrowUpRight className="w-3 h-3" />
          </a>
          <span>rinkudiwakar.me</span>
        </div>
      </div>
    </div>
  );
}
