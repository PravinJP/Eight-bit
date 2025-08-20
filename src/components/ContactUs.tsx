import { useState } from "react";
import { motion, easeOut } from "framer-motion";
import InstagramIcon from "./icons/InstagramIcon";
import LinkedinIcon from "./icons/LinkedInIcon";
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
      transition: { duration: 0.5, ease: easeOut },
    },
    exit: {
      opacity: 0,
      scale: 0,
      transition: { duration: 0.5, ease: easeOut },
    },
  };

  return (
    <div className="w-full h-screen flex justify-center items-center p-4 sm:p-6 backdrop-blur-sm bg-black/30 z-50 fixed top-0 left-0">
      <motion.div
        variants={popupVariant}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] rounded-2xl sm:rounded-3xl p-5 sm:p-8 w-full max-w-lg sm:max-w-3xl shadow-xl relative text-white overflow-hidden"
      >
        {/* Background Effects */}
        <div className="absolute top-0 left-0 w-24 h-24 sm:w-40 sm:h-40 bg-orange-500 opacity-60 rounded-full blur-2xl sm:blur-3xl z-0" />
        <div className="absolute bottom-0 right-0 w-24 h-24 sm:w-40 sm:h-40 bg-orange-500 opacity-60 rounded-full blur-2xl sm:blur-3xl z-0" />

        {/* Close Button */}
        <button
          onClick={() => setContactvisible(false)}
          className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-white text-black rounded-full w-7 h-7 sm:w-8 sm:h-8 flex justify-center items-center text-lg sm:text-xl z-10"
        >
          &times;
        </button>

        {/* Title */}
        <h2 className="text-2xl sm:text-4xl font-semibold mb-4 sm:mb-6 z-10 relative">
          Contact Us
        </h2>

        {/* Form */}
        <form
          className="flex flex-col gap-4 sm:gap-6 z-10 relative"
          onSubmit={handleSubmit}
        >
          {/* Name */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex flex-col w-full">
              <label className="mb-1 text-xs sm:text-sm" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                required
                placeholder="Your name"
                className="bg-black border rounded-md px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base text-white placeholder:text-gray-400"
              />
            </div>
          </div>

          {/* Email & Phone */}
          <div className="flex flex-col md:flex-row gap-4">
            {/* Email */}
            <div className="flex flex-col w-full">
              <label className="mb-1 text-xs sm:text-sm" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                placeholder="your@email.com"
                className="bg-black border rounded-md px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base text-white placeholder:text-gray-400"
              />
            </div>

            {/* Phone */}
            <div className="flex gap-2 w-full">
              {/* Country Code */}
              <div className="flex flex-col w-1/3">
                <label className="mb-1 text-xs sm:text-sm" htmlFor="country_code">
                  Code
                </label>
                <select
                  id="country_code"
                  name="country_code"
                  defaultValue="+91"
                  className="bg-black border rounded-md px-2 sm:px-3 py-2 sm:py-3 text-sm sm:text-base text-white"
                >
                  <option value="+91">+91</option>
                  <option value="+1">+1</option>
                </select>
              </div>

              {/* Phone Number */}
              <div className="flex flex-col w-2/3">
                <label className="mb-1 text-xs sm:text-sm" htmlFor="phone_number">
                  Phone number
                </label>
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
                  className={`bg-black border rounded-md px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base text-white placeholder:text-gray-400 ${
                    phoneError ? "border-red-500" : ""
                  }`}
                />
                {phoneError && (
                  <span className="text-red-500 text-xs sm:text-sm mt-1">
                    {phoneError}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Message */}
          <div className="flex flex-col">
            <label className="mb-1 text-xs sm:text-sm" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              name="message"
              maxLength={100}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your message..."
              className="bg-black border rounded-md px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base text-white placeholder:text-gray-400 resize-none"
            />
            <div className="text-right text-[10px] sm:text-xs text-gray-400 mt-1">
              {message.length}/100
            </div>
          </div>

          {/* Submit & Social */}
          <div className="flex justify-between items-center flex-wrap gap-3 sm:gap-4 mt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="text-black bg-white font-medium text-lg sm:text-2xl px-5 py-3 sm:px-7 sm:py-5 rounded-2xl sm:rounded-3xl flex gap-2 items-center hover:bg-orange-400 hover:text-white"
            >
              {isSubmitting ? "Sending..." : "Send message"}
            </button>

            {/* Social Links */}
            <div className="flex gap-3 sm:gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center"
              >
                <InstagramIcon className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center"
              >
                <LinkedinIcon className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
              </a>
              <a
                href="mailto:hello@example.com"
                className="bg-white w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center"
              >
                <MailIconSmall className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
              </a>
            </div>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default ContactUs;
