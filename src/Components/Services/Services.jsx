import React from 'react';
import { FaCarSide, FaCheckCircle, FaWallet } from "react-icons/fa";
import { CiChat1 } from "react-icons/ci";

const ServiceData = [
    {
        id : 1,
        icon : <FaCarSide className='text-4xl md:text-5xl text-primary' />,
        title : "Free shipping",
        description : "Free shipping on all orders",
    },{
        id : 2,
        icon : <FaCheckCircle className='text-4xl md:text-5xl text-primary' />,
        title : "Safe Money",
        description : "30 Days Money Back",
    },{
        id : 3,
        icon : <FaWallet className='text-4xl md:text-5xl text-primary' />,
        title : "Secure payment",
        description : "All payments secure",
    },{
        id : 4,
        icon : <CiChat1 className='text-4xl md:text-5xl text-primary' />,
        title : "Online support",
        description : "24/7 online service",
    }
]

const Services = () => {
  return (
    <div>
        <div className="container my-14 md:my-20">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 gap-y-8">
                {ServiceData.map((data)=>(
                    <div key={data.id} className='flex flex-col items-start sm:flex-row gap-4 sm:items-center sm:justify-center'>
                        {data.icon}
                        <div>
                            <h1 className='lg:text-xl font-bold'>{data.title}</h1>
                            <h1 className='text-gray-400 text-sm'>{data.description}</h1>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Services