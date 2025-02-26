"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
  const [open, setOpen] = useState(true);

  const handleShow = () => {
    setOpen(!open);
  };

  return (
    <div className="bg-green-200 ">
      <nav className=" flex justify-between h-20 px-4 xl:px-0 max-w-screen-xl m-auto     ">
        <Link href="/">
          <div className="my-5 text-2xl font-medium h-fit w-[180px] border-4 px-0 text-center border-black">
            <h2>GAP Lawn</h2>
          </div>
        </Link>
        <div className="flex items-center lg:hidden">
          <button onClick={handleShow}>{open?<Image alt="icon" width={35} height={35} src="/menu.png"></Image>:<Image alt="close icon" width={35} height={35} src="/close.png"></Image>}</button>
        </div>
        <div
          className={`lg:space-x-6 gap-y-4   text-lg  absolute  justify-between flex flex-col items-center lg:flex-row  z-50  lg:static  lg:w-auto lg:py-0 pb-6  w-full left-0 ${
            open ? "hidden lg:flex " : "top-[64px] bg-green-200 pt-6"
          }`}
        >
          <Link onClick={handleShow} href="/landscape-maintenance">Landscape Maintenance</Link>
          <Link onClick={handleShow} href="/lawn-care-services">Lawn Care</Link>
          <Link onClick={handleShow} href="/tree-care-services">Tree Care</Link>
          <Link onClick={handleShow} href="/about-us">About Us</Link>
          <div className="hidden lg:flex space-x-3">
            <Link href="/choose-your-lesson">
              <button className=" font-medium px-4 py-3 rounded-xl text-center overflow-hidden group bg-green-600 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-500 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
                <span className="absolute right-0 w-8 h-28 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;