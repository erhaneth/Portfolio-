import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Welcome() {
  return (
    <div className="lg:w-1/2 text-center ">
      <div className=" max-w-[1240px]  flex justify-center items-center">
        <div>

          <h1 className="py-8 text-[#090c14]">
            <p className="mb-5">Hello, I'm <span className="text-[#ff7e00]">Heg</span></p>
            <p>A Software Developer</p>
          </h1>
          <p className="py-16 text-gray-500 max-w-[%35] m-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <a  className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300"
              href="https://www.linkedin.com/in/huseyingumus/"
              target="_blank"
              rel="noreferrer"
            >
              
                <FaLinkedinIn />
        
            </a>
            <a
              href="https://github.com/erhaneth"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                <FaGithub />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
