// import "./index.css";

import NavBar from "./NavBar";

const LandingPage = () => {
  return (
    <div className="Landing-Page w-screen  flex items-start justify-center  bg-gradient-to-b from-[#201F01] to-[#101010]">
      <div className="Landing-Page-noise-layer w-screen h-[5000px] flex items-start justify-center gap-16 px-4 md:px-6 lg:px-8 py-4 noise-bg-blend bg-repeat ">
        <img
          className="fixed -top-[600px] scale-110 left-1/14"
          src="/orange-circles.svg"
          alt="gradient"
        />
        <NavBar />
      </div>
    </div>
  );
};

export default LandingPage;
