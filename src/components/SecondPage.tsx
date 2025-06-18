import React from 'react';
import useInViewAnimation from '../hooks/useInViewAnimation';
import { motion } from 'framer-motion';

// Import icons that match your design from react-icons/fa or equivalent
// If you don't have react-icons, replace these with <span> emojis or SVGs
import { FaLaptopCode, FaCog, FaTools, FaGlobe, FaSearch, FaRocket, FaCodeBranch, FaDesktop, FaWrench, FaChartLine, FaCube } from 'react-icons/fa'; 
// Note: Some icon names might vary slightly in react-icons. FaCogs is often FaCog, FaTools might be FaWrench etc.

export default function EmpowerBusinesses() {
  const [sectionRef, isSectionInView] = useInViewAnimation({ threshold: 0.2 });

  // Define animation variants for framer-motion
  const sectionContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2, // Stagger animations for direct children (left and right columns)
        duration: 0.5
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  // Function to create an icon with the glow effect
  const ServiceIcon: React.FC<{ IconComponent: React.ElementType }> = ({ IconComponent }) => (
    <div className="relative flex items-center justify-center">
      {/* Glow effect */}
      <div className="absolute w-12 h-12 rounded-full bg-orange-500 blur-xl opacity-60"></div>
      {/* Actual icon - z-10 ensures it's above the glow */}
      <IconComponent className="relative z-10 text-orange-200 text-3xl" /> {/* Adjusted color and size */}
    </div>
  );

  // Reusing ServiceIcon for the main graphic icon, slightly modified
  const GraphicIcon: React.FC<{ IconComponent: React.ElementType }> = ({ IconComponent }) => (
    <div className="relative flex items-center justify-center w-28 h-28 rounded-2xl bg-orange-500 overflow-hidden">
      {/* Inner glow effect for the icon background */}
      <div className="absolute inset-0 bg-white blur-md opacity-20"></div>
      <IconComponent className="relative z-10 text-white text-6xl" /> 
    </div>
  );

  // Define the ServiceListItem component here
  const ServiceListItem: React.FC<{ IconComponent: React.ElementType; text: string }> = ({ IconComponent, text }) => (
    <div className="flex items-center space-x-4">
      {/* Icon with its subtle glow effect */}
      <div className="relative flex-shrink-0"> {/* flex-shrink-0 ensures icon doesn't shrink */}
        {/* Glow effect behind the icon */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/40 to-transparent blur-md opacity-20"></div>
        {/* Actual icon */}
        <IconComponent className="relative z-10 text-[#FFFBFB] text-xl" style={{ transform: 'translateY(1px)' }} />
      </div>
      <span className="text-lg font-medium">{text}</span>
    </div>
  );

  return (
    <motion.section 
      ref={sectionRef} 
      className="py-20 px-[36px] text-white text-center relative z-10 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionContainerVariants}
    >
      {/* Main content grid: Left for text, Right for graphic */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between max-w-[1440px] mx-auto gap-[12px]">
        {/* Left Column: Text and Service List */}
        <motion.div
          className="flex flex-col items-center lg:items-start text-center lg:text-left
                     w-[827px] h-[556px] space-y-[56px]"
          variants={itemVariants}
        >
          {/* "All about us" pill with distinct orange background and glow */}
          <motion.div
            className={`inline-flex items-center space-x-2 rounded-full px-6 py-3 text-sm font-medium
                          relative overflow-hidden cursor-pointer
                          bg-gray-900/30 backdrop-blur-sm border-2 border-white/[0.3] shadow-md`}
            variants={itemVariants}
          >
            {/* Inner glow effect for the pill itself */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-500/10 to-transparent opacity-30 blur-md"></div>
            <span className="relative z-10 text-white font-semibold">All about us</span>
            {/* Small info icon (yellow circle) with inner glow */}
            <div className="relative z-10 w-5 h-5 rounded-full bg-gray-500/20 text-white text-xs font-bold flex items-center justify-center">
              {/* Subtle inner glow for the info icon */}
              <div className="absolute inset-0 rounded-full bg-white blur-sm opacity-20"></div>
              <span className="relative z-10">i</span>
            </div>
          </motion.div>

          {/* Main Heading - Updated with proper line break and alignment */}
          <motion.h2
            className={text-5xl font-medium leading-[1.2] max-w-[811px] font-poppins text-left}
            variants={itemVariants}
          >
            We Empower businesses with 
            reliable, modern  <br></br>
            digital solutions.
          </motion.h2>

          {/* Descriptive Paragraph - Animated with proper alignment */}
          <motion.p
            className={max-w-3xl text-lg text-gray-300 font-poppins text-left leading-relaxed}
            variants={itemVariants}
          >
            We build robust web & mobile apps, SaaS platforms, and custom <br />
            solutions to help startups, SMBs, and enterprises grow faster.
          </motion.p>

          {/* Services List - Single column - Animated with proper alignment */}
          <motion.div
            className={grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12 max-w-2xl text-left}
            variants={itemVariants}
          >
            
            {/* Each Service Item using the new ServiceListItem component, matched to design */}
            <ServiceListItem IconComponent={FaLaptopCode} text="Full stack development" />
            <ServiceListItem IconComponent={FaCog} text="SaaS Product" />
            <ServiceListItem IconComponent={FaWrench} text="Maintenance & Support" />
            <ServiceListItem IconComponent={FaChartLine} text="SEO & Optimization" />
            <ServiceListItem IconComponent={FaCube} text="SaaS Product" />
            <ServiceListItem IconComponent={FaDesktop} text="Website Design" />
          </motion.div>
        </motion.div>

        {/* Right Column: Graphic with Frosted Cards */}
        <motion.div
            className={relative w-full lg:w-1/2 flex items-center justify-center h-[572px] lg:h-[572px] overflow-hidden}
            variants={itemVariants}
        >

            {/* Parent Card Container */}
            <div className="relative w-[387px] h-[563px] rounded-3xl border-2 border-white/[0.3] z-[-2] bg-black/80 backdrop-blur-lg shadow-2xl">
                {/* Frosted Glass Cards Container - This is the common parent for Top, Middle, and Bottom cards */}
                <div className="relative w-full h-full flex items-center justify-center">
                    {/* Top Card */}
                    <div className="absolute top-card w-[387px] h-[250px] rounded-3xl border-4 border-white/[0.4]
                                    -translate-x-19 -translate-y-40 z-10 bg-white/1 backdrop-blur-[5.45px]"></div>

                    {/* Middle Card - NOW POSITIONED BETWEEN Top and Bottom cards, and centered */}
                    <div className="absolute middle-card w-[200px] h-[200px] rounded-3xl border-2 border-white/[0.3]
                                    flex items-center justify-center z-20 bg-white/5 backdrop-blur-[12.45px]
                                    top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"> {/* Centered relative to Frosted Glass Cards Container */}
                        {/* Image inside the Middle Card */}
                        <img
                            src="./logo2.svg" // IMPORTANT: Replace with the actual path to your new image
                            alt="Middle Card Graphic"
                            className="w-2/3 h-2/3 object-contain rounded-3xl"
                        />
                    </div>

                    {/* Bottom Card - Now without the Middle Card nested inside */}
                    <div className="absolute bottom-card w-[387px] h-[250px] rounded-3xl border-4 border-white/[0.4]
                                    -translate-x-19 translate-y-40 z-10 bg-white/3 backdrop-blur-[5.45px]
                                    overflow-hidden">
                        {/* Original image for bottom card - Remains */}
                        <img 
                            src="./circle.svg" 
                            alt="Business Empowerment"
                            className="w-[600px]  object-cover absolute bottom-[-200px]"
                        />
                    </div>
                </div>
            </div>
        </motion.div>
      </div>
    </motion.section>
  );
}