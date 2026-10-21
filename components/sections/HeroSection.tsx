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
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#F53F06]/[0.08] blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] rounded-full bg-[#FF7A00]/[0.06] blur-[120px] pointer-events-none" />

      {/* Cyber Grid Background overlay */}
      <div className="absolute inset-0 bg-cyber-grid opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Personal Title & CTAs (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Availability / System Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.05] border border-white/[0.12] text-xs font-mono text-[#F5F5F5] mb-6 backdrop-blur-md">
              <span className="flex h-2 w-2 rounded-full bg-[#34D399] animate-pulse" />
              <span className="text-white/60">SYS:ONLINE</span>
              <span className="text-white/20">|</span>
              <span className="text-[#34D399] font-medium">{PERSONAL_INFO.status}</span>
            </div>

            {/* Greeting & Name */}
            <p className="text-sm sm:text-base font-mono text-[#FF7A00] tracking-wide mb-2">
              &lt;developer-profile /&gt;
            </p>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-display tracking-tight text-[#F5F5F5] leading-[1.1] mb-6">
              Hello, I&apos;m{" "}
              <span className="bg-gradient-to-r from-[#F53F06] via-[#FF5722] to-[#FF7A00] bg-clip-text text-transparent">
                {PERSONAL_INFO.name}
              </span>
            </h1>

            {/* Role / Subheading */}
            <div className="flex items-center gap-3 text-lg sm:text-2xl font-medium text-white/90 mb-6">
              <span className="text-[#F53F06]">✦</span>
              <p>{PERSONAL_INFO.title}</p>
            </div>

            {/* Concise Compelling Intro */}
            <p className="text-base sm:text-lg text-[#A1A1AA] max-w-xl leading-relaxed mb-8">
              {PERSONAL_INFO.shortBio}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <button
                onClick={() => scrollTo("projects")}
                className="group relative inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl font-medium text-sm text-[#090B12] bg-[#F5F5F5] hover:bg-white hover:shadow-xl hover:shadow-[#F53F06]/20 active:scale-95 transition-all duration-200"
              >
                <Code2 className="w-4 h-4 text-[#F53F06]" />
                <span>View Projects</span>
              </button>

              <button
                onClick={() => scrollTo("contact")}
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl font-medium text-sm text-[#F5F5F5] bg-white/[0.05] border border-white/[0.12] hover:border-[#F53F06]/50 hover:bg-white/[0.08] active:scale-95 transition-all duration-200 backdrop-blur-md"
              >
                <Send className="w-3.5 h-3.5 text-[#FF7A00]" />
                <span>Contact Me</span>
              </button>
            </div>

            {/* Tech chips snippet */}
            <div className="mt-10 pt-6 border-t border-white/[0.12] flex flex-wrap items-center gap-2 text-xs font-mono text-white/50">
              <span className="text-[#71717A]">CORE STACK:</span>
              <span className="px-2.5 py-1 rounded-xl bg-white/[0.05] border border-white/[0.12] text-[#A1A1AA]">Python / Django</span>
              <span className="px-2.5 py-1 rounded-xl bg-white/[0.05] border border-white/[0.12] text-[#A1A1AA]">FastAPI</span>
              <span className="px-2.5 py-1 rounded-xl bg-white/[0.05] border border-white/[0.12] text-[#A1A1AA]">PostgreSQL</span>
              <span className="px-2.5 py-1 rounded-xl bg-white/[0.05] border border-white/[0.12] text-[#A1A1AA]">Docker</span>
              <span className="px-2.5 py-1 rounded-xl bg-white/[0.05] border border-white/[0.12] text-[#A1A1AA]">Linux</span>
              <span className="px-2.5 py-1 rounded-xl bg-white/[0.05] border border-white/[0.12] text-[#A1A1AA]">Tailwind CSS</span>
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
            className="group flex flex-col items-center gap-2 text-white/40 hover:text-[#FF7A00] transition-colors"
          >
            <span className="text-[10px] font-mono tracking-widest uppercase">
              SCROLL TO EXPLORE
            </span>
            <div className="p-2 rounded-full bg-white/[0.05] border border-white/[0.12] group-hover:border-[#FF7A00]/40 group-hover:bg-white/[0.08] transition-all">
              <ArrowDown className="w-4 h-4 animate-bounce text-[#F53F06]" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
