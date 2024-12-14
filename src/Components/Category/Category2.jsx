import React from 'react';
import Image1 from "../../assets/hoodie.png";
import Image2 from "../../assets/jacket.png";
import Image3 from "../../assets/backpack.png";
import Button from '../Shared/Button';

const Category2 = () => {
    return (
        <div className='py-8'>
            <div className='container'>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className='col-span-2 py-10 pl-5 bg-gradient-to-tr from-black/50 to-black/20  text-gray-800 dark:from-slate-300 dark:to-slate-200 rounded-3xl relative h-[320px] flex items-end'>
                        <div>
                            <div className='mb-4'>
                                <p className='mb-[2px] text-gray-700'>Enjoy</p>
                                <p className='text-2xl font-semibold mb-[2px]'>with</p>
                                <p className='text-4xl xl:text-5xl font-bold opacity-50 mb-2'>Jackets</p>
                                <Button text="Browse" bgColor="bg-primary" textColor="text-white" />
                            </div>
                        </div>
                        <img src={Image2} className='w-[250px] absolute top-0 right-0' alt="image" />
                    </div>
                    {/* first col */}
                    <div className='py-10 pl-5 bg-gradient-to-r from-brandBlueDark to-brandBlue  text-white rounded-3xl relative h-[320px] flex items-end'>
                        <div>
                            <div className='mb-4'>
                                <p className='mb-[2px] text-gray-700'>Enjoy</p>
                                <p className='text-2xl font-semibold mb-[2px]'>with</p>
                                <p className='text-4xl xl:text-5xl font-bold opacity-70 mb-2'>Hoodies</p>
                                <Button text="Browse" bgColor="bg-primary" textColor="text-white" />
                            </div>
                        </div>
                        <img src={Image1} className='w-[250px] absolute bottom-0 right-0' alt="image" />
                    </div>
                    {/* second col */}
                    <div className='py-10 pl-5 bg-gradient-to-r from-slate-300 to-slate-200 text-gray-700 rounded-3xl relative h-[320px] flex items-end'>
                        <div>
                            <div className='mb-4'>
                                <p className='mb-[2px] text-gray-700'>Enjoy</p>
                                <p className='text-2xl font-semibold mb-[2px]'>with</p>
                                <p className='text-4xl xl:text-5xl font-bold opacity-90 mb-2'>Backpacks</p>
                                <Button text="Browse" bgColor="bg-primary" textColor="text-white" />
                            </div>
                        </div>
                        <img src={Image3} className='w-[250px] absolute top-20 -right-10' alt="image" />
                    </div>

                    {/* third col */}

                </div>
            </div>
        </div>
    )
}

export default Category2