import * as React from "react";
import { cn } from "@/lib/utils/cn";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  as?: "section" | "article" | "div";
  containerSize?: "editorial" | "narrow" | "full";
}

export function Section({
  as: Component = "section",
  containerSize = "editorial",
  className,
  children,
  ...props
}: SectionProps) {
  const containerClasses = {
    editorial: "container-editorial",
    narrow: "container-narrow",
    full: "w-full px-6",
  };

  return (
    <Component className={cn("py-16 md:py-24", className)} {...props}>
      <div className={containerClasses[containerSize]}>{children}</div>
    </Component>
  );
}
