"use client"
import React, { useEffect, useRef } from 'react'
import { cards } from '../data/data'
import { ChevronLeft, ChevronRight } from "lucide-react"

const page = () => {

    const sectionRef = useRef(null)
    const sliderRef = useRef(null)

    const scrollLeft = () => {
        sliderRef.current.scrollBy({ left: -300, behavior: "smooth" })
    }

    const scrollRight = () => {
        sliderRef.current.scrollBy({ left: 300, behavior: "smooth" })
    }

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-fadeInUp')
                    }
                })
            },
            { threshold: 0.1 }
        )
        const elements = document.querySelectorAll('.animate-on-scroll')
        elements.forEach((el) => observer.observe(el))
        return () => observer.disconnect()
    }, [])

    return (
        <section
            ref={sectionRef}
            className="relative = overflow-x-hidden"
        >

            <div className="relative w-full min-h-[100svh] overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="/ArchitectureTeamDelivers.jpg"
                        alt="Construction"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="absolute inset-0 bg-black/60" />
                <div className="relative z-10 w-full min-h-[100svh] flex items-center px-5 sm:px-8 md:px-12 lg:px-16 py-24">
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-2 sm:gap-3 mb-5">
                            <div className="w-8 sm:w-12 h-px bg-[#fd6402]" />
                            <span className="text-[#fd6402] tracking-[3px] sm:tracking-[6px] font-semibold text-[10px] sm:text-sm uppercase">
                                Construction Services
                            </span>
                            <div className="w-8 sm:w-12 h-px bg-[#fd6402]" />
                        </div>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
                            Architecture Services
                        </h1>
                        <p className="text-white/80 text-sm sm:text-base mt-3 leading-relaxed">
                            Design that thinks like an engineer. Engineering that respects design.
                        </p>
                        <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-[#fd6402] to-[#fd6402] mt-6 rounded-full" />
                    </div>
                </div>
            </div>

            <div className="grid lg:grid-cols-2 px-5 sm:px-8 md:px-10 lg:px-16 py-12 sm:py-16 gap-8 sm:gap-12 mb-0 animate-on-scroll">
                <div className="space-y-5 sm:space-y-6">
                    <div>
                        <span className="text-[#fd6402] text-xs sm:text-sm font-semibold uppercase tracking-wider">
                            OVERVIEW
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-bold mt-3 text-black leading-snug">
                            Where Aesthetics Meet Structural Reality
                        </h2>
                    </div>
                    <p className="text-black leading-relaxed text-sm sm:text-base lg:text-lg">
                        Great architecture is not just about what looks good on a render. It is about what works when it is built — structurally sound, spatially intelligent, compliant with regulations, and functional for the people who use it every day.
                    </p>
                    <div className="bg-gray-100 border border-blue-500/20 rounded-2xl p-5 sm:p-6">
                        <p className="leading-relaxed italic text-sm sm:text-base">
                            The Stonearc architecture team brings together licensed architects and structural engineers who collaborate from the first sketch. This means our designs are not aspirational exercises — they are engineered from the beginning to be built efficiently and stand permanently.
                        </p>
                    </div>
                </div>

                <div className="relative rounded-2xl overflow-hidden shadow-2xl h-64 sm:h-80 lg:h-auto min-h-[240px]">
                    <img
                        src="/Aesthetics.avif"
                        alt="Aesthetics Structural"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                </div>
            </div>

            <div className="bg-[#0f172a] py-10 sm:py-14 px-5 sm:px-8 lg:px-16">
                <div className="text-center mb-10 sm:mb-14">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-snug">
                        What Our Architecture Team Delivers
                    </h2>
                    <div className="w-24 h-[3px] bg-[#fd6402] mx-auto mt-4 rounded-full" />
                    <p className="text-gray-400 mt-5 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed">
                        We begin every project with a deep understanding of your brief — the function of the building, the people who will use it, the site constraints, the budget, and your long-term intentions. From this foundation, we develop concept schemes that translate vision into spatial strategy.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 sm:gap-6">
                    {[
                        {
                            src: "/siteanalysis.webp", alt: "Site Analysis", title: "Site Analysis",
                            desc: "Feasibility studies and strategic planning for successful project execution.",
                            hover: "hover:border-amber-400/40 hover:shadow-amber-500/10"
                        },
                        {
                            src: "/conceptDevelopment.jpg", alt: "Concept Design", title: "Concept Design",
                            desc: "Creative concepts transformed into modern architectural experiences.",
                            hover: "hover:border-blue-400/40 hover:shadow-amber-500/10"
                        },
                        {
                            src: "/spaceplanning.jpg", alt: "Space Planning", title: "Space Planning",
                            desc: "Functional layouts optimized for comfort and efficient usability.",
                            hover: "hover:border-blue-400/40 hover:shadow-amber-500/10"
                        },
                        {
                            src: "/3dmassing.jpg", alt: "3D Massing", title: "3D Massing",
                            desc: "Volumetric exploration and visual identity development for projects.",
                            hover: "hover:border-blue-400/40 hover:shadow-amber-500/10"
                        },
                    ].map((card, i) => (
                        <div key={i} className={`group relative rounded-2xl overflow-hidden h-[380px] sm:h-[420px] border border-white/10 bg-[#111827] ${card.hover} transition-all duration-500 shadow-xl`}>
                            <div className="h-[55%] w-full overflow-hidden">
                                <img src={card.src} alt={card.alt} className="w-full h-full object-cover object-top group-hover:scale-105 transition-all duration-700" />
                            </div>
                            <div className="absolute bottom-0 left-0 w-full p-5 sm:p-6 bg-gradient-to-t from-black/95 via-black/80 to-transparent">
                                <h4 className="text-white text-lg sm:text-2xl font-semibold">{card.title}</h4>
                                <div className="w-0 group-hover:w-24 h-[2px] bg-[#fd6402] mt-3 mb-3 transition-all duration-500" />
                                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                                    {card.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-[#0f172a] py-10 sm:py-14 px-5 sm:px-8 lg:px-16">
                <div className="text-center mb-10 sm:mb-14">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                        Architectural Working Drawings
                    </h2>
                    <div className="w-24 h-[3px] bg-[#fd6402] mx-auto mt-4 rounded-full" />
                    <p className="text-gray-400 mt-5 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed">
                        Once the design direction is established, we produce the full set of working drawings required for construction — coordinated with structural and MEP disciplines to ensure buildability and compliance.
                    </p>
                </div>


                <div className="relative">
                    <button
                        onClick={scrollLeft}
                        aria-label="Scroll left"
                        className="absolute left-0 md:-left-5 top-1/2 -translate-y-1/2 z-10 bg-[#fd6402] hover:bg-[#fd6402] text-white p-2 sm:p-3 rounded-full shadow-lg transition-colors"
                    >
                        <ChevronLeft size={20} />
                    </button>

                    <button
                        onClick={scrollRight}
                        aria-label="Scroll right"
                        className="absolute right-0 md:-right-5 top-1/2 -translate-y-1/2 z-10 bg-[#fd6402] hover:bg-[#fd6402] text-white p-2 sm:p-3 rounded-full shadow-lg transition-colors"
                    >
                        <ChevronRight size={20} />
                    </button>

                    <div
                        ref={sliderRef}
                        className="flex gap-4 sm:gap-6 overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] px-8 sm:px-10 md:px-0"
                        style={{ scrollSnapType: 'x mandatory' }}
                    >
                        {cards.map((card, index) => (
                            <div
                                key={index}
                                style={{ scrollSnapAlign: 'start' }}
                                className="group relative flex-shrink-0 w-[78vw] sm:w-[44vw] md:w-[31vw] lg:w-[23vw] max-w-[300px] rounded-2xl overflow-hidden h-[380px] sm:h-[420px] border border-white/10 bg-[#111827] hover:border-[#fd6402]/40 transition-all duration-500 shadow-xl hover:shadow-blue-500/10"
                            >
                                <div className="h-[55%] w-full overflow-hidden">
                                    <img src={card.img} alt={card.title} className="w-full h-full object-cover object-top group-hover:scale-105 transition-all duration-700" />
                                </div>
                                <div className="absolute bottom-0 left-0 w-full p-3 sm:p-3 bg-gradient-to-t from-black/95 via-black/80 to-transparent">
                                    <div className="group-hover:-translate-y-3 transition-all duration-500">

                                        <h4 className="text-white text-base sm:text-xl font-semibold">
                                            {card.title}
                                        </h4>

                                        <div className="w-0 group-hover:w-24 h-[2px] bg-[#fd6402] mt-3 mb-3 transition-all duration-500" />

                                        {/* 👇 KEY FIX */}
                                        <div className="overflow-hidden max-h-0 group-hover:max-h-40 transition-all duration-500 ease-in-out">

                                            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                                                {card.desc}
                                            </p>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>


            <div className="bg-[#0f172a] py-12 sm:py-16 px-5 sm:px-8 lg:px-20">
                <div className="text-center mb-10 sm:mb-14">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-wide leading-snug">
                        Regulatory Approvals & Compliance
                    </h2>
                    <div className="w-28 h-[3px] bg-[#fd6402] mx-auto mt-4 rounded-full" />
                    <p className="text-gray-400 mt-5 sm:mt-6 max-w-3xl mx-auto leading-relaxed text-sm sm:text-base">
                        Stonearc manages the full approval process — from plan sanction applications to occupancy certificates.
                        Our team is experienced with municipal and panchayat approvals, RERA compliance, fire NOC procedures,
                        and airport authority clearances where applicable.
                    </p>
                </div>

                <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                    {[
                        { title: "Plan Sanction", desc: "End-to-end building plan approval submission with authorities and documentation support." },
                        { title: "RERA Compliance", desc: "Complete assistance in RERA registration, filings, and regulatory compliance process." },
                        { title: "Fire NOC Approval", desc: "Safety drawings and coordination for fire department approvals and clearances." },
                        { title: "Environmental Clearance", desc: "Support for environmental permissions and required statutory approvals." },
                        { title: "Occupancy Certificate", desc: "Final documentation and coordination for occupancy certificate approval." },
                    ].map((item, i) => (
                        <div key={i} className="group relative bg-gray-200 border border-white/10 rounded-2xl p-5 sm:p-6 hover:border-blue-400/40 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-500 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
                            <h3 className=" text-base sm:text-lg font-semibold mb-2">{item.title}</h3>
                            <p className=" text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                            <div className="w-0 group-hover:w-full h-[2px] bg-[#fd6402] mt-4 transition-all duration-500 rounded-full" />
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-[#0f172a] py-12 sm:py-16 px-5 sm:px-8 lg:px-20">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">
                    {[
                        {
                            icon: "🏗️",
                            title: "Interior Design Coordination",
                            desc: "For clients who want a coordinated finish, our architecture team works closely with interior designers to ensure that the built structure matches the interior vision — from ceiling heights, column positions, service routing, to natural light planning."
                        },
                        {
                            icon: "🏢",
                            title: "Renovation & Adaptive Reuse",
                            desc: "We provide architectural services for renovation, refurbishment, and adaptive reuse of existing buildings — from structural assessment and design development to complete drawing sets for new functional use."
                        },
                    ].map((item, i) => (
                        <div key={i} className="group relative bg-gray-200 border border-white/10 rounded-2xl p-6 sm:p-8 hover:border-blue-400/40 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-500 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
                            <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl bg-[#0f172a] border border-white/10 mb-5 sm:mb-6">
                                <span className="text-blue-400 text-lg sm:text-xl">{item.icon}</span>
                            </div>
                            <h4 className=" text-lg sm:text-xl font-semibold mb-3">{item.title}</h4>
                            <p className=" text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                            <div className="w-0 group-hover:w-full h-[2px] bg-[#fd6402] mt-5 sm:mt-6 transition-all duration-500 rounded-full" />
                        </div>
                    ))}
                </div>
            </div>


            <div className="bg-[#0f172a] py-12 sm:py-16 px-5 sm:px-8 lg:px-20">
                <div className="text-center mb-10 sm:mb-14">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-wide">
                        Design Philosophy
                    </h2>
                    <div className="w-28 h-[3px] bg-[#fd6402] mx-auto mt-4 rounded-full" />
                    <p className="text-gray-400 mt-5 sm:mt-6 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed">
                        How we think about architecture, structure, and design decisions at Stonearc.
                    </p>
                </div>

                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-12 sm:mb-16">
                    {[
                        "Form follows function — every spatial decision has a reason",
                        "Structure is part of the design — not a constraint imposed on it",
                        "Sustainability is not an add-on — it is embedded in the design process",
                        "The building must serve its users — not just impress them",
                        "Details matter — a well-resolved detail is the difference between a good building and a great one",
                    ].map((item, i) => (
                        <div key={i} className="group bg-gray-200 border border-white/10 rounded-2xl p-5 sm:p-6 hover:border-blue-400/40 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-500">
                            <p className=" text-xs sm:text-sm leading-relaxed">{item}</p>
                            <div className="w-0 group-hover:w-full h-[2px] bg-[#fd6402] mt-4 transition-all duration-500 rounded-full" />
                        </div>
                    ))}
                </div>


                <div className="max-w-4xl mx-auto text-center mb-14 sm:mb-20 px-2">
                    <p className="text-gray-300 italic text-base sm:text-lg leading-relaxed">
                        "We design buildings that builders can build and owners can be proud of. That is the Stonearc architecture standard."
                    </p>
                </div>


                <div className="text-center mb-8 sm:mb-10">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-wide">
                        Project Types
                    </h2>
                    <div className="w-28 h-[3px] bg-[#fd6402] mx-auto mt-4 rounded-full" />
                    <p className="text-gray-400 mt-5 sm:mt-6 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed">
                        Architecture projects we handle across multiple sectors and scales.
                    </p>
                </div>

                <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {[
                        { sector: "Residential", types: "Independent homes, luxury villas, apartment buildings, gated communities" },
                        { sector: "Commercial", types: "Office buildings, retail spaces, mixed-use developments, hospitality" },
                        { sector: "Industrial", types: "Factory buildings, warehouse design, logistics hubs, processing units" },
                        { sector: "Institutional", types: "Schools, colleges, hospitals, government and civic buildings" },
                        { sector: "Renovation", types: "Building upgrades, adaptive reuse, structural modifications" },
                    ].map((item, i) => (
                        <div key={i} className="group bg-gray-200 border border-white/10 rounded-2xl p-5 sm:p-6 hover:border-blue-400/40 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-500">
                            <h4 className=" text-base sm:text-lg font-semibold mb-2 sm:mb-3">{item.sector}</h4>
                            <p className=" text-xs sm:text-sm leading-relaxed">{item.types}</p>
                            <div className="w-0 group-hover:w-full h-[2px] bg-[#fd6402] mt-4 sm:mt-5 transition-all duration-500 rounded-full" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default page
