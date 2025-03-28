import React from "react";
import { motion } from "framer-motion";
import Img1 from "../assets/Rectangle 31b.png";
import Img2 from "../assets/Rectangle 32b.png";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

const OurStory = () => {
  return (
    <div className="primary-font grid grid-cols-3 w-4/5 mx-auto py-20 relative overflow-hidden">
      
      <motion.div
        className="absolute w-40 h-40 bg-[#2BE028] rounded-full -z-10 left-12 top-80"
        animate={{
          scale: [1, 1.5, 1],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>

      <div className="relative">
        {/* Subheading */}
        <motion.p
          className="italic text-[#231F20] meriwether-font text-3xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          our story
        </motion.p>

        <div className="relative flex justify-center items-center mt-20">
  
          <motion.img
            src={Img1}
            alt="Story 1"
            className="w-52 rounded-lg absolute rotate-[-3deg] top-[-10px] left-[65px]"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
          />

       
          <motion.img
            src={Img2}
            alt="Story 2"
            className="w-52 rounded-lg rotate-[3deg] mt-40"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true }}
          />
        </div>
      </div>

      <div className="col-span-2 space-y-5">
       
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <span className="ps-12 text-3xl italic">we are</span>
          <div className="flex">
            <motion.p className="text-[#2BE028] text-5xl leading-none">
              <RiDoubleQuotesL />
            </motion.p>

            <motion.h2
              className="text-7xl font-extralight"
              whileInView={{ scale: 1 }}
              transition={{ duration: 1, ease: "backOut", delay: 0.3 }}
            >
              The Factory
            </motion.h2>

            <motion.p className="text-[#2BE028] text-5xl leading-none">
              <RiDoubleQuotesR />
            </motion.p>
          </div>

        </motion.div>

        <motion.p
          className="text-5xl font-bold leading-tight"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true }}
        >
          Our mission is to{" "}
          <motion.span
            className="font-normal"
            whileHover={{ color: "#2BE028", textShadow: "0px 0px 10px rgba(43, 224, 40, 0.8)" }}
          >
            ignite
          </motion.span>{" "}
          Africa's tech revolution by empowering the continent's{" "}
          <motion.span 
            className="font-normal"
            whileHover={{ color: "#2BE028", textShadow: "0px 0px 10px rgba(43, 224, 40, 0.8)" }}
            >brightest minds.</motion.span>
        </motion.p>

        <motion.p
          className="text-gray-700 text-2xl max-w-4xl w-3xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
        >
          As a comprehensive tech ecosystem builder, we transform YOUR ideas into thriving businesses through structured incubation programs and robust boot camps.
        </motion.p>

        <motion.p
          className="font-medium text-4xl text-gray-900"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.span className="font-bold" whileHover={{ color: "#2BE028" }}>
            Together,
          </motion.span>{" "}
          we foster innovation, collaboration,{" "}
          <motion.span className="font-bold" whileHover={{ color: "#2BE028" }}>
            and
          </motion.span>{" "}
          sustainable growth.
        </motion.p>
      </div>
    </div>
  );
};

export default OurStory;
