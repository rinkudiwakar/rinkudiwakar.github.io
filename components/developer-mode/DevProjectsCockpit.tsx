"use client";

import * as React from "react";
import Link from "next/link";
import {
  Layers,
  ArrowUpRight,
  Bot,
  Activity,
  Server,
  Cpu,
} from "lucide-react";
import { pradrixStatusData } from "@/data/pradrix";
import { kavachStoryData } from "@/data/kavach";

export function DevProjectsCockpit() {
  return (
    <div className="h-full overflow-y-auto p-4 md:p-6 space-y-6 custom-scrollbar text-zinc-200">
      {/* Top Header */}
      <div className="space-y-2 border-b border-zinc-800 pb-4">
        <div className="flex items-center gap-2 text-purple-400 text-xs font-mono uppercase tracking-wider">
          <Layers className="w-4 h-4" />
          <span>PRODUCTION SYSTEMS & ARCHITECTURES</span>
        </div>
        <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight">
          System Blueprints & Operational Builds
        </h2>
        <p className="text-xs md:text-sm text-zinc-400 max-w-3xl">
          Deep dive into the core architectures I have designed, engineered, and shipped.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Project 1: Pradrix */}
        <div className="rounded-2xl border border-emerald-500/20 bg-zinc-950/80 p-5 space-y-4 backdrop-blur-md relative overflow-hidden group hover:border-emerald-500/40 transition-all">
          <div className="flex items-center justify-between">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-semibold">
              FLAGSHIP · AI AUTOMATION
            </span>
            <span className="text-[11px] font-mono text-zinc-500">Live Operation</span>
          </div>

          <div className="space-y-1">
            <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors flex items-center justify-between">
              <span>{pradrixStatusData.name}</span>
              <Link
                href="/pradrix"
                className="p-1 rounded bg-zinc-900 hover:bg-emerald-500/20 text-zinc-400 hover:text-emerald-300 transition-colors"
                title="Open Pradrix Deep-Dive"
              >
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </h3>
            <p className="text-xs font-mono text-emerald-400">{pradrixStatusData.tagline}</p>
          </div>

          <p className="text-xs text-zinc-300 leading-relaxed">
            {pradrixStatusData.problemStatement.slice(0, 180)}...
          </p>

          {/* Architecture Highlights */}
          <div className="p-3 rounded-xl bg-zinc-900/90 border border-zinc-800 space-y-2 text-xs font-mono">
            <div className="text-[11px] text-zinc-400 flex items-center gap-1.5">
              <Bot className="w-3.5 h-3.5 text-emerald-400" />
              <span>Core Stack: FastAPI, PyTorch, LangChain, Celery</span>
            </div>
            <div className="text-[11px] text-zinc-400 flex items-center gap-1.5">
              <Server className="w-3.5 h-3.5 text-sky-400" />
              <span>Throughput: Autonomous multi-step business pipelines</span>
            </div>
          </div>

          <div className="pt-1 flex items-center justify-between">
            <Link
              href="/pradrix"
              className="text-xs font-mono text-emerald-400 hover:underline flex items-center gap-1"
            >
              <span>Explore Architecture Case Study</span>
              <ArrowUpRight className="w-3 h-3" />
            </Link>
          </div>
        </div>

        {/* Project 2: Kavach */}
        <div className="rounded-2xl border border-sky-500/20 bg-zinc-950/80 p-5 space-y-4 backdrop-blur-md relative overflow-hidden group hover:border-sky-500/40 transition-all">
          <div className="flex items-center justify-between">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-sky-500/10 text-sky-400 border border-sky-500/20 font-semibold">
              HARDWARE × IOT SAFETY
            </span>
            <span className="text-[11px] font-mono text-zinc-500">Hardware Prototype</span>
          </div>

          <div className="space-y-1">
            <h3 className="text-lg font-bold text-white group-hover:text-sky-300 transition-colors flex items-center justify-between">
              <span>{kavachStoryData.title.split("—")[0].trim()}</span>
              <Link
                href="/work/kavach"
                className="p-1 rounded bg-zinc-900 hover:bg-sky-500/20 text-zinc-400 hover:text-sky-300 transition-colors"
                title="View in Work"
              >
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </h3>
            <p className="text-xs font-mono text-sky-400">{kavachStoryData.tagline}</p>
          </div>

          <p className="text-xs text-zinc-300 leading-relaxed">
            {kavachStoryData.overview.slice(0, 180)}...
          </p>

          {/* Architecture Highlights */}
          <div className="p-3 rounded-xl bg-zinc-900/90 border border-zinc-800 space-y-2 text-xs font-mono">
            <div className="text-[11px] text-zinc-400 flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-purple-400" />
              <span>Sensors: Pulse, Accelerometer, GPS, GSM SOS</span>
            </div>
            <div className="text-[11px] text-zinc-400 flex items-center gap-1.5">
              <Activity className="w-3.5 h-3.5 text-emerald-400" />
              <span>Latency: &lt;1.2s emergency dispatch trigger</span>
            </div>
          </div>

          <div className="pt-1 flex items-center justify-between">
            <Link
              href="/work"
              className="text-xs font-mono text-sky-400 hover:underline flex items-center gap-1"
            >
              <span>Explore Hardware Telemetry</span>
              <ArrowUpRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
