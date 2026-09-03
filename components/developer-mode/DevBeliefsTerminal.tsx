"use client";

import * as React from "react";
import { Terminal as TerminalIcon } from "lucide-react";

export function DevBeliefsTerminal() {
  const [inputValue, setInputValue] = React.useState("");
  const [commandOutput, setCommandOutput] = React.useState<string | null>(null);

  const beliefs = [
    "Focus on real problems.",
    "Ship small, ship often.",
    "Progress > Perfection.",
    "Depth over randomness.",
    "Systems over hacks.",
    "Own the outcome.",
    "Keep learning. Keep building.",
    "Create impact.",
  ];

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = inputValue.trim().toLowerCase();
    if (trimmed === "help") {
      setCommandOutput("Commands: cat beliefs.txt, whoami, clear, date");
    } else if (trimmed === "clear") {
      setCommandOutput("");
    } else if (trimmed === "whoami") {
      setCommandOutput("Rinku Diwakar — Builder @ NIT Jalandhar");
    } else if (trimmed) {
      setCommandOutput(`bash: ${trimmed}: command executed`);
    }
    setInputValue("");
  };

  return (
    <div className="h-full flex flex-col bg-[#070b10] border border-zinc-800 rounded-xl overflow-hidden font-mono text-xs shadow-lg">
      {/* Header */}
      <div className="px-3 py-2 bg-[#0c1017] border-b border-zinc-800 flex items-center justify-between select-none">
        <div className="flex items-center gap-2">
          <TerminalIcon className="w-3.5 h-3.5 text-sky-400" />
          <span className="text-zinc-200 font-semibold">terminal</span>
        </div>
        <span className="text-[10px] text-zinc-500">bash</span>
      </div>

      {/* Terminal Content */}
      <div className="flex-1 p-3 font-mono text-[11px] md:text-xs leading-relaxed overflow-y-auto space-y-2">
        <div>
          <span className="text-emerald-400 font-bold">rinku@MacBook-Pro</span>{" "}
          <span className="text-zinc-400">~ %</span>{" "}
          <span className="text-zinc-100 font-semibold">cat beliefs.txt</span>
        </div>

        <div className="space-y-1 text-zinc-300">
          {beliefs.map((belief, idx) => (
            <div key={idx} className="flex items-start gap-1.5">
              <span className="text-emerald-400 select-none">&gt;</span>
              <span>{belief}</span>
            </div>
          ))}
        </div>

        {commandOutput && (
          <div className="text-emerald-400 pt-1 border-t border-zinc-800/60">
            {commandOutput}
          </div>
        )}

        <form onSubmit={handleCommand} className="flex items-center gap-2 pt-1">
          <span className="text-emerald-400 font-bold shrink-0">rinku@MacBook-Pro</span>
          <span className="text-zinc-400 shrink-0">~ %</span>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="type command..."
            className="flex-1 bg-transparent text-white focus:outline-hidden text-xs placeholder:text-zinc-600"
            aria-label="Terminal input"
          />
        </form>
      </div>
    </div>
  );
}
