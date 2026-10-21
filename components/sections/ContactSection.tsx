"use client";

import React, { useState } from "react";
import { PERSONAL_INFO } from "@/lib/portfolio-data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import {
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
  Terminal,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (formStatus === "error") setFormStatus("idle");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFormStatus("error");
      setErrorMessage("Please fill in all required fields (Name, Email, Message).");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setFormStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    setFormStatus("loading");
    setErrorMessage("");

    try {
      // Realistic communication packet simulation
      await new Promise((resolve) => setTimeout(resolve, 1200));

      setFormStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      setFormStatus("error");
      setErrorMessage("Transmission interrupted. Please reach out directly via email.");
    }
  };

  return (
    <section
      id="contact"
      aria-label="Contact Section"
      className="relative py-24 sm:py-32 scroll-mt-24 overflow-hidden"
    >
      {/* Background ambient light */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-[#F53F06]/[0.08] blur-[150px] pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-[#FF7A00]/[0.06] blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          floorNumber="06"
          floorLabel="Transmission Terminal"
          title="Direct Collaboration &"
          highlightWord="Inquiry"
          subtitle="Initiate an encrypted dispatch or reach out directly to discuss high-impact software engineering opportunities."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Channels & Telemetry Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <GlassCard variant="elevated" className="p-6 sm:p-8 border-white/[0.12] rounded-3xl">
              <div className="flex items-center gap-2 mb-6 text-xs font-mono text-[#FF7A00] uppercase tracking-wider">
                <Terminal className="w-4 h-4 text-[#FF7A00]" />
                <span>Node Endpoint Details</span>
              </div>

              <div className="space-y-6">
                {/* Email Channel */}
                <div className="flex items-start justify-between gap-4 p-4 rounded-2xl bg-white/[0.05] border border-white/[0.12]">
                  <div className="flex items-start gap-3">
                    <div className="p-2.5 rounded-2xl bg-[#F53F06]/10 text-[#F53F06] border border-[#F53F06]/20">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] font-mono text-[#71717A] uppercase">Primary Email</p>
                      <a
                        href={`mailto:${PERSONAL_INFO.email}`}
                        className="text-sm font-medium text-[#F5F5F5] hover:text-[#FF7A00] transition-colors break-all"
                      >
                        {PERSONAL_INFO.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    aria-label="Copy email address"
                    className="p-2.5 rounded-2xl bg-white/[0.05] border border-white/[0.12] text-[#A1A1AA] hover:text-white hover:bg-white/[0.1] transition-all"
                    title="Copy to clipboard"
                  >
                    {copiedEmail ? (
                      <Check className="w-3.5 h-3.5 text-[#34D399]" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>

                {/* Location Node */}
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/[0.05] border border-white/[0.12]">
                  <div className="p-2.5 rounded-2xl bg-[#FF7A00]/10 text-[#FF7A00] border border-[#FF7A00]/20">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-[#71717A] uppercase">Base Station</p>
                    <p className="text-sm font-medium text-[#F5F5F5]">{PERSONAL_INFO.location}</p>
                  </div>
                </div>

                {/* Social Nodes */}
                <div className="pt-2">
                  <p className="text-xs font-mono text-[#71717A] uppercase mb-3">External Links</p>
                  <div className="grid grid-cols-2 gap-3">
                    <a
                      href={PERSONAL_INFO.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2.5 p-3 rounded-2xl bg-white/[0.05] border border-white/[0.12] hover:border-[#F53F06]/40 hover:bg-white/[0.08] text-xs font-medium text-[#A1A1AA] hover:text-white transition-all"
                    >
                      <GithubIcon className="w-4 h-4 text-white/70" />
                      <span>GitHub</span>
                    </a>
                    <a
                      href={PERSONAL_INFO.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2.5 p-3 rounded-2xl bg-white/[0.05] border border-white/[0.12] hover:border-[#FF7A00]/40 hover:bg-white/[0.08] text-xs font-medium text-[#A1A1AA] hover:text-white transition-all"
                    >
                      <LinkedinIcon className="w-4 h-4 text-[#FF7A00]" />
                      <span>LinkedIn</span>
                    </a>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Right Column: Contact Message Form (7 cols) */}
          <div className="lg:col-span-7">
            <GlassCard variant="elevated" className="p-6 sm:p-8 border-white/[0.12] rounded-3xl">
              <h3 className="text-lg font-bold font-display text-[#F5F5F5] mb-2">
                Transmit a Message
              </h3>
              <p className="text-xs sm:text-sm text-[#A1A1AA] mb-6">
                Have a proposal, technical inquiry, or architecture question? Leave a dispatch below.
              </p>

              {formStatus === "success" ? (
                <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="inline-flex p-3 rounded-full bg-emerald-500/20 text-[#34D399]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-[#F5F5F5]">Transmission Received</h4>
                    <p className="text-xs text-[#A1A1AA] mt-1">
                      Thank you for reaching out. I will respond to your dispatch promptly.
                    </p>
                  </div>
                  <button
                    onClick={() => setFormStatus("idle")}
                    className="px-5 py-2.5 rounded-2xl text-xs font-mono bg-white/[0.05] border border-white/[0.12] hover:bg-white/[0.1] text-white transition-all"
                  >
                    Send Another Dispatch
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  {formStatus === "error" && (
                    <div className="p-3.5 rounded-2xl bg-red-500/10 border border-red-500/30 text-xs text-red-200 flex items-center gap-2.5">
                      <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-xs font-mono text-[#71717A] mb-1.5 uppercase"
                      >
                        Your Name <span className="text-[#F53F06]">*</span>
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Ada Lovelace"
                        className="w-full px-4 py-2.5 rounded-2xl bg-white/[0.05] border border-white/[0.12] text-sm text-[#F5F5F5] placeholder-white/20 focus:outline-none focus:border-[#F53F06] focus:ring-1 focus:ring-[#F53F06] transition-all"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-xs font-mono text-[#71717A] mb-1.5 uppercase"
                      >
                        Email Address <span className="text-[#F53F06]">*</span>
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="ada@example.com"
                        className="w-full px-4 py-2.5 rounded-2xl bg-white/[0.05] border border-white/[0.12] text-sm text-[#F5F5F5] placeholder-white/20 focus:outline-none focus:border-[#F53F06] focus:ring-1 focus:ring-[#F53F06] transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-subject"
                      className="block text-xs font-mono text-[#71717A] mb-1.5 uppercase"
                    >
                      Subject / Objective
                    </label>
                    <input
                      id="contact-subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Software Engineering & Python Opportunity"
                      className="w-full px-4 py-2.5 rounded-2xl bg-white/[0.05] border border-white/[0.12] text-sm text-[#F5F5F5] placeholder-white/20 focus:outline-none focus:border-[#F53F06] focus:ring-1 focus:ring-[#F53F06] transition-all"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-mono text-[#71717A] mb-1.5 uppercase"
                    >
                      Message Payload <span className="text-[#F53F06]">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Outline your project scope, timeline, or engineering inquiry..."
                      className="w-full px-4 py-2.5 rounded-2xl bg-white/[0.05] border border-white/[0.12] text-sm text-[#F5F5F5] placeholder-white/20 focus:outline-none focus:border-[#F53F06] focus:ring-1 focus:ring-[#F53F06] transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={formStatus === "loading"}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl text-sm font-semibold text-white bg-gradient-to-r from-[#F53F06] to-[#FF7A00] hover:from-[#FF5722] hover:to-[#FFA000] disabled:opacity-50 shadow-lg shadow-[#F53F06]/25 active:scale-95 transition-all duration-200"
                  >
                    {formStatus === "loading" ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Transmitting Packet...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Transmission</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}
