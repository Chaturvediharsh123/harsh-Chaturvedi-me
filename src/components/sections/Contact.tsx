"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeader from "@/components/ui/SectionHeader";
import { portfolioData } from "@/data/portfolio";
import { useState } from "react";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:${portfolioData.email}?subject=Portfolio Contact from ${formState.name}&body=${encodeURIComponent(formState.message)}\n\nFrom: ${formState.email}`;
    window.location.href = mailtoLink;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: portfolioData.email,
      href: `mailto:${portfolioData.email}`,
    },
    {
      icon: Github,
      label: "GitHub",
      value: "@Chaturvediharsh123",
      href: portfolioData.github,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Harsh Chaturvedi",
      href: portfolioData.linkedin,
    },
    {
      icon: MapPin,
      label: "Location",
      value: portfolioData.location,
      href: undefined,
    },
  ];

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeader
          label="Contact"
          title="Let's Build Something Intelligent"
          description="Open to AI engineering roles, internships, and collaboration on impactful projects"
        />

        <div className="grid gap-8 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4 lg:col-span-2"
          >
            {contactInfo.map((item) => (
              <GlassCard key={item.label} hover className="p-5">
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 transition-colors hover:text-indigo-300"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-500/20 text-indigo-400">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-zinc-500">{item.label}</p>
                      <p className="font-medium text-white">{item.value}</p>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-500/20 text-indigo-400">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-zinc-500">{item.label}</p>
                      <p className="font-medium text-white">{item.value}</p>
                    </div>
                  </div>
                )}
              </GlassCard>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <GlassCard className="p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium text-zinc-400"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({ ...formState, name: e.target.value })
                      }
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-zinc-600 outline-none transition-colors focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/30"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-zinc-400"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) =>
                        setFormState({ ...formState, email: e.target.value })
                      }
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-zinc-600 outline-none transition-colors focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/30"
                      placeholder="you@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-zinc-400"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-zinc-600 outline-none transition-colors focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/30"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>

                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all hover:shadow-indigo-500/40 sm:w-auto"
                >
                  <Send
                    size={18}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                  {submitted ? "Opening email client..." : "Send Message"}
                </button>
              </form>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
