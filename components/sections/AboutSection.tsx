"use client";

import React from "react";
import { PERSONAL_INFO } from "@/lib/portfolio-data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { ShieldCheck, Layers, Gauge, Cpu, MapPin } from "lucide-react";

export function AboutSection() {
  const coreValues = [
    {
      icon: <Layers className="w-4 h-4 text-[#F53F06]" />,
      title: "Backend Architecture",
      desc: "Modular boundaries between business logic, data persistence, and resilient service APIs.",
    },
    {
      icon: <Gauge className="w-4 h-4 text-[#F53F06]" />,
      title: "High-Throughput APIs",
      desc: "Asynchronous REST endpoints with FastAPI and Django optimized for sub-second responses.",
    },
    {
      icon: <ShieldCheck className="w-4 h-4 text-[#F53F06]" />,
      title: "Data Integrity & Caching",
      desc: "Structured PostgreSQL schema modeling, index tuning, and low-latency Redis caching.",
    },
  ];

  const highlights = [
    { value: "1+ Years", label: "Backend Shipping" },
    { value: "Python Core", label: "Django & FastAPI" },
    { value: "Team Co-Lead", label: "Softvence IT LTD" },
    { value: "Pull Shark x3", label: "GitHub Milestone" },
  ];

  return (
    <section
      id="about"
      aria-label="About Me Section"
      className="relative py-24 sm:py-32 scroll-mt-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          floorNumber="002"
          floorLabel="About"
          title="Engineering Philosophy &"
          highlightWord="Background"
          subtitle="Resilient backend systems, clean abstractions, and high-performance APIs."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Editorial Card (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <GlassCard variant="elevated" shimmer className="p-6 sm:p-8 rounded-3xl">
              {/* Window Header with frosted glass jewels */}
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/16 text-xs font-anta text-[#71717A]">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/90 shadow-[0_0_10px_rgba(255,95,86,0.8)]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/90 shadow-[0_0_10px_rgba(255,189,46,0.8)]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/90 shadow-[0_0_10px_rgba(39,201,63,0.8)]" />
                  <span className="ml-2 text-[#A1A1AA] font-mono text-[11px]">eibrahim.profile.json</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.05] backdrop-blur-xl border border-white/14 text-xs font-anta text-[#A1A1AA] shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]">
                  <MapPin className="w-3.5 h-3.5 text-[#F53F06]" />
                  <span>{PERSONAL_INFO.location}</span>
                </div>
              </div>

              {/* Bio Narrative (Josefin Sans 300) */}
              <div className="space-y-4 text-base sm:text-lg text-[#F5F5F5] font-light leading-relaxed">
                <p>
                  I am a <strong className="font-semibold text-white font-display">Software Engineer</strong> specializing in Python backend architecture, scalable RESTful services, and relational database systems.
                </p>
                <p className="text-sm sm:text-base text-[#A1A1AA]">
                  Currently engineering backend solutions at <span className="text-[#F5F5F5] font-normal">Amio Uddokta</span>. Previously co-led the Code-Hydra developer team at <span className="text-[#F5F5F5] font-normal">Softvence IT LTD</span>, architecting production APIs and database migrations.
                </p>
              </div>

              {/* Key Metrics Row - Frosted Glass Inset Tiles */}
              <div className="mt-8 pt-6 border-t border-white/16 grid grid-cols-2 sm:grid-cols-4 gap-3">
                {highlights.map((item, idx) => {
                  const isSecondary = idx % 2 === 1;
                  return (
                    <div
                      key={idx}
                      className={`p-3.5 rounded-2xl bg-white/[0.045] backdrop-blur-2xl border ${isSecondary ? "border-[#6366F1]/30 hover:border-[#6366F1]/60 hover:shadow-[0_0_24px_rgba(99,102,241,0.3)]" : "border-[#F53F06]/30 hover:border-[#F53F06]/60 hover:shadow-[0_0_24px_rgba(245,63,6,0.3)]"} shadow-[inset_0_1px_1px_rgba(255,255,255,0.22),0_6px_18px_rgba(0,0,0,0.35)] text-center hover:bg-white/[0.08] transition-all duration-300`}
                    >
                      <p className={`font-display font-bold text-base sm:text-lg ${isSecondary ? "text-[#6366F1] drop-shadow-[0_0_12px_rgba(99,102,241,0.5)]" : "text-[#F53F06] drop-shadow-[0_0_12px_rgba(245,63,6,0.5)]"}`}>
                        {item.value}
                      </p>
                      <p className="mt-0.5 text-[10px] font-anta text-[#A1A1AA] uppercase tracking-wider">
                        {item.label}
                      </p>
                    </div>
                  );
                })}
              </div>
            </GlassCard>
          </div>

          {/* Right Column: Architectural Principles (5 cols) */}
          <div className="lg:col-span-5 space-y-3.5">
            <h3 className="text-xs font-anta tracking-widest text-[#71717A] uppercase mb-4 flex items-center gap-2">
              <Cpu className="w-3.5 h-3.5 text-[#F53F06]" />
              Engineering Pillars
            </h3>

            {coreValues.map((val, idx) => {
              const isSecondary = idx === 1;
              return (
                <GlassCard
                  key={idx}
                  variant={isSecondary ? "secondary" : "interactive"}
                  className="p-5 rounded-2xl"
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-2.5 rounded-2xl ${isSecondary ? "bg-[#6366F1]/20 border-[#6366F1]/40 text-[#6366F1] shadow-[0_0_18px_rgba(99,102,241,0.3)]" : "bg-[#F53F06]/20 border-[#F53F06]/40 text-[#F53F06] shadow-[0_0_18px_rgba(245,63,6,0.3)]"} backdrop-blur-xl border shrink-0 mt-0.5`}>
                      {val.icon}
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-[#F5F5F5] font-display">
                        {val.title}
                      </h4>
                      <p className="mt-1 text-xs text-[#A1A1AA] font-light leading-relaxed">
                        {val.desc}
                      </p>
                    </div>
                  </div>
                </GlassCard>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
