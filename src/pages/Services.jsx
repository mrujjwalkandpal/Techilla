import React from 'react';
import Hero from '../components/Hero';
import HorizCard from '../mini-components/HorizCard';
import { LuMonitorStop } from "react-icons/lu";
import { FaChalkboardTeacher, FaRocket, FaPlug, FaUserCircle, FaTools, FaCogs, FaSearchDollar } from "react-icons/fa"; // Importing icons directly

const Services = () => {
    const ButtonClick = () => {
        console.log('Button clicked'); // Check if this is logged when the button is clicked
        
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
                subTitle="Empowering Your Business"
                buttonText="Learn More"
                background="bg-[rgb(38,153,251)]"
                str={["Solutions That Work.", "Transforming Ideas Fast.", "Excellence in Action."]}
                onClick={ButtonClick} // Pass the ButtonClick function here
                titleClass="text-white text-3xl md:text-6xl font-anton font-bold"
                subTitleClass="text-white text-xl md:text-2xl bg-black md:px-8 md:py-3 px-5 py-2 font-poppins font-semibold"
                buttonClass="text-white bg-black px-3 py-2 md:px-5 md:py-3 rounded-lg font-poppins hover:opacity-80"
            />
            <div className='max-w-[1240px] mx-8 md:mx-auto h-[62rem] md:h-[20rem] my-10'>
                <h1 className='text-5xl font-anton my-10 text-black text-center font-extrabold' id="1">
                    What Do We Actually Do?
                </h1>
                <div className='md:grid grid-cols-3 gap-x-4'>
                    <HorizCard h2="Tailored Solutions" p="Personalized solutions for your business needs." logo={LuMonitorStop} />
                    <HorizCard h2="Expert Guidance" p="Experienced team providing strategic insights." logo={FaChalkboardTeacher} />
                    <HorizCard h2="Innovative Technology" p="Leveraging cutting-edge technologies for growth." logo={FaRocket} />
                    <HorizCard h2="Scalable Services" p="Services that grow with your business." logo={FaPlug} />
                    <HorizCard h2="Customer-Centric Approach" p="Putting your needs at the forefront." logo={FaUserCircle} />
                    <HorizCard h2="Seamless Integration" p="Smooth integration with existing systems." logo={FaTools} />
                    <HorizCard h2="Continuous Support" p="Ongoing maintenance and support." logo={FaCogs} />
                    <HorizCard h2="Proven Results" p="Successful projects with measurable impact." logo={FaSearchDollar} />
                    <HorizCard h2="Affordable and Efficient" p="High-quality services at competitive prices." logo={FaSearchDollar} />
                </div>
            </div>
        </>
    );
};

export default Services;
