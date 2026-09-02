"use client";

import * as React from "react";
import Link from "next/link";
import { X, Copy, Check, FileCode, Clock, HardDrive, ExternalLink } from "lucide-react";
import { VFSFile } from "@/lib/virtual-fs/types";

interface FileViewerProps {
  file: VFSFile;
  onClose: () => void;
}

/**
 * Lightweight syntax colorizer for TypeScript, JSON, Markdown, and text
 */
function renderHighlightedLine(line: string, language: string): React.ReactNode {
  if (!line) return " ";

  // Markdown lines
  if (language === "markdown") {
    if (line.startsWith("# ")) {
      return <span className="text-amber-400 font-bold text-sm">{line}</span>;
    }
    if (line.startsWith("## ")) {
      return <span className="text-cyan-400 font-bold">{line}</span>;
    }
    if (line.startsWith("### ")) {
      return <span className="text-blue-300 font-semibold">{line}</span>;
    }
    if (line.startsWith("- ") || line.startsWith("* ")) {
      return (
        <span>
          <span className="text-amber-400 font-bold">• </span>
          <span className="text-[var(--foreground)]">{line.substring(2)}</span>
        </span>
      );
    }
    if (line.startsWith("> ")) {
      return <span className="text-emerald-400 italic border-l-2 border-emerald-500/50 pl-2">{line}</span>;
    }
  }

  // Comments
  if (line.trim().startsWith("//") || line.trim().startsWith("/*") || line.trim().startsWith("*")) {
    return <span className="text-zinc-500 italic">{line}</span>;
  }

  // Quick syntax tokenizer for code/json
  // We can render line with stylized tokens
  const tokens = line.split(/("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|\b(?:export|const|let|var|function|interface|type|class|return|import|from|true|false|null|undefined|async|await|extends|implements|new|typeof|if|else|switch|case|break)\b|\b(?:string|number|boolean|any|void|never|object|Array|Promise|Record)\b)/g);

  return (
    <span>
      {tokens.map((token, i) => {
        if (!token) return null;

        // String literals
        if ((token.startsWith('"') && token.endsWith('"')) || (token.startsWith("'") && token.endsWith("'"))) {
          return (
            <span key={i} className="text-emerald-400">
              {token}
            </span>
          );
        }

        // Keywords
        if (/^(export|const|let|var|function|interface|type|class|return|import|from|true|false|null|undefined|async|await|extends|implements|new|typeof|if|else|switch|case|break)$/.test(token)) {
          return (
            <span key={i} className="text-purple-400 font-semibold">
              {token}
            </span>
          );
        }

        // Builtin Types
        if (/^(string|number|boolean|any|void|never|object|Array|Promise|Record)$/.test(token)) {
          return (
            <span key={i} className="text-sky-300 font-medium">
              {token}
            </span>
          );
        }

        // Default text
        return <span key={i} className="text-[var(--foreground)]">{token}</span>;
      })}
    </span>
  );
}

export function FileViewer({ file, onClose }: FileViewerProps) {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(file.content);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const getMatchingRoute = (path: string): string | null => {
    if (path.startsWith("/projects/kavach")) return "/work/kavach";
    if (path.startsWith("/projects/skillgap-ai")) return "/work/skillgap-ai";
    if (path.startsWith("/projects/nanotrade")) return "/work/nanotrade";
    if (path.startsWith("/projects/moviesentiment")) return "/work/moviesentiment";
    if (path.startsWith("/projects/bike-demand-ml")) return "/work/bike-demand-ml";
    if (path.startsWith("/projects")) return "/work";
    if (path.startsWith("/story")) return "/story";
    if (path.startsWith("/now")) return "/now";
    if (path.startsWith("/me/profile") || path.startsWith("/me/goals")) return "/about";
    if (path.startsWith("/me/experience")) return "/resume";
    return null;
  };

  const matchingRoute = getMatchingRoute(file.path);
  const lines = file.content.split("\n");

  return (
    <div className="h-full flex flex-col bg-[#0d1117] border-b lg:border-b-0 lg:border-l border-[#30363d] overflow-hidden">
      {/* File Header Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#161b22] border-b border-[#30363d] select-none">
        <div className="flex items-center gap-2 min-w-0">
          <FileCode className="w-4 h-4 text-sky-400 shrink-0" />
          <span className="font-mono text-xs font-semibold text-zinc-100 truncate">
            {file.path}
          </span>
          <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#0d1117] text-zinc-400 border border-[#30363d]">
            {file.language}
          </span>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          {matchingRoute && (
            <Link
              href={matchingRoute}
              className="hidden sm:inline-flex items-center gap-1 px-2 py-1 rounded text-[11px] font-mono text-sky-400 hover:bg-[#21262d] transition-colors"
              title="Open corresponding page in Story mode"
            >
              <span>View in Story</span>
              <ExternalLink className="w-3 h-3" />
            </Link>
          )}

          <button
            type="button"
            onClick={handleCopy}
            className="flex items-center gap-1 px-2 py-1 rounded text-[11px] font-mono text-zinc-400 hover:text-white hover:bg-[#21262d] transition-colors"
            title="Copy file contents"
          >
            {copied ? (
              <Check className="w-3 h-3 text-emerald-400" />
            ) : (
              <Copy className="w-3 h-3" />
            )}
            <span className="hidden sm:inline">{copied ? "Copied" : "Copy"}</span>
          </button>

          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded text-zinc-400 hover:text-white hover:bg-[#21262d] transition-colors"
            title="Close viewer"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* File Meta Sub-Bar */}
      <div className="flex items-center gap-4 px-4 py-1.5 text-[10px] font-mono text-zinc-500 border-b border-[#21262d] bg-[#090c10]">
        <span className="flex items-center gap-1">
          <HardDrive className="w-3 h-3 text-zinc-400" />
          {file.size}
        </span>
        <span className="flex items-center gap-1">
          <Clock className="w-3 h-3 text-zinc-400" />
          Modified: {file.lastModified}
        </span>
        <span>{lines.length} lines</span>
      </div>

      {/* Code / Content Area */}
      <div className="flex-1 overflow-auto p-4 font-mono text-xs leading-relaxed bg-[#0d1117]">
        <div className="table w-full border-collapse">
          {lines.map((line, idx) => (
            <div key={idx} className="table-row hover:bg-[#161b22]/50">
              <span className="table-cell pr-4 text-right select-none text-zinc-600 font-mono text-[11px] w-8">
                {idx + 1}
              </span>
              <span className="table-cell whitespace-pre-wrap break-all">
                {renderHighlightedLine(line, file.language)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
