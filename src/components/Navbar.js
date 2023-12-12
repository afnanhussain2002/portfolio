
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const navItems = (
    <>
      <li>
        <Link href={'/'}>Home</Link>
      </li>
      <li>
        <Link href={'#about'}>About</Link>
      </li>
      <li>
        <Link href={'#projects'}>Projects</Link>
      </li>
      <li>
        <Link href={'#contact'}>Contact</Link>
      </li>
    
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
            {navItems}
            </ul>
          </div>
          <a className=" text-main-color font-bold text-xl">Afnan Hussain</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
           {navItems}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn bg-main-color text-white">Contact Me</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
