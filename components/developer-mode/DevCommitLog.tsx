"use client";

import * as React from "react";
import { GitCommit, ExternalLink } from "lucide-react";

export function DevCommitLog() {
  const commits = [
    { type: "add", msg: "build-in-public timeline", time: "2d ago", color: "bg-emerald-400" },
    { type: "feat", msg: "automation workflow engine", time: "3d ago", color: "bg-emerald-400" },
    { type: "docs", msg: "pradrix positioning", time: "4d ago", color: "bg-emerald-400" },
    { type: "refactor", msg: "portfolio v2", time: "5d ago", color: "bg-emerald-400" },
    { type: "chore", msg: "update skills graph", time: "6d ago", color: "bg-emerald-400" },
  ];

  return (
    <div className="h-full flex flex-col bg-[#070b10] border border-zinc-800 rounded-xl overflow-hidden font-mono text-xs shadow-lg">
      {/* Header */}
      <div className="px-3 py-2 bg-[#0c1017] border-b border-zinc-800 flex items-center justify-between select-none">
        <div className="flex items-center gap-2">
          <GitCommit className="w-3.5 h-3.5 text-emerald-400" />
          <span className="text-zinc-200 font-semibold">commit.log</span>
        </div>
        <span className="text-[10px] text-zinc-500">main branch</span>
      </div>

      {/* Commits List */}
      <div className="flex-1 p-3 space-y-2.5 overflow-y-auto">
        {commits.map((commit, idx) => (
          <div key={idx} className="flex items-center justify-between text-xs group">
            <div className="flex items-center gap-2 truncate">
              <span className={`w-2 h-2 rounded-full ${commit.color} shrink-0 animate-pulse`} />
              <span className="text-emerald-400 font-bold shrink-0">{commit.type}:</span>
              <span className="text-zinc-300 truncate group-hover:text-white transition-colors">
                {commit.msg}
              </span>
            </div>
            <span className="text-[10px] text-zinc-500 shrink-0 ml-2">{commit.time}</span>
          </div>
        ))}
        <div className="pt-1">
          <a
            href="https://github.com/rinkudiwakar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] text-zinc-500 hover:text-emerald-400 flex items-center gap-1 transition-colors"
          >
            <span>... more on GitHub</span>
            <ExternalLink className="w-2.5 h-2.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
