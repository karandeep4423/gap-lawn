"use client";
import React from "react";
import Link from "next/link";
const Footer = () => {
  return (
    <div>
      <div className="bg-green-200 text-lg xl:text-xl   rounded-t-3xl  ">
        <div className="-mt-4 max-w-screen-xl m-auto flex flex-wrap space-x-5 px-5 justify-evenly">
          <div className="flex flex-col space-y-4 pt-10 w-64">
            <h2 className=" font-medium text-xl border-4 border-white w-fit px-1">
              {" "}
              GAP Lawn
            </h2>
            <p className=" font-medium">
              We are a team of best people with industry-proven years of
              experience.
            </p>
          </div>
          <div className="flex flex-col  font-medium space-y-4 pt-10">
            <h2 className="text-xl font-medium ">Navigation</h2>
            <Link href="/">Home</Link>
            <Link href="/about-us">About us</Link>
            <Link href="/contact-us">Contact us</Link>
          </div>
          <div className="flex flex-col  font-medium space-y-4 pt-10">
            <h2 className="text-xl font-medium ">Services</h2>
            <Link  href="/landscape-maintenance">
              Landscape Maintenance
            </Link>
            <Link  href="/landscape-design">
              Landscape Design
            </Link>
            <Link  href="/lawn-care">
              Lawn Care
            </Link>
            <Link  href="/tree-care">
              Tree Care
            </Link>
          </div>
          <div className="flex flex-col  font-medium space-y-4 pt-10">
            <h2 className="text-xl  font-medium">Contact us</h2>
            <p>Waco, Texas</p>
            <a href="mailto:bachiwind3@gmail.com">gaplawn@gmail.com</a>
            <a href="tel:+918727989814">+1-271682322</a>
          </div>
        </div>
        <p className="text-center  py-6">
          Copyright ©2025 All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
