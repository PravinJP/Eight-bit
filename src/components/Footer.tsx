const Footer = () => {
  return (
    <div className="max-w-[1390px] h-[888px] gap-12 px-9 py-11.5 bg-[#393838] rounded-4xl">
      {/* Top Rectangle */}
      <div className="relative w-full h-[458px] rounded-3xl bg-[url('/Footerful.svg')] bg-cover bg-center overflow-clip">
        
        
        {/* Right-Side */}
        <div className="absolute w-[600px] gap-6 top-30 left-30 z-10">
          <div>
            <p className="w-full gap-1.5 text-6xl font-medium text-white">
              So. What are you waiting for ?
            </p>
            <p className="text-2xl mt-2 text-white">
              Contact us and get the deal done
            </p>
          </div>
          <button className="text-black bg-white font-medium text-2xl px-[26px] py-[18px] rounded-4xl transition-colors flex gap-2 mr-auto mt-2 items-center">
            Contact us
            <img className="w-[24px] h-[24px]" src="/arrowlogo.svg" alt="" />
          </button>
        </div>
        <div className="absolute bottom-0 right-2 mb-4 text-right ">
         <p className="text-5xl ">Eight Bit Tech.</p>
         <p>©2022-25 All rights reserved</p>
        </div>
      </div>

      {/* down-footer */}
      <div className="w-full h-[306px] gap-2.5 py-8 mt-4">
        {/* ✅ This is the only part changed */}
        <div className="flex flex-row justify-between">
          {/* left */}
          <div>
            <div className="logo flex flex-row align-left items-center gap-2 mr-auto">
              <img scale-90 origin-left src="/logo.png" alt="" />
              <p className="text-2xl vt323-regular text-white items-center">
                Eight Bit Tech
              </p>
            </div>
            <div className="mt-6">
              <p className="text-white text-2xl font-medium">
                Innovate smarter <br /> Scale Faster
              </p>
            </div>

            <div className="gap-2 flex flex-row mt-8">
              <img src="/ig.svg" alt="" />
              <img src="/linkedin.svg" alt="" />
              <img src="/mal.svg" alt="" />
              <img src="/mal.svg" alt="" />
            </div>
          </div>

          {/* right */}
          <div className="gap-14 flex flex-row text-right">
            <div className="flex flex-col gap-8">
              <p className="text-2xl font-medium text-white">Pages</p>
              <p className="text-xl font-medium text-white">Home</p>
              <p className="text-xl font-medium text-white">Help & support</p>
              <p className="text-xl font-medium text-white">FAQs</p>
            </div>
            <div className="flex flex-col gap-8 ">
              <p className="text-2xl font-medium text-white text-left">Contact Us</p>
              <div className="flex flex-col gap-6 ">
                <div className="flex flex-row gap-3.5">
                  <img src="/phone-flip 1.svg" alt="" />
                  <p className="text-xl font-medium text-white text-end">+91 9344461476</p>
                </div>
                <div className="flex flex-row gap-3.5 ">
                  <img src="/envelope (1) 1.svg" alt="" />
                  <p className="text-xl font-medium text-white text-end">8bit@eb.con</p>
                </div>
                <div className="flex flex-row gap-3.5 justify-center items-center">
                  <img src="/marker (1) 1 (1).svg" alt="" />
                  <p className="text-xl font-medium text-white text-end">
                    43 C, Veerapandi <br /> Coimbatore 34
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ✅ End of change */}
      </div>
    </div>
  );
};

export default Footer;
