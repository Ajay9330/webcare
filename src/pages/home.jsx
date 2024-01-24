import React, { useState } from 'react';
import bgimg from '../assets/home1.jpg';
import bgsvg from '../assets/homesvg.svg';
import heart from '../assets/heart.jpg';
import doc from '../assets/doctab.jpg';
import { NavLink } from 'react-router-dom';


function Home() {


  return (
    <>
      <div className=' h-[100vh]  bg-cover bg-center backdrop-invert backdrop-blur-3xl backdrop-brightness-90' style={{ backgroundImage: `url(${bgimg})` }}>
        <div className=' w-full bg-white bg-opacity-50 flex justify-center items-center backdrop-blur-[2px]'>
          <h1 className='text-3xl text-black  text-center md:text-6xl py-9 font-[Roboto] uppercase shadow-lg'>
            The Webcare
          </h1>
          <img className='sm:w-60 w-28' src={bgsvg} alt="" />
        </div>

        <div className='bg-black bg-opacity-50 '>
          <div>
            <ul className='bg-white bg-opacity-15 text-white flex gap-5 p-6 m-3 justify-center items-center flex-wrap'>
            <div className='p-1 bg-white rounded-md hover:border-blue-500 border-2 box-border w-72 '>
            <div className="  p-6 border rounded-lg shadow bg-gray-800 bg-contain border-gray-700 hover:bg-blend-multiply bg-blend-overlay"  style={{ backgroundImage: `url(${heart})` }}>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">Heart Diseases</h5>
                <p className="mb-3 font-normal text-gray-400">One of the most issue</p>
                <NavLink className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg hover:bg-blue-800 bg-blue-600 dark:hover:bg-blue-700" to='heart' >
                  Heart
                  <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                  </svg>
                </NavLink>
              </div>
            </div>
            
            <div className='p-1 bg-white rounded-md hover:border-blue-500 border-2 box-border '>
              <div className="  p-6 border rounded-lg shadow bg-gray-800 bg-contain border-gray-700 hover:bg-blend-multiply bg-blend-overlay"  style={{ backgroundImage: `url(${doc})` }}>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">Symtoms based Diseases </h5>
                <p className="mb-3 font-normal text-gray-400">Symtoms based diseases Predction</p>
                <NavLink className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg hover:bg-blue-800 bg-blue-600 dark:hover:bg-blue-700" to='diseases' >
                  Diseases
                  <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                  </svg>
                </NavLink>
              </div>
              </div>
            </ul>
            <p className=' bg-sky-600 text-white bg-opacity-40 flex justify-center items-center backdrop-blur-[2px] p-6 m-3 rounded-xl'>
            Webcare is an innovative healthcare project committed to addressing critical challenges within the medical sector. Developed by a dedicated team, our project focuses on leveraging advanced technologies to provide effective solutions to pressing issues in healthcare. The primary objective is to contribute towards the early detection and prediction of Noncommunicable Diseases (NCDs), with a particular emphasis on heart disease.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
