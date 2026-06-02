"use client";

import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { steps } from "../data/data";


const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    visible: (d = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: d },
    }),
};

const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};


const ShimmerLine = () => (
    <motion.div
        animate={{ opacity: [0.3, 1, 0.3], scaleX: [0.5, 1, 0.5] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="w-full h-px rounded-full bg-gradient-to-r from-transparent via-[#fd6402]/65 to-transparent"
    />
);


const SectionDivider = () => (
    <div className="h-px w-full bg-gradient-to-r from-transparent via-[#fd6402]/30 to-transparent" />
);


const Field = ({ tag: Tag = "input", ...props }) => (
    <div className="relative group">
        <Tag
            {...props}
            className={`
        w-full bg-white border border-gray-200 rounded-2xl px-5 py-4
        text-gray-900 placeholder-gray-400 text-[15px] leading-relaxed
        outline-none transition-all duration-300
        focus:border-[#fd6402]/60 focus:shadow-[0_0_0_4px_rgba(253,100,2,0.08)]
        hover:border-gray-300
        ${Tag === "textarea" ? "resize-none h-36" : ""}
        ${Tag === "select" ? "appearance-none cursor-pointer" : ""}
      `}
        />
        {Tag === "select" && (
            <div className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                    <path d="M1 1l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
            </div>
        )}
    </div>
);



const WhyCard = ({ text, index }) => (
    <motion.div
        custom={index * 0.08}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        whileHover={{ y: -5, transition: { duration: 0.25 } }}
        className="relative group rounded-2xl border border-gray-100 bg-gray-100 p-7 shadow-sm hover:shadow-md transition-all duration-300 cursor-default overflow-hidden"
    >

        <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#fd6402] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-t-2xl" />

        <div className="flex items-start gap-4">
            <div className="mt-1 w-6 h-6 rounded-full border border-[#fd6402]/40 flex items-center justify-center flex-shrink-0 group-hover:border-[#fd6402]/80 transition-colors duration-300">
                <div className="w-1.5 h-1.5 rounded-full bg-[#fd6402]" />
            </div>
            <p className="text-gray-600 text-[15px] leading-7 group-hover:text-gray-900 transition-colors duration-300">
                {text}
            </p>
        </div>
    </motion.div>
);


const Page = () => {
    const [formData, setFormData] = useState({
        name: "", phone: "", email: "", location: "", type: "", description: "",
    });

    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus(null);

        try {
            const response = await fetch("https://formsubmit.co/ajax/info@stonearcengineers.com", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (data.success === "true" || response.ok) {
                setStatus("success");

                setFormData({
                    name: "",
                    phone: "",
                    email: "",
                    location: "",
                    type: "",
                    description: "",
                });
            } else {
                setStatus("error");
            }
        } catch (error) {
            console.error(error);
            setStatus("error");
        } finally {
            setLoading(false);
        }
    };


    const heroRef = useRef(null);
    const { scrollYProgress: heroScroll } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"],
    });
    const heroImageY = useTransform(heroScroll, [0, 1], ["0%", "40%"]);
    const heroTextY = useTransform(heroScroll, [0, 1], ["0%", "18%"]);
    const heroOpacity = useTransform(heroScroll, [0, 0.75], [1, 0]);


    const approachRef = useRef(null);
    const { scrollYProgress: approachScroll } = useScroll({
        target: approachRef,
        offset: ["start end", "end start"],
    });
    const approachBlobY = useTransform(approachScroll, [0, 1], ["0%", "30%"]);

    return (
        <section className="overflow-hidden">


            <div
                ref={heroRef}
                className="relative min-h-[100svh] flex items-center bg-[#060b17] overflow-hidden"
            >

                <motion.div style={{ y: heroImageY }} className="absolute inset-0 scale-110">
                    <img
                        src="/indianbusiness.webp"
                        alt="Contact"
                        className="w-full h-full object-cover opacity-[0.13]"
                    />
                </motion.div>


                <div className="absolute inset-0 bg-gradient-to-b from-[#060b17]/50 via-transparent to-[#060b17]" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#060b17]/70 via-[#060b17]/20 to-transparent" />


                <motion.div
                    animate={{ x: [0, 28, -18, 0], y: [0, -18, 14, 0], scale: [1, 1.06, 0.97, 1] }}
                    transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/4 left-1/4 w-[700px] h-[700px] rounded-full bg-[#fd6402]/[0.07] blur-[170px] pointer-events-none"
                />
                <motion.div
                    animate={{ x: [0, -22, 14, 0], y: [0, 18, -10, 0], scale: [1, 1.08, 0.95, 1] }}
                    transition={{ duration: 17, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-0 right-0 w-[550px] h-[550px] rounded-full bg-indigo-600/[0.07] blur-[150px] pointer-events-none"
                />


                <motion.div
                    style={{ y: heroTextY, opacity: heroOpacity }}
                    className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 w-full pt-40 pb-32"
                >
                    <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-4xl">

                        <motion.div variants={fadeUp} className="flex items-center gap-4 mb-12">
                            <div className="h-px w-10 bg-[#fd6402]" />
                            <span className="text-[#fd6402] text-[11px] tracking-[8px] uppercase font-semibold">
                                Contact Us
                            </span>
                        </motion.div>

                        <motion.h1
                            variants={fadeUp}
                            className="text-5xl md:text-5xl font-bold leading-none tracking-[-0.04em] text-white"
                        >
                            Start Your Project
                            <span className="block mt-2 text-[#fd6402]">Conversation Today</span>
                        </motion.h1>

                        <motion.p variants={fadeUp} className="mt-8 text-white/55 text-lg md:text-xl leading-8 max-w-xl">
                            Tell us what you need to build. We will tell you exactly how we
                            can help — with clarity, honesty, and engineering precision.
                        </motion.p>

                        <motion.div variants={fadeUp} className="mt-12 flex flex-wrap items-center gap-5">
                            <motion.a
                                href="#contact-form"
                                whileHover={{ scale: 1.04, boxShadow: "0 0 45px rgba(253,100,2,0.45)" }}
                                whileTap={{ scale: 0.97 }}
                                className="px-8 py-4 rounded-full font-semibold text-white text-sm bg-[#fd6402] transition-shadow duration-300"
                            >
                                Start a Conversation
                            </motion.a>
                            <div className="flex items-center gap-3 text-white/90 text-sm">
                                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                                Response within 24 hours
                            </div>
                        </motion.div>

                    </motion.div>


                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
                        <span className="text-white/20 text-[10px] tracking-[5px] uppercase">Scroll</span>
                        <motion.div
                            animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 1.9, repeat: Infinity, ease: "easeInOut" }}
                            className="w-px h-10 bg-gradient-to-b from-white/25 to-transparent"
                        />
                    </div>
                </motion.div>
            </div>


            <div className="bg-white border-b border-gray-100 shadow-sm">
                <div className="max-w-7xl mx-auto px-6 md:px-16 py-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100">
                        {[
                            { value: "500+", label: "Projects Delivered" },
                            { value: "15+", label: "Years Experience" },
                            { value: "24h", label: "Response Time" },
                            { value: "100%", label: "Client Satisfaction" },
                        ].map(({ value, label }, i) => (
                            <motion.div
                                key={label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                className="text-center px-6 py-2"
                            >
                                <div className="text-3xl md:text-4xl font-bold text-[#fd6402] tracking-tight">{value}</div>
                                <div className="text-gray-500 text-sm mt-1 tracking-wide">{label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>


            <div ref={approachRef} className="relative bg-gray-100 py-28 overflow-hidden">
                <SectionDivider />


                <motion.div style={{ y: approachBlobY }} className="absolute inset-0 pointer-events-none">
                    <div className="absolute -top-24 -right-24 w-[600px] h-[600px] rounded-full bg-orange-100/60 blur-[100px]" />
                    <div className="absolute -bottom-24 -left-24 w-[500px] h-[500px] rounded-full bg-gray-200/80 blur-[100px]" />
                </motion.div>

                <div className="relative max-w-7xl mx-auto px-6 md:px-16">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">


                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-orange-50 border border-[#fd6402]/20 mb-10">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#fd6402] animate-pulse" />
                                <span className="text-[11px] tracking-[5px] uppercase text-[#fd6402] font-semibold">
                                    Our Approach
                                </span>
                            </div>

                            <h2 className="text-4xl md:text-5xl font-bold leading-[1.1] tracking-[-0.03em] text-gray-900">
                                Start With a
                                <span className="block mt-2 text-[#fd6402]">Real Conversation</span>
                            </h2>

                            <div className="w-16 h-0.5 bg-gradient-to-r from-[#fd6402] to-transparent rounded-full mt-10 mb-10" />

                            <div className="space-y-5">
                                <p className="text-gray-600 text-[17px] leading-8">
                                    Whether you have drawings, a sketch, a site, or just an idea —
                                    our engineering team evaluates everything with the same seriousness.
                                </p>
                                <p className="text-gray-600 text-[17px] leading-8">
                                    We work with developers, industries, institutions, and individuals.
                                    Every project starts with understanding, not selling.
                                </p>
                            </div>

                            <div className="mt-10 flex flex-wrap gap-3">
                                {["Developers", "Industries", "Institutions", "Individuals"].map((tag, i) => (
                                    <motion.span
                                        key={tag}
                                        initial={{ opacity: 0, scale: 0.88 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.08, duration: 0.4 }}
                                        whileHover={{ scale: 1.06 }}
                                        className="px-4 py-2 rounded-full border border-gray-200 bg-white text-gray-600 text-sm cursor-default shadow-sm transition-all duration-300 hover:border-[#fd6402]/40 hover:text-[#fd6402]"
                                    >
                                        {tag}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>


                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
                            className="relative"
                        >
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                                <div className="absolute inset-0 border border-gray-100 rounded-3xl z-10 pointer-events-none" />
                                <img src="/communication.jpg" className="w-full h-[520px] object-cover" alt="Office" />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/25 via-transparent to-transparent" />
                            </div>


                            <motion.div
                                animate={{ y: [0, -12, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -left-8 top-16 rounded-2xl bg-white border border-gray-100 px-6 py-5 shadow-xl z-20"
                            >
                                <div className="flex items-center gap-2 mb-1.5">
                                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                                    <span className="text-green-600 text-xs font-semibold tracking-wide">Available Now</span>
                                </div>
                                <p className="text-gray-500 text-sm">Mon – Sat, 9AM – 6PM</p>
                            </motion.div>


                            <motion.div
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
                                className="absolute -right-6 bottom-20 rounded-2xl bg-white border border-orange-100 px-6 py-5 shadow-xl z-20"
                            >
                                <div className="text-2xl font-bold text-[#fd6402]">500+</div>
                                <div className="text-gray-500 text-xs mt-0.5">Projects Done</div>
                            </motion.div>
                        </motion.div>

                    </div>
                </div>
            </div>


            <div className="relative bg-white py-28 overflow-hidden">
                <SectionDivider />

                <div className="relative max-w-7xl mx-auto px-6 md:px-16">


                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.85 }}
                        className="text-center mb-20"
                    >
                        <div className="inline-flex items-center gap-4 mb-8">
                            <div className="w-10 h-px bg-[#fd6402]/60" />
                            <span className="text-[#fd6402] text-[11px] tracking-[6px] uppercase font-semibold">
                                Our Process
                            </span>
                            <div className="w-10 h-px bg-[#fd6402]/60" />
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-[1.06] tracking-[-0.03em]">
                            What Happens When
                            <span className="block mt-3 text-[#fd6402]">You Contact Us</span>
                        </h2>
                        <p className="mt-7 max-w-2xl mx-auto text-gray-500 text-lg leading-8">
                            A streamlined, transparent, and engineered process — from concept to execution.
                        </p>
                    </motion.div>


                    <div className="relative">

                        <div className="hidden md:block absolute left-[39px] top-8 bottom-8 w-px bg-gradient-to-b from-transparent via-[#fd6402]/25 to-transparent" />

                        <div className="space-y-5">
                            {steps.map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-60px" }}
                                    transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                                    className="group relative flex gap-6 md:gap-10 items-start"
                                >

                                    <div className="relative flex-shrink-0 z-10">
                                        <motion.div
                                            whileHover={{ scale: 1.08 }}
                                            className="w-20 h-20 rounded-2xl flex items-center justify-center border-2 border-[#fd6402]/30 bg-orange-50 group-hover:border-[#fd6402]/70 group-hover:bg-orange-100 transition-all duration-400 shadow-sm"
                                        >
                                            <span className="text-[#fd6402] font-mono text-sm font-bold tracking-widest">
                                                {String(item.step).padStart(2, "0")}
                                            </span>
                                        </motion.div>
                                    </div>


                                    <div className="flex-1 relative rounded-3xl border border-gray-100 bg-gray-100 p-8 md:p-10 shadow-sm group-hover:shadow-md group-hover:border-[#fd6402]/20 transition-all duration-400 overflow-hidden">

                                        <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#fd6402] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-t-3xl" />

                                        <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-gray-900 mb-4 group-hover:text-[#fd6402] transition-colors duration-300">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-500 text-base md:text-[17px] leading-7 max-w-2xl">
                                            {item.desc}
                                        </p>
                                        <div className="mt-6 h-0.5 w-0 group-hover:w-16 transition-all duration-700 rounded-full bg-[#fd6402]" />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>


            <div id="contact-form" className="relative bg-gray-100 py-28 overflow-hidden">
                <SectionDivider />


                <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-orange-50/70 blur-[100px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-gray-200/80 blur-[100px] pointer-events-none" />

                <div className="relative max-w-7xl mx-auto px-6 md:px-16">


                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.85 }}
                        className="text-center mb-20"
                    >
                        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-orange-50 border border-[#fd6402]/20 mb-8">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#fd6402] animate-pulse" />
                            <span className="text-[11px] tracking-[5px] uppercase text-[#fd6402] font-semibold">
                                Get In Touch
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.03em] text-gray-900">
                            Send Your Requirement
                        </h2>
                        <p className="text-gray-500 mt-5 text-lg">
                            We will respond within 24 hours with a clear next step.
                        </p>
                    </motion.div>

                    <div className="grid lg:grid-cols-[1.4fr_1fr] gap-8 items-start">
                        <form onSubmit={handleSubmit}>
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.85 }}
                                className="relative bg-white rounded-3xl border border-gray-100 p-8 md:p-12 shadow-lg overflow-hidden"
                            >

                                <div className="absolute top-0 left-0 right-0 h-1 bg-[#fd6402] rounded-t-3xl" />

                                <div className="mt-2 mb-10">
                                    <ShimmerLine />
                                </div>

                                <div className="grid sm:grid-cols-2 gap-4">

                                    <Field tag="input" name="name" placeholder="Your Name" type="text" value={formData.name}
                                        onChange={handleChange} />
                                    <Field tag="input" name="phone" placeholder="Phone Number" type="tel" value={formData.phone}
                                        onChange={handleChange} />
                                    <div className="sm:col-span-2">
                                        <Field tag="input" name="email" placeholder="Email Address" type="email" value={formData.email}
                                            onChange={handleChange} />
                                    </div>
                                    <Field tag="input" name="location" placeholder="Project Location" type="text" value={formData.location}
                                        onChange={handleChange} />
                                    <Field tag="select" name="type" value={formData.type}
                                        onChange={handleChange}>
                                        <option value="" disabled>Project Type</option>
                                        <option>Construction</option>
                                        <option>Architecture</option>
                                        <option>PEB Structure</option>
                                        <option>All Three</option>
                                    </Field>
                                </div>

                                <div className="mt-4">
                                    <Field
                                        tag="textarea"
                                        name="description"
                                        value={formData.description}
                                        onChange={handleChange}
                                        placeholder="Brief project description — size, type, timeline, budget..."
                                    />
                                </div>



                                <motion.button
                                    type="submit"
                                    disabled={loading}
                                    whileHover={{ scale: 1.02, boxShadow: "0 8px 30px rgba(253,100,2,0.35)" }}
                                    whileTap={{ scale: 0.98 }}
                                    className="mt-6 w-full py-4 rounded-2xl font-semibold text-white text-[15px] bg-[#fd6402] transition-all duration-300 relative overflow-hidden group disabled:opacity-60"
                                >
                                    <span className="relative z-10">
                                        {loading ? "Sending..." : "Send My Requirement →"}
                                    </span>

                                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </motion.button>

                                <p className="mt-5 text-center text-gray-400 text-xs">
                                    No spam. No obligation. Just an honest reply.
                                </p>
                            </motion.div>
                        </form>



                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.85, delay: 0.1 }}
                            className="space-y-4"
                        >

                            <div className="relative bg-white rounded-3xl border border-gray-100 p-8 md:p-10 shadow-md overflow-hidden">
                                <div className="absolute top-0 left-0 right-0 h-1 bg-[#fd6402] rounded-t-3xl" />

                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-50 border border-gray-200 text-gray-500 text-[11px] tracking-[3px] uppercase mb-8">
                                    Our Office
                                </div>
                                <h3 className="text-2xl font-bold mb-8 tracking-tight text-gray-900">
                                    Stonearc Engineers
                                </h3>

                                <div className="space-y-5">
                                    {[
                                        { icon: "📞", label: "Phone", value: "+91 8197361002", href: "tel:+918197361002" },
                                        { icon: "📞", label: "Phone2", value: "+91 7760587776", href: "tel:+917760587776" },
                                        { icon: "✉️", label: "Email", value: "info@stonearcengineers.com", href: "mailto:info@stonearcengineers.com" },
                                    ].map(({ icon, label, value, href }) => (
                                        <a key={label} href={href} className="flex items-center gap-4 group">
                                            <div className="w-11 h-11 rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-center text-lg flex-shrink-0 transition-all duration-300 group-hover:border-[#fd6402]/40 group-hover:bg-orange-50">
                                                {icon}
                                            </div>
                                            <div>
                                                <div className="text-gray-400 text-[11px] tracking-[3px] uppercase">{label}</div>
                                                <div className="text-gray-700 text-[15px] mt-0.5 group-hover:text-[#fd6402] transition-colors duration-300">
                                                    {value}
                                                </div>
                                            </div>
                                        </a>
                                    ))}
                                </div>

                                <div className="mt-8 pt-8 border-t border-gray-100">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <div className="text-gray-400 text-[11px] tracking-[3px] uppercase mb-2">
                                                Office Hours
                                            </div>
                                            <div className="text-gray-600 text-[15px]">Monday – Saturday</div>
                                            <div className="text-gray-600 text-[15px]">9:00 AM – 6:00 PM</div>
                                        </div>
                                        <div className="text-right">
                                            <div className="flex items-center justify-end gap-2 mb-1">
                                                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                                                <span className="text-green-600 text-sm font-medium">Open Now</span>
                                            </div>
                                            <div className="text-gray-400 text-xs mt-1">IST Timezone</div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="relative rounded-3xl border border-[#fd6402]/20 bg-orange-50 p-7 overflow-hidden">
                                <div className="absolute top-0 left-0 right-0 h-1 bg-[#fd6402] rounded-t-3xl" />
                                <div className="text-[#fd6402] text-[11px] tracking-[4px] uppercase font-semibold mb-4">
                                    Our Promise
                                </div>
                                <p className="text-gray-600 text-[15px] leading-7 italic">
                                    "We have built our reputation on honest conversations and engineering clarity."
                                </p>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </div>


            <div className="relative bg-white py-28 overflow-hidden">
                <SectionDivider />


                <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-orange-50/60 blur-[120px] pointer-events-none" />

                <div className="relative max-w-7xl mx-auto px-6 md:px-16">


                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.85 }}
                        className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
                    >
                        <div>
                            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-orange-50 border border-[#fd6402]/20 mb-8">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#fd6402] animate-pulse" />
                                <span className="text-[11px] tracking-[5px] uppercase text-[#fd6402] font-semibold">
                                    Why Us
                                </span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.03em] leading-[1.1] text-gray-900">
                                Why Contact Us First?
                            </h2>
                        </div>

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
                        className="mt-20 relative rounded-3xl border border-[#fd6402]/20 bg-black px-10 py-14 text-center overflow-hidden"
                    >
                        <div className="absolute top-0 left-0 right-0 h-1 bg-[#fd6402] rounded-t-3xl" />
                        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#fd6402]/25 to-transparent" />

                        <p className="text-white text-lg md:text-xl italic leading-8 max-w-3xl mx-auto">
                            "We have built our reputation on honest conversations and engineering clarity."
                        </p>

                        <div className="mt-8 mx-auto w-16">
                            <ShimmerLine />
                        </div>

                        <motion.a
                            href="#contact-form"
                            whileHover={{ scale: 1.04, boxShadow: "0 8px 30px rgba(253,100,2,0.3)" }}
                            whileTap={{ scale: 0.97 }}
                            className="mt-10 inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white text-sm bg-[#fd6402] transition-all duration-300 shadow-lg"
                        >
                            Start Your Project →
                        </motion.a>
                    </motion.div>

                </div>
            </div>

        </section>
    );
};

export default Page;
