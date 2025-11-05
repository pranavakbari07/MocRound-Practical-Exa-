import React from 'react'

export default function About() {
    return (
        <div>
            <div className="about mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 pt-12 sm:pt-16 lg:pt-24 text-white" id="About">
                <h1 className="h1 text-3xl sm:text-4xl lg:text-5xl font-bold cursor-pointer hover:-translate-y-2 transition">About</h1>
                <div className="mt-6 sm:mt-8 lg:mt-10 flex items-center gap-3">
                    <div className="w-24 sm:w-40 lg:w-64 h-px rounded-full bg-white"></div>
                    <p className="flex-1 text-base sm:text-lg lg:text-xl leading-relaxed">As passionate web developers, we create powerful, high-performing websites that blend creativity with technology. While designers shape the look, we build the engine — delivering clean code, lightning-fast speed, secure frameworks, and seamless functionality. Our goal is to craft scalable, future-ready platforms that not only look stunning but also drive results and grow with your business.</p>
                </div>
            </div>
        </div>
    )
}
