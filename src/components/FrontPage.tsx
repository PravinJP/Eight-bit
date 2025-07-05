import {  motion } from "framer-motion";

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

// const buttonVariant = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {  ease: "easeOut" },
//   },
// };

const FrontPage = () => {
  return (
    <motion.div
      className="page-entry w-full max-w-[1390px]  gap-8 flex flex-col align-left h-[65vh]"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="first-line w-fill   flex flex-row align-left  items-center gap-2 mr-auto  "
        variants={itemVariants}
      >
        <img className=" " src="/pic1.svg" alt="Illustration" />
        <p className=" font-poppins  text-2xl text-white  ">
          Build, Launch and Scale
        </p>
      </motion.div>
      <motion.div
        className="font-poppins leading-tight text-6xl  text-white"
        variants={itemVariants}
      >
        Engineering Your Vision into <br /> Web, SaaS, and Mobile Solutions.
      </motion.div>
      <motion.div
        className="font-poppins line3 text-[28px]  text-white"
        variants={itemVariants}
      >
        Expertly crafted products -from design to deployment,
        <br />
        built to help startups, SMEs and enterprise
      </motion.div>

    </motion.div>
  );
};

export default FrontPage;
