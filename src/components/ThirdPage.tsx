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
    
      <div className="w-full h-[857.81px] p-9 gap-4 flex  flex-col justify-start items-center">
        <div className="w-[674px] h-[216px] flex flex-col justify-center items-center text-center">
        {/* Button Container */}
        <div className="action-button-container mb-4">
          <button className="h-[50px] gap-[10px] px-[18px] py-[16px] bg-white/10 backdrop-blur-2xl rounded-[32px] text-xl font-semibold flex items-center text-white">
            All About us
            <img className="w-[24px] h-[24px] " src="/about us.svg" alt="" />
          </button>
        </div>

        {/* Text Block */}
        <div>
          <p className="text-5xl text-white leading-snug">
            The Key benefits of <br />
            partnering
          </p>
        </div>
      </div>
      <div className=" w-[1000px] h-[550px] grid items-center grid-cols-3 row-end-2 gap-10">
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