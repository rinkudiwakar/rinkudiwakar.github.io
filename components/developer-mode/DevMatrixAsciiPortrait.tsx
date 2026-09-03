"use client";

import * as React from "react";

export function DevMatrixAsciiPortrait() {
  const asciiArt = `
           .---.
        .-'     '-.
       /           \\
      /   .-""-.    \\
     |   / .--. \\    |
     |  | ( () ) |   |
     |   \\ '--' /    |
      \\   '-..-'    /
       \\           /
      .-'         '-.
     /   |       |   \\
    /    |       |    \\
   /     |       |     \\
  /      |_______|      \\
 /                       \\
`;

  return (
    <div className="font-mono text-emerald-400 text-[10px] md:text-[11px] leading-[1.15] select-none shrink-0 p-3 rounded-xl bg-black/60 border border-emerald-500/20 shadow-[0_0_20px_rgba(16,185,129,0.15)] flex flex-col items-center justify-center">
      <pre className="text-emerald-400 drop-shadow-[0_0_8px_rgba(16,185,129,0.6)] font-bold">
        {asciiArt}
      </pre>
      <span className="text-[10px] text-emerald-500/70 tracking-widest uppercase mt-1">
        {"// RINKU.MATRIX"}
      </span>
    </div>
  );
}
