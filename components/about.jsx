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
            I am a web developer that comes from business background and a former barista. 
            Through my past experiences, I can balance the need of
            businesses to understand their pain points and how I can
            contribute as a Software developer to solve problems. I have
            worked with a wide range of people from different backgrounds and
            demographics. This has enabled me to adapt and become flexible in
            the workplace.
            </p>
          </div>
          <div className="w-full  h-auto m-auto shadow-xl shadow-gray-600 rounded-xl flex items-center justify-center p-4 ">
            <Image src={AboutImg} className="rounded-3xl" alt="/" />
          </div>
        </div>
      </div>
    </div>
  );
}
