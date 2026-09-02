"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { X, ArrowUpRight, Terminal, Search } from "lucide-react";
import { NavigationItem } from "@/data/navigation";
import { useThemeMode } from "@/context/ThemeModeContext";
import { cn } from "@/lib/utils/cn";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  navigation: NavigationItem[];
}

export function MobileNav({ isOpen, onClose, navigation }: MobileNavProps) {
  const pathname = usePathname();
  const router = useRouter();
  const { mode, setMode, setCommandPaletteOpen } = useThemeMode();

  const isDevActive = pathname === "/dev" || mode === "developer";

  const handleDevClick = () => {
    onClose();
    if (pathname === "/dev") {
      setMode("normal");
      router.push("/");
    } else {
      setMode("developer");
      router.push("/dev");
    }
  };

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs md:hidden animate-fade-in"
      onClick={onClose}
    >
      <div
        className="fixed inset-y-0 right-0 w-full max-w-xs bg-[var(--background)] border-l border-[var(--border)] p-6 flex flex-col justify-between shadow-elevated animate-slide-in-right"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between pb-6 border-b border-[var(--border)]">
          <div className="flex items-center gap-2">
            <span className="font-display font-bold text-lg text-[var(--foreground)]">
              RINKU
            </span>
            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[var(--background-subtle)] text-[var(--foreground-muted)] border border-[var(--border)]">
              NITJ &apos;27
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-[var(--radius-md)] text-[var(--foreground-muted)] hover:text-[var(--foreground)] hover:bg-[var(--background-subtle)] transition-colors cursor-pointer"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation List */}
        <nav className="flex-1 py-6 space-y-1 overflow-y-auto">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className={cn(
                  "flex items-center justify-between px-3 py-2.5 rounded-[var(--radius-md)] text-sm font-medium transition-colors",
                  isActive
                    ? "bg-[var(--accent-subtle)] text-[var(--accent)] font-semibold"
                    : "text-[var(--foreground-muted)] hover:text-[var(--foreground)] hover:bg-[var(--background-subtle)]"
                )}
              >
                <span>{item.label}</span>
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Action Buttons: ⌘K & Developer Mode */}
        <div className="pt-4 border-t border-[var(--border)] space-y-2">
          <button
            onClick={() => {
              onClose();
              setCommandPaletteOpen(true);
            }}
            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-[var(--radius-md)] bg-[var(--background-subtle)] text-sm font-mono text-[var(--foreground-muted)] hover:text-[var(--foreground)] border border-[var(--border)] hover:bg-[var(--border)] cursor-pointer transition-colors"
          >
            <Search className="w-4 h-4 text-[var(--foreground-muted)]" />
            <span>Command ⌘K</span>
          </button>

          <button
            onClick={handleDevClick}
            className={cn(
              "w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-[var(--radius-md)] text-sm font-mono font-medium border cursor-pointer transition-colors",
              isDevActive
                ? "bg-[var(--accent-subtle)] text-[var(--accent)] border-[var(--accent-border)] font-semibold"
                : "bg-[var(--background-subtle)] text-[var(--foreground)] border-[var(--border)] hover:bg-[var(--border)]"
            )}
          >
            <Terminal className="w-4 h-4 text-[var(--accent)]" />
            <span>{isDevActive ? "Exit Developer Mode" : "Launch Developer Mode"}</span>
          </button>
        </div>

        {/* Contact Links */}
        <div className="pt-4 flex items-center justify-between text-xs text-[var(--foreground-muted)] font-mono">
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
