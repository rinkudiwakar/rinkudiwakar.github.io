"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Search, Terminal, ArrowRight, X, BookOpen, Layers, Briefcase, User, Mail, Sparkles } from "lucide-react";
import { useThemeMode } from "@/context/ThemeModeContext";
import { cn } from "@/lib/utils/cn";

interface CommandItem {
  id: string;
  label: string;
  category: "Pages" | "Projects" | "Actions";
  description?: string;
  icon: React.ComponentType<{ className?: string }>;
  href?: string;
  action?: () => void;
  keywords?: string[];
}

export function CommandPalette() {
  const { isCommandPaletteOpen, setCommandPaletteOpen, setMode, mode } = useThemeMode();
  const [query, setQuery] = React.useState("");
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const router = useRouter();

  const commands: CommandItem[] = React.useMemo(
    () => [
      {
        id: "nav-pradrix",
        label: "Pradrix",
        category: "Pages",
        description: "AI × Automation × Business consulting",
        icon: Sparkles,
        href: "/pradrix",
        keywords: ["ai", "automation", "consulting", "company", "workflow"],
      },
      {
        id: "nav-kavach",
        label: "Kavach Case Study",
        category: "Projects",
        description: "Voice-authenticated physical door lock",
        icon: Briefcase,
        href: "/work/kavach",
        keywords: ["voice", "hardware", "arduino", "raspberry pi", "door lock"],
      },
      {
        id: "nav-story",
        label: "My Story",
        category: "Pages",
        description: "The full journey from curiosity to building",
        icon: BookOpen,
        href: "/story",
        keywords: ["journey", "origin", "background", "engineering", "nit jalandhar"],
      },
      {
        id: "nav-work",
        label: "Work & Projects",
        category: "Pages",
        description: "Archive of systems and products built",
        icon: Layers,
        href: "/work",
        keywords: ["projects", "code", "skillgap", "nanotrade"],
      },
      {
        id: "nav-now",
        label: "Now",
        category: "Pages",
        description: "Current focus, active builds, and learnings",
        icon: Sparkles,
        href: "/now",
        keywords: ["current", "building", "focus", "today"],
      },
      {
        id: "nav-about",
        label: "About Rinku",
        category: "Pages",
        description: "Principles, background, and builder philosophy",
        icon: User,
        href: "/about",
        keywords: ["bio", "education", "philosophy", "skills"],
      },
      {
        id: "nav-contact",
        label: "Contact & Connect",
        category: "Pages",
        description: "Reach out for collaborations, projects, or consulting",
        icon: Mail,
        href: "/contact",
        keywords: ["email", "linkedin", "message", "hire", "collaborate"],
      },
      {
        id: "action-dev-mode",
        label: mode === "developer" ? "Exit Developer Mode" : "Enter Developer Mode",
        category: "Actions",
        description: mode === "developer" ? "Return to editorial mode" : "Explore Rinku explained as code",
        icon: Terminal,
        action: () => {
          setMode(mode === "developer" ? "normal" : "developer");
          setCommandPaletteOpen(false);
        },
        keywords: ["terminal", "developer", "code", "fs", "virtual filesystem", "dev"],
      },
    ],
    [mode, setMode, setCommandPaletteOpen]
  );

  // Filter commands based on search query
  const filteredCommands = React.useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return commands;
    return commands.filter((cmd) => {
      const matchLabel = cmd.label.toLowerCase().includes(q);
      const matchDesc = cmd.description?.toLowerCase().includes(q);
      const matchKeywords = cmd.keywords?.some((k) => k.includes(q));
      return matchLabel || matchDesc || matchKeywords;
    });
  }, [commands, query]);

  // Focus input when palette opens
  React.useEffect(() => {
    if (isCommandPaletteOpen) {
      setQuery("");
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isCommandPaletteOpen]);

  // Reset selectedIndex when filtered results change
  React.useEffect(() => {
    setSelectedIndex(0);
  }, [filteredCommands.length]);

  // Execute selected command
  const executeItem = React.useCallback(
    (item: CommandItem) => {
      if (item.action) {
        item.action();
      } else if (item.href) {
        router.push(item.href);
        setCommandPaletteOpen(false);
      }
    },
    [router, setCommandPaletteOpen]
  );

  // Keyboard navigation within list
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) =>
        prev < filteredCommands.length - 1 ? prev + 1 : 0
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) =>
        prev > 0 ? prev - 1 : filteredCommands.length - 1
      );
    } else if (e.key === "Enter" && filteredCommands[selectedIndex]) {
      e.preventDefault();
      executeItem(filteredCommands[selectedIndex]);
    }
  };

  if (!isCommandPaletteOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Command Palette"
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 md:pt-24 px-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-150"
      onClick={(e) => {
        if (e.target === e.currentTarget) setCommandPaletteOpen(false);
      }}
    >
      <div className="w-full max-w-xl bg-[var(--background-card)] border border-[var(--border-strong)] rounded-[var(--radius-xl)] shadow-[var(--shadow-elevated)] overflow-hidden flex flex-col max-h-[80vh]">
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-[var(--border)] gap-3 bg-[var(--background)]">
          <Search className="w-4 h-4 text-[var(--foreground-muted)] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search or jump to..."
            className="flex-1 bg-transparent text-sm text-[var(--foreground)] placeholder:text-[var(--foreground-subtle)] focus:outline-hidden font-body"
            aria-autocomplete="list"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="text-[var(--foreground-muted)] hover:text-[var(--foreground)] p-1 rounded-sm cursor-pointer"
              aria-label="Clear search query"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
          <kbd className="hidden sm:inline-flex text-[10px] font-mono px-2 py-0.5 rounded-sm bg-[var(--background-subtle)] text-[var(--foreground-muted)] border border-[var(--border)]">
            ESC
          </kbd>
        </div>

        {/* Results List */}
        <div className="overflow-y-auto p-2 space-y-1 divide-y divide-[var(--border-subtle)]">
          {filteredCommands.length === 0 ? (
            <div className="py-8 text-center text-sm text-[var(--foreground-muted)] font-body">
              No matching pages or actions found.
            </div>
          ) : (
            filteredCommands.map((item, idx) => {
              const isSelected = idx === selectedIndex;
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  onClick={() => executeItem(item)}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={cn(
                    "flex items-center justify-between px-3 py-2.5 rounded-[var(--radius-md)] cursor-pointer text-sm transition-colors duration-150",
                    isSelected
                      ? "bg-[var(--accent-subtle)] text-[var(--accent)] font-medium"
                      : "text-[var(--foreground)] hover:bg-[var(--background-subtle)]"
                  )}
                  role="option"
                  aria-selected={isSelected}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      className={cn(
                        "p-1.5 rounded-md shrink-0",
                        isSelected
                          ? "bg-[var(--accent)] text-white"
                          : "bg-[var(--background-subtle)] text-[var(--foreground-muted)]"
                      )}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="truncate">
                      <div className="truncate text-sm">{item.label}</div>
                      {item.description && (
                        <div className="truncate text-xs text-[var(--foreground-muted)] font-normal">
                          {item.description}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 pl-2 shrink-0">
                    <span className="text-[10px] uppercase tracking-wider font-mono text-[var(--foreground-subtle)]">
                      {item.category}
                    </span>
                    <ArrowRight
                      className={cn(
                        "w-3.5 h-3.5 transition-transform duration-150",
                        isSelected
                          ? "opacity-100 translate-x-0.5 text-[var(--accent)]"
                          : "opacity-0"
                      )}
                    />
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer Hint */}
        <div className="px-4 py-2.5 bg-[var(--background-subtle)] border-t border-[var(--border)] flex items-center justify-between text-[11px] text-[var(--foreground-muted)] font-mono">
          <span>Navigate with ↑↓ and Enter</span>
          <span>rinkudiwakar.me</span>
        </div>
      </div>
    </div>
  );
}
