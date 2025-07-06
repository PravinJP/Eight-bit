import type { ReactNode } from "react";
import { motion, useInView } from "framer-motion";
import { Component } from "./BoxComponent";
import { useRef } from "react";

export interface ComponentElements {
  title: ReactNode;
  imgUrl: string;
}

const Test = () => {
  const comps: ComponentElements[] = [
    {
      title: <h1>Tailored Digital Solutions</h1>,
      imgUrl: "3rdPage.svg",
    },
    {
      title: "Scalable Architecture",
      imgUrl: "3rdPage.svg",
    },
    {
      title: (
        <h1>
          Faster Time <br /> to Market
        </h1>
      ),
      imgUrl: "3rdPage.svg",
    },
    {
      title: "Robust & Security",
      imgUrl: "P3-21.svg",
    },
    {
      title: "End-to-End Support",
      imgUrl: "P3-22.svg",
    },
    {
      title: "Transparent Pricing",
      imgUrl: "P3-33.svg",
    },
  ];

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, {
    once: true,
    amount: 0.5,
  });

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full p-9 gap-12 flex flex-col justify-center items-center"
    >
      {/* Button Container */}
      <div className="action-button-container mb-4">
        <motion.button
          initial={{ backgroundColor: "rgba(255,255,255,0.1)" }}
          whileInView={{
            backgroundColor: "rgba(255,255,255,0.1)",
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
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: idx * 0.1 }}
            whileHover="hovered"
            whileTap="tapped"
            className="rounded-2xl"
            style={{ perspective: 1000 }}
          >
            <motion.div
              variants={{
                hovered: {
                  scale: 1.05,
                  rotateX: 5,
                  rotateY: -5,
                  boxShadow: "0 12px 35px rgba(255, 165, 0, 0.5)",
                },
                tapped: {
                  scale: 1.06,
                  rotateX: 8,
                  rotateY: -8,
                  boxShadow: "0 16px 45px rgba(255, 165, 0, 0.5)",
                },
              }}
              transition={{ type: "spring", stiffness: 120, damping: 16 }}
              className="rounded-2xl"
            >
              <motion.div
                variants={{
                  hovered: { scale: 1.03 },
                  tapped: { scale: 1.05 },
                }}
                transition={{ type: "spring", stiffness: 140, damping: 18 }}
                className="rounded-2xl"
              >
                <Component title={com.title} imgUrl={com.imgUrl} />
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Test;
