import React from "react";
import Link from "next/link";
import { AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import AboutImg from "../public/about.jpg";
import Image from "next/image";

export default function Welcome() {
  return (
    <div id='home' className="text-center">
      <div className="md:flex-row flex-col flex justify-center items-center">
        <div className="">
          <h1 className="py-8 text-[#090c14]">
            <p className="mb-5">
              Hello, this is <span className="text-[#fccb27]">Heg.</span>
            </p>
            <p>A Software Developer</p>
          </h1>
          <p className="py-16 text-gray-600 max-w-[%35] m-auto">
            
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <a
              className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300"
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
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300"
             
              >
                <FaGithub />
              </div>
            </a>
            <Link href='mailto:gumusucb21@gmail.com'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlineMail />
              </div>
            </Link>
          </div>
        </div>
        <div className="w-full  h-auto m-auto shadow-xl shadow-gray-600 rounded-xl flex items-center justify-center p-4">
            <Image src={AboutImg} className="rounded-3xl" alt="/" 
             width="450px"
             height="450px"
            />
          </div>
      </div>
    </div>
  );
}
