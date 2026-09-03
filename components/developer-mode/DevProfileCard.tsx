"use client";

import * as React from "react";
import Image from "next/image";
import {
  Sparkles,
  Terminal as TerminalIcon,
  Zap,
  GraduationCap,
  Layers,
  Copy,
  Check,
  Cpu,
  Code2,
  ExternalLink,
} from "lucide-react";
import { profileData } from "@/data/profile";

interface DevProfileCardProps {
  onNavigateTab: (tab: "identity" | "superpowers" | "projects" | "terminal" | "vfs") => void;
}

export function DevProfileCard({ onNavigateTab }: DevProfileCardProps) {
  const [copied, setCopied] = React.useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("rinkudiwakar010@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="h-full overflow-y-auto p-4 md:p-6 space-y-6 custom-scrollbar text-zinc-200">
      {/* Top Hero Banner: Matrix Avatar + Cybernetic Identity */}
      <div className="relative overflow-hidden rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-zinc-900/90 via-zinc-950/90 to-[#0b1016]/90 p-5 md:p-6 shadow-xl backdrop-blur-md">
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 relative z-10">
          {/* Avatar with Cyber HUD Frame */}
          <div className="relative group shrink-0">
            <div className="w-28 h-28 md:w-36 md:h-36 rounded-2xl overflow-hidden border-2 border-emerald-400/40 p-1 bg-zinc-950 shadow-[0_0_25px_rgba(16,185,129,0.2)] group-hover:border-emerald-400 transition-all duration-300">
              <div className="relative w-full h-full rounded-xl overflow-hidden bg-zinc-900">
                <Image
                  src="/images/matrix-avatar.jpg"
                  alt="Rinku Diwakar — Matrix Developer Edition"
                  fill
                  sizes="(max-width: 768px) 112px, 144px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  priority
                />
              </div>
            </div>

            {/* Matrix HUD Badge */}
            <div className="absolute -bottom-2 -right-2 bg-zinc-900 border border-emerald-500/50 rounded-full px-2.5 py-0.5 text-[10px] font-mono text-emerald-400 flex items-center gap-1.5 shadow-lg">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>ONLINE</span>
            </div>
          </div>

          {/* Identity Info */}
          <div className="flex-1 text-center md:text-left space-y-2.5">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                AI & Systems Builder
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-sky-500/10 text-sky-400 border border-sky-500/20 flex items-center gap-1">
                <GraduationCap className="w-3 h-3" />
                NIT Jalandhar ’27
              </span>
            </div>

            <h1 className="text-2xl md:text-3xl font-display font-bold tracking-tight text-white flex items-center justify-center md:justify-start gap-2">
              <span>{profileData.name}</span>
              <span className="text-emerald-400 font-mono text-base font-normal">
                {`// dev.os`}
              </span>
            </h1>

            <p className="text-sm md:text-base text-zinc-300 font-medium">
              {profileData.headline}
            </p>

            <p className="text-xs md:text-sm text-zinc-400 max-w-2xl leading-relaxed italic border-l-2 border-emerald-500/40 pl-3">
              “{profileData.tagline}”
            </p>

            {/* Quick Action Matrix Buttons */}
            <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-2">
              <button
                type="button"
                onClick={() => onNavigateTab("superpowers")}
                className="px-3 py-1.5 rounded-lg bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/30 text-emerald-300 text-xs font-mono flex items-center gap-1.5 transition-all cursor-pointer"
              >
                <Zap className="w-3.5 h-3.5 text-emerald-400" />
                <span>Superpowers</span>
              </button>

              <button
                type="button"
                onClick={() => onNavigateTab("terminal")}
                className="px-3 py-1.5 rounded-lg bg-sky-500/15 hover:bg-sky-500/25 border border-sky-500/30 text-sky-300 text-xs font-mono flex items-center gap-1.5 transition-all cursor-pointer"
              >
                <TerminalIcon className="w-3.5 h-3.5 text-sky-400" />
                <span>CLI Terminal</span>
              </button>

              <button
                type="button"
                onClick={() => onNavigateTab("projects")}
                className="px-3 py-1.5 rounded-lg bg-purple-500/15 hover:bg-purple-500/25 border border-purple-500/30 text-purple-300 text-xs font-mono flex items-center gap-1.5 transition-all cursor-pointer"
              >
                <Layers className="w-3.5 h-3.5 text-purple-400" />
                <span>Architectures</span>
              </button>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-zinc-300 text-xs font-mono flex items-center gap-1.5 transition-all cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Copied Email</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-zinc-400" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Grid: Who I Am & What I Do Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Card 1: Who I Am */}
        <div className="rounded-xl border border-zinc-800 bg-zinc-950/70 p-5 space-y-3 backdrop-blur-sm">
          <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono uppercase tracking-wider">
            <Cpu className="w-4 h-4" />
            <span>01 // WHO I AM</span>
          </div>
          <h3 className="text-base font-semibold text-white">
            Electrical Engineer Turned Systems & AI Architect
          </h3>
          <p className="text-xs text-zinc-400 leading-relaxed">
            I am a builder pursuing Electrical Engineering at{" "}
            <span className="text-zinc-200 font-medium">NIT Jalandhar</span> (2023–2027, CGPA: 7.44). 
            My formal engineering background gives me a deep appreciation for structured analytical thinking, physical circuit dynamics, and mathematical modeling.
          </p>
          <p className="text-xs text-zinc-400 leading-relaxed">
            I bridge physical systems and high-throughput software architectures — engineering production AI pipelines, MLOps workflows, and robust backends from the metal up.
          </p>
          <div className="pt-2 flex flex-wrap gap-1.5">
            <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-300">
              Circuits & Math
            </span>
            <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-300">
              MLOps
            </span>
            <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-300">
              Distributed Backend
            </span>
          </div>
        </div>

        {/* Card 2: What I Do */}
        <div className="rounded-xl border border-zinc-800 bg-zinc-950/70 p-5 space-y-3 backdrop-blur-sm">
          <div className="flex items-center gap-2 text-sky-400 text-xs font-mono uppercase tracking-wider">
            <Code2 className="w-4 h-4" />
            <span>02 // WHAT I DO</span>
          </div>
          <h3 className="text-base font-semibold text-white">
            Transforming Complex Workflows into Autonomous Code
          </h3>
          <p className="text-xs text-zinc-400 leading-relaxed">
            I build end-to-end applied AI systems that remove operational friction for real businesses. As the founder of{" "}
            <span className="text-sky-300 font-medium">Pradrix</span>, I consult, architect, and deploy custom agentic automation engines.
          </p>
          <p className="text-xs text-zinc-400 leading-relaxed">
            Rather than jumping onto hype bandwagons, I analyze operational bottlenecks first, model the domain mathematically, and then implement reliable software and microservices.
          </p>
          <div className="pt-2 flex flex-wrap gap-1.5">
            <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-sky-950/50 border border-sky-800/50 text-sky-300">
              Pradrix AI
            </span>
            <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-300">
              Kavach Women Safety
            </span>
            <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-300">
              FastAPI & Microservices
            </span>
          </div>
        </div>
      </div>

      {/* Execution Loop & Builder Mindset */}
      <div className="rounded-xl border border-emerald-500/20 bg-zinc-950/80 p-5 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>03 // THE BUILDER&apos;S RECURSIVE LOOP</span>
          </div>
          <span className="text-[11px] font-mono text-zinc-500">O(1) Curiosity</span>
        </div>

        <div className="p-3.5 rounded-lg bg-zinc-900/80 border border-zinc-800/80 font-mono text-xs text-emerald-400 leading-relaxed overflow-x-auto">
          <code>{profileData.loop}</code>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 text-center font-mono">
          <div className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800">
            <div className="text-base font-bold text-white">NITJ</div>
            <div className="text-[10px] text-zinc-400">Class of 2027</div>
          </div>
          <div className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800">
            <div className="text-base font-bold text-emerald-400">Pradrix</div>
            <div className="text-[10px] text-zinc-400">Founder & Builder</div>
          </div>
          <div className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800">
            <div className="text-base font-bold text-sky-400">Kavach</div>
            <div className="text-[10px] text-zinc-400">Smart Band IoT</div>
          </div>
          <div className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800">
            <div className="text-base font-bold text-purple-400">Full Stack</div>
            <div className="text-[10px] text-zinc-400">Hardware → Cloud</div>
          </div>
        </div>
      </div>

      {/* Social & Verification Hub */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-xl border border-zinc-800 bg-zinc-950/50 text-xs font-mono">
        <span className="text-zinc-400">Verify telemetry & profiles:</span>
        <div className="flex flex-wrap items-center gap-2">
          {profileData.socialLinks.map((social) => (
            <a
              key={social.platform}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 py-1 rounded bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-300 hover:text-white flex items-center gap-1 transition-colors"
            >
              <span>{social.label}</span>
              <ExternalLink className="w-3 h-3 text-zinc-500" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
