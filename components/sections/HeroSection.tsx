"use client";

import React from "react";
import { PERSONAL_INFO } from "@/lib/portfolio-data";
import { HeroVisual3D } from "@/components/3d/HeroVisual3D";
import { ArrowDown, Code2, Send } from "lucide-react";

export function HeroSection() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const headerOffset = 84;
      const elementPosition = el.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="hero"
      aria-label="Overview Section"
      className="relative min-h-[92vh] flex flex-col justify-center pt-28 pb-16 sm:pt-36 sm:pb-20 lg:pt-32 lg:pb-20 overflow-hidden"
    >
      {/* Subtle, localized orange-red ambient glow */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#F53F06]/[0.06] blur-[150px] pointer-events-none" />

      {/* Subtle Grid Background overlay */}
      <div className="absolute inset-0 bg-cyber-grid opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Personal Title & CTAs (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Availability / System Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-xs font-anta text-[#A1A1AA] mb-6 backdrop-blur-md">
              <span className="flex h-2 w-2 rounded-full bg-[#F53F06] animate-pulse" />
              <span className="text-[#71717A]">SYS:ONLINE</span>
              <span className="text-white/20">|</span>
              <span className="text-[#F5F5F5] font-medium">{PERSONAL_INFO.status}</span>
            </div>

            {/* Tagline Indicator */}
            <p className="text-sm font-anta text-[#71717A] tracking-wider mb-2">
              # 001 // SYSTEM OVERVIEW
            </p>

            {/* Primary Display Heading (Josefin Sans 700) */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold font-display tracking-tight text-[#F5F5F5] leading-[1.08] mb-6">
              Hello, I&apos;m{" "}
              <span className="text-[#F53F06]">
                {PERSONAL_INFO.name}
              </span>
            </h1>

            {/* Professional Role (Josefin Sans 600) */}
            <div className="flex items-center gap-3 text-lg sm:text-2xl font-semibold text-[#F5F5F5] mb-6 font-display">
              <span className="text-[#F53F06]">✦</span>
              <p>{PERSONAL_INFO.title}</p>
            </div>

            {/* Concise Authentic Introduction (Josefin Sans 300) */}
            <p className="text-base sm:text-lg text-[#A1A1AA] font-light max-w-xl leading-relaxed mb-8">
              {PERSONAL_INFO.shortBio}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <button
                onClick={() => scrollTo("projects")}
                className="group relative inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-[#000000] bg-[#F5F5F5] hover:bg-[#F53F06] hover:text-white transition-all duration-200 cursor-pointer shadow-lg shadow-black/50"
              >
                <Code2 className="w-4 h-4 text-[#000000] group-hover:text-white transition-colors" />
                <span>View Projects</span>
              </button>

              <button
                onClick={() => scrollTo("contact")}
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-medium text-sm text-[#F5F5F5] bg-transparent border border-white/15 hover:border-[#F53F06] hover:text-[#F53F06] transition-all duration-200 cursor-pointer"
              >
                <Send className="w-3.5 h-3.5 text-[#F53F06]" />
                <span>Contact Me</span>
              </button>
            </div>

            {/* Core Tech Stack in Anta font */}
            <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center gap-2 text-xs">
              <span className="text-[#71717A] font-anta">CORE STACK:</span>
              {["Python / Django", "FastAPI", "PostgreSQL", "Docker", "Linux", "REST APIs"].map((tech, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/10 text-[#A1A1AA] font-anta hover:border-[#F53F06]/50 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive 3D Visual (5 cols) */}
          <div className="lg:col-span-5 flex items-center justify-center w-full">
            <HeroVisual3D />
          </div>
        </div>

        {/* Scroll Indicator at bottom */}
        <div className="mt-12 lg:mt-8 flex flex-col items-center justify-center">
          <button
            onClick={() => scrollTo("about")}
            aria-label="Scroll to About Me section"
            className="group flex flex-col items-center gap-2 text-[#71717A] hover:text-[#F53F06] transition-colors cursor-pointer"
          >
            <span className="text-[10px] font-anta tracking-widest uppercase">
              SCROLL TO EXPLORE
            </span>
            <div className="p-2 rounded-full bg-white/[0.03] border border-white/10 group-hover:border-[#F53F06]/50 transition-all">
              <ArrowDown className="w-4 h-4 animate-bounce text-[#F53F06]" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
