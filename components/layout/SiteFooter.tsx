"use client";

import React from "react";
import { ArrowUp } from "lucide-react";
import { PERSONAL_INFO } from "@/lib/portfolio-data";

export function SiteFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/16 bg-black/50 backdrop-blur-3xl backdrop-saturate-[200%] py-12 pb-24 lg:pb-12 text-xs font-anta text-[#71717A] shadow-[0_-16px_45px_rgba(0,0,0,0.8),inset_0_1px_0_0_rgba(255,255,255,0.14)]">
      {/* Top Specular Edge Line */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-white/12">
          {/* Brand & Status */}
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#F53F06] animate-pulse shadow-[0_0_8px_#F53F06]" />
            <span className="text-[#F5F5F5] font-display font-bold tracking-tight text-sm">
              {PERSONAL_INFO.name}
            </span>
            <span className="text-white/20">|</span>
            <span className="text-[#A1A1AA]">Open to Work</span>
          </div>

          {/* Scroll to Top button - Frosted Glass Pill */}
          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="group flex items-center gap-2 px-4 py-2 rounded-2xl bg-white/[0.05] backdrop-blur-xl border border-white/16 hover:border-[#F53F06]/55 hover:bg-white/[0.09] text-[#A1A1AA] hover:text-[#F5F5F5] shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] hover:shadow-[0_0_20px_rgba(245,63,6,0.25)] transition-all cursor-pointer font-anta text-xs hover:-translate-y-0.5"
          >
            <ArrowUp className="w-3.5 h-3.5 text-[#F53F06] group-hover:-translate-y-0.5 transition-transform" />
            <span>BACK TO TOP</span>
          </button>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-[11px]">
          <p className="text-[#71717A]">
            © 2026 {PERSONAL_INFO.name}. All rights reserved.
          </p>

          <div className="flex items-center gap-2 text-[#A1A1AA]">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 rounded-xl bg-white/[0.035] backdrop-blur-md border border-white/12 hover:border-[#F53F06]/50 hover:text-white transition-all"
            >
              GitHub
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 rounded-xl bg-white/[0.035] backdrop-blur-md border border-white/12 hover:border-[#F53F06]/50 hover:text-white transition-all"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="px-3 py-1 rounded-xl bg-white/[0.035] backdrop-blur-md border border-white/12 hover:border-[#F53F06]/50 hover:text-white transition-all"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
