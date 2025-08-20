import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import type React from "react";

const NavBar = ({ setContactvisible }: { setContactvisible: React.Dispatch<React.SetStateAction<boolean>> }) => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const mobileMenuVariants = {
    hidden: { x: "100%", opacity: 0 },
    visible: { x: 0, opacity: 1 },
    exit: { x: "100%", opacity: 0 },
  };

  return (
    <motion.div
      className="page-entry w-full max-w-[1390px] px-4 py-3.5 bg-white/10 backdrop-blur-[300px] rounded-[72px] flex flex-col md:flex-row justify-between items-center z-[2]"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
    >
      {/* Logo and Hamburger */}
      <div className="logo flex flex-row items-center gap-2 w-full md:w-auto justify-between">
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="logo" />
          <p className="text-2xl font-bai text-white">Eight Bit Tech</p>
        </div>
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex flex-row w-auto items-center gap-8 mt-4 md:mt-0">
        {["About","Services", "Products"].map((text, i) => (
          <h3
            key={i}
            onClick={() => text === "Services" && navigate("/thirdpage")}
            className="relative text-white cursor-pointer font-medium text-lg md:text-xl font-poppins leading-[28px]
                       after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white
                       after:transition-all after:duration-300 hover:after:w-full"
          >
            {text}
          </h3>
        ))}
      </div>

      {/* Mobile Sliding Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed top-0 right-0 h-screen w-[65%] sm:w-[60%] bg-gradient-to-b from-[#201F01] to-[#212121] bg-opacity-95 z-50 flex flex-col items-start p-4 sm:p-6 gap-4 md:hidden"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.4 }}
          >
            <button
              className="text-white text-xl self-end mb-3"
              onClick={() => setMobileMenuOpen(false)}
            >
              ✕
            </button>
            {["About","Services", "Products"].map((text, i) => (
              <h3
                key={i}
                onClick={() => {
                  if (text === "Services") navigate("/thirdpage");
                  setMobileMenuOpen(false);
                }}
                className="text-white text-base sm:text-lg font-poppins cursor-pointer"
              >
                {text}
              </h3>
            ))}
            <button
              onClick={() => {
                setContactvisible(true);
                setMobileMenuOpen(false);
              }}
              className="text-black bg-white px-3 py-2 rounded-xl mt-3 font-semibold flex items-center gap-2 text-sm sm:text-base"
            >
              Contact us
              <img className="w-[18px] h-[18px]" src="/arrowlogo.svg" alt="arrow" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Contact Button */}
      <div className="hidden md:flex mt-4 md:mt-0">
        <button
          onClick={() => setContactvisible(true)}
          className="text-black font-semibold text-base md:text-lg bg-white px-4 py-3 rounded-3xl transition-colors gap-2 cursor-pointer flex items-center"
        >
          Contact us
          <img className="w-[20px] h-[20px]" src="/arrowlogo.svg" alt="arrow" />
        </button>
      </div>
    </motion.div>
  );
};

export default NavBar;
