"use client";

import * as React from "react";
import { X, Copy, Check } from "lucide-react";

interface DevVimEditorProps {
  filename?: string;
  onClose?: () => void;
}

export function DevVimEditor({ filename = "whoami.md", onClose }: DevVimEditorProps) {
  const [copied, setCopied] = React.useState(false);

  const lines = [
    "# Who I Am",
    "I'm a builder who enjoys turning ideas into real, useful things.",
    "I like solving meaningful problems using software, AI and automation.",
    "I care about impact more than perfection.",
    "",
    "I learn by doing.",
    "I ship.",
    "I iterate.",
    "",
    "I'm not here to collect skills.",
    "I'm here to build things that matter.",
  ];

  const handleCopy = () => {
    navigator.clipboard.writeText(lines.join("\n"));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="h-full flex flex-col bg-[#070b10] border border-zinc-800 rounded-xl overflow-hidden font-mono text-xs shadow-lg">
      {/* Tab Header */}
      <div className="px-3 py-2 bg-[#0c1017] border-b border-zinc-800 flex items-center justify-between select-none">
        <div className="flex items-center gap-2">
          <span className="text-zinc-200 font-semibold">{filename}</span>
          <span className="text-[10px] text-zinc-500 font-normal">[markdown]</span>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleCopy}
            className="text-zinc-500 hover:text-zinc-300 transition-colors p-1"
            title="Copy content"
          >
            {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
          </button>
          {onClose && (
            <button
              type="button"
              onClick={onClose}
              className="text-zinc-500 hover:text-zinc-300 transition-colors p-1"
              title="Close Tab"
            >
              <X className="w-3 h-3" />
            </button>
          )}
        </div>
      </div>

      {/* Editor Body */}
      <div className="flex-1 p-3 overflow-y-auto font-mono text-[12px] leading-relaxed space-y-0.5">
        {lines.map((line, idx) => (
          <div key={idx} className="flex gap-4 group">
            <span className="w-5 text-right text-zinc-600 select-none text-[11px] group-hover:text-zinc-400">
              {idx + 1}
            </span>
            <span
              className={
                line.startsWith("#")
                  ? "text-emerald-400 font-bold"
                  : line.trim() === ""
                  ? "text-zinc-600"
                  : "text-zinc-300"
              }
            >
              {line || " "}
            </span>
          </div>
        ))}
      </div>

      {/* Vim Status Line */}
      <div className="px-3 py-1 bg-[#0c1017] border-t border-zinc-800 text-[10px] font-mono text-zinc-400 flex items-center justify-between select-none">
        <div className="flex items-center gap-2">
          <span className="text-emerald-400 font-bold">-- INSERT --</span>
          <span className="text-zinc-600">|</span>
          <span className="text-zinc-400">utf-8</span>
        </div>
        <div className="flex items-center gap-2 text-zinc-400">
          <span>1,1</span>
          <span className="text-emerald-400 font-semibold">All</span>
        </div>
      </div>
    </div>
  );
}
