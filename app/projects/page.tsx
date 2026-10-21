import React from "react";
import Link from "next/link";
import { FEATURED_PROJECTS } from "@/lib/portfolio-data";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
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
    <div className="relative min-h-screen bg-[#090B12] text-[#F5F5F5] flex flex-col">
      <SiteHeader />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 w-full">
        {/* Navigation Breadcrumb / Return */}
        <div className="mb-8">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-xs font-mono text-[#A1A1AA] hover:text-[#FF7A00] transition-colors px-3.5 py-2 rounded-2xl bg-white/[0.05] border border-white/[0.12] cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Home</span>
          </Link>
        </div>

        {/* Page Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F53F06]/10 border border-[#F53F06]/30 text-xs font-mono text-[#FF7A00] mb-4">
            <span className="w-2 h-2 rounded-full bg-[#F53F06] animate-pulse" />
            <span>ENGINEERING ARCHIVES</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold font-display tracking-tight text-[#F5F5F5] mb-4">
            All Projects &amp; Systems
          </h1>
          <p className="text-base text-[#A1A1AA] max-w-2xl">
            A comprehensive index of open-source software, Python systems, REST APIs, and full-stack solutions architected by Md Eibrahim Molla.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {FEATURED_PROJECTS.map((project, idx) => (
            <GlassCard
              key={project.id}
              variant="elevated"
              className="p-6 sm:p-8 border-white/[0.12] rounded-3xl flex flex-col justify-between hover:border-[#F53F06]/50 hover:shadow-xl hover:shadow-[#F53F06]/10 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-[#FF7A00] uppercase tracking-wider font-semibold">
                    {project.category}
                  </span>
                  <span className="text-xs font-mono text-white/40">ARCHIVE #{idx + 1}</span>
                </div>

                <h2 className="text-2xl font-bold font-display text-[#F5F5F5] mb-2">
                  {project.title}
                </h2>
                <p className="text-xs font-mono text-[#FF7A00]/90 mb-4">{project.tagline}</p>
                <p className="text-sm text-[#A1A1AA] leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/[0.10] mb-6 text-xs text-[#A1A1AA]">
                  <span className="font-semibold text-[#F5F5F5]">Engineering Contribution: </span>
                  {project.role}
                </div>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.technologies.map((t, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-xl text-xs font-mono bg-white/[0.05] text-[#A1A1AA] border border-white/[0.12]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/[0.12] flex items-center justify-between">
                <a
                  href={project.repoUrl || "https://github.com/mdeibrahim11"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-[#A1A1AA] hover:text-[#FF7A00] transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub Repository</span>
                </a>

                <a
                  href={project.liveUrl || "https://github.com/mdeibrahim11"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-2xl text-xs font-semibold bg-gradient-to-r from-[#F53F06]/20 to-[#FF7A00]/20 border border-[#F53F06]/40 hover:border-[#FF7A00] text-[#F5F5F5] hover:text-[#FF7A00] transition-all duration-200"
                >
                  <span>Live Interface</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#FF7A00]" />
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
