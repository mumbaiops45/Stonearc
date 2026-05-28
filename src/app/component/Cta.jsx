"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { items , fallbackItems } from "../data/data";



function usePreloadImages(imageList) {
  useEffect(() => {
    imageList.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [imageList]);
}

const ProgressBar = ({ duration, active }) => (
  <div className="h-[2px] rounded-full overflow-hidden bg-white/10">
    <motion.div
      className="h-full bg-orange-500"
      initial={{ width: "0%" }}
      animate={active ? { width: "100%" } : { width: "0%" }}
      transition={
        active
          ? { duration: duration / 1000, ease: "linear" }
          : { duration: 0 }
      }
    />
  </div>
);

const Cta = () => {
  const data =
    typeof items !== "undefined" && Array.isArray(items) && items.length > 0
      ? items
      : fallbackItems;

  const INTERVAL = 4000;
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef(null);

  usePreloadImages(data.map((d) => d.image));

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev === data.length - 1 ? 0 : prev + 1));
    }, INTERVAL);

    intervalRef.current = timer;

    return () => clearInterval(timer);
  }, [data.length]);

  const handleSelect = (i) => {
    setActiveIndex(i);
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev === data.length - 1 ? 0 : prev + 1));
    }, INTERVAL);
  };

  const activeItem = data[activeIndex];

  return (
    <div className="bg-gray-100 py-16 px-6 md:px-16 space-y-16">

     
      <section className="max-w-7xl mx-auto">

        <div className="mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-black">
            Why Clients Choose{" "}
            <span className="text-orange-500">Stonearc Engineers</span>
          </h2>
          <p className="mt-4 text-gray-700 max-w-2xl">
            We deliver trust, transparency, and engineered precision from concept to completion.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          <div className="space-y-4">
            {data.map((item, index) => {
              const isActive = activeIndex === index;

              return (
                <motion.div
                  key={index}
                  onClick={() => handleSelect(index)}
                  className="cursor-pointer rounded-2xl p-6 border transition-all duration-300 bg-gray-200 "
                  style={{
                    borderColor: isActive
                      ? "#f97316"
                      : "rgba(255,255,255,0.08)",
                  }}
                >
                  <div className="flex gap-4">
                    <div
                      className="w-8 h-8 flex items-center justify-center rounded-md text-xs font-bold"
                      style={{
                        background: isActive ? "#f97316" : "#111",
                        color: "white",
                      }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <div className="flex-1">
                      <p className="text-sm text-black">{item.text}</p>

                      {isActive && (
                        <div className="mt-3">
                          <ProgressBar duration={INTERVAL} active />
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        
          <div className="relative">
            <div className="rounded-3xl overflow-hidden border border-black shadow-xl bg-black">
              <div className="relative h-[450px]">
                {data.map((item, i) => (
                  <img
                    key={item.image}
                    src={item.image}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
                    style={{
                      opacity: i === activeIndex ? 1 : 0,
                    }}
                  />
                ))}
              </div>

              <div className="p-4 bg-black text-white">
                <p className="text-sm text-white/70">
                  {activeItem.text}
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

     
      <section className="max-w-5xl mx-auto">
        <div className="bg-black text-white rounded-3xl p-10 md:p-16 text-center">

          <h3 className="text-3xl md:text-4xl font-bold">
            Ready to Build
            <span className="block text-orange-500 mt-2">
              Something Exceptional?
            </span>
          </h3>

          <p className="mt-6 text-white/70 max-w-xl mx-auto">
            Whether you have a detailed project brief or just a vision — we help you build it right.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-orange-500 hover:bg-orange-600 transition px-8 py-3 rounded-full font-semibold">
              Request Consultation
            </button>

            <button className="border border-white/20 px-8 py-3 rounded-full hover:border-orange-500 transition">
              Download Brochure
            </button>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Cta;