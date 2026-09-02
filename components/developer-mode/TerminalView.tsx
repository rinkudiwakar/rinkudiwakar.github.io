"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Terminal as TerminalIcon, CornerDownLeft } from "lucide-react";
import { resolvePath, listDirectory, getFile } from "@/lib/virtual-fs/command-parser";
import { VFSFile } from "@/lib/virtual-fs/types";
import { useThemeMode } from "@/context/ThemeModeContext";

interface TerminalViewProps {
  cwd: string;
  onCwdChange: (newCwd: string) => void;
  onSelectFile: (file: VFSFile) => void;
}

interface OutputEntry {
  id: string;
  command?: string;
  cwd?: string;
  result: React.ReactNode;
  isError?: boolean;
}

export function TerminalView({
  cwd,
  onCwdChange,
  onSelectFile,
}: TerminalViewProps) {
  const router = useRouter();
  const { setMode } = useThemeMode();

  const [input, setInput] = React.useState("");
  const [history, setHistory] = React.useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = React.useState<number>(-1);
  const [entries, setEntries] = React.useState<OutputEntry[]>([
    {
      id: "welcome",
      result: (
        <div className="space-y-2 py-2 text-xs font-mono">
          <div className="text-[var(--accent)] font-bold">
            ⚡ Rinku Diwakar — Developer Mode [VFS Terminal v1.0.0]
          </div>
          <div className="text-[var(--foreground-muted)]">
            Type <span className="text-[var(--accent)] font-semibold">help</span> to
            view available virtual commands, or click files in the tree.
          </div>
          <div className="text-[var(--foreground-subtle)] text-[11px]">
            Virtual filesystem mapped from portfolio facts. No shell execution.
          </div>
        </div>
      ),
    },
  ]);

  const terminalEndRef = React.useRef<HTMLDivElement>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (typeof terminalEndRef.current?.scrollIntoView === "function") {
      terminalEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [entries]);

  const executeCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim();
    if (!trimmed) return;

    // Add to history
    setHistory((prev) => [...prev, trimmed]);
    setHistoryIndex(-1);

    const parts = trimmed.split(" ").filter(Boolean);
    const cmd = parts[0]?.toLowerCase();
    const args = parts.slice(1);

    let outputNode: React.ReactNode = null;
    let isErr = false;

    switch (cmd) {
      case "help": {
        outputNode = (
          <div className="space-y-1.5 text-xs font-mono text-[var(--foreground-muted)]">
            <div className="text-[var(--foreground)] font-bold mb-1">
              Available Virtual Commands:
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-[11px]">
              <div>
                <span className="text-[var(--accent)] font-semibold">whoami</span> —
                Display Rinku Diwakar identity
              </div>
              <div>
                <span className="text-[var(--accent)] font-semibold">ls [path]</span> —
                List virtual files/directories
              </div>
              <div>
                <span className="text-[var(--accent)] font-semibold">cd &lt;path&gt;</span> —
                Change virtual directory
              </div>
              <div>
                <span className="text-[var(--accent)] font-semibold">pwd</span> — Print
                working directory
              </div>
              <div>
                <span className="text-[var(--accent)] font-semibold">cat &lt;file&gt;</span> —
                View file content
              </div>
              <div>
                <span className="text-[var(--accent)] font-semibold">open &lt;route&gt;</span> —
                Navigate to page (pradrix, work, contact)
              </div>
              <div>
                <span className="text-[var(--accent)] font-semibold">history</span> —
                Show command history
              </div>
              <div>
                <span className="text-[var(--accent)] font-semibold">clear</span> —
                Clear terminal screen
              </div>
              <div>
                <span className="text-[var(--accent)] font-semibold">exit</span> — Return
                to Normal Story Mode
              </div>
            </div>
          </div>
        );
        break;
      }

      case "whoami": {
        outputNode = (
          <div className="space-y-1 text-xs font-mono text-[var(--foreground)]">
            <div className="font-bold text-[var(--accent)]">Rinku Diwakar</div>
            <div className="text-[var(--foreground-muted)]">
              Builder working across software, applied AI, data, and products.
            </div>
            <div className="text-[var(--foreground-subtle)] text-[11px]">
              Education: B.Tech Electrical Engineering, NIT Jalandhar (2024)
            </div>
            <div className="text-[var(--foreground-subtle)] text-[11px]">
              Current Venture: Pradrix (AI & Operational Automation)
            </div>
            <div className="text-[var(--accent)] text-[11px]">
              Philosophy: “What if? → It actually works.”
            </div>
          </div>
        );
        break;
      }

      case "pwd": {
        outputNode = <div className="text-xs font-mono text-[var(--foreground)]">{cwd}</div>;
        break;
      }

      case "ls": {
        const targetPath = args[0] || cwd;
        const { node } = resolvePath(targetPath, cwd);

        if (!node) {
          isErr = true;
          outputNode = (
            <div className="text-xs font-mono text-red-400">
              ls: cannot access &apos;{targetPath}&apos;: No such file or directory
            </div>
          );
        } else if (node.type === "file") {
          outputNode = (
            <div className="text-xs font-mono text-[var(--foreground)]">
              {node.name} ({node.size})
            </div>
          );
        } else {
          const children = listDirectory(node);
          outputNode = (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 text-xs font-mono">
              {children.map((child) => (
                <button
                  key={child.name}
                  type="button"
                  onClick={() => {
                    if (child.type === "file") {
                      onSelectFile(child);
                    } else {
                      onCwdChange(child.path);
                    }
                  }}
                  className={`text-left hover:underline truncate ${
                    child.type === "directory"
                      ? "text-amber-400 font-semibold"
                      : "text-blue-400"
                  }`}
                >
                  {child.name}
                  {child.type === "directory" ? "/" : ""}
                </button>
              ))}
            </div>
          );
        }
        break;
      }

      case "cd": {
        const targetPath = args[0] || "/";
        const { node, fullPath } = resolvePath(targetPath, cwd);

        if (!node) {
          isErr = true;
          outputNode = (
            <div className="text-xs font-mono text-red-400">
              cd: no such file or directory: {targetPath}
            </div>
          );
        } else if (node.type === "file") {
          isErr = true;
          outputNode = (
            <div className="text-xs font-mono text-red-400">
              cd: not a directory: {targetPath}
            </div>
          );
        } else {
          onCwdChange(fullPath);
          outputNode = null;
        }
        break;
      }

      case "cat": {
        if (!args[0]) {
          isErr = true;
          outputNode = (
            <div className="text-xs font-mono text-red-400">
              cat: missing file argument. Usage: cat &lt;filename&gt;
            </div>
          );
        } else {
          const file = getFile(args[0], cwd);
          if (!file) {
            isErr = true;
            outputNode = (
              <div className="text-xs font-mono text-red-400">
                cat: {args[0]}: No such file
              </div>
            );
          } else {
            onSelectFile(file);
            outputNode = (
              <div className="space-y-1 text-xs font-mono bg-[var(--background-card)] p-3 rounded border border-[var(--border-subtle)]">
                <div className="text-[10px] text-[var(--accent)] uppercase tracking-wider pb-1 border-b border-[var(--border-subtle)]">
                  {file.path} ({file.size})
                </div>
                <pre className="text-[var(--foreground)] whitespace-pre-wrap overflow-x-auto">
                  {file.content}
                </pre>
              </div>
            );
          }
        }
        break;
      }

      case "open":
      case "navigate": {
        const target = args[0]?.toLowerCase();
        if (!target) {
          isErr = true;
          outputNode = (
            <div className="text-xs font-mono text-red-400">
              open: missing route. Try: open pradrix, open work, open contact, open home
            </div>
          );
        } else if (target === "pradrix") {
          router.push("/pradrix");
          outputNode = <div className="text-xs font-mono text-[var(--accent)]">Navigating to /pradrix...</div>;
        } else if (target === "work" || target === "projects") {
          router.push("/work");
          outputNode = <div className="text-xs font-mono text-[var(--accent)]">Navigating to /work...</div>;
        } else if (target === "contact") {
          router.push("/contact");
          outputNode = <div className="text-xs font-mono text-[var(--accent)]">Navigating to /contact...</div>;
        } else if (target === "home" || target === "journal") {
          router.push("/");
          outputNode = <div className="text-xs font-mono text-[var(--accent)]">Navigating to home...</div>;
        } else {
          isErr = true;
          outputNode = (
            <div className="text-xs font-mono text-red-400">
              open: unknown destination &apos;{target}&apos;. Try: pradrix, work, contact, home
            </div>
          );
        }
        break;
      }

      case "history": {
        outputNode = (
          <div className="space-y-0.5 text-xs font-mono text-[var(--foreground-muted)]">
            {history.map((h, i) => (
              <div key={i}>
                <span className="text-[var(--foreground-subtle)] mr-2">{i + 1}</span>
                <span>{h}</span>
              </div>
            ))}
          </div>
        );
        break;
      }

      case "clear": {
        setEntries([]);
        setInput("");
        return;
      }

      case "exit":
      case "mode": {
        if (cmd === "exit" || args[0] === "normal") {
          setMode("normal");
          router.push("/");
          return;
        }
        outputNode = (
          <div className="text-xs font-mono text-[var(--foreground-muted)]">
            Current mode: developer. Type &apos;exit&apos; to return to normal mode.
          </div>
        );
        break;
      }

      default: {
        isErr = true;
        outputNode = (
          <div className="text-xs font-mono text-red-400">
            command not found: {cmd}. Type &apos;help&apos; for available commands.
          </div>
        );
      }
    }

    setEntries((prev) => [
      ...prev,
      {
        id: `entry-${Date.now()}-${Math.random()}`,
        command: trimmed,
        cwd,
        result: outputNode,
        isError: isErr,
      },
    ]);

    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      executeCommand(input);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (history.length > 0) {
        const nextIdx = historyIndex === -1 ? history.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(nextIdx);
        setInput(history[nextIdx] || "");
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex !== -1) {
        const nextIdx = historyIndex + 1;
        if (nextIdx >= history.length) {
          setHistoryIndex(-1);
          setInput("");
        } else {
          setHistoryIndex(nextIdx);
          setInput(history[nextIdx] || "");
        }
      }
    }
  };

  const quickChips = [
    "whoami",
    "ls",
    "cat me/profile.ts",
    "cat me/beliefs.ts",
    "open pradrix",
    "help",
    "exit",
  ];

  return (
    <div
      className="h-full flex flex-col bg-[var(--background)] font-mono text-xs overflow-hidden"
      onClick={() => inputRef.current?.focus()}
    >
      {/* Terminal Title Sub-Bar */}
      <div className="flex items-center justify-between px-4 py-2 bg-[var(--background-subtle)] border-b border-[var(--border)] select-none">
        <div className="flex items-center gap-2">
          <TerminalIcon className="w-3.5 h-3.5 text-[var(--accent)]" />
          <span className="text-[11px] font-semibold text-[var(--foreground)]">
            rinku@journal:{cwd}
          </span>
        </div>

        <div className="flex items-center gap-1.5 text-[10px] text-[var(--foreground-subtle)]">
          <span className="hidden sm:inline">Press Esc or type &apos;exit&apos; to leave</span>
        </div>
      </div>

      {/* Output Stream */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {entries.map((entry) => (
          <div key={entry.id} className="space-y-1">
            {entry.command && (
              <div className="flex items-center gap-1.5 text-[var(--foreground-muted)]">
                <span className="text-[var(--accent)] font-semibold">
                  rinku@journal:{entry.cwd || cwd}$
                </span>
                <span className="text-[var(--foreground)] font-medium">
                  {entry.command}
                </span>
              </div>
            )}
            {entry.result && <div className="pl-0 sm:pl-2">{entry.result}</div>}
          </div>
        ))}
        <div ref={terminalEndRef} />
      </div>

      {/* Quick Command Chips (Mobile-friendly) */}
      <div className="px-4 py-1.5 bg-[var(--background-subtle)] border-t border-[var(--border-subtle)] flex flex-wrap items-center gap-1.5 overflow-x-auto select-none">
        <span className="text-[10px] text-[var(--foreground-subtle)] uppercase tracking-wider mr-1">
          Quick:
        </span>
        {quickChips.map((chip) => (
          <button
            key={chip}
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              executeCommand(chip);
            }}
            className="px-2 py-0.5 rounded bg-[var(--background-card)] hover:bg-[var(--accent-subtle)] hover:text-[var(--accent)] border border-[var(--border)] text-[10px] text-[var(--foreground-muted)] transition-colors"
          >
            {chip}
          </button>
        ))}
      </div>

      {/* Interactive Input Prompt Bar */}
      <div className="p-3 bg-[var(--background-card)] border-t border-[var(--border)] flex items-center gap-2">
        <span className="text-[var(--accent)] font-bold shrink-0">
          rinku@journal:{cwd}$
        </span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          autoFocus
          spellCheck={false}
          autoCapitalize="none"
          autoComplete="off"
          placeholder="Type command or 'help'..."
          className="flex-1 bg-transparent border-none outline-none text-xs font-mono text-[var(--foreground)] placeholder:text-[var(--foreground-subtle)]"
          aria-label="Terminal Command Input"
        />
        <button
          type="button"
          onClick={() => executeCommand(input)}
          className="p-1 rounded text-[var(--foreground-muted)] hover:text-[var(--accent)] transition-colors"
          title="Execute command"
        >
          <CornerDownLeft className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
