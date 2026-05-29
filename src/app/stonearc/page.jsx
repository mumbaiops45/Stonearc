"use client";

import React from "react";
import { motion } from "framer-motion";
import {differentiators , testimonials , standards } from "../data/data"
import { FaStar} from "react-icons/fa";

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



const page = () => {
    return (
        <section className="bg-gray-100 overflow-hidden">

            <div className="relative h-[90vh] overflow-hidden">

                <motion.img
                    initial={{ scale: 1 }}
                    animate={{ scale: 1.1 }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        repeatType: "reverse",
                    }}
                    src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1600&auto=format&fit=crop"
                    alt="Construction"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black/70" />

                <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-500/20 blur-[120px]" />

                <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/20 blur-[120px]" />

                <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 h-full flex items-center">

                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeUp}
                        className="max-w-4xl"
                    >
                        <h1 className="text-4xl md:text-4xl text-white font-bold leading-tight">

                            Engineering <br />

                            <span className="bg-gradient-to-r from-[#fd6402] via-[#fd6402] to-[#fd6402] bg-clip-text text-transparent">
                                Beyond Construction
                            </span>

                        </h1>

                        <p className="mt-10 text-white text-lg leading-8 max-w-2xl">
                            There are many construction companies.
                            There are very few engineering partners.
                            Stonearc is built on structural precision,
                            disciplined delivery, and long-term trust.
                        </p>

                        

                    </motion.div>
                </div>
            </div>



            <div className="max-w-7xl mx-auto px-6 md:px-16 py-22">
                <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-24"
                >

                    {/* <button className="px-5 py-2 border border-blue-500/30 bg-blue-500/10 rounded-full text-blue-300 tracking-[4px] uppercase text-sm">
                        Differentiators
                    </button> */}

                    <h2 className="mt-8 text-5xl md:text-5xl font-bold text-black">
                        What Makes Stonearc Different
                    </h2>

                    <div className="w-32 h-1 bg-gradient-to-r from-[#fd6402] to-[#fd6402] mx-auto rounded-full mt-8" />

                </motion.div>


                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

                    {differentiators.map((item, index) => (

                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ scale: 1.03 }}
                            className="group [perspective:1200px]"
                        >


                            <div
                                className="
            relative h-[380px] w-full
            transition-transform duration-700
            [transform-style:preserve-3d]
            group-hover:[transform:rotateY(180deg)]
          "
                            >

                                <div
                                    className="
              absolute inset-0
              rounded-[32px]
              overflow-hidden
              border border-white/10
              bg-[#111827]
              [backface-visibility:hidden]
              shadow-[0_10px_50px_rgba(0,0,0,0.3)]
            "
                                >

                                    <div className="relative h-full w-full">

                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />


                                        <div className="absolute inset-0 bg-black/40" />


                                        <div className="absolute bottom-8 left-8 right-8">

                                            <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 backdrop-blur-md flex items-center justify-center mb-6">

                                                <span className="text-[#fd6402] text-xl font-bold">
                                                    0{index + 1}
                                                </span>

                                            </div>

                                            <h3 className="text-2xl font-bold text-white leading-snug">
                                                {item.title}
                                            </h3>

                                        </div>

                                    </div>

                                </div>


                                <div
                                    className="
              absolute inset-0
              rounded-[32px]
              overflow-hidden
              border border-white/10
              bg-gradient-to-br from-[#111827] to-[#1f2937]
              p-10
              flex flex-col justify-center
              [transform:rotateY(180deg)]
              [backface-visibility:hidden]
              shadow-[0_10px_50px_rgba(0,0,0,0.3)]
            "
                                >
                                    <h3 className="text-2xl font-bold mb-6 text-white leading-snug">
                                        {item.title}
                                    </h3>
                                    <p className="text-white leading-8 text-md">
                                        {item.description}
                                    </p>

                                </div>

                            </div>

                        </motion.div>

                    ))}

                </div>

            </div>


            <div className="bg-[#111827] py-32 overflow-hidden">

                <div className="max-w-7xl mx-auto px-6 md:px-16">

                    <div className="grid lg:grid-cols-2 gap-20 items-center">

                        <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: "easeOut" }}
                        >

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2, duration: 0.6 }}
                                className="text-[#fd6402] tracking-[4px] uppercase text-sm"
                            >
                                Standards & Certifications
                            </motion.p>

                            <motion.h2
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3, duration: 0.8 }}
                                className="mt-6 text-4xl md:text-5xl font-bold leading-tight text-white"
                            >
                                Engineering Standards We Follow
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                                className="mt-8 text-gray-300 text-lg leading-8"
                            >
                                Stonearc follows nationally and internationally
                                recognized engineering codes to ensure structural
                                safety, durability, and long-term performance.
                            </motion.p>


                            <div className="grid grid-cols-2 gap-5 mt-12">
                                {standards.map((item, index) => {

                                    const Icon = item.icon;
                                    return (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 40, scale: 0.9 }}
                                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{
                                                delay: 0.2 + index * 0.1,
                                                duration: 0.5
                                            }}
                                            whileHover={{
                                                y: -10,
                                                scale: 1.04,
                                            }}
                                            className="relative
          overflow-hidden
          rounded-3xl
          border border-white/10
          bg-[#0B1120]
          p-6
          group
          cursor-pointer
          transition-all
          duration-500
          hover:border-blue-500/30
          hover:shadow-[0_20px_60px_rgba(59,130,246,0.15)]"
                                        >

                                            <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition duration-700 bg-gradient-to-br ${item.color}`} />

                                            <div
                                                className={`absolute -top-10 -right-10 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-30
                                transition duration-700
                                bg-gradient-to-br ${item.color}
                                `}
                                            />

                                            <div className="relative z-10
                            flex items-start gap-4 ">
                                                <div
                                                    className={`min-w-[60px] h-[60px] rounded-2xl flex items-center justify-center bg-gradient-to-br ${item.color} 
                                shadow-lg group-hover:scale-110
                                transition duration-500
                                `}
                                                >
                                                    <Icon className="text-white text-2xl" />

                                                </div>

                                                <div>
                                                    <p className="text-white font-bold text-md leading-snug">{item.title}</p>
                                                </div>

                                            </div>

                                        </motion.div>
                                    )


                                })}

                            </div>

                        </motion.div>


                        <motion.div
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="relative"
                        >


                            <div className="
          absolute -top-10 -right-10
          w-72 h-72
          bg-blue-500/20
          rounded-full
          blur-3xl
        " />


                            <motion.div
                                whileHover={{
                                    scale: 1.02,
                                    rotate: -1,
                                }}
                                transition={{ duration: 0.5 }}
                                className="relative overflow-hidden rounded-[40px]"
                            >

                                <img
                                    src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1400&auto=format&fit=crop"
                                    alt="Engineering"
                                    className="
              rounded-[40px]
              w-full
              h-[500px]
              object-cover
              transition-transform
              duration-700
              hover:scale-110
            "
                                />

                                <div className="absolute inset-0 bg-black/20" />

                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                whileHover={{
                                    y: -10,
                                    scale: 1.05,
                                }}
                                viewport={{ once: true }}
                                transition={{
                                    delay: 0.6,
                                    duration: 0.8,
                                }}
                                className="
            absolute -bottom-10 -left-10
            bg-[#0B1120]/90
            border border-white/10
            rounded-3xl
            p-8
            backdrop-blur-xl
            shadow-[0_20px_80px_rgba(59,130,246,0.25)]
          "
                            >

                                <motion.h3
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    transition={{
                                        delay: 1,
                                        type: "spring",
                                        stiffness: 120,
                                    }}
                                    className="text-2xl font-bold text-[#fd6402]"
                                >
                                    98%
                                </motion.h3>

                                <p className="text-white mt-3 text-md">
                                    On-Time Delivery Rate
                                </p>

                            </motion.div>

                        </motion.div>

                    </div>

                </div>

            </div>


            <div className="max-w-7xl mx-auto px-6 md:px-16 py-32">

                <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-24"
                >

                    {/* <button className="px-5 py-2 border border-blue-500/30 bg-blue-500/10 rounded-full text-blue-300 tracking-[4px] uppercase text-sm">
                        Client Testimonials
                    </button> */}

                    <h2 className="mt-8 text-4xl md:text-5xl font-bold text-black">
                        What Our Clients Say
                    </h2>

                    <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg leading-8">Trusted by industry leaders for delivering exceptional construction, architectural, and engineering solutions.</p>

                </motion.div>



                <div className="grid md:grid-cols-3 xl:grid-cols-3 gap-8">

                    {testimonials.map((item, index) => (

                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 80 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.7,
                                delay: index * 0.15,
                            }}
                            whileHover={{
                                y: -14,
                                scale: 1.02,
                            }}
                            className="
        relative
        group
        overflow-hidden
        rounded-[36px]
        border border-white/10
        bg-gradient-to-b
        from-[#111827]
        to-[#0B1120]
        p-8
        transition-all
        duration-700

        ring-1 ring-white/10
       hover:border-[#fd6402]  
      "
                        >


                            <div className="
        absolute inset-0
        opacity-0
        group-hover:opacity-100
        transition duration-700
        bg-gradient-to-br
        from-blue-500/10
        via-transparent
        to-purple-500/10
      " />

                            <div className="
        absolute -top-24 -right-24
        w-56 h-56
        rounded-full
        bg-blue-500/20
        blur-3xl
        opacity-0
        group-hover:opacity-100
        transition duration-700
      " />


                            <div className="
        absolute inset-0
        rounded-[36px]
        bg-gradient-to-r
        from-transparent
        via-white/5
        to-transparent
        translate-x-[-100%]
        group-hover:translate-x-[100%]
        transition duration-1000
      " />


                            <div className="relative z-10 flex flex-col h-full">

                                <div className="flex items-center justify-between mb-8">

                                    <div className="flex items-center gap-4">

                                        <div className="relative">

                                            <img
                                                src={item.image}
                                                alt={item.role}
                                                className="
                  w-16 h-16
                  rounded-2xl
                  object-cover
                  border border-white/10
                  shadow-lg
                "
                                            />



                                        </div>

                                        <div>

                                            <h4 className="text-white font-semibold text-lg leading-tight">
                                                {item.role}
                                            </h4>

                                            <p className="text-gray-400 text-sm mt-1">
                                                {item.company}
                                            </p>

                                        </div>

                                    </div>

                                    <div className="
            text-6xl
            font-serif
            text-blue-500/20
            leading-none
          ">
                                        ”
                                    </div>

                                </div>

                                <div className="flex-1">

                                    <p className="
            text-gray-300
            leading-8
            text-lg
          ">
                                        {item.quote}
                                    </p>

                                </div>

                                <div className="mt-10 flex items-center justify-between">

                                    <div className="flex items-center gap-1">

                                        {[...Array(5)].map((_, i) => (

                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, scale: 0 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                transition={{
                                                    delay: 0.4 + i * 0.08,
                                                    type: "spring",
                                                    stiffness: 120,
                                                }}
                                            >

                                                <FaStar
                                                    className="
                    text-yellow-400
                    text-lg
                    drop-shadow-[0_0_12px_rgba(250,204,21,0.7)]
                  "
                                                />

                                            </motion.div>

                                        ))}

                                    </div>
                                </div>

                            </div>

                        </motion.div>

                    ))}

                </div>

            </div>

        </section>
    );
};

export default page;
