import React from 'react'
import './index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'

import Home from './pages/Home';
import Services from './pages/Services.jsx'
const App = () => {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/services' element={<Services/>}/>
        </Routes>
        <Footer/>
      </Router>

    </>
  )
}

export default App