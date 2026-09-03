import * as React from "react";
import Image from "next/image";

export function HeroPortrait() {
  return (
    <div className="hero-portrait relative w-full flex items-center justify-center lg:justify-start">
      <div className="relative w-full max-w-[580px] sm:max-w-[640px] lg:max-w-[700px] xl:max-w-[760px]">
        <Image
          src="/images/rinku_image.png"
          alt="Rinku Diwakar — artistic watercolor portrait with mountain elements, crown doodle, handwritten notes and signature"
          width={1536}
          height={1024}
          priority
          sizes="(max-width: 768px) 95vw, (max-width: 1024px) 55vw, 50vw"
          className="w-full h-auto object-contain select-none pointer-events-none mix-blend-multiply dark:mix-blend-normal [mask-image:radial-gradient(ellipse_at_center,black_75%,transparent_98%)] [-webkit-mask-image:radial-gradient(ellipse_at_center,black_75%,transparent_98%)]"
          draggable={false}
        />
      </div>
    </div>
  );
}
