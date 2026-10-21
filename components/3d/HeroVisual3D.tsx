"use client";

import React, { useEffect, useRef } from "react";
import { Cpu, Zap } from "lucide-react";

export function HeroVisual3D() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Check prefers-reduced-motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const reducedMotion = mediaQuery.matches;

    let animationFrameId: number;
    let isVisible = true;
    let width = 400;
    let height = 400;
    let dpr = 1;

    // Golden ratio for icosahedron vertices
    const phi = (1 + Math.sqrt(5)) / 2;
    const rawNodes: [number, number, number][] = [
      [-1, phi, 0],
      [1, phi, 0],
      [-1, -phi, 0],
      [1, -phi, 0],
      [0, -1, phi],
      [0, 1, phi],
      [0, -1, -phi],
      [0, 1, -phi],
      [phi, 0, -1],
      [phi, 0, 1],
      [-phi, 0, -1],
      [-phi, 0, 1],
    ];

    // Normalized unit vertices
    const unitNodes = rawNodes.map(([x, y, z]) => {
      const len = Math.sqrt(x * x + y * y + z * z);
      return [x / len, y / len, z / len] as [number, number, number];
    });

    // Edges between adjacent vertices on icosahedron
    const edges: [number, number][] = [];
    for (let i = 0; i < unitNodes.length; i++) {
      for (let j = i + 1; j < unitNodes.length; j++) {
        const dx = unitNodes[i][0] - unitNodes[j][0];
        const dy = unitNodes[i][1] - unitNodes[j][1];
        const dz = unitNodes[i][2] - unitNodes[j][2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (dist < 1.25) {
          edges.push([i, j]);
        }
      }
    }

    // Micro-particles
    const particles = Array.from({ length: 22 }, () => ({
      x: (Math.random() - 0.5) * 2.2,
      y: (Math.random() - 0.5) * 2.2,
      z: (Math.random() - 0.5) * 2.2,
      vx: (Math.random() - 0.5) * 0.003,
      vy: (Math.random() - 0.5) * 0.003,
      vz: (Math.random() - 0.5) * 0.003,
      size: Math.random() * 2 + 1,
      color: Math.random() > 0.5 ? "rgba(245, 63, 6, 0.75)" : "rgba(255, 122, 0, 0.75)",
    }));

    const updateSize = () => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      width = rect.width || 380;
      height = rect.height || 380;
      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.resetTransform();
      ctx.scale(dpr, dpr);
    };

    updateSize();
    window.addEventListener("resize", updateSize);

    // Pause when scrolled out of view
    const observer = new IntersectionObserver(
      (entries) => {
        isVisible = entries[0].isIntersecting;
      },
      { threshold: 0.1 }
    );
    observer.observe(canvas);

    // Mouse tracking for parallax
    let targetRotX = 0;
    let targetRotY = 0;
    let curRotX = 0;
    let curRotY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left - width / 2;
      const mouseY = e.clientY - rect.top - height / 2;
      targetRotY = (mouseX / width) * 0.6;
      targetRotX = -(mouseY / height) * 0.6;
    };
    window.addEventListener("mousemove", handleMouseMove);

    let baseAngleY = 0;
    let baseAngleX = 0;

    const render = () => {
      if (!isVisible) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      if (!reducedMotion) {
        baseAngleY += 0.004;
        baseAngleX += 0.0015;
        curRotX += (targetRotX - curRotX) * 0.05;
        curRotY += (targetRotY - curRotY) * 0.05;
      }

      const rotX = baseAngleX + curRotX;
      const rotY = baseAngleY + curRotY;

      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);
      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);

      const radius = Math.min(width, height) * 0.34;
      const fov = 380;
      const cx = width / 2;
      const cy = height / 2;

      // Rotate & project vertices
      const projected = unitNodes.map(([ux, uy, uz]) => {
        const nx = ux * radius;
        const ny = uy * radius;
        const nz = uz * radius;

        // Rotate Y
        const x1 = nx * cosY - nz * sinY;
        const z1 = nz * cosY + nx * sinY;
        // Rotate X
        const y2 = ny * cosX - z1 * sinX;
        const z2 = z1 * cosX + ny * sinX;

        const scale = fov / (fov + z2 + radius * 1.6);
        const px = cx + x1 * scale;
        const py = cy + y2 * scale;
        return { px, py, scale, z: z2 };
      });

      // Background radial glow
      const radial = ctx.createRadialGradient(cx, cy, 10, cx, cy, radius * 1.3);
      radial.addColorStop(0, "rgba(245, 63, 6, 0.16)");
      radial.addColorStop(0.5, "rgba(255, 122, 0, 0.08)");
      radial.addColorStop(1, "transparent");
      ctx.fillStyle = radial;
      ctx.beginPath();
      ctx.arc(cx, cy, radius * 1.3, 0, Math.PI * 2);
      ctx.fill();

      // Render micro-particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.z += p.vz;
        if (Math.abs(p.x) > 1.2) p.vx *= -1;
        if (Math.abs(p.y) > 1.2) p.vy *= -1;
        if (Math.abs(p.z) > 1.2) p.vz *= -1;

        const px = cx + p.x * radius;
        const py = cy + p.y * radius;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(px, py, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // Render wireframe edges
      edges.forEach(([i, j]) => {
        const p1 = projected[i];
        const p2 = projected[j];
        const avgZ = (p1.z + p2.z) / 2;
        const alpha = Math.max(0.12, Math.min(0.65, (avgZ + radius) / (radius * 2)));

        const gradient = ctx.createLinearGradient(p1.px, p1.py, p2.px, p2.py);
        gradient.addColorStop(0, `rgba(245, 63, 6, ${alpha})`);
        gradient.addColorStop(1, `rgba(255, 122, 0, ${alpha})`);

        ctx.strokeStyle = gradient;
        ctx.lineWidth = Math.max(0.8, 1.6 * ((p1.scale + p2.scale) / 2));
        ctx.beginPath();
        ctx.moveTo(p1.px, p1.py);
        ctx.lineTo(p2.px, p2.py);
        ctx.stroke();
      });

      // Render vertices
      projected.forEach((p) => {
        const nodeSize = Math.max(2, 4 * p.scale);
        const glow = ctx.createRadialGradient(p.px, p.py, 1, p.px, p.py, nodeSize * 2.2);
        glow.addColorStop(0, "rgba(245, 245, 245, 0.95)");
        glow.addColorStop(0.5, "rgba(245, 63, 6, 0.75)");
        glow.addColorStop(1, "transparent");

        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(p.px, p.py, nodeSize * 2.2, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = "#F5F5F5";
        ctx.beginPath();
        ctx.arc(p.px, p.py, nodeSize, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", updateSize);
      window.removeEventListener("mousemove", handleMouseMove);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="relative w-full max-w-[340px] sm:max-w-[420px] lg:max-w-[460px] aspect-square mx-auto flex items-center justify-center select-none">
      {/* Outer ambient blur aura */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#F53F06]/15 via-[#FF7A00]/10 to-transparent blur-3xl pointer-events-none" />

      {/* Canvas container */}
      <div className="relative w-full h-full flex items-center justify-center">
        <canvas
          ref={canvasRef}
          className="w-full h-full block rounded-3xl cursor-grab active:cursor-grabbing"
          aria-label="Interactive 3D geometry representing distributed systems architecture"
          role="img"
        />

        {/* Orbiting Satellite Badges */}
        <div className="absolute top-2 left-2 sm:top-4 sm:left-0 z-10">
          <div className="px-3.5 py-2 rounded-2xl bg-white/[0.05] backdrop-blur-md border border-white/[0.12] flex items-center gap-2 shadow-xl shadow-black/40 hover:border-[#F53F06]/40 transition-all duration-300">
            <span className="p-1 rounded-xl bg-[#F53F06]/20 text-[#F53F06]">
              <Cpu className="w-3.5 h-3.5" />
            </span>
            <div className="text-left">
              <p className="text-[9px] sm:text-[10px] text-white/50 uppercase tracking-wider font-mono">Architecture</p>
              <p className="text-xs font-semibold text-[#F5F5F5]">Python &amp; Distributed</p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-4 right-2 sm:bottom-6 sm:right-0 z-10">
          <div className="px-3.5 py-2 rounded-2xl bg-white/[0.05] backdrop-blur-md border border-white/[0.12] flex items-center gap-2 shadow-xl shadow-black/40 hover:border-[#FF7A00]/40 transition-all duration-300">
            <span className="p-1 rounded-xl bg-[#FF7A00]/20 text-[#FF7A00]">
              <Zap className="w-3.5 h-3.5" />
            </span>
            <div className="text-left">
              <p className="text-[9px] sm:text-[10px] text-white/50 uppercase tracking-wider font-mono">Telemetry</p>
              <p className="text-xs font-semibold text-[#F5F5F5]">FastAPI &lt;15ms</p>
            </div>
          </div>
        </div>

        <div className="absolute top-4 right-4 hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-mono text-[#34D399]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#34D399] animate-ping" />
          <span>SYS.ONLINE</span>
        </div>
      </div>
    </div>
  );
}
