"use client";
import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { values, teamMembers, expertiseAreas } from "../data/data";


const fadeUp = {
    hidden: { opacity: 0, y: 55 },
    visible: (d = 0) => ({
        opacity: 1, y: 0,
        transition: { duration: 0.88, ease: [0.22, 1, 0.36, 1], delay: d },
    }),
};

const fadeLeft = {
    hidden: { opacity: 0, x: -55 },
    visible: {
        opacity: 1, x: 0,
        transition: { duration: 0.95, ease: [0.22, 1, 0.36, 1] },
    },
};

const fadeRight = {
    hidden: { opacity: 0, x: 55 },
    visible: {
        opacity: 1, x: 0,
        transition: { duration: 0.95, ease: [0.22, 1, 0.36, 1] },
    },
};

const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};


const SectionLabel = ({ text }) => (
    <div className="inline-flex items-center gap-3 mb-8">
        <div className="h-px w-8 bg-[#fd6402]" />
        <span className="text-[11px] tracking-[6px] uppercase font-semibold text-[#fd6402]">
            {text}
        </span>
        <div className="h-px w-8 bg-[#fd6402]" />
    </div>
);


const SectionDivider = () => (
    <div className="h-px w-full bg-gradient-to-r from-transparent via-[#fd6402]/30 to-transparent" />
);


