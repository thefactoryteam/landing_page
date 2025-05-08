import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ClipImage from "../../assets/home/madagascar-image.png";
import BlackMarker from "../../assets/home/Black-marker-arrow.png";
import BlackArrow from "../../assets/home/Black-arrow.png";
import { Link } from "react-router";

const words = ["Africa", "Naija"];

const Hero = () => {
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="h-screen">
      <div className="relative flex md:min-w-lg justify-center items-center h-5/6 overflow-hidden">
        <motion.div
          className="h-28 md:h-96 w-28 md:w-96 bg-[#2BE028] rounded-full absolute top-5 md:top-28 -left-20 md:-left-64"
          animate={{ scale: [1, 1.1, 1], rotate: [0, 15, -15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          style={{ WebkitMaskImage: "radial-gradient(circle, transparent 49%, black 50%)", maskImage: "radial-gradient(circle, transparent 49%, black 50%)" }}
        />

        <motion.div
          className="h-28 md:h-96 w-28 md:w-96 bg-[#373737] rounded-full absolute bottom-0 md:bottom-28 -right-20 md:-right-64"
          animate={{ scale: [1, 0.9, 1], rotate: [0, -20, 20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          style={{ WebkitMaskImage: "radial-gradient(circle, transparent 49%, black 50%)", maskImage: "radial-gradient(circle, transparent 49%, black 50%)" }}
        />


        <motion.div
          className="h-16 md:h-20 w-16 md:w-20 bg-[#2BE028] rounded-full absolute top-36 md:top-[500px] right-5 md:right-64"
          animate={{ scale: [1, 0.6, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative md:text-center px-12 md:px-0 mt-10 md:mt-0">
          <motion.h1
            className="primary-font font-black uppercase text-6xl md:text-[100px] md:text-center leading-[1] hero_h1"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2, duration: 1 } },
            }}
          >
            Nesting{" "}
            <span className="hidden md:inline-block" style={{ width: "250px", textAlign: "center" }}>
              <AnimatePresence mode="wait">
                <motion.span
                  key={words[currentWord]}
                  className="md:lowercase md:italic text-[#2BE028] inline-block hero-animate"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.8 }}
                >
                  {words[currentWord]}
                </motion.span>
              </AnimatePresence>

            </span>
            <span className="md:hidden">AFRICA</span>
            <br />

            <motion.span className="flex items-center md:justify-center">
              Inn
              <motion.img
                src={ClipImage}
                alt="O"
                className="w-[50px] h-[50px] md:w-[90px] md:h-[90px] rounded-full inline-block mx-2 object-cover"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1, delay: 0.5, ease: "backOut" }}
              />
              va <span className="hidden md:inline-block">tions</span>
            </motion.span>
            <p className="md:hidden text-[#2BE028]">tions</p>
          </motion.h1>

          <motion.p
            className="text-center text-lg md:text-[36px] font-bold mt-5 md:mt-0 lowercase text-[#2BE028] meriwether-font italic hero_p"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Don’t just predict the future, build it!
          </motion.p>

          <motion.div
            className="absolute left-[2%] md:-left-[5%] top-[60%] md:top-[65%] w-[60px] md:w-[170px] h-[57px] md:h-[128px] bg-contain bg-no-repeat rotate-[30deg] md:rotate-0"
            style={{ backgroundImage: `url(${BlackMarker})` }}
            animate={{ y: [-10, 10, -10], rotate: [-3, 3, -3] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 mt-4 md:mt-10">
            <motion.button
              className="bg-[#2BE028] text-[#231F20] font-semibold py-4 px-6 rounded-full text-sm md:text-lg cursor-pointer"
              whileHover={{ scale: 1.1, boxShadow: "0px 10px 20px rgba(43, 224, 40, 0.3)" }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              Become a global talent
            </motion.button>

            <Link to="/jukebox" className="">
              <motion.button
                className="bg-[#231F20] text-[#ECFBEB] font-semibold py-4 w-full px-6 rounded-full text-sm md:text-lg cursor-pointer"
                whileHover={{ scale: 1.1, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)" }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                Join Jukebox Incubator Program
              </motion.button>
            </Link>


          </div>

          <motion.div
            className="absolute right-[10%] md:-right-[10%] top-[45%] md:top-[65%] w-[60px] md:w-[170px] h-[57px] md:h-[167px] bg-contain bg-no-repeat -rotate-[70deg] md:-rotate-0"
            style={{ backgroundImage: `url(${BlackArrow})` }}
            animate={{ y: [5, -5, 5], rotate: [3, -3, 3] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </div>
    </section>

  );
};

export default Hero;
