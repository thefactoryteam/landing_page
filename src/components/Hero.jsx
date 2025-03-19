import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import ClipImage from "../assets/madagascar-image.png";
import BlackMarker from "../assets/Black-marker-arrow.png";
import BlackArrow from "../assets/Black-arrow.png";

const Hero = () => {
  return (
    <div className="relative flex min-w-lg justify-center items-center h-5/6 overflow-hidden">

      <motion.div
        className="h-96 w-96 bg-[#2BE028] rounded-full absolute -left-64"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 15, -15, 0],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        style={{
          WebkitMaskImage: "radial-gradient(circle, transparent 49%, black 50%)",
          maskImage: "radial-gradient(circle, transparent 49%, black 50%)",
        }}
      ></motion.div>

      <motion.div
        className="h-96 w-96 bg-[#373737] rounded-full absolute -right-64"
        animate={{
          scale: [1, 0.9, 1],
          rotate: [0, -20, 20, 0],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        style={{
          WebkitMaskImage: "radial-gradient(circle, transparent 49%, black 50%)",
          maskImage: "radial-gradient(circle, transparent 49%, black 50%)",
        }}
      ></motion.div>


      <div className="relative text-center">

        {/* Hero Text with Staggered Reveal */}
        <motion.h1
          className="hero uppercase text-[121px] text-center leading-[1]"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.2, duration: 1 },
            },
          }}
        >
          <motion.span variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>Nesting{" "}</motion.span>
          <motion.span className="meriwether-font lowercase italic text-[#2BE028]" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>Africa</motion.span>
          <br />
          <motion.span className="flex items-center justify-center">
            Inn
            <motion.img
              src={ClipImage}
              alt="O"
              className="w-[90px] h-[90px] rounded-full inline-block mx-2 object-cover"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1, delay: 0.5, ease: "backOut" }}
            />
            vations
          </motion.span>
        </motion.h1>

        {/* Subtext Animation */}
        <motion.p
          className="text-center text-[46px] lowercase text-[#2BE028] meriwether-font italic"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Don’t just predict the future, build it!
        </motion.p>

        {/* Left Arrow (With Organic Motion) */}
        <motion.div
          className="absolute left-[2%] top-[65%] w-[170px] h-[128px] bg-contain bg-no-repeat"
          style={{ backgroundImage: `url(${BlackMarker})` }}
          animate={{
            y: [-10, 10, -10],
            rotate: [-3, 3, -3],
          }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        ></motion.div>

        {/* Buttons with Cool Hover Effect */}
        <div className="flex justify-center gap-8 mt-4">
          <motion.button
            className="bg-[#2BE028] text-[#231F20] font-semibold py-4 px-6 rounded-full text-lg cursor-pointer"
            whileHover={{ scale: 1.1, boxShadow: "0px 10px 20px rgba(43, 224, 40, 0.3)" }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            Become a global talent
          </motion.button>

          <motion.button
            className="bg-[#231F20] text-[#ECFBEB] font-semibold py-4 px-6 rounded-full text-lg cursor-pointer"
            whileHover={{ scale: 1.1, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)" }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            Join Jukebox Incubator Program
          </motion.button>
        </div>

        {/* Right Arrow (Organic Motion) */}
        <motion.div
          className="absolute -right-[5%] top-[65%] w-[170px] h-[167px] bg-contain bg-no-repeat"
          style={{ backgroundImage: `url(${BlackArrow})` }}
          animate={{
            y: [10, -10, 10],
            rotate: [3, -3, 3],
          }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        ></motion.div>
      </div>
    </div>
  );
};

export default Hero;
