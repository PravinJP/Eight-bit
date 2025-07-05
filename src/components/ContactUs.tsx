import { useState } from "react";
import { motion, easeOut } from "framer-motion";
import InstagramIcon from "./icons/InstagramIcon";
import LinkedinIcon from "./icons/LinkedInIcon"; // ✅ Corrected casing
import MailIconSmall from "./icons/MailIconSmall";

const ContactUs = ({
  setContactvisible,
}: {
  setContactvisible: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [message, setMessage] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isNumeric = /^\d+$/.test(phoneNumber);
    if (!isNumeric || phoneNumber.length !== 10) {
      setPhoneError("Please enter a valid 10-digit phone number");
      return;
    } else {
      setPhoneError("");
    }

    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "e9bd6460-2f36-488d-97cf-8eeb747f9086");
    formData.append("subject", "New Inquiry For 8-BIT");
    formData.append("phone", phoneNumber);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        alert("Message sent successfully!");
        setMessage("");
        setPhoneNumber("");
        e.currentTarget.reset();
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Error sending message.");
    }

    setIsSubmitting(false);
  };

  const popupVariant = {
    hidden: { opacity: 0, scale: 0.4 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: easeOut }, // ✅ Fix for Framer Motion
    },
    exit: {
      opacity: 0,
      scale: 0,
      transition: { duration: 0.5, ease: easeOut },
    },
  };

  return (
    <div className="w-full h-screen flex justify-center items-center p-6 backdrop-blur-sm bg-black/30 z-50 fixed top-0 left-0">
      <motion.div
        variants={popupVariant}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] rounded-3xl p-8 w-full max-w-3xl shadow-xl relative text-white overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-40 h-40 bg-orange-500 opacity-60 rounded-full blur-3xl z-0" />
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-orange-500 opacity-60 rounded-full blur-3xl z-0" />

        <button
          onClick={() => setContactvisible(false)}
          className="absolute top-4 right-4 bg-white text-black rounded-full w-8 h-8 flex justify-center items-center text-xl z-10"
        >
          &times;
        </button>

        <h2 className="text-4xl font-semibold mb-6 z-10 relative">Contact Us</h2>

        <form className="flex flex-col gap-6 z-10 relative" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex flex-col w-full">
              <label className="mb-1 text-sm" htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                name="name"
                required
                placeholder="Your name"
                className="bg-black border rounded-md px-4 py-3 text-white placeholder:text-gray-400"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex flex-col w-full">
              <label className="mb-1 text-sm" htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                required
                placeholder="your@email.com"
                className="bg-black border rounded-md px-4 py-3 text-white placeholder:text-gray-400"
              />
            </div>

            <div className="flex gap-2 w-full">
              <div className="flex flex-col w-1/3">
                <label className="mb-1 text-sm" htmlFor="country_code">Code</label>
                <select
                  id="country_code"
                  name="country_code"
                  defaultValue="+91"
                  className="bg-black border rounded-md px-3 py-3 text-white"
                >
                  <option value="+91">+91</option>
                  <option value="+1">+1</option>
                </select>
              </div>

              <div className="flex flex-col w-2/3">
                <label className="mb-1 text-sm" htmlFor="phone_number">Phone number</label>
                <input
                  id="phone_number"
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
            <label className="mb-1 text-sm" htmlFor="message">Message</label>
            <textarea
              id="message"
              rows={4}
              name="message"
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

          <div className="flex justify-between items-center flex-wrap gap-4 mt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="text-black bg-white font-medium text-2xl px-7 py-5 rounded-3xl flex gap-2 items-center hover:bg-orange-400 hover:text-white"
            >
              {isSubmitting ? "Sending..." : "Send message"}
            </button>

            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white w-10 h-10 rounded-full flex items-center justify-center"
              >
                <InstagramIcon className="w-5 h-5 text-black" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white w-10 h-10 rounded-full flex items-center justify-center"
              >
                <LinkedinIcon className="w-5 h-5 text-black" />
              </a>
              <a
                href="mailto:hello@example.com"
                className="bg-white w-10 h-10 rounded-full flex items-center justify-center"
              >
                <MailIconSmall className="w-5 h-5 text-black" />
              </a>
            </div>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default ContactUs;
