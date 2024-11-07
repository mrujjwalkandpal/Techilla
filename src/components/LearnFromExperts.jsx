import React from 'react'
import Img from '../assets/img1.png'

const LearnFromExperts = () => {
    return (
        <>
            <div id="container" className='max-w-[1240px] w-full mx-auto my-10 bg-white flex gap-5 flex-col md:flex-row px-6 py-6'>
                {/* Image container */}
                <div className='w-full md:w-[50%] flex justify-center items-center overflow-hidden'>
                    <img className='w-full md:max-w-[30rem] h-auto object-contain' src={Img} alt="Expert Illustration" />
                </div>
                
                {/* Text container */}
                <div className='md:w-[50%] w-full flex justify-center flex-col gap-7 mx-auto'>
                    <h2 className='text-5xl font-anton'>
                        Learn From Experts
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus voluptatum minus, doloribus aperiam tenetur nihil tempore doloremque totam, id consectetur ipsa ex provident dolorum nesciunt iusto accusamus magnam. Officia, odio?
                    </p>
                    <button className='text-white bg-black px-3 py-2 md:px-5 md:py-3 rounded-lg font-poppins hover:opacity-80'>Check Now</button>
                </div>
            </div>
        </>
    )
}

export default LearnFromExperts
