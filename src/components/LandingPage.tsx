import CTI from "./CTI";
import FifthPage from "./FifthPage";
import Footer from "./Footer";
import FrontPage from "./FrontPage";
import NavBar from "./NavBar";
import SecondPageFinal from "./SecondPageFinal";
import ThirdPage from "./ThirdPage";

const LandingPage = () => {
  return (
    <div className="Landing-Page relative bg-black noise-bg-blend  overflow-x-clip  flex flex-col items-center gap-16 px-4 md:px-8 lg:px-16 py-9 ">
      {/* Background Gradient Image - Positioned Absolutely Behind */}
      <img
        className="absolute -top-[550px] left-[-388]w-[1374.03] h-[923.23] ml-92 mt-20 z-[1] bg-[url('https://www.transparenttextures.com/patterns/noise.png')] opacity-100 pointer-events-none"
        src="/topbg.svg"
        alt="gradient"
      />

      <div className="children flex w-full gap-11 flex-col">
        {/* Sticky/Top NavBar */}
        <NavBar />
        {/* Main Content */}
        <FrontPage />
        <SecondPageFinal />
        <ThirdPage />
        <CTI/>
        <FifthPage />
        <Footer/>
      </div>
    </div>
  );
};

export default LandingPage;
