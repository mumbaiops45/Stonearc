"use client"
import React, { useEffect, useRef, useState } from "react"
import { values, teamMembers, expertiseAreas } from "../data/data"
import { useParallax } from "../../../hooks/useParallax"

const Page = () => {
    const [openIndex, setOpenIndex] = useState(0)
    const [hoveredIndex, setHoveredIndex] = useState(null)
    const sectionRef = useRef(null);
    const heroParallax = useParallax(0.2);
    const sectionParallax = useParallax(0.12);
    const slowParallax = useParallax(0.06);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add
                            ('animate-fadeInUp')
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
        <section>
            <div className="relative w-full min-h-[100svh] overflow-hidden">
                 <div className="absolute inset-0 "
                 style={{ transform: `translateY(${heroParallax}px) scale(1.1)`}}
                 >
                    <img
                        src="/about.jpg"
                        alt="About"
                        className="w-full h-full object-cover"
                    />
                </div>


                <div className="absolute inset-0 bg-black/50"></div>
                <div className="absolute inset-0 z-10 flex flex-col justify-center  items-start px-6 md:px-16 text-white z-10">

                    <button className="border border-white/40 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full mb-6 text-sm tracking-[4px] uppercase hover:bg-white hover:text-black transition duration-500">
                        About Us
                    </button>

                    <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold leading-tight animate-fadeUp">
                        About Stonearc <br />
                        Engineers
                    </h1>

                    <h4 className="mt-6 text-lg md:text-2xl max-w-2xl text-gray-200 leading-relaxed animate-fadeIn">
                        Engineering integrity. Architectural Vision.
                        Built on Trust.
                    </h4>
                </div>

                <style jsx>{`
        /* Premium Moving Background */
        @keyframes kenburns {
          0% {
            transform: scale(1) translate(0px, 0px);
          }
          25% {
            transform: scale(1.08) translate(-20px, -10px);
          }
          50% {
            transform: scale(1.12) translate(10px, -20px);
          }
          75% {
            transform: scale(1.08) translate(-10px, 10px);
          }
          100% {
            transform: scale(1.15) translate(20px, 0px);
          }
        }

        .animate-kenburns {
          animation: kenburns 20s ease-in-out infinite alternate;
        }

        /* Text Animation */
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(60px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeUp {
          animation: fadeUp 1.2s ease-out forwards;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 2s ease forwards;
        }
      `}</style>
            </div>
            <div className="w-full min-h-screen bg-[#0f172a] text-white px-6 md:px-16 py-20 flex flex-col lg:flex-row items-center justify-between gap-14 overflow-hidden">
                <div className="lg:w-1/2 space-y-6 z-10">
                    <button className="border border-white/30 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full text-sm tracking-[4px] uppercase hover:bg-white hover:text-black transition-all duration-500 shadow-lg">
                        WHO WE ARE
                    </button>
                    <h3 className="text-3xl md:text-4xl font-bold leading-tight">
                        A Company Built on <br />
                        <span className="text-blue-400">Engineering Principles</span>
                    </h3>
                    <div className="w-28 h-[3px] bg-blue-400 rounded-full"></div>

                    <p className="text-gray-300 text-md leading-relaxed max-w-2xl">
                        Stonearc Engineers was founded on a simple but powerful belief:
                        that great construction is not just about what you build,
                        but how you build it.
                    </p>

                    <p className="text-gray-300 text-md leading-relaxed max-w-2xl">
                        Over 15 years of operation, we have grown from a civil
                        construction firm into a full-spectrum engineering company —
                        offering construction, architecture, and PEB solutions to
                        clients across residential, commercial, institutional,
                        and industrial sectors.
                    </p>

                    <p className="text-gray-300 text-md leading-relaxed max-w-2xl">
                        We are a team of licensed structural engineers, experienced
                        architects, certified PEB fabricators, and disciplined site
                        managers who work together under one roof and one standard —
                        the Stonearc Standard.
                    </p>
                </div>

                <div className="lg:w-1/2 relative flex justify-center">
                    <div className="absolute -inset-4 bg-blue-500/20 blur-3xl rounded-3xl"></div>
                     <div className="relative overflow-hidden rounded-3xl shadow-2xl group max-w-[600px]"
                     style={{
                        transform: `translateY(${sectionParallax}px)`
                     }}
                     >

                        <img
                            src="/who.jpg"
                            alt="Who We Are"
                            className="w-full h-[480px] object-cover transform group-hover:scale-110 transition duration-700"
                        />


                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>


                        <div className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/20">
                            <h4 className="text-2xl font-bold text-white">15+</h4>
                            <p className="text-gray-200 text-sm tracking-wide">
                                Years of Excellence
                            </p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="relative w-full bg-[#0b1120] overflow-hidden py-24 px-6 md:px-16">
                 <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 blur-3xl rounded-full"
                 style={{
                    transform: `translateY(${heroParallax * 0.5})`
                 }}
                 />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-400/10 blur-3xl rounded-full"></div>

                <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">

                    <div className="relative group">


                          <div className="overflow-hidden rounded-[30px] shadow-2xl"
                          style={{
                            transform: `translateY(${slowParallax})`
                          }}
                          >
                            <img
                                src="/imgsrc.jpg"
                                alt="Our Story"
                                className="w-full h-[480px] object-cover transform group-hover:scale-110 transition duration-700"
                            />
                        </div>

                        <div className="absolute bottom-8 left-8 bg-white/10 backdrop-blur-xl border border-white/20 px-6 py-5 rounded-2xl shadow-xl">
                            <h2 className="text-4xl font-bold text-white">15+</h2>
                            <p className="text-gray-200 tracking-wide text-sm mt-1">
                                Years Building Trust
                            </p>
                        </div>
                    </div>
                    <div className="text-white">
                        <button className="border border-white/20 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full text-sm tracking-[4px] uppercase mb-8 hover:bg-white hover:text-black transition duration-500">
                            OUR STORY
                        </button>
                        <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
                            Where We Came From.
                            <br />
                            <span className="text-blue-400">
                                Where We Are Going.
                            </span>
                        </h2>
                        <div className="w-24 h-[3px] bg-blue-400 rounded-full mb-8"></div>
                        <div className="space-y-6 text-gray-300 text-md leading-relaxed">

                            <p>
                                Stonearc Engineers began with a commitment to doing
                                construction differently — with more transparency,
                                more accountability, and more technical rigour than
                                the industry was used to.
                            </p>

                            <p>
                                Our first projects were modest in scale but
                                uncompromising in execution. That reputation travelled.
                            </p>

                            <p>
                                Today, we work with real estate developers,
                                government bodies, manufacturing companies,
                                logistics firms, educational institutions,
                                and private homeowners — each receiving the same
                                level of attention, expertise, and dedication
                                that built our name.
                            </p>

                            <p>
                                Our ambition is to become the most trusted engineering
                                partner in our region — not the largest,
                                but the most reliable.
                            </p>

                        </div>
                    </div>
                </div>
            </div>


            <div className="relative bg-[#0b1120] py-24 px-6 md:px-16 overflow-hidden">
                <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full"></div>
                <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-400/10 blur-3xl rounded-full"></div>

                <div className="relative z-10 max-w-7xl mx-auto">


                    <button className="border border-white/20 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full text-sm tracking-[4px] uppercase text-white mb-10 hover:bg-white hover:text-black transition duration-500">
                        MISSION AND VISION
                    </button>


                    <div className="grid md:grid-cols-2 gap-10">

                        <div className="group relative bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-10 hover:border-blue-400/40 transition duration-500 overflow-hidden">


                            <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition duration-500"></div>


                            <div className="text-7xl font-bold text-white/10 absolute top-5 right-6">
                                01
                            </div>

                            <h2 className="text-4xl font-bold text-white mb-6 relative z-10">
                                Our Mission
                            </h2>

                            <div className="w-20 h-[3px] bg-blue-400 rounded-full mb-6 relative z-10"></div>

                            <p className="text-gray-300 text-md leading-relaxed relative z-10">
                                To deliver construction, architecture, and PEB projects
                                that meet the highest standards of structural safety,
                                design quality, and project discipline — on time and
                                within budget — every single time.
                            </p>
                        </div>


                        <div className="group relative bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-10 hover:border-cyan-400/40 transition duration-500 overflow-hidden">


                            <div className="absolute inset-0 bg-cyan-400/5 opacity-0 group-hover:opacity-100 transition duration-500"></div>


                            <div className="text-7xl font-bold text-white/10 absolute top-5 right-6">
                                02
                            </div>

                            <h2 className="text-4xl font-bold text-white mb-6 relative z-10">
                                Our Vision
                            </h2>

                            <div className="w-20 h-[3px] bg-cyan-400 rounded-full mb-6 relative z-10"></div>

                            <p className="text-gray-300 text-md leading-relaxed relative z-10">
                                To be the benchmark engineering firm that clients
                                recommend without being asked, because we always
                                deliver more than we promise.
                            </p>
                        </div>

                    </div>
                </div>
            </div>



            <div className="relative bg-[#06121f]  px-6 md:px-16 overflow-hidden">
                <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 blur-3xl rounded-full" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-400/10 blur-3xl rounded-full" />
                <div className="relative max-w-5xl mx-auto">
                    <div className="text-center mb-14">
                        <button className="border border-white/20 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full text-sm tracking-[4px] uppercase text-white hover:bg-white hover:text-black transition">
                            OUR VALUES
                        </button>

                        <h2 className="text-4xl md:text-6xl font-bold text-white mt-8">
                            The <span className="text-blue-400">Stonearc</span> Standard
                        </h2>

                        <div className="w-28 h-[3px] bg-blue-400 rounded-full mx-auto mt-6" />
                    </div>

                    <div className="space-y-5">

                        {values.map((item, index) => {
                            const isOpen = openIndex === index

                            return (
                                <div
                                    key={index}
                                    className="border border-white/10 rounded-2xl bg-white/5 backdrop-blur-xl overflow-hidden transition"
                                >
                                    <button
                                        onClick={() => toggle(index)}
                                        className="w-full flex justify-between items-center p-5 hover:bg-white/5 transition"
                                    >
                                        <div className="font-semibold text-white text-left">
                                            {item.title}
                                        </div>
                                        <div
                                            className={`text-white text-2xl transition-transform duration-300 ${isOpen ? "rotate-45" : ""
                                                }`}
                                        >
                                            +
                                        </div>

                                    </button>

                                    <div
                                        className={`grid transition-all duration-500 ease-in-out ${isOpen
                                            ? "grid-rows-[1fr] opacity-100"
                                            : "grid-rows-[0fr] opacity-0"
                                            }`}
                                    >
                                        <div className="overflow-hidden px-5 pb-6">
                                            <div className="grid md:grid-cols-2 gap-6 items-center">
                                                <p className="text-gray-300 leading-relaxed">
                                                    {item.content}
                                                </p>

                                                <div className="w-full h-40 md:h-48 rounded-xl overflow-hidden shadow-lg">
                                                    <img
                                                        src={item.image}
                                                        alt={item.title}
                                                        className="w-full h-full object-cover hover:scale-105 transition duration-500"
                                                    />
                                                </div>

                                            </div>
                                        </div>

                                    </div>

                                </div>
                            )
                        })}

                    </div>

                </div>

            </div>


            <section ref={sectionRef} className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white py-28 px-6 overflow-hidden">

                <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-0 left-0 w-full h-full" style={{
                        backgroundImage: `radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)`,
                    }} />
                    <div className="absolute bottom-0 right-0 w-full h-full" style={{
                        backgroundImage: `radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)`,
                    }} />
                </div>


                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                        backgroundSize: '50px 50px'
                    }} />
                </div>

                <div className="max-w-7xl mx-auto relative z-10">

                    <div className="text-center mb-20 animate-on-scroll">
                        <div className="inline-flex items-center gap-3 mb-4">
                            <div className="w-12 h-px bg-gradient-to-r from-transparent to-blue-500" />
                            <span className="text-blue-500 tracking-[6px] font-semibold text-sm uppercase">
                                OUR TEAM
                            </span>
                            <div className="w-12 h-px bg-gradient-to-l from-transparent to-blue-500" />
                        </div>

                        <h2 className="text-4xl md:text-4xl lg:text-5xl  font-bold mt-4">
                            The People Behind  Every Project
                        </h2>
                        
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-6 rounded-full" />

                        <p className="text-slate-300 mt-8 max-w-3xl mx-auto leading-relaxed text-lg">
                            The Stonearc team is made up of engineers, architects, project managers, fabricators,
                            and site supervisors who bring deep domain expertise and a shared commitment to delivering results.
                        </p>
                    </div>


                    <div className="mb-20 animate-on-scroll">
                        <div className="relative bg-gradient-to-br from-blue-600/10 to-purple-600/10 backdrop-blur-sm border border-blue-500/20 rounded-3xl p-8 md:p-10 shadow-2xl overflow-hidden">
                            <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl" />
                            <div className="absolute bottom-0 left-0 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl" />

                            <div className="relative flex items-start gap-6 flex-col md:flex-row">
                                <div className="flex-shrink-0">
                                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center shadow-lg">
                                        <span className="text-3xl">👥</span>
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                                        Dedicated Project Management
                                    </h3>
                                    <p className="text-slate-300 leading-relaxed text-lg">
                                        Every project is assigned a dedicated project manager who owns the timeline, budget, and quality —
                                        and is accountable to the client directly.
                                    </p>
                                </div>
                                <div className="flex-shrink-0">
                                    <div className="px-4 py-2 bg-blue-500/20 rounded-full border border-blue-500/30">
                                        <span className="text-blue-400 font-semibold">100% Accountable</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
                        {teamMembers.map((member, index) => (
                            <div
                                key={index}
                                className="group animate-on-scroll"
                                style={{ animationDelay: `${index * 0.1}s` }}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 transition-all duration-500 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10">

                                    <div className="relative h-64 overflow-hidden">
                                        <div className={`absolute inset-0 bg-gradient-to-br ${member.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-multiply`} />
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />


                                        
                                    </div>


                                    <div className="p-6 text-center">
                                        <h3 className="text-xl font-bold text-white mb-1">
                                            {member.name}
                                        </h3>
                                        <p className="text-blue-400 font-semibold text-sm mb-2">
                                            {member.role}
                                        </p>
                                        <p className="text-slate-400 text-sm mb-3">
                                            {member.expertise}
                                        </p>
                                        <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-slate-800 border border-slate-700">
                                          
                                            <span className="text-slate-300 text-xs font-medium">{member.experience} Experience</span>
                                        </div>


                                        <div className={`mt-4 flex justify-center gap-2 transition-all duration-300 ${hoveredIndex === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>


                    <div className="animate-on-scroll">
                        <div className="text-center mb-12">
                            <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                Our Core Expertise
                            </h3>
                            <p className="text-slate-400 mt-4">Backed by years of experience and proven track record</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {expertiseAreas.map((area, index) => (
                                <div
                                    key={index}
                                    className="group relative p-6 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:-translate-y-1"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-${area.color}-600/20 to-${area.color}-500/10 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform`}>
                                            {area.icon}
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="text-lg font-bold text-white mb-1">
                                                {area.title}
                                            </h4>
                                            <p className="text-slate-400 text-sm mb-2">
                                                {area.description}
                                            </p>
                                            <div className="inline-flex items-center gap-1 px-2 py-1 rounded bg-blue-500/10 border border-blue-500/20">
                                                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                                                <span className="text-xs text-blue-400 font-medium">{area.stat}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
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
            </section>


        </section>
    )
}

export default Page
