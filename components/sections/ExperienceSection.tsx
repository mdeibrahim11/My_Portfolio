"use client";

import React from "react";
import { CAREER_JOURNEY, HONORS } from "@/lib/portfolio-data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Briefcase, Calendar, MapPin, CheckCircle, Award, Sparkles } from "lucide-react";

export function ExperienceSection() {
  return (
    <section
      id="experience"
      aria-label="Experience and Journey Section"
      className="relative py-24 sm:py-32 scroll-mt-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          floorNumber="005"
          floorLabel="Experience"
          title="Engineering Journey &"
          highlightWord="Timeline"
          subtitle="Chronological track record of delivering resilient backend architectures and software contributions."
        />

        {/* Vertical Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Luminous Central Stem Line - Primary to Secondary Gradient */}
          <div className="absolute top-4 bottom-4 left-4 sm:left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-[#F53F06]/50 via-[#6366F1]/40 to-[#F53F06]/50 shadow-[0_0_14px_rgba(245,63,6,0.3)] pointer-events-none" />

          <div className="space-y-12">
            {CAREER_JOURNEY.map((item, index) => {
              const isEven = index % 2 === 0;
              const isSecondary = index % 2 === 1;

              return (
                <div
                  key={item.id}
                  className={`relative flex flex-col sm:flex-row items-start ${isEven ? "sm:flex-row-reverse" : ""
                    } gap-8 pl-12 sm:pl-0`}
                >
                  {/* Glowing Node on Timeline Stem with Primary/Secondary Frosted Glass Ring */}
                  <div className={`absolute left-4 sm:left-1/2 -translate-x-1/2 top-6 z-20 flex items-center justify-center w-7 h-7 rounded-full bg-black/70 backdrop-blur-2xl border-2 ${isSecondary ? "border-[#6366F1] shadow-[0_0_20px_rgba(99,102,241,0.65),inset_0_1px_1px_rgba(255,255,255,0.4)]" : "border-[#F53F06] shadow-[0_0_20px_rgba(245,63,6,0.65),inset_0_1px_1px_rgba(255,255,255,0.4)]"}`}>
                    <div className={`w-2 h-2 rounded-full ${isSecondary ? "bg-[#6366F1] shadow-[0_0_8px_#6366F1]" : "bg-[#F53F06] shadow-[0_0_8px_#F53F06]"} animate-pulse`} />
                  </div>

                  {/* Content Card */}
                  <div className="w-full sm:w-[calc(50%-2.25rem)]">
                    <GlassCard
                      variant="elevated"
                      glow
                      glowColor={isSecondary ? "secondary" : "primary"}
                      shimmer
                      className="p-6 sm:p-7 rounded-3xl"
                    >
                      {/* Period Badge & Location */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.05] backdrop-blur-xl border border-white/16 text-xs font-anta ${isSecondary ? "text-[#6366F1]" : "text-[#F53F06]"} shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]`}>
                          <Calendar className={`w-3 h-3 ${isSecondary ? "text-[#6366F1]" : "text-[#F53F06]"}`} />
                          {item.period}
                        </span>

                        <span className="flex items-center gap-1 text-[11px] font-anta text-[#A1A1AA]">
                          <MapPin className="w-3 h-3 text-[#A1A1AA]" />
                          {item.location}
                        </span>
                      </div>

                      {/* Role & Company */}
                      <h3 className="text-lg font-bold font-display text-[#F5F5F5] mb-1">
                        {item.role}
                      </h3>
                      <p className={`text-sm font-semibold font-display ${isSecondary ? "text-[#6366F1] drop-shadow-[0_0_8px_rgba(99,102,241,0.35)]" : "text-[#F53F06] drop-shadow-[0_0_8px_rgba(245,63,6,0.35)]"} mb-4 flex items-center gap-1.5`}>
                        <Briefcase className="w-3.5 h-3.5" />
                        <span>{item.company}</span>
                      </p>

                      {/* Accomplishments */}
                      <ul className="space-y-2 mb-4 text-xs sm:text-sm text-[#A1A1AA] font-light leading-relaxed">
                        {item.description.map((bullet, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2">
                            <CheckCircle className={`w-3.5 h-3.5 ${isSecondary ? "text-[#6366F1]" : "text-[#F53F06]"} shrink-0 mt-0.5`} />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Skills Utilized */}
                      <div className="pt-3 border-t border-white/14 flex flex-wrap gap-1.5">
                        {item.skills.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="px-2.5 py-1 rounded-xl text-[11px] font-anta bg-white/[0.045] backdrop-blur-md border border-white/14 text-[#A1A1AA] hover:text-white hover:border-[#F53F06]/40 transition-all"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </GlassCard>
                  </div>

                  {/* Empty side for balanced spacing on sm+ */}
                  <div className="hidden sm:block sm:w-[calc(50%-2.25rem)]" />
                </div>
              );
            })}
          </div>

          {/* Honors & Accolades Cards */}
          <div className="mt-16 pt-8 border-t border-white/14">
            <div className="flex items-center gap-2 mb-6">
              <Award className="w-4 h-4 text-[#F53F06]" />
              <h3 className="text-xs font-anta uppercase tracking-wider text-[#A1A1AA]">
                Honors &amp; Recognized Milestones
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {HONORS.map((h, i) => {
                const isSecondaryHonor = i % 2 === 1;
                return (
                  <GlassCard
                    key={i}
                    variant={isSecondaryHonor ? "secondary" : "primary"}
                    shimmer
                    className="p-5 rounded-2xl"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-anta text-[#A1A1AA]">{h.year}</span>
                      <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full backdrop-blur-xl border text-[10px] font-anta ${isSecondaryHonor ? "bg-[#6366F1]/20 border-[#6366F1]/40 text-[#6366F1] shadow-[0_0_12px_rgba(99,102,241,0.3)]" : "bg-[#F53F06]/20 border-[#F53F06]/40 text-[#F53F06] shadow-[0_0_12px_rgba(245,63,6,0.3)]"}`}>
                        <Sparkles className="w-2.5 h-2.5" />
                        {h.badge}
                      </span>
                    </div>
                    <h4 className="text-base font-bold font-display text-[#F5F5F5]">
                      {h.title}
                    </h4>
                    <p className="mt-1 text-xs text-[#A1A1AA] font-light leading-relaxed">
                      {h.detail}
                    </p>
                  </GlassCard>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
