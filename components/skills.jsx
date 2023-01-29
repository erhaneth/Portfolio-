import React from "react";
import Image from "next/image";

export default function Skills() {
  return (
    <div id="skills" className="lg:w-full bg-[#f5f5f5] p-20">
      <div className="max-w-7xl mx-auto p-2 flex flex-col justify-center h-full">
        <p className="uppercase flex justify-center text-3xl text-bold tracking-widest text-[#090c14]">
          Skills
        </p>

        <div className="p-2 flex  flex-row shadow-lg hover:scale-105 py-14">
          <div className="flex items-center justify-between m-auto">
            <Image src="/skills/html.png" width="54px" height="54px" alt="/" />
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
            <Image src="/skills/react.png" width="54px" height="54px" alt="/" />
          </div>
        </div>
        <div className="p-2 flex  flex-row shadow-lg hover:scale-105 py-14">
          <div className="flex items-center justify-between m-auto">
            <Image src="/skills/node.png" width="54px" height="54px" alt="/" />
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
            <Image src="/skills/next.png" width="54px" height="54px" alt="/" />
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
        <div className="p-2 flex  flex-row shadow-lg hover:scale-105 py-14">
          <div className="flex items-center justify-between m-auto">
            <Image src="/skills/sql.png" width="54px" height="54px" alt="/" />
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
            <Image src="/skills/post.png" width="54px" height="54px" alt="/" />
          </div>
        </div>
      </div>
    </div>
  );
}
