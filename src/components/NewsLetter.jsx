import React from 'react'

const NewsLetter = () => {
  return (
    <>
      <div className="h-[400px] md:h-[250px] bg-bgcolor flex flex-col md:flex-row justify-center items-center p-4 py-12 md:px-32 gap-4" id="container">
        {/* Text content container */}
        <div className='w-full md:w-[50%] flex flex-col gap-4'>
            <h1 className='text-white text-4xl font-anton'>
                Sign Up for Our Newsletter
            </h1>
            <p className='text-white text-1xl font-poppins'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse consequuntur, quod quae quos illum dolore.
            </p>
        </div>
        
        {/* Placeholder for the second half */}
        <div className='w-full md:w-[50%] flex-col  flex justify-center md:justify-start'>
            <input className='p-6 rounded-t-lg text-center text-md text-md font-poppins' type="text" placeholder="Enter Your Email for our Newsletter -"/>
            <button className='text-white  bg-black px-5 py-3 rounded-b-lg font-poppins hover:opacity-80'>Subscribe to Newsletter</button>
        </div>
      </div> 
    </>
  )
}

export default NewsLetter
