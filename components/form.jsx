import React, { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitStatus, setSubmitStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // add your form submission logic here, such as sending an email or sending data to a server
    setSubmitStatus("Form submitted!");
    window.location.reload(false);
  };

  return (
    <div className="bg-[#f5f5f5] p-10">
      <p className="flex justify-center text-3xl text-bold tracking-widest text-[#090c14] ">
        Contact
      </p>
      <form className="max-w-[330px] m-auto" onSubmit={handleSubmit}>
        <label className="text-gray-800 block mb-2">Name:</label>
        <input
          className="rounded-md border border-gray-400 p-2"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label className="text-gray-800 block mb-2">Email:</label>
        <input
          className="rounded-md border border-gray-400 p-2"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label className="text-gray-800 block mb-2">Message:</label>
        <textarea
          className="rounded-md border border-gray-400 p-2 h-40"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button
            type="submit"
            className="bg-[#fccb27] text-[#090c14] p-2 rounded-md cursor-pointer hover:scale-105 ease-in duration-300 mt-4"
          >
            Submit
          </button>
        </div>

        {submitStatus && (
          <p className="text-green-500 text-center mt-4">{submitStatus}</p>
        )}
      </form>
    </div>
  );
}
