import React from 'react'
import TypingAnim from '../mini-components/TypingAnim'

const Hero = () => {
  return (
    <>
    <div className='w-full bg-[rgb(38,153,251)] h-[80vh] md:h-[88vh] gap-4 flex flex-col justify-center items-center'>
        <p className='text-white text-2xl md:text-3xl bg-black md:px-8 md:py-3 px-5 py-2 font-poppins font-semibold '>  Learn with Us</p>
        <h1 className='text-white text-4xl md:text-7xl font-anton font-bold'>WE WILL HELP YOU TO   
        </h1>
        <div className="typingAnimation md:text-5xl text-white text-2xl font-anton font-bold' ">
            <TypingAnim/>
            </div>
        <button className='text-white bg-black px-3 py-2 md:px-5 md:py-3 rounded-lg font-poppins hover:opacity-80'>Get Started</button>
    </div>
    </>
  )
}

export default Hero