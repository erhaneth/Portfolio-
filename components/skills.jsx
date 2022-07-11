import React from "react";
import Image from "next/image";

export default function Skills() {
  return (
    <div className="lg:w-1/2 p-2">
      <div className="max-w-2xl mx-auto flex flex-col justify center h-full">
        <p className="uppercase flex items-center text-xl tracking-widest text-[#090c14]">
          Skills
        </p>

        <div className="p-2 shadow-lg hover:scale-105">
          <div className="flex items-center justify-between m-auto">
            <Image
              src="/../public/skills/html.png"
              width="54px"
              height="54px"
              alt="/"
            />
          </div>
          <div className="flex items-center justify-between m-auto">
            <Image
              src="/../public/skills/javascript.png"
              width="54px"
              height="54px"
              alt="/"
            />
          </div>
          <div className="flex items-center justify-between m-auto">
            <Image
              src="/../public/skills/tailwind.png"
              width="54px"
              height="54px"
              alt="/"
            />
          </div>
          <div className="flex items-center justify-between m-auto">
            <Image
              src="/../public/skills/mongodb.png"
              width="54px"
              height="54px"
              alt="/"
            />
          </div>
          <div className="flex items-center justify-between m-auto">
            <Image
              src="/../public/skills/next.png"
              width="54px"
              height="54px"
              alt="/"
            />
          </div>
          <div className="flex items-center justify-between m-auto">
            <Image
              src="/../public/skills/python.png"
              width="54px"
              height="54px"
              alt="/"
            />
          </div>
          <div className="flex items-center justify-between m-auto">
            <Image
              src="/../public/skills/react.png"
              width="54px"
              height="54px"
              alt="/"
            />
          </div>
          <div className="flex items-center justify-between m-auto">
            <Image
              src="/../public/skills/express.png"
              width="54px"
              height="54px"
              alt="/"
            />
          </div>
          <div className="flex items-center justify-between m-auto">
            <Image
              src="/../public/skills/post.png"
              width="54px"
              height="54px"
              alt="/"
            />
          </div>
          <div className="flex items-center justify-between m-auto">
            <Image
              src="/../public/skills/node.png"
              width="54px"
              height="54px"
              alt="/"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
