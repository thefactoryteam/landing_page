import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import InnovHeroImg from "../../assets/innovationExpo/Hero Section.webp"

const Hero = () => {

  return (
    <section className="w-full h-screen overflow-hidden px-4 pt-4 bg-white primary-font">
      <motion.div 
        className="relative w-full h-full bg-cover bg-center flex items-center justify-center rounded-t-3xl"
        style={{ backgroundImage: `url(${InnovHeroImg})` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-60 rounded-t-3xl"></div>
        
        <motion.h1 
          className="relative z-10 text-4xl md:text-6xl uppercase font-bold text-white text-center drop-shadow-md px-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Converge<span className='text-[#2BE028]'>.</span> Innovate<span className='text-[#2BE028]'>.</span> Transform<span className='text-[#2BE028]'>.</span> 
        </motion.h1>
      </motion.div>
    </section>
  );
};

export default Hero;