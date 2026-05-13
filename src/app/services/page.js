"use client"
import React, { useEffect, useRef } from 'react'
import { processStages, constructionTypes, materials } from '../data/data'


const page = () => {
    const sectionRef = useRef(null)


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
                        src="/pric.jpg"
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


                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight animate-fadeUp">
                            Precision Execution From <br />

                            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                                Ground-Breaking to Handover
                            </span>
                        </h1>


                        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mt-6 rounded-full animate-fadeIn" />
                    </div>
                </div>
            </div>



            <div className="grid grid-cols-1 lg:grid-cols-2 items-center px-4 sm:px-6 md:px-10 lg:px-16 py-14 md:py-20 gap-10 lg:gap-16 mb-20 md:mb-24 animate-on-scroll">
                <div className="space-y-6">
                    <div>
                        <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider">OVERVIEW</span>
                        <h2 className="text-3xl md:text-4xl font-bold mt-3 text-white">
                            We Build What Others Design - and Design What We Build
                        </h2>
                    </div>
                    <p className="text-slate-300 leading-relaxed text-lg">
                        Stonearc Engineers provides end-to-end civil construction services for a wide range of project types.
                        From RCC-framed commercial structures and multi-storey residential buildings to industrial sheds,
                        institutional campuses, and infrastructure works — we bring the same level of structural discipline
                        to every project category.
                    </p>
                    <div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl p-6">
                        <p className="text-slate-200 leading-relaxed italic">
                            "What makes Stonearc different is not just what we build. It is how we manage the build —
                            with real-time cost tracking, documented quality checks, certified material sourcing, and
                            site supervision that is never absent when decisions are being made."
                        </p>
                    </div>
                </div>

                <div className="relative rounded-2xl overflow-hidden shadow-2xl h-80 lg:h-auto">
                    <img
                        src="/civilconstruction.jpg"
                        alt="Construction Overview"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                </div>
            </div>


            <div className="mb-24">

                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                        What We <span className="text-blue-400">Construct</span>
                    </h2>

                    <div className="w-20 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto mt-4" />
                </div>


                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 lg:px-10">

                    {constructionTypes.map((type, index) => (
                        <div
                            key={index}
                            className="group relative h-[380px] rounded-2xl overflow-hidden border border-slate-700 hover:border-blue-500/50 transition-all duration-500"
                        >


                            <img
                                src={type.image}
                                alt={type.title}
                                className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:blur-sm"
                            />


                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/75 transition-all duration-500" />

                            <div className="relative z-10 h-full flex flex-col justify-end p-6">


                                <h3 className="text-2xl font-bold text-white mb-3">
                                    {type.title}
                                </h3>


                                <div className="max-h-0 opacity-0 overflow-hidden transition-all duration-700 group-hover:max-h-[300px] group-hover:opacity-100">

                                    <p className="text-slate-200 text-sm leading-relaxed mb-4">
                                        {type.description}
                                    </p>

                                    <ul className="space-y-2">
                                        {type.features.map((feature, idx) => (
                                            <li
                                                key={idx}
                                                className="flex items-center gap-2 text-white text-sm"
                                            >
                                                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

            <div className="mb-24 animate-on-scroll">
                <div className="text-center  mb-12">
                    <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider">HOW WE WORK</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
                        Our Construction <span className="text-purple-400">Process</span>
                    </h2>
                    <div className="w-20 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto mt-4" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 items-center px-4 sm:px-6 md:px-10 lg:px-16 py-14 md:py-20 gap-10 lg:gap-16 mb-20 md:mb-24 animate-on-scroll">
                    {processStages.map((stage, index) => (
                        <div
                            key={index}
                            className="group relative p-6 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:-translate-y-1"
                        >
                            <div className="absolute top-4 right-4 text-4xl font-bold text-blue-500/10 group-hover:text-blue-500/20 transition-colors">
                                {stage.stage}
                            </div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center text-2xl">
                                    {stage.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white">{stage.title}</h3>
                            </div>
                            <p className="text-slate-300 text-sm mb-3 font-semibold">{stage.actions}</p>
                            <div className="flex items-start gap-2">
                                <span className="text-blue-400 text-xs">→</span>
                                <p className="text-slate-400 text-xs">{stage.commitment}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>



            <div className="animate-on-scroll py-20 bg-[#06111f]">
                <div className="text-center mb-12">
                    <span className="text-[#d6a354] text-sm font-semibold uppercase tracking-[4px]">
                        MATERIALS
                    </span>

                    <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">
                        Materials We Work With
                    </h2>

                    <p className="text-slate-300 max-w-3xl mx-auto mt-4 leading-relaxed">
                        Stonearc maintains strict standards for material procurement.
                        All structural materials are sourced from certified suppliers
                        and tested before use on site.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-9 px-6 lg:px-12">
                    {materials.map((material, index) => (
                        <div
                            key={index}
                            className="group relative rounded-2xl overflow-hidden border border-[#d6a354]/30 bg-[#081524] hover:scale-105 transition duration-300"
                        >

                            <div className="relative h-[320px] overflow-hidden">
                                <img
                                    src={material.image}
                                    alt={material.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                                />


                                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-[#06111f]" />
                            </div>


                            <div className="absolute inset-x-0 bottom-0 p-5 text-center">

                                <h3 className="text-white text-xl font-semibold leading-snug">
                                    {material.name}
                                </h3>


                                {material.certified && (
                                    <p className="text-[#d6a354] text-sm mt-2 font-medium">
                                        Certified
                                    </p>
                                )}


                                <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                                    {material.specification}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


            <div className="mt-20 text-center animate-on-scroll">
                <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-3xl p-10 border border-blue-500/20">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                        Ready to Start Your Construction Project?
                    </h3>
                    <p className="text-slate-300 mb-6">
                        Let's discuss your requirements and provide a detailed project estimate
                    </p>
                    <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                        Get a Free Consultation →
                    </button>
                </div>
            </div>

            <style jsx>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                .animate-on-scroll {
                    opacity: 0;
                }
                
                .animate-fadeInUp {
                    animation: fadeInUp 0.8s ease-out forwards;
                }
            `}</style>

        </section >
    )
}

export default page