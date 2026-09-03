"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, Github, Linkedin, Mail, Send } from "lucide-react";
import { NavigationItem } from "@/data/navigation";
import { cn } from "@/lib/utils/cn";

/* Simple X/Twitter icon */
function XTwitterIcon({ className }: { className?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  navigation: NavigationItem[];
}

export function MobileNav({ isOpen, onClose, navigation }: MobileNavProps) {
  const pathname = usePathname();

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
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs md:hidden"
      onClick={onClose}
    >
      <div
        className="fixed inset-y-0 right-0 w-full max-w-xs bg-[var(--background)] border-l border-[var(--border)] p-6 flex flex-col justify-between shadow-elevated"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between pb-6 border-b border-[var(--border)]">
          <span className="font-display font-bold text-lg text-[var(--foreground)]">
            Menu
          </span>
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
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className={cn(
                  "flex items-center justify-between px-3 py-3 rounded-[var(--radius-md)] text-base font-medium transition-colors",
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

        {/* Let's Connect CTA */}
        <div className="pt-4 border-t border-[var(--border)] space-y-4">
          <Link
            href="/contact"
            onClick={onClose}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-[var(--foreground)] text-[var(--background)] text-sm font-medium transition-all hover:opacity-90"
          >
            <Send className="w-4 h-4" />
            <span>Let&apos;s Connect →</span>
          </Link>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-3 pt-2">
            <a
              href="https://github.com/rinkudiwakar"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-[var(--radius-md)] text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/rinkudiwakar/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-[var(--radius-md)] text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://x.com/_mrdiwakar"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-[var(--radius-md)] text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors"
              aria-label="X (Twitter)"
            >
              <XTwitterIcon className="w-5 h-5" />
            </a>
            <a
              href="mailto:rinkudiwakar.dev@gmail.com"
              className="p-2 rounded-[var(--radius-md)] text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
