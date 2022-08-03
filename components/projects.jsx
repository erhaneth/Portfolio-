import React from "react";
import Image from "next/image";
import wordieImg from "../public/projects/wordie.png";
import blockquoteImg from "../public/projects/blockquote.png";
import dettiposImg from "../public/projects/dettipos.png";
import dbankImg from "../public/projects/dbank.png";

import Link from "next/link";
import ProjectItems from "./projectItems";

export default function Projects() {
  return (
    <div id='projects' className="w-full">
      <div className="max-w-[1240px]  mx-auto px-2 py-16">
        <p className="text-xl flex justify-center tracking-widest uppercase text-[#090c14]">
          Projects
        </p>
        <h1 className="py-4 flex justify-center">My Projects</h1>
        <div className="grid md:grid-cols-2 gap-8">
          {/* parent container project item components */}
          <ProjectItems
            title="Wordie"
            backgroundImage={wordieImg}
            projectUrl="https://github.com/erhaneth/wordie"
          />
          <ProjectItems
            title="Blockquote"
            backgroundImage={blockquoteImg}
            projectUrl="https://github.com/erhaneth/blockquote"
          />
          <ProjectItems
            title="Dettipos"
            backgroundImage={dettiposImg}
            projectUrl="https://github.com/erhaneth/pos-client"
          />
          <ProjectItems
            title="Dbank"
            backgroundImage={dbankImg}
            projectUrl="https://github.com/erhaneth/dbank"
          />
        </div>
      </div>
    </div>
  );
}
