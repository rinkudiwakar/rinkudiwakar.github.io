import * as React from "react";
import Image from "next/image";

export function HeroPortrait() {
  return (
    <div className="hero-portrait relative w-full flex items-center justify-center lg:justify-start">
      <div className="relative w-full max-w-[560px] sm:max-w-[620px] lg:max-w-[680px] xl:max-w-[740px]">
        <Image
          src="/images/rinku_image.png"
          alt="Rinku Diwakar — artistic watercolor portrait with mountain elements, crown doodle, handwritten notes and signature"
          width={1536}
          height={1024}
          priority
          sizes="(max-width: 768px) 95vw, (max-width: 1024px) 50vw, 48vw"
          className="w-full h-auto object-contain select-none pointer-events-none mix-blend-multiply dark:mix-blend-normal [mask-image:radial-gradient(ellipse_at_center,black_70%,transparent_98%)] [-webkit-mask-image:radial-gradient(ellipse_at_center,black_70%,transparent_98%)]"
          draggable={false}
        />
      </div>
    </div>
  );
}
