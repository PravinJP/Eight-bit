import CTI from "./CTI";
import FifthPage from "./FifthPage";
import Footer from "./Footer";
import FrontPage from "./FrontPage";
import NavBar from "./NavBar";
import SecondPageFinal from "./SecondPageFinal";
import ThirdPage from "./ThirdPage";
import ContactUs from "./ContactUs";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";


const LandingPage = () => {
  const [isContactVisible, setContactvisible] = useState(false);
  return (
    <div className="Landing-Page relative bg-gradient-to-b from-[#201F01] to-[#212121] noise-bg-blend  overflow-x-clip  flex flex-col items-center gap-16 px-4 md:px-8 lg:px-16 pb-0 py-9 ">
      {/* Background Gradient Image - Positioned Absolutely Behind */}
      <motion.img
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
        className="absolute -top-[550px] blur-2xl  left-[-388] w-[1374.03] h-[923.23] ml-92 mt-20  bg-[url('https://www.transparenttextures.com/patterns/noise.png')] opacity-70 pointer-events-none"
        src="/Group 39876.svg"
        alt="gradient"
      />

      <div className="children flex w-full gap-14  flex-col">
        {/* Sticky/Top NavBar */}
        <NavBar />
        {/* Main Content */}
        <FrontPage />
        {/* <GlassComponent/> */}
        <SecondPageFinal />
        <ThirdPage />
        <CTI />
        <FifthPage />
        <Footer setContactvisible={setContactvisible} />
        <AnimatePresence>
          {isContactVisible && (
            <ContactUs setContactvisible={setContactvisible} />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default LandingPage;
