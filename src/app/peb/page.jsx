"use client"
import React, { useState } from "react"
import { processData } from "../data/data";

const Page = () => {

    const [activeImage , setActiveImage] = useState(processData[0].image);
    return (
        <section className="bg-[#0f172a] text-white">

            <div className="relative w-full h-screen overflow-hidden">
                <div className="absolute inset-0 animate-kenburns">
                    <img
                        src="/ArchitectureTeamDelivers.jpg"
                        alt="Construction"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="absolute inset-0 bg-black/60" />
                <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 h-full flex items-center">
                    <div>
                        <div className="inline-flex items-center gap-3 mb-5 animate-fadeUp">
                            <div className="w-12 h-px bg-blue-500" />

                            <span className="text-blue-400 tracking-[6px] font-semibold text-sm uppercase">
                                WHAT WE BUILD WITH PEB
                            </span>
                            <div className="w-12 h-px bg-blue-500" />
                        </div>
                        <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold text-white leading-tight animate-fadeUp">
                            Pre-Engineered Buildings (PEB) <br />
                        </h1>
                        <p className='text-white'>Steel. Speed. Strength. The future of large-span construction is already here.</p>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mt-6 rounded-full animate-fadeIn" />
                    </div>
                </div>
            </div>


            <div className=" px-16 py-16 gap-12 mb-14 animate-on-scroll">
                <h2 className="text-2xl font-semibold mb-4 border-l-4 border-blue-400 pl-4">
                    What is a Pre-Engineered Building?
                </h2>

                <p className="text-white leading-relaxed">
                    A Pre-Engineered Building (PEB) is a steel structure designed, fabricated, and supplied as a complete system and assembled on-site.
                    It is faster, lighter, more cost-efficient, and highly adaptable for warehouses, factories, and large-span structures.
                </p>
            </div>


            <div className="px-6 lg:px-20 mb-20">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold">Why PEB is the Smarter Choice</h2>
                    <div className="w-24 h-[3px] bg-blue-400 mx-auto mt-3 rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {[
                        ["Speed of Construction", "40–60% faster than conventional methods"],
                        ["Cost Efficiency", "Minimal waste and precise engineering"],
                        ["Structural Strength", "Designed for wind, seismic and heavy loads"],
                        ["Large Clear Spans", "Up to 90m column-free space"],
                        ["Design Flexibility", "Easy future expansion capability"],
                        ["Low Maintenance", "30+ years durability with minimal upkeep"],
                        ["Sustainability", "100% recyclable steel structures"],
                        ["Foundation Economy", "Lighter structure reduces foundation cost"]
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="bg-[#14367e] border border-white/10 rounded-2xl p-6 hover:border-blue-400/40 hover:shadow-lg hover:shadow-blue-500/10 transition"
                        >
                            <h3 className="text-white font-semibold mb-2">{item[0]}</h3>
                            <p className="text-white text-sm">{item[1]}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="px-6 lg:px-20 mb-20">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold">What We Build With PEB</h2>
                    <div className="w-24 h-[3px] bg-blue-400 mx-auto mt-3 rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {[
                        ["Industrial Warehouses", "Large span storage & logistics facilities"],
                        ["Manufacturing Facilities", "Factories with cranes and production systems"],
                        ["Logistics Centres", "High-efficiency distribution hubs"],
                        ["Aircraft Hangars", "Wide-span aviation-grade structures"],
                        ["Commercial Buildings", "Showrooms, malls, sports halls"],
                        ["Agricultural Structures", "Storage, cold rooms, agro units"]
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="bg-[#14367e] border border-white/10 rounded-2xl p-6 hover:border-blue-400/40 transition"
                        >
                            <h3 className="text-white font-semibold mb-2">{item[0]}</h3>
                            <p className="text-white text-sm">{item[1]}</p>
                        </div>
                    ))}
                </div>
            </div>

          

            <div className="px-6 lg:px-20 py-20 bg-[#0b1220] text-white">

           
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold">
                    Our PEB Process
                </h2>
                <div className="w-24 h-[3px] bg-blue-400 mx-auto mt-4 rounded-full" />
                <p className="text-gray-300 mt-5 max-w-2xl mx-auto text-sm">
                    A structured, engineering-led workflow ensuring precision from concept to handover.
                </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-start">

              
                <div className="relative border-l border-white/10 pl-8">

                    {processData.map((item, i) => (
                        <div
                            key={i}
                            onMouseEnter={() => setActiveImage(item.image)}
                            className="mb-10 relative group cursor-pointer"
                        >

                          
                            <div className="absolute -left-[42px] top-1 w-7 h-7 rounded-full bg-blue-400 text-black text-xs font-bold flex items-center justify-center shadow-md">
                                {item.phase}
                            </div>

                            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 
                                hover:border-blue-400/50 hover:shadow-lg hover:shadow-blue-500/10 
                                transition-all duration-300">

                                <h3 className="text-lg font-semibold mb-2">
                                    {item.title}
                                </h3>

                                <p className="text-gray-300 text-sm leading-relaxed">
                                    {item.desc}
                                </p>

                               
                                <div className="w-0 group-hover:w-full h-[2px] bg-blue-400 mt-4 transition-all duration-500 rounded-full"></div>
                            </div>

                        </div>
                    ))}
                </div>

              
                <div className="sticky top-24">

                    <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-blue-500/10">
                        <img
                            src={activeImage}
                            alt="Process Preview"
                            className="w-full h-[500px] object-cover transition-all duration-500 hover:scale-105"
                        />
                    </div>

                    <p className="text-center text-gray-400 text-sm mt-4">
                        Hover steps to preview process stage
                    </p>

                </div>

            </div>
        </div>



            <div className="px-6 lg:px-20 pb-20">

                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold">Technical Specifications</h2>
                    <div className="w-24 h-[3px] bg-blue-400 mx-auto mt-3 rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">

                    {[
                        ["Primary Steel Frame", "IS 2062 Grade E250/E350 high-tensile steel"],
                        ["Roof Sheeting", "0.50mm Galvalume coated sheets"],
                        ["Wall Sheeting", "Pre-coated color steel panels"],
                        ["Purlins & Girts", "Cold-formed galvanized sections"],
                        ["Fasteners", "Hot-dip galvanized bolted connections"],
                        ["Design Standards", "IS 800, IS 875, IS 1893, MBMA"],
                        ["Clear Span", "Up to 90 meters without columns"]
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="bg-[#14367e] border border-white/10 rounded-2xl p-6 hover:border-blue-400/40 transition"
                        >
                            <h3 className="text-white font-semibold mb-2">{item[0]}</h3>
                            <p className="text-white text-sm">{item[1]}</p>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
};

export default Page;