"use client";

import React from "react";
import { motion } from "framer-motion";
import { services } from "../data/data";

const Service = () => {
  return (
    <section className="bg-slate-950 py-24 px-6 text-white">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-20">
          <h3 className="text-4xl md:text-5xl font-bold mb-6">
            What We Build
          </h3>

          <p className="max-w-3xl mx-auto text-slate-300 text-lg leading-8">
            Stonearc Engineers operates across three core verticals — each backed
            by a dedicated team, proven processes, and an uncompromising approach
            to quality.
          </p>
        </div>

        <div className="space-y-32 md:space-y-40">

          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: index % 2 === 0 ? 100 : -100,
                scale: 0.95,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{
                duration: 0.9,
                ease: "easeOut",
              }}
              className={`flex flex-col md:flex-row items-center justify-between gap-16 md:gap-20 ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >

              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4 }}
                className="w-full md:w-1/2 overflow-hidden rounded-3xl shadow-2xl"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-[420px] object-cover rounded-3xl"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 60 : -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.8 }}
                className="w-full md:w-1/2"
              >
                <span className="text-blue-500 uppercase tracking-[3px] text-sm font-semibold">
                  Our Expertise
                </span>

                <h4 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
                  {service.title}
                </h4>

                <p className="text-slate-300 leading-8 text-base md:text-lg max-w-xl">
                  {service.description}
                </p>

                <button className="mt-8 px-7 py-3 bg-blue-500 hover:bg-blue-600 hover:scale-105 text-white font-semibold rounded-lg transition duration-300">
                  Learn More
                </button>
              </motion.div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Service;