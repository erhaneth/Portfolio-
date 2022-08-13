import React from "react";
import Link from "next/link";
import { AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn,FaRegFilePdf } from "react-icons/fa";
import WelcomeImg from "../public/welcome.jpg";
import Image from "next/image";

export default function Welcome() {
  return (
    <div id='home' className="text-center">
      <div className="md:flex-row flex-col flex justify-center items-center">
        <div className="">
          <h1 className="py-20 text-[#090c14]">
            <p className="mb-5">
              Hello, this is <span className="text-[#fccb27]">Heg.</span>
            </p>
            <p>A Software Developer based on San Mateo</p>
          </h1>
         
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
            <a
              href="https://drive.google.com/file/d/1B6fgSCHCQJKKuMPF_LrDoQ2v8T7cWBVo/view?usp=sharing"
              // target="_blank"
              // rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300"
             
              >
                <FaRegFilePdf />
              </div>
            </a>
            <Link href='mailto:gumusucb21@gmail.com'
            target="_blank"
              rel="noreferrer"
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlineMail />
              </div>
            </Link>
          </div>
        </div>
        <div className="h-auto m-auto shadow-xl shadow-gray-600 rounded-full flex items-center justify-center p-4">
            <Image src={WelcomeImg } className=" rounded-full" alt="/" 
             width="450px"
             height="450px"
            />
          </div>
      </div>
    </div>
  );
}
