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
      {/* Section Indicator Pill */}
      <div
        className={`inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/[0.12] text-xs font-mono tracking-widest text-[#FF7A00] mb-4 ${isCenter ? "justify-center" : ""
          }`}
      >
        <span className="flex h-2 w-2 rounded-full bg-[#F53F06] animate-pulse" />
        <span className="text-white/60 font-semibold">SECTION {floorNumber}</span>
        <span className="text-white/20">/</span>
        <span className="uppercase text-[#FF7A00]">{floorLabel}</span>
      </div>

      {/* Main Title */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display tracking-tight text-[#F5F5F5] leading-[1.15]">
        {title}{" "}
        {highlightWord && (
          <span className="bg-gradient-to-r from-[#F53F06] via-[#FF5722] to-[#FF7A00] bg-clip-text text-transparent">
            {highlightWord}
          </span>
        )}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-[#A1A1AA] leading-relaxed max-w-xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
