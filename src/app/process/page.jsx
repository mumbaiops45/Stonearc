"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.18, delayChildren: 0.1 },
  },
};

const processStages = [
  {
    number: "01",
    title: "Initial Consultation & Site Assessment",
    subtitle: "Understanding your vision before drawing a single line.",
    points: [
      "Detailed client brief — functional, spatial, and budget requirements",
      "Site visit and physical assessment — soil, topography, access, utilities, neighbours",
      "Preliminary feasibility — what is buildable, at what cost, and in what timeframe",
      "Review of existing drawings, approvals, or structural reports if available",
    ],
    receive:
      "A clear, written project brief confirmed with you before any design work begins. No guesswork. No assumptions.",
    icon: "◎",
  },
  {
    number: "02",
    title: "Design & Engineering",
    subtitle: "Precision architecture backed by structural intelligence.",
    points: [
      "Architectural concept and schematic design",
      "Structural design — foundation, superstructure, and load analysis",
      "PEB frame analysis and structural planning",
      "Client review and design revisions",
      "Working drawings for construction and fabrication",
    ],
    receive:
      "A complete design package including architectural drawings, structural drawings, specifications, and BOQ.",
    icon: "⬡",
  },
  {
    number: "03",
    title: "Approvals & Permissions",
    subtitle: "We handle the complexity so you don't have to.",
    points: [
      "Preparation of approval drawings",
      "Submission and follow-up with local authorities",
      "Fire NOC and environmental approvals",
      "RERA registration support where applicable",
    ],
    receive:
      "All statutory approvals managed by Stonearc without clients dealing with approval complexities.",
    icon: "◈",
  },
  {
    number: "04",
    title: "Construction & Fabrication",
    subtitle: "Built to spec. Inspected at every stage.",
    points: [
      "Site mobilisation and safety setup",
      "Foundation execution with QC testing",
      "Superstructure execution with scheduled inspections",
      "PEB fabrication and factory quality checks",
      "Daily progress and manpower reporting",
    ],
    receive:
      "A structure built exactly to design with every structural element inspected and documented.",
    icon: "⬢",
  },
  {
    number: "05",
    title: "Finishing & Commissioning",
    subtitle: "The final 10% that defines the full 100%.",
    points: [
      "MEP coordination and installation",
      "Architectural finishing and facade works",
      "PEB accessories and finishing systems",
      "Punch-list walkthrough and corrections",
      "Final documentation and handover preparation",
    ],
    receive:
      "A fully completed, occupancy-ready building with drawings, certificates, warranties, and manuals.",
    icon: "◇",
  },
];

