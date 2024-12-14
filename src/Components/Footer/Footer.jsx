import React from 'react';
import { FaLocationArrow, FaMobileAlt, FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
const FooterLinks = [
    {
        title: "Home",
        link: "/#",
    }, {
        title: "About",
        link: "/#about",
    }, {
        title: "Contact",
        link: "/#Contact",
    }, {
        title: "Blog",
        link: "/#blog",
    }
]

const Footer = () => {
    return (
        <div className='dark:bg-gray-950'>
            <div className="container">
                <div className="grid md:grid-cols-4 pb-20 pt-5">
                    {/* Company details */}
                    <div className='py-8 px-4'>
                        <a href="#" className='text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl'>
                            Xigua
                        </a>
                        <p className='text-gray-600 lg:pr-24 pt-3 dark:text-gray-300'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit placeat voluptas neque id ratione nihil deserunt laudantium labore expedita odio nulla quo illo, libero quas obcaecati dolores necessitatibus velit voluptates!
                        </p>
                        <p className='text-gray-600 mt-4 dark:text-gray-300'>Made with love by Nike</p>
                        <a href="https://youtu.be/X0xbNUMZCvk?si=mjBKXR_bsNIdtReo" target='_blank' className='inline-block bg-primary/90 text-white py-2 px-4 mt-4 text-sm rounded-full'>
                            Visit our youtube channel
                        </a>
                    </div>

                    {/* footer links */}
                    <div className='col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10'>
                        <div className='py-8 px-4'>
                            <h1 className='text-xl font-semibold sm:text-left mb-3'>Important links</h1>
                            <ul className='space-y-3'>
                                {
                                    FooterLinks.map((data, index) => (
                                        <li key={index}>
                                            <a href={data.link} className="text-gray-600 hover:text-black duration-300 hover:dark:text-white">
                                                {data.title}
                                            </a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        {/* second col */}
                        <div className='py-8 px-4'>
                            <h1 className='text-xl font-semibold sm:text-left mb-3'>Important links</h1>
                            <ul className='space-y-3'>
                                {
                                    FooterLinks.map((data, index) => (
                                        <li key={index}>
                                            <a href={data.link} className="text-gray-600 hover:text-black duration-300 hover:dark:text-white">
                                                {data.title}
                                            </a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>

                    <div className="py-8 px-4 col-span-2 sm:col-auto">
                        <div>
                            <div className="flex items-center gap-3">
                                <FaLocationArrow />
                                <p>Daan district, Taipei</p>
                            </div>
                            <div className='flex items-center gap-3 mt-6'>
                                <FaMobileAlt />
                                <p>+88691234567</p>
                            </div>
                            <div className='flex items-center gap-3 mt-6'>
                                <a href="#">
                                    <FaInstagram className='text-3xl hover:text-primary duration-300' />
                                </a>
                                <a href="#">
                                    <FaFacebook className='text-3xl hover:text-primary duration-300' />
                                </a>
                                <a href="#">
                                    <FaLinkedin className='text-3xl hover:text-primary duration-300' />
                                </a>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer