import  { useState, useEffect } from "react";
import { motion } from "framer-motion";

const SecondPageFinal = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setShow(true), 50);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="w-full flex flex-col lg:flex-row max-w-[1390px] gap-10 px-4 mx-auto py-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={show ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full flex flex-col gap-6"
      >
        {/* About Us Button */}
        <div>
          <button className="flex items-center gap-2 px-4 py-3 bg-white/10 backdrop-blur-2xl rounded-full text-base sm:text-xl font-semibold text-white">
            About us
            <img className="w-5 h-5 sm:w-6 sm:h-6" src="/about us.svg" alt="" />
          </button>
        </div>

        {/* Main Heading */}
        <div>
          <p className="text-3xl sm:text-4xl lg:text-5xl font-medium text-white leading-tight">
            We Empower businesses <br />
            with reliable, modern <br />
            digital solutions.
          </p>
        </div>

        {/* Subheading */}
        <div>
          <p className="text-base sm:text-lg lg:text-2xl text-white leading-relaxed">
            We build robust web & mobile apps, SaaS platforms, and custom{" "}
            <br className="hidden lg:block" />
            solutions to help startups, SMEs, and enterprises grow faster.
          </p>
        </div>

        {/* Services Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
          {/* Left Group */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img className="w-8 h-8 sm:w-10 sm:h-10" src="/fsdlogo.svg" alt="" />
              <p className="text-white font-poppins text-sm sm:text-base">Full stack development</p>
            </div>
            <div className="flex items-center gap-3">
              <img className="w-8 h-8 sm:w-10 sm:h-10" src="/Maintenancelogo.svg" alt="" />
              <p className="text-white font-poppins text-sm sm:text-base">Maintenance & Support</p>
            </div>
            <div className="flex items-center gap-3">
              <img className="w-8 h-8 sm:w-10 sm:h-10" src="/SeoLogo.svg" alt="" />
              <p className="text-white font-poppins text-sm sm:text-base">SEO & Optimization</p>
            </div>
          </div>

          {/* Right Group */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img className="w-8 h-8 sm:w-10 sm:h-10" src="/P2-21.svg" alt="" />
              <p className="text-white font-poppins text-sm sm:text-base">Full stack development</p>
            </div>
            <div className="flex items-center gap-3">
              <img className="w-8 h-8 sm:w-10 sm:h-10" src="/P2-22.svg" alt="" />
              <p className="text-white font-poppins text-sm sm:text-base">SaaS Product</p>
            </div>
            <div className="flex items-center gap-3">
              <img className="w-8 h-8 sm:w-10 sm:h-10" src="/P2-23.svg" alt="" />
              <p className="text-white font-poppins text-sm sm:text-base">Website Design</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Right Side Graphic (desktop only) */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={show ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        className="hidden lg:flex w-full gradient-border-wrapper"
      >
        <div className="relative w-full rounded-[24px] bg-[#201F01] gradient-border-inner flex flex-col items-center justify-center overflow-clip">
          <div className="w-full h-full gradient-border-wrapper-top rounded-b-3xl">
            <div className="w-full h-full rounded-[22px] bg-[#201F01]/50 backdrop-blur-[100px]" />
          </div>

          <div className="flex items-center justify-center p-6 h-full rounded-[19.2px] top-1/2 right-1/2 aspect-square -my-[90px] bg-white/5 backdrop-blur-2xl z-10">
            <img className="w-3/4" src="/rising-logo-orange.svg" alt="logo" />
          </div>

          <div className="w-full h-full gradient-border-wrapper-bottom rounded-t-3xl">
            <div className="absolute w-full h-full rounded-[22px] bg-[#201F01]/50 backdrop-blur-[10px] gradient-border-inner">
              <img
                className="absolute -bottom-30 w-[200px] aspect-square"
                src="/orange2.svg"
                alt="orange graphic"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SecondPageFinal;
