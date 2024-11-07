import React from 'react'
import { Link } from 'react-router-dom'

const NavItems = ({to, label}) => {
  return (
    <li >
      <Link className="text-md font-poppins text-white font-bold hover:opacity-85" to ={to}>{label}</Link>
      
    </li>
  )
}

export default NavItems