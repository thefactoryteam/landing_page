import React from 'react'
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import { motion } from "framer-motion";

const OurInnovators = () => {
    return (
        <div className="primary-font grid grid-cols-1 md:grid-cols-3 w-4/5 mx-auto py-20 relative overflow-hidden" id='innovation-expo'>
         
    
          <div className="relative ">
            {/* Subheading */}
            <motion.p
              className="italic text-[#231F20] meriwether-font text-3xl text-center md:text-left"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              from our innovators
            </motion.p>
    
            
          </div>
    
          <div className="col-span-2 space-y-5 mt-10 md:mt-0">
           
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className="ps-6 md:ps-12 text-lg md:text-3xl italic">the</span>
              <div className="flex">
                <motion.p className="text-[#2BE028] text-2xl md:text-5xl leading-none">
                  <RiDoubleQuotesL />
                </motion.p>
    
                <motion.h2
                  className="text-3xl md:text-7xl font-extralight"
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 1, ease: "backOut", delay: 0.3 }}
                >
                  Testimonials
                </motion.h2>
    
                <motion.p className="text-[#2BE028] text-2xl md:text-5xl leading-none">
                  <RiDoubleQuotesR />
                </motion.p>
              </div>
    
            </motion.div>
    
            <motion.p
              className="text-gray-700 text-lg md:text-2xl max-w-4xl md:w-3xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              viewport={{ once: true }}
            >
              Puts focus on the entrepreneurs themselves, exploring how our incubation and training programs have helped their businesses thrive.

            </motion.p>
    
            
          </div>
        </div>
      );
}

export default OurInnovators