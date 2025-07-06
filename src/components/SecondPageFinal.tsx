import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import GlassComponent from "./GlassComponent";

const SecondPageFinal = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <div className="w-full flex flex-row max-w-[1390px] items-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={show ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full gap-[12px] justify-between flex flex-col"
      >
        <div className="action-button-container flex">
          <button className="gap-[10px] px-[18px] py-[16px] bg-white/10 backdrop-blur-2xl rounded-[32px] text-xl font-semibold flex items-center text-white">
            About us
            <img className="w-6 h-6" src="/about us.svg" alt="" />
          </button>
        </div>

        <div className=" w-full action-button-container flex mt-4">
          <p className="text-4xl font-medium text-white leading-tight ">
            We Empower businesses 
            with reliable, modern 
            digital solutions.
          </p>
        </div>

        <div className="mt-6">
          <p className="text-xl norml text-white">
            We build robust web & mobile apps, SaaS platforms, and custom <br />
            solutions to help startups, SMEs, and enterprises grow faster.
          </p>
        </div>

        <div className="gap-auto flex flex-row mt-8 ">
          <div className="flex flex-col justify-between gap-4 ">
            <div className="flex flex-row gap-[10px] items-center">
              <img className="w-[36px] h-[36px]" src="/P2-11.svg" alt="" />
              <p className="font-poppins text-white align-center">
                Full stack development
              </p>
            </div>

            <div className="flex flex-row gap-[10px] items-center ">
              <img className="w-[36px] h-[36px]" src="/P2-12.svg" alt="" />
              <p className="font-poppins text-white">Maintenance & Support</p>
            </div>

            <div className="w-[318.5px] h-[39.5px] flex flex-row gap-[10px] items-center ">
              <img className="w-[36px] h-[36px]" src="/P2-13.svg" alt="" />
              <p className="font-poppins text-white">SEO & Optimization</p>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-4">
            <div className="w-[318.5px] h-[39.5px] flex flex-row gap-[10px] items-center">
              <img className="w-[36px] h-[36px]" src="/P2-21.svg" alt="" />
              <p className="font-poppins text-white align-center">
                Full stack development
              </p>
            </div>

            <div className="w-[318.5px] h-[39.5px] flex flex-row gap-[10px] items-center ">
              <img className="w-[36px] h-[36px]" src="/P2-22.svg" alt="" />
              <p className="font-poppins text-white">Maintenance & Support</p>
            </div>

            <div className="w-[318.5px] h-[39.5px] flex flex-row gap-[10px] items-center ">
              <img className="w-[36px] h-[36px]" src="/P2-23.svg" alt="" />
              <p className="font-poppins text-white">SEO & Optimization</p>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={show ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        className="flex w-full gradient-border-wrapper"
      >
        <div className="relative w-full rounded-[24px] bg-[#201F01] gradient-border-inner items-center justify-center flex flex-col overflow-clip">
          <div className="flex w-full h-full gradient-border-wrapper-top rounded-b-3xl">
            <div className="w-full h-full rounded-[22px] bg-[#201F01]/50 backdrop-blur-[100px]" />
          </div>

          <div className="flex items-center justify-center p-6 h-full rounded-[19.2px] top-1/2 right-1/2 aspect-square -my-[90px] bg-white/5 backdrop-blur-2xl z-10">
            <img className="w-3/4" src="/rising-logo-orange.svg" alt="" />
          </div>

          <div className="flex w-full h-full gradient-border-wrapper-bottom rounded-t-3xl">
            <div className="absolute w-full h-full rounded-[22px] bg-[#201F01]/50 backdrop-blur-[10px] gradient-border-inner">
              <img
                className="absolute -bottom-30 w-200 aspect-square"
                src="/orange2.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </motion.div>

      <GlassComponent />
    </div>
  );
};

export default SecondPageFinal;
