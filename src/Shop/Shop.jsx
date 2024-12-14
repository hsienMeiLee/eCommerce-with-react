import React from 'react';
import { Shirtdb, Shoedb, Socksdb, Trousersdb, Jacketsdb } from './Shopdb';
import { Link } from "react-router-dom";


const Product = ({ data }) => {
  return (
    <div className="mb-10 w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 place-items-center">
        {data.map((data) => (
          <div
            key={data.id}
            className="group w-full max-w-[260px]"
            data-aos="fade-up"
            data-aos-delay={data.aosDelay}
          >
            
            <div className="relative overflow-hidden">
                <img
                  src={data.img}
                  alt={data.title}
                  className="h-[180px] w-full object-cover rounded-md group-hover:scale-110 duration-300"
                />
              </div>
              <div className="leading-7 mt-3">
                <h2 className="font-semibold text-black">{data.title}</h2>
                <h2 className="font-bold text-black">${data.price}</h2>
              </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Shop = () => {
  return (
    <div>
      <main className="flex-1 bg-gray-100">
        <div className="min-h-screen w-full">

          <section className="w-full">
            <div className="bg-gray-300 px-2 py-2 sticky top-0 z-10 text-black font-medium">
              Shoes
            </div>
            <div className="max-w-7xl mx-auto px-4 md:px-8 py-6">
              <Product data={Shoedb} />
            </div>
          </section>


          <section className="w-full">
            <div className="bg-gray-300 px-2 py-2 sticky top-0 z-10 text-black font-medium">
              Shirts
            </div>
            <div className="max-w-7xl mx-auto px-4 md:px-8 py-6">
              <Product data={Shirtdb} />
            </div>
          </section>


          <section className="w-full">
            <div className="bg-gray-300 px-2 py-2 sticky top-0 z-10 text-black font-medium">
              Trousers
            </div>
            <div className="max-w-7xl mx-auto px-4 md:px-8 py-6">
              <Product data={Trousersdb} />
            </div>
          </section>


          <section className="w-full">
            <div className="bg-gray-300 px-2 py-2 sticky top-0 z-10 text-black font-medium">
              Socks
            </div>
            <div className="max-w-7xl mx-auto px-4 md:px-8 py-6">
              <Product data={Socksdb} />
            </div>
          </section>


          <section className="w-full">
            <div className="bg-gray-300 px-2 py-2 sticky top-0 z-10 text-black font-medium">
              Jackets & Hoodies
            </div>
            <div className="max-w-7xl mx-auto px-4 md:px-8 py-6">
              <Product data={Jacketsdb} />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};



export default Shop;