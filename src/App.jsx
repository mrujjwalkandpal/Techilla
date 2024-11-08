import React from 'react';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import ScrollOnTop from './mini-components/ScrollOnTop.jsx'; // Ensure this matches the actual file name

import Home from './pages/Home';
import Services from './pages/Services.jsx';

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <ScrollOnTop /> {/* Ensure the component name is correct */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/services' element={<Services />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
