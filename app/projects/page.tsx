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
    <div className="relative min-h-screen bg-[#000000] text-[#F5F5F5] flex flex-col">
      <SiteHeader />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 w-full">
        {/* Navigation Breadcrumb / Return */}
        <div className="mb-8">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-xs font-anta text-[#A1A1AA] hover:text-[#F53F06] transition-colors px-3.5 py-2 rounded-xl bg-white/[0.03] border border-white/10 cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Home</span>
          </Link>
        </div>

        {/* Page Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-xs font-anta text-[#F53F06] mb-4">
            <span className="w-2 h-2 rounded-full bg-[#F53F06] animate-pulse" />
            <span># 004 // ENGINEERING ARCHIVES</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold font-display tracking-tight text-[#F5F5F5] mb-4">
            All Projects &amp; Systems
          </h1>
          <p className="text-base text-[#A1A1AA] font-light max-w-2xl leading-relaxed">
            A comprehensive index of open-source software, Python systems, REST APIs, and full-stack solutions architected by Md Eibrahim Molla.
          </p>
          <div className="mt-6 w-full h-[1px] bg-white/10" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {FEATURED_PROJECTS.map((project, idx) => (
            <GlassCard
              key={project.id}
              variant="elevated"
              className="p-6 sm:p-8 border-white/10 rounded-2xl bg-[#080808] flex flex-col justify-between hover:border-[#F53F06]/50 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-anta text-[#F53F06] uppercase tracking-wider font-semibold">
                    {project.category}
                  </span>
                  <span className="text-xs font-anta text-[#71717A]"># 00{idx + 1}</span>
                </div>

                <h2 className="text-2xl font-bold font-display text-[#F5F5F5] mb-2">
                  {project.title}
                </h2>
                <p className="text-xs font-light text-[#A1A1AA] mb-4">{project.tagline}</p>
                <p className="text-sm text-[#A1A1AA] font-light leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/10 mb-6 text-xs text-[#A1A1AA] font-light leading-relaxed">
                  <span className="font-semibold text-[#F5F5F5] font-display">Engineering Contribution: </span>
                  {project.role}
                </div>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.technologies.map((t, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-lg text-xs font-anta bg-white/[0.02] text-[#A1A1AA] border border-white/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <a
                  href={project.repoUrl || "https://github.com/mdeibrahim11"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-anta text-[#A1A1AA] hover:text-[#F53F06] transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub Repository</span>
                </a>

                <a
                  href={project.liveUrl || "https://github.com/mdeibrahim11"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold font-display bg-[#F53F06] hover:bg-[#d43504] text-white transition-all duration-200"
                >
                  <span>Live Interface</span>
                  <ExternalLink className="w-3.5 h-3.5 text-white" />
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
