import React from "react";
import type { props } from "./FifthPage";

export const ProjectComponent: React.FC<props> = ({
  image,
  title,
  description,
}) => {
  return (
    <div className="min-w-[400px] min-h-[467px] gap-3.5 px-4 py-3.5 gradient-border-wrapper-2 flex flex-col justify-center items-center">
      <div className="w-full h-[240px] gap-2.5 -mt-4 ">
        <img src={image} alt="" />
      </div>
      <div className="w-full gap-2 mt-2">
        <p className="text-4xl text-white">{title}</p>
      </div>
      <div className="w-full gap-2.5 mt-2">
        <p className="text-base text-white">{description}</p>
      </div>
    </div>
  );
};
