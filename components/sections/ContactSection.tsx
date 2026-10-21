"use client";

import React, { useState } from "react";
import { PERSONAL_INFO } from "@/lib/portfolio-data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import {
  Mail,
  MapPin,
  Send,
  Terminal,
  Check,
  Copy,
  AlertCircle,
  CheckCircle2,
  Phone,
} from "lucide-react";
import { GithubIcon, LinkedinIcon, FacebookIcon } from "@/components/ui/Icons";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.whatsapp);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFormStatus("error");
      setErrorMessage("Please complete all required fields before transmission.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      setFormStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    setFormStatus("loading");

    try {
      await new Promise((resolve) => setTimeout(resolve, 800));
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          floorNumber="006"
          floorLabel="Contact"
          title="Direct Collaboration &"
          highlightWord="Inquiry"
          subtitle="Get in touch to discuss software engineering, backend architecture, or project collaborations."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Channels (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <GlassCard variant="elevated" shimmer className="p-6 sm:p-8 rounded-3xl">
              <div className="flex items-center gap-2 mb-6 text-xs font-anta text-[#A1A1AA] uppercase tracking-wider">
                <Terminal className="w-4 h-4 text-[#F53F06]" />
                <span>Contact Information</span>
              </div>

              <div className="space-y-4">
                {/* Email Channel */}
                <div className="flex items-start justify-between gap-4 p-4 rounded-2xl bg-white/[0.045] backdrop-blur-xl border border-white/16 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] hover:border-[#F53F06]/50 hover:bg-white/[0.08] transition-all">
                  <div className="flex items-start gap-3">
                    <div className="p-2.5 rounded-xl bg-[#F53F06]/20 text-[#F53F06] border border-[#F53F06]/40 shadow-[0_0_14px_rgba(245,63,6,0.3)]">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] font-anta text-[#71717A] uppercase">Email</p>
                      <a
                        href={`mailto:${PERSONAL_INFO.email}`}
                        className="text-sm font-medium text-[#F5F5F5] hover:text-[#F53F06] transition-colors break-all"
                      >
                        {PERSONAL_INFO.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    aria-label="Copy email address"
                    className="p-2.5 rounded-xl bg-white/[0.05] border border-white/16 text-[#A1A1AA] hover:text-[#F53F06] hover:bg-white/[0.10] shadow-[inset_0_1px_1px_rgba(255,255,255,0.18)] transition-all cursor-pointer"
                    title="Copy to clipboard"
                  >
                    {copiedEmail ? (
                      <Check className="w-3.5 h-3.5 text-[#F53F06]" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>

                {/* Phone Channel */}
                <div className="flex items-start justify-between gap-4 p-4 rounded-2xl bg-white/[0.045] backdrop-blur-xl border border-white/16 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] hover:border-[#6366F1]/50 hover:bg-white/[0.08] transition-all">
                  <div className="flex items-start gap-3">
                    <div className="p-2.5 rounded-xl bg-[#6366F1]/20 text-[#6366F1] border border-[#6366F1]/40 shadow-[0_0_14px_rgba(99,102,241,0.3)]">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] font-anta text-[#71717A] uppercase">WhatsApp</p>
                      <a
                        href="https://wa.me/mdeibrahim11"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-[#F5F5F5] hover:text-[#6366F1] transition-colors"
                      >
                        mdeibrahim11
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyPhone}
                    aria-label="Copy phone number"
                    className="p-2.5 rounded-xl bg-white/[0.05] border border-white/16 text-[#A1A1AA] hover:text-[#6366F1] hover:bg-white/[0.10] shadow-[inset_0_1px_1px_rgba(255,255,255,0.18)] transition-all cursor-pointer"
                    title="Copy phone"
                  >
                    {copiedPhone ? (
                      <Check className="w-3.5 h-3.5 text-[#6366F1]" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>

                {/* Location */}
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/[0.045] backdrop-blur-xl border border-white/16 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] hover:border-[#06B6D4]/50 transition-all">
                  <div className="p-2.5 rounded-xl bg-[#06B6D4]/20 text-[#06B6D4] border border-[#06B6D4]/40 shadow-[0_0_14px_rgba(6,182,212,0.3)]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] font-anta text-[#71717A] uppercase">Location</p>
                    <p className="text-sm font-medium text-[#F5F5F5]">{PERSONAL_INFO.location}</p>
                  </div>
                </div>

                {/* Social Nodes */}
                <div className="pt-2">
                  <p className="text-xs font-anta text-[#71717A] uppercase mb-3">Online Profiles</p>
                  <div className="grid grid-cols-3 gap-2.5">
                    <a
                      href={PERSONAL_INFO.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 p-3 rounded-2xl bg-white/[0.045] backdrop-blur-xl border border-white/15 hover:border-[#F53F06]/55 hover:bg-white/[0.08] text-xs font-anta text-[#A1A1AA] hover:text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.18)] transition-all hover:-translate-y-0.5"
                    >
                      <GithubIcon className="w-4 h-4 text-[#F53F06]" />
                      <span>GitHub</span>
                    </a>
                    <a
                      href={PERSONAL_INFO.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 p-3 rounded-2xl bg-white/[0.045] backdrop-blur-xl border border-white/15 hover:border-[#6366F1]/55 hover:bg-white/[0.08] text-xs font-anta text-[#A1A1AA] hover:text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.18)] transition-all hover:-translate-y-0.5"
                    >
                      <LinkedinIcon className="w-4 h-4 text-[#6366F1]" />
                      <span>LinkedIn</span>
                    </a>
                    <a
                      href={PERSONAL_INFO.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 p-3 rounded-2xl bg-white/[0.045] backdrop-blur-xl border border-white/15 hover:border-[#06B6D4]/55 hover:bg-white/[0.08] text-xs font-anta text-[#A1A1AA] hover:text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.18)] transition-all hover:-translate-y-0.5"
                    >
                      <FacebookIcon className="w-4 h-4 text-[#06B6D4]" />
                      <span>Facebook</span>
                    </a>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Right Column: Contact Message Form (7 cols) */}
          <div className="lg:col-span-7">
            <GlassCard variant="elevated" glow glowColor="duo" shimmer className="p-6 sm:p-8 rounded-3xl">
              <h3 className="text-lg font-bold font-display text-[#F5F5F5] mb-2">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-[#A1A1AA] font-light mb-6">
                Have a project in mind or want to explore collaboration? Send a message below.
              </p>

              {formStatus === "success" ? (
                <div className="p-6 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-[#F53F06]/40 text-center space-y-4 animate-in fade-in duration-300 shadow-[0_0_30px_rgba(245,63,6,0.25)]">
                  <div className="inline-flex p-3 rounded-full bg-[#F53F06]/20 text-[#F53F06] border border-[#F53F06]/40 shadow-[0_0_20px_rgba(245,63,6,0.4)]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold font-display text-[#F5F5F5]">Message Received</h4>
                    <p className="text-xs text-[#A1A1AA] font-light mt-1">
                      Thank you for reaching out. I will review your message and reply promptly.
                    </p>
                  </div>
                  <button
                    onClick={() => setFormStatus("idle")}
                    className="glass-btn-secondary px-5 py-2.5 rounded-xl text-xs font-anta cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  {formStatus === "error" && (
                    <div className="p-3.5 rounded-xl bg-red-500/10 backdrop-blur-md border border-red-500/30 text-xs text-red-200 flex items-center gap-2.5">
                      <AlertCircle className="w-4 h-4 text-[#F53F06] shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-xs font-anta text-[#A1A1AA] mb-1.5 uppercase tracking-wider"
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
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl glass-input text-sm text-[#F5F5F5] placeholder-[#71717A] transition-all"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-xs font-anta text-[#A1A1AA] mb-1.5 uppercase tracking-wider"
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
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl glass-input text-sm text-[#F5F5F5] placeholder-[#71717A] transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-subject"
                      className="block text-xs font-anta text-[#A1A1AA] mb-1.5 uppercase tracking-wider"
                    >
                      Subject
                    </label>
                    <input
                      id="contact-subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Software Engineering / Collaboration"
                      className="w-full px-4 py-3 rounded-xl glass-input text-sm text-[#F5F5F5] placeholder-[#71717A] transition-all"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-anta text-[#A1A1AA] mb-1.5 uppercase tracking-wider"
                    >
                      Message <span className="text-[#F53F06]">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Outline your project scope, inquiry, or timeline..."
                      className="w-full px-4 py-3 rounded-xl glass-input text-sm text-[#F5F5F5] placeholder-[#71717A] transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={formStatus === "loading"}
                    className="glass-btn-primary w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-2xl text-xs font-semibold font-display text-white disabled:opacity-50 cursor-pointer"
                  >
                    {formStatus === "loading" ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span className="font-anta">Transmitting...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
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
