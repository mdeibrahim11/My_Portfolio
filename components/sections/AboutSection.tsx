"use client";

import React from "react";
import { PERSONAL_INFO } from "@/lib/portfolio-data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { ShieldCheck, Layers, Gauge, Cpu, CheckCircle2, MapPin } from "lucide-react";

export function AboutSection() {
  const coreValues = [
    {
      icon: <Layers className="w-5 h-5 text-[#F53F06]" />,
      title: "Backend Architecture",
      desc: "Clean boundaries between business logic, data persistence, and service APIs for robust scalability.",
    },
    {
      icon: <Gauge className="w-5 h-5 text-[#FF7A00]" />,
      title: "High-Throughput APIs",
      desc: "Architecting asynchronous RESTful endpoints with FastAPI and Django for sub-second database transactions.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#34D399]" />,
      title: "Relational Data Modeling",
      desc: "Structured schema migrations, index tuning, and integrity across PostgreSQL, MySQL, and Redis caching.",
    },
  ];

  return (
    <section
      id="about"
      aria-label="About Me Section"
      className="relative py-24 sm:py-32 scroll-mt-24 overflow-hidden"
    >
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full bg-[#F53F06]/[0.05] blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          floorNumber="02"
          floorLabel="About Me"
          title="Engineering Philosophy &"
          highlightWord="Background"
          subtitle="A disciplined focus on constructing resilient backend architectures and clean software."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Editorial Glass Panel (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <GlassCard variant="elevated" className="p-6 sm:p-8 border-white/[0.12] rounded-3xl">
              {/* Terminal-like Window Header */}
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/[0.12] text-xs font-mono text-[#71717A]">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                  <span className="ml-2 text-white/70">ebrahim.profile.py</span>
                </div>
                <div className="flex items-center gap-1.5 text-white/50">
                  <MapPin className="w-3.5 h-3.5 text-[#FF7A00]" />
                  <span>{PERSONAL_INFO.location}</span>
                </div>
              </div>

              {/* Facts Row from profile */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pb-6 mb-6 border-b border-white/[0.12] text-xs font-mono">
                {PERSONAL_INFO.facts.map((fact, idx) => (
                  <div key={idx} className="p-3 rounded-2xl bg-white/[0.05] border border-white/[0.12]">
                    <p className="text-[10px] text-[#71717A] uppercase">{fact.label}</p>
                    <p className="mt-1 font-semibold text-[#F5F5F5]">{fact.value}</p>
                  </div>
                ))}
              </div>

              {/* Bio Narrative */}
              <div className="space-y-4 text-sm sm:text-base text-[#A1A1AA] leading-relaxed">
                {PERSONAL_INFO.aboutParagraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              {/* Focus check items */}
              <div className="mt-8 pt-6 border-t border-white/[0.12] grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono text-[#F5F5F5]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#34D399]" />
                  <span>Python / Django &amp; FastAPI</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#34D399]" />
                  <span>Scalable RESTful API Design</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#34D399]" />
                  <span>PostgreSQL &amp; MySQL Modeling</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#34D399]" />
                  <span>Clean Architecture &amp; OOP Patterns</span>
                </div>
              </div>
            </GlassCard>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {PERSONAL_INFO.stats.map((stat, i) => (
                <GlassCard
                  key={i}
                  className="p-4 text-center border-white/[0.12] hover:border-[#F53F06]/40 rounded-2xl transition-all"
                >
                  <p className="font-display font-bold text-xl sm:text-2xl bg-gradient-to-tr from-[#F53F06] to-[#FF7A00] bg-clip-text text-transparent">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-[11px] font-mono text-[#71717A] leading-tight">
                    {stat.label}
                  </p>
                </GlassCard>
              ))}
            </div>
          </div>

          {/* Right Column: Architectural Principles (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xs font-mono tracking-widest text-[#71717A] uppercase mb-3 flex items-center gap-2">
              <Cpu className="w-3.5 h-3.5 text-[#F53F06]" />
              Core Engineering Pillars
            </h3>

            {coreValues.map((val, idx) => (
              <GlassCard
                key={idx}
                variant="interactive"
                className="p-5 border-white/[0.12] hover:border-[#F53F06]/40 rounded-2xl transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-2xl bg-white/[0.05] border border-white/[0.12] shrink-0">
                    {val.icon}
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-[#F5F5F5] font-display">
                      {val.title}
                    </h4>
                    <p className="mt-1.5 text-xs sm:text-sm text-[#A1A1AA] leading-relaxed">
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
