"use client";

import * as React from "react";

export function Arrival({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      className={`transition-all duration-500 ease-out motion-reduce:transition-none motion-reduce:transform-none ${
        mounted ? "opacity-100 translate-y-0" : "opacity-95 translate-y-1"
      }`}
    >
      {children}
    </div>
  );
}
