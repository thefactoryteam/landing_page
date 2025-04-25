import React from 'react'
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import { motion } from "framer-motion";

const StoryComponent = ({ sec_title, img1, img2, img1_classes, img2_classes, span_text, head_text, body_text }) => {
  return (
    <div className="primary-font grid grid-cols-1 md:grid-cols-3 max-w-3/4 w-full mx-auto py-20 relative overflow-hidden" id="our-story">

      <motion.div
        className="absolute w-24 md:w-20 h-24 md:h-20 bg-[#2BE028] rounded-full -z-10 left-12 top-80"
        animate={{
          scale: [1, 1.5, 1],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>

      <motion.div
        className="absolute md:hidden w-20 md:w-40 h-20 md:h-40 bg-[#ECFBEB] rounded-full -z-10 right-16 top-64"
      ></motion.div>

      <div className="relative">
        {/* Subheading */}
        <motion.p
          className="italic text-[#231F20] meriwether-font text-2xl text-center md:text-left"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {sec_title}
        </motion.p>

        <div className="relative flex justify-center items-center mt-20">

          <motion.img
            src={img1}
            alt="Story 1"
            className={img1_classes}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
          />


          <motion.img
            src={img2}
            alt="Story 2"
            className={img2_classes}
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true }}
          />
        </div>
      </div>

      <div className="col-span-2 space-y-5 max-w-2xl mt-10 md:mt-0">

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit="exit"
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <span className="ps-6 md:ps-7 text-lg md:text-3xl italic">{span_text} </span>
          <div className="flex">
            <motion.p className="text-[#2BE028] text-2xl md:text-3xl leading-none">
              <RiDoubleQuotesL />
            </motion.p>

            <motion.h2
              className="text-3xl md:text-5xl font-extralight"
              whileInView={{ scale: 1 }}
              transition={{ duration: 1, ease: "backOut", delay: 0.3 }}
            >
              {head_text}
            </motion.h2>

            <motion.p className="text-[#2BE028] text-2xl md:text-3xl leading-none">
              <RiDoubleQuotesR />
            </motion.p>
          </div>

        </motion.div>

        {body_text}

      </div>
    </div>
  )
}

export default StoryComponent