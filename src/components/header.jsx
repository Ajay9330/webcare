import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <>
      <nav className="bg-black fixed w-full">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4  top-0 w-full">
          <NavLink
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            {/* Include your logo or text here */}
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Webcare
            </span>
          </NavLink>
          <button
            className="transition-all focus:outline-none"
            onClick={toggleNav}
          >
            <svg
              className="h-6 w-6 text-gray-500"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isNavOpen ? (
                <path d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path d="M4 6h16M4 12h16m-7 6h7"></path>
              )}
            </svg>
          </button>
          <div
            className={`${
              isNavOpen ? 'flex h-[100vh]' : 'flex h-[100vh]  w-0 rounded-br-full opacity-0'
            }  absolute top-16 left-0 w-full md:flex overflow-hidden items-center justify-center transition-all duration-500 ease-in-out bg-slate-400`}
            id="navbar-default"
          >
            <ul className="">
              <li>
                <NavLink
                  to="/"
                  onClick={toggleNav}
                  className={`navelem`}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/diseases"
                  onClick={toggleNav}
                  className={`navelem`}
                >
                  Diseases
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/heart"
                  onClick={toggleNav}
                  className={`navelem`}
                >
                  Heart
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* <div className=' mb-96 block'/> */}
    </>
  );
}

export default Header;
