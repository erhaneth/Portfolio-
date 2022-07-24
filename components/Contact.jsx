import React from "react";
import contactImg from '../public/contact.jpg';

export default function Contact() {
  return (
    <div className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#090c14]">
          Contact
        </p>
        <h2 className="py-4">Any Question ?</h2>
        <div className="grid lg:grid-cols-5 gap-8">
            {/* right */}
          <div className="col-span-3 lg:col-span-2 w-full shadow-xl shadow-gray-300 rounded-xl p-4">
            <div className="lg:p-4 h-full">
                <div>
                    <img className="rounded-xl hover:scale-90 ease-in duration-300" src={contactImg} alt="/"/>
                </div>
            </div>
          </div>
            {/* left */}
        </div>
      </div>
    </div>
  );
}
