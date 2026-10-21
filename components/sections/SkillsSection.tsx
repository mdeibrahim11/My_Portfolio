"use client";

import React, { useState } from "react";
import { SKILL_CATEGORIES } from "@/lib/portfolio-data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Code, Server, Database, Cloud, Sparkles } from "lucide-react";

export function SkillsSection() {
  const [activeCategoryId, setActiveCategoryId] = useState<string>("all");

  const categoryIcons: Record<string, React.ReactNode> = {
    backend: <Server className="w-4 h-4 text-[#F53F06]" />,
    databases: <Database className="w-4 h-4 text-[#FF7A00]" />,
    devops: <Cloud className="w-4 h-4 text-[#F53F06]" />,
    frontend: <Code className="w-4 h-4 text-[#FF7A00]" />,
  };

  const displayedCategories =
    activeCategoryId === "all"
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((c) => c.id === activeCategoryId);

  return (
    <section
      id="skills"
      aria-label="Skills and Expertise Section"
      className="relative py-24 sm:py-32 scroll-mt-24 overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full bg-[#FF7A00]/[0.05] blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          floorNumber="03"
          floorLabel="Technical Expertise"
          title="Engineered Skills &"
          highlightWord="Stack"
          subtitle="Systematic capabilities organized by operational domain and real production usage."
        />

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 border-b border-white/[0.12]">
          <button
            onClick={() => setActiveCategoryId("all")}
            className={`px-4 py-2 rounded-2xl text-xs font-mono transition-all duration-200 ${activeCategoryId === "all"
                ? "bg-[#F53F06]/25 text-white font-semibold border border-[#F53F06]/50 shadow-sm shadow-[#F53F06]/20"
                : "text-[#71717A] hover:text-white hover:bg-white/[0.05] border border-transparent"
              }`}
          >
            All Disciplines ({SKILL_CATEGORIES.length})
          </button>

          {SKILL_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategoryId(cat.id)}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-2xl text-xs font-mono transition-all duration-200 ${activeCategoryId === cat.id
                  ? "bg-[#F53F06]/25 text-white font-semibold border border-[#F53F06]/50 shadow-sm shadow-[#F53F06]/20"
                  : "text-[#71717A] hover:text-white hover:bg-white/[0.05] border border-transparent"
                }`}
            >
              {categoryIcons[cat.id]}
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {displayedCategories.map((category) => (
            <GlassCard
              key={category.id}
              variant="elevated"
              className="p-6 border-white/[0.12] rounded-2xl flex flex-col justify-between hover:border-[#F53F06]/40 hover:shadow-xl hover:shadow-[#F53F06]/10 transition-all duration-300"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2.5 rounded-2xl bg-white/[0.05] border border-white/[0.12]">
                      {categoryIcons[category.id]}
                    </div>
                    <h3 className="text-base font-semibold font-display text-[#F5F5F5]">
                      {category.name}
                    </h3>
                  </div>
                  <span className="text-[10px] font-mono text-[#71717A] uppercase">
                    SEC.03
                  </span>
                </div>

                <p className="text-xs text-[#A1A1AA] mb-5 leading-relaxed">
                  {category.description}
                </p>

                {/* Skills List */}
                <div className="space-y-2.5">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="group flex items-center justify-between px-3 py-2 rounded-xl bg-white/[0.05] border border-white/[0.12] hover:bg-white/[0.08] hover:border-[#F53F06]/30 transition-all duration-200"
                    >
                      <div className="flex items-center gap-2">
                        {skill.featured ? (
                          <Sparkles className="w-3 h-3 text-[#FF7A00]" />
                        ) : (
                          <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                        )}
                        <span className="text-xs font-medium text-white/90 group-hover:text-white">
                          {skill.name}
                        </span>
                      </div>

                      <span
                        className={`text-[10px] font-mono px-2 py-0.5 rounded-md ${skill.level === "Primary"
                            ? "bg-[#F53F06]/15 text-[#FF7A00] border border-[#F53F06]/30"
                            : skill.level === "Mastery"
                              ? "bg-emerald-500/15 text-[#34D399] border border-emerald-500/30"
                              : "bg-white/[0.05] text-[#A1A1AA] border border-white/[0.12]"
                          }`}
                      >
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Tech Count Badge */}
              <div className="mt-6 pt-4 border-t border-white/[0.12] flex items-center justify-between text-[11px] font-mono text-[#71717A]">
                <span>Verified Stack Depth</span>
                <span className="text-[#FF7A00]">{category.skills.length} Technologies</span>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
