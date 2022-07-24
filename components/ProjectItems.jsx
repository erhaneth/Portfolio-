import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function ProjectItems({ title, backgroundImage, projectUrl }) {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-2xl shadow-gray-300 rounded-xl p-4 group hover:bg-gradient-to-r from-slate-600 to-orange-400">
            <Image
              className="rounded-lg group-hover:opacity-5"
              src={backgroundImage}
              alt="/"
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <h3 className="text-xl text-white tracking-wider text-center ">
                {title}
              </h3>
              <p className="text-lg pb-4 pt-2 text-center text-white">
                This is a DOM project with js
              </p>
              <Link href={projectUrl}>
                <p className="text-center py-3 rounded-2xl bg-white text-gray-500 font-bold text-lg cursor-pointer">
                  More info
                </p>
              </Link>
            </div>
          </div>
  )
}
