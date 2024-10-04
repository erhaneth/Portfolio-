import React, { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    setIsLoading(true);

    try {
      await submitFormToServer({ name, email, message });
      setIsSubmitted(true);
      setName("");
      setEmail("");
      setMessage("");
      setIsLoading(false);
    } catch (error) {
      setErrorMessage(
        "There was an error submitting the form. Please try again later."
      );
      setIsLoading(false);
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const submitFormToServer = async (formData) => {
    const response = await fetch("/api/sendEmail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    if (!response.ok) {
      throw new Error("Failed to send email");
    }
  };

  const SuccessCard = () => (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-[400px] mx-auto mt-8">
      <div className="text-center">
        <svg
          className="w-16 h-16 text-green-500 mx-auto mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Thank You!</h2>
        <p className="text-gray-600 mb-4">
          Your message has been successfully sent. I'll get back to you soon!
        </p>
      </div>
    </div>
  );

  return (
    <div id="contact" className="w-full bg-[#f5f5f5] py-20">
      <div className="max-w-[1240px] m-auto px-2">
        <h2 className="text-6xl font-bold text-center text-gray-800 mb-12">
          Get In <span className="text-[#fccb27]">Touch</span>
        </h2>
        {isSubmitted ? (
          <SuccessCard />
        ) : (
          <form className="max-w-[600px] m-auto" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="uppercase text-sm py-2 text-gray-600">
                  Name
                </label>
                <input
                  className="border-2 rounded-lg p-3 flex border-gray-300 focus:outline-none focus:border-[#fccb27]"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="flex flex-col">
                <label className="uppercase text-sm py-2 text-gray-600">
                  Email
                </label>
                <input
                  className="border-2 rounded-lg p-3 flex border-gray-300 focus:outline-none focus:border-[#fccb27]"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="flex flex-col py-2">
              <label className="uppercase text-sm py-2 text-gray-600">
                Message
              </label>
              <textarea
                className="border-2 rounded-lg p-3 border-gray-300 focus:outline-none focus:border-[#fccb27]"
                rows="10"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full p-4 text-gray-100 mt-4 bg-[#fccb27] rounded-lg hover:bg-[#e6b722] transition-all duration-300 ease-in-out"
              disabled={isLoading}
            >
              {isLoading ? "Sending..." : "Send Message"}
            </button>
          </form>
        )}
        {errorMessage && (
          <p className="text-red-500 text-center mt-4 text-lg">
            {errorMessage}
          </p>
        )}
      </div>
    </div>
  );
}
