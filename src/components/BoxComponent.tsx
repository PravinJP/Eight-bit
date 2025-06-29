import type { ComponentElements } from "./ThirdPage";

export const Component: React.FC<ComponentElements> = ({ title, imgUrl }) => {
  return (
    <div className="w-full h-full relative rounded-2xl flex gap-2.5 flex-wrap flex-col justify-start items-center bg-[#201F01] gradient-border-inner overflow-clip   ">
      <div className="w-[185.5px] h-[263.8px] flex flex-col justify-start items-center text-center">
        <div className=" h-[64px] mt-2">
          <p className="text-2xl text-white">{title}</p>
        </div>
        <div className=" relative w-[185.06px] h-[183.38px] flex flex-col  items-center -bottom-1/3 ">
          <div className=" absolute  bottom-5/6 w-[90px] h-[90px] rounded-[29.5px] z-12 flex justify-center items-center bg-white/5 backdrop-blur-2xl mt-4 ">
            <img className="w-[54.84px] h-[54.84] " src={imgUrl} alt="" />
          </div>
          <div className=" absolute bottom-1/3 w-[185.06px] h-[140.63px]  rounded-[12px] bg-white/3 hover:w-[290px] z-11 transition-all duration-500 ease-in-out ">
    
          </div>
        </div>
      </div>
      <div className="absolute -bottom-1/80">
        <img src="/Ellipse 27.svg" alt="" />
      </div>
    </div>
  );
};