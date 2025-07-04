import { useNavigate } from "react-router-dom";
import PhoneIcon from "./icons/PhoneIcon";
import MailIcon from "./icons/MailIcon";
import LocationIcon from "./icons/LocationIcon";
import InstagramIcon from "./icons/InstagramIcon";
import LinkedInIcon from "./icons/LinkedInIcon";
import MailIconSmall from "./icons/MailIconSmall";
import type React from "react";

const Footer = ({setContactvisible} : {setContactvisible:React.Dispatch<React.SetStateAction<boolean>>}) => {
  const navigate = useNavigate();

  return (
    <div className="max-w-[1390px] h-[888px] gap-12 px-9 py-9 bg-[#393838] rounded-t-4xl ">
      {/* Top Rectangle */}
      <div className="relative w-full h-[458px] rounded-3xl bg-[url('/Footerful.svg')] bg-cover bg-center overflow-clip">
        {/* Right-Side */}
        <div className="absolute  gap-6 top-1/4 left-12 z-10">
          <div>
            <p className="w-full gap-1.5 text-6xl font-medium text-white">
              So. What are you <br/> waiting for ?
            </p>
            <p className="text-2xl mt-2 text-white">
              Contact us and get the deal done
            </p>
          </div>
          <button
            onClick={() => setContactvisible(true)}
            className="text-black bg-white font-medium text-2xl px-[26px] py-[18px] rounded-4xl transition-colors flex gap-2 mr-auto mt-2 items-center"
          >
            Contact us
            <img className="w-[24px] h-[24px]" src="/arrowlogo.svg" alt="arrow" />
          </button>
        </div>
        <div className="absolute bottom-0 right-2 mb-4 text-right text-white">
          <p className="text-5xl">Eight Bit Tech.</p>
          <p>©2022-25 All rights reserved</p>
        </div>
      </div>

      {/* down-footer */}
      <div className="w-full h-[306px] gap-2.5 py-8 mt-4">
        <div className="flex flex-row justify-between">
          {/* left */}
          <div>
            <div className="logo flex flex-row align-left items-center gap-2 mr-auto">
              <img src="/logo.png" alt="Logo" />
              <p className="text-2xl vt323-regular text-white items-center">
                Eight Bit Tech
              </p>
            </div>
            <div className="mt-6">
              <p className="text-white text-2xl font-medium">
                Innovate smarter <br /> Scale Faster
              </p>
            </div>

            <div className="gap-2 flex flex-row mt-8">
              <a
                href="https://instagram.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center"
              >
                <InstagramIcon className="w-5 h-5 text-gray-500" />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center"
              >
                <LinkedInIcon className="w-5 h-5 text-gray-500" />
              </a>
              <a
                href="mailto:eightbittechnologies8@gmail.com"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center"
              >
                <MailIconSmall className="w-5 h-5 text-gray-500" />
              </a>
              <a
                href="mailto:eightbittechnologies8@gmail.com"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center"
              >
                <MailIconSmall className="w-5 h-5 text-gray-500" />
              </a>
            </div>
          </div>

          {/* right */}
          <div className="gap-14 flex flex-row text-right">
            <div className="flex flex-col gap-8">
              <p className="text-2xl font-medium text-white">Pages</p>
              <p className="text-xl font-medium text-white">Home</p>
              <p className="text-xl font-medium text-white">Help & support</p>
              <p className="text-xl font-medium text-white">FAQs</p>
            </div>

            {/* Contact Us section */}
            <div className="flex flex-col gap-8">
              <p className="text-2xl font-medium text-white text-left">Contact Us</p>
              <div className="flex flex-col gap-6">
                <div className="flex flex-row gap-3.5">
                  <PhoneIcon />
                  <a
                    href="tel:+919344461476"
                    className="text-xl font-medium text-white text-end hover:underline"
                  >
                    +91 9344461476
                  </a>
                </div>
                <div className="flex flex-row gap-3.5">
                  <MailIcon />
                  <a
                    href="mailto:eightbittechnologies8@gmail.com"
                    className="text-xl font-medium text-white text-end hover:underline"
                  >
                    8bit@eb.con
                  </a>
                </div>
                <div className="flex flex-row gap-3.5 justify-center items-center">
                  <LocationIcon />
                  <p className="text-xl font-medium text-white text-end">
                    43 C, Veerapandi <br /> Coimbatore 34
                  </p>
                </div>
              </div>
            </div>
            {/* End of Contact Us */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
