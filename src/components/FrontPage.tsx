const FrontPage = () => {
  return (
    <div className="page-entry w-full max-w-[1390px]  gap-8 flex flex-col align-left h-[70vh]">
      <div className="first-line w-fill   flex flex-row align-left items-center gap-2 mr-auto ">
        <img className="mt-10 " src="/pic1.svg" alt="Illustration" />
        <p className=" font-poppins mt-10 text-[28px] text-white">
          build,launch and scale
        </p>
      </div>
      <div className="font-poppins leading-[72px] text-[72px]  text-white">
        Your Vision,Engineered <br /> Web,Saas & Mobile Solutions
      </div>
      <div className="font-poppins line3 text-[28px]  text-white">
        Expertly crafted products -from design to deployment,
        <br />
        built to help startups,SMEs,and enterprise
      </div>

      <button className="text-black bg-white font-medium text-2xl px-7 py-5 rounded-3xl transition-all duration-200 flex gap-2 mr-auto
        hover:bg-orange-400 hover:text-white hover:scale-105 active:scale-95">
        Learn more
        <img className="w-[24px] h-[24px]" src="/arrowlogo.svg" alt="" />
      </button>
    </div>
  );
};

export default FrontPage;
