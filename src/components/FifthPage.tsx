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
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"],
  });

  const [progress, setProgress] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const transformed = latest * 300;
    setProgress(transformed);
  });

  const currentImage = useMemo(() => {
    if (progress <= 100) return "/project1.svg";
    if (progress > 100 && progress <= 200) return "/project2.svg";
    return "/image3.png";
  }, [progress]);

  const comp = [
    {
      image: "/project1.svg",
      title: "MyBiz App",
      description: "A B2B mobile app for business analytics and workflows.",
    },
    {
      image: "/project2.svg",
      title: "Web Development",
      description: "High-performance web apps built using modern frameworks.",
    },
    {
      image: "/image3.png",
      title: "Design Systems",
      description: "Scalable UI component systems with accessibility and UX focus.",
    },
  ];

  return (
    <div ref={scrollRef} className="scroll-space h-[3000px] relative">
      <div className="outer-container-for-scroller w-full mx-auto max-w-[1290px] px-4 md:px-6 lg:px-8 sticky top-18 md:top-32 z-50">
        <div className="floating-container flex flex-col md:flex-row gap-8 w-full">
          {/* Left side tech stacks */}
          <div className="left-side flex flex-col flex-5 gap-4 md:gap-8 w-full">
            <TechStack
              loadingPercentage={progress}
              isCondensed={progress <= 100}
              title="MyBiz App Mobile App | SaaS"
              subtitle="A robust B2B app designed to streamline business workflows and analytics."
              barColor="FF6A01"
              barBgColor="ffff"
              techStacks={["React Native", "TypeScript", "Redux", "Firebase"]}
            />
            <TechStack
              loadingPercentage={progress % 100}
              isCondensed={progress > 100 && progress <= 200}
              title="WEB DEVELOPMENT"
              subtitle="High-performance, scalable web apps using modern frameworks."
              techStacks={["React", "Next.js", "TailwindCSS", "Node.js"]}
              barColor="FF6A01"
              barBgColor="ffff"
            />
            <TechStack
              loadingPercentage={progress % 200}
              isCondensed={progress > 200 && progress <= 300}
              title="DESIGN SYSTEMS"
              subtitle="Reusable UI components across platforms with UX focus."
              techStacks={["Storybook", "Figma", "Chromatic", "Design Tokens"]}
              barColor="FF6A01"
              barBgColor="ffff"
            />
          </div>

          {/* Right side horizontal scroll cards */}
          <div className="w-[500px] overflow-x-auto hide-scrollbar">
            <div className="flex flex-row gap-[27px] min-w-max">
              {comp.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  variants={itemVariants}
                >
                  <ProjectComponent
                    image={item.image}
                    title={item.title}
                    description={item.description}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <img
        className="absolute left-[-150px] opacity-75 z-0"
        src="/Ellipse 28.svg"
        alt=""
      />
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
  const titleComp = useMemo(() => (
    <motion.h3
      variants={textVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="text-white text-[clamp(18px,2vw,24px)] text-start w-full font-bold"
    >
      {title}
    </motion.h3>
  ), []);

  const subtitleComp = useMemo(() => (
    <motion.h4
      variants={textVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="text-white text-[clamp(16px,3vw,24px)] text-start font-regular"
    >
      {subtitle}
    </motion.h4>
  ), []);

  const specialTexts = useMemo(() => (
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
  ), []);

  if (!isCondensed)
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
            transition: "height 0.5s ease-out",
          }}
        />
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
      onClick={() => link && window.open(link, "_blank")}
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
      className="flex w-full text-center items-center justify-center-safe text-[clamp(14px,1.5vw,18px)] font-regular text-white px-3 py-2 mx-1 leading-tight bg-white/5 backdrop-blur-3xl outline-[2px] outline-[#663BFF]/60 rounded-xl"
      style={{
        margin: cancelMargin ? "0px" : "",
        cursor: link ? "pointer" : "",
      }}
    >
      {text}
    </motion.div>
  );
};

// Dummy ProjectComponent – replace with your own
const ProjectComponent: React.FC<{ image: string; title: string; description: string }> = ({
  image,
  title,
  description,
}) => (
  <div className="bg-white rounded-xl shadow-md w-[250px] p-4 flex flex-col items-center justify-start text-center">
    <img src={image} alt={title} className="w-[100px] h-[100px] object-contain mb-3" />
    <h3 className="text-lg font-semibold mb-1">{title}</h3>
    <p className="text-sm text-gray-600">{description}</p>
  </div>
);
