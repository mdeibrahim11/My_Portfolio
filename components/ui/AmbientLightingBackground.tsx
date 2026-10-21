import React from "react";

/**
 * AmbientLightingBackground
 * 
 * Provides atmospheric lighting and breathing glow system for Glassmorphism:
 * - Dynamic background color canvas with radial-gradient depth
 * - Signature vermilion primary accent (#F53F06) radial gradients
 * - Secondary cyber electric indigo (#6366F1) and cyan (#06B6D4) refraction gradients
 * - Multi-tiered organic breathing animations (@keyframes breathe)
 * - Translucent cyber grid overlay
 * - Tactile SVG film grain texture (feTurbulence)
 */
export function AmbientLightingBackground() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none"
    >
      {/* 0. Multi-stop Background Ambient Gradient Canvas */}
      <div
        className="absolute inset-0 pointer-events-none opacity-80"
        style={{
          background: "var(--gradient-bg-ambient)",
        }}
      />

      {/* 1. Base Cyber Grid spanning entire viewport */}
      <div className="absolute inset-0 bg-cyber-grid opacity-60 pointer-events-none" />

      {/* 2. Top-Hero Primary Ambient Glow Orb (#F53F06) */}
      <div
        className="absolute -top-[14%] left-[8%] sm:left-[18%] w-[580px] h-[580px] sm:w-[880px] sm:h-[880px] lg:w-[1100px] lg:h-[1100px] rounded-full glow-t blur-[110px] sm:blur-[160px] animate-breathe pointer-events-none will-change-transform"
      />

      {/* 2b. Hero Secondary Cyber Indigo Accent Glow (#6366F1) for Glass Prism Refraction */}
      <div
        className="absolute top-[6%] -left-[8%] w-[440px] h-[440px] sm:w-[680px] sm:h-[680px] rounded-full glow-subtle-purple blur-[140px] pointer-events-none opacity-60 animate-breathe-slow"
      />

      {/* 3. Middle-Right Primary Ambient Glow Orb (#F53F06) */}
      <div
        className="absolute top-[30%] -right-[12%] sm:-right-[6%] w-[480px] h-[480px] sm:w-[780px] sm:h-[780px] lg:w-[920px] lg:h-[920px] rounded-full glow-ambient blur-[120px] sm:blur-[170px] animate-breathe-alt pointer-events-none will-change-transform"
      />

      {/* 3b. Skills / Projects Secondary Subtle Cyan-Blue Refraction Glow (#06B6D4) */}
      <div
        className="absolute top-[44%] left-[2%] w-[460px] h-[460px] sm:w-[700px] sm:h-[700px] rounded-full glow-subtle-cyan blur-[150px] pointer-events-none opacity-55 animate-breathe"
      />

      {/* 4. Experience Section Secondary Radiant Indigo/Violet Refraction Glow */}
      <div
        className="absolute top-[60%] -right-[6%] w-[460px] h-[460px] sm:w-[680px] sm:h-[680px] rounded-full glow-subtle-purple blur-[150px] pointer-events-none opacity-50 animate-breathe-slow"
      />

      {/* 5. Lower-Left Primary Ambient Glow Orb (#F53F06) */}
      <div
        className="absolute top-[70%] -left-[10%] sm:-left-[5%] w-[480px] h-[480px] sm:w-[720px] sm:h-[720px] lg:w-[880px] lg:h-[880px] rounded-full glow-c blur-[120px] sm:blur-[160px] animate-breathe pointer-events-none will-change-transform"
      />

      {/* 6. Bottom-Right Primary Ambient Glow Orb (#F53F06) */}
      <div
        className="absolute -bottom-[10%] right-[4%] sm:right-[14%] w-[560px] h-[560px] sm:w-[820px] sm:h-[820px] lg:w-[980px] lg:h-[980px] rounded-full glow-k blur-[130px] sm:blur-[180px] animate-breathe-alt pointer-events-none will-change-transform"
      />

      {/* 7. Subtle Film Grain Texture Overlay */}
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
