"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Github, Linkedin, Mail, Sun, Moon, Send } from "lucide-react";
import { useThemeMode } from "@/context/ThemeModeContext";
import { MobileNav } from "@/components/navigation/MobileNav";
import { navigation } from "@/data/navigation";
import { cn } from "@/lib/utils/cn";

/* Simple X/Twitter icon — Lucide doesn't include the new X logo */
function XIcon({ className }: { className?: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export function Header() {
  const pathname = usePathname();
  const { mode, toggleMode } = useThemeMode();
  const [isMobileNavOpen, setMobileNavOpen] = React.useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-[var(--background)]/85 backdrop-blur-md transition-colors duration-200 animate-header-entrance">
        <div className="container-hero flex h-16 md:h-[72px] items-center justify-between">
          {/* Left — Navigation Links */}
          <nav
            className="hidden md:flex items-center gap-1 lg:gap-1.5"
            aria-label="Main navigation"
          >
            {navigation.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "group px-3 py-1.5 rounded-[var(--radius-md)] text-sm font-medium transition-all duration-150 relative",
                    isActive
                      ? "text-[var(--foreground)] font-semibold"
                      : "text-[var(--foreground-muted)] hover:text-[var(--foreground)]"
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                  {isActive ? (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[var(--foreground)] rounded-full" />
                  ) : (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[var(--foreground)] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Center — "Let's Connect" Pill CTA */}
          <div className="hidden md:flex items-center justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[var(--border-strong)] bg-[var(--background-card)] text-sm font-medium text-[var(--foreground)] hover:bg-[var(--background-subtle)] hover:border-[var(--foreground-subtle)] transition-all duration-200 shadow-[var(--shadow-subtle)]"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Let&apos;s Connect</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          {/* Right — Social Icons + Theme Toggle */}
          <div className="hidden md:flex items-center gap-1">
            <a
              href="https://github.com/rinkudiwakar"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-[var(--radius-md)] text-[var(--foreground-muted)] hover:text-[var(--foreground)] hover:-translate-y-px hover:bg-[var(--background-subtle)] transition-all duration-200"
              aria-label="GitHub"
            >
              <Github className="w-[18px] h-[18px]" />
            </a>
            <a
              href="https://www.linkedin.com/in/rinkudiwakar/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-[var(--radius-md)] text-[var(--foreground-muted)] hover:text-[var(--foreground)] hover:-translate-y-px hover:bg-[var(--background-subtle)] transition-all duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-[18px] h-[18px]" />
            </a>
            <a
              href="https://x.com/_mrdiwakar"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-[var(--radius-md)] text-[var(--foreground-muted)] hover:text-[var(--foreground)] hover:-translate-y-px hover:bg-[var(--background-subtle)] transition-all duration-200"
              aria-label="X (Twitter)"
            >
              <XIcon className="w-[18px] h-[18px]" />
            </a>
            <a
              href="mailto:rinkudiwakar.dev@gmail.com"
              className="p-2 rounded-[var(--radius-md)] text-[var(--foreground-muted)] hover:text-[var(--foreground)] hover:-translate-y-px hover:bg-[var(--background-subtle)] transition-all duration-200"
              aria-label="Email"
            >
              <Mail className="w-[18px] h-[18px]" />
            </a>

            {/* Divider */}
            <div className="w-px h-5 bg-[var(--border)] mx-1" aria-hidden="true" />

            {/* Theme Toggle Pill Switch */}
            <button
              onClick={toggleMode}
              className="w-11 h-6 rounded-full border border-[var(--border-strong)] bg-[var(--background-card)] p-0.5 flex items-center transition-colors cursor-pointer ml-1"
              aria-label={mode === "light" ? "Switch to dark mode" : "Switch to light mode"}
              title={mode === "light" ? "Dark mode" : "Light mode"}
            >
              <span
                className={cn(
                  "w-4 h-4 rounded-full bg-[var(--foreground)] text-[var(--background)] flex items-center justify-center transition-transform duration-200",
                  mode === "dark" ? "translate-x-5" : "translate-x-0.5"
                )}
              >
                {mode === "light" ? (
                  <Sun className="w-2.5 h-2.5 stroke-[2.5]" />
                ) : (
                  <Moon className="w-2.5 h-2.5 stroke-[2.5]" />
                )}
              </span>
            </button>
          </div>

          {/* Mobile — Hamburger + Theme Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleMode}
              className="w-10 h-5 rounded-full border border-[var(--border-strong)] bg-[var(--background-card)] p-0.5 flex items-center cursor-pointer"
              aria-label={mode === "light" ? "Switch to dark mode" : "Switch to light mode"}
            >
              <span
                className={cn(
                  "w-3.5 h-3.5 rounded-full bg-[var(--foreground)] text-[var(--background)] flex items-center justify-center transition-transform duration-200",
                  mode === "dark" ? "translate-x-4.5" : "translate-x-0.5"
                )}
              >
                {mode === "light" ? (
                  <Sun className="w-2 h-2" />
                ) : (
                  <Moon className="w-2 h-2" />
                )}
              </span>
            </button>
            <button
              onClick={() => setMobileNavOpen(true)}
              className="p-2 rounded-[var(--radius-md)] bg-[var(--background-subtle)] text-[var(--foreground-muted)] hover:text-[var(--foreground)] border border-[var(--border)] cursor-pointer"
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
