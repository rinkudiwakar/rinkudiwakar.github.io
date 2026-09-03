import * as React from "react";
import Image from "next/image";

export function HeroPortrait() {
  return (
    <div className="hero-portrait relative w-full h-full flex items-start justify-center lg:justify-start">
      <div className="relative w-full max-w-[580px] lg:max-w-[620px] xl:max-w-[680px]">
        <Image
          src="/images/rinku_image.png"
          alt="Rinku Diwakar — artistic watercolor portrait with mountain elements, crown doodle, handwritten notes and signature"
          width={1536}
          height={1024}
          priority
          sizes="(max-width: 768px) 90vw, (max-width: 1024px) 50vw, 45vw"
          className="w-full h-auto object-contain select-none pointer-events-none mix-blend-multiply dark:mix-blend-normal [mask-image:radial-gradient(ellipse_at_center,black_70%,transparent_98%)] [-webkit-mask-image:radial-gradient(ellipse_at_center,black_70%,transparent_98%)]"
          draggable={false}
        />
      </div>
    </div>
  );
}
