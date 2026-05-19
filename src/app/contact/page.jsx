"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { steps } from "../data/data";


const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (d = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: d },
    }),
};

const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};


const Field = ({ tag: Tag = "input", label, ...props }) => (
    <div className="relative group">
        <Tag
            {...props}
            className={`
        w-full bg-transparent border border-white/10 rounded-2xl px-5 py-4
        text-white placeholder-white/25 text-[15px] leading-relaxed
        outline-none transition-all duration-300
        focus:border-blue-500/60 focus:bg-blue-500/5 focus:shadow-[0_0_0_4px_rgba(59,130,246,0.08)]
        group-hover:border-white/20
        ${Tag === "textarea" ? "resize-none h-36" : ""}
        ${Tag === "select" ? "appearance-none cursor-pointer" : ""}
      `}
            style={{ background: "rgba(255,255,255,0.02)" }}
        />
        {Tag === "select" && (
            <div className="absolute right-5 top-1/2 -translate-y-1/2 text-white/30 pointer-events-none text-xs">▾</div>
        )}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
            style={{ boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.06)" }} />
    </div>
);


const WhyCard = ({ text, index }) => (
    <motion.div
        custom={index * 0.08}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="relative group rounded-2xl border border-white/8 p-7 overflow-hidden transition-all duration-500 hover:-translate-y-1"
        style={{ background: "rgba(255,255,255,0.025)" }}
    >
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
            style={{ background: "linear-gradient(135deg, rgba(59,130,246,0.08) 0%, rgba(99,102,241,0.05) 100%)" }} />
        <div className="absolute top-0 left-0 right-0 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{ background: "linear-gradient(90deg, transparent, rgba(59,130,246,0.5), transparent)" }} />
        <div className="relative flex items-start gap-4">
            <div className="mt-1 w-6 h-6 rounded-full border border-blue-500/40 flex items-center justify-center flex-shrink-0">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            </div>
            <p className="text-white/65 text-[15px] leading-7 group-hover:text-white/80 transition-colors duration-300"
                style={{ fontFamily: "'DM Sans', sans-serif" }}>
                {text}
            </p>
        </div>
    </motion.div>
);


const Page = () => {
    const [formData, setFormData] = useState({
        name: "", phone: "", email: "", location: "", type: "", description: "",
    });

    return (
        <section className="bg-[#070c18] text-white overflow-hidden" style={{ fontFamily: "'Sora', sans-serif" }}>


            <style>{`
        

        ::selection { background: rgba(59,130,246,0.25); color: #fff; }

        .hero-grid {
          background-image:
            linear-gradient(rgba(59,130,246,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59,130,246,0.04) 1px, transparent 1px);
          background-size: 64px 64px;
        }

        .shimmer-line {
          background: linear-gradient(90deg, transparent, rgba(59,130,246,0.5), transparent);
          animation: shimmerMove 3s ease-in-out infinite;
        }

        @keyframes shimmerMove {
          0%, 100% { opacity: 0.3; transform: scaleX(0.5); }
          50% { opacity: 1; transform: scaleX(1); }
        }

        input:-webkit-autofill,
        select:-webkit-autofill,
        textarea:-webkit-autofill {
          -webkit-box-shadow: 0 0 0 1000px rgba(7,12,24,0.98) inset !important;
          -webkit-text-fill-color: white !important;
        }
      `}</style>

            <div className="relative min-h-screen flex items-center hero-grid overflow-hidden">
                <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] rounded-full bg-blue-600/10 blur-[130px] pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-indigo-500/8 blur-[100px] pointer-events-none" />


                <motion.div
                    initial={{ scale: 1 }}
                    animate={{ scale: 1.07 }}
                    transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
                    className="absolute inset-0"
                >
                    <img src="/indianbusiness.webp" alt="Contact" className="w-full h-full object-cover opacity-15" />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-b from-[#070c18]/20 via-transparent to-[#070c18]" />


                <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 w-full pt-40 pb-28">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={stagger}
                        className="max-w-3xl"
                    >
                        <motion.div variants={fadeUp} className="flex items-center gap-4 mb-10">
                            <div className="w-8 h-[1px] bg-blue-400/70" />
                            <span className="text-blue-400 text-[11px] tracking-[7px] uppercase font-semibold">Contact Us</span>
                            <div className="w-8 h-[1px] bg-blue-400/70" />
                        </motion.div>


                        <motion.h1
                            variants={fadeUp}
                            className="text-5xl md:text-5xl font-bold leading-[1.04] tracking-[-0.035em]"
                        >
                            Start Your Project
                            <span
                                className="block mt-3 text-transparent bg-clip-text"
                                style={{ backgroundImage: "linear-gradient(135deg, #60a5fa 0%, #a5b4fc 60%, #38bdf8 100%)" }}
                            >
                                Conversation Today
                            </span>
                        </motion.h1>

                        <motion.p
                            variants={fadeUp}
                            className="mt-8 text-white text-lg leading-8 max-w-lg"
                        >
                            Tell us what you need to build. We will tell you exactly how we
                            can help — with clarity, honesty, and engineering precision.
                        </motion.p>


                        <motion.div variants={fadeUp} className="mt-12 flex items-center gap-5 flex-wrap">
                            <motion.a
                                href="#contact-form"
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                className="px-8 py-4 rounded-full font-semibold text-white text-sm"
                                style={{
                                    background: "linear-gradient(135deg, #2563eb, #1d4ed8)",
                                    boxShadow: "0 0 0 1px rgba(59,130,246,0.35), 0 8px 32px rgba(37,99,235,0.28)",
                                }}
                            >
                                Start a Conversation
                            </motion.a>
                            <div className="flex items-center gap-3 text-white/40 text-sm" >
                                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                                Response within 24 hours
                            </div>
                        </motion.div>
                    </motion.div>


                </div>
            </div>


            <div className="max-w-7xl mx-auto px-6 md:px-16 py-12">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/8 mb-10">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                            <span className="text-[11px] tracking-[5px] uppercase text-blue-300 font-semibold">Our Approach</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold leading-[1.12] tracking-[-0.03em]">
                            Start With a
                            <span className="block mt-2 text-transparent bg-clip-text"
                                style={{ backgroundImage: "linear-gradient(135deg, #60a5fa, #818cf8)" }}>
                                Real Conversation
                            </span>
                        </h2>

                        <div className="w-12 h-[2px] bg-blue-500 rounded-full mt-8 mb-10" />

                        <div className="space-y-5" >
                            <p className="text-white text-[17px] leading-8">
                                Whether you have drawings, a sketch, a site, or just an idea —
                                our engineering team evaluates everything with the same seriousness.
                            </p>
                            <p className="text-white text-[17px] leading-8">
                                We work with developers, industries, institutions, and individuals.
                                Every project starts with understanding, not selling.
                            </p>
                        </div>

                        <div className="mt-10 flex flex-wrap gap-3">
                            {["Developers", "Industries", "Institutions", "Individuals"].map(tag => (
                                <span key={tag} className="px-4 py-2 rounded-full border border-white/10 text-white/45 text-sm"
                                    style={{ background: "rgba(255,255,255,0.03)" }}>
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                        className="relative"
                    >
                        <div className="rounded-3xl overflow-hidden border border-white/8 shadow-2xl">
                            <img src="/communication.jpg" className="w-full h-[480px] object-cover" alt="Office" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#070c18]/70 via-transparent to-transparent" />
                        </div>
                        {/* Floating badge */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -left-8 top-12 rounded-2xl border border-white/10 px-6 py-5 shadow-2xl"
                            style={{ background: "rgba(10,16,30,0.95)", backdropFilter: "blur(20px)" }}
                        >
                            <div className="flex items-center gap-2 mb-1">
                                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                                <span className="text-green-400 text-xs font-semibold tracking-wide">Available Now</span>
                            </div>
                            <p className="text-white/70 text-sm" >Mon – Sat, 9AM – 6PM</p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>


            <div className="relative overflow-hidden py-32" style={{ background: "#050a16" }}>
                {/* Ambient glows */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full bg-blue-600/8 blur-[160px] pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-indigo-500/8 blur-[140px] pointer-events-none" />
                <div className="absolute top-1/3 left-[-100px] w-[400px] h-[400px] rounded-full bg-cyan-500/6 blur-[130px] pointer-events-none" />
                {/* Grid */}
                <div className="absolute inset-0 opacity-[0.028]"
                    style={{ backgroundImage: "linear-gradient(to right,#fff 1px,transparent 1px),linear-gradient(to bottom,#fff 1px,transparent 1px)", backgroundSize: "72px 72px" }} />

                <div className="relative max-w-7xl mx-auto px-6 md:px-16">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.85 }}
                        className="text-center mb-24"
                    >
                        <div className="inline-flex items-center gap-4 mb-8">
                            <div className="w-10 h-[1px] bg-blue-400/60" />
                            <span className="text-blue-400 text-[11px] tracking-[6px] uppercase font-semibold">Our Process</span>
                            <div className="w-10 h-[1px] bg-blue-400/60" />
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold leading-[1.06] tracking-[-0.03em]">
                            What Happens When
                            <span className="block mt-3 text-transparent bg-clip-text"
                                style={{ backgroundImage: "linear-gradient(135deg, #60a5fa 0%, #a5b4fc 50%, #38bdf8 100%)" }}>
                                You Contact Us
                            </span>
                        </h2>
                        <p className="mt-7 max-w-2xl mx-auto text-white text-lg leading-8">
                            A streamlined, transparent, and engineered process — from concept to execution.
                        </p>
                    </motion.div>

                    {/* Steps */}
                    <div className="relative">
                        {/* Vertical line */}
                        <div className="hidden md:block absolute left-[39px] top-6 bottom-6 w-[1px]"
                            style={{ background: "linear-gradient(to bottom, transparent, rgba(59,130,246,0.3) 15%, rgba(59,130,246,0.3) 85%, transparent)" }} />

                        <div className="space-y-5">
                            {(steps || [
                                { step: "01", title: "You reach out to us", desc: "Via call, email, or this form. No unnecessary formalities — just tell us what you are looking to build." },
                                { step: "02", title: "We schedule a discovery call", desc: "Our engineering team gets on a call to understand your project requirements, site, and timeline." },
                                { step: "03", title: "Site visit and assessment", desc: "We physically assess the site, evaluate feasibility, and document everything needed to scope your project." },
                                { step: "04", title: "Proposal and pricing", desc: "You receive a detailed, honest proposal — scope, cost, timeline. No padding, no hidden charges." },
                                { step: "05", title: "Project kickoff", desc: "Once confirmed, design and engineering begin immediately with a defined delivery schedule." },
                            ]).map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-60px" }}
                                    transition={{ duration: 0.8, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                                    className="group relative flex gap-6 md:gap-10 items-start"
                                >
                                    {/* Step number */}
                                    <div className="relative flex-shrink-0 z-10">
                                        <div className="absolute inset-0 rounded-2xl bg-blue-500/25 blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
                                        <div
                                            className="relative w-20 h-20 rounded-2xl flex items-center justify-center text-white font-bold text-lg border border-blue-500/30 transition-all duration-500 group-hover:border-blue-400/60 group-hover:scale-105"
                                            style={{ background: "linear-gradient(135deg, rgba(37,99,235,0.25), rgba(79,70,229,0.2))", backdropFilter: "blur(12px)" }}
                                        >
                                            <span className="text-blue-300 font-mono text-sm tracking-widest">{item.step}</span>
                                        </div>
                                    </div>

                                    {/* Card */}
                                    <div
                                        className="flex-1 rounded-3xl border border-white/8 p-8 md:p-10 transition-all duration-500 group-hover:border-blue-500/25 overflow-hidden relative"
                                        style={{ background: "rgba(255,255,255,0.025)", backdropFilter: "blur(20px)" }}
                                    >

                                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
                                            style={{ background: "linear-gradient(135deg, rgba(59,130,246,0.07) 0%, rgba(99,102,241,0.04) 100%)" }} />

                                        <div className="absolute top-0 left-8 right-8 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                            style={{ background: "linear-gradient(90deg, transparent, rgba(59,130,246,0.5), transparent)" }} />

                                        <div className="relative">
                                            <h3
                                                className="text-xl md:text-2xl font-semibold tracking-tight text-white mb-4 group-hover:text-blue-200 transition-colors duration-300"
                                            >
                                                {item.title}
                                            </h3>
                                            <p className="text-white/55 text-base md:text-[17px] leading-7 max-w-2xl"
                                            >
                                                {item.desc}
                                            </p>
                                            {/* Animated underline */}
                                            <div className="mt-7 h-[1px] w-0 group-hover:w-20 transition-all duration-700 rounded-full"
                                                style={{ background: "linear-gradient(90deg, #3b82f6, #818cf8)" }} />
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>


            <div id="contact-form" className="py-2">
                <div className="max-w-7xl mx-auto px-6 md:px-16">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.85 }}
                        className="text-center mb-20"
                    >
                        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/8 mb-8">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                            <span className="text-[11px] tracking-[5px] uppercase text-blue-300 font-semibold">Get In Touch</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.03em]">Send Your Requirement</h2>
                        <p className="text-white mt-4 text-lg" >
                            We will respond within 24 hours with a clear next step.
                        </p>
                    </motion.div>

                    <div className="grid lg:grid-cols-[1.4fr_1fr] gap-8 items-start">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.85 }}
                            className="rounded-3xl border border-white/8 p-8 md:p-12"
                            style={{ background: "rgba(255,255,255,0.025)", backdropFilter: "blur(24px)" }}
                        >
                            
                            <div className="w-full h-[1px]  mb-10 shimmer-line rounded-full" />

                            <div className="grid  text-white sm:grid-cols-2 gap-4">
                                <Field tag="input" placeholder="Your Name" type="text" />
                                <Field tag="input" placeholder="Phone Number" type="tel" />
                                <Field tag="input" placeholder="Email Address" type="email" className="sm:col-span-2" />
                                <Field tag="input" placeholder="Project Location" type="text" />
                                <Field tag="select" className="text-white bg-black">
                                    <option value="" disabled selected className="text-black">Project Type</option>
                                    <option className="text-black">Construction</option>
                                    <option className="text-black">Architecture</option>
                                    <option className="text-black">PEB Structure</option>
                                    <option className="text-black">All Three</option>
                                </Field>
                            </div>

                            <div className="mt-4">
                                <Field tag="textarea" placeholder="Brief project description — size, type, timeline, budget..." />
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02, boxShadow: "0 0 40px rgba(59,130,246,0.3)" }}
                                whileTap={{ scale: 0.98 }}
                                className="mt-6 w-full py-4 rounded-2xl font-semibold text-white text-[15px] transition-all duration-300"
                                style={{ background: "linear-gradient(135deg, #2563eb, #1d4ed8)", boxShadow: "0 4px 24px rgba(37,99,235,0.25)" }}
                            >
                                Send My Requirement →
                            </motion.button>

                            <p className="mt-5 text-center text-white/25 text-xs" >
                                No spam. No obligation. Just an honest reply.
                            </p>
                        </motion.div>


                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.85, delay: 0.1 }}
                            className="space-y-4"
                        >
                        
                            <div className="rounded-3xl border border-white/8 p-8 md:p-10"
                                style={{ background: "rgba(255,255,255,0.025)", backdropFilter: "blur(24px)" }}>
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 text-white/35 text-[11px] tracking-[3px] uppercase mb-8">
                                    Our Office
                                </div>

                                <h3 className="text-2xl font-bold mb-8 tracking-tight">Stonearc Engineers</h3>

                                <div className="space-y-5" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                                    {[
                                        { icon: "📞", label: "Phone", value: "+91 9087654321" },
                                        { icon: "✉️", label: "Email", value: "contact@stonearc.com" },
                                        { icon: "🌐", label: "Website", value: "www.stonearc.com" },
                                    ].map(({ icon, label, value }) => (
                                        <div key={label} className="flex items-center gap-4 group cursor-pointer">
                                            <div className="w-11 h-11 rounded-xl border border-white/8 flex items-center justify-center text-lg flex-shrink-0 transition-all duration-300 group-hover:border-blue-500/30 group-hover:bg-blue-500/8"
                                                style={{ background: "rgba(255,255,255,0.03)" }}>
                                                {icon}
                                            </div>
                                            <div>
                                                <div className="text-white/35 text-[11px] tracking-[3px] uppercase">{label}</div>
                                                <div className="text-white/80 text-[15px] mt-0.5 group-hover:text-white transition-colors duration-300">{value}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-8 pt-8 border-t border-white/6">
                                    <div className="flex items-center justify-between">
                                        <div style={{ fontFamily: "'DM Sans', sans-serif" }}>
                                            <div className="text-white/35 text-[11px] tracking-[3px] uppercase mb-1">Office Hours</div>
                                            <div className="text-white/70 text-[15px]">Monday – Saturday</div>
                                            <div className="text-white/70 text-[15px]">9:00 AM – 6:00 PM</div>
                                        </div>
                                        <div className="text-right">
                                            <div className="flex items-center justify-end gap-2 mb-1">
                                                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                                                <span className="text-green-400 text-sm font-medium">Open Now</span>
                                            </div>
                                            <div className="text-white/30 text-xs" style={{ fontFamily: "'DM Sans', sans-serif" }}>IST Timezone</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                         
                            <div className="rounded-3xl border border-blue-500/15 p-7 relative overflow-hidden"
                                style={{ background: "linear-gradient(135deg, rgba(37,99,235,0.1), rgba(79,70,229,0.06))" }}>
                                <div className="absolute top-0 left-0 right-0 h-[1px]"
                                    style={{ background: "linear-gradient(90deg, transparent, rgba(59,130,246,0.4), transparent)" }} />
                                <div className="text-blue-400/80 text-[11px] tracking-[4px] uppercase font-semibold mb-3">Our Promise</div>
                                <p className="text-white/60 text-[15px] leading-7 italic" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                                    "We have built our reputation on honest conversations and engineering clarity."
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>


            <div className="relative py-32 overflow-hidden" style={{ background: "#060a16" }}>
                {/* Glows */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-blue-600/10 blur-[130px] pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-indigo-500/8 blur-[120px] pointer-events-none" />

                <div className="relative max-w-7xl mx-auto px-6 md:px-16">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.85 }}
                        className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
                    >
                        <div>
                            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/8 mb-8">
                                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                                <span className="text-[11px] tracking-[5px] uppercase text-blue-300 font-semibold">Why Us</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.03em] leading-[1.1]">
                                Why Contact Us First?
                            </h2>
                        </div>
                        <p className="text-white/40 text-base max-w-xs leading-7 md:text-right"
                            style={{ fontFamily: "'DM Sans', sans-serif" }}>
                            Clear communication. Honest engineering. No surprises.
                        </p>
                    </motion.div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {[
                            "No obligation — first consultation is completely free",
                            "You speak directly to engineers, not a sales team",
                            "Honest cost estimation with no misleading numbers",
                            "Projects of any scale receive equal attention and care",
                            "If we are not the right fit, we will tell you honestly",
                            "Every commitment we make is followed through",
                        ].map((item, i) => (
                            <WhyCard key={i} text={item} index={i} />
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="mt-20 relative rounded-3xl border border-blue-500/15 px-10 py-10 text-center overflow-hidden"
                        style={{ background: "linear-gradient(135deg, rgba(37,99,235,0.07), rgba(79,70,229,0.04))" }}
                    >
                        <div className="absolute top-0 left-0 right-0 h-[1px]"
                            style={{ background: "linear-gradient(90deg, transparent, rgba(59,130,246,0.4), transparent)" }} />
                        <p className="text-white/60 text-lg md:text-xl italic leading-8 max-w-3xl mx-auto"
                            style={{ fontFamily: "'DM Sans', sans-serif" }}>
                            "We have built our reputation on honest conversations and engineering clarity."
                        </p>
                        <div className="mt-6 mx-auto w-16 h-[1px] shimmer-line rounded-full" />
                    </motion.div>
                </div>
            </div>

        </section>
    );
};

export default Page;