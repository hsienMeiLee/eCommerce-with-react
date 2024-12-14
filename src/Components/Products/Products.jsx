import React from 'react'
import Heading from '../Shared/Heading'
import ProductCard from './ProductCard';
import Shoe1 from "../../assets/shoe1.png";
import Shoe2 from "../../assets/shoe2.png";
import Shoe3 from "../../assets/shoe3.jpg";
import Shirt1 from "../../assets/shirt1.png";
import Shirt2 from "../../assets/shirt2.png";
import Shirt3 from "../../assets/Shirt3.jpg";
import Trousers from "../../assets/trousers.png";
import Shoe12 from "../../assets/shoe12.png";


const ProductsData = [
    {
        id : 1,
        img : Shoe1,
        title : "Athelic shoe",
        price : "120",
        aosDelay : "0",
    },{
        id : 2,
        img : Shoe2,
        title : "Nike Classic Orange",
        price : "130",
        aosDelay : "200",
    },{
        id : 3,
        img : Shoe3,
        title : "Nike Classic velvet greeny",
        price : "140",
        aosDelay : "400",
    },{
        id : 4,
        img : Shirt1,
        title : "Nike classic black",
        price : "80",
        aosDelay : "600",
    }
]

const ProductsData2 = [
    {
        id : 1,
        img : Shirt2,
        title : "Nike Classis white SB",
        price : "80",
        aosDelay : "500",
    },{
        id : 2,
        img : Shirt3,
        title : "Nike Classis gray SB",
        price : "80",
        aosDelay : "500",
    },{
        id : 3,
        img : Trousers,
        title : "Nike Classis Trousers",
        price : "100",
        aosDelay : "200",
    },{
        id : 4,
        img : Shoe12,
        title : "Nike Air Jorden green",
        price : "230",
        aosDelay : "300",
    },
]

const Products = () => {
  return (
    <div>
        <div className="container">
            {/* Header section */}
            <Heading title="Our Products" subtitle="Explore our products" />
            {/* body section */}
            <ProductCard data={ProductsData} />
            <ProductCard data={ProductsData2} />
        </div>
    </div>
  )
}

export default Products