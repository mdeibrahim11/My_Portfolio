"use client";

import React from "react";
import { ArrowUp } from "lucide-react";
import { PERSONAL_INFO } from "@/lib/portfolio-data";

export function SiteFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/[0.12] bg-[#090B12] py-12 pb-24 lg:pb-12 text-xs font-mono text-[#A1A1AA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-white/[0.12]">
          {/* Brand & Terminal Status */}
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#FF7A00] animate-pulse" />
            <span className="text-[#F5F5F5] font-semibold tracking-tight">
              {PERSONAL_INFO.name}
            </span>
            <span className="text-white/20">|</span>
            <span className="text-white/40">STATUS: NOMINAL</span>
          </div>

          {/* Scroll to Top button */}
          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="group flex items-center gap-2 px-3.5 py-1.5 rounded-2xl bg-white/[0.05] border border-white/[0.12] hover:border-[#F53F06]/50 hover:bg-white/[0.08] text-white/70 hover:text-white transition-all cursor-pointer"
          >
            <ArrowUp className="w-3.5 h-3.5 text-[#FF7A00] group-hover:-translate-y-0.5 transition-transform" />
            <span>BACK TO TOP</span>
          </button>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-[11px]">
          <p className="text-white/40">
            © 2026 {PERSONAL_INFO.name}. Built with Next.js 16, React 19 &amp; Tailwind CSS v4.
          </p>

          <div className="flex items-center gap-4 text-white/60">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FF7A00] transition-colors"
            >
              GitHub
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FF7A00] transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="hover:text-[#FF7A00] transition-colors"
            >
              Email Dispatch
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
