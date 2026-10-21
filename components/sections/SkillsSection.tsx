"use client";

import React from "react";
import { SKILL_CATEGORIES } from "@/lib/portfolio-data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Code, Server, Database, Cloud } from "lucide-react";

export function SkillsSection() {
  const isCategorySecondary = (id: string) => id === "languages" || id === "frontend";

  const categoryIcons: Record<string, React.ReactNode> = {
    backend: <Server className="w-4 h-4 text-[#F53F06]" />,
    databases: <Database className="w-4 h-4 text-[#F53F06]" />,
    languages: <Cloud className="w-4 h-4 text-[#6366F1]" />,
    frontend: <Code className="w-4 h-4 text-[#06B6D4]" />,
  };

  return (
    <section
      id="skills"
      aria-label="Skills and Expertise Section"
      className="relative py-24 sm:py-32 scroll-mt-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          floorNumber="003"
          floorLabel="Expertise"
          title="Engineered Skills &"
          highlightWord="Stack"
          subtitle="Systematic capabilities organized across core backend, databases, and system tooling."
        />

        {/* Clean 2x2 Glass Grid with Primary & Secondary Card Gradients */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SKILL_CATEGORIES.map((category) => {
            const isSecondary = isCategorySecondary(category.id);
            return (
              <GlassCard
                key={category.id}
                variant={isSecondary ? "secondary" : "primary"}
                shimmer
                className="p-6 sm:p-8 rounded-3xl"
              >
                {/* Header */}
                <div className="flex items-center gap-3.5 mb-2">
                  <div
                    className={`p-3.5 rounded-2xl backdrop-blur-xl border shadow-[0_0_20px_rgba(0,0,0,0.3)] ${
                      isSecondary
                        ? "bg-[#6366F1]/20 border-[#6366F1]/40 text-[#6366F1] shadow-[0_0_20px_rgba(99,102,241,0.3)]"
                        : "bg-[#F53F06]/20 border-[#F53F06]/40 text-[#F53F06] shadow-[0_0_20px_rgba(245,63,6,0.3)]"
                    }`}
                  >
                    {categoryIcons[category.id] || <Server className="w-4 h-4 text-[#F53F06]" />}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold font-display text-[#F5F5F5]">
                      {category.name}
                    </h3>
                    <p className="text-xs text-[#A1A1AA] font-light">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Modern Tag Cluster - Primary & Secondary Frosted Glass Chips */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {category.skills.map((skill, sIdx) => {
                    const isPrimarySkill = skill.level === "Primary" || skill.featured;
                    return (
                      <span
                        key={sIdx}
                        className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-anta transition-all duration-200 cursor-default ${
                          isSecondary
                            ? isPrimarySkill
                              ? "bg-[#6366F1]/20 backdrop-blur-xl text-white border border-[#6366F1]/50 shadow-[0_0_18px_rgba(99,102,241,0.25),inset_0_1px_1px_rgba(255,255,255,0.3)] hover:bg-[#6366F1]/30 hover:border-[#6366F1]/70"
                              : "bg-white/[0.045] backdrop-blur-xl text-[#A1A1AA] border border-white/14 shadow-[inset_0_1px_1px_rgba(255,255,255,0.18)] hover:text-white hover:border-[#6366F1]/40"
                            : isPrimarySkill
                              ? "bg-[#F53F06]/18 backdrop-blur-xl text-white border border-[#F53F06]/45 shadow-[0_0_18px_rgba(245,63,6,0.22),inset_0_1px_1px_rgba(255,255,255,0.3)] hover:bg-[#F53F06]/28 hover:border-[#F53F06]/65 hover:shadow-[0_0_25px_rgba(245,63,6,0.4)]"
                              : "bg-white/[0.045] backdrop-blur-xl text-[#A1A1AA] border border-white/14 shadow-[inset_0_1px_1px_rgba(255,255,255,0.18)] hover:text-white hover:border-[#F53F06]/40"
                        }`}
                      >
                        {isPrimarySkill && (
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${
                              isSecondary
                                ? "bg-[#6366F1] shadow-[0_0_8px_#6366F1]"
                                : "bg-[#F53F06] shadow-[0_0_8px_#F53F06]"
                            }`}
                          />
                        )}
                        <span>{skill.name}</span>
                      </span>
                    );
                  })}
                </div>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
