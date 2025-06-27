import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { Component } from "./BoxComponent";

export interface ComponentElements {
  title: ReactNode;
  imgUrl: string;
}

const Test = () => {
  const comps: ComponentElements[] = [
    {
      title: <h1>Tailored <br /> Digital Solutions</h1>,
      imgUrl: "3rdPage.svg",
    },
    {
      title: "Scalable Architecture",
      imgUrl: "3rdPage.svg",
    },
    {
      title: <h1>Faster Time <br /> to Market</h1>,
      imgUrl: "3rdPage.svg",
    },
    {
      title: "Robust & Security",
      imgUrl: "3rdPage.svg",
    },
    {
      title: "End-to-End Support",
      imgUrl: "3rdPage.svg",
    },
    {
      title: "Transparent Pricing",
      imgUrl: "3rdPage.svg",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full p-9 gap-12 flex flex-col justify-center items-center"
    >
      {/* Button Container */}
      <div className="action-button-container mb-4">
        <motion.button
          initial={{ backgroundColor: "rgba(255,255,255,0.1)" }}
          whileInView={{
            backgroundColor: "rgba(255,165,0,0.2)",
            transition: { duration: 0.6, ease: "easeOut" },
          }}
          viewport={{ once: true }}
          className="gap-[10px] px-[18px] py-[16px] backdrop-blur-2xl rounded-[32px] text-xl font-medium flex items-center text-white"
        >
          All About us
          <img className="w-[24px] h-[24px]" src="/about us.svg" alt="" />
        </motion.button>
      </div>

      {/* Text Block */}
      <div className="text-5xl bg-gradient-to-r from-[#383838] to-[#ffffff] bg-clip-text text-transparent flex text-center py-2 -mt-4">
        The Key benefits of <br />
        partnering
      </div>

      {/* Component Grid */}
      <div className="w-[1000px] grid items-center grid-cols-3 row-end-2 gap-10">
        {comps.map((com, idx) => (
          <motion.div
            key={idx}
            whileHover={{
              boxShadow: "0 0 20px rgba(255, 165, 0, 0.7)", // Orange glow
              transition: { duration: 0.3 },
            }}
            className="rounded-2xl"
          >
            <Component title={com.title} imgUrl={com.imgUrl} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Test;
