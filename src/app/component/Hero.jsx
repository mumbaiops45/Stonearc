"use client"

import React, { useEffect, useState } from "react"
import { content } from "../data/data"

const images = [
    "/hero.jpg",
    "/hero1.jpg",
    "/hero2.jpg",
]

const Hero = () => {
    const [currentImage, setCurrentImage] = useState(0)
    const currentContent = content[currentImage]

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length)
        }, 3000)

        return () => clearInterval(interval)
    }, [])

    return (
        <section className="relative h-screen w-full overflow-hidden">

            {images.map((image, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-1000 ease-out ${
                        index === currentImage ? "opacity-100" : "opacity-0"
                    }`}
                >
                    <div
                        className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[7000ms] ease-out ${
                            index === currentImage
                                ? "scale-110 animate-heroZoom"
                                : "scale-100"
                        }`}
                        style={{ backgroundImage: `url(${image})` }}
                    />
                </div>
            ))}

             <div className="absolute inset-0 bg-black/50"></div>
            <div
                className="absolute inset-0 opacity-20 z-[3] pointer-events-none"
                style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 1px)`,
                    backgroundSize: "40px 40px",
                }}
            />
            <div className="relative z-10 h-full flex items-center">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
                    <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
                        <div className="text-white">

                            <div className="inline-flex items-center gap-2 mb-6">
                                <div className="w-12 h-[2px] bg-blue-500" />
                                <span className="uppercase tracking-[6px] sm:tracking-[8px] text-blue-400 text-xs sm:text-sm font-semibold">
                                    {currentContent.span}
                                </span>
                            </div>

                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-8xl font-bold leading-[1.1] tracking-tight mb-6">
                                {currentContent.heading}
                            </h1>

                            <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed mb-10 max-w-xl">
                                {currentContent.para1}
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">

                                <button className="group relative bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-2xl hover:shadow-blue-500/25 hover:scale-105">
                                    <span className="relative z-10">Get a Free Estimate</span>
                                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </button>

                                <button className="group border-2 border-white/30 hover:border-white bg-white/5 backdrop-blur-sm hover:bg-white hover:text-black px-8 py-4 rounded-full font-semibold transition-all duration-300">
                                    View Our Projects
                                    <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
                                </button>

                            </div>
                        </div>

                        
                        <div className="w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-gray-100 p-5 sm:p-6 md:p-8 mx-auto lg:mx-0">

                            <div className="text-center mb-8">
                                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
                                    Performance Overview
                                </h2>
                            </div>

                            <div className="space-y-6">

                                <div>
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-sm font-semibold text-gray-700">
                                            On-Time Delivery Rate
                                        </span>
                                        <span className="text-sm font-bold text-blue-600">98%</span>
                                    </div>
                                    <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                                        <div className="h-full w-[98%] bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
                                    </div>
                                </div>

                                <div>
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-sm font-semibold text-gray-700">
                                            Client Satisfaction
                                        </span>
                                        <span className="text-sm font-bold text-green-600">99%</span>
                                    </div>
                                    <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                                        <div className="h-full w-[99%] bg-gradient-to-r from-green-500 to-green-700 rounded-full"></div>
                                    </div>
                                </div>

                                <div>
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-sm font-semibold text-gray-700">
                                            Avg. Cost Saving Delivered
                                        </span>
                                        <span className="text-sm font-bold text-purple-600">18%</span>
                                    </div>
                                    <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                                        <div className="h-full w-[18%] bg-gradient-to-r from-purple-500 to-purple-700 rounded-full"></div>
                                    </div>
                                </div>

                            </div>

                            <div className="grid grid-cols-3 gap-3 sm:gap-5 mt-8 pt-6 border-t border-gray-200 text-center">

                                <div className="bg-gray-50 rounded-2xl py-4 px-3">
                                    <div className="text-xl sm:text-2xl font-bold text-gray-900">200+</div>
                                    <div className="text-xs text-gray-500 mt-1">
                                        Delivered Across Sectors
                                    </div>
                                </div>

                                <div className="bg-gray-50 rounded-2xl py-4 px-3">
                                    <div className="text-xl sm:text-2xl font-bold text-gray-900">15+</div>
                                    <div className="text-xs text-gray-500 mt-1">
                                        Years of Engineering Excellence
                                    </div>
                                </div>

                                <div className="bg-gray-50 rounded-2xl py-4 px-3">
                                    <div className="text-xl sm:text-2xl font-bold text-gray-900">98%</div>
                                    <div className="text-xs text-gray-500 mt-1">
                                        On-Schedule Track Record
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>

           
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentImage(index)}
                        className={`transition-all duration-300 rounded-full min-h-[10px] ${
                            index === currentImage
                                ? "w-10 sm:w-12 h-1.5 bg-blue-500"
                                : "w-5 sm:w-6 h-1.5 bg-white/50 hover:bg-white/70"
                        }`}
                    />
                ))}
            </div>

        </section>
    )
}

export default Hero
