import { easeIn, motion } from "framer-motion";

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

const buttonVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {  ease: "easeOut" },
  },
};

const FrontPage = () => {
  return (
    <motion.div
      className="page-entry w-full max-w-[1390px]  gap-8 flex flex-col align-left h-[70vh]"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="first-line w-fill   flex flex-row align-left items-center gap-2 mr-auto "
        variants={itemVariants}
      >
        <img className="mt-10 " src="/pic1.svg" alt="Illustration" />
        <p className=" font-poppins mt-10 text-[28px] text-white">
          build,launch and scale
        </p>
      </motion.div>
      <motion.div
        className="font-poppins leading-[72px] text-[72px]  text-white"
        variants={itemVariants}
      >
        Your Vision,Engineered <br /> Web,Saas & Mobile Solutions
      </motion.div>
      <motion.div
        className="font-poppins line3 text-[28px]  text-white"
        variants={itemVariants}
      >
        Expertly crafted products -from design to deployment,
        <br />
        built to help startups,SMEs,and enterprise
      </motion.div>

      <motion.button
        className="text-black bg-white font-medium text-2xl px-7 py-5 rounded-3xl transition-all duration-200 flex gap-2 mr-auto
        hover:bg-orange-400 hover:text-white hover:scale-105 active:scale-95"
        variants={buttonVariant}
      >
        Learn more
        <img className="w-[24px] h-[24px]  flex justify-center  items-center" src="/arrowlogo.svg" alt="" />
      </motion.button>
    </motion.div>
  );
};

export default FrontPage;
