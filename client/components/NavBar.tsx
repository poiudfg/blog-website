"use client";

import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../public/assets/data.json';
import Link from "next/link";
import { BiSearch } from "react-icons/bi";

const NavBar = () => {
  return (
    <div className="shadow-lg shadow-[gray]/[0.3] border-b-[0.5px] border-[gray] fixed w-[100%] z-50 bg-[#242535]">
      <div className="container mx-auto xl:max-w[1180px] text-white flex items-center justify-between py-[15px]">
      <Link href="/">
        <div className="h-[70px] flex items-center cursor-pointer">
        <Lottie
              animationData={animationData}
              height={70}
              width={70}
              className="lottie"
            />
            <p className="font-bold uppercase text-[20px] hover:text-blue-300">
              Blogs
            </p>
            </div>
      </Link>
      <nav className="flex items-center gap-[35px] cursor-pointer list-none">
      <Link href="/">
          <li className="hover:border-b-[0.5px]">Home</li>
          </Link>
          <Link href="/About">
          <li className="hover:border-b-[0.5px]">About</li>
          </Link>
        </nav>
        <div>
          <div className="flex items-center max-w-[166px] bg-[#242535] pr-[8px] py-[5px]">
            <input
              className="w-full border-none outline-none bg-transparent pl-[10px] placeholder:text-[15px]"
              type="text"
              placeholder="Search"
            />
            <BiSearch fontSize={20} className="cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar