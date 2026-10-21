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
          {/* Central Stem Line */}
          <div className="absolute top-4 bottom-4 left-4 sm:left-1/2 -translate-x-1/2 w-[1px] bg-white/10 pointer-events-none" />

          <div className="space-y-12">
            {CAREER_JOURNEY.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={item.id}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? "sm:flex-row-reverse" : ""
                  } gap-8 pl-12 sm:pl-0`}
                >
                  {/* Glowing Node on Timeline Stem */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-6 z-20 flex items-center justify-center w-6 h-6 rounded-full bg-black border border-[#F53F06] shadow-md shadow-[#F53F06]/30">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#F53F06]" />
                  </div>

                  {/* Content Card (Takes roughly half width on sm+) */}
                  <div className="w-full sm:w-[calc(50%-2rem)]">
                    <GlassCard
                      variant="elevated"
                      className="p-6 border-white/10 rounded-2xl bg-[#080808] hover:border-[#F53F06]/50 transition-all duration-300"
                    >
                      {/* Period Badge & Location */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/[0.03] border border-white/10 text-xs font-anta text-[#F53F06]">
                          <Calendar className="w-3 h-3 text-[#F53F06]" />
                          {item.period}
                        </span>

                        <span className="flex items-center gap-1 text-[11px] font-anta text-[#71717A]">
                          <MapPin className="w-3 h-3 text-[#71717A]" />
                          {item.location}
                        </span>
                      </div>

                      {/* Role & Company */}
                      <h3 className="text-lg font-bold font-display text-[#F5F5F5] mb-1">
                        {item.role}
                      </h3>
                      <p className="text-sm font-semibold font-display text-[#F53F06] mb-4 flex items-center gap-1.5">
                        <Briefcase className="w-3.5 h-3.5 text-[#F53F06]" />
                        <span>{item.company}</span>
                      </p>

                      {/* Accomplishments */}
                      <ul className="space-y-2 mb-4 text-xs sm:text-sm text-[#A1A1AA] font-light leading-relaxed">
                        {item.description.map((bullet, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2">
                            <CheckCircle className="w-3.5 h-3.5 text-[#F53F06] shrink-0 mt-0.5" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Skills Utilized */}
                      <div className="pt-3 border-t border-white/10 flex flex-wrap gap-1.5">
                        {item.skills.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="px-2.5 py-0.5 rounded-lg text-[11px] font-anta bg-white/[0.02] border border-white/10 text-[#A1A1AA]"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </GlassCard>
                  </div>

                  {/* Empty side for balanced spacing on sm+ */}
                  <div className="hidden sm:block sm:w-[calc(50%-2rem)]" />
                </div>
              );
            })}
          </div>

          {/* Honors & Accolades Cards */}
          <div className="mt-16 pt-8 border-t border-white/10">
            <div className="flex items-center gap-2 mb-6">
              <Award className="w-4 h-4 text-[#F53F06]" />
              <h3 className="text-xs font-anta uppercase tracking-wider text-[#71717A]">
                Honors &amp; Recognized Milestones
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {HONORS.map((h, i) => (
                <GlassCard
                  key={i}
                  variant="elevated"
                  className="p-5 border-white/10 rounded-2xl bg-[#080808] hover:border-[#F53F06]/40 transition-all"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-anta text-[#71717A]">{h.year}</span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#F53F06]/15 border border-[#F53F06]/30 text-[10px] font-anta text-[#F53F06]">
                      <Sparkles className="w-2.5 h-2.5 text-[#F53F06]" />
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
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
