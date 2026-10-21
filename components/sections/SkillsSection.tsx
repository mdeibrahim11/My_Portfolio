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
    databases: <Database className="w-4 h-4 text-[#F53F06]" />,
    devops: <Cloud className="w-4 h-4 text-[#F53F06]" />,
    frontend: <Code className="w-4 h-4 text-[#F53F06]" />,
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
      {/* Subtle ambient glow */}
      <div className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full bg-[#F53F06]/[0.05] blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          floorNumber="003"
          floorLabel="Expertise"
          title="Engineered Skills &"
          highlightWord="Stack"
          subtitle="Systematic capabilities organized by operational domain and real production usage."
        />

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 border-b border-white/10">
          <button
            onClick={() => setActiveCategoryId("all")}
            className={`px-4 py-2 rounded-xl text-xs font-anta transition-all duration-200 cursor-pointer ${
              activeCategoryId === "all"
                ? "bg-[#F53F06] text-white font-semibold shadow-sm shadow-[#F53F06]/30"
                : "text-[#71717A] hover:text-[#F5F5F5] hover:bg-white/[0.04]"
            }`}
          >
            All Disciplines ({SKILL_CATEGORIES.length})
          </button>

          {SKILL_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategoryId(cat.id)}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-anta transition-all duration-200 cursor-pointer ${
                activeCategoryId === cat.id
                  ? "bg-[#F53F06] text-white font-semibold shadow-sm shadow-[#F53F06]/30"
                  : "text-[#71717A] hover:text-[#F5F5F5] hover:bg-white/[0.04]"
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
              className="p-6 border-white/10 rounded-2xl bg-[#080808] flex flex-col justify-between hover:border-[#F53F06]/50 transition-all duration-300"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10">
                      {categoryIcons[category.id]}
                    </div>
                    <h3 className="text-base font-semibold font-display text-[#F5F5F5]">
                      {category.name}
                    </h3>
                  </div>
                  <span className="text-[10px] font-anta text-[#71717A] uppercase">
                    # 003
                  </span>
                </div>

                <p className="text-xs text-[#A1A1AA] font-light mb-5 leading-relaxed">
                  {category.description}
                </p>

                {/* Skills List */}
                <div className="space-y-2">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="group flex items-center justify-between px-3 py-2 rounded-xl bg-white/[0.02] border border-white/10 hover:bg-white/[0.05] hover:border-[#F53F06]/40 transition-all duration-200"
                    >
                      <div className="flex items-center gap-2">
                        {skill.featured ? (
                          <Sparkles className="w-3 h-3 text-[#F53F06]" />
                        ) : (
                          <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                        )}
                        <span className="text-xs font-anta text-[#F5F5F5] group-hover:text-white">
                          {skill.name}
                        </span>
                      </div>

                      <span
                        className={`text-[10px] font-anta px-2 py-0.5 rounded-md ${
                          skill.level === "Primary"
                            ? "bg-[#F53F06]/15 text-[#F53F06] border border-[#F53F06]/30"
                            : skill.level === "Mastery"
                            ? "bg-white/[0.05] text-[#F5F5F5] border border-white/15"
                            : "bg-white/[0.02] text-[#71717A] border border-white/10"
                        }`}
                      >
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Tech Count Badge */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-anta text-[#71717A]">
                <span>Verified Stack Depth</span>
                <span className="text-[#F53F06] font-semibold">{category.skills.length} Technologies</span>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
