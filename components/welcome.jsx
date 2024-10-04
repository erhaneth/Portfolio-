import React from "react";
import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn, FaRegFilePdf } from "react-icons/fa";
import WelcomeImg from "../public/hegprofile.png";
import Image from "next/image";

export default function Welcome() {
  return (
    <div id="home" className="text-center bg-[#f5f5f5] p-20">
      <div className="md:flex-row flex-col flex justify-center items-center">
        <div className="">
          <h1 className="py-20 text-gray-800">
            <p className="mb-5 text-6xl">
              Hello, this is <span className="text-[#fccb27]">Huseyin.</span>
            </p>
            <p className="mb-5 text-6xl">
              I am a Software Engineer based in the San Francisco Bay Area
            </p>
          </h1>

          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <a
              className="rounded-full shadow-lg bg-[#fccb27] text-[#090c14] p-6 cursor-pointer hover:scale-105 ease-in duration-300"
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
              <div className="rounded-full shadow-lg bg-[#fccb27] text-[#090c14] p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                <FaGithub />
              </div>
            </a>
            <a
              href="https://docs.google.com/document/d/1PIrP_2ezPlbTSz4XAQUctbmX-w3dwORk/edit?usp=sharing&ouid=107685470308641630174&rtpof=true&sd=true"
              // target="_blank"
              // rel="noreferrer"
            >
              <div className="rounded-full shadow-lg bg-[#fccb27] text-[#090c14] p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                <FaRegFilePdf />
              </div>
            </a>
            <Link
              href="mailto:gumusucb21@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg bg-[#fccb27] text-[#090c14] p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineMail />
              </div>
            </Link>
          </div>
        </div>
        <div className="h-auto m-auto shadow-2xl shadow-gray-600 rounded-full flex items-center justify-center p-2">
          <Image
            src={WelcomeImg}
            className=" rounded-full"
            alt="/"
            width="750px"
            height="750px"
          />
        </div>
      </div>
    </div>
  );
}
