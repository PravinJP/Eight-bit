import React, { type ReactNode } from "react";
import { motion } from "framer-motion";
import { ProjectComponent } from "./ProjectComponent";

export interface props {
  image: string;
  title: ReactNode;
  description: ReactNode;
}

const itemVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0 },
};

const FifthPage = () => {
  const comp: props[] = [
    {
      image: "project1.svg",
      title: (
        <h1>
          MyBiz App <br /> Mobile App SaaS
        </h1>
      ),
      description: (
        <h1>
          A robust B2B app designed to streamline <br /> business workflows and
          analytics.
        </h1>
      ),
    },
    {
      image: "project1.svg",
      title: (
        <h1>
          MyBiz App <br /> Mobile App SaaS
        </h1>
      ),
      description: (
        <h1>
          A robust B2B app designed to streamline <br /> business workflows and
          analytics.
        </h1>
      ),
    },
    {
      image: "project1.svg",
      title: (
        <h1>
          MyBiz App <br /> Mobile App SaaS
        </h1>
      ),
      description: (
        <h1>
          A robust B2B app designed to streamline <br /> business workflows and
          analytics.
        </h1>
      ),
    },
    {
      image: "project1.svg",
      title: (
        <h1>
          MyBiz App <br /> Mobile App SaaS
        </h1>
      ),
      description: (
        <h1>
          A robust B2B app designed to streamline <br /> business workflows and
          analytics.
        </h1>
      ),
    },
  ];

  return (
    <div className="relative w-full max-w-[1390px] flex flex-row justify-center items-start px-4">
      {/* Left Text Section */}
      <div className="flex flex-row gap-8 self-center h-min mr-10 z-1">
        <div className="w-[7px] min-h-full  bg-white rounded-4xl">
          <div className="w-full h-full gap-2.5 bg-[#FF6A01] rounded-4xl">
            <div className="w-full h-[50px] bg-white rounded-4xl"></div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="text-5xl text-white">
            Want to <span className="gradient-text-2"> Explore</span> <br />
            our Creative <br /> Products ?
          </div>
          <div className="text-2xl text-white">
            Innovative digital solutions crafted with precision, creativity, and
            real-world impact.
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <img
        className="absolute left-[-150px] opacity-75 z-0"
        src="/Ellipse 28.svg"
        alt=""
      />

      {/* Horizontally Scrollable Cards */}
      <div className="w-[500px] overflow-x-auto hide-scrollbar">
        <div className="flex flex-row gap-[27px] min-w-max">
          {comp.map((item, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              variants={itemVariants}
            >
              <ProjectComponent
                image={item.image}
                title={item.title}
                description={item.description}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FifthPage;
