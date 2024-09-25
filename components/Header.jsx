// components/Header.js
'use client'
import Image from 'next/image';
import React from 'react';
import { useRouter } from 'next/router';
import img from "@/Public/Loyaut/logo.png"
import burger from "@/Public/Loyaut/pic.png"
// logo.png

const Header = ({ translate }) => {

  return (
    <header className='bg-[#F2F2F3]'>
      <nav className='relative'>
        <div className="w-[100%] h-[400px] bg-[#FFAB08] rounded-b-[50%]">
            <Image src={img} alt='img' width={150} height={100} className='w-[150px] mx-auto pt-[24px]'/>
            <div className="w-[600px] mx-auto mt-[24px] flex items-center">
                <Image src={burger} alt="" width={250} height={250} className='w-[250px]' />
                <div className="leading-[45px]">
                    <h1 className='text-[40px] font-bold text-[#fff]'>{translate.header.title}</h1>
                    <h2 className='text-[40px] font-bold text-[#FF5C00] mb-[10px]'>{translate.header.titleTwo}</h2>

                    <span className='text-[14px] text-[#fff]'>{translate.header.subtitle}</span>
                    <p>{translate.products.cart}</p>
                </div>
            </div>
        </div>

        <div className="flex absolute top-[20px] right-[50px]">
          {/* <Link href={"ru"} > */}
            <button className='bg-gray-300 px-[20px] cursor-pointer'>ru</button>
          {/* </Link> */}
          <div className="w-[2px] h-[30px] bg-[#000]"></div>
          <button className='bg-gray-300 px-[20px] cursor-pointer'>en</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
