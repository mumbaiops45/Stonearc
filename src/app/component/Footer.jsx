import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0b0f19] text-white relative overflow-hidden">

     
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 via-transparent to-purple-900/10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 relative z-10">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        
          <div>
            <h2 className="text-2xl font-bold tracking-wide">
              Stonearc
            </h2>
            <p className="mt-4 text-gray-400 text-sm leading-relaxed">
              We design and build modern, scalable and high-quality structures
              with precision and innovation.
            </p>
          </div>

        
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="hover:text-white cursor-pointer transition">Home</li>
              <li className="hover:text-white cursor-pointer transition">About</li>
              <li className="hover:text-white cursor-pointer transition">Projects</li>
              <li className="hover:text-white cursor-pointer transition">Services</li>
            </ul>
          </div>

         
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="hover:text-white transition">Architecture</li>
              <li className="hover:text-white transition">PEB Structures</li>
              <li className="hover:text-white transition">Industrial Design</li>
              <li className="hover:text-white transition">Consulting</li>
            </ul>
          </div>

         
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>

            <p className="text-gray-400 text-sm">
              Mumbai, India
            </p>

            <p className="text-gray-400 text-sm mt-2">
              +91 98765 43210
            </p>

            <p className="text-gray-400 text-sm mt-2">
              info@stonearc.com
            </p>

          
            <div className="flex gap-4 mt-5">
              <div className="w-9 h-9 rounded-full bg-white/10 hover:bg-blue-600 flex items-center justify-center cursor-pointer transition">
                F
              </div>
              <div className="w-9 h-9 rounded-full bg-white/10 hover:bg-blue-600 flex items-center justify-center cursor-pointer transition">
                I
              </div>
              <div className="w-9 h-9 rounded-full bg-white/10 hover:bg-blue-600 flex items-center justify-center cursor-pointer transition">
                L
              </div>
            </div>

          </div>
        </div>

       
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Stonearc. All rights reserved.</p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <span className="hover:text-white cursor-pointer">Privacy</span>
            <span className="hover:text-white cursor-pointer">Terms</span>
            <span className="hover:text-white cursor-pointer">Support</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;