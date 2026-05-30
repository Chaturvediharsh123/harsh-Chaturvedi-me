import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function GlassCard({
  children,
  className,
  hover = false,
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl",
        "shadow-[0_8px_32px_rgba(0,0,0,0.3)]",
        hover &&
          "transition-all duration-300 hover:border-indigo-500/30 hover:bg-white/[0.08] hover:shadow-[0_8px_32px_rgba(99,102,241,0.15)]",
        className
      )}
    >
      {children}
    </div>
  );
}
