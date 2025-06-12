

const FrontPage = () => {
  return (
    <div className="w-full max-w-[1390px] h-[568px] gap-24">
      <div className="first-line w-fill  h-[39.5] flex flex-row align-left items-center gap-2 mr-auto ">
        <img  className="mt-10 " src="/pic1.svg" alt="Illustration" />
        <p className="mt-10 text-[28px] text-white">build,launch and scale</p>
      </div>
      <div className="line2 text-[72px] text-white">Your Vision,Engineered <br /> Web,Saas & Mobile Solutions</div>
      <div className="line3 text-[28px] text-white">Expertly crafted products -from design to deployment,<br />built to help startups,SMEs,and enterprise</div>
      <div className="action-button-container flex ml-auto mt-6">
        <button className="text-black bg-white font-semibold text-[20] px-4 py-3 rounded-3xl transition-colors flex gap-2 ">
          learn more
          <img className="w-[32px] h-[32px]"src="/arrowlogo.svg" alt="" />
        </button>
      </div>

    </div>
  );
};

export default FrontPage;
