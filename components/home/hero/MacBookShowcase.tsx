import * as React from "react";
import Image from "next/image";
import { MacWindow } from "./MacWindow";

export function MacBookShowcase() {
  return (
    <div className="macbook-showcase relative w-full select-none">
      <div className="relative w-full laptop-floating motion-reduce:animate-none">
        {/* Physical MacBook Pro hardware image (1624 x 969) */}
        <Image
          src="/images/mac_mockup.png"
          alt="MacBook Pro hardware frame displaying Rinku's technical capabilities and engineering strengths"
          width={1624}
          height={969}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 65vw, 48vw"
          className="w-full h-auto select-none pointer-events-none relative z-10 drop-shadow-2xl"
          draggable={false}
        />

        {/* 
          Coded screen content overlay:
          Precise bounding box measured from mac_mockup.png (1624 x 969):
          Left: 247px -> 15.21%
          Width: 1127px -> 69.4%
          Top: 32px -> 3.3%
          Height: 712px -> 73.2%
        */}
        <div
          className="absolute z-20 overflow-hidden rounded-t-[6px] sm:rounded-t-[8px]"
          style={{
            top: "3.5%",
            left: "15.21%",
            width: "69.4%",
            height: "73.2%",
          }}
        >
          <MacWindow />
        </div>
      </div>
    </div>
  );
}
