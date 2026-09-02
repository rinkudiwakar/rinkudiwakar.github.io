"use client";

import * as React from "react";
import Link from "next/link";
import { X, Copy, Check, FileCode, Clock, HardDrive, ExternalLink } from "lucide-react";
import { VFSFile } from "@/lib/virtual-fs/types";

interface FileViewerProps {
  file: VFSFile;
  onClose: () => void;
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
    <div className="h-full flex flex-col bg-[var(--background-card)] border-b lg:border-b-0 lg:border-l border-[var(--border)] overflow-hidden">
      {/* File Header Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[var(--background-subtle)] border-b border-[var(--border)] select-none">
        <div className="flex items-center gap-2 min-w-0">
          <FileCode className="w-4 h-4 text-[var(--accent)] shrink-0" />
          <span className="font-mono text-xs font-semibold text-[var(--foreground)] truncate">
            {file.path}
          </span>
          <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[var(--background-card)] text-[var(--foreground-muted)] border border-[var(--border-subtle)]">
            {file.language}
          </span>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          {matchingRoute && (
            <Link
              href={matchingRoute}
              className="hidden sm:inline-flex items-center gap-1 px-2 py-1 rounded text-[11px] font-mono text-[var(--accent)] hover:bg-[var(--background-card)] transition-colors"
              title="Open corresponding page in Story mode"
            >
              <span>View in Story</span>
              <ExternalLink className="w-3 h-3" />
            </Link>
          )}

          <button
            type="button"
            onClick={handleCopy}
            className="flex items-center gap-1 px-2 py-1 rounded text-[11px] font-mono text-[var(--foreground-muted)] hover:text-[var(--foreground)] hover:bg-[var(--background-card)] transition-colors"
            title="Copy file contents"
          >
            {copied ? (
              <Check className="w-3 h-3 text-[var(--success)]" />
            ) : (
              <Copy className="w-3 h-3" />
            )}
            <span className="hidden sm:inline">{copied ? "Copied" : "Copy"}</span>
          </button>

          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded text-[var(--foreground-muted)] hover:text-[var(--foreground)] hover:bg-[var(--background-card)] transition-colors"
            title="Close viewer"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* File Meta Sub-Bar */}
      <div className="flex items-center gap-4 px-4 py-1.5 text-[10px] font-mono text-[var(--foreground-subtle)] border-b border-[var(--border-subtle)] bg-[var(--background)]">
        <span className="flex items-center gap-1">
          <HardDrive className="w-3 h-3" />
          {file.size}
        </span>
        <span className="flex items-center gap-1">
          <Clock className="w-3 h-3" />
          Last updated: {file.lastModified}
        </span>
        <span>{lines.length} lines</span>
      </div>

      {/* Code / Content Area */}
      <div className="flex-1 overflow-auto p-4 font-mono text-xs leading-relaxed bg-[var(--background)]">
        <div className="table w-full border-collapse">
          {lines.map((line, idx) => (
            <div key={idx} className="table-row hover:bg-[var(--background-subtle)]">
              <span className="table-cell pr-4 text-right select-none text-[var(--foreground-subtle)] opacity-50 w-8">
                {idx + 1}
              </span>
              <span className="table-cell text-[var(--foreground)] whitespace-pre-wrap break-all">
                {line || " "}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
