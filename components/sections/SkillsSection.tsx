"use client";

import React from "react";
import { SKILL_CATEGORIES } from "@/lib/portfolio-data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Code, Server, Database, Cloud } from "lucide-react";

export function SkillsSection() {
  const categoryIcons: Record<string, React.ReactNode> = {
    backend: <Server className="w-4 h-4 text-[#F53F06]" />,
    databases: <Database className="w-4 h-4 text-[#F53F06]" />,
    devops: <Cloud className="w-4 h-4 text-[#F53F06]" />,
    frontend: <Code className="w-4 h-4 text-[#F53F06]" />,
  };

  return (
    <section
      id="skills"
      aria-label="Skills and Expertise Section"
      className="relative py-24 sm:py-32 scroll-mt-24 overflow-hidden"
    >
      {/* Subtle ambient glow */}
      <div className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full bg-[#F53F06]/[0.05] blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          floorNumber="003"
          floorLabel="Expertise"
          title="Engineered Skills &"
          highlightWord="Stack"
          subtitle="Systematic capabilities organized across core backend, databases, and system tooling."
        />

        {/* Clean 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SKILL_CATEGORIES.map((category) => (
            <GlassCard
              key={category.id}
              variant="elevated"
              className="p-6 sm:p-7 border-white/10 rounded-2xl bg-[#080808] hover:border-[#F53F06]/40 transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10">
                  {categoryIcons[category.id]}
                </div>
                <div>
                  <h3 className="text-base font-semibold font-display text-[#F5F5F5]">
                    {category.name}
                  </h3>
                  <p className="text-xs text-[#71717A] font-light">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Modern Tag Cluster */}
              <div className="mt-5 flex flex-wrap gap-2">
                {category.skills.map((skill, sIdx) => {
                  const isPrimary = skill.level === "Primary" || skill.featured;
                  return (
                    <span
                      key={sIdx}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-anta transition-all duration-200 ${
                        isPrimary
                          ? "bg-[#F53F06]/10 text-white border border-[#F53F06]/30 shadow-xs shadow-[#F53F06]/20"
                          : "bg-white/[0.02] text-[#A1A1AA] border border-white/10 hover:text-[#F5F5F5] hover:border-white/20"
                      }`}
                    >
                      {isPrimary && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#F53F06]" />
                      )}
                      <span>{skill.name}</span>
                    </span>
                  );
                })}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
