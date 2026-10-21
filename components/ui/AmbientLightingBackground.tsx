"use client";

import React, { useEffect, useRef } from "react";

/**
 * AmbientLightingBackground
 * 
 * Recreates the exact signature atmospheric lighting and breathing glow system 
 * from https://github.com/mdeibrahim11 (SVG profile generator):
 * - Signature vermilion accent (#F53F06) radial gradients with 3-stop falloff
 * - Multi-tiered organic breathing animations (@keyframes breathe 9s / 12s / 15s)
 * - Continuous cyber grid overlay across the entire page
 * - Tactile SVG film grain texture (feTurbulence)
 * - High-performance GPU-accelerated cursor spotlight illuminating the cyber grid underneath
 */
export function AmbientLightingBackground() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Disable mouse spotlight if device is touch-only or prefers reduced motion
    const isTouch = window.matchMedia("(hover: none)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (isTouch || prefersReducedMotion) return;

    let rafId: number;
    let targetX = -9999;
    let targetY = -9999;
    let currentX = -9999;
    let currentY = -9999;
    let hasMoved = false;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;

      if (!hasMoved) {
        hasMoved = true;
        currentX = targetX;
        currentY = targetY;
        container.style.setProperty("--spotlight-opacity", "1");
      }
    };

    const handleMouseLeave = () => {
      container.style.setProperty("--spotlight-opacity", "0");
    };

    const handleMouseEnter = () => {
      if (hasMoved) {
        container.style.setProperty("--spotlight-opacity", "1");
      }
    };

    const animate = () => {
      if (hasMoved) {
        currentX += (targetX - currentX) * 0.15;
        currentY += (targetY - currentY) * 0.15;
        container.style.setProperty("--mouse-x", `${Math.round(currentX)}px`);
        container.style.setProperty("--mouse-y", `${Math.round(currentY)}px`);
      }
      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none"
      style={
        {
          "--mouse-x": "-9999px",
          "--mouse-y": "-9999px",
          "--spotlight-opacity": "0",
        } as React.CSSProperties
      }
    >
      {/* 1. Base Cyber Grid spanning entire viewport */}
      <div className="absolute inset-0 bg-cyber-grid opacity-75 pointer-events-none" />

      {/* 2. Top-Hero Ambient Glow Orb (glowT: stop 0: #F53F06 0.38, stop 0.5: 0.08, stop 1: 0) */}
      <div
        className="absolute -top-[12%] left-[10%] sm:left-[20%] w-[580px] h-[580px] sm:w-[850px] sm:h-[850px] lg:w-[1000px] lg:h-[1000px] rounded-full glow-t blur-[110px] sm:blur-[160px] animate-breathe pointer-events-none will-change-transform"
      />

      {/* 3. Middle-Right Ambient Glow Orb (glowP: stop 0: #F53F06 0.22, stop 1: 0) */}
      <div
        className="absolute top-[32%] -right-[10%] sm:-right-[5%] w-[480px] h-[480px] sm:w-[720px] sm:h-[720px] lg:w-[860px] lg:h-[860px] rounded-full glow-ambient blur-[120px] sm:blur-[170px] animate-breathe-alt pointer-events-none will-change-transform"
      />

      {/* 4. Lower-Left Ambient Glow Orb (glowC / glowW: stop 0: #F53F06 0.20, stop 1: 0) */}
      <div
        className="absolute top-[64%] -left-[10%] sm:-left-[5%] w-[460px] h-[460px] sm:w-[680px] sm:h-[680px] lg:w-[820px] lg:h-[820px] rounded-full glow-c blur-[120px] sm:blur-[160px] animate-breathe-slow pointer-events-none will-change-transform"
      />

      {/* 5. Bottom-Right Ambient Glow Orb (glowK: stop 0: #F53F06 0.28, stop 1: 0) */}
      <div
        className="absolute -bottom-[8%] right-[5%] sm:right-[15%] w-[520px] h-[520px] sm:w-[780px] sm:h-[780px] lg:w-[920px] lg:h-[920px] rounded-full glow-k blur-[130px] sm:blur-[180px] animate-breathe pointer-events-none will-change-transform"
      />

      {/* 6. Dynamic Interactive Mouse Spotlight (Subtle vermilion illumination) */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={{
          opacity: "var(--spotlight-opacity, 0)",
          background:
            "radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(245, 63, 6, 0.09), transparent 65%)",
        }}
      />

      {/* 7. Subtle Film Grain Texture Overlay (from src/lib/svg.ts grainDefs) */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.035] mix-blend-screen"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="ambient-grain" x="0" y="0" width="100%" height="100%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.85"
            numOctaves={2}
            stitchTiles="stitch"
          />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.5 0"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#ambient-grain)" />
      </svg>
    </div>
  );
}
