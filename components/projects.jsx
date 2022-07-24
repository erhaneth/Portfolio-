import React from "react";
import Image from "next/image";
import wordieImg from "../public/contact.jpg";
import blockquoteImg from "../public/contact.jpg";
import dettiposImg from "../public/contact.jpg";
import dbankImg from "../public/contact.jpg";

import Link from "next/link";
import ProjectItems from "./ProjectItems";

export default function Projects() {
  return (
    <div className="w-full">
      <div className="max-w-[1240px] px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#090c14]">
          Projects
        </p>
        <h1 className="py-4">My Projects</h1>
        <div className="grid md:grid-cols-2 gap-8 ">
          {/* parent container project item components */}
          <ProjectItems
            title="Wordie"
            backgroundImage={wordieImg}
            projectUrl="/wordie"
          />
          <ProjectItems
            title="Blockquote"
            backgroundImage={blockquoteImg}
            projectUrl="/wordie"
          />
          <ProjectItems
            title="Dettipos"
            backgroundImage={dettiposImg}
            projectUrl="/wordie"
          />
          <ProjectItems
            title="Dbank"
            backgroundImage={dbankImg}
            projectUrl="/wordie"
          />
        </div>
      </div>
    </div>
  );
}
