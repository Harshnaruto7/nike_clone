import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import Link from "next/link";
import Image from "next/image";

import { navLinks } from "../constants/constants";

export default function Nav() {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className=" flex justify-between items-center max-container">
        <Link href="/">
          <Image
            src={headerLogo}
            alt="header_Image"
            width={130}
            height={29}
          ></Image>
        </Link>
        <ul
          className=" flex-1 flex justify-center items-center 
          gap-16  max-lg:hidden
          "
        >
          {navLinks.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className=" font-montserrat leading-normal text-lg text-slate-400"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="sm:hidden block ">
            <Image src={hamburger} alt="its_a_hamburger"
            
            width={25}
            height={25}            
            ></Image>
            
        </div>
      </nav>
    </header>
  );
}
