import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";


import React from "react";
import { title } from "process";

const cardsList: ComponentProps[] = [
  {
    title: "title",
    imgUrl: "imgUrl",
    startColor: "startColor",
    endColor: "endColor",
  },
  {
    title: "title2",
    imgUrl: "imgUrl",
    startColor: "startColor",
    endColor: "endColor",
  },
  {
    title: "title3",
    imgUrl: "imgUrl",
    startColor: "startColor",
    endColor: "endColor",
  },
  {
    title: "title4",
    imgUrl: "imgUrl",
    startColor: "startColor",
    endColor: "endColor",
  },
  {
    title: "title",
    imgUrl: "imgUrl",
    startColor: "startColor",
    endColor: "endColor",
  },
  {
    title: "title",
    imgUrl: "imgUrl",
    startColor: "startColor",
    endColor: "endColor",
  },
];

//class
interface ComponentProps {
  title: string;
  imgUrl: string;
  startColor: string;
  endColor: string;
}

export const Component: React.FC<ComponentProps> = ({
  title,
  imgUrl,
  startColor,
  endColor,
}) => {
  return (
    <div className="flex  gap-2  ">
      <h1>{title}</h1>
      <h1>{imgUrl}</h1>
      <h1>{startColor}</h1>
      <h1>{endColor}</h1>
    </div>
  );
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <main className="containerr grid items-center grid-cols-3  row-end-2 gap-8 ">
      {cardsList.map((card, idx) => {
        return (
          <Component
            key={idx}
            title={card.title}
            endColor={card.endColor}
            imgUrl={card.imgUrl}
            startColor={card.startColor}
          />
        );
      })}
    </main>
  </StrictMode>
);