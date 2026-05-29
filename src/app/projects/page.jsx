"use client";

import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { pebProjects , architecture , projects } from "../data/data";

const fadeUp = {
    hidden: {
        opacity: 0,
        y: 80,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut",
        },
    },
};

const staggerContainer = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};


const page = () => {
    return (
        <section className="bg-gray-100 overflow-hidden">

            <div className="relative w-full h-screen overflow-hidden">

                <motion.div
                    initial={{ scale: 1 }}
                    animate={{ scale: 1.1 }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        repeatType: "reverse",
                    }}
                    className="absolute inset-0"
                >
                    <img
                        src="/pric.jpg"
                        alt="Construction"
                        className="w-full h-full object-cover"
                    />
                </motion.div>

                <div className="absolute inset-0 bg-black/70 z-10" />


                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/20 blur-[120px] z-10" />

                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-black-500/20 blur-[120px] z-10" />


                <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-16 h-full flex items-center">
                    <motion.div
                        className="max-w-3xl"
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                    >
                        <motion.div
                            variants={fadeUp}
                            className="inline-flex items-center gap-4 mb-6"
                        >
                            <div className="w-14 h-[2px] bg-[#fd6402]" />

                            <span className="uppercase tracking-[5px] text-[#fd6402] text-sm font-semibold">
                                Construction Services
                            </span>

                            <div className="w-14 h-[2px] bg-[#fd6402]" />
                        </motion.div>

                        <motion.h1
                            variants={fadeUp}
                            className="text-4xl md:text-4xl text-white lg:text-4xl font-bold leading-tight"
                        >
                            Our Projects <br />

                            <span className="bg-gradient-to-r from-[#fd6402] via-[#fd6402] to-[#fd6402] bg-clip-text text-transparent">
                             
                                Ground-Breaking to Handover
                            </span>
                        </motion.h1>


                        <motion.p
                            variants={fadeUp}
                            className="mt-8 text-gray-300 text-lg leading-relaxed max-w-2xl"
                        >
                            Delivering premium residential, industrial, commercial,
                            and institutional construction projects with engineering
                            precision and architectural excellence.
                        </motion.p>


                        {/* <motion.button
                            variants={fadeUp}
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0px 0px 40px rgba(59,130,246,0.5)",
                            }}
                            whileTap={{ scale: 0.95 }}
                            className="mt-10 px-8 py-4 bg-[#fd6402] hover:bg-[#fd6402] rounded-full font-semibold transition-all duration-300"
                        >
                            Explore Portfolio
                        </motion.button> */}

                    </motion.div>
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="max-w-7xl mx-auto px-6 md:px-16 py-28"
            >

                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-xl mb-8">
                            <div className="w-2.5 h-2.5 rounded-full bg-[#fd6402] animate-pulse" />
                            <span className="text-sm tracking-[4px] uppercase text-[#fd6402] font-semibold">
                                Portfolio Introduction
                            </span>

                        </div>


                        <h2 className="text-4xl md:text-4xl lg:text-4xl font-bold leading-[1.2] text-black">
                            Every Sector.
                            <span className="block mt-3 bg-gradient-to-r from-[#fd6402] via-[#fd6402] to-[#fd6402] bg-clip-text text-transparent">
                                One Standard.
                            </span>
                        </h2>

                        <div className="w-32 h-1 bg-gradient-to-r from-[#fd6402] to-[#fd6402] rounded-full mt-8" />
                        <p className="mt-10 text-gray-900 text-lg leading-8 max-w-2xl">
                            The Stonearc portfolio spans residential, commercial,
                            industrial, and institutional sectors  with projects ranging
                            from luxury homes to multi-lakh square feet developments
                            executed with engineering precision.
                        </p>

                        <p className="mt-6 text-gray-900 text-lg leading-8 max-w-2xl">
                            Every project reflects our commitment to premium quality,
                            modern construction systems, structural excellence,
                            and long-term client value.
                        </p>
                    </div>


                    <div className="relative">
                        <div className="relative rounded-[40px] overflow-hidden border border-white/10 shadow-2xl">
                            <img
                                src="/200project.png"
                                alt="Construction"
                                className="w-full h-[650px] object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                        </div>


                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                            }}
                            className="absolute -left-10 top-12 bg-[#111827] border border-white/10 rounded-3xl px-6 py-5 backdrop-blur-xl shadow-2xl"
                        >

                            <h3 className="text-3xl font-bold text-[#fd6402]">
                                200+
                            </h3>

                            <p className="text-gray-300 mt-1">
                                Completed Projects
                            </p>

                        </motion.div>


                        <motion.div
                            animate={{ y: [0, 15, 0] }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                            }}
                            className="absolute -right-10 bottom-16 bg-[#111827] border border-white/10 rounded-3xl px-6 py-5 backdrop-blur-xl shadow-2xl"
                        >
                        </motion.div>


                    </div>

                </div>

            </motion.div>

            <div className="bg-[#111827] py-28">
                <div className="max-w-7xl mx-auto px-6 md:px-16">
                    <motion.div
                        initial={{ opacity: 0, y: 80 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-24"
                    >

                        <p className="text-[#fd6402] tracking-[4px] uppercase text-sm">
                            Project Categories
                        </p>

                        <h2 className="mt-4 text-white text-4xl md:text-5xl font-bold">
                            Projects by Category
                        </h2>

                    </motion.div>


                    <div className="mb-28">

                        <h3 className="text-3xl text-white font-bold mb-12">
                            Construction Projects
                        </h3>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                            {projects.map((item, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{
                                        y: -10,
                                        scale: 1.02,
                                    }}
                                    transition={{ duration: 0.3 }}
                                    className="bg-[#0B1120] text-white rounded-3xl border border-white/10 overflow-hidden group"
                                >
                                    <div className="h-60 overflow-hidden">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                                        />
                                    </div>
                                    <div className="p-8">

                                        <h4 className="text-2xl font-semibold mb-4">
                                            {item.title}
                                        </h4>

                                        <p className="text-gray-400 leading-7">
                                            Premium engineered project with modern
                                            construction standards and architectural
                                            excellence.
                                        </p>

                                    </div>

                                </motion.div>
                            ))}

                        </div>
                    </div>

                    <div className="mb-28">

                        <h3 className="text-3xl text-white font-bold mb-12">
                            Architecture Projects
                        </h3>

                        <div className="grid md:grid-cols-2 gap-8">

                            {architecture.map((item, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{
                                        y: -10,
                                        scale: 1.02,
                                    }}
                                    transition={{ duration: 0.3 }}
                                    className="bg-[#ffffff] p-10 rounded-3xl border border-white/10"
                                >

                                    <h4 className="text-black text-2xl font-semibold mb-5">
                                        {item.title}
                                    </h4>

                                    <p className="text-black leading-7">
                                        Complete architectural planning, design
                                        development, approval drawings, and execution
                                        support for premium infrastructure.
                                    </p>

                                </motion.div>
                            ))}

                        </div>
                    </div>

                    <div>
                        <h3 className="text-3xl text-white font-bold mb-12">
                            PEB Projects
                        </h3>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                            {pebProjects.map((item, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{
                                        y: -10,
                                        scale: 1.02,
                                    }}
                                    transition={{ duration: 0.3 }}
                                    className="bg-[#0B1120] rounded-3xl border border-white/10 overflow-hidden group"
                                >


                                    <div className="h-60 overflow-hidden">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full  object-cover group-hover:scale-110 transition-all duration-700"
                                        />

                                    </div>


                                    <div className="p-8">

                                        <h4 className="text-2xl text-white font-semibold mb-4">
                                            {item.title}
                                        </h4>

                                        <p className="text-gray-400 leading-7">
                                            Advanced steel structure optimized for
                                            durability, speed, and industrial efficiency.
                                        </p>

                                    </div>

                                </motion.div>
                            ))}

                        </div>
                    </div>

                </div>
            </div>

       
            <div className="py-28">

                <div className="max-w-7xl mx-auto px-6 md:px-16">

                    <motion.div
                        initial={{ opacity: 0, y: 80 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="grid md:grid-cols-2 lg:grid-cols-5 gap-8"
                    >

                      
                        <div className="bg-[#111827] rounded-3xl p-10 text-center border border-white/10">
                            <h2 className="text-5xl font-bold text-[#fd6402]">
                                <CountUp end={200} duration={3} />+
                            </h2>

                            <p className="mt-4 text-gray-400">
                                Projects Delivered
                            </p>
                        </div>

                        <div className="bg-[#111827] rounded-3xl p-10 text-center border border-white/10">
                            <h2 className="text-5xl font-bold text-[#fd6402]">
                                <CountUp end={50} duration={3} />L+
                            </h2>

                            <p className="mt-4 text-gray-400">
                                Sq Ft Constructed
                            </p>
                        </div>

                        <div className="bg-[#111827] rounded-3xl p-10 text-center border border-white/10">
                            <h2 className="text-5xl font-bold text-[#fd6402]">
                                <CountUp end={75} duration={3} />+
                            </h2>

                            <p className="mt-4 text-gray-400">
                                PEB Structures
                            </p>
                        </div>

                     
                        <div className="bg-[#111827] rounded-3xl p-10 text-center border border-white/10">
                            <h2 className="text-5xl font-bold text-[#fd6402]">
                                <CountUp end={60} duration={3} />%
                            </h2>

                            <p className="mt-4 text-gray-400">
                                Repeat Clients
                            </p>
                        </div>

                        
                        <div className="bg-[#111827] rounded-3xl p-10 text-center border border-white/10">
                            <h2 className="text-5xl font-bold text-[#fd6402]">
                                <CountUp end={98} duration={3} />%
                            </h2>

                            <p className="mt-4 text-gray-400">
                                On-Time Delivery
                            </p>
                        </div>

                    </motion.div>

                </div>
            </div>

        </section>
    );
};

export default page;