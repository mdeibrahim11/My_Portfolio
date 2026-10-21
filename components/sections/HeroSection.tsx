"use client";

import React from "react";
import { PERSONAL_INFO } from "@/lib/portfolio-data";
import { HeroVisual3D } from "@/components/3d/HeroVisual3D";
import { ArrowDown, Code2, Send, Download } from "lucide-react";

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
      className="relative min-h-[94vh] flex flex-col justify-center pt-28 pb-16 sm:pt-36 sm:pb-20 lg:pt-32 lg:pb-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Personal Title & CTAs (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Availability / System Status Pill - Frosted Glass Capsule */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.05] backdrop-blur-2xl backdrop-saturate-[180%] border border-[#F53F06]/30 text-xs font-anta text-[#A1A1AA] mb-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),0_10px_28px_rgba(0,0,0,0.5),0_0_20px_rgba(245,63,6,0.15)]">
              <span className="flex h-2 w-2 rounded-full bg-[#F53F06] animate-pulse shadow-[0_0_10px_#F53F06]" />
              <span className="text-[#A1A1AA]">SYS:ONLINE</span>
              <span className="text-white/20">|</span>
              <span className="text-[#F5F5F5] font-medium">{PERSONAL_INFO.status}</span>
            </div>

            {/* Primary Display Heading (Josefin Sans 700) */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold font-display tracking-tight text-[#F5F5F5] leading-[1.08] mb-4">
              Hello, I&apos;m{" "}
              <span className="gradient-text-primary">
                {PERSONAL_INFO.name}
              </span>
            </h1>

            {/* Professional Role (Josefin Sans 600) */}
            <div className="flex items-center gap-2.5 text-lg sm:text-2xl font-semibold text-[#F5F5F5] mb-5 font-display">
              <span className="text-[#F53F06] drop-shadow-[0_0_10px_rgba(245,63,6,0.7)]">✦</span>
              <p>{PERSONAL_INFO.title}</p>
            </div>

            {/* Concise Authentic Introduction (Josefin Sans 300) */}
            <p className="text-base sm:text-lg text-[#A1A1AA] font-light max-w-xl leading-relaxed mb-8">
              Architecting high-performance backend systems, scalable RESTful APIs, and distributed database architectures.
            </p>

            {/* Action Buttons - Frosted Glass & Gradient Elements */}
            <div className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto">
              <button
                onClick={() => scrollTo("projects")}
                className="glass-btn-primary group relative inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl font-semibold text-sm text-white cursor-pointer"
              >
                <Code2 className="w-4 h-4 text-white" />
                <span>View Projects</span>
              </button>

              <a
                href={PERSONAL_INFO.resumeUrl}
                download="MD_EIBRAHIM_MOLLA_CV.pdf"
                className="glass-btn-secondary group inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl font-medium text-sm text-[#F5F5F5] cursor-pointer"
              >
                <Download className="w-4 h-4 text-[#F53F06] group-hover:scale-110 transition-transform" />
                <span>Download CV</span>
              </a>

              <button
                onClick={() => scrollTo("contact")}
                className="group inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl font-medium text-sm text-[#A1A1AA] bg-white/[0.035] backdrop-blur-xl border border-white/14 hover:border-[#6366F1]/50 hover:text-white hover:bg-white/[0.08] shadow-[inset_0_1px_1px_rgba(255,255,255,0.18)] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
              >
                <Send className="w-3.5 h-3.5 text-[#6366F1]" />
                <span>Contact</span>
              </button>
            </div>

            {/* Core Tech Stack - Frosted Glass Chips */}
            <div className="mt-8 pt-5 border-t border-white/12 flex flex-wrap items-center gap-2 text-xs">
              <span className="text-[#71717A] font-anta">CORE STACK:</span>
              {["Python / Django", "FastAPI", "PostgreSQL", "Docker / Linux"].map((tech, i) => (
                <span
                  key={i}
                  className="px-3.5 py-1.5 rounded-xl bg-white/[0.045] backdrop-blur-xl border border-white/15 text-[#A1A1AA] font-anta shadow-[inset_0_1px_1px_rgba(255,255,255,0.18)] hover:border-[#F53F06]/55 hover:text-white hover:bg-white/[0.09] hover:shadow-[0_0_20px_rgba(245,63,6,0.3)] transition-all"
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
            <div className="p-2.5 rounded-full bg-white/[0.05] backdrop-blur-2xl border border-white/18 shadow-[0_10px_25px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.25)] group-hover:border-[#F53F06]/60 group-hover:shadow-[0_0_25px_rgba(245,63,6,0.4)] transition-all">
              <ArrowDown className="w-4 h-4 animate-bounce text-[#F53F06]" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