const StageCard = ({ stage, index }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: index * 0.07 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="relative group"
    >
      {index < processStages.length - 1 && (
        <div className="absolute left-[52px] top-full w-[1px] h-10 bg-gradient-to-b from-blue-500/40 to-transparent z-10 hidden lg:block" />
      )}

      <div
        className={`
          relative rounded-[28px] border transition-all duration-500
          ${hovered
            ? "border-blue-500/50 bg-[#0d1628] shadow-[0_0_60px_rgba(59,130,246,0.12)]"
            : "border-white/8 bg-[#0a1020]"
          }
          overflow-hidden
        `}
      >

        <div
          className={`absolute inset-x-0 top-0 h-[1px] transition-opacity duration-500 ${hovered ? "opacity-100" : "opacity-0"}`}
          style={{ background: "linear-gradient(90deg, transparent, rgba(59,130,246,0.6), transparent)" }}
        />

        <div className="p-8 lg:p-12">
          <div className="flex flex-col lg:flex-row lg:gap-16 gap-8">


            <div className="flex lg:flex-col items-center lg:items-start gap-5 lg:gap-4 flex-shrink-0 lg:w-24">
              <div className="w-14 h-14 rounded-2xl border border-blue-500/30 bg-blue-500/10 flex items-center justify-center text-blue-400 text-2xl font-light flex-shrink-0">
                {stage.icon}
              </div>
              <div>

                <span className="text-5xl font-bold text-white/10 leading-none tracking-tight font-mono">
                  {stage.number}
                </span>
              </div>
            </div>

            <div className="flex-1 min-w-0">
              <div className="mb-6">
                <h3 className="text-2xl lg:text-3xl font-bold text-white leading-tight tracking-[-0.02em]">
                  {stage.title}
                </h3>
                <p className="mt-2 text-blue-400/80 text-base font-medium">
                  {stage.subtitle}
                </p>
              </div>


              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xs tracking-[4px] uppercase text-white/40 font-semibold mb-5">
                    What Happens
                  </h4>
                  <ul className="space-y-3">
                    {stage.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                        <span className="text-white/70 text-[15px] leading-7">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>


                <div className="relative">
                  <h4 className="text-xs tracking-[4px] uppercase text-blue-400/60 font-semibold mb-5">
                    What You Receive
                  </h4>
                  <div className="relative rounded-2xl border border-blue-500/20 bg-blue-500/[0.06] p-6">
                    <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden rounded-tr-2xl">
                      <div className="absolute top-0 right-0 w-[1px] h-12 bg-blue-500/40" />
                      <div className="absolute top-0 right-0 w-12 h-[1px] bg-blue-500/40" />
                    </div>
                    <p className="text-white/80 text-[15px] leading-7">
                      {stage.receive}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Page = () => {
  return (
    <section
      className="bg-[#080e1c] text-white overflow-hidden"
    >

      <style>{`
        .grain {
          position: fixed;
          top: 0; left: 0;
          width: 100%; height: 100%;
          pointer-events: none;
          z-index: 0;
          opacity: 0.025;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
        }

        .hero-grid {
          background-image:
            linear-gradient(rgba(59,130,246,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59,130,246,0.04) 1px, transparent 1px);
          background-size: 60px 60px;
        }
      `}</style>


      <div className="relative w-full min-h-screen flex items-center hero-grid overflow-hidden">

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-blue-600/10 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-blue-500/8 blur-[100px] pointer-events-none" />


        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: 1.06 }}
          transition={{ duration: 18, repeat: Infinity, repeatType: "reverse" }}
          className="absolute inset-0"
        >
          <img
            src="/structured.jpg"
            alt="Process"
            className="w-full h-full object-cover opacity-20"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#080e1c]/60 via-transparent to-[#080e1c]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 w-full pt-32 pb-24">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl"
          >

            <motion.div variants={fadeUp} className="flex items-center gap-4 mb-10">
              <div className="w-10 h-[1px] bg-blue-400" />
              <span className="text-blue-400 text-xs tracking-[6px] uppercase font-semibold">
                Our Process
              </span>
            </motion.div>


            <motion.h1
              variants={fadeUp}
              className="text-5xl md:text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-white"
            >
              Structured Process.
              <br />
              <span className="text-transparent bg-clip-text"
                style={{ backgroundImage: "linear-gradient(135deg, #60a5fa 0%, #93c5fd 50%, #3b82f6 100%)" }}
              >
                Predictable Delivery.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-8 text-white text-lg leading-8 max-w-xl font-light"
            >
              Structure. Discipline. Delivery. This is how every Stonearc project
              runs — from first consultation to final handover.
            </motion.p>


            <motion.div variants={fadeUp} className="mt-12 flex items-center gap-5 flex-wrap">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="relative px-8 py-4 rounded-full font-semibold text-white overflow-hidden group"
                style={{
                  background: "linear-gradient(135deg, #2563eb, #1d4ed8)",
                  boxShadow: "0 0 0 1px rgba(59,130,246,0.3), 0 8px 32px rgba(37,99,235,0.3)",
                }}
              >
                <span className="relative z-10">Explore Process</span>
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="relative px-8 py-4 rounded-full font-semibold text-white overflow-hidden group"
                style={{
                  background: "linear-gradient(135deg, #2563eb, #1d4ed8)",
                  boxShadow: "0 0 0 1px rgba(59,130,246,0.3), 0 8px 32px rgba(37,99,235,0.3)",
                }}
              >
                <span className="relative z-10">Scroll to stages</span>
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
              </motion.button>
            </motion.div>
          </motion.div>


        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-16 py-16">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-blue-500/25 bg-blue-500/8 mb-10">
              <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              <span className="text-xs tracking-[5px] uppercase text-blue-300 font-semibold">
                Process Overview
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-[1.15] tracking-[-0.03em]">
              From Brief
              <span
                className="block mt-2 text-transparent bg-clip-text"
                style={{ backgroundImage: "linear-gradient(135deg, #60a5fa, #3b82f6)" }}
              >
                To Handover
              </span>
            </h2>

            <div className="w-16 h-[2px] bg-blue-500 rounded-full mt-8 mb-10" />

            <div className="space-y-5" >
              <p className="text-white text-lg leading-8">
                Every Stonearc project — regardless of size, type, or complexity —
                follows the same structured delivery framework.
              </p>
              <p className="text-white text-lg leading-8">
                Our process ensures clarity, engineering precision, quality
                control, and predictable project execution from day one.
              </p>
            </div>


            <div className="flex flex-wrap gap-3 mt-10">
              {["Engineering-Led", "Fully Documented", "Client Transparent", "Zero Surprises"].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 rounded-full border border-white/12 bg-white/4 text-white text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-white/8">
              <img
                src="/verifyrequirement.png"
                alt="Stonearc Process"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080e1c]/80 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-[#0a1020]/90 backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-5">
                  <p className="text-white/40 text-xs tracking-[3px] uppercase mb-1">Delivery Standard</p>
                  <p className="text-white font-semibold">Every project. Every stage. No exceptions.</p>
                </div>
              </div>
            </div>

            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-8 top-10 bg-[#0d1628] border border-blue-500/25 rounded-2xl px-6 py-5 shadow-2xl shadow-blue-950/50"
            >
              <div className="text-4xl font-bold text-blue-400 tracking-tight">5</div>
              <div className="text-white text-sm mt-0.5" >
                Defined Stages
              </div>
            </motion.div>


            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -right-6 bottom-32 bg-[#0d1628] border border-white/10 rounded-2xl px-5 py-4 shadow-xl"
            >
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="bg-[#060c18] border-t border-b border-white/5 py-32">
        <div className="max-w-7xl  px-16 md:px-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid md: grid-cols-2 gap-10 items-end mb-24"
          >
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-[1px] bg-blue-500" />
                <p className="text-blue-400 text-xs tracking-[0.35em] uppercase font-semibold">Project Workflow</p>
              </div>
              <h2 className="text-4xl md:text-5xl font-semibold leading-[1.05] tracking-[-0.04em] text-white">Our Working
                <span className="block text-white/60">Process</span>
              </h2>
            </div>

            <div className="md:ml-auto max-w-sm">
              <p className="text-white text-base leading-8 border-l border-white.10 pl-6">Each stage is strategically planned, clearly documented, and executed with complete transparency from start to delivery.</p>

            </div>

          </motion.div>

          <div className="space-y-5">
            {processStages.map((stage, index) => (
              <StageCard key={index} stage={stage} index={index} />
            ))}
          </div>
        </div>
      </div>


      <div className="py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-[36px] overflow-hidden border border-blue-500/20"
            style={{
              background: "linear-gradient(135deg, #0d1628 0%, #0a1225 50%, #0d1832 100%)",
            }}
          >
            <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-blue-600/12 blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-blue-500/8 blur-[80px] pointer-events-none" />

            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: "linear-gradient(rgba(59,130,246,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.06) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />

            <div
              className="absolute inset-x-0 top-0 h-[1px]"
              style={{ background: "linear-gradient(90deg, transparent 0%, rgba(59,130,246,0.5) 50%, transparent 100%)" }}
            />
            <div className="relative z-10 px-10 py-20 md:px-20 md:py-24 text-center">
              <h2 className="mt-5 text-4xl md:text-5xl font-bold leading-[1.1] tracking-[-0.03em] max-w-3xl mx-auto">
                Handover &{" "}
                <span
                  className="text-transparent bg-clip-text"
                  style={{ backgroundImage: "linear-gradient(135deg, #93c5fd, #60a5fa)" }}
                >
                  Post-Handover
                </span>{" "}
                Support
              </h2>

              <p
                className="mt-8 text-lg text-white/65 max-w-2xl mx-auto leading-8">
                Stonearc does not disappear after handover. We provide structural
                warranty support, engineering guidance, post-completion inspections,
                and future upgrade consultation whenever required.
              </p>


              <div className="flex flex-wrap justify-center gap-4 mt-10">
                {[
                  "Structural Warranty",
                  "Post-Completion Inspections",
                  "Upgrade Consultation",
                  "Engineering Guidance",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 bg-white/5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                    <span className="text-white text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.04, boxShadow: "0 0 50px rgba(59,130,246,0.35)" }}
                whileTap={{ scale: 0.97 }}
                className="mt-12 px-10 py-4 bg-white text-[#080e1c] rounded-full font-bold text-base transition-all duration-300 hover:bg-blue-50"
              >
                Contact Our Team →
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Page;