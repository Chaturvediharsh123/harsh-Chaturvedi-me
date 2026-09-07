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
        "paper-card rounded-[1.35rem] border border-[#d8d4ca] backdrop-blur-sm",
        "shadow-[0_12px_30px_rgba(22,32,25,0.045)]",
        hover &&
          "transition-all duration-300 hover:-translate-y-1 hover:border-[#0e6b4f]/40 hover:shadow-[0_18px_34px_rgba(22,32,25,0.10)]",
        className
      )}
    >
      {children}
    </div>
  );
}