const Page = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const heroRef = useRef(null);
    const { scrollYProgress: heroScroll } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"],
    });
    const heroImgY  = useTransform(heroScroll, [0, 1], ["0%", "40%"]);
    const heroTextY = useTransform(heroScroll, [0, 1], ["0%", "20%"]);
    const heroOpacity = useTransform(heroScroll, [0, 0.8], [1, 0]);


    const whoRef = useRef(null);
    const { scrollYProgress: whoScroll } = useScroll({
        target: whoRef,
        offset: ["start end", "end start"],
    });
    const whoBlobY = useTransform(whoScroll, [0, 1], ["0%", "30%"]);

   
    const storyRef = useRef(null);
    const { scrollYProgress: storyScroll } = useScroll({
        target: storyRef,
        offset: ["start end", "end start"],
    });
    const storyImgY = useTransform(storyScroll, [0, 1], ["-8%", "8%"]);

    return (
        <section className="overflow-hidden">

            <div
                ref={heroRef}
                className="relative min-h-[100svh] flex items-center bg-[#060b17] overflow-hidden"
            >
              
                <motion.div style={{ y: heroImgY }} className="absolute inset-0 scale-110">
                    <img
                        src="/about.jpg"
                        alt="About Stonearc"
                        className="w-full h-full object-cover"
                    />
                </motion.div>

          
                <div className="absolute inset-0 bg-black/62" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

         
                <motion.div
                    animate={{ x: [0, 25, -15, 0], y: [0, -20, 12, 0], scale: [1, 1.08, 0.96, 1] }}
                    transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/3 right-1/4 w-[600px] h-[600px] rounded-full bg-[#fd6402]/[0.06] blur-[160px] pointer-events-none"
                />
                <motion.div
                    animate={{ x: [0, -20, 15, 0], y: [0, 15, -10, 0], scale: [1, 1.05, 0.98, 1] }}
                    transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-indigo-500/[0.06] blur-[140px] pointer-events-none"
                />

                <motion.div
                    style={{ y: heroTextY, opacity: heroOpacity }}
                    className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 w-full pt-40 pb-32"
                >
                    <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl">

                        <motion.div
                            variants={fadeUp}
                            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md mb-10"
                        >
                            <div className="w-1.5 h-1.5 rounded-full bg-[#fd6402] animate-pulse" />
                            <span className="text-white text-[11px] tracking-[6px] uppercase font-semibold">
                                About Us
                            </span>
                        </motion.div>

                        <motion.h1
                            variants={fadeUp}
                            className="text-4xl md:text-5xl font-bold text-white leading-[1.0] tracking-[-0.04em]"
                        >
                            About Stonearc
                            <span className="block mt-2 text-[#fd6402]">Engineers</span>
                        </motion.h1>

                        <motion.p
                            variants={fadeUp}
                            className="mt-8 text-white text-lg md:text-xl leading-8 max-w-xl"
                        >
                            Engineering integrity. Architectural Vision. Built on Trust.
                        </motion.p>

                        <motion.div variants={fadeUp} className="mt-12 flex flex-wrap gap-3">
                            {["15+ Years", "500+ Projects", "100% Accountability"].map((stat) => (
                                <div
                                    key={stat}
                                    className="px-5 py-2.5 rounded-full border border-white/15 bg-white/8 backdrop-blur-md text-white/65 text-sm font-medium"
                                >
                                    {stat}
                                </div>
                            ))}
                        </motion.div>

                    </motion.div>

                    
                </motion.div>
            </div>


            <div className="bg-white border-b border-gray-100 shadow-sm">
                <div className="max-w-7xl mx-auto px-6 md:px-16 py-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100">
                        {[
                            { value: "15+",  label: "Years of Excellence"    },
                            { value: "500+", label: "Projects Completed"     },
                            { value: "4",    label: "Core Disciplines"       },
                            { value: "100%", label: "Client Accountability"  },
                        ].map(({ value, label }, i) => (
                            <motion.div
                                key={label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                className="text-center px-6 py-2"
                            >
                                <div className="text-3xl md:text-4xl font-bold text-[#fd6402] tracking-tight">
                                    {value}
                                </div>
                                <div className="text-gray-500 text-sm mt-1 tracking-wide">{label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

           
            <div ref={whoRef} className="relative bg-gray-100 py-28 overflow-hidden">
                <SectionDivider />

                <motion.div style={{ y: whoBlobY }} className="absolute inset-0 pointer-events-none">
                    <div className="absolute -top-24 -right-24 w-[600px] h-[600px] rounded-full bg-orange-100/60 blur-[120px]" />
                    <div className="absolute -bottom-24 -left-24 w-[500px] h-[500px] rounded-full bg-gray-200/80 blur-[100px]" />
                </motion.div>

                <div className="relative max-w-7xl mx-auto px-6 md:px-16">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">

                       
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeLeft}
                        >
                            <SectionLabel text="Who We Are" />
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-[1.1] tracking-[-0.03em]">
                                A Company Built on
                                <span className="block mt-1 text-[#fd6402]">Engineering Principles</span>
                            </h2>
                            <div className="w-16 h-0.5 bg-gradient-to-r from-[#fd6402] to-transparent rounded-full mt-8 mb-8" />
                            <div className="space-y-5">
                                <p className="text-gray-600 text-[17px] leading-8">
                                    Stonearc Engineers was founded on a simple but powerful belief:
                                    that great construction is not just about what you build,
                                    but how you build it.
                                </p>
                                <p className="text-gray-600 text-[17px] leading-8">
                                    Over 15 years of operation, we have grown from a civil
                                    construction firm into a full-spectrum engineering company —
                                    offering construction, architecture, and PEB solutions to
                                    clients across residential, commercial, institutional,
                                    and industrial sectors.
                                </p>
                                <p className="text-gray-600 text-[17px] leading-8">
                                    We are a team of licensed structural engineers, experienced
                                    architects, certified PEB fabricators, and disciplined site
                                    managers — working under one roof and one standard.
                                </p>
                            </div>
                        </motion.div>

                       
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeRight}
                            className="relative"
                        >
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                                <div className="absolute inset-0 border border-gray-100 rounded-3xl z-10 pointer-events-none" />
                                <img
                                    src="/who.jpg"
                                    alt="Who We Are"
                                    className="w-full h-[520px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 via-transparent to-transparent" />
                            </div>

                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -left-6 bottom-20 rounded-2xl bg-white border border-gray-100 px-6 py-5 shadow-xl z-20"
                            >
                                <div className="text-3xl font-bold text-[#fd6402]">15+</div>
                                <div className="text-gray-500 text-xs mt-0.5 tracking-wide">Years of Excellence</div>
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
                                className="absolute -right-6 top-16 rounded-2xl bg-white border border-orange-100 px-6 py-5 shadow-xl z-20"
                            >
                                <div className="text-3xl font-bold text-[#fd6402]">500+</div>
                                <div className="text-gray-500 text-xs mt-0.5 tracking-wide">Projects Done</div>
                            </motion.div>
                        </motion.div>

                    </div>
                </div>
            </div>

            
            <div ref={storyRef} className="relative bg-[#0b1120] py-28 overflow-hidden">
                <SectionDivider />

                <motion.div
                    animate={{ x: [0, 20, -14, 0], y: [0, -14, 10, 0] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-0 left-0 w-96 h-96 bg-[#fd6402]/[0.06] blur-[140px] rounded-full pointer-events-none"
                />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/[0.06] blur-[130px] rounded-full pointer-events-none" />

                <div className="relative max-w-7xl mx-auto px-6 md:px-16">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">

                        
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeLeft}
                            className="relative"
                        >
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                                <motion.img
                                    style={{ y: storyImgY }}
                                    src="/imgsrc.jpg"
                                    alt="Our Story"
                                    className="w-full h-[520px] object-cover scale-110 group-hover:scale-[1.16] transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                                <div className="absolute inset-0 border border-white/10 rounded-3xl pointer-events-none" />
                            </div>

                        </motion.div>

                       
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeRight}
                        >
                            <SectionLabel text="Our Story" />
                            <h2 className="text-4xl md:text-5xl font-bold text-white leading-[1.1] tracking-[-0.03em]">
                                Where We Came From.
                                <span className="block mt-2 text-[#fd6402]">Where We Are Going.</span>
                            </h2>
                            <div className="w-16 h-0.5 bg-gradient-to-r from-[#fd6402] to-transparent rounded-full mt-8 mb-8" />
                            <div className="space-y-5 text-white/52 text-[17px] leading-8">
                                <p>
                                    Stonearc Engineers began with a commitment to doing
                                    construction differently — with more transparency,
                                    more accountability, and more technical rigour than
                                    the industry was used to.
                                </p>
                                <p>
                                    Our first projects were modest in scale but
                                    uncompromising in execution. That reputation travelled.
                                </p>
                                <p>
                                    Today, we work with real estate developers,
                                    government bodies, manufacturing companies,
                                    logistics firms, educational institutions,
                                    and private homeowners — each receiving the same
                                    level of attention and dedication that built our name.
                                </p>
                                <p>
                                    Our ambition is to become the most trusted engineering
                                    partner in our region — not the largest, but the most reliable.
                                </p>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </div>

            
            <div className="relative bg-gray-100 py-28 overflow-hidden">
                <SectionDivider />
                <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-orange-50/70 blur-[120px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-gray-200/80 blur-[100px] pointer-events-none" />

                <div className="relative max-w-7xl mx-auto px-6 md:px-16">

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="text-center mb-16"
                    >
                        <SectionLabel text="Mission & Vision" />
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-[-0.03em] leading-[1.1]">
                            What Drives{" "}
                            <span className="text-[#fd6402]">Everything We Do</span>
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            {
                                title: "Our Mission",
                                icon:  "🎯",
                                text:  "To deliver construction, architecture, and PEB projects that meet the highest standards of structural safety, design quality, and project discipline — on time and within budget — every single time.",
                            },
                            {
                                title: "Our Vision",
                                icon:  "🔭",
                                text:  "To be the benchmark engineering firm that clients recommend without being asked, because we always deliver more than we promise.",
                            },
                        ].map(({ title, icon, text }, i) => (
                            <motion.div
                                key={title}
                                custom={i * 0.1}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeUp}
                                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                                className="group relative bg-white rounded-3xl border border-gray-100 p-10 shadow-md hover:shadow-xl transition-all duration-400 overflow-hidden"
                            >
                                <div className="absolute top-0 left-0 right-0 h-1 bg-[#fd6402] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-t-3xl" />

                                <div className="w-14 h-14 rounded-2xl bg-orange-50 border border-[#fd6402]/20 flex items-center justify-center text-2xl mb-8 group-hover:scale-110 transition-transform duration-300">
                                    {icon}
                                </div>

                                <h3 className="text-3xl font-bold text-[#fd6402] mb-4">{title}</h3>
                                <div className="w-12 h-0.5 bg-gradient-to-r from-[#fd6402] to-transparent rounded-full mb-6" />
                                <p className="text-gray-600 text-[17px] leading-8">{text}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

           
            <div className="relative bg-[#06121f] py-28 overflow-hidden">
                <SectionDivider />

                <motion.div
                    animate={{ x: [0, 20, -14, 0], y: [0, -14, 10, 0] }}
                    transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-0 left-0 w-96 h-96 bg-[#fd6402]/[0.06] blur-[150px] rounded-full pointer-events-none"
                />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/[0.06] blur-[140px] rounded-full pointer-events-none" />

                <div className="relative max-w-5xl mx-auto px-6 md:px-16">

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="text-center mb-16"
                    >
                        <SectionLabel text="Our Values" />
                        <h2 className="text-4xl md:text-4xl font-bold text-white tracking-[-0.03em]">
                            The <span className="text-[#fd6402]">Stonearc</span> Standard
                        </h2>
                        <div className="w-24 h-0.5 bg-[#fd6402] rounded-full mx-auto mt-6" />
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={stagger}
                        className="space-y-3"
                    >
                        {values.map((item, index) => {
                            const isOpen = openIndex === index;
                            return (
                                <motion.div
                                    key={index}
                                    variants={fadeUp}
                                    className="rounded-2xl border border-white/[0.08] bg-white/[0.03] overflow-hidden"
                                >
                                    <button
                                        onClick={() => setOpenIndex(isOpen ? null : index)}
                                        className="w-full flex justify-between items-center px-7 py-5 hover:bg-white/[0.04] transition-colors duration-300 group"
                                    >
                                        <div className="flex items-center gap-4">
                                            
                                            <span className="font-semibold text-white text-left text-[17px]">
                                                {item.title}
                                            </span>
                                        </div>
                                        <motion.div
                                            animate={{ rotate: isOpen ? 45 : 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="text-white/45 text-2xl font-light group-hover:text-[#fd6402] transition-colors duration-300 flex-shrink-0 ml-4"
                                        >
                                            +
                                        </motion.div>
                                    </button>

                                    <AnimatePresence initial={false}>
                                        {isOpen && (
                                            <motion.div
                                                key="content"
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                                                className="overflow-hidden"
                                            >
                                                <div className="px-7 pb-7 pt-2">
                                                    <div className="h-px w-full bg-white/[0.07] mb-6" />
                                                    <div className="grid md:grid-cols-2 gap-6 items-center">
                                                        <p className="text-white/52 text-[16px] leading-7">
                                                            {item.content}
                                                        </p>
                                                        <div className="rounded-2xl overflow-hidden shadow-xl h-44">
                                                            <img
                                                                src={item.image}
                                                                alt={item.title}
                                                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </div>

            
            <div className="relative bg-white py-28 overflow-hidden">
                <SectionDivider />
                <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-orange-50/60 blur-[120px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-gray-100/80 blur-[100px] pointer-events-none" />

                <div className="relative max-w-7xl mx-auto px-6 md:px-16">

                   
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="text-center mb-16"
                    >
                        <SectionLabel text="Our Team" />
                        <h2 className="text-4xl md:text-4xl font-bold text-gray-900 tracking-[-0.03em] leading-[1.1]">
                            The People Behind
                            <span className="block mt-1 text-[#fd6402]">Every Project</span>
                        </h2>
                        <div className="w-16 h-0.5 bg-[#fd6402] mx-auto mt-6 rounded-full" />
                        <p className="text-gray-500 mt-6 max-w-2xl mx-auto text-lg leading-8">
                            Engineers, architects, project managers, fabricators,
                            and site supervisors united by a shared commitment to delivering results.
                        </p>
                    </motion.div>

                  
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative bg-gray-900 rounded-3xl border border-gray-800 p-8 md:p-10 shadow-xl overflow-hidden mb-16"
                    >
                        <div className="absolute top-0 right-0 w-40 h-40 bg-[#fd6402]/10 rounded-full blur-3xl pointer-events-none" />
                        <div className="absolute bottom-0 left-0 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
                        <div className="absolute top-0 left-0 right-0 h-1 bg-[#fd6402] rounded-t-3xl" />

                        <div className="relative flex flex-col md:flex-row items-start md:items-center gap-6">
                            <div className="w-16 h-16 rounded-2xl bg-[#fd6402] flex items-center justify-center text-3xl shadow-lg flex-shrink-0">
                                👥
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                                    Dedicated Project Management
                                </h3>
                                <p className="text-gray-400 leading-relaxed text-base">
                                    Every project is assigned a dedicated project manager who owns the timeline,
                                    budget, and quality — and is accountable to the client directly.
                                </p>
                            </div>
                            <div className="flex-shrink-0 px-5 py-2.5 rounded-full border border-[#fd6402]/30 bg-[#fd6402]/10">
                                <span className="text-[#fd6402] font-semibold text-sm">100% Accountable</span>
                            </div>
                        </div>
                    </motion.div>

                  
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
                        {teamMembers.map((member, i) => (
                            <motion.div
                                key={i}
                                custom={i * 0.1}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeUp}
                                whileHover={{ y: -8, transition: { duration: 0.25 } }}
                                className="group rounded-3xl overflow-hidden border border-gray-100 bg-white shadow-md hover:shadow-xl transition-all duration-400"
                            >
                               
                                <div className="relative h-64 overflow-hidden">
                                    <div
                                        className={`absolute inset-0 bg-gradient-to-br ${member.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 mix-blend-multiply`}
                                    />
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/55 via-transparent to-transparent" />
                                  
                                    <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#fd6402] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                                </div>

                             
                                <div className="p-6 text-center">
                                    <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
                                    <p className="text-[#fd6402] font-semibold text-sm mb-2">{member.role}</p>
                                    <p className="text-gray-500 text-sm mb-4">{member.expertise}</p>
                                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gray-50 border border-gray-200">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#fd6402]" />
                                        <span className="text-gray-600 text-xs font-medium">
                                            {member.experience}
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="text-center mb-12"
                    >
                        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-[-0.02em]">
                            Our Core <span className="text-[#fd6402]">Expertise</span>
                        </h3>
                        <p className="text-gray-500 mt-4 text-base">
                            Backed by years of experience and a proven track record
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {expertiseAreas.map((area, i) => (
                            <motion.div
                                key={i}
                                custom={i * 0.08}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeUp}
                                whileHover={{ y: -5, transition: { duration: 0.25 } }}
                                className="group relative bg-gray-50 rounded-2xl border border-gray-100 p-6 hover:border-[#fd6402]/30 hover:shadow-md transition-all duration-300 overflow-hidden"
                            >
                                <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#fd6402] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-t-2xl" />

                                <div className="flex items-start gap-4">
                                    <div className="w-14 h-14 rounded-xl bg-orange-50 border border-[#fd6402]/20 flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-110 group-hover:border-[#fd6402]/40 transition-all duration-300">
                                        {area.icon}
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-base font-bold text-gray-900 mb-1.5 group-hover:text-[#fd6402] transition-colors duration-300">
                                            {area.title}
                                        </h4>
                                        <p className="text-gray-500 text-sm mb-3 leading-6">
                                            {area.description}
                                        </p>
                                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 border border-[#fd6402]/20">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#fd6402] animate-pulse" />
                                            <span className="text-[#fd6402] text-xs font-semibold">
                                                {area.stat}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>

        </section>
    );
};

export default Page;
