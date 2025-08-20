import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const FrontPage = () => {
  return (
    <motion.div
      className="page-entry w-full max-w-[1390px] gap-6 justify-center flex flex-col h-auto md:h-[70vh] max-h-[800px] px-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* First line */}
      <motion.div
        className="first-line flex flex-row items-center gap-2"
        variants={itemVariants}
      >
        <img src="/pic1.svg" alt="Illustration" className="w-6 sm:w-8 md:w-auto" />
        <p className="font-poppins text-base sm:text-lg md:text-2xl text-white">
          Build, Launch and Scale
        </p>
      </motion.div>

      {/* Main heading */}
      <motion.h1
        className="font-poppins leading-tight text-2xl sm:text-4xl md:text-6xl text-white"
        variants={itemVariants}
      >
        Engineering Your Vision into <br /> Web, SaaS, and Mobile Solutions.
      </motion.h1>

      {/* Subheading */}
      <motion.p
        className="font-poppins text-sm sm:text-base md:text-[28px] text-white"
        variants={itemVariants}
      >
        Expertly crafted products – from design to deployment,
        <br className="hidden md:block" />
        built to help startups, SMEs and enterprise
      </motion.p>
    </motion.div>
  );
};

export default FrontPage;
