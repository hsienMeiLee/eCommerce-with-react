import React from 'react';
import Image1 from "../../assets/tshirt.png";
import Image2 from "../../assets/trousers.png";
import Image3 from "../../assets/socks.png";
import Button from '../Shared/Button';

const Category = () => {
  return (
    <div className='py-8'>
        <div className='container'>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* first col */}
                <div className='py-10 pl-5 bg-gradient-to-r from-black/90 to-black/70 text-white rounded-3xl relative h-[320px] flex items-end'>
                    <div>
                        <div className='mb-4'>
                            <p className='mb-[2px] text-gray-400'>Enjoy</p>
                            <p className='text-2xl font-semibold mb-[2px]'>with</p>
                            <p className='text-4xl xl:text-5xl font-bold opacity-20 mb-2'>Shirts</p>
                            <Button text="Browse" bgColor="bg-primary" textColor="text-white" />
                        </div>
                    </div>
                    <img src={Image1} className='w-[250px] absolute bottom-0 right-0' alt="image" />
                </div>
                {/* second col */}
                <div className='py-10 pl-5 bg-gradient-to-r from-brandBlueDark to-brandBlue text-white rounded-3xl relative h-[320px] flex items-end'>
                    <div>
                        <div className='mb-4'>
                            <p className='mb-[2px] text-gray-400'>Enjoy</p>
                            <p className='text-2xl font-semibold mb-[2px]'>with</p>
                            <p className='text-4xl xl:text-5xl font-bold opacity-20 mb-2'>Trousers</p>
                            <Button text="Browse" bgColor="bg-primary" textColor="text-white" />
                        </div>
                    </div>
                    <img src={Image2} className='w-[250px] absolute top-0 right-0' alt="image" />
                </div>

                {/* third col */}
                <div className='col-span-2 py-10 pl-5 bg-gradient-to-tr from-black/50 to-black/90 text-white rounded-3xl relative h-[320px] flex items-end'>
                    <div>
                        <div className='mb-4'>
                            <p className='mb-[2px] text-gray-400'>Enjoy</p>
                            <p className='text-2xl font-semibold mb-[2px]'>with</p>
                            <p className='text-4xl xl:text-5xl font-bold opacity-50 mb-2'>Socks</p>
                            <Button text="Browse" bgColor="bg-primary" textColor="text-white" />
                        </div>
                    </div>
                    <img src={Image3} className='w-[250px] absolute top-0 right-0' alt="image" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Category