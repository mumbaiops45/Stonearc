"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { items } from "../data/data";


const fallbackItems = [
  {
    text: "We deliver complete engineering solutions — architecture, structural design, and PEB under one roof.",
    image: "/project1.jpg",
  },
  {
    text: "Every project follows a structured delivery process with zero guesswork and full transparency.",
    image: "/project2.jpg",
  },
  {
    text: "Our clients receive direct access to engineers — no intermediaries, no miscommunication.",
    image: "/project3.jpg",
  },
  {
    text: "We manage every approval, permission, and statutory requirement so you don't have to.",
    image: "/project4.jpg",
  },
  {
    text: "Honest cost estimation from day one — no padding, no hidden charges, no surprises at handover.",
    image: "/project5.jpg",
  },
];


function usePreloadImages(imageList) {
  useEffect(() => {
    imageList.forEach((src) => {
      const img = new window.Image();
      img.src = src;
    });
  }, []);
}


const ProgressBar = ({ duration, active }) => (
  <div className="h-[2px] rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.08)" }}>
    <motion.div
      className="h-full rounded-full"
      style={{ background: "linear-gradient(90deg,#38bdf8,#3b82f6)" }}
      initial={{ width: "0%" }}
      animate={active ? { width: "100%" } : { width: "0%" }}
      transition={active ? { duration: duration / 1000, ease: "linear" } : { duration: 0 }}
    />
  </div>
);


