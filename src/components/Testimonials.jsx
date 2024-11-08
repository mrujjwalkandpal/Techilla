import React from 'react'


const Testimonials = ({ img, h1, p }) => {
    return (
      <div className='bg-white px-10 py-10 md:my-0 my-10 rounded-lg shadow-xl hover:scale-105 duration-500'>
        <div className='flex flex-col items-center'>
          <div className='mb-4'>
            <img className="object-cover mx-auto w-[120px] h-[120px] rounded-full" src={img} alt="Testimonial" />
          </div>
          <h1 className='text-black text-2xl sm:text-2xl md:text-3xl font-anton mb-4'>{h1}</h1>
          <div className='bg-slate-200 w-full rounded-lg p-4'>
            <p className='text-sm sm:text-base text-black font-poppins'>{p}</p>
          </div>
        </div>
      </div>
    )
  }
  

export default Testimonials