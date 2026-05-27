"use client";

import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Services", path: "/services" },
  { name: "Process", path: "/process" },
  { name: "Contact", path: "/contact" },
];

const services = [
  "Architecture",
  "PEB Structures",
  "Industrial Design",
  "Construction",
  "Consulting",
  "Interior Design",
];

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

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 lg:px-8">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

         
          <div>
            <img
              src="/logof.png"
              alt="StoneArc Logo"
              className="h-25 w-50"
            />

            <p className="mt-6 text-sm leading-7 text-gray-400">
              We design and build premium modern structures with
              innovation, precision, sustainability, and architectural
              excellence across industries.
            </p>
          </div>

         
          <div>
            <h3 className="mb-6 text-lg font-semibold">
              Quick Links
            </h3>

            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.path}
                    className="group inline-flex items-center text-sm text-gray-400 transition duration-300 hover:text-white"
                  >
                    <span className="mr-2 h-[2px] w-0 bg-blue-500 transition-all duration-300 group-hover:w-4" />

                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

         
          <div>
            <h3 className="mb-6 text-lg font-semibold">
              Our Services
            </h3>

            <ul className="space-y-4">
              {services.map((service, index) => (
                <li
                  key={index}
                  className="group inline-flex items-center text-sm text-gray-400 transition duration-300 hover:text-white cursor-pointer"
                >
                  <span className="mr-2 h-[2px] w-0 bg-blue-500 transition-all duration-300 group-hover:w-4" />

                  {service}
                </li>
              ))}
            </ul>
          </div>

        
          <div>
            <h3 className="mb-6 text-lg font-semibold">
              Contact Us
            </h3>

            <div className="space-y-5 text-sm text-gray-400">

              <div>
                <p className="font-medium text-white">
                  Office Location
                </p>

                <p className="mt-1 leading-6">
                  340 ground floor 4th T block Bsk 6th stage Thalagattapura 560109
                </p>
              </div>

              <div>
                <p className="font-medium text-white">
                  PEB plant location
                </p>

                <p className="mt-1 leading-6">
                  plot 10/10, Harohalli 2nd phase industrial area, Harohalli, Karnataka-562112
                </p>
              </div>

              <div>
                <p className="font-medium text-white">
                  Phone
                </p>

                <a
                  href="tel:+917760587776"
                  className="mt-1 block hover:text-white transition"
                >
                  +91 7760587776
                </a>
              </div>

              {/* <div>
                <p className="font-medium text-white">
                  Email
                </p>

                <a
                  href="mailto:info@stonearc.com"
                  className="mt-1 block hover:text-white transition"
                >
                  info@stonearc.com
                </a>
              </div> */}
            </div>

           
            {/* <div className="mt-8 flex items-center gap-4">

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-300 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-white hover:text-black"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-300 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-pink-500 hover:bg-white hover:text-black"
              >
                <FaInstagram />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-300 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500 hover:bg-white hover:text-black"
              >
                <FaLinkedinIn />
              </a>

            </div> */}
          </div>
        </div>

      
        <div className="mt-16 border-t border-white/10 pt-6">

          <div className="flex flex-col items-center justify-between gap-5 text-center lg:flex-row lg:text-left">

            
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} StoneArc. All rights reserved.
            </p>

            <a
              href="https://www.nakshatranamahacreations.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-500 transition hover:text-white"
            >
              Developed By: NakshatraNaman Creations
            </a>

       
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">

              <a
                href="/privacy-policy"
                className="transition hover:text-white"
              >
                Privacy Policy
              </a>

              <a
                href="/terms"
                className="transition hover:text-white"
              >
                Terms & Conditions
              </a>

              <a
                href="/support"
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