import Image from 'next/image';
import React from "react";
import Link from "next/link";


export default function About() {
  return (
        <div className="container mx-auto xl:max-w-[1100px] pt-[15px]">
          <div className="h-[150px]"></div>
          <h1 className='text-yellow-500 text-[60px] h-[150px]'>About </h1> 
          <div className="group flex items-center">
          <h1 className='text-white text-[20px]'>Github : &nbsp;</h1> 
          <Link href="https://github.com/poiudfg/blog-website">
          <h1 className='text-white hover:text-yellow-500 '>https://github.com/poiudfg/blog-website</h1>
            </Link>
            </div>
            <div className="h-[150px]"></div>
      </div>
  )
}