"use client"
import React from "react";
import { FaFacebookF , FaInstagram , FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
     <footer className="relative overflow-hidden bg-[#050816] text-white">

      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-purple-900/20 pointer-events-none" />

      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-10 lg:py-24">

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">

          <div>

            <h2 className="text-3xl font-bold tracking-wide text-white">
              StoneArc
            </h2>

            <p className="mt-5 max-w-sm text-sm leading-relaxed text-gray-400">
              We design and build premium modern structures with
              innovation, precision, sustainability, and architectural
              excellence across industries.
            </p>

          </div>
          <div>
            <h3 className="mb-6 text-lg font-semibold text-white">
              Quick Links
            </h3>

            <ul className="space-y-4 text-sm text-gray-400">

              {[
                "Home",
                "About Us",
                "Projects",
                "Services",
                "Process",
                "Contact",
              ].map((item, index) => (
                <li key={index}>

                  <a
                    href="/"
                    className="group inline-flex items-center transition hover:text-white"
                  >
                    <span className="mr-2 h-[2px] w-0 bg-blue-500 transition-all duration-300 group-hover:w-4" />

                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>

            <h3 className="mb-6 text-lg font-semibold text-white">
              Our Services
            </h3>

            <ul className="space-y-4 text-sm text-gray-400">

              {[
                "Architecture",
                "PEB Structures",
                "Industrial Design",
                "Construction",
                "Consulting",
                "Interior Design",
              ].map((item, index) => (
                <li key={index}>

                  <a
                    href="/"
                    className="group inline-flex items-center transition hover:text-white"
                  >
                    <span className="mr-2 h-[2px] w-0 bg-blue-500 transition-all duration-300 group-hover:w-4" />

                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>

            <h3 className="mb-6 text-lg font-semibold text-white">
              Contact Us
            </h3>

            <div className="space-y-5 text-sm text-gray-400">

              <div>
                <p className="font-medium text-white">
                  Office Location
                </p>

                <p className="mt-1 leading-relaxed">
                  Mumbai, Maharashtra, India
                </p>
              </div>

              <div>
                <p className="font-medium text-white">
                  Phone
                </p>

                <p className="mt-1">
                  +91 98765 43210
                </p>
              </div>

              <div>
                <p className="font-medium text-white">
                  Email
                </p>

                <p className="mt-1">
                  info@stonearc.com
                </p>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-4">

              <a
                href="/"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-300 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-blue-600 hover:text-white"
              >
                <FaFacebookF />
              </a>

              <a
                href="/"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-300 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-pink-500 hover:bg-pink-600 hover:text-white"
              >
                <FaInstagram />
              </a>

              <a
                href="/"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-300 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-blue-400 hover:bg-blue-500 hover:text-white"
              >
                <FaLinkedinIn />
              </a>

            </div>
          </div>
        </div>

      
        <div className="mt-16 border-t border-white/10 pt-7">

          <div className="flex flex-col items-center justify-between gap-5 text-center md:flex-row md:text-left">

            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} StoneArc. All rights reserved.
            </p>

           
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">

              <a
                href="/"
                className="transition hover:text-white"
              >
                Privacy Policy
              </a>

              <a
                href="/"
                className="transition hover:text-white"
              >
                Terms & Conditions
              </a>

              <a
                href="/"
                className="transition hover:text-white"
              >
                Support
              </a>

            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;