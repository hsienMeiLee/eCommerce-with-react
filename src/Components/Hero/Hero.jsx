import React from 'react';
import Slider from "react-slick";
import Image1 from "../../assets/tshirt.png";
import Image2 from "../../assets/shoe.png";
import Image3 from "../../assets/socks.png";
import Image4 from "../../assets/trousers.png";
import Button from '../Shared/Button';


const HeroData = [
    {
        id: 1,
        img: Image1,
        subtitle: "free style",
        title: "fresh",
        title2: "Sportwear",
    }, {
        id: 2,
        img: Image2,
        subtitle: "comfortable",
        title: "Air",
        title2: "AirShoes",
    }, {
        id: 3,
        img: Image3,
        subtitle: "different",
        title: "Stylish",
        title2: "Trousers",
    }
]

const Hero = ({ handleOrderPopup }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplaySpeed: 4000,
        cssEase: "ease-in-out",
        pauseOnHover: false,
        pauseOnFocus: true,
    }
    return (
        <div className='container'>
            <div className='overflow-hidden rounded-3xl min-h-[550px] sm:min-h-[650px] hero-bg-color flex items-center justify-center'>
                <div className="container pb-8 sm:pb-0">
                    <Slider {...settings}>
                        {
                            HeroData.map((data) => (
                                <div key={data.id}>
                                    <div className="grid grid-cols-1 sm:grid-cols-2">
                                        <div className='flex flex-col gap-4 justify-center sm:pl-3 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10'>
                                            <h1
                                                data-aos="zoom-out"
                                                data-aos-duration="500"
                                                data-aos-once="true"
                                                className='text-2xl sm:text-6xl lg:text-2xl font-bold'>{data.subtitle}</h1>
                                            <h1
                                                data-aos="zoom-out"
                                                data-aos-duration="500"
                                                data-aos-once="true" className='text-5xl sm:text-6xl lg:text-7xl font-bold'>{data.title}</h1>
                                            <h1 className='text-5xl text-white uppercase dark:text-white/60 sm:text-[80px] md:text-[100px] xl:text-[150px] font-bold'>{data.title2}</h1>
                                            <div data-aos="fade-up"
                                                data-aos-duration="500"
                                                data-aos-once="true">
                                                <Button text="Buy Now" bgColor="bg-primary" textColor="text-white" handler={handleOrderPopup} />
                                            </div>
                                        </div>
                                        <div className='order-1 sm:order-2'>
                                            <div data-aos="zoom-in"
                                                data-aos-duration="500"
                                                data-aos-once="true">
                                                <img src={data.img} alt="image" className='w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] sm:scale-105 lg:scale-110 object-contain mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,0.4)] relative z-40' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </Slider>
                </div>

            </div>
        </div>
    )
}

export default Hero