import React from 'react';
import Apple from '../../assets/appleLogo.png';
import Jacquemus from '../../assets/JacquemusLogo.png';
import Supreme from '../../assets/supremeLogo.png';
import Clot from '../../assets/clotLogo.png';

const Partners = () => {
  return (
    <div 
    data-aos="zoom-out"
    className='py-8 mt-2 hidden md:block bg-gray-200 dark:bg-white/10'>
        <div className="container">
            <div className="grid grid-cols-4 gap-3 place-items-center scale-125">
                <img src={Apple} alt="image" className='w-[80px] dark:invert' />
                <img src={Jacquemus} alt="image" className='w-[80px] dark:invert' />
                <img src={Supreme} alt="image" className='w-[80px] dark:invert' />
                <img src={Clot} alt="image" className='w-[80px] dark:invert' />
            </div>
        </div>
    </div>
  )
}

export default Partners