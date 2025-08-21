import PhoneIcon from "./icons/PhoneIcon";
import MailIcon from "./icons/MailIcon";
import LocationIcon from "./icons/LocationIcon";
import InstagramIcon from "./icons/InstagramIcon";
import LinkedInIcon from "./icons/LinkedInIcon";
import MailIconSmall from "./icons/MailIconSmall";
import type React from "react";

const Footer = ({
  setContactvisible,
}: {
  setContactvisible: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className="max-w-[1390px] w-full flex flex-col gap-12 px-6 sm:px-9 pt-9 pb-0 bg-[#393838] rounded-t-4xl">
      {/* Top Rectangle */}
      <div className="relative w-full h-[320px] sm:h-[458px] rounded-3xl bg-[url('/Footerful.svg')] bg-cover bg-center overflow-hidden">
        <div className="absolute top-10 sm:top-1/4 left-6 sm:left-12 z-10 space-y-2 sm:space-y-6">
          <p className="text-xl sm:text-5xl font-medium text-white leading-tight">
            So. What are you <br /> waiting for?
          </p>
          <p className="text-sm sm:text-xl text-white">
            Contact us and get the deal done
          </p>
          <button
            onClick={() => setContactvisible(true)}
            className="text-black mt-2 sm:mt-3 bg-white font-medium text-xs sm:text-lg px-3 sm:px-6 py-1.5 sm:py-3 rounded-3xl transition-colors flex gap-2 items-center cursor-pointer"
          >
            Contact us
            <img
              className="w-3.5 h-3.5 sm:w-5 sm:h-5"
              src="/arrowlogo.svg"
              alt="arrow"
            />
          </button>
        </div>
        <div className="absolute bottom-0 right-2 mb-4">
          <img src="/Eight-bit.svg" alt="Eight Bit Logo" />
        </div>
      </div>

      {/* Lower Footer */}
      <div className="w-full py-8 mt-4">
        <div className="flex flex-col lg:flex-row justify-between gap-10">
          {/* Left Column */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="flex items-center gap-2 justify-center">
              <img src="/logo.png" alt="Logo" className="w-8 sm:w-auto" />
              <p className="text-lg sm:text-2xl vt323-regular text-white">
                Eight Bit Tech
              </p>
            </div>

            <p className="text-white text-base sm:text-xl font-medium mt-4 sm:mt-6 leading-snug">
              Innovate smarter <br className="hidden sm:inline" /> Scale Faster
            </p>

            <div className="flex gap-3 mt-4 sm:mt-6 justify-center">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center"
              >
                <InstagramIcon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center"
              >
                <LinkedInIcon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500" />
              </a>
              <a
                href="mailto:eightbittechnologies8@gmail.com"
                className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center"
              >
                <MailIconSmall className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500" />
              </a>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col sm:flex-row gap-10 text-white items-center sm:items-start">
            {/* Pages */}
            <div className="hidden sm:flex flex-col gap-4 items-start">
              <p className="text-lg sm:text-xl font-semibold">Pages</p>
              <p className="text-sm sm:text-base">Home</p>
              <p className="text-sm sm:text-base">Help & Support</p>
              <p className="text-sm sm:text-base">FAQs</p>
            </div>

            {/* Contact */}
            <div className="flex flex-col gap-3 sm:gap-4 items-center sm:items-end text-center sm:text-right">
              <p className="text-lg sm:text-xl font-semibold">Contact Us</p>
              <div className="flex flex-col gap-3 sm:gap-4 items-center sm:items-end">
                <div className="flex items-center gap-2 sm:gap-3 flex-wrap justify-center sm:justify-end">
                  <PhoneIcon className="w-4 h-4 sm:w-auto" />
                  <a
                    href="tel:+919344461476"
                    className="text-sm sm:text-base hover:underline break-all"
                  >
                    +91 9344461476
                  </a>
                </div>
                <div className="flex items-center gap-2 sm:gap-3 flex-wrap justify-center sm:justify-end">
                  <MailIcon className="w-4 h-4 sm:w-auto" />
                  <a
                    href="mailto:eightbittechnologies8@gmail.com"
                    className="text-sm sm:text-base hover:underline break-all"
                  >
                    eightbittechnologies8@gmail.com
                  </a>
                </div>
                <div className="flex items-start gap-2 sm:gap-3 justify-center sm:justify-end">
                  <LocationIcon className="w-4 h-4 sm:w-auto" />
                  <p className="text-sm sm:text-base text-left sm:text-right leading-snug">
                    43 C, Veerapandi <br /> Coimbatore 34
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
