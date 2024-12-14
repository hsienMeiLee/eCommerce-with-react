import React from 'react';
import Heading from '../Shared/Heading';
import Legacy from '../../assets/NikeLegency.jpg';
import JustDoIt from '../../assets/NikeJustDoIt.jpg';
import Sustainable from '../../assets/NikeSustainable.jpg';


const BlogData = [
    {
        title: "Nike\'s Iconic Legacy in Sportswear",
        subtitle: "Nike has redefined sportswear, blending style with cutting-edge technology. Renowned for their iconic logo and slogan, \"Just Do It,\" Nike\'s sportswear is a perfect mix of performance and fashion. From moisture-wicking fabrics to sustainable innovations, Nike caters to athletes and casual wearers alike. Their Dri-FIT technology keeps athletes dry, while collaborations with designers and celebrities ensure trendsetting designs. Whether you're hitting the gym or the streets, Nike\'s versatile collection has you covered, helping you perform at your best while looking great.",
        published: "Jan 1, 2024",
        image: Legacy,
        aosDelay : "0",
    }, {
        title: "Why Athletes Love Nike Sportswear",
        subtitle: "Nike is the go-to brand for athletes worldwide. With gear tailored to every sport, from running to basketball, Nike ensures peak performance. Their sportswear combines ergonomic designs with innovative materials like Flyknit and ZoomX foam, providing unmatched comfort and support. Athletes trust Nike for durability and style, making it a staple on and off the field. Plus, Nike\'s focus on inclusivity means there\'s something for everyone, regardless of fitness level. Wearing Nike isn\'t just about the sport—it\'s a lifestyle.",
        published: "Jan 2, 2024",
        image: JustDoIt,
        aosDelay : "200",
    }, {
        title: " Nike\'s Sustainable Sportswear Revolution",
        subtitle: "Nike is setting the bar high for sustainability in sportswear. Through initiatives like \"Move to Zero,\" the brand aims to reduce its carbon footprint by using recycled materials in iconic products. Popular lines like Space Hippie showcase Nike\'s commitment to eco-friendly innovation without compromising performance. By combining technology with a greener vision, Nike proves that you can look good, feel great, and protect the planet. Choosing Nike isn\'t just a style statement; it\'s a step towards a sustainable future.",
        published: "Jan 3, 2024",
        image: Sustainable,
        aosDelay : "400",
    }
]
const Blogs = () => {
    return (
        <div className='py-12 px-5 sm:px-14 md:px-24 lg:px-34'>
            <div className="container mt-20">
                <Heading title={"Recent news"} subtitle={"Explore our blogs"} />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-7">
                {BlogData.map((data) => (
                    <div 
                    key={data.title} 
                    className='bg-white dark:bg-gray-900'
                    data-aos="fade-up"
                    data-aos-delay={data.aosDelay}
                    >
                        <div className='overflow-hidden rounded-2xl mb-2'>
                            <img src={data.image} alt="image" className='w-full h-[220px] object-cover rounded-2xl hover:scale-105 duration-500' />
                        </div>
                        <div className='space-y-2'>
                            <p className='text-xs text-gray-500'>{data.published}</p>
                            <p className='font-bold line-clamp-1'>{data.title}</p>
                            <p className='line-clamp-2 text-sm text-gray-600 dark:text-gray-400'>{data.subtitle}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Blogs