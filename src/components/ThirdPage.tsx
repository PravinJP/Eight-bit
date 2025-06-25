import type { ReactNode } from "react";
import { Component } from "./BoxComponent";


  export interface ComponentElements {
  title: ReactNode;
  imgUrl: string;
} 
const Test = () => {


  
const comps: ComponentElements[] = [
  {
    title: <h1>Tailored <br /> Digital   Solutions</h1>,
    imgUrl: "3rdPage.svg",
  },
  {
    title: "Scalable Architecture",
    imgUrl: "3rdPage.svg",
  },
  {
    title: <h1>Faster Time <br /> to Market</h1>,
    imgUrl: "3rdPage.svg",
  },
  {
    title: "Robust & Security",
    imgUrl: "3rdPage.svg",
  },
  {
    title: "End-to-End Support",
    imgUrl: "3rdPage.svg",
  },
  {
    title: "Transparent Pricing",
    imgUrl: "3rdPage.svg",
  },
];





  return (
    
      <div className="w-full  p-9 gap-12 flex  flex-col justify-center items-center">
        
        {/* Button Container */}
        <div className="action-button-container mb-4">
          <button className=" gap-[10px] px-[18px] py-[16px] bg-white/10 backdrop-blur-2xl rounded-[32px] text-xl font-medium flex items-center text-white">
            All About us
            <img className="w-[24px] h-[24px] " src="/about us.svg" alt="" />
          </button>
        </div>

        {/* Text Block */}
        
          <div className="text-5xl bg-gradient-to-r from-[#383838] to-[#ffffff] bg-clip-text text-transparent  flex text-center py-2 -mt-4">
            The Key benefits of <br />
            partnering
          </div>
        
      
      <div className=" w-[1000px]  grid items-center grid-cols-3 row-end-2 gap-10 ">
        {comps.map((com,idx)=>(
    
      <div key={idx}  className="">
        
        <Component title={com.title} imgUrl={com.imgUrl}/>
      </div>
    ))}
      </div>
        
        
      </div>
    
    
  )
}

export default Test;