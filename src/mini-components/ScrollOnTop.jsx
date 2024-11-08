import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollOnTop = () => {
  const location = useLocation();

  useEffect(() => {
    // This will scroll the page to the top on each route change
    window.scrollTo(0, 0);
  }, [location]);

  return null; // No UI to render, just the effect
};

export default ScrollOnTop;
