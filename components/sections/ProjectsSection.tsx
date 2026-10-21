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
        return <Layers className="w-5 h-5 text-[#F53F06]" />;
      case "prayer-time-locker":
        return <ShieldCheck className="w-5 h-5 text-[#F53F06]" />;
      case "oop-python":
        return <LayoutGrid className="w-5 h-5 text-[#F53F06]" />;
      case "restaurant-app":
        return <Activity className="w-5 h-5 text-[#F53F06]" />;
      case "portfolio":
        return <Terminal className="w-5 h-5 text-[#F53F06]" />;
      default:
        return <Terminal className="w-5 h-5 text-[#F53F06]" />;
    }
  };

  return (
    <section
      id="projects"
      aria-label="Featured Projects Section"
      className="relative py-24 sm:py-32 scroll-mt-24 overflow-hidden"
    >

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          floorNumber="004"
          floorLabel="Projects"
          title="Architected Systems &"
          highlightWord="Deployments"
          subtitle="Engineered software systems built for clean architecture, reliability, and usability."
        />

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {FEATURED_PROJECTS.map((project, idx) => (
            <GlassCard
              key={project.id}
              variant="elevated"
              className="group relative overflow-hidden p-6 sm:p-8 border-white/10 rounded-2xl bg-[#080808] hover:border-[#F53F06]/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Visual Header Bar */}
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10 group-hover:border-[#F53F06]/40 transition-colors">
                      {getProjectIcon(project.id)}
                    </div>
                    <div>
                      <p className="text-[10px] font-anta uppercase tracking-wider text-[#F53F06]">
                        {project.category}
                      </p>
                      <h3 className="text-xl sm:text-2xl font-bold font-display text-[#F5F5F5] group-hover:text-white transition-colors">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  {/* Project Index Badge in Anta */}
                  <span className="text-xs font-anta px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/10 text-[#71717A]">
                    # 00{idx + 1}
                  </span>
                </div>

                {/* Simulated UI Window Canvas / Mockup with real project image overlay */}
                <div className="relative w-full h-44 rounded-xl overflow-hidden mb-5 bg-black border border-white/10 group-hover:border-white/20 transition-all duration-300 flex flex-col justify-between p-4">
                  {project.image && (
                    <div
                      className="absolute inset-0 bg-cover bg-center opacity-30 group-hover:opacity-45 group-hover:scale-105 transition-all duration-500 pointer-events-none"
                      style={{ backgroundImage: `url(${project.image})` }}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/30 pointer-events-none" />

                  {/* Mock Window Controls */}
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                      <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                      <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                    </div>
                    {project.metrics && (
                      <div className="flex items-center gap-1.5 text-[10px] font-anta text-[#A1A1AA] bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10">
                        <Sparkles className="w-2.5 h-2.5 text-[#F53F06]" />
                        <span>{project.metrics}</span>
                      </div>
                    )}
                  </div>

                  {/* Graphic Visual within mockup */}
                  <div className="relative z-10 py-2 flex flex-col items-center justify-center text-center">
                    <p className="text-sm font-display text-[#F5F5F5] tracking-tight font-semibold max-w-sm drop-shadow-md">
                      {project.tagline}
                    </p>
                  </div>

                  <div className="h-2" />

                  {/* Hover ambient highlight */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10"
                    style={{
                      background: `radial-gradient(circle at 50% 50%, rgba(245, 63, 6, 0.08), transparent 70%)`,
                    }}
                  />
                </div>

                {/* Description (Josefin Sans 300) */}
                <p className="text-sm text-[#A1A1AA] font-light leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Tech Chips in Anta */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-lg text-xs font-anta bg-white/[0.02] text-[#A1A1AA] border border-white/10 group-hover:border-[#F53F06]/30 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Links */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <a
                  href={project.repoUrl || "https://github.com/mdeibrahim"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-anta text-[#A1A1AA] hover:text-[#F53F06] transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>Inspect Source</span>
                </a>

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold font-display bg-white/[0.03] border border-white/15 hover:border-[#F53F06] hover:text-[#F53F06] text-[#F5F5F5] transition-all duration-200"
                  >
                    <span>
                      {project.liveUrl.includes("drive.google.com")
                        ? "Download Software"
                        : "Launch Live App"}
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#F53F06] group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </a>
                )}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
