import React from 'react'

export default function Home() {
  return (
    <div>
      <div
        id="Home"
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 
                   flex flex-col-reverse lg:flex-row 
                   items-center gap-6 sm:gap-10 lg:gap-16 
                   py-10 sm:py-14 lg:py-20"
      >
        {/* Text Section */}
        <div className="flex flex-col justify-center 
                        text-center lg:text-left 
                        w-full lg:w-1/2">
          <h3 className="text-white text-2xl sm:text-3xl lg:text-4xl">
            Hello,
          </h3>
          <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl py-4">
            I'm{" "}
            <span className="name text-[#F5CC6D] font-bold text-3xl sm:text-4xl lg:text-5xl px-2">
              Meet
            </span>
          </h1>
          <h2 className="text-white text-xl sm:text-2xl lg:text-4xl">
            Full Stack Developer
          </h2>
          <a href="#Contact" className="mt-6 sm:mt-8">
            <button className="button cursor-pointer 
                               text-base sm:text-lg lg:text-xl 
                               font-semibold text-white 
                               border-2 rounded-lg py-2 px-4 
                               hover:scale-110 transition">
              Contact Me
            </button>
          </a>
        </div>

        {/* Image Section */}
        <div className="flex justify-center items-center w-full lg:w-1/2 mb-6 lg:mb-0">
          <img
            src="/cartoon.png"
            alt=""
            className="w-48 sm:w-60 md:w-72 lg:w-[28rem] max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  )
}
