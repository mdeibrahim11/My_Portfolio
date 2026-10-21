import React from "react";
import Link from "next/link";
import { FEATURED_PROJECTS } from "@/lib/portfolio-data";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { AmbientLightingBackground } from "@/components/ui/AmbientLightingBackground";
import { GlassCard } from "@/components/ui/GlassCard";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects & Architecture | Md Eibrahim Molla",
  description:
    "Comprehensive engineering portfolio and architecture writeups by Md Eibrahim Molla - Software Engineer & Python Specialist.",
};

export default function ProjectsPage() {
  return (
    <div className="relative min-h-screen bg-[var(--color-bg)] text-[#F5F5F5] flex flex-col selection:bg-[#F53F06]/30 selection:text-[#F53F06]">
      {/* Full-Page Ambient Lighting & Cyber Grid System */}
      <AmbientLightingBackground />

      <SiteHeader />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 w-full relative z-10">
        {/* Navigation Breadcrumb / Return - Frosted Glass Capsule */}
        <div className="mb-8">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-xs font-anta text-[#A1A1AA] hover:text-[#F53F06] transition-all px-4 py-2 rounded-2xl bg-white/[0.05] backdrop-blur-xl border border-white/16 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] hover:border-[#F53F06]/50 hover:bg-white/[0.09] cursor-pointer hover:-translate-y-0.5"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-[#F53F06]" />
            <span>Return to Overview</span>
          </Link>
        </div>

        {/* Page Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.05] backdrop-blur-2xl border border-white/18 text-xs font-anta text-[#F53F06] mb-4 shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),0_6px_20px_rgba(0,0,0,0.4)]">
            <span className="w-2 h-2 rounded-full bg-[#F53F06] animate-pulse shadow-[0_0_8px_#F53F06]" />
            <span># 004 // ENGINEERING ARCHIVES</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display tracking-tight text-[#F5F5F5] mb-4">
            All Projects &amp; <span className="gradient-text-primary">Systems</span>
          </h1>
          <p className="text-base sm:text-lg text-[#A1A1AA] font-light max-w-2xl leading-relaxed">
            A comprehensive index of open-source software, Python systems, REST APIs, and full-stack solutions architected by Md Eibrahim Molla.
          </p>
          <div className="mt-8 section-divider" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {FEATURED_PROJECTS.map((project, idx) => (
            <GlassCard
              key={project.id}
              variant="elevated"
              glow
              glowColor={idx % 2 === 1 ? "secondary" : "primary"}
              shimmer
              className="p-6 sm:p-8 rounded-3xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/14">
                  <span className="text-xs font-anta text-[#F53F06] uppercase tracking-wider font-semibold drop-shadow-[0_0_10px_rgba(245,63,6,0.4)]">
                    {project.category}
                  </span>
                  <span className="text-xs font-anta px-3 py-1 rounded-full bg-white/[0.05] backdrop-blur-md border border-white/14 text-[#A1A1AA]">
                    # 00{idx + 1}
                  </span>
                </div>

                <h2 className="text-2xl font-bold font-display text-[#F5F5F5] mb-2">
                  {project.title}
                </h2>
                <p className="text-xs font-light text-[#A1A1AA] mb-4">{project.tagline}</p>
                <p className="text-sm text-[#A1A1AA] font-light leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="p-4 rounded-2xl bg-white/[0.045] backdrop-blur-xl border border-white/15 shadow-[inset_0_1px_1px_rgba(255,255,255,0.18)] mb-6 text-xs text-[#A1A1AA] font-light leading-relaxed">
                  <span className="font-semibold text-[#F5F5F5] font-display">Engineering Contribution: </span>
                  {project.role}
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-xl text-xs font-anta bg-white/[0.045] backdrop-blur-xl text-[#A1A1AA] border border-white/14 shadow-[inset_0_1px_1px_rgba(255,255,255,0.18)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/14 flex items-center justify-between">
                <a
                  href={project.repoUrl || "https://github.com/mdeibrahim11"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white/[0.045] backdrop-blur-xl border border-white/14 text-xs font-anta text-[#A1A1AA] hover:text-[#F53F06] hover:border-[#F53F06]/50 hover:bg-white/[0.08] transition-all"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub Repository</span>
                </a>

                <a
                  href={project.liveUrl || "https://github.com/mdeibrahim11"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-btn-primary group/link inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold font-display text-white cursor-pointer"
                >
                  <span>
                    {project.liveUrl?.includes("drive.google.com")
                      ? "Download Software"
                      : "Live Interface"}
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-white group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </GlassCard>
          ))}
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
