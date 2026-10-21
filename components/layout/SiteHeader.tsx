"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PERSONAL_INFO } from "@/lib/portfolio-data";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

const NAV_ITEMS = [
  { label: "Overview", id: "hero" },
  { label: "About", id: "about" },
  { label: "Expertise", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Experience", id: "experience" },
  { label: "Contact", id: "contact" },
];

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("hero");
  const isClickScrolling = useRef(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  // Handle scroll appearance without changing container height
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Robust, smooth scroll spy for active section tracking
  useEffect(() => {
    if (!isHomePage) return;

    const handleScrollSpy = () => {
      if (isClickScrolling.current) return;

      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // 1. Near the very top -> Activate Hero
      if (scrollY < 140) {
        setActiveSection("hero");
        return;
      }

      // 2. Near the very bottom -> Activate Contact
      if (windowHeight + scrollY >= documentHeight - 100) {
        setActiveSection("contact");
        return;
      }

      // 3. Check section offsets from bottom to top
      const sectionPositions = NAV_ITEMS.map((item) => {
        const el = document.getElementById(item.id);
        return {
          id: item.id,
          top: el ? el.offsetTop - 120 : 0,
        };
      });

      for (let i = sectionPositions.length - 1; i >= 0; i--) {
        if (scrollY >= sectionPositions[i].top) {
          setActiveSection(sectionPositions[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScrollSpy, { passive: true });
    handleScrollSpy();
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, [isHomePage]);

  // Smooth scroll with precise header height offset and click guard
  const handleNavClick = (e: React.MouseEvent, targetId: string) => {
    setMobileMenuOpen(false);

    if (isHomePage) {
      e.preventDefault();
      setActiveSection(targetId);
      isClickScrolling.current = true;

      if (targetId === "hero") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const element = document.getElementById(targetId);
        if (element) {
          const headerHeight = 76;
          const elementPosition = element.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({
            top: elementPosition - headerHeight,
            behavior: "smooth",
          });
        }
      }

      // Re-enable scroll spy once smooth scrolling settles
      setTimeout(() => {
        isClickScrolling.current = false;
      }, 750);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${isScrolled || mobileMenuOpen
          ? "bg-black/55 backdrop-blur-3xl backdrop-saturate-[200%] border-white/16 shadow-[0_16px_45px_rgba(0,0,0,0.85),inset_0_-1px_0_0_rgba(255,255,255,0.1)]"
          : "bg-black/30 backdrop-blur-2xl backdrop-saturate-[180%] border-white/12 shadow-[0_8px_30px_rgba(0,0,0,0.5)]"
        }`}
    >
      {/* Top subtle specular edge highlight */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none" />

      {/* Stable fixed height to prevent resizing on scroll */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-18 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="/#hero"
          onClick={(e) => handleNavClick(e, "hero")}
          className="group flex items-center gap-2 text-left rounded-xl p-1.5 focus:outline-none focus:ring-1 focus:ring-[#F53F06]"
          aria-label="mdeibrahim11 - Home"
        >
          <div className="flex items-center gap-2">
            <span className="font-display font-bold text-lg gradient-text-primary tracking-tight group-hover:brightness-110 transition-all">
              mdeibrahim11
            </span>
            <span className="text-[10px] font-anta px-2.5 py-0.5 rounded-full bg-white/[0.05] backdrop-blur-md text-[#F53F06] border border-[#F53F06]/35 shadow-[inset_0_1px_1px_rgba(255,255,255,0.25)] hidden sm:inline">
              DEV
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links - Floating Glass Dock */}
        <nav
          aria-label="Primary desktop navigation"
          className="hidden md:flex items-center gap-1 p-1.5 rounded-full bg-gradient-to-r from-white/[0.09] via-white/[0.035] to-white/[0.09] backdrop-blur-3xl backdrop-saturate-[200%] border border-white/18 shadow-[0_12px_36px_rgba(0,0,0,0.6),inset_0_1px_1px_0_rgba(255,255,255,0.26)] text-xs"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = isHomePage && activeSection === item.id;
            return (
              <Link
                key={item.id}
                href={`/#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`relative px-4 py-1.5 rounded-full font-anta font-medium transition-all duration-200 cursor-pointer select-none outline-none focus:outline-none border ${isActive
                    ? "bg-gradient-to-r from-[#F53F06] to-[#D83300] text-white border-white/35 shadow-[0_0_22px_rgba(245,63,6,0.6),inset_0_1px_1.5px_0_rgba(255,255,255,0.5)]"
                    : "bg-transparent text-[#A1A1AA] border-transparent hover:text-white hover:bg-white/[0.08] hover:shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.18)]"
                  }`}
              >
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Action Buttons & Socials */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2.5 rounded-2xl bg-white/[0.05] backdrop-blur-2xl border border-white/18 text-[#A1A1AA] hover:text-[#F53F06] hover:border-[#F53F06]/55 hover:bg-white/[0.10] shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.2),0_4px_16px_rgba(0,0,0,0.3)] transition-all hover:-translate-y-0.5"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2.5 rounded-2xl bg-white/[0.05] backdrop-blur-2xl border border-white/18 text-[#A1A1AA] hover:text-[#F53F06] hover:border-[#F53F06]/55 hover:bg-white/[0.10] shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.2),0_4px_16px_rgba(0,0,0,0.3)] transition-all hover:-translate-y-0.5"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>

          <Link
            href="/#contact"
            onClick={(e) => handleNavClick(e, "contact")}
            className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-2xl text-xs font-semibold font-display text-white bg-gradient-to-r from-[#F53F06] to-[#D83300] backdrop-blur-md border border-white/30 shadow-[0_8px_24px_rgba(245,63,6,0.45),inset_0_1px_1.5px_rgba(255,255,255,0.5)] hover:shadow-[0_12px_32px_rgba(245,63,6,0.65),inset_0_1px_2px_rgba(255,255,255,0.65)] hover:-translate-y-0.5 transition-all duration-200"
          >
            <span>Get in Touch</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            className="p-2.5 rounded-2xl bg-white/[0.05] backdrop-blur-2xl border border-white/18 text-[#F5F5F5] hover:border-[#F53F06]/55 hover:bg-white/[0.10] shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.2)] transition-all"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation - Frosted Glass Sheet */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/16 bg-black/70 backdrop-blur-3xl backdrop-saturate-[200%] px-4 pt-4 pb-8 space-y-4 animate-in slide-in-from-top-2 duration-200 shadow-[0_25px_60px_rgba(0,0,0,0.95)]">
          <nav aria-label="Mobile navigation" className="space-y-1">
            {NAV_ITEMS.map((item) => {
              const isActive = isHomePage && activeSection === item.id;
              return (
                <Link
                  key={item.id}
                  href={`/#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`flex items-center justify-between px-4 py-3 rounded-2xl font-anta text-sm font-medium transition-all duration-200 outline-none border ${isActive
                      ? "bg-gradient-to-r from-[#F53F06]/25 to-[#F53F06]/10 text-[#F53F06] font-semibold border-[#F53F06]/50 shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),0_0_20px_rgba(245,63,6,0.25)]"
                      : "bg-white/[0.03] text-[#A1A1AA] border-white/12 hover:text-[#F5F5F5] hover:bg-white/[0.07] hover:border-white/20"
                    }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-[#F53F06] shadow-[0_0_10px_#F53F06]" />}
                </Link>
              );
            })}
          </nav>

          <div className="pt-4 border-t border-white/16 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-2xl bg-white/[0.05] backdrop-blur-2xl border border-white/18 text-[#A1A1AA] hover:text-[#F53F06] shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-2xl bg-white/[0.05] backdrop-blur-2xl border border-white/18 text-[#A1A1AA] hover:text-[#F53F06] shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>

            <Link
              href="/#contact"
              onClick={(e) => handleNavClick(e, "contact")}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-2xl text-xs font-semibold font-display bg-gradient-to-r from-[#F53F06] to-[#D83300] border border-white/30 text-white shadow-[0_6px_20px_rgba(245,63,6,0.4)]"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
