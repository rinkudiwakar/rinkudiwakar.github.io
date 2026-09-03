import * as React from "react";
import Image from "next/image";
import { MacWindow } from "./MacWindow";

export function MacBookShowcase() {
  return (
    <div className="macbook-showcase relative w-full select-none">
      <div className="relative w-full">
        {/* Physical MacBook Pro hardware frame (1294 x 772) */}
        <Image
          src="/images/mac_mockup.png"
          alt="MacBook Pro hardware frame displaying Rinku's technical capabilities and engineering strengths"
          width={1294}
          height={772}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 65vw, 48vw"
          className="w-full h-auto select-none pointer-events-none relative z-10 drop-shadow-2xl"
          draggable={false}
        />

        {/* 
          Coded screen content overlay:
          Measured from mac_mockup.png (1294 x 772):
          Left: 16.07%, Width: 67.70%, Top: 6.48%, Height: 71.24%
        */}
        <div
          className="absolute z-20 overflow-hidden rounded-t-[4px] sm:rounded-t-[6px]"
          style={{
            top: "6.48%",
            left: "16.07%",
            width: "67.70%",
            height: "71.24%",
          }}
        >
          <MacWindow />
        </div>
      </div>
    </div>
  );
}
