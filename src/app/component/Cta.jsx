"use client";

import React, {
  useEffect,
  useState,
  useRef,
} from "react";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

import { items } from "../data/data";

const Cta = () => {
  const [activeIndex, setActiveIndex] =
    useState(0);

  const sectionRef = useRef(null);

  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) =>
        prev === items.length - 1
          ? 0
          : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const activeItem =
    items?.[activeIndex] || items[0];

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#020617] py-10 px-6 text-white"
    >
     
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

       
        <div className="absolute top-[10%] left-[5%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[140px]" />

       
        <div className="absolute bottom-[10%] right-[5%] w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px]" />

        <div className="absolute top-[40%] left-[40%] w-[300px] h-[300px] bg-indigo-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">

        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="text-center mb-28"
        >
          <span className="text-cyan-400 uppercase tracking-[6px] text-sm font-semibold">
            Why Stonearc
          </span>

          <h2 className="mt-6 text-4xl md:text-4xl font-bold leading-tight">
            Why Clients Choose  &nbsp;
            Stonearc Engineers
          </h2>

          <p className="text-slate-300 mt-8 max-w-3xl mx-auto leading-9 text-lg md:text-xl">
            We don’t just build structures —
            we deliver trust, transparency,
            and engineered precision from
            concept to completion.
          </p>
        </motion.div>

       
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div className="space-y-6">

            {items.map((item, index) => (
              <motion.div
                key={index}
                onClick={() =>
                  setActiveIndex(index)
                }
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                }}
                whileHover={{
                  scale: 1.02,
                }}
                className={`group relative overflow-hidden cursor-pointer rounded-[28px] border backdrop-blur-xl transition-all duration-700 ${
                  activeIndex === index
                    ? "border-cyan-400/50 bg-white/10 shadow-[0_20px_80px_rgba(34,211,238,0.15)]"
                    : "border-white/10 bg-white/[0.03] hover:bg-white/[0.06]"
                }`}
              >
                
                {activeIndex === index && (
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 pointer-events-none" />
                )}

                <div className="relative z-10 p-3">                 
                  <p
                    className={`leading-8 text-lg transition-all duration-500 ${
                      activeIndex === index
                        ? "text-white"
                        : "text-slate-400"
                    }`}
                  >
                    {item.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          
          <div className="relative">

          
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-3xl opacity-40 rounded-[40px]" />

            <div className="sticky top-24">

              <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.03] backdrop-blur-xl shadow-[0_30px_120px_rgba(0,0,0,0.6)]">

                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeItem.image}
                    src={activeItem.image}
                    alt="Stonearc"
                    initial={{
                      opacity: 0,
                      scale: 1.1,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.96,
                    }}
                    transition={{
                      duration: 1.2,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="w-full h-[620px] object-cover"
                  />
                </AnimatePresence>

                
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

               
                <div className="absolute bottom-8 left-8 right-8">

                  <div className="rounded-2xl border border-white/10 bg-black/30 backdrop-blur-xl p-6">

                    <p className="text-sm uppercase tracking-[4px] text-cyan-400 mb-3">
                      Stonearc Engineers
                    </p>

                    <h4 className="text-xl font-semibold leading-snug">
                      Building premium engineering
                      solutions with precision &
                      modern execution.
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      
        <motion.div
          initial={{
            opacity: 0,
            y: 60,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1.2,
          }}
          className="relative mt-40 overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.04] backdrop-blur-2xl p-12 md:p-20 text-center shadow-[0_20px_100px_rgba(0,0,0,0.5)]"
        >
         
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-cyan-500/10 blur-[120px]" />

          <div className="relative z-10">

            <span className="text-cyan-400 uppercase tracking-[5px] text-sm font-semibold">
              Start Your Project
            </span>

            <h3 className="mt-6 text-4xl md:text-4xl font-bold leading-tight">
              Ready to Build
              <br />
              Something Exceptional?
            </h3>

            <p className="text-slate-300 mt-8 max-w-3xl mx-auto text-md md:text-xl leading-9">
              Whether you have a detailed
              project brief or just an initial
              vision — our team is ready to
              engineer the right path forward.
            </p>

            <div className="mt-12 flex flex-col sm:flex-row gap-5 justify-center">

              <motion.button
                whileHover={{
                  scale: 1.04,
                  y: -2,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="group relative overflow-hidden rounded-full bg-gradient-to-r from-blue-400 to-blue-500 px-10 py-4 font-semibold text-black transition-all duration-500"
              >
                <span className="relative z-10">
                  Request Consultation
                </span>

                <div className="absolute inset-0 bg-white opacity-0 transition-opacity duration-500 group-hover:opacity-20" />
              </motion.button>

              <motion.button
                whileHover={{
                  scale: 1.04,
                  y: -2,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-xl px-10 py-4 font-semibold hover:border-cyan-400/50 transition-all duration-500"
              >
                Download Brochure
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Cta;