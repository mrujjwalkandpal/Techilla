import React from 'react'
import CardComponent from '../mini-components/CardComponent'
import { LuMonitorStop } from "react-icons/lu";
import { MdDesignServices } from "react-icons/md";
import { BsGraphUpArrow } from "react-icons/bs";


const Cards = () => {
    const btn = (
        <button className='text-white w-full bg-black px-5 py-3 rounded-b-lg font-poppins hover:opacity-80'>
            Continue
        </button>
    );

    return (
        <>
            <h1 className='text-center mt-12 font-anton text-6xl'>Our Services</h1>       
            <div className="max-w-[1240px] gap-8 mx-auto my-6 w-full h-[1500px] md:h-[450px] md:grid grid-cols-3">
                <CardComponent 
                    title={"Web Development"} 
                    price={"$169"} 
                    img= {<LuMonitorStop className='w-[100px] h-auto bg-slate-100 p-3 rounded-full '/>}
                    list={{
                        1:"Build. Scale. Innovate.",
                        2:"Code for Success.",
                        3:"Seamless Web Experiences.",
                    }} 
                    btn={btn} 
                />
                <CardComponent 
                    ExtraClass={"bg-gray-100"} 
                    title={"Designing"} 
                    img={<MdDesignServices className='w-[100px] h-auto bg-white p-3 rounded-full '/>}
                    price={"$129"}  
                    list={{
                        1:"Creativity Meets Functionality.",
                        2:"Designs That Inspire.",
                        3:"Visualize Your Vision.",
                    }} 
                    btn={btn} 
                />
                <CardComponent 
                    title={"Marketing"} 
                    price={"$89"} 
                    img={<BsGraphUpArrow className='w-[100px] h-auto bg-slate-100 p-3 rounded-full '/>}
                    list={{
                        1:"Drive Engagement. Boost Growth.",
                        2:"Reach Audiences. Maximize Impact.",
                        3:"Optimize Campaigns. Amplify Results.",
                    }} 
                    btn={btn} 
                />
            </div>
        </>
    )
}

export default Cards
