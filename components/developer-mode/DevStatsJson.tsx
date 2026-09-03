"use client";

import * as React from "react";
import { Braces, X } from "lucide-react";

export function DevStatsJson() {
  return (
    <div className="h-full flex flex-col bg-[#070b10] border border-zinc-800 rounded-xl overflow-hidden font-mono text-xs shadow-lg">
      {/* Header */}
      <div className="px-3 py-2 bg-[#0c1017] border-b border-zinc-800 flex items-center justify-between select-none">
        <div className="flex items-center gap-2">
          <Braces className="w-3.5 h-3.5 text-amber-400" />
          <span className="text-zinc-200 font-semibold">stats.json</span>
        </div>
        <span className="text-zinc-600 hover:text-zinc-400 cursor-pointer">
          <X className="w-3 h-3" />
        </span>
      </div>

      {/* JSON Content */}
      <div className="flex-1 p-3 font-mono text-[11px] md:text-xs leading-relaxed overflow-y-auto">
        <div className="text-zinc-400">{"{"}</div>
        <div className="pl-4 space-y-1">
          <div>
            <span className="text-sky-400">&quot;projects&quot;</span>
            <span className="text-zinc-400">: </span>
            <span className="text-emerald-400 font-semibold">&quot;15+&quot;</span>
            <span className="text-zinc-400">,</span>
          </div>
          <div>
            <span className="text-sky-400">&quot;hackathons&quot;</span>
            <span className="text-zinc-400">: </span>
            <span className="text-emerald-400 font-semibold">&quot;10+ Wins&quot;</span>
            <span className="text-zinc-400">,</span>
          </div>
          <div>
            <span className="text-sky-400">&quot;experience&quot;</span>
            <span className="text-zinc-400">: </span>
            <span className="text-emerald-400 font-semibold">&quot;2+ years&quot;</span>
            <span className="text-zinc-400">,</span>
          </div>
          <div>
            <span className="text-sky-400">&quot;learning_everyday&quot;</span>
            <span className="text-zinc-400">: </span>
            <span className="text-amber-400 font-bold">true</span>
            <span className="text-zinc-400">,</span>
          </div>
          <div>
            <span className="text-sky-400">&quot;ship_mode&quot;</span>
            <span className="text-zinc-400">: </span>
            <span className="text-emerald-400 font-semibold">&quot;always_on&quot;</span>
          </div>
        </div>
        <div className="text-zinc-400">{"}"}</div>
      </div>
    </div>
  );
}
