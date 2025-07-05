import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./../index.css";

const GlassComponent: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once: true }); // Only trigger once when 50% visible

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.02 }}
      className="flex h-[500px] gradient-border-wrapper"
    >
      <div className="w-full h-full rounded-[24px] gap-[-90px] bg-[#ffffff09] gradient-border-inner items-center justify-center flex flex-col overflow-clip">
        {/* Top Section */}
        <motion.div
          initial={{ y: -300 }}
          animate={isInView ? { y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.5, ease: "easeOut" }}
          className="flex w-full h-full gradient-border-wrapper-top rounded-b-3xl"
        >
          <div className="w-full h-full rounded-[22px] bg-[#1b1b1b]/50 backdrop-blur-[100px]" />
        </motion.div>

        {/* Icon Section */}
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ delay: 1, duration: 0.3, ease: "backOut" }}
          className="flex items-center justify-center p-5 h-full rounded-[40px] top-1/2 right-1/2 aspect-square -my-[90px] bg-white/5 backdrop-blur-2xl"
        >
          <img className="w-3/4" src="/rising-logo-orange.svg" alt="icon" />
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ y: 300 }}
          animate={isInView ? { y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.5, ease: "easeOut" }}
          className="flex w-full h-full gradient-border-wrapper-bottom rounded-t-3xl relative"
        >
          <div className="w-full h-full rounded-[22px] flex bg-[#1b1b1b]/50 backdrop-blur-[5px] overflow-clip">
            <motion.img
              initial={{ y: 300 }}
              animate={isInView ? { y: 0 } : {}}
              transition={{ delay: 0.9, duration: 0.8, ease: "easeOut" }}
              className="fixed min-min-w-[600px] top-1/3 blur-2xl drop-shadow-[#ff862f]"
              src="/orange2.svg"
              alt="gradient"
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default GlassComponent;
