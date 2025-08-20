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
      className="w-full gap-2.5 flex px-4 sm:px-9 justify-center items-center"
    >
      <div className="relative w-full h-auto sm:h-[379px] max-w-[1390px] flex justify-center items-center rounded-4xl overflow-hidden py-6 sm:py-0">
        
        {/* Orange Patterns - visible on all devices */}
        <img
          className="absolute top-[-30px] left-1/2 -translate-x-1/2 w-[150px] sm:w-auto sm:top-0 sm:left-auto sm:translate-x-0"
          src="/ctiellipse.svg"
          alt=""
        />
        <img
          className="absolute left-[-50px] bottom-[-40px] w-[140px] sm:w-auto sm:left-[-100px] sm:bottom-[-50px]"
          src="/ctiellipse2.svg"
          alt=""
        />

        {/* Content */}
        <div className="flex flex-col items-center px-4 text-center relative z-10">
          <p className="text-white text-lg sm:text-2xl md:text-4xl lg:text-5xl font-medium leading-snug sm:leading-tight">
            Innovate. Build. Grow. <br className="hidden sm:block" />
            End-to-End Web, App & SaaS Development.
          </p>

          <p className="mt-3 text-white text-xs sm:text-sm md:text-base">
            Tailored digital solutions — from concept to launch, built to
            empower <br className="hidden sm:block" />
            startups, SMEs, and large enterprises.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default CTI;
