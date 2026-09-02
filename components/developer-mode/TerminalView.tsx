"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Terminal as TerminalIcon, CornerDownLeft, Sparkles } from "lucide-react";
import {
  resolvePath,
  listDirectory,
  getFile,
  autocompletePath,
  searchVirtualFiles,
} from "@/lib/virtual-fs/command-parser";
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
          <div className="text-[var(--accent)] font-bold flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Rinku Diwakar — Developer Mode [VFS Terminal v1.0.0]</span>
          </div>
          <div className="text-[var(--foreground-muted)]">
            Type <span className="text-[var(--accent)] font-semibold">help</span> to
            view available virtual commands, or click files in the tree.
          </div>
          <div className="text-[var(--foreground-subtle)] text-[11px]">
            Virtual filesystem mapped from verified portfolio facts. Tab completion & command history enabled.
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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-[11px]">
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
                <span className="text-[var(--accent)] font-semibold">grep &lt;text&gt;</span> —
                Search across virtual files
              </div>
              <div>
                <span className="text-[var(--accent)] font-semibold">open &lt;route&gt;</span> —
                Navigate to page (pradrix, work, resume, contact)
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
          <div className="space-y-1.5 text-xs font-mono text-[var(--foreground)]">
            <div className="font-bold text-[var(--accent)] text-sm">Rinku Diwakar</div>
            <div className="text-[var(--foreground-muted)]">
              Builder working across software, applied AI, data, and products.
            </div>
            <div className="text-[var(--foreground-subtle)] text-[11px]">
              Education: B.Tech in Electrical Engineering, NIT Jalandhar (2023 – 2027, CGPA: 7.44)
            </div>
            <div className="text-[var(--foreground-subtle)] text-[11px]">
              Current Venture: Pradrix (AI & Operational Automation)
            </div>
            <div className="text-[var(--accent)] text-[11px] font-semibold">
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
                <pre className="overflow-x-auto whitespace-pre-wrap text-[var(--foreground)] font-mono text-[11px] pt-1">
                  {file.content}
                </pre>
              </div>
            );
          }
        }
        break;
      }

      case "grep": {
        if (!args[0]) {
          isErr = true;
          outputNode = (
            <div className="text-xs font-mono text-red-400">
              grep: missing search pattern. Usage: grep &lt;text&gt;
            </div>
          );
        } else {
          const query = args.join(" ");
          const results = searchVirtualFiles(query);
          if (results.length === 0) {
            outputNode = (
              <div className="text-xs font-mono text-[var(--foreground-muted)]">
                grep: no matches found for &quot;{query}&quot;
              </div>
            );
          } else {
            outputNode = (
              <div className="space-y-1.5 text-xs font-mono">
                <div className="text-[11px] text-[var(--foreground-subtle)]">
                  {results.length} match(es) across virtual filesystem:
                </div>
                <div className="space-y-1">
                  {results.map((r, i) => (
                    <div
                      key={i}
                      className="p-1.5 rounded bg-[var(--background-card)] border border-[var(--border-subtle)] flex items-start gap-2 cursor-pointer hover:border-[var(--accent)]"
                      onClick={() => onSelectFile(r.file)}
                    >
                      <span className="text-[var(--accent)] shrink-0 text-[10px]">
                        {r.file.path}:{r.line}
                      </span>
                      <span className="text-[var(--foreground)] truncate text-[11px]">
                        {r.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          }
        }
        break;
      }

      case "open": {
        const target = args[0]?.toLowerCase() || "";
        if (!target) {
          isErr = true;
          outputNode = (
            <div className="text-xs font-mono text-red-400">
              open: missing target. Examples: open pradrix, open work, open contact, open /story/origin.md
            </div>
          );
        } else {
          // Check if it's a virtual file path
          const file = getFile(target, cwd);
          if (file) {
            onSelectFile(file);
            outputNode = (
              <div className="text-xs font-mono text-[var(--accent)]">
                Opened file: {file.path}
              </div>
            );
          } else {
            // Check if it's a page route
            const routes: Record<string, string> = {
              home: "/",
              story: "/story",
              work: "/work",
              kavach: "/work/kavach",
              "skillgap-ai": "/work/skillgap-ai",
              skillgap: "/work/skillgap-ai",
              nanotrade: "/work/nanotrade",
              moviesentiment: "/work/moviesentiment",
              pradrix: "/pradrix",
              now: "/now",
              activity: "/activity",
              thinking: "/thinking",
              about: "/about",
              resume: "/resume",
              contact: "/contact",
            };

            const matchedRoute = routes[target.replace(/^\//, "")];
            if (matchedRoute) {
              outputNode = (
                <div className="text-xs font-mono text-[var(--accent)]">
                  Navigating to {matchedRoute}...
                </div>
              );
              setMode("normal");
              router.push(matchedRoute);
            } else {
              isErr = true;
              outputNode = (
                <div className="text-xs font-mono text-red-400">
                  open: unknown route &apos;{target}&apos;. Available: pradrix, work, story, now, about, resume, contact.
                </div>
              );
            }
          }
        }
        break;
      }

      case "history": {
        outputNode = (
          <div className="space-y-0.5 text-xs font-mono text-[var(--foreground-muted)]">
            {history.map((h, i) => (
              <div key={i} className="flex gap-3">
                <span className="text-[var(--foreground-subtle)] w-6 text-right select-none">
                  {i + 1}
                </span>
                <span>{h}</span>
              </div>
            ))}
          </div>
        );
        break;
      }

      case "clear": {
        setEntries([]);
        return;
      }

      case "exit": {
        setMode("normal");
        router.push("/");
        return;
      }

      default: {
        isErr = true;
        outputNode = (
          <div className="space-y-1 text-xs font-mono text-red-400">
            <div>command not found: {cmd}</div>
            <div className="text-[var(--foreground-muted)] text-[11px]">
              Type <span className="text-[var(--accent)] font-bold">help</span> to view available virtual commands.
            </div>
          </div>
        );
        break;
      }
    }

    setEntries((prev) => [
      ...prev,
      {
        id: `cmd-${Date.now()}-${Math.random()}`,
        command: trimmed,
        cwd,
        result: outputNode,
        isError: isErr,
      },
    ]);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // History Up
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (history.length === 0) return;
      const nextIdx =
        historyIndex === -1 ? history.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(nextIdx);
      setInput(history[nextIdx] || "");
    }
    // History Down
    else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex === -1) return;
      const nextIdx = historyIndex + 1;
      if (nextIdx >= history.length) {
        setHistoryIndex(-1);
        setInput("");
      } else {
        setHistoryIndex(nextIdx);
        setInput(history[nextIdx] || "");
      }
    }
    // Tab Auto-Completion
    else if (e.key === "Tab") {
      e.preventDefault();
      const parts = input.split(" ");
      if (parts.length > 0) {
        const lastToken = parts[parts.length - 1];
        if (lastToken) {
          const { completion, matches } = autocompletePath(lastToken, cwd);
          if (completion) {
            parts[parts.length - 1] = completion;
            setInput(parts.join(" "));
          } else if (matches.length > 1) {
            setEntries((prev) => [
              ...prev,
              {
                id: `tab-${Date.now()}`,
                result: (
                  <div className="flex flex-wrap gap-2 text-xs font-mono text-amber-400 py-1">
                    {matches.map((m) => (
                      <span key={m}>{m}</span>
                    ))}
                  </div>
                ),
              },
            ]);
          }
        }
      }
    }
    // Enter Execute
    else if (e.key === "Enter") {
      e.preventDefault();
      executeCommand(input);
      setInput("");
    }
    // Ctrl + L clear
    else if (e.ctrlKey && e.key === "l") {
      e.preventDefault();
      setEntries([]);
    }
  };

  return (
    <div
      className="h-full flex flex-col bg-[var(--background)] overflow-hidden font-mono select-text"
      onClick={() => inputRef.current?.focus()}
    >
      {/* Terminal Title Sub-Bar */}
      <div className="flex items-center justify-between px-4 py-2 bg-[var(--background-subtle)] border-b border-[var(--border)] text-xs text-[var(--foreground-muted)] select-none">
        <div className="flex items-center gap-2">
          <TerminalIcon className="w-3.5 h-3.5 text-[var(--accent)]" />
          <span className="font-semibold text-[var(--foreground)]">Virtual Shell</span>
          <span className="text-[10px] text-[var(--foreground-subtle)]">
            (Tab for auto-complete · ↑↓ history · Ctrl+L clear)
          </span>
        </div>

        <div className="flex items-center gap-2 text-[10px] text-[var(--foreground-subtle)]">
          <span>{cwd}</span>
        </div>
      </div>

      {/* Terminal Output Scroll Area */}
      <div
        className="flex-1 overflow-auto p-4 space-y-3"
        role="log"
        aria-live="polite"
        aria-label="Terminal Output Log"
      >
        {entries.map((entry) => (
          <div key={entry.id} className="space-y-1">
            {entry.command && (
              <div className="flex items-center gap-2 text-xs">
                <span className="text-emerald-500 font-bold">rinku@nitj</span>
                <span className="text-[var(--foreground-subtle)]">:</span>
                <span className="text-blue-400 font-medium">{entry.cwd}</span>
                <span className="text-[var(--foreground-muted)]">$</span>
                <span className="text-[var(--foreground)] font-semibold">
                  {entry.command}
                </span>
              </div>
            )}
            {entry.result && <div className="pl-0">{entry.result}</div>}
          </div>
        ))}
        <div ref={terminalEndRef} />
      </div>

      {/* Terminal Prompt Input Bar */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          executeCommand(input);
          setInput("");
        }}
        className="p-3 bg-[var(--background-subtle)] border-t border-[var(--border)] flex items-center gap-2"
      >
        <span className="text-emerald-500 text-xs font-bold shrink-0">rinku@nitj</span>
        <span className="text-[var(--foreground-subtle)] text-xs shrink-0">:</span>
        <span className="text-blue-400 text-xs font-medium shrink-0">{cwd}</span>
        <span className="text-[var(--foreground-muted)] text-xs font-bold shrink-0">$</span>

        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type a command (help, ls, cat, whoami, grep, open, exit)..."
          className="flex-1 bg-transparent text-xs font-mono text-[var(--foreground)] focus:outline-hidden placeholder:text-[var(--foreground-subtle)]"
          aria-label="Terminal Command Input"
          autoFocus
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
        />

        <button
          type="submit"
          className="p-1 rounded text-[var(--foreground-subtle)] hover:text-[var(--accent)] transition-colors"
          title="Send command"
        >
          <CornerDownLeft className="w-3.5 h-3.5" />
        </button>
      </form>
    </div>
  );
}
