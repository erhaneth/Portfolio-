import React from "react";
import Image from "next/image";
import wordieImg from "../public/projects/wordie.png";
import blockquoteImg from "../public/projects/blockquote.png";
import dettiposImg from "../public/projects/dettipos.png";
import dbankImg from "../public/projects/dbank.png";

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
            projectUrl="/blockquote"
          />
          <ProjectItems
            title="Dettipos"
            backgroundImage={dettiposImg}
            projectUrl="/dettipos"
          />
          <ProjectItems
            title="Dbank"
            backgroundImage={dbankImg}
            projectUrl="/dbank"
          />
        </div>
      </div>
    </div>
  );
}
