import React from "react";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "elevated" | "primary" | "secondary" | "accent-flame" | "interactive" | "dock";
  glow?: boolean;
  glowColor?: "primary" | "secondary" | "duo";
  shimmer?: boolean;
}

export function GlassCard({
  children,
  className = "",
  variant = "default",
  glow = false,
  glowColor = "primary",
  shimmer = false,
  ...props
}: GlassCardProps) {
  const variantStyles: Record<string, string> = {
    default:
      "bg-[var(--gradient-card-default)] backdrop-blur-2xl backdrop-saturate-[190%] border-white/13 shadow-[0_18px_45px_-10px_rgba(0,0,0,0.65),inset_0_1px_1px_0_rgba(255,255,255,0.22)] hover:border-white/25 hover:shadow-[0_24px_55px_-10px_rgba(0,0,0,0.75)]",
    elevated:
      "bg-[var(--gradient-card-elevated)] backdrop-blur-3xl backdrop-saturate-[200%] border-white/16 shadow-[0_28px_65px_-15px_rgba(0,0,0,0.8),inset_0_1px_1.5px_0_rgba(255,255,255,0.28),inset_0_-1px_1px_0_rgba(0,0,0,0.45)] hover:border-white/30 hover:shadow-[0_34px_75px_-15px_rgba(0,0,0,0.9),0_0_35px_-8px_rgba(245,63,6,0.22)]",
    primary:
      "bg-[var(--gradient-card-primary)] backdrop-blur-2xl backdrop-saturate-[200%] border-[#F53F06]/38 shadow-[0_20px_50px_rgba(245,63,6,0.18),inset_0_1px_1.5px_0_rgba(255,255,255,0.32)] hover:border-[#F53F06]/65 hover:shadow-[0_28px_65px_rgba(245,63,6,0.32)]",
    "accent-flame":
      "bg-[var(--gradient-card-primary)] backdrop-blur-2xl backdrop-saturate-[200%] border-[#F53F06]/40 shadow-[0_20px_50px_rgba(245,63,6,0.2),inset_0_1px_1.5px_0_rgba(255,255,255,0.35)] hover:border-[#F53F06]/65 hover:shadow-[0_25px_60px_rgba(245,63,6,0.32)]",
    secondary:
      "bg-[var(--gradient-card-secondary)] backdrop-blur-2xl backdrop-saturate-[200%] border-[#6366F1]/38 shadow-[0_20px_50px_rgba(99,102,241,0.18),inset_0_1px_1.5px_0_rgba(255,255,255,0.32)] hover:border-[#6366F1]/65 hover:shadow-[0_28px_65px_rgba(99,102,241,0.32)]",
    interactive:
      "bg-[var(--gradient-card-interactive)] backdrop-blur-2xl backdrop-saturate-[190%] border-white/14 shadow-[0_18px_45px_-10px_rgba(0,0,0,0.65),inset_0_1px_1px_0_rgba(255,255,255,0.22)] hover:border-[#F53F06]/55 hover:shadow-[0_28px_65px_-12px_rgba(0,0,0,0.85),0_0_38px_-5px_rgba(245,63,6,0.26),inset_0_1px_2px_0_rgba(255,255,255,0.4)] hover:-translate-y-1.5 transition-all duration-300",
    dock:
      "bg-gradient-to-r from-white/[0.09] via-white/[0.03] to-white/[0.09] backdrop-blur-3xl backdrop-saturate-[200%] border-white/18 shadow-[0_16px_40px_rgba(0,0,0,0.6),inset_0_1px_1px_0_rgba(255,255,255,0.28)]",
  };

  const glowStyles: Record<string, string> = {
    primary: "bg-[#F53F06]/18 opacity-80 blur-xl",
    secondary: "bg-[#6366F1]/18 opacity-80 blur-xl",
    duo: "bg-gradient-to-r from-[#F53F06]/18 to-[#6366F1]/18 opacity-80 blur-xl",
  };

  return (
    <div
      className={`relative rounded-3xl border ${variantStyles[variant] || variantStyles.default} ${shimmer ? "specular-sheen" : ""
        } transition-all duration-300 ${className}`}
      {...props}
    >
      {/* Top Specular Rim Highlight for realistic optical glass thickness */}
      <div className="absolute inset-x-6 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none rounded-t-3xl" />

      {glow && (
        <div className={`absolute -inset-px rounded-3xl ${glowStyles[glowColor] || glowStyles.primary} pointer-events-none -z-10`} />
      )}
      {children}
    </div>
  );
}

