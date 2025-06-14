

const FrontPage = () => {
  return (
    <div className="w-full max-w-[1390px] h-[568px] gap-y-24 pb-8 align-left">
      <div className="first-line w-fill  h-[39.5] flex flex-row align-left items-center gap-2 mr-auto ">
        <img  className="mt-10 " src="/pic1.svg" alt="Illustration" />
        <p className=" font-poppins mt-10 text-[28px] text-white">build,launch and scale</p>
      </div>
      <div className="font-poppins line2 text-[72px] line-height-[87px] letter-spacing-[-2px] text-white">Your Vision,Engineered <br /> Web,Saas & Mobile Solutions</div>
      <div className="font-poppins line3 text-[28px] line-spacing-[34px] letter-spacing-[-0.6] text-white">Expertly crafted products -from design to deployment,<br />built to help startups,SMEs,and enterprise</div>
      <div className="action-button-container flex ml-auto mt-6">
        <button className="text-black font-inter bg-white font-semibold text-[20] line-spacing-[32px] w-[32] h-[32]  px-4 py-3 rounded-3xl transition-colors flex gap-2 ">
          Learn more
          <img className="w-[24px] h-[24px]"src="/arrowlogo.svg" alt="" />
        </button>
      </div>

    </div>
  );
};

export default FrontPage;
  