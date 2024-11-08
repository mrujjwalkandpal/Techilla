import React from 'react';

const HorizCard = ({ h2, p, logo: Logo }) => {
  return (
    <div className='p-2 grid my-2 w-[100%]  grid-cols-4 gap-5 items-center bg-slate-200 rounded-md h-[100px] hover:scale-105 duration-500  '>
    <div className='col-span-1 grid place-items-center'> {/* Center content vertically and horizontally in grid cell */}
        {Logo && <Logo className="w-[60px] h-auto bg-white p-2 rounded-full" />}
    </div>
    <div className='h-auto col-span-3 grid place-items-center'> {/* Center content vertically in grid cell */}
        <div>
            <h2 className='text-black text-2xl font-anton'>{h2}</h2>
            <p className='text-black text-sm font-poppins'>{p}</p>
        </div>
    </div>
</div>



  );
};

export default HorizCard;
