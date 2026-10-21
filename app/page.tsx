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
    <div className="relative min-h-screen bg-[#000000] text-[#F5F5F5] flex flex-col selection:bg-[#F53F06]/30 selection:text-[#F53F06]">
      {/* Site Header */}
      <SiteHeader />

      {/* Main Content Container */}
      <main className="flex-1 w-full relative">
        {/* Floor 001: Home */}
        <HeroSection />

        {/* Floor 002: About */}
        <AboutSection />

        {/* Floor 003: Expertise */}
        <SkillsSection />

        {/* Floor 004: Projects */}
        <ProjectsSection />

        {/* Floor 005: Experience */}
        <ExperienceSection />

        {/* Floor 006: Contact */}
        <ContactSection />
      </main>

      {/* Site Footer */}
      <SiteFooter />
    </div>
  );
}
