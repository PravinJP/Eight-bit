import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const CTI = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 1.0 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, ease: "easeOut" }}
      className="w-full gap-2.5 flex px-9 self-center justify-center items-center"
    >
      <div className="relative w-full h-[379px] max-w-[1390px] flex justify-center self-center items-center rounded-4xl overflow-clip">
        <img className="absolute top-[-0px]" src="/ctiellipse.svg" alt="" />
        <img
          className="absolute left-[-100px] bottom-[-50px]"
          src="/ctiellipse2.svg"
          alt=""
        />

        <div className="flex justify-center items-center flex-col">
          <div>
            <p className="text-center text-white text-5xl font-medium">
              Innovate. Build. Grow. <br /> End-to-End Web, App & SaaS
              Development.
            </p>
          </div>
          <div className="mt-2">
            <p className="text-center text-white">
              Tailored digital solutions — from concept to launch, built to
              empower <br />
              startups, SMEs, and large enterprises.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CTI;
