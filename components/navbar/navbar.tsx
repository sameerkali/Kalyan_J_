'use client'

import React, { useEffect, useState } from "react";
import Image from "next/image";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };

  const showDialog = () => setIsVisible(true);
  const hideDialog = () => setIsVisible(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div onMouseEnter={hideDialog} onClick={hideDialog}>
      
      <Upper_banner />
      <div className="flex justify-between bg-gray-100">
        <div className="ml-40 mb-7">
          <div className={`z-1 transition-transform duration-100 p-2 ${isScrolled ? "-translate-x-20" : "translate-y-0"}`}>
            <ul>
              <ol className="flex text-[12px] text-gray-400 mt-3">
                <li className="mr-2">MY KALYAN/</li>
                <li className="mr-2">MEDIA/</li>
                <li className="mr-2">MY KALYAN/</li>
                <li className="mr-2">GOLD RATES/</li>
                <li className="mr-2">DIGITAL GOLD/</li>
              </ol>
            </ul>
          </div>
          <div className={`p-1 mt-5 flex`}>
          <div className={`mr-16 z-1 transition-transform duration-700 ${isScrolled ? "" : "hidden" }`}>
          <Image src="/logo_small.svg" width={40} height={40} alt="Logo" />
        </div>
            <ul className="mt-5 text-gray-500">
              <ol className="flex ">
                <li onMouseEnter={showDialog}  className="mr-9 font-bold text-[15px]">
                  OUR BRAND
                </li>
                <li onMouseEnter={showDialog}  className="mr-9 font-bold text-[15px]">
                  MUHURAT
                </li>
                <li onMouseEnter={showDialog}  className="mr-9 font-bold text-[15px]">
                  SHOP ONLINE
                </li>
                <li onMouseEnter={showDialog}  className="mr-9 font-bold text-[15px]">
                  JWELLERY
                </li>
              </ol>
            </ul>
          </div>
        </div>

        {isVisible && <Dialog_1 />}
        {/* //////////////////////////////////// */}
        <div className={`mt-4 z-1 transition-transform duration-300 ${isScrolled ? "hidden" : "translate-y-0"}`}>
          <Image src="/kalyan_logo.svg" width={120} height={120} alt="Logo" />
        </div>
        {/* //////////////////////////////////// */}

        <div className="mr-40 mb-7">
          <div className={`z-1 transition-transform duration-100 p-2 ${isScrolled ? "translate-x-20" : "translate-y-0"}`}>
            <ul>
              <ol className="flex text-[12px] text-gray-400 mt-3">
                <li className="mr-2">STORE LOCATOR/</li>
                <li className="mr-2">FEEDBACK/</li>
                <li className="mr-2">CONTACT</li>
              </ol>
            </ul>
          </div>
          <div className="left_lower p-1 mt-5">
            <ul className="mt-5">
              <ol className="flex  text-gray-500">
                <li className="mr-9 text-[15px] font-bold " onMouseEnter={showDialog}>ABOUT US</li>
                <li className="mr-9 text-[15px] font-bold" onMouseEnter={showDialog}>GIFT CARD</li>
                <li className="mr-9 text-[15px] font-bold" onMouseEnter={showDialog}>AMBASSADORS</li>
                <li className="mr-9 text-[15px] font-bold" onMouseEnter={showDialog}>INVESTORS</li>
              </ol>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const Upper_banner: React.FC = () => {
  return (
    <>
      <div className="text-center bg-gray-800 text-white p-1 sticky top-0  w-full z-10">
        <span className="text-[13px] ">Sign-Up, Spin, and</span>
        <button className="p-[4px]  bg-red-600 pl-5 pr-5 ml-5">win exiting prices</button>
      </div>
    </>
  );
};

const Dialog_1: React.FC = () => {
  return (
    <>
  <div className="flex absolute p-7  top-[12rem] right-[12rem] w-[73rem] h-96 bg-white">
    <div>
      <h1 className="mt-7 text-2xl">BRANS FAMILY</h1>
      <div className="flex ">
        <ol className="mr-32 mt-5 text-sm">
          <li className="mb-3">NIMAH</li>
          <li className="mb-3">MUDHRA</li>
          <li className="mb-3">ANOKHI</li>
          <li className="mb-3">RANG</li>
          <li className="mb-3">TEJASVI</li>
          <li className="mb-3">ZIAH</li>
        </ol>
        <ol className="mr-32 mt-5 text-sm">
          <li className="mb-3 ">NIMAH</li>
          <li className="mb-3 ">MUDHRA</li>
          <li className="mb-3 ">ANOKHI</li>
          <li className="mb-3 ">RANG</li>
          <li className="mb-3 ">TEJASVI</li>
          <li className="mb-3 ">ZIAH</li>
        </ol>
      </div>
    </div>
    <div className="flex">
      <img src="./mudhra-1-icon.webp"alt="" className="w-80  p-2" />
    </div>
    <div className="flex ">
      <img src="./mudhra-3-image.webp"alt="" className="w-[27rem]  p-2" />
    </div>
  </div>
</>

  );
};

export default Navbar;
