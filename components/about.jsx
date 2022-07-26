//special ssr image component
import React from "react";
import Image from "next/image";
import AboutImg from "../public/about.jpg";

export default function About() {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="w-full md:screen p-2 flex items-center py-10">
        <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
          <div className="col-span-2 max-w-lg mx-auto">
            <p1 className="uppercase flex justify-center text-xl tracking-widest text-[#090c14]">
              About
            </p1>
            <p className="py-4 text-gray-600 m-auto text-xl">
              I am interested in developing efficient and user-centric projects.
              Primarily work with Fullstack tools and related technologies, and
              always seek to immerse myself in new tech to understand how issues
              can be solved more effectively. Passionate about blockchain
              technology and motivated to make it broadly accessible and
              utilized.
            </p>
          </div>
          <div className="w-full h-auto m-auto shadow-xl shadow-gray-600 rounded-xl flex items-center justify-center p-4 ">
            <Image src={AboutImg} className="rounded-3xl" alt="/" />
          </div>
        </div>
      </div>
    </div>
  );
}
