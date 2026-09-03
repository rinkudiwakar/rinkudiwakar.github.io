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
              // Retry with guaranteed muted state for browser autoplay policy
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
      {/* Physical MacBook Pro hardware frame (1294 x 772) */}
      <Image
        src="/images/mac_mockup.png"
        alt="MacBook Pro showcasing the live Pradrix website"
        width={1294}
        height={772}
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1100px"
        className="w-full h-auto select-none pointer-events-none relative z-10 drop-shadow-2xl"
        draggable={false}
      />

      {/* 
        Coded screen content overlay:
        Exact measured screen bezel coordinates from 1294 x 772:
        Top: 50px / 772 = 6.48%
        Left: 208px / 1294 = 16.07%
        Width: 876px / 1294 = 67.70%
        Height: 550px / 772 = 71.24%
        Guarantees zero bleed outside the physical MacBook frame
      */}
      <div
        className="absolute z-20 overflow-hidden rounded-t-[4px] sm:rounded-t-[6px] flex flex-col"
        style={{
          top: "6.48%",
          left: "16.07%",
          width: "67.70%",
          height: "71.24%",
          background: "linear-gradient(145deg, #1c2333 0%, #111622 45%, #0a0d14 100%)",
        }}
      >
        {/* macOS Desktop Wallpaper with rich ambient glows */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `
              radial-gradient(circle at 50% 20%, rgba(217, 119, 6, 0.24), transparent 55%),
              radial-gradient(circle at 82% 80%, rgba(59, 130, 246, 0.2), transparent 45%),
              radial-gradient(circle at 18% 70%, rgba(168, 85, 247, 0.15), transparent 40%)
            `,
          }}
          aria-hidden="true"
        />

        {/* macOS Top Menu Bar */}
        <div className="h-[14px] sm:h-[16px] md:h-[18px] px-2.5 sm:px-3 bg-black/45 backdrop-blur-md border-b border-white/[0.08] flex items-center justify-between text-[7px] sm:text-[8px] md:text-[9px] text-white/80 shrink-0 z-30 select-none">
          <div className="flex items-center gap-2 sm:gap-2.5">
            <span className="font-semibold text-white/95"></span>
            <span className="font-medium text-white/95">Safari</span>
            <span className="hidden sm:inline text-white/50">File</span>
            <span className="hidden sm:inline text-white/50">Edit</span>
            <span className="hidden sm:inline text-white/50">View</span>
            <span className="hidden sm:inline text-white/50">History</span>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2 text-white/75">
            <span className="font-mono text-[6.5px] sm:text-[7.5px] md:text-[8.5px]">9:41 AM</span>
          </div>
        </div>

        {/* 
          Desktop Workspace with generous space from all sides:
          Top, bottom, left, and right all have clear breathing room around the window
        */}
        <div className="flex-1 w-full p-2.5 sm:p-3 md:p-4 lg:p-5 xl:p-6 flex items-center justify-center overflow-hidden z-20">
          {/* 
            Floating macOS Application Window:
            Rounded corners, macOS drop shadow, crisp border, and playing video
          */}
          <div
            className="w-full h-full rounded-[6px] sm:rounded-[8px] md:rounded-[10px] overflow-hidden border border-white/[0.22] bg-[#0C0F14] shadow-[0_12px_36px_rgba(0,0,0,0.85),0_0_0_1px_rgba(255,255,255,0.08)] flex flex-col z-20 group cursor-pointer"
            onClick={togglePlay}
          >
            {/* macOS Window Title Bar */}
            <div className="h-[18px] sm:h-[22px] md:h-[25px] px-2 sm:px-2.5 md:px-3 bg-[#181D26]/95 backdrop-blur-md border-b border-white/[0.09] flex items-center justify-between shrink-0 z-30 select-none">
              {/* Traffic Lights */}
              <div className="flex items-center gap-1 sm:gap-1.5" aria-hidden="true">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 rounded-full bg-[#FF5F56] border border-[#E0443E]/80 shadow-sm" />
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 rounded-full bg-[#FFBD2E] border border-[#DEA123]/80 shadow-sm" />
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 rounded-full bg-[#27C93F] border border-[#1AAB29]/80 shadow-sm" />
              </div>

              {/* Centered URL Bar Pill */}
              <div className="flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-0.5 rounded-full bg-white/[0.08] border border-white/[0.1] text-white/95 shadow-inner">
                <Lock className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-emerald-400 shrink-0" />
                <span className="font-mono text-[7px] sm:text-[8.5px] md:text-[9.5px] tracking-wide text-white/95">
                  pradrix.com
                </span>
                <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-emerald-400 animate-pulse ml-0.5" />
              </div>

              {/* Visit Link */}
              <a
                href={PRADRIX_CONFIG.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-1 text-[7px] sm:text-[8.5px] md:text-[9.5px] text-[#D97706] hover:text-[#F59E0B] font-medium transition-colors"
                title="Open pradrix.com in new tab"
              >
                <span className="hidden sm:inline font-sans">Visit</span>
                <ExternalLink className="w-2 h-2 sm:w-2.5 sm:h-2.5" />
              </a>
            </div>

            {/* Video Viewport inside the floating window — Continuously Playing */}
            <div className="relative flex-1 w-full h-full overflow-hidden bg-[#0C0F14]">
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

              {/* Hover indicator for play/pause */}
              <button
                onClick={togglePlay}
                aria-label={isPlaying ? "Pause video" : "Play video"}
                className="absolute bottom-2 right-2 p-1 sm:p-1.5 rounded-full bg-black/60 hover:bg-black/80 text-white/80 hover:text-white backdrop-blur-sm border border-white/10 transition-opacity opacity-0 group-hover:opacity-100 focus:opacity-100 z-30"
              >
                {isPlaying ? (
                  <Pause className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                ) : (
                  <Play className="w-2.5 h-2.5 sm:w-3 sm:h-3 translate-x-0.5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
