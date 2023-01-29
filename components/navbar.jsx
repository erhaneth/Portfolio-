import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import NavLogo from "../public/navLogo.png";
import { AiOutlineMenu } from "react-icons/ai";

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="bg-gray-800 text-white font-bold fixed w-full h-20 shadow-2xl z-50">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Image src={NavLogo} alt="/" width="160" height="160" />
        {nav && (
          <div className="bg-gray-800 absolute top-20 right-0">
            <ul className="">
              <Link href="/">
                <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
              </Link>
              <Link href="/#about">
                <li className="ml-10 text-sm uppercase hover:border-b">
                  About
                </li>
              </Link>
              <Link href="/#skills">
                <li className="ml-10 text-sm uppercase hover:border-b">
                  Skills
                </li>
              </Link>
              <Link href="/#projects">
                <li className="ml-10 text-sm uppercase hover:border-b">
                  Projects
                </li>
              </Link>
            </ul>
          </div>
        )}
        <div className="text-white text-2xl">
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-sm uppercase hover:border-b">About</li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
            </Link>
            <Link href="/#projects">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Projects
              </li>
            </Link>
          </ul>
          {/* Hamburger Icon */}
          <div onClick={handleNav} className="md:hidden cursor-pointer">
            <AiOutlineMenu size={25} className="animate-menu-icon" />
          </div>
        </div>
      </div>
    </div>
  );
}
