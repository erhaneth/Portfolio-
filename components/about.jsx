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
              I am a software developer with a business background and a
              barista. I enjoy solving problems and developing{" "}
              <span className="font-bold text-black">efficient</span> and
              <span className="font-bold text-black">user-centric</span>{" "}
              products.
            </p>
            <p className="py-4 text-gray-600 m-auto text-xl">
              I work with JavaScript, Python, Solidity, React and I always seek
              to immerse myself in new tech tools to understand how issues can
              be solved{" "}
              <span className="font-bold text-black">more effectively.</span>
            </p>{" "}
            <p className="py-4 text-gray-600 m-auto text-xl">
              I have worked with people from diverse backgrounds and this has
              taught me how to foster an{" "}
              <span className="font-bold text-black">
                inclusive and positive
              </span>{" "}
              work environment.
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
