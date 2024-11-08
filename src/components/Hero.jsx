import React from 'react';
import TypingAnim from '../mini-components/TypingAnim';

const Hero = ({
  title = "WE WILL HELP YOU TO",
  subTitle = "Learn with Us",
  buttonText = "Get Started",
  background = "bg-[rgb(38,153,251)]",
  onClick,  // The onClick handler passed from the Home component
  str = ["Innovate.Succeed.", "Empowering Growth.", "Your Future, Our Focus."],
  titleClass = "text-white text-4xl md:text-7xl font-anton font-bold",
  subTitleClass = "text-white text-2xl md:text-3xl bg-black md:px-8 md:py-3 px-5 py-2 font-poppins font-semibold",
  buttonClass = "text-white bg-black px-3 py-2 md:px-5 md:py-3 rounded-lg font-poppins hover:opacity-80"
}) => {
  return (
    <div className={`w-full ${background} h-[80vh] md:h-[88vh] gap-4 flex flex-col justify-center items-center`}>
      <p className={subTitleClass}>{subTitle}</p>
      <h1 className={titleClass}>{title}</h1>
      <div className="typingAnimation md:text-5xl text-white text-2xl font-anton font-bold">
        <TypingAnim str={str} />
      </div>
      <button
        className={buttonClass}
        onClick={onClick} // Use the passed onClick prop
      >
        {buttonText}
      </button>
    </div>
  );
};

export default Hero;
