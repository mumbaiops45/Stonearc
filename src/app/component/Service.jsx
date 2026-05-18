"use client";

import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";

import { services } from "../data/data";

const ServiceCard = ({ service, index }) => {
  const ref = useRef(null);

  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "end 0.1"],
  });
 
  const imageYRaw = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [60, 0, -60]
  );

  const textYRaw = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [30, 0, -30]
  );


  const scaleRaw = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.95, 1, 0.95]
  );

  const opacityRaw = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.6, 1, 0.6]
  );

  const imageY = useSpring(imageYRaw, {
    stiffness: 120,
    damping: 20,
    mass: 0.8,
  });

  const textY = useSpring(textYRaw, {
    stiffness: 120,
    damping: 20,
    mass: 0.8,
  });

  const scale = useSpring(scaleRaw, {
    stiffness: 100,
    damping: 20,
  });

  const opacity = useSpring(opacityRaw, {
    stiffness: 100,
    damping: 20,
  });


  return (
    <motion.div
      ref={ref}
      style={{ scale, opacity }}
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{
        duration: 0.6,
        delay: index * 0.05,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`relative flex flex-col md:flex-row items-center justify-between gap-16 md:gap-24 ${
        index % 2 !== 0 ? "md:flex-row-reverse" : ""
      }`}
    >
      
      {/* <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[320px] h-[320px] bg-blue-500/10 blur-[120px] rounded-full" />
      </div> */}

     
      <motion.div
          style={{ y: imageY }}
        whileHover={{
          scale: 1.04,
        }}
        transition={{
          duration: 0.8,
          ease: [0.25, 1, 0.3, 1],
        }}
        className="relative w-full md:w-1/2 will-change-transform"
      >
        
        <div className="absolute -inset-[1px] rounded-[32px] bg-gradient-to-r from-blue-500/30 via-cyan-400/10 to-blue-500/30 blur-sm opacity-60" />

       
        <div className="relative overflow-hidden rounded-[32px] border border-white/[0.06] bg-white/[0.03] backdrop-blur-2xl shadow-[0_20px_80px_rgba(0,0,0,0.5)]">
          
        
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent z-10" />

          <motion.img
            src={service.image}
            alt={service.title}
            className="w-full h-[450px] object-cover"
            whileHover={{ scale: 1.06 }}
            transition={{ duration: 1.2 }}
          />
        </div>
      </motion.div>

     
      <motion.div
        style={{ y: textY }}
        className="relative z-10 w-full md:w-1/2 will-change-transform"
      >
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="inline-block text-cyan-400 uppercase tracking-[5px] text-xs font-semibold mb-5"
        >
          Our Expertise
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-4xl md:text-4xl font-bold leading-[1.05] tracking-tight mb-8"
        >
          {service.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white text-md leading-8 max-w-xl"
        >
          {service.description}
        </motion.p>

        <motion.button
          whileHover={{
            scale: 1.04,
            y: -2,
          }}
          whileTap={{ scale: 0.97 }}
          className="group relative mt-10 overflow-hidden rounded-full border border-white/[0.08] bg-white/[0.03] px-8 py-4 backdrop-blur-2xl transition-all duration-500"
        >
          <span className="relative z-10 font-medium tracking-wide">
            Learn More
          </span>

          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

const Service = () => {
  return (
    <section className="relative overflow-hidden bg-[#020617] py-16 px-6 text-white">
      
    
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[5%] left-[5%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-[5%] right-[5%] w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">

        
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 uppercase tracking-[6px] text-sm font-semibold">
            Premium Engineering
          </span>

          <h1 className="mt-6 text-4xl md:text-4xl font-bold leading-tight">
            What We Build
          </h1>

          <p className="max-w-3xl mx-auto mt-8 text-slate-300 text-xl leading-9">
            Stonearc Engineers operates across three specialized verticals —
            combining innovation, precision engineering, and uncompromising execution standards.
          </p>
        </motion.div>

        <div className="space-y-20 md:space-y-10">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;


