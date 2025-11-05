import React from 'react'

export default function Skill() {
  return (
    <div>
      <div class="my-skill mx-80 py-30 text-white text-center" id="Skills">
        <h1 class="h1 text-5xl font-bold cursor-pointer hover:translate-y-[-10px]">My Skills</h1>  
        <div class="flex flex-wrap gap-10 justify-center mt-20">
            <div class="skill border-1 w-40 h-40 font-semibold rounded-2xl text-md flex flex-col justify-end pb-4 items-center hover:text-black hover:translate-y-[-10px]">
                <img src="html.png" alt="" class="w-30" />
                HTML
            </div>
            <div class="my bg-white text-black font-semibold w-40 h-40 rounded-2xl text-md flex flex-col justify-end pb-4 items-center hover:text-white hover:border-1 hover:translate-y-[-10px]">
                <img src="css.png" alt="" class="w-25" />
                CSS
            </div>
            <div class="skill border-1 w-40 h-40 font-semibold rounded-2xl text-md flex flex-col justify-center pb-4 items-center hover:text-black hover:translate-y-[-10px]">
                <img src="tailwind css.png" alt="" class="w-30" />
                Tailwind CSS
            </div>
            <div class="skill border-1 w-40 h-40 font-semibold rounded-2xl text-md flex flex-col gap-3 pb-4 justify-end items-center hover:text-black hover:translate-y-[-10px]">
                <img src="bootstrap.png" alt="" class="w-23" />
                Bootstrap
            </div>
            <div class="skill border-1 w-40 h-40 font-semibold rounded-2xl text-md flex flex-col gap-3 pb-4 justify-end items-center hover:text-black hover:translate-y-[-10px]">
                <img src="react.png" alt="" class="w-20" />
                React JS
            </div>
            <div class="skill border-1 w-40 h-40 font-semibold rounded-2xl text-md flex flex-col gap-3 pb-4 justify-end items-center hover:text-black hover:translate-y-[-10px]">
                <img src="node js.png" alt="" class="w-20" />
                Node JS
            </div>
        </div>    
    </div>
    </div>
  )
}
