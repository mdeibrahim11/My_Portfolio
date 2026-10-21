"use client";

import React from "react";
import { FEATURED_PROJECTS } from "@/lib/portfolio-data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { ExternalLink, Terminal, Sparkles, Activity, ShieldCheck, Layers, LayoutGrid } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";

export function ProjectsSection() {
  const getProjectIcon = (id: string) => {
    switch (id) {
      case "event-management":
        return <Activity className="w-5 h-5 text-[#F53F06]" />;
      case "employee-management":
        return <Layers className="w-5 h-5 text-[#FF7A00]" />;
      case "prayer-time-locker":
        return <ShieldCheck className="w-5 h-5 text-[#F53F06]" />;
      case "oop-python":
        return <LayoutGrid className="w-5 h-5 text-[#FF7A00]" />;
      case "restaurant-app":
        return <Activity className="w-5 h-5 text-[#F53F06]" />;
      case "portfolio":
        return <Terminal className="w-5 h-5 text-[#FF7A00]" />;
      default:
        return <Terminal className="w-5 h-5 text-white/70" />;
    }
  };

  return (
    <section
      id="projects"
      aria-label="Featured Projects Section"
      className="relative py-24 sm:py-32 scroll-mt-24 overflow-hidden"
    >
      {/* Background ambient light */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-[#F53F06]/[0.06] blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] rounded-full bg-[#FF7A00]/[0.05] blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          floorNumber="04"
          floorLabel="Featured Projects"
          title="Architected Systems &"
          highlightWord="Deployments"
          subtitle="Engineered software systems built for clean architecture, reliability, and usability."
        />

        {/* Asymmetric Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {FEATURED_PROJECTS.map((project, idx) => (
            <GlassCard
              key={project.id}
              variant="elevated"
              className="group relative overflow-hidden p-6 sm:p-8 border-white/[0.12] rounded-3xl hover:border-[#F53F06]/40 hover:shadow-2xl hover:shadow-[#F53F06]/15 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Visual Glass Header Bar */}
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/[0.12]">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-2xl bg-white/[0.05] border border-white/[0.12] group-hover:border-[#F53F06]/40 transition-colors">
                      {getProjectIcon(project.id)}
                    </div>
                    <div>
                      <p className="text-[10px] font-mono uppercase tracking-wider text-[#FF7A00]">
                        {project.category}
                      </p>
                      <h3 className="text-xl sm:text-2xl font-bold font-display text-[#F5F5F5] group-hover:text-white transition-colors">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  {/* Project Index Badge */}
                  <span className="text-xs font-mono px-2.5 py-1 rounded-xl bg-white/[0.05] border border-white/[0.12] text-[#71717A]">
                    PRJ.0{idx + 1}
                  </span>
                </div>

                {/* Simulated UI Glass Canvas / Screenshot Mockup */}
                <div className="relative w-full h-44 rounded-2xl overflow-hidden mb-6 bg-gradient-to-br from-[#101523] via-[#090B12] to-[#121829] border border-white/[0.12] group-hover:border-white/25 transition-all duration-300 flex flex-col justify-between p-4">
                  {/* Mock Window Controls */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                      <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                      <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                    </div>
                    <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#A1A1AA] bg-black/50 px-2.5 py-1 rounded-xl border border-white/[0.12]">
                      <Sparkles className="w-2.5 h-2.5 text-[#34D399]" />
                      <span>{project.metrics || "Active System"}</span>
                    </div>
                  </div>

                  {/* Subtle Graphic Visual within mockup */}
                  <div className="relative py-2 flex flex-col items-center justify-center text-center">
                    <p className="text-sm font-mono text-[#F5F5F5] tracking-tight font-medium max-w-sm">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Mock Telemetry Footer */}
                  <div className="flex items-center justify-between text-[10px] font-mono text-[#71717A] border-t border-white/[0.12] pt-2">
                    <span>STATUS: OPERATIONAL</span>
                    <span className="text-[#FF7A00]">REPO: OPEN SOURCE</span>
                  </div>

                  {/* Hover ambient highlight */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at 50% 50%, ${project.accentColor}18, transparent 70%)`,
                    }}
                  />
                </div>

                {/* Description */}
                <p className="text-sm text-[#A1A1AA] leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Role / Contribution Note */}
                <div className="p-3.5 rounded-2xl bg-white/[0.05] border border-white/[0.12] mb-5 text-xs text-[#A1A1AA] leading-relaxed font-sans">
                  <span className="font-semibold text-[#F5F5F5]">Role & Delivery: </span>
                  {project.role}
                </div>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-xl text-xs font-mono bg-white/[0.05] text-[#A1A1AA] border border-white/[0.12] group-hover:border-[#F53F06]/30 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Links */}
              <div className="pt-4 border-t border-white/[0.12] flex items-center justify-between">
                <a
                  href={project.repoUrl || "https://github.com/mdeibrahim11"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-[#A1A1AA] hover:text-white transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>Inspect Source</span>
                </a>

                <a
                  href={project.liveUrl || "https://github.com/mdeibrahim11"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link inline-flex items-center gap-1.5 px-4 py-2 rounded-2xl text-xs font-semibold bg-white/[0.05] border border-white/[0.12] hover:border-[#FF7A00]/50 hover:bg-white/[0.08] text-[#F5F5F5] transition-all duration-200"
                >
                  <span>Launch Interface</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#FF7A00] group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
