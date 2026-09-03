"use client";

import * as React from "react";
import { Database } from "lucide-react";

export function DevSkillsDb() {
  return (
    <div className="h-full flex flex-col bg-[#070b10] border border-zinc-800 rounded-xl overflow-hidden font-mono text-xs shadow-lg">
      {/* Header */}
      <div className="px-3 py-2 bg-[#0c1017] border-b border-zinc-800 flex items-center justify-between select-none">
        <div className="flex items-center gap-2">
          <Database className="w-3.5 h-3.5 text-amber-400" />
          <span className="text-zinc-200 font-semibold">skills.db</span>
        </div>
        <span className="text-[10px] text-zinc-500">[json/schema]</span>
      </div>

      {/* Content */}
      <div className="flex-1 p-3 font-mono text-[11px] md:text-xs leading-relaxed overflow-y-auto space-y-1">
        <div>
          <span className="text-emerald-400 font-bold">skills</span>
          <span className="text-zinc-300"> = {"{"}</span>
        </div>

        <div className="pl-4 space-y-0.5">
          <div>
            <span className="text-sky-400 font-medium">languages:</span>{" "}
            <span className="text-zinc-300">[</span>
            <span className="text-emerald-300">&quot;Python&quot;</span>,{" "}
            <span className="text-emerald-300">&quot;JavaScript&quot;</span>,{" "}
            <span className="text-emerald-300">&quot;TypeScript&quot;</span>,{" "}
            <span className="text-emerald-300">&quot;SQL&quot;</span>,{" "}
            <span className="text-emerald-300">&quot;C++&quot;</span>
            <span className="text-zinc-300">],</span>
          </div>

          <div>
            <span className="text-sky-400 font-medium">frameworks:</span>{" "}
            <span className="text-zinc-300">[</span>
            <span className="text-emerald-300">&quot;React&quot;</span>,{" "}
            <span className="text-emerald-300">&quot;Next.js&quot;</span>,{" "}
            <span className="text-emerald-300">&quot;FastAPI&quot;</span>,{" "}
            <span className="text-emerald-300">&quot;Node.js&quot;</span>
            <span className="text-zinc-300">],</span>
          </div>

          <div>
            <span className="text-sky-400 font-medium">ai_ml:</span>{" "}
            <span className="text-zinc-300">[</span>
            <span className="text-emerald-300">&quot;Machine Learning&quot;</span>,{" "}
            <span className="text-emerald-300">&quot;NLP&quot;</span>,{" "}
            <span className="text-emerald-300">&quot;RAG&quot;</span>,{" "}
            <span className="text-emerald-300">&quot;LangChain&quot;</span>,{" "}
            <span className="text-emerald-300">&quot;MCP&quot;</span>
            <span className="text-zinc-300">],</span>
          </div>

          <div>
            <span className="text-sky-400 font-medium">data:</span>{" "}
            <span className="text-zinc-300">[</span>
            <span className="text-emerald-300">&quot;Pandas&quot;</span>,{" "}
            <span className="text-emerald-300">&quot;NumPy&quot;</span>,{" "}
            <span className="text-emerald-300">&quot;PostgreSQL&quot;</span>,{" "}
            <span className="text-emerald-300">&quot;Analytics&quot;</span>
            <span className="text-zinc-300">],</span>
          </div>

          <div>
            <span className="text-sky-400 font-medium">devops:</span>{" "}
            <span className="text-zinc-300">[</span>
            <span className="text-emerald-300">&quot;Docker&quot;</span>,{" "}
            <span className="text-emerald-300">&quot;Git&quot;</span>,{" "}
            <span className="text-emerald-300">&quot;Vercel&quot;</span>,{" "}
            <span className="text-emerald-300">&quot;Linux&quot;</span>,{" "}
            <span className="text-emerald-300">&quot;CI/CD&quot;</span>
            <span className="text-zinc-300">],</span>
          </div>

          <div>
            <span className="text-sky-400 font-medium">tools:</span>{" "}
            <span className="text-zinc-300">[</span>
            <span className="text-emerald-300">&quot;VS Code&quot;</span>,{" "}
            <span className="text-emerald-300">&quot;Postman&quot;</span>,{" "}
            <span className="text-emerald-300">&quot;Figma&quot;</span>,{" "}
            <span className="text-emerald-300">&quot;Notion&quot;</span>
            <span className="text-zinc-300">]</span>
          </div>
        </div>

        <div>
          <span className="text-zinc-300">{"}"}</span>
        </div>

        <div className="pt-2 text-[11px] text-zinc-500">
          <span className="text-emerald-400 font-bold">rinku@MacBook-Pro</span>{" "}
          <span className="text-zinc-400">~ %</span>{" "}
          <span className="inline-block w-1.5 h-3.5 bg-emerald-400 animate-pulse align-middle" />
        </div>
      </div>
    </div>
  );
}
