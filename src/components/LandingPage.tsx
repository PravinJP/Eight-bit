import FrontPage from "./FrontPage";
import NavBar from "./NavBar";

const LandingPage = () => {
  return (
    <div className="Landing-Page relative bg-[#252525] w-screen overflow-x-clip h-[5000px] flex flex-col items-center gap-16 px-4 md:px-8 lg:px-16 py-9 bg-gradient-to-b from-[#201F01] to-[#252525]">
      
      {/* Background Gradient Image - Positioned Absolutely Behind */}
      <img 
        className="absolute -top-[550px] left-1/4 +z-10" 
        src="/bgorange.svg" 
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
