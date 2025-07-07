import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { useMemo, useRef, useState } from "react";

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const barVariants = {
  hidden: { scaleY: 0 },
  visible: { scaleY: 1 },
  exit: { scaleY: 0 },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

const TechStacksScroller: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"],
  });

  const progressMotion = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const [progress, setProgress] = useState(0);

  useMotionValueEvent(progressMotion, "change", (v) => setProgress(v));

  const currentImage = useMemo(() => {
    if (progress <= 100) return "/project1.svg";
    if (progress <= 200)
      return "https://sabarish-vs-portfolio.vercel.app/Images/mentorsquare.png";
    return "https://sabarish-vs-portfolio.vercel.app/Images/hoplite.png";
  }, [progress]);

  return (
    <div
      ref={scrollRef}
      className="scroll-space h-[3000px] max-w-[1390px] relative"
    >
      <div className="action-button-container flex mb-10 justify-start ">
        <button className="gap-[10px] px-[18px] py-[16px] bg-white/10 backdrop-blur-2xl rounded-[32px] text-xl font-medium flex items-start text-white">
          Our Products
          <img className="w-6 h-6" src="/about us.svg" alt="" />
        </button>
      </div>
      <div className="outer-container-for-scroller w-full  sticky top-18 md:top-32 z-50">
        <div className="floating-container flex flex-col md:flex-row gap-8 w-full">
          <div className="left-side flex flex-col flex-5 gap-4 md:gap-8 w-full">
            <TechStack
              loadingPercentage={progress}
              isCondensed={progress <= 100}
              title="BuyMyTix"
              subtitle="BuyMyTix is a full-stack ticket marketplace where users can buy and sell event tickets — with confidence. Fast, secure, and optimized for last-minute finds or safe reselling."
              techStacks={[]}
              barColor="FF6A01"
              barBgColor="fefefe"
            />
            <TechStack
              loadingPercentage={progress % 100}
              isCondensed={progress > 100 && progress <= 200}
              title="Mentor Square"
              subtitle="Mentor Square is a mobile application designed for mentors, professors, and educators who need to efficiently and securely mark and manage student attendance."
              techStacks={[]}
              barColor="4A7DFF"
              barBgColor="fefefe"
            />
            <TechStack
              loadingPercentage={progress % 200}
              isCondensed={progress > 200}
              title="HopLite"
              subtitle="It is a fitness tracking app lets users create or choose workout routines,track sets,reps,and weights-ideal for gym progress training"
              techStacks={[]}
              barColor="55C37B"
              barBgColor="fefefe"
            />
          </div>

          <motion.div
            className="right-side-video-player w-full flex-4 flex"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImage}
                src={currentImage}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="w-full  aspect-square max-h-[400px] max-w-full self-center rounded-3xl object-cover object-center px-1.5"
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
        className="text-white text-[clamp(18px,2vw,24px)] text-start w-full font-semibold"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={textVariants}
      >
        {title}
      </motion.h3>
    ),
    [title]
  );

  const subtitleComp = useMemo(
    () => (
      <motion.h4
        className="text-white text-[clamp(16px,3vw,24px)] text-start font-regular"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={textVariants}
      >
        {subtitle}
      </motion.h4>
    ),
    [subtitle]
  );

  const specialTexts = useMemo(
    () => (
      <motion.div
        className="flex flex-row self-start flex-wrap gap-2.5"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {techStacks.map((tech, i) => (
          <motion.div key={i} variants={itemVariants}>
            <SpecialText text={tech} cancelMargin />
          </motion.div>
        ))}
      </motion.div>
    ),
    [techStacks]
  );

  if (!isCondensed)
    return (
      <motion.h3
        className="text-white/50 text-[clamp(12px,2vw,24px)] text-start w-full font-regular"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={textVariants}
      >
        {title}
      </motion.h3>
    );

  return (
    <div className="tech-stack-container flex flex-row gap-3 md:gap-6 w-full">
      <motion.div
        className="loading-bar-container w-1 md:w-2 min-h-full rounded-2xl overflow-clip"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={barVariants}
        style={{ backgroundColor: `#${barBgColor}` }}
      >
        <div
          className="loading-bar w-2"
          style={{
            backgroundColor: `#${barColor}`,
            height: `${loadingPercentage}%`,
            transition: "height",
          }}
        />
      </motion.div>

      <div className="details-container flex flex-col gap-3 items-center justify-start">
        {titleComp}
        {subtitleComp}
        {specialTexts}
      </div>
    </div>
  );
};

interface SpecialTextProps {
  text: string;
  cancelMargin?: boolean;
  link?: string;
}

const SpecialText: React.FC<SpecialTextProps> = ({
  text,
  cancelMargin = false,
  link,
}) => {
  return (
    <motion.div
      onClick={() => link && window.open(link, "_blank")}
      whileHover={{ scale: 1.05 }}
      style={{
        margin: cancelMargin ? "0px" : "",
        cursor: link ? "pointer" : "default",
      }}
      className="flex w-full text-center items-center justify-center text-[clamp(14px,1.5vw,18px)] font-regular text-white px-3 py-2 mx-1 leading-tight bg-white/5 backdrop-blur-3xl outline-[2px] outline-[#663BFF]/60 rounded-xl"
    >
      {text}
    </motion.div>
  );
};
