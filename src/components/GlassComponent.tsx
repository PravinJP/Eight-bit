import React from "react";
import { motion } from "framer-motion";
import "./index.css";

const GlassComponent: React.FC = () => {
  /**
   * Glassmorphism Component
   * Add a dark background for the parent element
   */
  return (
    <motion.div
      initial={{ opacity: 1, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.02 }}
      className="flex w-[350px] h-[500px] gradient-border-wrapper"
    >
      <div className=" w-full h-full rounded-[24px] gap-[-90px] bg-[#201F01] gradient-border-inner items-center justify-center flex flex-col overflow-clip">
        {/* Top Section */}
        <motion.div
          initial={{ y: -300 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.6, duration: 0.5, ease: "easeOut" }}
          className="flex w-full h-full gradient-border-wrapper-top rounded-b-3xl"
        >
          <div className="w-full h-full rounded-[22px] bg-[#201F01]/50 backdrop-blur-[100px]" />
        </motion.div>

        {/* Icon Section */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1, duration: 0.3, ease: "backOut" }}
          className="flex items-center justify-center p-6 h-full rounded-[40px] top-1/2 right-1/2 aspect-square -my-[90px] bg-white/5 backdrop-blur-2xl"
        >
          <img className="w-3/4" src="/icon.svg" alt="icon" />
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ y: 300 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.6, duration: 0.5, ease: "easeOut" }}
          className="flex w-full h-full gradient-border-wrapper-bottom rounded-t-3xl relative"
        >
          <div className="w-full h-full rounded-[22px] flex  bg-[#201F01]/50 backdrop-blur-[5px] overflow-clip ">
            <motion.img
              initial={{ y: 300 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.9, duration: 0.8, ease: "easeOut" }}
              className="fixed min-min-w-[600px] top-1/2 blur-2xl drop-shadow-[#ff862f]"
              src="/gradient.svg"
              alt="gradient"
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default GlassComponent;