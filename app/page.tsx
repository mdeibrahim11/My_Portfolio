import React from "react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#090B12] text-[#F5F5F5] flex flex-col selection:bg-[#F53F06]/30 selection:text-[#FF7A00]">
      {/* Site Header */}
      <SiteHeader />

      {/* Main Content Container */}
      <main className="flex-1 w-full relative">
        {/* Floor 01: Home / Hero */}
        <HeroSection />

        {/* Floor 02: About Me */}
        <AboutSection />

        {/* Floor 03: Skills & Expertise */}
        <SkillsSection />

        {/* Floor 04: Featured Projects */}
        <ProjectsSection />

        {/* Floor 05: Experience & Journey */}
        <ExperienceSection />

        {/* Floor 06: Contact */}
        <ContactSection />
      </main>

      {/* Site Footer */}
      <SiteFooter />
    </div>
  );
}
