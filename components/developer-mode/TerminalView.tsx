"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Terminal as TerminalIcon, CornerDownLeft, Sparkles, Command } from "lucide-react";
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
        <div className="space-y-2 py-1 text-xs font-mono">
          <div className="text-sky-400 font-bold flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Rinku Diwakar — Developer Mode [VFS Terminal v1.0.0]</span>
          </div>
          <div className="text-zinc-400">
            Type <span className="text-sky-400 font-semibold">help</span> or click quick pills below to explore virtual systems & beliefs.
          </div>
          <div className="text-zinc-500 text-[11px]">
            Virtual filesystem safe sandbox. Tab completion & ↑↓ history enabled.
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
          <div className="space-y-1.5 text-xs font-mono text-zinc-300">
            <div className="text-white font-bold mb-1">
              Available Virtual Commands:
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-[11px]">
              <div>
                <span className="text-emerald-400 font-semibold">neofetch</span> —
                System specs, Matrix avatar & hardware status
              </div>
              <div>
                <span className="text-sky-400 font-semibold">whoami</span> —
                Display Rinku Diwakar identity & background
              </div>
              <div>
                <span className="text-amber-400 font-semibold">skills</span> —
                List engineering superpowers & tech stacks
              </div>
              <div>
                <span className="text-purple-400 font-semibold">projects</span> —
                Inspect architectures (Pradrix, Kavach)
              </div>
              <div>
                <span className="text-sky-400 font-semibold">ls [path]</span> —
                List virtual files/directories
              </div>
              <div>
                <span className="text-sky-400 font-semibold">cd &lt;path&gt;</span> —
                Change virtual directory
              </div>
              <div>
                <span className="text-sky-400 font-semibold">pwd</span> — Print
                working directory
              </div>
              <div>
                <span className="text-sky-400 font-semibold">cat &lt;file&gt;</span> —
                View file content
              </div>
              <div>
                <span className="text-sky-400 font-semibold">grep &lt;text&gt;</span> —
                Search across virtual files
              </div>
              <div>
                <span className="text-sky-400 font-semibold">open &lt;route&gt;</span> —
                Navigate to page (pradrix, work, resume, contact)
              </div>
              <div>
                <span className="text-sky-400 font-semibold">quote</span> —
                Get builder loop thought of the day
              </div>
              <div>
                <span className="text-sky-400 font-semibold">clear</span> —
                Clear terminal screen
              </div>
              <div>
                <span className="text-sky-400 font-semibold">exit</span> — Return
                to Normal Story Mode
              </div>
            </div>
          </div>
        );
        break;
      }

      case "neofetch": {
        outputNode = (
          <div className="flex flex-col sm:flex-row gap-4 p-3 bg-zinc-950/80 rounded-xl border border-emerald-500/20 text-xs font-mono">
            {/* ASCII Matrix Avatar Art */}
            <div className="text-emerald-400 text-[10px] leading-tight select-none shrink-0 font-bold">
              <pre>{`
    .---.      rinku@nitj
   /     \\     ----------
  | () () |    OS: DevOS macOS v2.4 (Matrix Edition)
   \\  -  /     Host: NIT Jalandhar (2023 - 2027)
    \`---\`      Uptime: 100% Focused
  /|     |\\    Shell: bash 5.2 (vfs-identity)
 //|     |\\\\   Role: AI Systems & Distributed Backend Architect
   |  _  |     Venture: Founder @ Pradrix
   | | | |     GPA: 7.44 / 10.0 (Electrical Eng)
   |_|_|_|     Stack: PyTorch, FastAPI, Next.js, Redis, IoT
              `}</pre>
            </div>
            {/* Spec Details */}
            <div className="space-y-1 text-zinc-300 text-[11px] flex-1">
              <div className="text-emerald-400 font-bold">Rinku Diwakar @ DevOS</div>
              <div className="text-zinc-500">----------------------</div>
              <div><span className="text-sky-400 font-semibold">Tagline:</span> “What if? → It actually works.”</div>
              <div><span className="text-amber-400 font-semibold">Discipline:</span> Electrical Engineering & Computer Systems</div>
              <div><span className="text-purple-400 font-semibold">Philosophy:</span> Learning by solving real-world friction</div>
              <div><span className="text-pink-400 font-semibold">Core Builds:</span> Pradrix (Agentic AI) & Kavach (Hardware IoT)</div>
              <div className="pt-2 flex gap-1">
                <span className="w-3 h-3 bg-red-500 rounded-xs inline-block" />
                <span className="w-3 h-3 bg-yellow-500 rounded-xs inline-block" />
                <span className="w-3 h-3 bg-green-500 rounded-xs inline-block" />
                <span className="w-3 h-3 bg-sky-500 rounded-xs inline-block" />
                <span className="w-3 h-3 bg-purple-500 rounded-xs inline-block" />
                <span className="w-3 h-3 bg-emerald-500 rounded-xs inline-block" />
              </div>
            </div>
          </div>
        );
        break;
      }

      case "skills": {
        outputNode = (
          <div className="space-y-2 p-3 bg-zinc-950/80 rounded-xl border border-zinc-800 text-xs font-mono">
            <div className="text-amber-400 font-bold text-sm">⚡ Core Engineering Superpowers:</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-zinc-300 text-[11px]">
              <div className="p-2 rounded bg-zinc-900 border border-zinc-800">
                <div className="text-emerald-400 font-semibold">1. Applied AI & MLOps (92%)</div>
                <div className="text-zinc-400 text-[10px]">PyTorch, TensorFlow, LangChain, RAG, ChromaDB</div>
              </div>
              <div className="p-2 rounded bg-zinc-900 border border-zinc-800">
                <div className="text-sky-400 font-semibold">2. Distributed Backends (94%)</div>
                <div className="text-zinc-400 text-[10px]">FastAPI, Async Python, Celery, Redis, PostgreSQL</div>
              </div>
              <div className="p-2 rounded bg-zinc-900 border border-zinc-800">
                <div className="text-purple-400 font-semibold">3. Hardware & IoT (88%)</div>
                <div className="text-zinc-400 text-[10px]">Microcontrollers, ESP32, Sensors, Circuit Design</div>
              </div>
              <div className="p-2 rounded bg-zinc-900 border border-zinc-800">
                <div className="text-amber-400 font-semibold">4. System Architectures (90%)</div>
                <div className="text-zinc-400 text-[10px]">Docker, CI/CD, Next.js, Test-driven design</div>
              </div>
            </div>
          </div>
        );
        break;
      }

      case "projects": {
        outputNode = (
          <div className="space-y-2 p-3 bg-zinc-950/80 rounded-xl border border-zinc-800 text-xs font-mono">
            <div className="text-purple-400 font-bold text-sm">🛠️ Active Production Architectures:</div>
            <div className="space-y-1.5 text-zinc-300 text-[11px]">
              <div>
                <span className="text-emerald-400 font-semibold">Pradrix:</span> AI × Automation engine for business workflows (FastAPI, PyTorch, LangChain).
              </div>
              <div>
                <span className="text-sky-400 font-semibold">Kavach:</span> Women safety smart band with instant biometric SOS & GSM/GPS telemetry.
              </div>
              <div>
                <span className="text-amber-400 font-semibold">SkillGap AI:</span> Automated curriculum & job requirements parser with vector similarity scoring.
              </div>
            </div>
          </div>
        );
        break;
      }

      case "quote": {
        outputNode = (
          <div className="p-3 bg-zinc-950/80 rounded-xl border border-emerald-500/20 text-xs font-mono text-emerald-400 italic">
            “What if? → Question → Break Problem Down → Learn Unknown → Build → Break → Debug → Fix → Test → Make It Work.”
          </div>
        );
        break;
      }

      case "whoami": {
        outputNode = (
          <div className="space-y-1.5 text-xs font-mono text-zinc-200">
            <div className="font-bold text-sky-400 text-sm">Rinku Diwakar</div>
            <div className="text-zinc-400">
              Builder working across software, applied AI, data, and products.
            </div>
            <div className="text-zinc-500 text-[11px]">
              Education: B.Tech in Electrical Engineering, NIT Jalandhar (2023 – 2027, CGPA: 7.44)
            </div>
            <div className="text-zinc-500 text-[11px]">
              Current Venture: Pradrix (AI & Operational Automation)
            </div>
            <div className="text-sky-400 text-[11px] font-semibold">
              Philosophy: “What if? → It actually works.”
            </div>
          </div>
        );
        break;
      }

      case "pwd": {
        outputNode = <div className="text-xs font-mono text-zinc-300">{cwd}</div>;
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
            <div className="text-xs font-mono text-zinc-300">
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
                      : "text-sky-400"
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
              <div className="space-y-1 text-xs font-mono bg-[#161b22] p-3 rounded border border-[#30363d]">
                <div className="text-[10px] text-sky-400 uppercase tracking-wider pb-1 border-b border-[#30363d]">
                  {file.path} ({file.size})
                </div>
                <pre className="overflow-x-auto whitespace-pre-wrap text-zinc-200 font-mono text-[11px] pt-1">
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
              <div className="text-xs font-mono text-zinc-400">
                grep: no matches found for &quot;{query}&quot;
              </div>
            );
          } else {
            outputNode = (
              <div className="space-y-1.5 text-xs font-mono">
                <div className="text-[11px] text-zinc-400">
                  {results.length} match(es) across virtual filesystem:
                </div>
                <div className="space-y-1">
                  {results.map((r, i) => (
                    <div
                      key={i}
                      className="p-1.5 rounded bg-[#161b22] border border-[#30363d] flex items-start gap-2 cursor-pointer hover:border-sky-400 transition-colors"
                      onClick={() => onSelectFile(r.file)}
                    >
                      <span className="text-sky-400 shrink-0 text-[10px]">
                        {r.file.path}:{r.line}
                      </span>
                      <span className="text-zinc-200 truncate text-[11px]">
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
              <div className="text-xs font-mono text-sky-400">
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
                <div className="text-xs font-mono text-sky-400">
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
          <div className="space-y-0.5 text-xs font-mono text-zinc-400">
            {history.map((h, i) => (
              <div key={i} className="flex gap-3">
                <span className="text-zinc-600 w-6 text-right select-none">
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
            <div className="text-zinc-400 text-[11px]">
              Type <span className="text-sky-400 font-bold">help</span> to view available virtual commands.
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

  const quickPills = [
    { label: "neofetch", cmd: "neofetch" },
    { label: "whoami", cmd: "whoami" },
    { label: "skills", cmd: "skills" },
    { label: "projects", cmd: "projects" },
    { label: "cat profile.ts", cmd: "cat /me/profile.ts" },
    { label: "quote", cmd: "quote" },
    { label: "grep AI", cmd: "grep AI" },
    { label: "help", cmd: "help" },
    { label: "clear", cmd: "clear" },
  ];

  return (
    <div
      className="h-full flex flex-col bg-[#090c10] overflow-hidden font-mono select-text text-zinc-200"
      onClick={() => inputRef.current?.focus()}
    >
      {/* Terminal Title Sub-Bar */}
      <div className="flex items-center justify-between px-4 py-2 bg-[#161b22] border-b border-[#30363d] text-xs text-zinc-400 select-none">
        <div className="flex items-center gap-2">
          <TerminalIcon className="w-3.5 h-3.5 text-sky-400" />
          <span className="font-semibold text-zinc-200">Virtual Terminal</span>
          <span className="hidden sm:inline text-[10px] text-zinc-500">
            (Tab for auto-complete · ↑↓ history · Ctrl+L clear)
          </span>
        </div>

        <div className="flex items-center gap-2 text-[10px] text-zinc-500">
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
                <span className="text-emerald-400 font-bold">rinku@nitj</span>
                <span className="text-zinc-500">:</span>
                <span className="text-sky-400 font-medium">{entry.cwd}</span>
                <span className="text-zinc-400">$</span>
                <span className="text-zinc-100 font-semibold">
                  {entry.command}
                </span>
              </div>
            )}
            {entry.result && <div className="pl-0">{entry.result}</div>}
          </div>
        ))}
        <div ref={terminalEndRef} />
      </div>

      {/* Quick Command Pills Bar */}
      <div className="px-3 py-1.5 bg-[#0d1117] border-t border-[#21262d] flex items-center gap-1.5 overflow-x-auto select-none">
        <div className="flex items-center gap-1 text-[10px] text-zinc-500 shrink-0 mr-1">
          <Command className="w-3 h-3 text-sky-400" />
          <span>Quick:</span>
        </div>
        {quickPills.map((pill) => (
          <button
            key={pill.label}
            type="button"
            onClick={() => executeCommand(pill.cmd)}
            className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#161b22] hover:bg-[#21262d] text-zinc-300 hover:text-sky-400 border border-[#30363d] transition-colors shrink-0"
          >
            {pill.label}
          </button>
        ))}
      </div>

      {/* Terminal Prompt Input Bar */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          executeCommand(input);
          setInput("");
        }}
        className="p-3 bg-[#161b22] border-t border-[#30363d] flex items-center gap-2"
      >
        <span className="text-emerald-400 text-xs font-bold shrink-0">rinku@nitj</span>
        <span className="text-zinc-500 text-xs shrink-0">:</span>
        <span className="text-sky-400 text-xs font-medium shrink-0">{cwd}</span>
        <span className="text-zinc-400 text-xs font-bold shrink-0">$</span>

        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type a command (help, ls, cat, whoami, grep, open, exit)..."
          className="flex-1 bg-transparent text-xs font-mono text-white focus:outline-hidden placeholder:text-zinc-600"
          aria-label="Terminal Command Input"
          autoFocus
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
        />

        <button
          type="submit"
          className="p-1 rounded text-zinc-500 hover:text-sky-400 transition-colors"
          title="Send command"
        >
          <CornerDownLeft className="w-3.5 h-3.5" />
        </button>
      </form>
    </div>
  );
}
