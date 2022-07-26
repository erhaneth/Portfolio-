import React from "react";
import Image from "next/image";

export default function Skills() {
  return (
    <div id="skills" className="lg:w-full">
      <div className="max-w-4xl mx-auto flex flex-col justify center h-full">
        <p className="pb-4 uppercase flex justify justify-center items-center text-xl tracking-widest text-[#090c14]">
          Skills
        </p>

        <div className="p-2 flex  flex-row shadow-lg hover:scale-105">
          <div className="flex items-center justify-between m-auto">
            <Image
              src="/skills/html.png"
              width="54px"
              height="54px"
              alt="/"
            />
          </div>
          <div className="flex items-center justify-between m-auto">
            <Image
              src="/skills/javascript.png"
              width="54px"
              height="54px"
              alt="/"
            />
          </div>
          <div className="flex items-center justify-between m-auto">
            <Image
              src="/skills/python.png"
              width="54px"
              height="54px"
              alt="/"
            />
          </div>
          <div className="flex items-center justify-between m-auto">
            <Image
              src="/skills/react.png"
              width="54px"
              height="54px"
              alt="/"
            />
          </div>
        </div>
        <div className="p-2 flex  flex-row shadow-lg hover:scale-105">
          <div className="flex items-center justify-between m-auto">
            <Image
              src="/skills/node.png"
              width="54px"
              height="54px"
              alt="/"
            />
          </div>
          <div className="flex items-center justify-between m-auto">
            <Image
              src="/skills/solidity.png"
              width="54px"
              height="54px"
              alt="/"
            />
          </div>
          <div className="flex items-center justify-between m-auto">
            <Image
              src="/skills/next.png"
              width="54px"
              height="54px"
              alt="/"
            />
          </div>
          <div className="flex items-center justify-between m-auto">
            <Image
              src="/skills/tailwind.png"
              width="54px"
              height="54px"
              alt="/"
            />
          </div>
        </div>
        <div className="p-2 flex  flex-row shadow-lg hover:scale-105">
        <div className="flex items-center justify-between m-auto">
            <Image
              src="/skills/sql.png"
              width="54px"
              height="54px"
              alt="/"
            />
          </div>
          <div className="flex items-center justify-between m-auto">
            <Image
              src="/skills/mongodb.png"
              width="54px"
              height="54px"
              alt="/"
            />
          </div>

          <div className="flex items-center justify-between m-auto">
            <Image
              src="/skills/express.png"
              width="54px"
              height="54px"
              alt="/"
            />
          </div>
          <div className="flex items-center justify-between m-auto">
            <Image
              src="/skills/post.png"
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
