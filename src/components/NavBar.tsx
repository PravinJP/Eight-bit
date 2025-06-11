const NavBar = () => {
  return (
    <div className="gradient-border flex  max-w-[1390px] w-full p-[3px] bg-gradient-to-tr from-white/15  to-black/0  rounded-[72px]">
      <div className="w-full max-w-[1390px] px-4 py-3.5 bg-[#FEFEFE]/10 backdrop-blur-[150px] rounded-[72px] flex justify-between items-center">
        {/* logo */}
        <img scale-90 origin-left src="/logo-font.svg" alt="" />

        <div className="navigation-links flex flex-row items-center gap-8 mx-auto text-white font-medium text-xl">
          <h3>About</h3>
          <h3>Help & Support</h3>
          <h3>Services</h3>
          <h3>Products</h3>
        </div>
        <div className="action-button-container flex ml-auto">
          <button className="text-black font-medium flex  text-lg bg-white px-4 py-3 rounded-3xl transition-colors">
            Contact us
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
