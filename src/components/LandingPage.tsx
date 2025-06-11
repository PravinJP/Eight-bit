// import "./index.css";

import NavBar from "./NavBar"

const LandingPage = () => {
  return (
    <div className="Landing-Page bg-[#252525] w-screen  h-[5000px] flex items-start justify-center gap-16 px-4 md:px-8 lg:px-16 py-9 bg-gradient-to-b from-[#201F01] to-[#252525]">
        <img 
        className="fixed -top-[500px] left-1/4 "
        src="/bgorange.svg" alt="gradient" />
        <NavBar />
    </div>
  )
}

export default LandingPage