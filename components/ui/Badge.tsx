import * as React from "react";
import { cn } from "@/lib/utils/cn";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "accent" | "success" | "warning" | "mono";
}

export function Badge({
  className,
  variant = "default",
  children,
  ...props
}: BadgeProps) {
  const baseStyles =
    "inline-flex items-center text-xs font-medium px-2.5 py-0.5 rounded-[var(--radius-full)] transition-colors";

  const variantStyles = {
    default:
      "bg-[var(--background-subtle)] text-[var(--foreground-muted)] border border-[var(--border-subtle)]",
    accent:
      "bg-[var(--accent-subtle)] text-[var(--accent)] border border-[var(--accent-border)]",
    success:
      "bg-emerald-50 text-[var(--success)] border border-emerald-200 dark:bg-emerald-950/30 dark:border-emerald-800",
    warning:
      "bg-amber-50 text-[var(--warning)] border border-amber-200 dark:bg-amber-950/30 dark:border-amber-800",
    mono: "font-mono bg-[var(--background-subtle)] text-[var(--foreground)] border border-[var(--border)]",
  };

  return (
    <span className={cn(baseStyles, variantStyles[variant], className)} {...props}>
      {children}
    </span>
  );
}
