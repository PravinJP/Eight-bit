import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import React, { useEffect, useMemo, useRef, useState } from "react";

export const textVariants = {
  hidden: { opacity: 0, y: 20, transition: { duration: 0.3, ease: "easeIn" } },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3, ease: "easeIn" } },
};

export const barVariants = {
  hidden: { scaleY: 0, transition: { duration: 0.5, ease: "easeOut" } },
  visible: { scaleY: 1, transition: { duration: 0.5, ease: "easeOut" } },
  exit: { scaleY: 0, transition: { duration: 0.3, ease: "easeIn" } },
};

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};
export const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const TechStacksScroller: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Track the scroll progress of the div with correct offset
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"],
  });

  // Transform scroll progress into numbers
  const progressMotion = useTransform(scrollYProgress, [0, 1], [0, 300]);

  // State to store number values
  const [progress, setProgress] = useState(0);

  // Convert MotionValue to numbers
  useMotionValueEvent(progressMotion, "change", (v) => setProgress(v));

  useEffect(() => {
    progressMotion.on("change", (value) => {
      console.log("Scroll Progress:", value);
    });
  }, [progressMotion]);

const currentImage = useMemo(() => {
  if (progress <= 100) return "/project1.svg";
  if (progress > 100 && progress <= 200) return "/project1.svg";
  return "/project1.svg";
}, [progress]);


  return (
    <div ref={scrollRef} className="scroll-space h-[3000px]   relative ">
      <div
        className="outer-container-for-scroller w-full mx-auto max-w-[1290px] px-4 md:px-6 lg:px-8  sticky top-18 md:top-32   z-50 
     "
      >
        <div className="floating-container flex flex-col md:flex-row gap-8 w-full ">
          {/* left side */}
          <div className="left-side flex flex-col flex-5 gap-4 md:gap-8  w-full">
            <TechStack
              loadingPercentage={progress}
              isCondensed={progress <= 100}
              title="MyBiz App Mobile App | SaaS"
              subtitle="A robust B2B app designed to streamline business workflows and analytics."
              barColor="FF6A01"
              barBgColor="6A0A27" techStacks={[]}            />
            <TechStack
              loadingPercentage={progress % 100}
              isCondensed={progress > 100 && progress <= 200}
              title="WEB DEVELOPMENT"
              subtitle="I build high-performance, scalable web apps using modern frameworks and tools, tailored for real-world use cases across industries."
              techStacks={[
                
              ]}
              barColor="55C37B"
              barBgColor="245C3A"
            />
            <TechStack
              loadingPercentage={progress % 200}
              isCondensed={progress > 200 && progress <= 300}
              title="DESIGN SYSTEMS"
              subtitle="Creating consistent, scalable, and reusable UI components across platforms with a strong foundation in UX, accessibility, and design tokens."
              techStacks={[
                
              ]}
              barColor="4A7DFF"
              barBgColor="1F3B80"
            />
          </div>
          {/* right side */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="right-side-video-player w-full flex-4 flex "
          >
            <AnimatePresence mode="wait">
  <motion.img
    key={currentImage}
    src={currentImage}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.4 }}
    className="w-full h-[calc(100vh/3)] md:h-[calc(100vh/1.5)] self-center rounded-3xl object-cover object-center px-1.5"
    alt="Tech stack visual"
  />
</AnimatePresence>

          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TechStacksScroller;

interface TechStackProps {
  title: string;
  subtitle: string;
  techStacks: string[];
  barColor: string;
  barBgColor: string;
  isCondensed: boolean;
  loadingPercentage: number; //0-100
}

