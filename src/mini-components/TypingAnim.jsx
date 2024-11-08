import React from 'react';
import { ReactTyped } from "react-typed";

const TypingAnim = ({ str }) => {  // Destructure str from props
  return (
    <div>
      <ReactTyped strings={str} typeSpeed={70} backSpeed={70} loop />
    </div>
  );
};

export default TypingAnim;
