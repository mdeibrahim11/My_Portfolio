import React from "react";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "elevated" | "accent-flame" | "interactive";
  glow?: boolean;
}

export function GlassCard({
  children,
  className = "",
  variant = "default",
  glow = false,
  ...props
}: GlassCardProps) {
  const variantStyles = {
    default: "bg-white/[0.02] border-white/10 hover:border-white/20",
    elevated: "bg-[#080808] border-white/10 shadow-xl shadow-black/60",
    "accent-flame": "bg-[#F53F06]/[0.05] border-[#F53F06]/30 hover:border-[#F53F06]/50",
    interactive:
      "bg-[#080808] border-white/10 hover:border-[#F53F06]/50 transition-all duration-300",
  };

  return (
    <div
      className={`relative rounded-2xl border ${variantStyles[variant] || variantStyles.default} transition-all duration-200 ${className}`}
      {...props}
    >
      {glow && (
        <div className="absolute -inset-px rounded-2xl bg-[#F53F06]/10 opacity-60 blur-sm pointer-events-none -z-10" />
      )}
      {children}
    </div>
  );
}
