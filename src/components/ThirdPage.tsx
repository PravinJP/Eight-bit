"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { Component } from "./BoxComponent";

export interface ComponentElements {
  title: ReactNode;
  imgUrl: string;
}

const ThirdPage = () => {
  const comps: ComponentElements[] = [
    { title: <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold">Tailored <br /> Digital Solutions</h1>, imgUrl: "3rdPage.svg" },
    { title: <p className="text-base sm:text-lg lg:text-xl font-medium">Scalable Architecture</p>, imgUrl: "P3-21.svg" },
    { title: <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold">Faster Time <br /> to Market</h1>, imgUrl: "P3-22.svg" },
    { title: <p className="text-base sm:text-lg lg:text-xl font-medium">Robust & Security</p>, imgUrl: "P3-33.svg" },
    { title: <p className="text-base sm:text-lg lg:text-xl font-medium">End-to-End Support</p>, imgUrl: "3rdPage.svg" },
    { title: <p className="text-base sm:text-lg lg:text-xl font-medium">Transparent Pricing</p>, imgUrl: "P3-33.svg" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full p-4 sm:p-9 flex flex-col justify-center items-center gap-6 sm:gap-12"
    >
      {/* Button Container */}
      <div className="action-button-container mb-2 sm:mb-4">
        <motion.button
          initial={{ backgroundColor: "rgba(255,255,255,0.1)" }}
          whileInView={{
            backgroundColor: "rgba(255,165,0,0.2)",
            transition: { duration: 0.6, ease: "easeOut" },
          }}
          viewport={{ once: true }}
          className="gap-2 px-4 py-2 sm:px-4 sm:py-3 backdrop-blur-2xl rounded-full text-sm sm:text-xl font-medium flex items-center text-white"
        >
          Team Vision
          <img
            className="w-[16px] h-[16px] sm:w-[24px] sm:h-[24px]"
            src="/about us.svg"
            alt=""
          />
        </motion.button>
      </div>

      {/* Text Block */}
      <div className="text-xl sm:text-4xl md:text-5xl bg-gradient-to-r from-[#383838] to-[#ffffff] bg-clip-text text-transparent text-center py-1 sm:py-2 -mt-2 sm:-mt-4 font-semibold leading-snug">
        The Key benefits of <br /> partnering
      </div>

      {/* Components */}
      <div className="w-full max-w-[1000px]">
        {/* Mobile: carousel cards */}
        <div className="sm:hidden flex overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar">
          {comps.map((com, idx) => (
            <motion.div
              key={idx}
              whileTap={{ scale: 0.95 }}
              className="min-w-[75%] mx-2 flex-shrink-0 snap-center"
            >
              <Component title={com.title} imgUrl={com.imgUrl} index={idx} />
            </motion.div>
          ))}
        </div>

        {/* Tablet/Desktop: grid */}
        <div className="hidden sm:grid grid-cols-2 md:grid-cols-3 gap-10">
          {comps.map((com, idx) => (
            <motion.div
              key={idx}
              whileHover={{
                boxShadow: "0 0 20px rgba(255, 165, 0, 0.7)",
                transition: { duration: 0.3 },
              }}
              className="rounded-2xl"
            >
              <Component title={com.title} imgUrl={com.imgUrl} index={idx} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ThirdPage;
