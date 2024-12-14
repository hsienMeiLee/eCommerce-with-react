import React from 'react';
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import Darkmode from './Darkmode';
import { NavLink } from 'react-router-dom';




const MenuLinks = [
    {
        id: 1,
        name: "Home",
        link: "/#",
    },
     {
        id: 2,
        name: "Shop",
        link: "../../Shop/Shop",
    },
     {
        id: 3,
        name: "About",
        link: "../../About/About",
    }, {
        id: 4,
        name: "Blogs",
        link: "../../Blogs/Blog"
    },
];

const DropdownLists = [
    {
        id : 1,
        name : "Trending products",
        link : "/#"
    },{
        id : 2,
        name : "Best selling",
        link : "/#",
    },{
        id : 3,
        name : "Top rated",
        link : "/#",
    }
]

const Navbar = ({handleOrderPopup}) => {
    return (
        <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40'>
            <div className='py-4'>
                <div className="container flex justify-between items-center gap-4">
                    <div className='flex items-center gap-4'>
                        <a href="#" className='text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl'>
                            Xigua
                        </a>
                        <div className='hidden lg:block'>
                            <ul className='flex items-center gap-4'>
                                {
                                    MenuLinks.map((data, index) => (
                                        <li key={index}>
                                            <NavLink  to={data.link}
                                            className={({ isActive }) =>
                                                `inline-block font-semibold px-4 text-gray-500 ${
                                                    isActive
                                                        ? "text-primary"
                                                        : "hover:text-black dark:text-gray-200 dark:hover:text-white"
                                                } duration-200`
                                            }>
                                                {data.name}
                                            </NavLink>
                                        </li>
                                    ))
                                }
                                {/* <li className='relative cursor-pointer group'>
                                    <a href="#" className='flex items-center gap-[2px] font-semibold text-gray-500 dark:text-gray-200 dark:hover:text-white py-2'>
                                        Quick links
                                        <span>
                                            <FaCaretDown className='group-hover:rotate-180 duration-300' />
                                        </span>
                                    </a>
                                    <div className="hidden group-hover:block absolute bg-white min-w-[12rem] rounded-md shadow-md dark:bg-gray-800 p-2">
                                    <ul className='space-y-2'>
                                        {DropdownLists.map((data, index) => (
                                            <li key={index}>
                                                <a href={data.link} className='inline-block rounded-sm p-2 w-full text-gray-500 hover:text-black hover:bg-primary/20 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-primary duration-300'>
                                                    {data.name}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                    </div>
                                </li> */}
                            </ul>
                        </div>
                    </div>

                    <div className="flex justify-between items-center gap-4">
                        <div className='realtive group hidden sm:block'>
                            <div className="relative">
                                <input type="text" placeholder='Search' className='search-bar' />
                                <IoMdSearch className='text-xl text-gray-600 dark:text-gray-400 absolute top-1/2 -translate-y-1/2 right-3 group-hover:text-primary duration-200' />
                            </div>
                        </div>

                        <button className='relative p-3' onClick={handleOrderPopup}>
                            <FaCartShopping className='text-xl text-gray-600 dark:text-gray-400' />
                            <div className='w-4 h-4 rounded-full bg-red-500 text-white absolute top-0 right-0 flex items-center justify-center'>4</div>
                        </button>

                        <div>
                            <Darkmode />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar