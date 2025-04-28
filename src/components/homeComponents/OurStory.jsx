import React from "react";
import Img1 from "../../assets/home/Rectangle 31b.png";
import Img2 from "../../assets/home/Rectangle 32b.png";
import StoryComponent from "../StoryComponent";
import { motion } from "framer-motion";

const OurStory = () => {
  const bodyContent = (
    <>
      <motion.p
          className="text-2xl md:text-3xl font-bold leading-tight"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true }}
        >
          Our mission is to{" "}
          <motion.span
            className="font-normal"
          >
            ignite
          </motion.span>{" "}
          Africa's tech revolution by empowering the continent's{" "}
          <motion.span
            className="font-normal"
          >brightest minds.</motion.span>
        </motion.p>

        <motion.p
          className="text-gray-700 text-xl "
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
        >
          As a comprehensive tech ecosystem builder, we transform YOUR ideas into thriving businesses through structured incubation programs and robust boot camps.
        </motion.p>

        <motion.p
          className="font-medium text-2xl md:text-3xl text-gray-900"
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
    </>
  )
  return (
    <>
      <StoryComponent 
        sec_title="our story"
        img1={Img1}
        img1_classes="w-44 md:w-40 rounded-lg absolute rotate-[-3deg] top-[-10px] left-[40px] md:left-[40px]"
        img2={Img2}
        img2_classes="w-44 md:w-40 rounded-lg absolute rotate-[3deg] mt-36 top-[-20px] left-[40px] md:left-[70px]"
        span_text="we are"
        head_text="The Factory"
        body_text={bodyContent}
      />
    </>
  );
};

export default OurStory;
