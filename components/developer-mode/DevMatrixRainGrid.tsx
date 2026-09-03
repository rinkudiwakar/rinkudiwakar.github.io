"use client";

import * as React from "react";

export function DevMatrixRainGrid() {
  const [matrixLines, setMatrixLines] = React.useState<string[]>([]);

  React.useEffect(() => {
    const chars = "0123456789ABCDEF$#@*+=-~<>{}[]/";
    const generateGrid = () => {
      const rows = 8;
      const cols = 22;
      const lines: string[] = [];
      for (let r = 0; r < rows; r++) {
        let line = "";
        for (let c = 0; c < cols; c++) {
          line += chars[Math.floor(Math.random() * chars.length)] + " ";
        }
        lines.push(line);
      }
      return lines;
    };

    setMatrixLines(generateGrid());

    const interval = setInterval(() => {
      setMatrixLines(generateGrid());
    }, 180);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-full flex flex-col bg-[#070b10] border border-zinc-800 rounded-xl overflow-hidden font-mono text-[10px] md:text-[11px] select-none shadow-lg">
      <div className="px-3 py-2 bg-[#0c1017] border-b border-zinc-800 flex items-center justify-between text-zinc-400">
        <span className="text-[10px] font-bold text-emerald-400">MATRIX.STREAM</span>
        <span className="text-[9px] text-zinc-500">live</span>
      </div>
      <div className="flex-1 p-3 overflow-hidden text-emerald-500/80 leading-relaxed font-bold flex flex-col justify-center">
        {matrixLines.map((line, idx) => (
          <div
            key={idx}
            className={`truncate transition-opacity duration-150 ${
              idx % 2 === 0 ? "text-emerald-400 drop-shadow-[0_0_5px_rgba(16,185,129,0.5)]" : "text-emerald-600/70"
            }`}
          >
            {line}
          </div>
        ))}
      </div>
    </div>
  );
}