const TechStack: React.FC<TechStackProps> = ({
  title,
  subtitle,
  techStacks,
  barColor,
  barBgColor,
  isCondensed,
  loadingPercentage,
}) => {
  const titleComp = useMemo(
    () => (
      <motion.h3
        variants={textVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="text-white   text-[clamp(18px,2vw,24px)] text-start w-full font-bold "
      >
        {title}
      </motion.h3>
    ),
    []
  );
  const specialTexts = useMemo(
    () => (
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-row self-start flex-wrap gap-2.5"
      >
        {techStacks.map((techStack, index) => (
          <motion.div key={index} variants={itemVariants}>
            <SpecialText cancelMargin text={techStack} />
          </motion.div>
        ))}
      </motion.div>
    ),
    []
  );

  const subtitleComp = useMemo(
    () => (
      <motion.h4
        variants={textVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="text-white text-[clamp(16px,3vw,24px)] text-start font-regular  "
      >
        {subtitle}
      </motion.h4>
    ),
    []
  );
  if (!isCondensed)
    return (
      <motion.h3
        variants={textVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="text-white/50 text-[clamp(12px,2vw,24px)]  text-start w-full font-regular "
      >
        {title}
      </motion.h3>
    );
  return (
    <motion.div className="tech-stack-container flex flex-row  gap-3 md:gap-6 w-full">
      <motion.div
        variants={barVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="loading-bar-container w-1 md:w-2 min-h-full rounded-2xl overflow-clip "
        style={{ backgroundColor: `#${barBgColor}` }}
      >
        <div
          className="loading-bar w-2"
          style={{
            backgroundColor: `#${barColor}`,
            height: `${loadingPercentage}%`,
            transition: "height ",
          }}
        >
          <h1 className="hidden">dummy-text-which-is-not-visible</h1>
        </div>
      </motion.div>

      <div className="details-container flex flex-col gap-3 items-center justify-start">
        {titleComp}
        {subtitleComp}
        {specialTexts}
      </div>
    </motion.div>
  );
};

interface SpecialTextProps {
  text: string;
  cancelMargin?: boolean;
  link?: string;
}
export const SpecialText: React.FC<SpecialTextProps> = ({
  text,
  cancelMargin = false,
  link,
}) => {
  return (
    <motion.div
      onClick={() => {
        if (link) {
          window.open(link, "_blank");
        }
      }}
      whileTap={{
        scale: 0.9,
        rotate: [0, 2, -2, 2, -2, 0],
        boxShadow: [
          "0 0 0px rgba(102,59,255,0.3)",
          "0 0 5px rgba(102,59,255,0.4)",
          "0 0 10px rgba(102,59,255,0.6)",
          "0 0 5px rgba(102,59,255,0.4)",
          "0 0 0px rgba(102,59,255,0.3)",
        ],
        transition: {
          duration: 0.8,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        },
      }}
      whileDrag={{
        scale: 0.9,
        rotate: [0, 2, -2, 2, -2, 0],
        boxShadow: [
          "0 0 0px rgba(102,59,255,0.3)",
          "0 0 5px rgba(102,59,255,0.4)",
          "0 0 10px rgba(102,59,255,0.6)",
          "0 0 5px rgba(102,59,255,0.4)",
          "0 0 0px rgba(102,59,255,0.3)",
        ],
        transition: {
          duration: 0.8,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        },
      }}
      whileHover={{
        scale: 1.15,
        rotate: [0, 2, -2, 2, -2, 0],
        boxShadow: [
          "0 0 0px rgba(102,59,255,0.3)",
          "0 0 5px rgba(102,59,255,0.4)",
          "0 0 10px rgba(102,59,255,0.6)",
          "0 0 5px rgba(102,59,255,0.4)",
          "0 0 0px rgba(102,59,255,0.3)",
        ],
        transition: {
          duration: 0.8,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        },
      }}
      style={{
        margin: cancelMargin ? "0px" : "",
        cursor: link ? "pointer" : "",
      }}
      className="flex w-full text-center  items-center  justify-center-safe  text-[clamp(14px,1.5vw,18px)] font-regular  text-white px-3 py-2 mx-1 leading-tight bg-white/5 backdrop-blur-3xl outline-[2px] outline-[#663BFF]/60 rounded-xl"
    >
      {text}
    </motion.div>
  );
};