"use client";

import React from "react";
import { FEATURED_PROJECTS } from "@/lib/portfolio-data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { ExternalLink, Terminal, Sparkles, Activity, ShieldCheck, Layers, LayoutGrid, Calculator, UtensilsCrossed } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";

export function ProjectsSection() {
  const getProjectIcon = (id: string) => {
    switch (id) {
      case "event-management":
        return <Activity className="w-5 h-5 text-[#F53F06]" />;
      case "employee-management":
        return <Layers className="w-5 h-5 text-[#F53F06]" />;
      case "timely-prayer":
        return <ShieldCheck className="w-5 h-5 text-[#F53F06]" />;
      case "restaurant-app":
        return <UtensilsCrossed className="w-5 h-5 text-[#F53F06]" />;
      case "result-calculator":
        return <Calculator className="w-5 h-5 text-[#F53F06]" />;
      case "portfolio-1":
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
              glow
              glowColor={idx % 2 === 1 ? "secondary" : "primary"}
              shimmer
              className="group relative overflow-hidden p-6 sm:p-8 rounded-3xl flex flex-col justify-between"
            >
              <div>
                {/* Visual Header Bar */}
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/16">
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`p-3.5 rounded-2xl backdrop-blur-xl border transition-colors ${
                        idx % 2 === 1
                          ? "bg-[#6366F1]/20 border-[#6366F1]/40 text-[#6366F1] shadow-[0_0_18px_rgba(99,102,241,0.3)] group-hover:border-[#6366F1]/60"
                          : "bg-[#F53F06]/20 border-[#F53F06]/40 text-[#F53F06] shadow-[0_0_18px_rgba(245,63,6,0.3)] group-hover:border-[#F53F06]/60"
                      }`}
                    >
                      {getProjectIcon(project.id)}
                    </div>
                    <div>
                      <p
                        className={`text-[10px] font-anta uppercase tracking-wider font-medium ${
                          idx % 2 === 1
                            ? "text-[#6366F1] drop-shadow-[0_0_10px_rgba(99,102,241,0.5)]"
                            : "text-[#F53F06] drop-shadow-[0_0_10px_rgba(245,63,6,0.5)]"
                        }`}
                      >
                        {project.category}
                      </p>
                      <h3 className="text-xl sm:text-2xl font-bold font-display text-[#F5F5F5] group-hover:text-white transition-colors">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  {/* Project Index Badge in Frosted Glass Pill */}
                  <span className="text-xs font-anta px-3 py-1 rounded-full bg-white/[0.05] backdrop-blur-xl border border-white/16 text-[#A1A1AA] shadow-[inset_0_1px_1px_rgba(255,255,255,0.22)]">
                    # 00{idx + 1}
                  </span>
                </div>

                {/* Simulated UI Window Canvas / Frosted Glass Mockup Container */}
                <div className="relative w-full h-44 rounded-2xl overflow-hidden mb-6 bg-gradient-to-b from-white/[0.08] via-black/55 to-black/85 backdrop-blur-2xl border border-white/18 shadow-[inset_0_1px_1.5px_rgba(255,255,255,0.25),0_16px_36px_rgba(0,0,0,0.65)] group-hover:border-white/28 transition-all duration-300 flex flex-col justify-between p-4">
                  {project.image && (
                    <div
                      className="absolute inset-0 bg-cover bg-center opacity-30 group-hover:opacity-45 group-hover:scale-105 transition-all duration-500 pointer-events-none"
                      style={{ backgroundImage: `url(${project.image})` }}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-transparent pointer-events-none" />

                  {/* Mock Window Controls with Glass Jewels */}
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/90 shadow-[0_0_10px_rgba(255,95,86,0.8)]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/90 shadow-[0_0_10px_rgba(255,189,46,0.8)]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/90 shadow-[0_0_10px_rgba(39,201,63,0.8)]" />
                    </div>
                    {project.metrics && (
                      <div className="flex items-center gap-1.5 text-[10px] font-anta text-[#F5F5F5] bg-white/[0.10] backdrop-blur-2xl px-3.5 py-1 rounded-full border border-white/22 shadow-[inset_0_1px_1px_rgba(255,255,255,0.3)]">
                        <Sparkles className="w-3 h-3 text-[#F53F06]" />
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
                      background:
                        idx % 2 === 1
                          ? `radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.18), transparent 70%)`
                          : `radial-gradient(circle at 50% 50%, rgba(245, 63, 6, 0.18), transparent 70%)`,
                    }}
                  />
                </div>

                {/* Description (Josefin Sans 300) */}
                <p className="text-sm text-[#A1A1AA] font-light leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Tech Chips in Frosted Glass */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1 rounded-xl text-xs font-anta bg-white/[0.045] backdrop-blur-xl text-[#A1A1AA] border border-white/14 shadow-[inset_0_1px_1px_rgba(255,255,255,0.18)] hover:border-[#F53F06]/45 hover:text-white transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Links - Glass Buttons */}
              <div className="pt-4 border-t border-white/16 flex items-center justify-between">
                <a
                  href={project.repoUrl || "https://github.com/mdeibrahim"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-btn-secondary inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-anta text-[#A1A1AA] hover:text-[#F53F06] transition-all cursor-pointer"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>Inspect Source</span>
                </a>

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-btn-primary group/link inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold font-display text-white transition-all duration-200 cursor-pointer"
                  >
                    <span>
                      {project.liveUrl.includes("drive.google.com")
                        ? "Download Software"
                        : "Launch Live App"}
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 text-white group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
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
