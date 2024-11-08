import React, { useState } from 'react'
import NavItems from '../mini-components/NavItems'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
const Navbar = () => {
  let [menuOpen, setMenuOpen] = useState(false)
  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <header className='bg-[#2699fb] p-2 border-b-2 border-white'>
      <nav className=' flex max-w-[1240px] justify-between mx-auto items-center'>
        <div className="logo bg-black px-16 py-3 text-3xl text-white font-extrabold font-anton cursor-pointer hover:opacity-85 rounded-2xl">
          TechiLLA
        </div>

        <ul className='hidden md:flex justify-between space-x-5'>

          <NavItems to="/" label="Home" />
          <NavItems to="/services" label="Services" />
          <NavItems to="/resources" label="Resources" />
          <NavItems to="/about" label="About" />
          <NavItems to="/contact" label="Contact" />

        </ul>
        {/* Responsive */}
        <ul className={`md:hidden flex flex-col mr-6 justify-between p-6 gap-3 ${menuOpen ? 'block' : 'hidden'} absolute bg-blue-400 right-6 top-[80px]`}>
          <NavItems to="/" label="Home" />
          <NavItems to="/services" label="Services" />
          <NavItems to="/resources" label="Resources" />
          <NavItems to="/about" label="About" />
          <NavItems to="/contact" label="Contact" />

        </ul>
        <AiOutlineMenu onClick={toggleMenu} className={`text-white text-2xl mr-5 block md:hidden ${menuOpen ? "hidden" : "block"}`} />
        <AiOutlineClose onClick={toggleMenu} className={`text-white text-2xl mr-5 block md:hidden ${menuOpen ? "block" : "hidden"}`} />

      </nav>
    </header>

  )
}

export default Navbar