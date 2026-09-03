"use client";

import * as React from "react";
import Image from "next/image";
import { Lock, ExternalLink, Play, Pause } from "lucide-react";
import { PRADRIX_CONFIG } from "@/config/pradrix";

interface PradrixMacBookProps {
  inView?: boolean;
}

export function PradrixMacBook({ inView = true }: PradrixMacBookProps) {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = React.useState<boolean>(true);

  // Play smoothly when in view, pause when out of view
  React.useEffect(() => {
    // Skip in JSDOM / test runner where HTMLMediaElement methods are not implemented
    if (
      typeof window === "undefined" ||
      (typeof navigator !== "undefined" && navigator.userAgent.includes("jsdom"))
    ) {
      return;
    }

    const video = videoRef.current;
    if (!video) return;

    if (inView) {
      video.muted = true;
      try {
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => setIsPlaying(true))
            .catch(() => {
              video.muted = true;
              video.play().then(() => setIsPlaying(true)).catch(() => {});
            });
        }
      } catch {}
    } else {
      try {
        video.pause();
      } catch {}
      setIsPlaying(false);
    }
  }, [inView]);

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play().then(() => setIsPlaying(true)).catch(() => {});
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="relative w-full select-none">
      {/* Physical MacBook Pro hardware image */}
      <Image
        src="/images/mac_mockup.png"
        alt="MacBook Pro showcasing the live Pradrix website"
        width={1624}
        height={969}
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1000px"
        className="w-full h-auto select-none pointer-events-none relative z-10 drop-shadow-2xl"
        draggable={false}
      />

      {/* 
        Coded screen content overlay:
        Bounding box: Top 3.5%, Left 15.21%, Width 69.4%, Height 73.2%
      */}
      <div
        className="absolute z-20 overflow-hidden rounded-t-[6px] sm:rounded-t-[8px] bg-[#0C0F14] flex flex-col"
        style={{
          top: "3.5%",
          left: "15.21%",
          width: "69.4%",
          height: "73.2%",
        }}
      >
        {/* Browser Top Navigation Bar */}
        <div className="h-[20px] sm:h-[24px] px-2.5 sm:px-3 bg-[#161B22] border-b border-white/[0.08] flex items-center justify-between text-[8px] sm:text-[9.5px] text-white/70 shrink-0 z-30">
          {/* Traffic Lights */}
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#FF5F56] border border-[#E0443E]/80" />
            <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#FFBD2E] border border-[#DEA123]/80" />
            <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#27C93F] border border-[#1AAB29]/80" />
          </div>

          {/* Centered URL pill */}
          <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-md bg-white/[0.06] border border-white/[0.08] text-white/80 max-w-[200px] truncate">
            <Lock className="w-2.5 h-2.5 text-emerald-400 shrink-0" />
            <span className="font-mono text-[8px] sm:text-[9.5px] tracking-wide text-white/90">
              pradrix.com
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse ml-0.5" />
          </div>

          {/* Direct link out to real Pradrix site */}
          <a
            href={PRADRIX_CONFIG.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-[8px] sm:text-[9px] text-[#D97706] hover:text-[#B45309] font-medium transition-colors"
            title="Open pradrix.com in new tab"
          >
            <span className="hidden sm:inline">Visit</span>
            <ExternalLink className="w-2.5 h-2.5" />
          </a>
        </div>

        {/* Video Screen Container with smooth continuous playback */}
        <div
          className="relative flex-1 w-full h-full overflow-hidden bg-[#0C0F14] group cursor-pointer"
          onClick={togglePlay}
        >
          <video
            ref={videoRef}
            src={PRADRIX_CONFIG.videoSrc}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover object-top"
          />

          {/* Subtle play/pause indicator on hover */}
          <button
            onClick={togglePlay}
            aria-label={isPlaying ? "Pause video" : "Play video"}
            className="absolute bottom-2 right-2 p-1.5 rounded-full bg-black/60 hover:bg-black/80 text-white/80 hover:text-white backdrop-blur-sm border border-white/10 transition-opacity opacity-0 group-hover:opacity-100 focus:opacity-100 z-30"
          >
            {isPlaying ? (
              <Pause className="w-3 h-3" />
            ) : (
              <Play className="w-3 h-3 translate-x-0.5" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
