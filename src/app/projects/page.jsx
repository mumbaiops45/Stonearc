import React from 'react'

const page = () => {
  return (
    <section>
    {/* <div>
      <h2>Our Projects</h2>
      <p>Every structure we build carries our name. So we build every one to the highest standard.</p>
    </div> */}
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
                            Our Projects <br />

                            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                                Ground-Breaking to Handover
                            </span>
                        </h1>


                        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mt-6 rounded-full animate-fadeIn" />
                    </div>
                </div>
            </div>
    </section>
    
  )
}

export default page
