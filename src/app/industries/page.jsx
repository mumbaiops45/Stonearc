"use client";

import React from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";

import { industries } from "../data/data";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const Page = () => {
  const shouldReduceMotion = useReducedMotion();

  const { scrollY } = useScroll();

  const heroY = useTransform(scrollY, [0, 500], [0, 120]);

  return (
    <section className="bg-[#0B1120] text-white overflow-hidden">
      <div className="relative h-screen w-full overflow-hidden">
        <motion.div
          style={{
            y: shouldReduceMotion ? 0 : heroY,
          }}
          className="absolute inset-0 scale-110 will-change-transform transform-gpu"
        >
          <Image
            src="/industrialconst.jpg"
            alt="Industries"
            fill
            priority
            quality={90}
            className="object-cover"
          />
        </motion.div>

        <div className="absolute inset-0 bg-black/60 z-10" />


        <div className="absolute inset-0 opacity-[0.03] mix-blend-soft-light bg-[url('/noise.png')] z-10" />


        <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-16 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-4 mb-6">
              <div className="w-14 h-[2px] bg-[#fd6402]" />

              <span className="uppercase tracking-[5px] text-[#fd6402] text-sm">
                Industries We Serve
              </span>

              <div className="w-14 h-[2px] bg-[#fd6402]" />
            </div>

            <h1 className="text-5xl md:text-5xl font-bold leading-[1.05] tracking-tight">
              Built for Every Industry.
              <span className="block mt-4 bg-gradient-to-r from-[#fd6402] to-[#fd6402] bg-clip-text text-transparent">
                Engineered for Performance.
              </span>
            </h1>

            <p className="mt-8 text-white text-lg leading-8 max-w-2xl">
              Every sector has different demands. Every Stonearc structure is
              engineered to meet its operational, structural, and regulatory
              requirements with precision.
            </p>
          </motion.div>
        </div>
      </div>


      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />


      <div className="max-w-7xl mx-auto px-6 md:px-16 py-28">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
          >
            <h2 className="text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight">
              Built for Your Industry.
              <span className="block mt-4 text-[#fd6402]">
                Engineered for Reality.
              </span>
            </h2>

            <p className="mt-8 text-white/80 text-lg leading-8">
              Stonearc Engineers has delivered projects across manufacturing,
              logistics, pharma, education, and infrastructure sectors.
            </p>

            <p className="mt-6 text-white/70 text-lg leading-8">
              The building that works for a pharmaceutical manufacturer is
              different from the one that works for an e-commerce fulfilment
              centre — even if they look similar from the outside. We know the
              difference, and we engineer it in.
            </p>
          </motion.div>


          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="relative h-[450px] rounded-[40px] overflow-hidden border border-white/10 shadow-2xl"
          >
            <Image
              src="/Single-window.jpg"
              alt="Industries"
              fill
              quality={90}
              className="object-cover hover:scale-105 transition duration-700"
            />
          </motion.div>
        </div>
      </div>


      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />


      <div className="bg-[#111827] py-28 relative overflow-hidden">

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-500/10 blur-[150px]" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-16">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
            }}
            className="mb-20 text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Industries We Serve
            </h2>

            <p className="mt-6 text-white max-w-2xl mx-auto text-lg leading-8">
              Designed with industry-specific workflows, operational demands,
              and structural precision.
            </p>
          </motion.div>


          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            {industries.map((item, i) => (
              <motion.div
                key={i}
                variants={cardVariants}
                whileHover={{
                  y: -10,
                }}
                className="group relative h-[480px] rounded-[32px] overflow-hidden border border-white/10 bg-[#0B1120] shadow-[0_20px_80px_rgba(0,0,0,0.4)]"
              >
                <div className="absolute inset-0 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    quality={85}
                    className="
                      object-cover
                      scale-100
                      group-hover:scale-110
                      brightness-90
                      group-hover:brightness-50
                      transition-all
                      duration-700
                      will-change-transform
                      transform-gpu
                    "
                  />
                </div>


                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <h3 className="text-3xl font-bold text-white mb-5">
                    {item.title}
                  </h3>

                  <div
                    className="
                      opacity-0
                      translate-y-10
                      max-h-0
                      overflow-hidden
                      group-hover:opacity-100
                      group-hover:translate-y-0
                      group-hover:max-h-[300px]
                      transition-all
                      duration-500
                    "
                  >
                    <p className="text-gray-300 leading-7 mb-6">
                      {item.desc}
                    </p>

                    <ul className="space-y-3">
                      {item.points.map((p, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-gray-300"
                        >
                          <span className="w-2 h-2 mt-2 rounded-full bg-[#fd6402] shrink-0" />

                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="absolute inset-0 rounded-[32px] border border-blue-500/0 group-hover:border-blue-500/30 transition duration-500" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Page;