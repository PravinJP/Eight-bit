import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import type React from "react";

const NavBar = ({setContactvisible} : {setContactvisible:React.Dispatch<React.SetStateAction<boolean>>}) => {
  const navigate = useNavigate();

  return (
    <motion.div
      className="page-entry w-full max-w-[1390px] px-4 py-3.5 bg-white/10 backdrop-blur-[300px] rounded-[72px] flex justify-between items-center z-[2]"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }} 
    >
      <div className="logo flex flex-row align-left items-center gap-2 mr-auto">
        <img scale-90 origin-left src="/logo.png" alt="" />
        <p className="text-2xl font-bai text-white items-center">Eight Bit Tech</p>
      </div>

    <div className="navigation-links flex flex-row items-center gap-8 mx-auto">
  <h3 className="relative text-white cursor-pointer font-medium text-xl font-poppins leading-[28px]
                 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white
                 after:transition-all after:duration-300 hover:after:w-full">
    About
  </h3>

  <h3 className="relative text-white font-medium text-xl font-poppins leading-[28px] cursor-pointer
                 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white
                 after:transition-all after:duration-300 hover:after:w-full">
    Help & Support
  </h3>

  <h3
    onClick={() => navigate("/thirdpage")}
    className="relative text-white font-medium text-xl font-poppins leading-[28px] cursor-pointer
               after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white
               after:transition-all after:duration-300 hover:after:w-full">
    Services
  </h3>

  <h3 className="relative text-white cursor-pointer font-medium text-xl font-poppins leading-[28px]
                 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white
                 after:transition-all after:duration-300 hover:after:w-full">
    Products
  </h3>
</div>


      <div className="action-button-container flex ml-auto ">
        <button
          onClick={() => setContactvisible(true)}
          className="text-black font-semibold flex text-lg bg-white px-4 py-3 rounded-3xl transition-colors gap-2 cursor-pointer "
        >
          Contact us
          <img className="w-[24px] h-[24px]" src="/arrowlogo.svg" alt="arrow" />
        </button>
      </div>
    </motion.div>
  );
};

export default NavBar;
  