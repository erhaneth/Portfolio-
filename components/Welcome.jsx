import React from "react";
import Link from "next/link";
import { AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Welcome() {
  return (
    <div className="lg:w-1/2 text-center ">
      <div className=" max-w-[1240px]  flex justify-center items-center">
        <div>
          <h1 className="py-8 text-[#090c14]">
            <p className="mb-5">
              Hello, I'm <span className="text-[#ff7e00]">Heg</span>
            </p>
            <p>A Software Developer</p>
          </h1>
          <p className="py-16 text-gray-500 max-w-[%35] m-auto">
            I am a web developer that comes from a barista and Business
            background . Through my past experiences, I can balance the need of
            businesses to understand their pain points and how I can
            contribute as a Software developer and solve the problems. I've
            worked with a wide range of people from different backgrounds and
            demographics. This has enabled me to adapt and become flexible in
            the workplace.
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
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                <FaGithub />
              </div>
            </a>
            <Link href=''>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlineMail />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
