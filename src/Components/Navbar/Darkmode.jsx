import React, { useEffect, useState } from 'react';
import LightButton from "../../assets/light-mode-button.png";
import DarkButton from "../../assets/dark-mode-button.png";

const Darkmode = () => {
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
    );
    const element = document.documentElement;
    useEffect(()=>{
        localStorage.setItem("theme",theme);
        if(theme === "dark"){
            element.classList.remove("light");
            element.classList.add("dark");
        }else{
            element.classList.remove("dark");
            element.classList.add("light");
        }
    })
  return (
    <div>
        {theme === "light" ? (
            <img src={LightButton} className='w-12 cursor-pointer transition-all duration-500' alt="light button" onClick={()=>setTheme("dark")} />
        ) : (
            <img src={DarkButton} className='w-12 cursor-pointer transition-all duration-500' alt="dark button" onClick={()=>setTheme("light")} />
        )}
    </div>
  )
}

export default Darkmode