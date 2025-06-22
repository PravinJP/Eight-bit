
import type { ComponentElements } from "./ThirdPage";



export const Component: React.FC<ComponentElements> = ({ title, imgUrl }) => {
  return (
    <div className="w-full h-full rounded-2xl flex gap-2.5 flex-wrap flex-col justify-start items-center bg-[#201F01] gradient-border-inner overflow-clip   ">
      
      <div className="w-[185.5px] h-[263.8px] flex flex-col justify-start items-center text-center">
        <div className=" h-[64px] mt-2">
          <p className="text-2xl text-white">{title}</p>
        </div>
        <div className=" relative w-[185.06px] h-[183.38px] flex flex-col items-center -bottom-1/3 ">
          <div className=" absolute  bottom-5/6 w-[90px] h-[90px] rounded-[29.5px] flex justify-center items-center bg-white/5 backdrop-blur-2xl mt-4 ">
        <img className="w-[54.84px] h-[54.84] " src={imgUrl} alt="" />
        </div>
        
          <div className="w-[185.06px] h-[140.63px] gradient-border-wrapper ">
            <div className=" absolute bottom-[35%] w-[185px] h-[140.06px]  bg-[#201F01]/50  ">

        
        </div>
          </div>
        </div>
        

      </div>
       <div className="">
        <img
                
                src="/Ellipse 27.svg"
                alt=""
              />
       </div>

      
        {/*Title*/}
      {/* <div className="w-[228px] h-[64px] flex justify-center items-center text-center px-4 mb-4">
        <p className=" flex text-2xl text-white whitespace-normal mt-8 ">
          {title}
        </p>
      </div> */}

      {/* Image */}
      {/* <div className="w-full flex justify-center items-center mt-6">
        <div className="w-[90px] h-[90px] rounded-3xl flex justify-center items-center bg-white/5 backdrop-blur-2xl">
          <img className="w-[54.84px] h-[54.84px]" src={imgUrl} alt="" />
        </div>
      </div> */}
     
      

    </div>
  );
};


