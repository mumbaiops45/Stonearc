"use client";

import React, { useEffect, useState, useRef } from "react";
import { items } from "../data/data";

const Cta = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);
  const intervalRef = useRef(null);


  useEffect(() => {
    let ticking = false;

    const updateIndex = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const totalScroll = rect.height - windowHeight;
      const scrolled = Math.min(Math.max(-rect.top, 0), totalScroll);

      const progress = totalScroll > 0 ? scrolled / totalScroll : 0;

      const index = Math.min(
        items.length - 1,
        Math.floor(progress * items.length)
      );

      setActiveIndex(index);
    };

    const onScroll = () => {
    
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }

      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateIndex();
          ticking = false;
        });
        ticking = true;
      }

      intervalRef.current = setInterval(() => {
        setActiveIndex((prev) => {
          const next = prev + 1;
          return next >= items.length ? 0 : next;
        });
      }, 3500);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => {
        const next = prev + 1;
        return next >= items.length ? 0 : next;
      });
    }, 3500);

    return () => clearInterval(intervalRef.current);
  }, []);

  const activeItem = items?.[activeIndex] || items[0];

  return (
    <section
      ref={sectionRef}
      className="bg-slate-950 text-white py-28 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-20">
          <h5 className="text-blue-500 tracking-[4px] font-semibold text-sm uppercase">
            Why Stonearc
          </h5>

          <h3 className="text-4xl md:text-5xl font-bold mt-4">
            Why Clients Choose Stonearc Engineers
          </h3>

          <p className="text-slate-300 mt-6 max-w-3xl mx-auto leading-7 text-lg">
            We don’t just build structures — we deliver trust, transparency, and engineered precision from concept to completion.
          </p>
        </div>

      
        <div className="flex flex-col lg:flex-row gap-14">

          <div className="w-full lg:w-1/2 space-y-6">

            {items.map((item, index) => (
              <div
                key={index}
                className={`p-6 rounded-2xl border transition-all duration-500 cursor-pointer ${
                  activeIndex === index
                    ? "bg-blue-600/10 border-blue-500 scale-[1.02] shadow-lg shadow-blue-500/10"
                    : "bg-slate-900/40 border-slate-800 opacity-60 hover:opacity-100"
                }`}
              >
                <p className="text-slate-200 leading-7">
                  {item.text}
                </p>
              </div>
            ))}

          </div>

          <div className="w-full lg:w-1/2">
            <div className="sticky top-24">

              <div className="relative rounded-3xl overflow-hidden border border-slate-800 shadow-2xl group">

                <img
                  src={activeItem?.image}
                  alt="Stonearc"
                  className="w-full h-[520px] object-cover transition-all duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />

              </div>

            </div>
          </div>

        </div>


        <div className="mt-28 bg-gradient-to-r from-slate-900/80 to-slate-800/80 backdrop-blur-xl border border-slate-700 rounded-3xl p-10 md:p-14 text-center shadow-2xl">

          <h3 className="text-3xl md:text-4xl font-bold">
            Ready to Build?
          </h3>

          <p className="text-slate-300 mt-6 max-w-2xl mx-auto text-lg leading-8">
            Whether you have a detailed brief or just an idea on paper — our team is ready to listen, evaluate, and engineer the right path forward.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">

            <button className="px-8 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold transition hover:scale-105">
              Request a Consultation
            </button>

            <button className="px-8 py-3 border border-slate-500 hover:border-blue-500 rounded-lg font-semibold transition hover:scale-105">
              Download Our Brochure
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Cta;