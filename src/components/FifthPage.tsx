"use client";

import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import React, { useMemo, useRef, useState } from "react";

export const textVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    transition: { duration: 0.3, ease: "easeIn" as const },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.3, ease: "easeIn" as const },
  },
};

export const barVariants = {
  hidden: { scaleY: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
  visible: { scaleY: 1, transition: { duration: 0.5, ease: "easeOut" as const } },
  exit: { scaleY: 0, transition: { duration: 0.3, ease: "easeIn" as const } },
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
      ease: "easeOut" as const,
    },
  },
};

const TechStacksScroller: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Track the scroll progress
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"],
  });

  const progressMotion = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const [progress, setProgress] = useState(0);

  // Update state when motion value changes
  useMotionValueEvent(progressMotion, "change", (v) => setProgress(v));

  const currentImage = useMemo(() => {
    if (progress <= 100) return "/project1.svg";
    if (progress > 100 && progress <= 200) return "/project2.svg";
    return "/project3.svg";
  }, [progress]);

  return (
    <div className="w-full">
      {/* Floating Button (Centered) */}
      <div className="action-button-container mb-4 flex justify-center items-center w-full">
        <motion.button
          initial={{ backgroundColor: "rgba(255,255,255,0.1)" }}
          whileInView={{
            backgroundColor: "rgba(255,165,0,0.2)",
            transition: { duration: 0.6, ease: "easeOut" as const },
          }}
          viewport={{ once: true }}
          className="gap-2 px-4 py-2 sm:px-4 sm:py-3 backdrop-blur-2xl rounded-full 
                     text-sm sm:text-xl font-medium flex items-center text-white"
        >
          Team Vision
          <img
            className="w-[16px] h-[16px] sm:w-[24px] sm:h-[24px]"
            src="/about us.svg" // ✅ changed from "about us.svg"
            alt="icon"
          />
        </motion.button>
      </div>

      {/* Scroll Container */}
      <div ref={scrollRef} className="scroll-space h-[3000px] relative">
        <div className="outer-container-for-scroller w-full mx-auto max-w-[1290px] px-4 md:px-6 lg:px-8 sticky top-18 md:top-32 z-50">
          <div className="floating-container flex flex-col md:flex-row gap-8 w-full">
            {/* Left Side */}
            <div className="left-side flex flex-col flex-5 gap-4 md:gap-8 w-full">
              <TechStack
                loadingPercentage={progress}
                isCondensed={progress <= 100}
                title="MyBiz App Mobile App | SaaS"
                subtitle="A robust B2B app designed to streamline business workflows and analytics."
                barColor="FF6A01"
                barBgColor="6A0A27"
                techStacks={[]}
              />
              <TechStack
                loadingPercentage={progress % 100}
                isCondensed={progress > 100 && progress <= 200}
                title="WEB DEVELOPMENT"
                subtitle="I build high-performance, scalable web apps using modern frameworks and tools."
                techStacks={[]}
                barColor="55C37B"
                barBgColor="245C3A"
              />
              <TechStack
                loadingPercentage={progress % 200}
                isCondensed={progress > 200 && progress <= 300}
                title="DESIGN SYSTEMS"
                subtitle="Creating consistent, reusable UI components with UX and accessibility focus."
                techStacks={[]}
                barColor="4A7DFF"
                barBgColor="1F3B80"
              />
            </div>

            {/* Right Side */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="right-side-video-player w-full flex-4 flex"
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
  loadingPercentage: number;
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
        className="text-white text-[clamp(18px,2vw,24px)] text-start w-full font-bold"
      >
        {title}
      </motion.h3>
    ),
    [title]
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
    [techStacks]
  );

  const subtitleComp = useMemo(
    () => (
      <motion.h4
        variants={textVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="text-white text-[clamp(16px,3vw,24px)] text-start font-regular"
      >
        {subtitle}
      </motion.h4>
    ),
    [subtitle]
  );

  if (!isCondensed) {
    return (
      <motion.h3
        variants={textVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="text-white/50 text-[clamp(12px,2vw,24px)] text-start w-full font-regular"
      >
        {title}
      </motion.h3>
    );
  }

  return (
    <motion.div className="tech-stack-container flex flex-row gap-3 md:gap-6 w-full">
      <motion.div
        variants={barVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="loading-bar-container w-1 md:w-2 min-h-full rounded-2xl overflow-clip"
        style={{ backgroundColor: `#${barBgColor}` }}
      >
        <div
          className="loading-bar w-2"
          style={{
            backgroundColor: `#${barColor}`,
            height: `${loadingPercentage}%`,
            transition: "height 0.3s ease",
          }}
        />
      </motion.div>

      <div className="details-container flex flex-col gap-3 items-start justify-start">
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
      onClick={() => link && window.open(link, "_blank")}
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.1 }}
      style={{
        margin: cancelMargin ? "0px" : undefined,
        cursor: link ? "pointer" : undefined,
      }}
      className="flex w-full text-center items-center justify-center text-[clamp(14px,1.5vw,18px)] font-regular text-white px-3 py-2 mx-1 leading-tight bg-white/5 backdrop-blur-3xl outline outline-1 outline-[#663BFF]/60 rounded-xl"
    >
      {text}
    </motion.div>
  );
};
