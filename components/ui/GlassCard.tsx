import React from "react";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "elevated" | "accent-flame" | "accent-amber" | "accent-violet" | "accent-cyan" | "interactive";
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
    default: "bg-white/[0.05] border-white/[0.12] hover:border-white/[0.2]",
    elevated: "bg-[#101523]/85 border-white/[0.12] shadow-2xl shadow-black/40",
    "accent-flame": "bg-[#F53F06]/[0.08] border-[#F53F06]/30 hover:border-[#F53F06]/50",
    "accent-amber": "bg-[#FF7A00]/[0.08] border-[#FF7A00]/30 hover:border-[#FF7A00]/50",
    "accent-violet": "bg-[#F53F06]/[0.08] border-[#F53F06]/30 hover:border-[#F53F06]/50",
    "accent-cyan": "bg-[#FF7A00]/[0.08] border-[#FF7A00]/30 hover:border-[#FF7A00]/50",
    interactive:
      "bg-white/[0.05] border-white/[0.12] hover:bg-white/[0.08] hover:border-[#F53F06]/40 hover:shadow-lg hover:shadow-[#F53F06]/10 hover:-translate-y-1 transition-all duration-300",
  };

  return (
    <div
      className={`relative rounded-2xl backdrop-blur-md border ${variantStyles[variant]} transition-all duration-300 ${className}`}
      {...props}
    >
      {glow && (
        <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-[#F53F06]/15 to-[#FF7A00]/15 opacity-60 blur-sm pointer-events-none -z-10" />
      )}
      {children}
    </div>
  );
}
