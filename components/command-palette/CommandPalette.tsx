"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import {
  Search,
  Terminal,
  ArrowRight,
  X,
  BookOpen,
  Layers,
  Briefcase,
  User,
  Mail,
  Sparkles,
  History,
  FileText,
  Lightbulb,
  Radio,
} from "lucide-react";
import { useThemeMode } from "@/context/ThemeModeContext";
import { cn } from "@/lib/utils/cn";

interface CommandItem {
  id: string;
  label: string;
  category: "Navigation" | "Projects" | "Thinking & Signals" | "Actions";
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
      // 1. Core Navigation
      {
        id: "nav-now",
        label: "Now",
        category: "Navigation",
        description: "Current focus, Pradrix status board, and active streams",
        icon: Sparkles,
        href: "/now",
        keywords: ["now", "current", "building", "focus", "today", "status"],
      },
      {
        id: "nav-story",
        label: "Story & Origin",
        category: "Navigation",
        description: "Curiosity, engineering at NIT Jalandhar, and evolution",
        icon: BookOpen,
        href: "/story",
        keywords: ["story", "journey", "origin", "background", "nit jalandhar", "curiosity"],
      },
      {
        id: "nav-work",
        label: "Work & Projects",
        category: "Navigation",
        description: "Archive of systems, hardware-software builds, and engines",
        icon: Layers,
        href: "/work",
        keywords: ["work", "projects", "portfolio", "archive", "code"],
      },
      {
        id: "nav-pradrix",
        label: "Pradrix",
        category: "Navigation",
        description: "AI consulting & operational workflow automation venture",
        icon: Sparkles,
        href: "/pradrix",
        keywords: ["pradrix", "ai", "automation", "consulting", "workflow", "methodology", "venture"],
      },
      {
        id: "nav-about",
        label: "About Rinku",
        category: "Navigation",
        description: "Background, electrical engineering, and core philosophy",
        icon: User,
        href: "/about",
        keywords: ["about", "bio", "education", "philosophy", "skills", "rinku"],
      },
      {
        id: "nav-resume",
        label: "Resume & Evidence",
        category: "Navigation",
        description: "Verifiable credentials, technical competencies, and history",
        icon: FileText,
        href: "/resume",
        keywords: ["resume", "cv", "evidence", "experience", "education"],
      },
      {
        id: "nav-contact",
        label: "Contact & Connect",
        category: "Navigation",
        description: "Work With Me, Build With Me, or Talk To Me",
        icon: Mail,
        href: "/contact",
        keywords: ["contact", "email", "connect", "hire", "collaborate", "message"],
      },

      // 2. Featured Projects & Case Studies
      {
        id: "project-kavach",
        label: "Kavach Case Study",
        category: "Projects",
        description: "AI voice-authenticated smart door lock & IoT hardware",
        icon: Briefcase,
        href: "/work/kavach",
        keywords: ["kavach", "voice", "hardware", "arduino", "raspberry pi", "door lock", "iot"],
      },
      {
        id: "project-skillgap",
        label: "SkillGap AI",
        category: "Projects",
        description: "NLP semantic mapping of academic syllabi to industry demand",
        icon: Layers,
        href: "/work/skillgap-ai",
        keywords: ["skillgap", "nlp", "semantic", "embeddings", "curriculum"],
      },
      {
        id: "project-nanotrade",
        label: "NanoTrade",
        category: "Projects",
        description: "Event-driven quantitative backtesting simulation engine",
        icon: Layers,
        href: "/work/nanotrade",
        keywords: ["nanotrade", "backtest", "quantitative", "trading", "python"],
      },

      // 3. Thinking, Logs & Signals
      {
        id: "stream-buildlog",
        label: "Build Log Stream",
        category: "Thinking & Signals",
        description: "Chronological engineering log and weekly system updates",
        icon: History,
        href: "/#build-log",
        keywords: ["build log", "activity", "changelog", "stream", "updates"],
      },
      {
        id: "stream-signals",
        label: "Public Signals",
        category: "Thinking & Signals",
        description: "Normalized pulse across GitHub, writing, and milestones",
        icon: Radio,
        href: "/#signals",
        keywords: ["signals", "github", "pulse", "writing", "activity"],
      },
      {
        id: "stream-thinking",
        label: "What Building Taught Me",
        category: "Thinking & Signals",
        description: "Reflections on failure modes, focus, and real systems",
        icon: Lightbulb,
        href: "/#lessons",
        keywords: ["thinking", "lessons", "failure", "learning", "principles", "focus"],
      },

