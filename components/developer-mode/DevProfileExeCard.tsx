"use client";

import * as React from "react";
import Image from "next/image";
import { DevMatrixAsciiPortrait } from "./DevMatrixAsciiPortrait";
import { Sparkles, Terminal } from "lucide-react";

export function DevProfileExeCard() {
  const [showPhoto, setShowPhoto] = React.useState(false);

  return (
    <div className="h-full flex flex-col bg-[#070b10] border border-zinc-800 rounded-xl overflow-hidden font-mono text-xs shadow-xl">
      {/* Header */}
      <div className="px-3 py-2 bg-[#0c1017] border-b border-zinc-800 flex items-center justify-between select-none">
        <div className="flex items-center gap-2">
          <Terminal className="w-3.5 h-3.5 text-emerald-400" />
          <span className="text-zinc-200 font-semibold">profile.exe</span>
          <span className="text-[10px] text-zinc-500">[binary/executable]</span>
        </div>
        <button
          type="button"
          onClick={() => setShowPhoto((prev) => !prev)}
          className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-300 hover:text-emerald-400 transition-colors flex items-center gap-1 cursor-pointer"
        >
          <Sparkles className="w-3 h-3 text-emerald-400" />
          <span>{showPhoto ? "Show ASCII" : "Show Portrait"}</span>
        </button>
      </div>

      {/* Body: Side-by-side on desktop */}
      <div className="flex-1 p-3 md:p-4 grid grid-cols-1 md:grid-cols-12 gap-4 items-center overflow-y-auto">
        {/* Left: ASCII Art / Photo Portrait */}
        <div className="md:col-span-4 flex justify-center">
          {showPhoto ? (
            <div className="w-32 h-32 md:w-36 md:h-36 rounded-xl overflow-hidden border border-emerald-500/40 p-1 bg-black relative shadow-[0_0_20px_rgba(16,185,129,0.2)]">
              <Image
                src="/images/matrix-avatar.jpg"
                alt="Rinku Diwakar Matrix Portrait"
                fill
                sizes="144px"
                className="object-cover rounded-lg"
              />
            </div>
          ) : (
            <DevMatrixAsciiPortrait />
          )}
        </div>

        {/* Right: profile.exe terminal output */}
        <div className="md:col-span-8 space-y-2.5 font-mono text-[11px] md:text-xs leading-relaxed">
          <div>
            <span className="text-emerald-400 font-bold">rinku@MacBook-Pro</span>{" "}
            <span className="text-zinc-400">~ %</span>{" "}
            <span className="text-zinc-100 font-semibold">cat profile.exe</span>
          </div>

          <div className="space-y-1 bg-black/40 p-3 rounded-lg border border-zinc-800/80">
            <div className="text-emerald-400 font-semibold">&gt; identity = {"{"}</div>
            <div className="pl-4 space-y-0.5 text-zinc-300">
              <div>
                <span className="text-zinc-400">name:</span>{" "}
                <span className="text-emerald-300">&quot;Rinku Diwakar&quot;</span>,
              </div>
              <div>
                <span className="text-zinc-400">role:</span>{" "}
                <span className="text-zinc-300">[</span>
                <span className="text-emerald-300">&quot;Builder&quot;</span>,{" "}
                <span className="text-emerald-300">&quot;Engineer&quot;</span>,{" "}
                <span className="text-emerald-300">&quot;Explorer&quot;</span>
                <span className="text-zinc-300">],</span>
              </div>
              <div>
                <span className="text-zinc-400">location:</span>{" "}
                <span className="text-emerald-300">&quot;India 🇮🇳&quot;</span>,
              </div>
              <div>
                <span className="text-zinc-400">education:</span>{" "}
                <span className="text-emerald-300">
                  &quot;B.Tech, Electrical Engineering @ NIT Jalandhar&quot;
                </span>
                ,
              </div>
              <div>
                <span className="text-zinc-400">focus:</span>{" "}
                <span className="text-zinc-300">[</span>
                <span className="text-emerald-300">&quot;AI&quot;</span>,{" "}
                <span className="text-emerald-300">&quot;Automation&quot;</span>,{" "}
                <span className="text-emerald-300">&quot;Products&quot;</span>,{" "}
                <span className="text-emerald-300">&quot;Problem Solving&quot;</span>
                <span className="text-zinc-300">],</span>
              </div>
              <div>
                <span className="text-zinc-400">motto:</span>{" "}
                <span className="text-emerald-300">
                  &quot;What if? -&gt; It actually works.&quot;
                </span>
                ,
              </div>
              <div>
                <span className="text-zinc-400">currently:</span>{" "}
                <span className="text-sky-300 font-medium">
                  &quot;Building Pradrix&quot;
                </span>
              </div>
            </div>
            <div className="text-emerald-400 font-semibold">{"}"}</div>
          </div>

          <div className="space-y-1">
            <div className="text-emerald-400 font-semibold">&gt; summary()</div>
            <p className="text-zinc-300 italic text-[11px] leading-relaxed">
              Curious mind. Strong fundamentals. Builder at heart.
              <br />
              I learn fast, ship consistently and solve problems end-to-end.
            </p>
          </div>

          <div className="pt-1 text-[11px] text-zinc-500">
            <span className="text-emerald-400 font-bold">rinku@MacBook-Pro</span>{" "}
            <span className="text-zinc-400">~ %</span>{" "}
            <span className="inline-block w-1.5 h-3.5 bg-emerald-400 animate-pulse align-middle" />
          </div>
        </div>
      </div>
    </div>
  );
}
