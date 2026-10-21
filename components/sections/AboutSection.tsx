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
      {/* Subtle, localized orange-red ambient glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full bg-[#F53F06]/[0.05] blur-[120px] pointer-events-none" />

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
            <GlassCard variant="elevated" className="p-6 sm:p-8 border-white/10 rounded-2xl bg-[#080808]">
              {/* Window Header */}
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10 text-xs font-anta text-[#71717A]">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                  <span className="ml-2 text-[#A1A1AA]">eibrahim.profile</span>
                </div>
                <div className="flex items-center gap-1.5 text-[#71717A]">
                  <MapPin className="w-3.5 h-3.5 text-[#F53F06]" />
                  <span>{PERSONAL_INFO.location}</span>
                </div>
              </div>

              {/* Bio Narrative (Josefin Sans 300) - Clean, direct, no repetition */}
              <div className="space-y-4 text-base sm:text-lg text-[#F5F5F5] font-light leading-relaxed">
                <p>
                  I am a <strong className="font-semibold text-white font-display">Software Engineer</strong> specializing in Python backend architecture, scalable RESTful services, and relational database systems.
                </p>
                <p className="text-sm sm:text-base text-[#A1A1AA]">
                  Currently engineering backend solutions at <span className="text-[#F5F5F5] font-normal">Amio Uddokta</span>. Previously co-led the Code-Hydra developer team at <span className="text-[#F5F5F5] font-normal">Softvence IT LTD</span>, architecting production APIs and database migrations.
                </p>
              </div>

              {/* Key Metrics Row */}
              <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-3">
                {highlights.map((item, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-white/[0.02] border border-white/10 text-center">
                    <p className="font-display font-bold text-base sm:text-lg text-[#F53F06]">
                      {item.value}
                    </p>
                    <p className="mt-0.5 text-[10px] font-anta text-[#71717A] uppercase tracking-wider">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>

          {/* Right Column: Architectural Principles (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            <h3 className="text-xs font-anta tracking-widest text-[#71717A] uppercase mb-4 flex items-center gap-2">
              <Cpu className="w-3.5 h-3.5 text-[#F53F06]" />
              Engineering Pillars
            </h3>

            {coreValues.map((val, idx) => (
              <GlassCard
                key={idx}
                variant="interactive"
                className="p-5 border-white/10 bg-[#080808] hover:border-[#F53F06]/50 rounded-2xl transition-all"
              >
                <div className="flex items-start gap-3.5">
                  <div className="p-2 rounded-xl bg-white/[0.03] border border-white/10 shrink-0 mt-0.5">
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
