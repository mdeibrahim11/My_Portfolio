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
      {/* Numbered Section Label: e.g. # 001 — Home */}
      <div
        className={`inline-flex items-center gap-2.5 mb-3 text-xs font-anta tracking-widest text-[#71717A] ${
          isCenter ? "justify-center" : ""
        }`}
      >
        <span className="text-[#F53F06] font-bold"># {floorNumber}</span>
        <span className="text-white/20">—</span>
        <span className="uppercase text-[#A1A1AA] font-anta tracking-widest">{floorLabel}</span>
      </div>

      {/* Main Title (Josefin Sans 700) */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display tracking-tight text-[#F5F5F5] leading-[1.15]">
        {title}{" "}
        {highlightWord && (
          <span className="text-[#F53F06]">
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

      {/* Thin Divider Line (rgba(245, 245, 245, 0.10)) */}
      <div className="mt-6 w-full h-[1px] bg-white/10" />
    </div>
  );
}
