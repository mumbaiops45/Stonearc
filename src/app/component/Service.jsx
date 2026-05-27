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
      className={`relative flex flex-col md:flex-row bg-white  rounded-3xl items-center justify-between gap-16 md:gap-24 ${index % 2 !== 0 ? "md:flex-row-reverse" : ""
        }`}
      
    >


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


        <div className="relative overflow-hidden rounded-[32px]  border border-white/[0.06] bg-white/[0.03] backdrop-blur-2xl shadow-[0_20px_80px_rgba(0,0,0,0.5)]">



          <div className="absolute inset-0  bg-gradient-to-t from-black/40 via-black/10 to-transparent z-10" />

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
        className="relative z-10 px-16 w-full md:w-1/2 will-change-transform"
      >
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="inline-block text-amber-400 uppercase tracking-[5px] text-xs font-semibold mb-5"
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
          className="text-black text-md leading-8 max-w-xl"
        >
          {service.description}
        </motion.p>


        <motion.button
          whileHover={{
            scale: 1.04,
            y: -2,
          }}
          whileTap={{ scale: 0.97 }}
          className="group relative mt-10 overflow-hidden rounded-full border border-white/[0.08] px-8 py-4 backdrop-blur-2xl transition-all duration-500"
        >
          <span className="relative z-10 font-medium tracking-wide text-black">
            Learn More
          </span>

          <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-400 opacity-100 transition-opacity duration-500" />
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

const Service = () => {
  return (
    
    <section className="relative overflow-hidden bg-gray-50  py-16 px-6 text-black">


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
          <span className="text-amber-400 uppercase tracking-[6px] text-sm font-semibold">
            Premium Engineering
          </span>

          <h1 className="mt-6 text-4xl md:text-4xl font-bold leading-tight">
            What We Build
          </h1>

          <p className="max-w-3xl mx-auto mt-8 text-black text-xl leading-9">
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



// "use client";

// import React, { useRef } from "react";
// import {
//   motion,
//   useScroll,
//   useTransform,
//   useSpring,
// } from "framer-motion";

// import { services } from "../data/data";

// const ServiceCard = ({ service, index }) => {
//   const ref = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start 0.9", "end 0.2"],
//   });


//   const imageY = useSpring(
//     useTransform(scrollYProgress, [0, 1], [50, -50]),
//     {
//       stiffness: 120,
//       damping: 20,
//     }
//   );

//   const textY = useSpring(
//     useTransform(scrollYProgress, [0, 1], [30, -30]),
//     {
//       stiffness: 120,
//       damping: 20,
//     }
//   );

//   const scale = useSpring(
//     useTransform(scrollYProgress, [0, 0.5, 1], [0.96, 1, 0.96]),
//     {
//       stiffness: 100,
//       damping: 18,
//     }
//   );

//   const opacity = useSpring(
//     useTransform(scrollYProgress, [0, 0.3, 1], [0.5, 1, 0.5]),
//     {
//       stiffness: 100,
//       damping: 18,
//     }
//   );

//   return (
//     <motion.div
//       ref={ref}
//       style={{ scale, opacity }}
//       initial={{ opacity: 0, y: 80 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: false, amount: 0.2 }}
//       transition={{
//         duration: 0.8,
//         ease: [0.22, 1, 0.36, 1],
//       }}
//       className={`relative grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-center ${
//         index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
//       }`}
//     >
   
//       <motion.div
//         style={{ y: imageY }}
//         whileHover={{ y: -6 }}
//         transition={{ duration: 0.5 }}
//         className="relative"
//       >

//         <div className="absolute -inset-2 rounded-[36px] bg-gradient-to-r from-blue-500/20 via-cyan-400/10 to-amber-400/20 blur-2xl opacity-70" />


//         <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white shadow-[0_25px_80px_rgba(15,23,42,0.12)]">
//           <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/30 via-black/5 to-transparent" />
//           <motion.img
//             src={service.image}
//             alt={service.title}
//             whileHover={{ scale: 1.06 }}
//             transition={{ duration: 1 }}
//             className="h-[280px] sm:h-[380px] lg:h-[500px] w-full object-cover"
//           />

         
//           <div className="absolute top-5 left-5 z-20 rounded-full border border-white/20 bg-white/10 backdrop-blur-xl px-5 py-2 text-white text-sm font-medium tracking-wide">
//             Premium Service
//           </div>
//         </div>
//       </motion.div>

//       <motion.div
//         style={{ y: textY }}
//         className="relative z-10 flex flex-col justify-center"
//       >
     
//         <motion.span
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="inline-flex items-center gap-2 text-amber-500 uppercase tracking-[4px] text-xs font-semibold mb-5"
//         >
//           <span className="w-10 h-[2px] bg-amber-400 rounded-full"></span>
//           Our Expertise
//         </motion.span>

  
//         <motion.h2
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7, delay: 0.1 }}
//           className="text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight text-gray-900"
//         >
//           {service.title}
//         </motion.h2>

