import React from 'react';
import Hero from '../components/Hero';
import HorizCard from '../mini-components/HorizCard';
import Testimonials from '../components/Testimonials';
import Person1 from '../assets/Persons/Person1.webp'
import Person2 from '../assets/Persons/Person2.png'
import Person3 from '../assets/Persons/Person3.webp'
import Cards from '../components/Cards';

import { LuMonitorStop } from "react-icons/lu";
import { FaChalkboardTeacher, FaRocket, FaPlug, FaUserCircle, FaTools, FaCogs, FaSearchDollar } from "react-icons/fa"; // Importing icons directly

const Services = () => {
    const ButtonClick = () => {        
        const targetElement = document.getElementById('1');
        if (targetElement) {
            console.log('Scrolling to element:', targetElement); // Ensure target element is found
            targetElement.scrollIntoView({ behavior: 'smooth' });
        } else {
            console.error("Target element with id '1' not found!");
        }
    };

    return (
        <>
            <Hero
                title="Make Ideas into Reality"
                subTitle="/Services"
                buttonText="Learn More"
                background="bg-[rgb(38,153,251)]"
                str={["Solutions That Work.", "Transforming Ideas Fast.", "Excellence in Action."]}
                onClick={ButtonClick} // Pass the ButtonClick function here
                titleClass="text-white text-3xl md:text-6xl font-anton font-bold"
                subTitleClass="text-white text-xl md:text-2xl bg-black md:px-8 md:py-3 px-5 py-2 font-poppins font-semibold"
                buttonClass="text-white bg-black px-3 py-2 md:px-5 md:py-3 rounded-lg font-poppins hover:opacity-80"
            />
            <div className='max-w-[1240px] mx-8 md:mx-24 h-[62rem]  md:h-[20rem] my-10 '>
                <h1 className='text-5xl font-anton my-10 text-black text-center font-extrabold' id="1">
                    What Do We Actually Do?
                </h1>
                <div className='md:grid grid-cols-3 gap-x-4'>
                    <HorizCard h2="Tailored Solutions" p="Personalized solutions for your business needs." logo={LuMonitorStop} />
                    <HorizCard h2="Expert Guidance" p="Experienced team providing strategic insights." logo={FaChalkboardTeacher} />
                    <HorizCard h2="Innovative Tech" p="Leveraging cutting-edge technologies for growth." logo={FaRocket} />
                    <HorizCard h2="Scalable Services" p="Services that grow with your business and makes great." logo={FaPlug} />
                    <HorizCard h2="Customer Approach" p="Putting your needs at the forefront and in Priority." logo={FaUserCircle} />
                    <HorizCard h2="Seamless Process" p="Smooth integration with existing systems." logo={FaTools} />
                    <HorizCard h2="Continuous Support" p="Ongoing maintenance and support and Updates ." logo={FaCogs} />
                    <HorizCard h2="Proven Results" p="Successful projects with measurable impact." logo={FaSearchDollar} />
                    <HorizCard h2="Affordable Prices" p="High-quality services at competitive prices." logo={FaSearchDollar} />
                </div>
            </div>
            <div className='bg-bgcolor  items-center md:h-[45rem] mt-[11rem] w-full p-10 md:px-24'>
            <h1 className='text-6xl text-white font-anton text-center mb-10'>
                Testimonials.
            </h1>
                <div className='md:grid grid-cols-3 gap-x-10'>
                    <Testimonials 
                        h1="Richard Kenton"
                        p="This service has been absolutely amazing! It helped me boost my productivity and stay focused on my goals. I’ve been able to manage my time much better, and I feel more confident about my work. The tools provided are easy to use and really effective. "
                        img={Person1}
                    
                    />
                    <Testimonials
                        h1= 'Jane Smith'
                        p='A game-changer! The strategies provided have improved my study habits significantly, and my grades have skyrocketed. Not only did I get better at managing my assignments, but I also learned how to stay focused for longer periods!'
                        img={Person2}
                    />
                    <Testimonials
                        h1= 'Michael Lee'
                        p='I have tried several similar services before, but this one truly stands out. The personalized approach made all the difference for me. The advice wasn’t just generic—it was tailored to my specific needs, helping me tackle challenges I was facing.'
                        img={Person3}
                    />
                </div>  
            </div>
        <Cards/>
        </>
    );
};

export default Services;
