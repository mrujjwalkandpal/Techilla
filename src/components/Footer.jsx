import React from 'react'
import NavItems from '../mini-components/NavItems'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <div className="w-full md:flex justify-between items-center py-10 md:gap-1 bg-black h-[120rem]md:h-[350px]  mb-0" id="container">
        <div className=' w-100% md:w-[80%] flex flex-col justify-center gap-7 border-r border-white px-10 md:px-20 my-10' >
        <Link to="/"><div className="logo bg-white px-5 py-3 text-3xl text-black font-extrabold font-anton cursor-pointer hover:opacity-85 rounded-2xl w-full text-center">
            TechiLLA
          </div>
          </Link>


          <p className='text-white'>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quae omnis molestias quos impedit perspiciatis nisi a mollitia eligendi nostrum, numquam placeat molestiae ab suscipit dicta minima at tenetur, dolorum vitae soluta animi ex. Praesentium dolor, doloremque odio laudantium eum, nobis nesciunt dolore quia reiciendis quasi sint, rem deleniti iure?
          </p>
        </div>
        <div className='w-[100%] md:w-[20%]'>
        <ul className='flex flex-col justify-center items-start px-10 md:px-20 '>
            <NavItems to="/" label="> Home"/>
            <NavItems to="/services" label="> Services"/>
            <NavItems to="/resources" label="> Resources"/>
            <NavItems to="/about" label="> About"/>
            <NavItems to="/contact" label="> Contact"/>

        </ul>
        </div>

    
      </div>
    </>
  )
}

export default Footer