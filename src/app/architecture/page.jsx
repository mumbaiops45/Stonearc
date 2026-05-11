"use client"
import React, { useEffect, useRef } from 'react'
import { cards } from '../data/data'
import { ChevronLeft, ChevronRight } from "lucide-react"

const page = () => {

    const sectionRef = useRef(null)
    const sliderRef = useRef(null);

    const scrollLeft = () => {
        sliderRef.current.scrollBy({
            left: -350,
            behavior: "smooth",
        });
    };

    const scrollRight = () => {
        sliderRef.current.scrollBy({
            left: 350,
            behavior: "smooth",
        });
    };

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
        <section ref={sectionRef} className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950   overflow-hidden">
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
                                Construction Services
                            </span>
                            <div className="w-12 h-px bg-blue-500" />
                        </div>
                        <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold text-white leading-tight animate-fadeUp">
                            Architecture Services <br />
                        </h1>
                        <p className='text-white'>Design that thinks like an engineer. Engineering that respects design.</p>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mt-6 rounded-full animate-fadeIn" />
                    </div>
                </div>
            </div>
            <div className="grid lg:grid-cols-2 px-16 py-16 gap-12 mb-14 animate-on-scroll">
                <div className="space-y-6">
                    <div>
                        <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider">OVERVIEW</span>
                        <h2 className="text-3xl md:text-3xl font-bold mt-3 text-white">
                            Where Aesthetics Meet Structural Reality
                        </h2>
                    </div>
                    <p className="text-slate-300 leading-relaxed text-lg">
                        Great architecture is not just about what looks good on a render. It is about what works when it is built — structurally sound, spatially intelligent, compliant with regulations, and functional for the people who use it every day.
                    </p>
                    <div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl p-6">
                        <p className="text-slate-200 leading-relaxed italic">
                            The Stonearc architecture team brings together licensed architects and structural engineers who collaborate from the first sketch. This means our designs are not aspirational exercises — they are engineered from the beginning to be built efficiently and stand permanently.
                        </p>
                    </div>
                </div>

                <div className="relative rounded-2xl overflow-hidden shadow-2xl h-80 lg:h-auto">
                    <img
                        src="/Aesthetics.avif"
                        alt="Aesthetics Structural"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                </div>
            </div>



            <div className="bg-[#0f172a] py-10 px-6 lg:px-16">
                <div className="text-center mb-14">
                    <h2 className="text-4xl md:text-4xl font-bold text-white">
                        What Our Architecture Team Delivers
                    </h2>
                    <div className="w-24 h-[3px] bg-blue-400 mx-auto mt-4 rounded-full"></div>
                    <p className="text-gray-400 mt-5 max-w-3xl mx-auto">
                        We begin every project with a deep understanding of your brief — the function of the building, the people who will use it, the site constraints, the budget, and your long-term intentions. From this foundation, we develop concept schemes that translate vision into spatial strategy.
                    </p>
                </div>



                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="group relative rounded-2xl overflow-hidden h-[420px] border border-white/10 bg-[#111827] hover:border-amber-400/40 transition-all duration-500 shadow-xl hover:shadow-amber-500/10">

                        <div className="h-[250px] w-full overflow-hidden">
                            <img
                                src="/siteanalysis.webp"
                                alt="Site Analysis"
                                className="w-full h-full object-cover object-top group-hover:scale-105 transition-all duration-700"
                            />
                        </div>


                        <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/95 via-black/80 to-transparent">

                            <h4 className="text-white text-2xl font-semibold">
                                Site Analysis
                            </h4>

                            <div className="w-0 group-hover:w-24 h-[2px] bg-blue-400 mt-3 mb-4 transition-all duration-500"></div>

                            <p className="text-gray-300 text-sm leading-relaxed opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                                Feasibility studies and strategic planning for successful project execution.
                            </p>
                        </div>
                    </div>


                    <div className="group relative rounded-2xl overflow-hidden h-[420px] border border-white/10 bg-[#111827] hover:border-blue-400/40 transition-all duration-500 shadow-xl hover:shadow-amber-500/10">

                        <div className="h-[250px] w-full overflow-hidden">
                            <img
                                src="/conceptDevelopment.jpg"
                                alt="Concept Design"
                                className="w-full h-full object-cover object-top group-hover:scale-105 transition-all duration-700"
                            />
                        </div>

                        <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/95 via-black/80 to-transparent">

                            <h4 className="text-white text-2xl font-semibold">
                                Concept Design
                            </h4>

                            <div className="w-0 group-hover:w-24 h-[2px] bg-blue-400 mt-3 mb-4 transition-all duration-500"></div>

                            <p className="text-gray-300 text-sm leading-relaxed opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                                Creative concepts transformed into modern architectural experiences.
                            </p>
                        </div>
                    </div>



                    <div className="group relative rounded-2xl overflow-hidden h-[420px] border border-white/10 bg-[#111827] hover:border-blue-400/40 transition-all duration-500 shadow-xl hover:shadow-amber-500/10">

                        <div className="h-[250px] w-full overflow-hidden">
                            <img
                                src="/spaceplanning.jpg"
                                alt="Space Planning"
                                className="w-full h-full object-cover object-top group-hover:scale-105 transition-all duration-700"
                            />
                        </div>

                        <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/95 via-black/80 to-transparent">

                            <h4 className="text-white text-2xl font-semibold">
                                Space Planning
                            </h4>

                            <div className="w-0 group-hover:w-24 h-[2px] bg-blue-400 mt-3 mb-4 transition-all duration-500"></div>

                            <p className="text-gray-300 text-sm leading-relaxed opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                                Functional layouts optimized for comfort and efficient usability.
                            </p>
                        </div>
                    </div>

                    <div className="group relative rounded-2xl overflow-hidden h-[420px] border border-white/10 bg-[#111827] hover:border-blue-400/40 transition-all duration-500 shadow-xl hover:shadow-amber-500/10">

                        <div className="h-[250px] w-full overflow-hidden">
                            <img
                                src="/3dmassing.jpg"
                                alt="3D Massing"
                                className="w-full h-full object-cover object-top group-hover:scale-105 transition-all duration-700"
                            />
                        </div>

                        <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/95 via-black/80 to-transparent">

                            <h4 className="text-white text-2xl font-semibold">
                                3D Massing
                            </h4>

                            <div className="w-0 group-hover:w-24 h-[2px] bg-blue-400 mt-3 mb-4 transition-all duration-500"></div>

                            <p className="text-gray-300 text-sm leading-relaxed opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                                Volumetric exploration and visual identity development for projects.
                            </p>
                        </div>
                    </div>

                </div>
            </div>


            <div className="bg-[#0f172a] py-10 px-6 lg:px-16">

                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                        Architectural Working Drawings
                    </h2>

                    <div className="w-24 h-[3px] bg-blue-400 mx-auto mt-4 rounded-full"></div>

                    <p className="text-gray-400 mt-5 max-w-3xl mx-auto">
                        Once the design direction is established, we produce the full set of working drawings required for construction — coordinated with structural and MEP disciplines to ensure buildability and compliance.
                    </p>
                </div>

                <div className="relative">

                    <button
                        onClick={scrollLeft}
                        className="absolute left-0 md:-left-6 top-1/2 -translate-y-1/2 z-10 bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg"
                    >
                        <ChevronLeft size={24} />
                    </button>

                    <button
                        onClick={scrollRight}
                        className="absolute right-0 md:-right-6 top-1/2 -translate-y-1/2 z-10 bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg"
                    >
                        <ChevronRight size={24} />
                    </button>
                    <div
                        ref={sliderRef}
                        className="
                        flex gap-6
                        overflow-x-auto
                        scroll-smooth
                        scrollbar-hide
                        [-ms-overflow-style:none]
                        [scrollbar-width:none]
                        [&::-webkit-scrollbar]:hidden
                    "
                    >
                        {cards.map((card, index) => (
                            <div
                                key={index}
                                className="
                                group relative
                                flex-shrink-0
                                w-[85%] sm:w-[48%] md:w-[32%] lg:w-[24%]
                                rounded-2xl overflow-hidden
                                h-[420px]
                                border border-white/10
                                bg-[#111827]
                                hover:border-blue-400/40
                                transition-all duration-500
                                shadow-xl hover:shadow-blue-500/10
                            "
                            >
                                {/* Image */}
                                <div className="h-[250px] w-full overflow-hidden">
                                    <img
                                        src={card.img}
                                        alt={card.title}
                                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-all duration-700"
                                    />
                                </div>

                                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/95 via-black/80 to-transparent">
                                    <h4 className="text-white text-xl font-semibold">
                                        {card.title}
                                    </h4>

                                    <div className="w-0 group-hover:w-24 h-[2px] bg-blue-400 mt-3 mb-4 transition-all duration-500"></div>

                                    <p className="text-gray-300 text-sm leading-relaxed opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                                        {card.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>



            <div className="bg-[#0f172a] py-16 px-6 lg:px-20">

                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-4xl font-bold text-white tracking-wide">
                        Regulatory Approvals & Compliance
                    </h2>

                    <div className="w-28 h-[3px] bg-blue-400 mx-auto mt-4 rounded-full"></div>

                    <p className="text-gray-400 mt-6 max-w-3xl mx-auto leading-relaxed text-sm md:text-base">
                        Stonearc manages the full approval process — from plan sanction applications to occupancy certificates.
                        Our team is experienced with municipal and panchayat approvals, RERA compliance, fire NOC procedures,
                        and airport authority clearances where applicable.
                    </p>
                </div>


                <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                    {[
                        {
                            title: "Plan Sanction",
                            desc: "End-to-end building plan approval submission with authorities and documentation support."
                        },
                        {
                            title: "RERA Compliance",
                            desc: "Complete assistance in RERA registration, filings, and regulatory compliance process."
                        },
                        {
                            title: "Fire NOC Approval",
                            desc: "Safety drawings and coordination for fire department approvals and clearances."
                        },
                        {
                            title: "Environmental Clearance",
                            desc: "Support for environmental permissions and required statutory approvals."
                        },
                        {
                            title: "Occupancy Certificate",
                            desc: "Final documentation and coordination for occupancy certificate approval."
                        }
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="group relative bg-[#14367e] border border-white/10 rounded-2xl p-6 
                hover:border-blue-400/40 hover:shadow-xl hover:shadow-blue-500/10 
                transition-all duration-500 overflow-hidden"
                        >

                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

                            <h3 className="text-white text-lg font-semibold mb-2">
                                {item.title}
                            </h3>


                            <p className="text-white text-sm leading-relaxed">
                                {item.desc}
                            </p>

                            <div className="w-0 group-hover:w-full h-[2px] bg-blue-400 mt-4 transition-all duration-500 rounded-full"></div>
                        </div>
                    ))}
                </div>
            </div>


            <div className="bg-[#0f172a] py-16 px-6 lg:px-20">

                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

                    <div className="group relative bg-[#14367e] border border-white/10 rounded-2xl p-8 
            hover:border-blue-400/40 hover:shadow-xl hover:shadow-blue-500/10 
            transition-all duration-500 overflow-hidden">

                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

                        <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#0f172a] border border-white/10 mb-6">
                            <span className="text-blue-400 text-xl">🏗️</span>
                        </div>

                        <h4 className="text-white text-xl font-semibold mb-3">
                            Interior Design Coordination
                        </h4>

                        <p className="text-white text-sm leading-relaxed">
                            For clients who want a coordinated finish, our architecture team works closely with interior designers
                            to ensure that the built structure matches the interior vision — from ceiling heights, column positions,
                            service routing, to natural light planning.
                        </p>

                        <div className="w-0 group-hover:w-full h-[2px] bg-blue-400 mt-6 transition-all duration-500 rounded-full"></div>
                    </div>


                    <div className="group relative bg-[#14367e] border border-white/10 rounded-2xl p-8 
            hover:border-blue-400/40 hover:shadow-xl hover:shadow-blue-500/10 
            transition-all duration-500 overflow-hidden">


                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

                        <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#0f172a] border border-white/10 mb-6">
                            <span className="text-blue-400 text-xl">🏢</span>
                        </div>

                        <h4 className="text-white text-xl font-semibold mb-3">
                            Renovation & Adaptive Reuse
                        </h4>

                        <p className="text-white text-sm leading-relaxed">
                            We provide architectural services for renovation, refurbishment, and adaptive reuse of existing buildings —
                            from structural assessment and design development to complete drawing sets for new functional use.
                        </p>

                        <div className="w-0 group-hover:w-full h-[2px] bg-blue-400 mt-6 transition-all duration-500 rounded-full"></div>
                    </div>

                </div>
            </div>

            <div className="bg-[#0f172a] py-16 px-6 lg:px-20">


                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-4xl font-bold text-white tracking-wide">
                        Design Philosophy
                    </h2>

                    <div className="w-28 h-[3px] bg-blue-400 mx-auto mt-4 rounded-full"></div>

                    <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
                        How we think about architecture, structure, and design decisions at Stonearc.
                    </p>
                </div>


                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">

                    {[
                        "Form follows function — every spatial decision has a reason",
                        "Structure is part of the design — not a constraint imposed on it",
                        "Sustainability is not an add-on — it is embedded in the design process",
                        "The building must serve its users — not just impress them",
                        "Details matter — a well-resolved detail is the difference between a good building and a great one"
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="group bg-[#14367e] border border-white/10 rounded-2xl p-6 
                hover:border-blue-400/40 hover:shadow-lg hover:shadow-blue-500/10 
                transition-all duration-500"
                        >
                            <div className="flex gap-3">
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    {item}
                                </p>
                            </div>

                            <div className="w-0 group-hover:w-full h-[2px] bg-blue-400 mt-4 transition-all duration-500 rounded-full"></div>
                        </div>
                    ))}
                </div>


                <div className="max-w-4xl mx-auto text-center mb-20">
                    <p className="text-gray-300 italic text-lg leading-relaxed">
                        “We design buildings that builders can build and owners can be proud of. That is the Stonearc architecture standard.”
                    </p>
                    {/* <p className="text-blue-400 mt-4 text-sm">
                        — Principal Architect, Stonearc Engineers
                    </p> */}
                </div>


                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-white tracking-wide">
                        Project Types
                    </h2>

                    <div className="w-28 h-[3px] bg-blue-400 mx-auto mt-4 rounded-full"></div>

                    <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
                        Architecture projects we handle across multiple sectors and scales.
                    </p>
                </div>

                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">

                    {[
                        {
                            sector: "Residential",
                            types: "Independent homes, luxury villas, apartment buildings, gated communities"
                        },
                        {
                            sector: "Commercial",
                            types: "Office buildings, retail spaces, mixed-use developments, hospitality"
                        },
                        {
                            sector: "Industrial",
                            types: "Factory buildings, warehouse design, logistics hubs, processing units"
                        },
                        {
                            sector: "Institutional",
                            types: "Schools, colleges, hospitals, government and civic buildings"
                        },
                        {
                            sector: "Renovation",
                            types: "Building upgrades, adaptive reuse, structural modifications"
                        }
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="group bg-[#14367e] border border-white/10 rounded-2xl p-6 
                hover:border-blue-400/40 hover:shadow-xl hover:shadow-blue-500/10 
                transition-all duration-500"
                        >

                            <h4 className="text-white text-lg font-semibold mb-3">
                                {item.sector}
                            </h4>

                            <p className="text-white text-sm leading-relaxed">
                                {item.types}
                            </p>

                            <div className="w-0 group-hover:w-full h-[2px] bg-blue-400 mt-5 transition-all duration-500 rounded-full"></div>
                        </div>
                    ))}
                </div>
            </div>

        </section>



    )
}

export default page


