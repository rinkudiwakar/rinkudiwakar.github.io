import * as React from "react";
import { cn } from "@/lib/utils/cn";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = "primary", size = "md", children, ...props },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-offset-2";

    const variantStyles = {
      primary:
        "bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] shadow-[var(--shadow-subtle)] active:translate-y-px",
      secondary:
        "bg-[var(--background-subtle)] text-[var(--foreground)] hover:bg-[var(--border)] active:translate-y-px",
      outline:
        "border border-[var(--border)] bg-transparent text-[var(--foreground)] hover:bg-[var(--background-subtle)] hover:border-[var(--border-strong)]",
      ghost:
        "bg-transparent text-[var(--foreground)] hover:bg-[var(--background-subtle)]",
    };

    const sizeStyles = {
      sm: "text-xs px-3 py-1.5 rounded-[var(--radius-sm)] gap-1.5",
      md: "text-sm px-4 py-2 rounded-[var(--radius-md)] gap-2",
      lg: "text-base px-6 py-3 rounded-[var(--radius-lg)] gap-2.5",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