//         <motion.p
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7, delay: 0.15 }}
//           className="mt-7 text-gray-600 text-lg leading-9 max-w-2xl"
//         >
//           {service.description}
//         </motion.p>

//         <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
//           {[
//             "Premium Quality",
//             "Modern Engineering",
//             "Trusted Execution",
//             "Advanced Technology",
//           ].map((item, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: i * 0.08 }}
//               className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-white px-4 py-4 shadow-sm"
//             >
//               <div className="h-2.5 w-2.5 rounded-full bg-amber-400"></div>
//               <span className="text-sm font-medium text-gray-700">
//                 {item}
//               </span>
//             </motion.div>
//           ))}
//         </div>

//         <motion.button
//           whileHover={{
//             scale: 1.03,
//             y: -3,
//           }}
//           whileTap={{ scale: 0.97 }}
//           className="group relative mt-10 w-fit overflow-hidden rounded-full bg-gradient-to-r from-amber-400 to-amber-500 px-8 py-4 text-black font-semibold shadow-[0_15px_40px_rgba(251,191,36,0.35)] transition-all duration-500"
//         >
//           <span className="relative z-10 flex items-center gap-3">
//             Learn More
//             <svg
//               className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M5 12h14m-6-6l6 6-6 6"
//               />
//             </svg>
//           </span>

//           <div className="absolute inset-0 bg-white opacity-0 transition-opacity duration-500 group-hover:opacity-10"></div>
//         </motion.button>
//       </motion.div>
//     </motion.div>
//   );
// };

// const Service = () => {
//   return (
//     <section className="relative overflow-hidden bg-[#f8fafc] py-24 px-6 md:px-10">
//       <div className="absolute inset-0 pointer-events-none overflow-hidden">
//         <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-[140px]" />
//         <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-cyan-400/10 blur-[140px]" />
//         <div className="absolute top-[40%] left-[45%] w-[350px] h-[350px] rounded-full bg-amber-400/10 blur-[120px]" />
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 60 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{
//             duration: 1,
//             ease: [0.22, 1, 0.36, 1],
//           }}
//           className="text-center max-w-4xl mx-auto mb-24"
//         >
//           <span className="inline-block text-amber-500 uppercase tracking-[6px] text-sm font-semibold">
//             Premium Engineering
//           </span>

//           <h1 className="mt-6 text-5xl md:text-6xl font-bold leading-tight tracking-tight text-gray-900">
//             What We Build
//           </h1>

//           <p className="mt-8 text-lg md:text-xl leading-9 text-gray-600">
//             Stonearc Engineers operates across multiple specialized verticals —
//             combining innovation, precision engineering, and uncompromising
//             execution standards to deliver world-class solutions.
//           </p>
//         </motion.div>

//         <div className="space-y-28">
//           {services.map((service, index) => (
//             <ServiceCard
//               key={index}
//               service={service}
//               index={index}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Service;
