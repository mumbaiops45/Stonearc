
"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const sections = [
  {
    id: "info-collect",
    num: "01",
    title: "Information We Collect",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-6 h-6">
        <path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        <path d="M12 8h.01M11 12h1v4h1" />
      </svg>
    ),
    intro: "We collect the following information when you interact with our services:",
    bullets: [
      ["Personal info", "Name, email, phone, and contact details."],
      ["Technical info", "IP address, browser type, operating system, and device info."],
      ["Usage data", "Pages visited, time spent, and interaction history."],
    ],
  },
  {
    id: "info-use",
    num: "02",
    title: "How We Use Your Information",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-6 h-6">
        <path d="M4 20v-6M4 10V4M12 20v-9M12 7V4M20 20v-4M20 12V4" />
        <circle cx="4" cy="12" r="2" />
        <circle cx="12" cy="9" r="2" />
        <circle cx="20" cy="14" r="2" />
      </svg>
    ),
    bullets: [
      "Provide and enhance our services.",
      "Respond to inquiries and provide support.",
      "Send updates or promotional materials with consent.",
      "Analyze usage to improve website experience.",
    ],
  },
  {
    id: "info-share",
    num: "03",
    title: "Information Sharing",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-6 h-6">
        <circle cx="18" cy="5" r="3" />
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="19" r="3" />
        <path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4" />
      </svg>
    ),
    bullets: [
      "With trusted service providers.",
      "When required by law.",
      "With business partners for projects (with consent).",
    ],
  },
  {
    id: "cookies",
    num: "04",
    title: "Cookies & Tracking",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-6 h-6">
        <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5Z" />
        <path d="M8.5 8.5h.01M16 15.5h.01M10 14h.01" />
      </svg>
    ),
    paras: [
      "We use cookies to enhance your browsing experience, analyze traffic, and deliver personalized content. You can manage cookies via your browser settings.",
    ],
  },
  {
    id: "security",
    num: "05",
    title: "Data Security",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-6 h-6">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
    paras: [
      "We implement advanced security measures to protect your data from unauthorized access, alteration, or destruction.",
    ],
  },
  {
    id: "rights",
    num: "06",
    title: "Your Rights",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-6 h-6">
        <path d="M12 3 4 7v5c0 5 3.5 7.5 8 9 4.5-1.5 8-4 8-9V7l-8-4Z" />
        <path d="M12 8v4M12 16h.01" />
      </svg>
    ),
    paras: [
      "You have the right to access, correct, or delete your personal data. Contact us to exercise these rights.",
    ],
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Page() {
  const [active, setActive] = useState("info-collect");

  useEffect(() => {
    const ids = [...sections.map((s) => s.id), "contact"];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const tocItems = [...sections, { id: "contact", num: "07", title: "Contact Us" }];

  return (
    <div className="min-h-screen bg-gray-100 text-black">
      <div className="max-w-6xl mx-auto px-6">
        <motion.header
          className="text-center py-20"
          initial="hidden"
          animate="visible"
          variants={container}
        >
        
          <motion.h1 className="text-4xl md:text-6xl font-semibold mb-4" variants={item}>
            Privacy <span className="italic text-gray-700">Policy</span>
          </motion.h1>

          <motion.p className="max-w-2xl mx-auto text-gray-600" variants={item}>
            Your privacy is foundational to how we build. We safeguard your data with care and precision.
          </motion.p>

          
        </motion.header>

        <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-10 pb-20">
          <nav className="hidden md:block sticky top-10 h-fit">
            <p className="text-xs uppercase tracking-widest text-gray-500 mb-4">
              Contents
            </p>

            <div className="space-y-2">
              {tocItems.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className={`flex gap-3 px-3 py-2 rounded-md text-sm border-l-2 transition
                    ${active === s.id
                      ? "bg-gray-200 border-black text-black"
                      : "text-gray-600 border-transparent hover:bg-gray-200"
                    }`}
                >
                  <span className="font-semibold">{s.num}</span>
                  {s.title}
                </a>
              ))}
            </div>
          </nav>

          <motion.main initial="hidden" whileInView="visible" viewport={{ once: true }} variants={container}>

            {sections.map((s) => (
              <motion.section
                key={s.id}
                id={s.id}
                className="py-10 border-t border-gray-300 first:border-none"
                variants={item}
              >
                <div className="flex items-start gap-4 mb-4">

                  <div className="relative w-12 h-12 flex items-center justify-center rounded-xl bg-gray-200 border border-gray-300">
                    {s.icon}
                    <span className="absolute -top-2 -right-2 text-xs bg-black text-white w-5 h-5 flex items-center justify-center rounded-full">
                      {s.num}
                    </span>
                  </div>

                  <h2 className="text-2xl md:text-3xl font-semibold">
                    {s.title}
                  </h2>
                </div>

                <div className="pl-16 text-gray-700 space-y-3">
                  {s.intro && <p>{s.intro}</p>}

                  {s.paras &&
                    s.paras.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}

                  {s.bullets && (
                    <ul className="space-y-3">
                      {s.bullets.map((b, i) => (
                        <li key={i} className="flex gap-3">
                          <span className="w-2 h-2 mt-2 rotate-45 bg-black" />
                          {Array.isArray(b) ? (
                            <span>
                              <b>{b[0]}:</b> {b[1]}
                            </span>
                          ) : (
                            <span>{b}</span>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.section>
            ))}

            <section id="contact" className="mt-12 border border-gray-300 rounded-2xl bg-white p-8">

              <p className="text-xs uppercase tracking-widest text-gray-500">
                07 — Get in touch
              </p>

              <h3 className="text-2xl font-semibold mt-2 mb-6">
                Contact Us
              </h3>

              <div className="space-y-5 text-gray-700">

                <div>
                  <p className="text-xs text-gray-500 uppercase">Company</p>
                  <p>StoneArc Engineers</p>
                </div>

                <div>
                  <p className="text-xs text-gray-500 uppercase">Address</p>
                  <p>
                    340 Ground Floor, 4th T Block, BSK 6th Stage,<br />
                    Thalagattapura, Karnataka 560109
                  </p>
                </div>

                <div>
                  <p className="text-xs text-gray-500 uppercase">Phone</p>
                  <p>
                    {/* <a className="text-black font-medium" href="tel:+918197361002">+91 81973 61002</a> ·{" "} */}
                    <a className="text-black font-medium" href="tel:+917760587776">+91 77605 87776</a>
                  </p>
                </div>

                <div>
                  <p className="text-xs text-gray-500 uppercase">Email</p>
                  <a className="text-black font-medium" href="mailto:info@stonearcengineers.com">
                    info@stonearcengineers.com
                  </a>
                </div>

              </div>
            </section>

          </motion.main>
        </div>

        
      </div>
    </div>
  );
}