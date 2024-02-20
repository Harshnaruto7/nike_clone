"use client"
import { headerLogo } from "../assets/images";
import React,{useState} from "react";
import { hamburger } from "../assets/icons";
import Link from "next/link";
import Image from "next/image";


import { navLinks } from "../constants/constants";

export default function Nav() {
  
  const[isMenuOpen , setIsMenuOpen] = useState(false);

  function toggleMenu(){

    setIsMenuOpen(!isMenuOpen);


  }


  return (



    <header className="padding-x py-8 relative z-10 w-full">
    <nav className="flex justify-between items-center max-container">
      <Link href="/">
        <Image src={headerLogo} alt="header logo" width={130} height={29} layout="fixed" />
      </Link>
      <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
        {navLinks.map((item) => (
          <li key={item.label}>
            <Link href={item.href}>
              <span className="font-montserrat leading-normal text-lg text-slate-400 cursor-pointer">{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
      <div className="sm:hidden block" onClick={toggleMenu}>
        <Image src={hamburger} alt="hamburger icon" width={25} height={25} layout="fixed" />
      </div>
      {isMenuOpen && (
        <div className="absolute top-full right-0 bg-white shadow-md w-full sm:hidden z-20">
          <ul>
            {navLinks.map((link) => (
              <li key={link.label} className="text-center border-b border-gray-200">
                <Link href={link.href}>
                  <span className="block p-4 text-sm text-gray-700 cursor-pointer" onClick={() => setIsMenuOpen(false)}>{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="py-2"></div>
        </div>
      )}
    </nav>
    {/* Dynamic padding adjustment based on the menu's open state */}
    <div className="py-2"></div>
  </header>


































    // <header className="padding-x py-8 absolute z-10 w-full">
    //   <nav className=" flex justify-between items-center max-container">
    //     <Link href="/">
    //       <Image
    //         src={headerLogo}
    //         alt="header_Image"
    //         width={130}
    //         height={29}
    //       ></Image>
    //     </Link>
    //     <ul
    //       className=" flex-1 flex justify-center items-center 
    //       gap-16  max-lg:hidden
    //       "
    //     >
    //       {navLinks.map((item) => (
    //         <li key={item.label}>
    //           <Link
    //             href={item.href}
    //             className=" font-montserrat leading-normal text-lg text-slate-400"
    //           >
    //             {item.label}
    //           </Link>
    //         </li>
    //       ))}
    //     </ul>
    //     <div className="sm:hidden block ">
    //         <Image src={hamburger} alt="its_a_hamburger"
            
    //         width={25}
    //         height={25}            
    //         ></Image>
            
    //     </div>
    //   </nav>
    // </header>
  );
}
