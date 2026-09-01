import * as React from "react";
import { cn } from "@/lib/utils/cn";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverable?: boolean;
}

export function Card({
  className,
  hoverable = false,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "bg-[var(--background-card)] border border-[var(--border)] rounded-[var(--radius-lg)] p-6 transition-all duration-200",
        hoverable &&
          "hover:border-[var(--border-strong)] hover:shadow-[var(--shadow-card)]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