const Cta = () => {
  const data = (typeof items !== "undefined" && Array.isArray(items) && items.length > 0)
    ? items
    : fallbackItems;

  const INTERVAL = 4000;
  const [activeIndex, setActiveIndex] = useState(0);
  const [loaded, setLoaded] = useState({});
  const intervalRef = useRef(null);


  usePreloadImages(data.map((d) => d.image));

 
  const handleLoad = (src) => setLoaded((prev) => ({ ...prev, [src]: true }));

 
  useEffect(() => {
    data.forEach((item) => {
      const img = new window.Image();
      img.src = item.image;
      img.onload = () => handleLoad(item.image);
    });
  }, []);


  const startInterval = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev === data.length - 1 ? 0 : prev + 1));
    }, INTERVAL);
  };

  useEffect(() => {
    startInterval();
    return () => clearInterval(intervalRef.current);
  }, []);

  const handleSelect = (i) => {
    setActiveIndex(i);
    startInterval();
  };

  const activeItem = data[activeIndex];

  return (
    <section
      className="relative overflow-hidden text-white"
      style={{ background: "#06090f" }}
    >
      
      <style>{`
        
        ::selection { background: rgba(59,130,246,0.22); color:#fff; }
        .sa-grid-cta {
          background-image:
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
          background-size: 68px 68px;
        }
      `}</style>

      
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[8%] left-[4%] w-[600px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(37,99,235,0.1) 0%, transparent 68%)" }} />
        <div className="absolute bottom-[8%] right-[4%] w-[550px] h-[550px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 68%)" }} />
        <div className="absolute top-[42%] left-[42%] w-[360px] h-[360px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(99,102,241,0.07) 0%, transparent 70%)" }} />
        <div className="absolute inset-0 sa-grid-cta opacity-100" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 py-8 md:py-6">

       
        <motion.div
          initial={{ opacity: 0, y: 44 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className=" mb-10 md:mb-8"
        >
          <div className="inline-flex items-center gap-3 px-4 py-[7px] rounded-full border border-cyan-500/22 bg-cyan-500/[0.07] mb-7"
            style={{ borderColor: "rgba(6,182,212,0.22)" }}>
            <span className="w-[5px] h-[5px] rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-[10px] font-semibold tracking-[0.38em] uppercase text-cyan-300">
              Why Stonearc
            </span>
          </div>

          <h2
            className="font-bold leading-[1.08]  text-5xl tracking-[-0.032em]"
          
          >
            Why Clients Choose &nbsp;
            <span className="inline-block text-transparent bg-clip-text mt-2"
              style={{ backgroundImage: "linear-gradient(130deg,#38bdf8 0%,#60a5fa 55%,#a5b4fc 100%)" }}>
              Stonearc Engineers
            </span>
          </h2>

          <p
            className="mt-7 max-w-2xl  text-white text-[17px] leading-[1.88]"
          >
            We don't just build structures — we deliver trust, transparency, and
            engineered precision from concept to completion.
          </p>
        </motion.div>

       
        <div className="grid lg:grid-cols-2 gap-10 xl:gap-16 items-start">

        
          <div className="space-y-3">
            {data.map((item, index) => {
              const isActive = activeIndex === index;
              return (
                <motion.div
                  key={index}
                  onClick={() => handleSelect(index)}
                  initial={{ opacity: 0, x: -32 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.75, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative cursor-pointer rounded-2xl border overflow-hidden transition-all duration-400"
                  style={{
                    borderColor: isActive ? "rgba(6,182,212,0.38)" : "rgba(255,255,255,0.07)",
                    background: isActive
                      ? "linear-gradient(135deg,rgba(6,182,212,0.09),rgba(59,130,246,0.07))"
                      : "rgba(255,255,255,0.022)",
                    backdropFilter: "blur(16px)",
                    boxShadow: isActive ? "0 12px 48px rgba(6,182,212,0.1)" : "none",
                    transform: isActive ? "translateX(4px)" : "translateX(0)",
                  }}
                >
                
                  {isActive && (
                    <div className="absolute top-0 inset-x-0 h-px"
                      style={{ background: "linear-gradient(90deg,transparent,rgba(6,182,212,0.55),transparent)" }} />
                  )}

                  <div className="flex gap-5 items-start p-6">
                  
                    <div
                      className="flex-shrink-0 mt-1 w-8 h-8 rounded-lg flex items-center justify-center text-[11px] font-mono tracking-wide transition-all duration-300"
                      style={{
                        background: isActive ? "rgba(6,182,212,0.18)" : "rgba(255,255,255,0.05)",
                        border: isActive ? "1px solid rgba(6,182,212,0.35)" : "1px solid rgba(255,255,255,0.08)",
                        color: isActive ? "rgba(103,232,249,0.9)" : "rgba(255,255,255,0.3)",
                      }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <div className="flex-1 min-w-0">
                      <p
                        className="text-[15px] leading-[1.8] transition-colors duration-300"
                        style={{
                          color: isActive ? "rgba(255,255,255,0.88)" : "rgba(255,255,255,0.45)",
                        }}
                      >
                        {item.text}
                      </p>

                    
                      {isActive && (
                        <div className="mt-4">
                          <ProgressBar duration={INTERVAL} active={isActive} />
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}

           
            <div className="flex items-center gap-2 pt-3 pl-1">
              {data.map((_, i) => (
                <button
                  key={i}
                  onClick={() => handleSelect(i)}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: i === activeIndex ? "24px" : "8px",
                    height: "8px",
                    background: i === activeIndex
                      ? "linear-gradient(90deg,#38bdf8,#3b82f6)"
                      : "rgba(255,255,255,0.18)",
                  }}
                />
              ))}
            </div>
          </div>

        
          <div className="relative lg:sticky lg:top-24">

           
            <div
              className="absolute -inset-3 rounded-[44px] opacity-35 pointer-events-none"
              style={{ background: "radial-gradient(ellipse,rgba(6,182,212,0.2) 0%,rgba(59,130,246,0.12) 50%,transparent 80%)", filter: "blur(32px)" }}
            />

            <div
              className="relative overflow-hidden rounded-[36px] border"
              style={{ borderColor: "rgba(255,255,255,0.08)", boxShadow: "0 32px 100px rgba(0,0,0,0.6)" }}
            >
              
              <div className="relative w-full" style={{ height: "580px" }}>
                {data.map((item, i) => (
                  <div
                    key={item.image}
                    className="absolute inset-0"
                    style={{
                      opacity: i === activeIndex ? 1 : 0,
                      transition: "opacity 0.55s ease",
                      zIndex: i === activeIndex ? 2 : 1,
                    }}
                  >
                    <img
                      src={item.image}
                      alt={`Stonearc project ${i + 1}`}
                      className="w-full h-full object-cover"
                      loading="eager"
                      decoding="async"
                      onLoad={() => handleLoad(item.image)}
                      style={{ display: "block" }}
                    />
                  </div>
                ))}

             
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ background: "linear-gradient(180deg,transparent 45%,rgba(6,9,15,0.88) 100%)", zIndex: 3 }}
                />

               
                <div className="absolute bottom-6 left-6 right-6" style={{ zIndex: 4 }}>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeIndex}
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="rounded-2xl border px-6 py-5"
                      style={{
                        background: "rgba(6,9,15,0.75)",
                        borderColor: "rgba(255,255,255,0.1)",
                        backdropFilter: "blur(24px)",
                      }}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <span className="w-[5px] h-[5px] rounded-full bg-cyan-400 animate-pulse" />
                        <span className="text-[10px] tracking-[0.38em] uppercase font-semibold text-cyan-400/80">
                          Stonearc Engineers
                        </span>
                      </div>
                      <p
                        className="text-[15px] leading-[1.7] font-medium text-white/80"
                      >
                        {activeItem.text.length > 90
                          ? activeItem.text.slice(0, 88) + "…"
                          : activeItem.text}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>

           
                <div
                  className="absolute top-5 right-5 rounded-xl px-4 py-2 text-[12px] font-mono"
                  style={{
                    background: "rgba(6,9,15,0.7)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    backdropFilter: "blur(16px)",
                    color: "rgba(255,255,255,0.5)",
                    zIndex: 4,
                  }}
                >
                  <span className="text-cyan-400 font-semibold">{String(activeIndex + 1).padStart(2, "0")}</span>
                  <span> / {String(data.length).padStart(2, "0")}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

       
        <motion.div
          initial={{ opacity: 0, y: 56 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-28 md:mt-36 overflow-hidden rounded-[36px] border text-center"
          style={{
            borderColor: "rgba(255,255,255,0.08)",
            background: "linear-gradient(135deg,rgba(6,182,212,0.07) 0%,rgba(37,99,235,0.08) 50%,rgba(79,70,229,0.06) 100%)",
            backdropFilter: "blur(24px)",
            boxShadow: "0 24px 100px rgba(0,0,0,0.5)",
          }}
        >
        
          <div className="absolute top-0 inset-x-0 h-px"
            style={{ background: "linear-gradient(90deg,transparent,rgba(6,182,212,0.45) 40%,rgba(59,130,246,0.45) 60%,transparent)" }} />
        
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] pointer-events-none"
            style={{ background: "radial-gradient(ellipse,rgba(6,182,212,0.1) 0%,transparent 70%)" }} />
         
          <div className="absolute inset-0 sa-grid-cta pointer-events-none" />

          <div className="relative z-10 px-10 py-16 md:px-20 md:py-20">
            <div className="inline-flex items-center gap-3 px-4 py-[7px] rounded-full border mb-8"
              style={{ borderColor: "rgba(6,182,212,0.22)", background: "rgba(6,182,212,0.07)" }}>
              <span className="w-[5px] h-[5px] rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-[10px] font-semibold tracking-[0.38em] uppercase text-cyan-300">
                Start Your Project
              </span>
            </div>

            <h3
              className="font-bold leading-[1.1] tracking-[-0.032em]"
              style={{ fontSize: "clamp(2rem, 5vw, 3.6rem)" }}
            >
              Ready to Build
              <span className="block text-transparent bg-clip-text mt-2"
                style={{ backgroundImage: "linear-gradient(130deg,#38bdf8,#60a5fa 55%,#a5b4fc)" }}>
                Something Exceptional?
              </span>
            </h3>

            <p
              className="mt-7 max-w-xl mx-auto text-[17px] leading-[1.88]"
              style={{  color: "rgba(255,255,255,0.46)" }}
            >
              Whether you have a detailed project brief or just an initial vision —
              our team is ready to engineer the right path forward.
            </p>

            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.03, boxShadow: "0 0 52px rgba(6,182,212,0.38)" }}
                whileTap={{ scale: 0.97 }}
                className="group relative overflow-hidden rounded-full px-10 py-4 font-semibold text-[15px] transition-shadow duration-300"
                style={{
                  background: "linear-gradient(135deg,#0ea5e9,#2563eb)",
                  boxShadow: "0 0 0 1px rgba(6,182,212,0.35), 0 8px 28px rgba(6,182,212,0.22)",
                  color: "#fff",
                }}
              >
                <span className="relative z-10">Request Consultation</span>
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03, borderColor: "rgba(6,182,212,0.45)" }}
                whileTap={{ scale: 0.97 }}
                className="rounded-full px-10 py-4 font-semibold text-[15px] transition-all duration-300"
                style={{
                  border: "1px solid rgba(255,255,255,0.12)",
                  background: "rgba(255,255,255,0.04)",
                  backdropFilter: "blur(16px)",
                  color: "rgba(255,255,255,0.82)",
               
                }}
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

