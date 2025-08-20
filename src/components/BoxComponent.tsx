import type { ComponentElements } from "./ThirdPage";

interface ComponentProps extends ComponentElements {
  index: number; // ✅ New prop for box position
}

export const Component: React.FC<ComponentProps> = ({ title, imgUrl, index }) => {
  // ✅ Determine text size based on index
  const titleClass =
    index === 0 || index === 2
      ? "text-base sm:text-xl" // smaller for 1st and 3rd
      : "text-lg sm:text-2xl";

  return (
    <div className="w-full h-full relative rounded-2xl flex gap-2.5 flex-wrap flex-col justify-start items-center bg-[#201F01] gradient-border-inner overflow-clip">
      <div className="w-[150px] h-[220px] sm:w-[185.5px] sm:h-[263.8px] flex flex-col justify-start items-center text-center">
        {/* Title */}
        <div className="h-[50px] sm:h-[64px] mt-2">
          <p className={`${titleClass} text-white`}>{title}</p>
        </div>

        {/* Image container */}
        <div className="relative w-[150px] h-[150px] sm:w-[185.06px] sm:h-[183.38px] flex flex-col items-center -bottom-1/3">
          {/* Icon holder */}
          <div className="absolute bottom-5/6 w-[70px] h-[70px] sm:w-[90px] sm:h-[90px] rounded-[20px] z-12 flex justify-center items-center bg-white/5 backdrop-blur-2xl mt-4">
            <img
              className="w-[40px] h-[40px] sm:w-[54.84px] sm:h-[54.84px]"
              src={imgUrl}
              alt=""
            />
          </div>

          {/* Lower card */}
          <div className="absolute bottom-1/3 w-[150px] h-[110px] sm:w-[185.06px] sm:h-[140.63px] rounded-[12px] bg-white/3 hover:w-[200px] sm:hover:w-[290px] z-11 transition-all duration-500 ease-in-out"></div>
        </div>
      </div>

      {/* Background ellipse */}
      <div className="absolute -bottom-1/80">
        <img src="/Ellipse 27.svg" alt="" />
      </div>
    </div>
  );
};
