import React from "react";



type Item = {
  id: number;
  topic: string;
  image: string;
};

const MapComponent: React.FC = () => {
  const items: Item[] = [
    { id: 1, topic: "Tailored Digital Solutions", image: "3rdPage.svg" },
    { id: 2, topic: "Scalable Architecture", image: "3rdPage.svg" },
  ];

  return (
    <div className="w-full h-[857.81px] flex  flex-col justify-start items-center">
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
      <div className="w-[1056px] h-[266.25px] flex gap-[40.5px]">
        {items.map((item, index) => (
          <div className="   gap-[104.5px] px-[5.63px] py-[5.63px] gradient-border-wrapper">
            <div className="w-[287px] px-[46px] py-[18px] rounded-[14.63px] gradient-border-inner flex flex-wrap">
              <div className="w-[195px]  flex flex-col justify-center items-start">

                <div className="flex flex-wrap justify-center items-center text-center">
                  <p className=" text-2xl text-white whitespace-normal break-words">{item.topic}</p>
                </div>
                <div className="w-[185px] h-[155px] flex justify-center items-center">
                  <div className="w-[90px] h-[90px] rounded-4xl flex items-center justify-center  bg-white/5 backdrop-blur-2xl"><img className="w-[54.84px] h-[54.84px]" src={item.image} alt="" /></div>
                </div>
              </div>
              <div className=" flex w-[185.06px] h-[140.63px]  bg-white/5 backdrop-blur-5xl"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MapComponent;
