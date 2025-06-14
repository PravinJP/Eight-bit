import FrontPage from "./FrontPage";
import NavBar from "./NavBar";

const LandingPage = () => {
  return (
    <div className="Landing-Page relative bg-[#252525]  noise-bg-blend w-screen overflow-x-clip h-[5000px] flex flex-col items-center gap-16 px-4 md:px-8 lg:px-16 py-9 z-[-2]bg-gradient-to-b from-[#201F01] to-[#252525]">
       
      {/* Background Gradient Image - Positioned Absolutely Behind */}
      <img 
        className="absolute -top-[550px] left-[-388]w-[1374.03] h-[923.23] ml-92 mt-20 z-[1] bg-[url('https://www.transparenttextures.com/patterns/noise.png')] opacity-70 pointer-events-none" 
        src="/topbg.svg" 
        alt="gradient" 
      />
      
      {/* Sticky/Top NavBar */}
      <NavBar />

      {/* Main Content */}
      <FrontPage />
    </div>
  );
};

export default LandingPage;
