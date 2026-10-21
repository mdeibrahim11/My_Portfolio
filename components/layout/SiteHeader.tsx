"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PERSONAL_INFO } from "@/lib/portfolio-data";
import { Mail, Menu, X, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

const NAV_ITEMS = [
  { label: "Overview", id: "hero" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Journey", id: "experience" },
  { label: "Contact", id: "contact" },
];

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("hero");
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  // Handle scroll appearance
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track active section on home page
  useEffect(() => {
    if (!isHomePage) return;

    const sections = NAV_ITEMS.map((item) => document.getElementById(item.id)).filter(
      Boolean
    ) as HTMLElement[];

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          visible.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: "-20% 0px -40% 0px", threshold: [0.1, 0.3, 0.6] }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [isHomePage]);

  // Smooth scroll with precise header height offset
  const handleNavClick = (e: React.MouseEvent, targetId: string) => {
    setMobileMenuOpen(false);

    if (isHomePage) {
      e.preventDefault();
      if (targetId === "hero") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      const element = document.getElementById(targetId);
      if (element) {
        const headerHeight = 84;
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - headerHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
    // If not on home page, normal navigation via href="/#targetId" proceeds
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || mobileMenuOpen
          ? "py-3 bg-[#090B12]/90 backdrop-blur-xl border-b border-white/[0.12] shadow-xl shadow-black/50"
          : "py-4 sm:py-5 bg-[#090B12]/40 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="/#hero"
          onClick={(e) => handleNavClick(e, "hero")}
          className="group flex items-center gap-3 text-left focus:outline-none focus:ring-2 focus:ring-[#F53F06] rounded-2xl p-1"
          aria-label="Md Eibrahim Molla - Home"
        >
          <div className="relative flex items-center justify-center w-10 h-10 rounded-2xl bg-white/[0.05] border border-white/[0.12] group-hover:border-[#F53F06]/50 group-hover:shadow-md group-hover:shadow-[#F53F06]/20 transition-all duration-300">
            <span className="font-display font-bold text-sm bg-gradient-to-tr from-[#F53F06] to-[#FF7A00] bg-clip-text text-transparent">
              EM
            </span>
            <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-[#34D399] border-2 border-[#090B12]" />
          </div>

          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-display font-bold text-sm sm:text-base tracking-tight text-[#F5F5F5] group-hover:text-white">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-lg bg-[#F53F06]/10 text-[#F53F06] border border-[#F53F06]/20 hidden sm:inline">
                DEV
              </span>
            </div>
            <p className="text-[11px] font-mono text-[#71717A] hidden md:block">
              Software Engineer &amp; Python
            </p>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav
          aria-label="Primary desktop navigation"
          className="hidden md:flex items-center gap-1 p-1.5 rounded-full bg-white/[0.05] backdrop-blur-md border border-white/[0.12] text-xs font-medium"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = isHomePage && activeSection === item.id;
            return (
              <Link
                key={item.id}
                href={`/#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`relative px-3.5 py-1.5 rounded-full transition-all duration-200 ${
                  isActive
                    ? "bg-white/[0.12] text-white font-semibold border border-white/[0.15] shadow-sm shadow-black/40"
                    : "text-white/70 hover:text-white hover:bg-white/[0.05]"
                }`}
              >
                <span>{item.label}</span>
                {isActive && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3 h-0.5 rounded-full bg-gradient-to-r from-[#F53F06] to-[#FF7A00]" />
                )}
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
            className="p-2.5 rounded-2xl bg-white/[0.05] border border-white/[0.12] text-white/70 hover:text-white hover:border-[#F53F06]/40 hover:bg-white/[0.08] transition-all"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2.5 rounded-2xl bg-white/[0.05] border border-white/[0.12] text-white/70 hover:text-white hover:border-[#FF7A00]/40 hover:bg-white/[0.08] transition-all"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>

          <Link
            href="/#contact"
            onClick={(e) => handleNavClick(e, "contact")}
            className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-2xl text-xs font-semibold bg-gradient-to-r from-[#F53F06]/20 to-[#FF7A00]/20 hover:from-[#F53F06]/35 hover:to-[#FF7A00]/35 border border-[#F53F06]/40 text-[#F5F5F5] shadow-sm hover:shadow-[#F53F06]/20 transition-all duration-300"
          >
            <span>Initiate Contact</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-[#FF7A00]" />
          </Link>
        </div>

        {/* Mobile Menu Trigger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
          className="md:hidden p-2.5 rounded-2xl bg-white/[0.05] border border-white/[0.12] text-white/80 hover:text-white active:scale-95 transition-all"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#101523]/95 backdrop-blur-xl border-b border-white/[0.12] px-6 py-6 mt-3 space-y-4 max-h-[80vh] overflow-y-auto animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-1 font-medium text-sm">
            {NAV_ITEMS.map((item) => {
              const isActive = isHomePage && activeSection === item.id;
              return (
                <Link
                  key={item.id}
                  href={`/#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`flex items-center justify-between py-3 px-3 rounded-2xl transition-all ${
                    isActive
                      ? "bg-[#F53F06]/20 text-white font-semibold border border-[#F53F06]/30"
                      : "text-white/70 hover:text-white hover:bg-white/[0.04]"
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF7A00] animate-pulse" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="pt-4 flex items-center justify-between border-t border-white/[0.12]">
            <div className="flex items-center gap-2">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2.5 rounded-2xl bg-white/[0.05] border border-white/[0.12] text-white/70 hover:text-white"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2.5 rounded-2xl bg-white/[0.05] border border-white/[0.12] text-white/70 hover:text-white"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                aria-label="Email"
                className="p-2.5 rounded-2xl bg-white/[0.05] border border-white/[0.12] text-white/70 hover:text-white"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <Link
              href="/#contact"
              onClick={(e) => handleNavClick(e, "contact")}
              className="px-4 py-2 rounded-2xl text-xs font-semibold bg-gradient-to-r from-[#F53F06] to-[#FF7A00] text-white"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
