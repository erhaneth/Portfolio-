import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import NavLogo from "../public/navLogo.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="bg-gray-800 text-white font-bold fixed w-full h-20 shadow-2xl z-50">
      <div className="flex justify-between items-center w-full h-full px-4 md:px-8 lg:px-16">
        <Image src={NavLogo} alt="/" width="160" height="160" />
        <div className="hidden md:flex">
          <NavItems />
        </div>
        {/* Hamburger Icon */}
        <div onClick={handleNav} className="md:hidden cursor-pointer">
          {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          nav ? "right-0" : "-right-full"
        } fixed top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-gray-800 p-10 ease-in duration-500 shadow-lg transition-transform flex flex-col`}
      >
        <div className="flex w-full justify-end">
          <div onClick={handleNav} className="cursor-pointer">
            <AiOutlineClose size={25} />
          </div>
        </div>
        {/* Added Flexbox properties to center items vertically under X */}
        <div className="flex flex-col justify-start mt-10 space-y-8">
          <NavItems mobile={true} handleNav={handleNav} />
        </div>
      </div>
    </div>
  );
}

const NavItems = ({ mobile, handleNav }) => {
  const items = [
    { href: "/", label: "Home" },
    { href: "/#about", label: "About" },
    { href: "/#skills", label: "Skills" },
    { href: "/#projects", label: "Projects" },
  ];

  return (
    <ul
      className={`${
        mobile ? "flex flex-col space-y-8" : "flex space-x-12"
      } transition-all duration-300`}
    >
      {items.map((item) => (
        <Link key={item.href} href={item.href}>
          <li
            className={`text-sm uppercase tracking-wide hover:scale-105 transition-transform duration-300 hover:text-[#fccb27] cursor-pointer ${
              mobile ? "py-4 text-2xl" : "text-base"
            }`}
            onClick={mobile ? handleNav : undefined}
          >
            {item.label}
          </li>
        </Link>
      ))}
    </ul>
  );
};