      // 4. Developer Actions
      {
        id: "action-dev-mode",
        label: mode === "developer" ? "Exit Developer Mode" : "Enter Developer Mode",
        category: "Actions",
        description:
          mode === "developer"
            ? "Return to editorial storytelling mode"
            : "Explore Rinku explained as code and virtual filesystem",
        icon: Terminal,
        action: () => {
          if (mode === "developer") {
            setMode("normal");
            router.push("/");
          } else {
            setMode("developer");
            router.push("/dev");
          }
          setCommandPaletteOpen(false);
        },
        keywords: ["terminal", "developer", "code", "fs", "virtual filesystem", "dev", "cli"],
      },
    ],
    [mode, router, setMode, setCommandPaletteOpen]
  );

  // Filter commands based on search query
  const filteredCommands = React.useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return commands;
    return commands.filter((cmd) => {
      const matchLabel = cmd.label.toLowerCase().includes(q);
      const matchDesc = cmd.description?.toLowerCase().includes(q);
      const matchCategory = cmd.category.toLowerCase().includes(q);
      const matchKeywords = cmd.keywords?.some((k) => k.includes(q));
      return matchLabel || matchDesc || matchCategory || matchKeywords;
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
    } else if (e.key === "Escape") {
      e.preventDefault();
      setCommandPaletteOpen(false);
    }
  };

  if (!isCommandPaletteOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Command Palette"
      aria-describedby="palette-hint"
      className="fixed inset-0 z-50 flex items-end sm:items-start justify-center pt-0 sm:pt-20 px-0 sm:px-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150"
      onClick={(e) => {
        if (e.target === e.currentTarget) setCommandPaletteOpen(false);
      }}
    >
      {/* Mobile Bottom-Sheet / Desktop Modal Container */}
      <div className="w-full max-w-xl bg-[var(--background-card)] border-t sm:border border-[var(--border-strong)] rounded-t-2xl sm:rounded-[var(--radius-xl)] shadow-[var(--shadow-elevated)] overflow-hidden flex flex-col max-h-[85vh] sm:max-h-[80vh] animate-in slide-in-from-bottom-4 sm:slide-in-from-top-2 duration-200">
        {/* Mobile Drag Indicator Handle */}
        <div className="sm:hidden flex justify-center pt-2.5 pb-1 bg-[var(--background)]">
          <div className="w-10 h-1 rounded-full bg-[var(--border-strong)]" />
        </div>

        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-[var(--border)] gap-3 bg-[var(--background)]">
          <Search className="w-4 h-4 text-[var(--foreground-muted)] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type a command or search (e.g. Now, Pradrix, Kavach, Dev)..."
            className="flex-1 bg-transparent text-sm text-[var(--foreground)] placeholder:text-[var(--foreground-subtle)] focus:outline-hidden font-body"
            aria-autocomplete="list"
            aria-controls="palette-results"
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
          <button
            onClick={() => setCommandPaletteOpen(false)}
            className="sm:hidden text-xs font-mono text-[var(--foreground-muted)] hover:text-[var(--foreground)] px-2 py-1"
          >
            Cancel
          </button>
          <kbd className="hidden sm:inline-flex text-[10px] font-mono px-2 py-0.5 rounded-sm bg-[var(--background-subtle)] text-[var(--foreground-muted)] border border-[var(--border)]">
            ESC
          </kbd>
        </div>

        {/* Results List */}
        <div
          id="palette-results"
          role="listbox"
          aria-label="Navigation Suggestions"
          className="overflow-y-auto p-2 space-y-1 divide-y divide-[var(--border-subtle)]"
        >
          {filteredCommands.length === 0 ? (
            <div className="py-8 text-center text-sm text-[var(--foreground-muted)] font-body">
              No matching pages, projects, or actions found.
            </div>
          ) : (
            filteredCommands.map((item, idx) => {
              const isSelected = idx === selectedIndex;
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  id={`palette-item-${item.id}`}
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
                        "p-1.5 rounded-md shrink-0 transition-colors",
                        isSelected
                          ? "bg-[var(--accent)] text-white"
                          : "bg-[var(--background-subtle)] text-[var(--foreground-muted)]"
                      )}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="truncate">
                      <div className="truncate text-sm font-medium">{item.label}</div>
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
        <div
          id="palette-hint"
          className="px-4 py-2.5 bg-[var(--background-subtle)] border-t border-[var(--border)] flex items-center justify-between text-[11px] text-[var(--foreground-muted)] font-mono select-none"
        >
          <span>Navigate with ↑↓ · Press Enter to open</span>
          <span className="hidden sm:inline">rinkudiwakar.me</span>
        </div>
      </div>
    </div>
  );
}
