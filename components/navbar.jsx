//built in link from next.js
import React from "react";
import Link from "next/link";
import Image from "next/image";
import NavLogo from '../public/navLogo.png'

export default function Navbar() {
  return (
    <div className="bg-[#797b81] fixed w-full h-20 shadow-2xl z-50">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
      <Image src={NavLogo} alt="/" width="160" height="160" />
      <div className="text-white text-2xl">
        <ul className="hidden md:flex">
          <Link href="/">
            <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
          </Link>
          <Link href="/about">
            <li className="ml-10 text-sm uppercase hover:border-b">About</li>
          </Link>
          <Link href="/project">
            <li className="ml-10 text-sm uppercase hover:border-b">Projects</li>
          </Link>
          <Link href="/skill">
            <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
          </Link>
        </ul>
      </div>
      </div>
    </div>
  );
}
