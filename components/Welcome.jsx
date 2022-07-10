import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Welcome() {
  return (
    <div className="w-1/2 h-[16rem] text-center">
      <div className="max-w-[1240px] w-full 1/2 flex justify-center items-center">
        <div>
          <h1 className="py-4 text-[#090c14]">
            Hello, I'm <span className="text-[#ff7e00]">Heg</span>
          </h1>
          <h1 className="py-2 text-[#090c14]">A Software Developer</h1>
          <p className="py-4 text-gray-500 max-w-[%35] m-auto">
            I am interested in developing efficient and user-centric projects.
            Primarily work with Fullstack tools and related technologies, and
            always seek to immerse myself in new tech to understand how issues
            can be solved more effectively. Passionate about blockchain
            technology and motivated to make it broadly accessible and utilized.
          </p>
          <div className=" flex items-center justify-between max-w-[330px] m-auto py-4">
            <a
              href="https://www.linkedin.com/in/huseyingumus/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                <FaLinkedinIn />
              </div>
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
