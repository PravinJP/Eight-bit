import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const ContactUs = ({setContactvisible} : {setContactvisible:React.Dispatch<React.SetStateAction<boolean>>})  => {
  const [message, setMessage] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const isNumeric = /^\d+$/.test(phoneNumber);

    if (!isNumeric || phoneNumber.length !== 10) {
      setPhoneError("Please enter a valid 10-digit phone number");
      return;
    } else {
      setPhoneError("");
    }

    console.log("Form submitted");
  };

  const popupVariant = {
    hidden: { opacity: 0, scale: 0.4 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    exit : {
       opacity: 0,
      scale: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    }
  };

  return (
    <div className="w-full h-screen flex justify-center  items-center p-6 backdrop-blur-sm bg-black/30 z-50 fixed top-0 left-0 ">
      <motion.div
        variants={popupVariant}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] rounded-3xl p-8 w-full max-w-3xl shadow-xl relative text-white overflow-hidden"
      >
        {/* Orange Glow - Top Left */}
        <div className="absolute top-0 left-0 w-40 h-40 bg-orange-500 opacity-60 rounded-full blur-3xl z-0" />
        {/* Orange Glow - Bottom Right */}
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-orange-500 opacity-60 rounded-full blur-3xl z-0" />

        {/* Close Button */}
        <button
          onClick={() => setContactvisible(false)}
          className="absolute top-4 right-4 bg-white text-black rounded-full w-8 h-8 flex justify-center items-center text-xl z-10"
        >
          &times;
        </button>

        <h2 className="text-4xl font-semibold mb-6 z-10 relative">Contact Us</h2>

        {/* Form */}
        <form className="flex flex-col gap-6 z-10 relative" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex flex-col w-full">
              <label className="mb-1 text-sm">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="bg-black border rounded-md px-4 py-3 text-white placeholder:text-gray-400"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex flex-col w-full">
              <label className="mb-1 text-sm">Email</label>
              <input
                type="email"
                placeholder="your@email.com"
                className="bg-black border rounded-md px-4 py-3 text-white placeholder:text-gray-400"
              />
            </div>

            <div className="flex gap-2 w-full">
              <div className="flex flex-col w-1/3">
                <label className="mb-1 text-sm">Code</label>
                <select
                  defaultValue="+91"
                  className="bg-black border rounded-md px-3 py-3 text-white"
                >
                  <option value="+91">+91</option>
                  <option value="+1">+1</option>
                </select>
              </div>

              <div className="flex flex-col w-2/3">
                <label className="mb-1 text-sm">Phone number</label>
                <input
                  type="tel"
                  maxLength={10}
                  inputMode="numeric"
                  placeholder="Enter 10-digit number"
                  value={phoneNumber}
                  onChange={(e) => {
                    const val = e.target.value;
                    if (/^\d*$/.test(val)) {
                      setPhoneNumber(val);
                    }
                  }}
                  className={`bg-black border rounded-md px-4 py-3 text-white placeholder:text-gray-400 ${
                    phoneError ? "border-red-500" : ""
                  }`}
                />
                {phoneError && (
                  <span className="text-red-500 text-sm mt-1">{phoneError}</span>
                )}
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <label className="mb-1 text-sm">Message</label>
            <textarea
              rows={4}
              maxLength={100}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your message..."
              className="bg-black border rounded-md px-4 py-3 text-white placeholder:text-gray-400 resize-none"
            />
            <div className="text-right text-xs text-gray-400 mt-1">
              {message.length}/100
            </div>
          </div>

          <div
            className="text-black bg-white font-medium text-2xl px-7 py-5 rounded-3xl flex gap-2 mr-auto
              hover:bg-orange-400 hover:text-white cursor-pointer"
          >
            <button type="submit" className="flex font-medium text-xl  gap-2 items-center">
              Send message
            </button>
          </div>
        </form>

        {/* Social Icons */}
        <div className="flex gap-4 mt-8 justify-end z-10 relative">
          {[
            { href: "https://instagram.com", src: "/icons/instagram.svg", alt: "Instagram" },
            { href: "https://linkedin.com", src: "/icons/linkedin.svg", alt: "LinkedIn" },
            { href: "mailto:hello@example.com", src: "/icons/mail.svg", alt: "Mail" },
            { href: "mailto:support@example.com", src: "/icons/mail.svg", alt: "Support" },
          ].map((icon, i) => (
            <a
              key={i}
              href={icon.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white w-10 h-10 rounded-full flex items-center justify-center"
            >
              <img src={icon.src} alt={icon.alt} className="w-5 h-5" />
            </a>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ContactUs;
