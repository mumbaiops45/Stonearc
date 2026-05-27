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
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black">


      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImage
              ? "opacity-100 z-10"
              : "opacity-0 z-0"
          }`}
        >
          <div
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[7000ms] ease-linear ${
              index === currentImage
                ? "scale-110"
                : "scale-100"
            }`}
            style={{
              backgroundImage: `url(${image})`,
            }}
          />
        </div>
      ))}


      <div className="absolute inset-0 bg-black/40 z-20" />

      <div
        className="absolute inset-0 opacity-[0.08] z-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

  
      <div className="relative z-30 flex min-h-screen items-center pt-24 pb-14">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-10">

          <div className="grid items-center gap-14 lg:grid-cols-2">


            <div className="max-w-2xl text-white">


              <div className="mb-6 flex items-center gap-3">
                <div className="h-[2px] w-10 sm:w-14 bg-amber-500" />

                <span className="text-[10px] sm:text-xs md:text-sm font-semibold uppercase tracking-[5px] sm:tracking-[8px] text-amber-400">
                  {currentContent.span}
                </span>
              </div>


              <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-4xl lg:text-4xl xl:text-4xl">
                {currentContent.heading}
              </h1>


              <p className="mb-10 max-w-xl text-sm leading-relaxed text-white sm:text-base md:text-md">
                {currentContent.para1}
              </p>


              <div className="flex flex-col gap-4 sm:flex-row">

                <button className="group relative overflow-hidden rounded-full bg-amber-600 px-8 py-4 text-sm sm:text-base font-semibold text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-amber-700">

                  <span className="relative z-10">
                    Get a Free Estimate
                  </span>

                  <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </button>


                <button className="group rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm sm:text-base font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-white hover:bg-white hover:text-black">

                  View Our Projects

                  <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </button>
              </div>

            </div>


          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-40 flex -translate-x-1/2 gap-3">

        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`rounded-full transition-all duration-300 ${
              index === currentImage
                ? "h-1.5 w-10 bg-amber-500 sm:w-14"
                : "h-1.5 w-5 bg-white/40 hover:bg-white/70 sm:w-7"
            }`}
          />
        ))}

      </div>
    </section>
  )
}

export default Hero