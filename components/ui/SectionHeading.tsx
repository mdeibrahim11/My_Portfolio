import React from "react";

interface SectionHeadingProps {
  floorNumber: string;
  floorLabel: string;
  title: string;
  highlightWord?: string;
  subtitle?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  floorNumber,
  floorLabel,
  title,
  highlightWord,
  subtitle,
  align = "left",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div className={`mb-12 md:mb-16 ${isCenter ? "text-center mx-auto max-w-3xl" : "max-w-2xl"}`}>
      {/* Numbered Section Label: Frosted Glass Pill */}
      <div className={`mb-3.5 ${isCenter ? "flex justify-center" : ""}`}>
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.05] backdrop-blur-2xl backdrop-saturate-[180%] border border-white/18 shadow-[inset_0_1px_1px_rgba(255,255,255,0.24),0_6px_20px_rgba(0,0,0,0.4)] text-xs font-anta tracking-widest">
          <span className="text-[#F53F06] font-bold drop-shadow-[0_0_10px_rgba(245,63,6,0.6)]">
            # {floorNumber}
          </span>
          <span className="text-white/25">•</span>
          <span className="uppercase text-[#A1A1AA] font-anta tracking-widest font-medium">
            {floorLabel}
          </span>
        </div>
      </div>

      {/* Main Title (Josefin Sans 700) */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display tracking-tight text-[#F5F5F5] leading-[1.15]">
        {title}{" "}
        {highlightWord && (
          <span className="gradient-text-primary">
            {highlightWord}
          </span>
        )}
      </h2>

      {/* Subtitle (Josefin Sans 300) */}
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-[#A1A1AA] font-light leading-relaxed max-w-xl">
          {subtitle}
        </p>
      )}

      {/* Glass Section Divider Line */}
      <div className="mt-6 section-divider" />
    </div>
  );
}
