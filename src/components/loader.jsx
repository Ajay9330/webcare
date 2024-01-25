import React, { useEffect } from 'react'

import l from '../assets/logo.png'


export default function loader() {
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "scroll"
        };
    }, []);
  return (
    <div className=' z-50 fixed  top-0 left-0 h-[100vh] w-full bg-black  flex justify-center items-center bg-opacity-75 ' >
      <img className='absolute h-1/2' src={l} alt="" />
       <div className='m-8 w-8 h-8 border-2 animate-ping'><div className='m-4 w-4 h-4 border-2 animate-ping'><div className='m-2 w-2 h-2 border-2 animate-ping'></div></div></div></div>
  )
}
