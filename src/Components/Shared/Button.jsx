import React from 'react'

const Button = ({text, bgColor, textColor, handler = ()=>{} }) => {
  return (
    <button onClick={handler} className={`${bgColor} ${textColor} px-8 py-2 rounded-full cursor-pointer hover:scale-105 duration-300 relative z-10`}>
        {text}
    </button>
  )
}

export default Button