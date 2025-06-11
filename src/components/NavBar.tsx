const NavBar = () => {
  return (
    <div className="w-full max-w-[1390px] px-4 py-3.5 bg-white/10 backdrop-blur-[300px] rounded-[72px] flex justify-between items-center">
      <div className="logo flex flex-row align-left items-center gap-2 mr-auto">
         <img scale-90 origin-left src="/logo.png" alt="" />
      <p className="text-2xl font-semibold text-white items-center">Eight Bit Tech</p>
      </div>
     
      <div className="navigation-links flex flex-row items-center gap-8 mx-auto">
        <h3 className="text-white font-medium text-xl">About</h3>
        <h3 className="text-white font-medium text-xl">Help & Support</h3>
        <h3 className="text-white font-medium text-xl">Services</h3>
        <h3 className="text-white font-medium text-xl">Products</h3>
      </div>
      <div className="action-button-container flex ml-auto">
        <button className="text-black font-semibold flex  text-lg bg-white px-4 py-3 rounded-3xl transition-colors">
          Contact us
          </button>
          </div>
    </div>
  );
};

export default NavBar;
