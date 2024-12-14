import React, { useEffect, useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Category from './Components/Category/Category';
import Category2 from './Components/Category/Category2';
import Services from './Components/Services/Services';
import Banner from './Components/Banner/Banner';
import Shoe from "./assets/shoe.png";
import Tshirt from './assets/tshirt.png';
import Products from './Components/Products/Products';
import Blogs from './Components/Blogs/Blogs';
import Partners from './Components/Partners/Partners';
import Footer from './Components/Footer/Footer';
import Popup from './Components/Popup/Popup';
import AOS from 'aos';
import "aos/dist/aos.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Shop from './Shop/Shop';
import About from './About/About';
import Blog from './Blogs/Blog';



const BannerData = {
  discount: "20% off",
  title: "1111 Promotion",
  date: "November 1 to November 11",
  image: Shoe,
  title2: "Air Shoes",
  title3: "Winter Sale",
  title4: "This shoe is in winter sales. also in 1111 promotion",
  bgColor: "#f42c37",
}
const BannerData2 = {
  discount: "20% off",
  title: "Double 12 Promotion",
  date: "December 1 to December 12",
  image: Tshirt,
  title2: "Shirts",
  title3: "Winter Sale",
  title4: "This tshirt is in winter sales. also in 1111 promotion",
  bgColor: "#2dcc6f",
}

const App = () => {
  const [orderPopup, setOrderPopup] = useState(false);
  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  }

  useEffect(() => {
    AOS.init(
      {
        duration: 800,
        easing: "ease-in-sine",
        delay: 100,
        offset: 100,
      }
    );
    AOS.refresh();
  }, [])
  return (
    <Router>
      <div className='bg-white dark:bg-gray-900 dark:text-white duration-300 min-h-screen flex flex-col'>
        <Navbar handleOrderPopup={handleOrderPopup} />
        <div >
          <Routes>
            <Route
              path='/'
              element={
                <>
                  <Hero handleOrderPopup={handleOrderPopup} />
                  <Category />
                  <Category2 />
                  <Services />
                  <Banner data={BannerData} />
                  <Products />
                  <Banner data={BannerData2} />
                  <Blogs />
                  <Partners />
                  <Footer />
                  <Popup orderPopup={orderPopup} handleOrderPopup={handleOrderPopup} />
                </>
              }
            />
            <Route
              path='/Shop/Shop'
              element={<Shop />}
            />
            <Route
              path='/About/About'
              element={<About />} />
            <Route
              path='/Blogs/Blog'
              element={<Blog />} />


          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App