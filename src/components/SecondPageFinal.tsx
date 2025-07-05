import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import GlassComponent from "./GlassComponent";

const SecondPageFinal = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setShow(true), 50);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="w-full  flex flex-row max-w-[1390px] items-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={show ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full  gap-[12px] justify-between flex flex-col"
      >
        <div className="action-button-container flex">
          <button className=" gap-[10px] px-[18px] py-[16px] bg-white/10 backdrop-blur-2xl rounded-[32px] text-xl font-semibold flex items-center text-white">
            About us
            <img className="w-6 h-6" src="/about us.svg" alt="" />
          </button>
        </div>
        <div className="action-button-container flex  mt-4">
          <p className="text-5xl medium text-white">
            We Empower businesses <br />
            with reliable, modern <br />
            digital solutions.
          </p>
        </div>
        <div className=" mt-6 ">
          <p className="text-2xl norml text-white">
            We build robust web & mobile apps, SaaS platforms, and custom <br />
            solutions to help startups, SMEs, and enterprises grow faster.
          </p>
        </div>
        <div className="gap-auto flex flex-row mt-8">
          <div className="flex flex-col justify-between">
            <div className="  flex flex-row gap-[10px]">
              <img
                className="w-[39.5px] h-[39.5px]"
                src="/fsdlogo.svg"
                alt=""
              />
              <p className="font-poppins  text-white align-center">
                Full stack development
              </p>
            </div>
            <div className=" flex flex-row gap-[10px] mt-4">
              <img
                className="w-[39.5px] h-[39.5px]"
                src="/Maintenancelogo.svg"
                alt=""
              />
              <p className="font-poppins  text-white">Maintenance & Support</p>
            </div>
            <div className="w-[318.5px] h-[39.5px] flex flex-row gap-[10px] mt-6">
              <img
                className="w-[39.5px] h-[39.5px]"
                src="/SeoLogo.svg"
                alt=""
              />
              <p className="font-poppins line-height-[38px] line-spacing-[-0.6px] text-white">
                SEO & Optimization
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <div className=" w-[318.5px] h-[39.5px] flex flex-row gap-[10px]">
              <img
                className="w-[39.5px] h-[39.5px]"
                src="/fsdlogo.svg"
                alt=""
              />
              <p className="font-poppins line-height-[38px] line-spacing-[-0.6px] text-white align-center">
                Full stack development
              </p>
            </div>
            <div className="w-[318.5px] h-[39.5px] flex flex-row gap-[10px] mt-4">
              <img
                className="w-[39.5px] h-[39.5px]"
                src="/Maintenancelogo.svg"
                alt=""
              />
              <p className="font-poppins line-height-[38px] line-spacing-[-0.6px] text-white">
                Maintenance & Support
              </p>
            </div>
            <div className="w-[318.5px] h-[39.5px] flex flex-row gap-[10px] mt-6">
              <img
                className="w-[39.5px] h-[39.5px]"
                src="/SeoLogo.svg"
                alt=""
              />
              <p className="font-poppins line-height-[38px] line-spacing-[-0.6px] text-white">
                SEO & Optimization
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      <GlassComponent />
    </div>
  );
};

export default SecondPageFinal;
