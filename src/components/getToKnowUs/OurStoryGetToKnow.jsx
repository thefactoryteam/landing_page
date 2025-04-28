import React from 'react'
import { motion } from "framer-motion";
import Festus from "../../assets/getToKnowUs/festus1.png"
import Daniel from "../../assets/getToKnowUs/daniel.png"
import StoryComponent from '../StoryComponent';

const OurStoryGetToKnow = () => {
    const bodyContent = (
        <>
            <motion.p
                className="text-gray-700 text-xl "
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                viewport={{ once: true }}
            >
                We believe Africa's tech potential is boundless, and we're here to make that a reality. We don't just support your dreams; we create ecosystems where innovation thrives. We're bridging the gap between African talent and global opportunities through our startup incubator, tech training, and collaborative spaces.
            </motion.p>

            <motion.p
                className="text-gray-700 text-xl "
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                viewport={{ once: true }}
            >

                We're committed to African empowerment—nurturing local talent, creating pathways to success, and amplifying the technological voices of a continent ready to lead. We are not just about growing businesses; we are proving that Africa's tech ecosystem can—and will—reshape the global innovation landscape.
            </motion.p>

            <motion.p
                className="font-bold text-2xl md:text-3xl text-gray-900"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
                viewport={{ once: true }}
            >
                This is our promise. This is our purpose. This is The Factory.
            </motion.p>
        </>
    )
    return (
        <div className='bg-[#F4F4F4]'>
            <StoryComponent
                sec_title="our story"
                img1={Festus}
                img1_classes="w-44 md:w-50 rounded-lg absolute rotate-[-3deg] top-[-30px] left-[40px] md:left-[40px]"
                img2={Daniel}
                img2_classes="w-44 md:w-50 rounded-lg absolute rotate-[3deg] mt-36 top-[-20px] left-[40px] md:left-[70px]"
                span_text="we are"
                head_text="The Factory"
                body_text={bodyContent}
            />
        </div>
    )
}

export default OurStoryGetToKnow