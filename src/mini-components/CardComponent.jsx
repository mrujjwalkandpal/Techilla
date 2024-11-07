import React from 'react'



const CardComponent = ({ ExtraClass, title, price, img, list, btn }) => {
  return (
    <div className={`shadow-2xl h-[500px] hover:scale-105 my-8 gap-11 pt-2 duration-300 flex flex-col justify-center items-center mx-5 md:mx-0 ${ExtraClass} `}>
      {img}
      <h2 className='text-black font-anton text-3xl'>{title}</h2>
      <h1 className='text-black font-poppins text-5xl font-extrabold'>{price}</h1>
      
      <ol className='text-black font-poppins p-2'>
        <li className='border-b border-slate-300'>{list[1]}</li>
        <li className='border-b border-slate-300'>{list[2]}</li>
        <li className='border-b border-slate-300'>{list[3]}</li>
      </ol>
      {btn}
    </div>
  )
}

export default CardComponent