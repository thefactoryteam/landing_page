import React from 'react'
import { motion } from 'framer-motion'
import Visionaries from '../../assets/getToKnowUs/visionaries.png'
import Video from "../../assets/getToKnowUs/Video.png"
import SectionHeaders from './SectionHeaders'

export const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
}

const OurVision = () => {
  return (
    <section className='bg-[#F4F4F4]'>
      <div className="relative max-w-6xl mx-auto py-20 text-center px-4 overflow-hidden">

        <SectionHeaders 
          title="Our Vision"
          desc="Our vision is to be the undisputed hub of Africa's emerging tech scene,
          empowering African tech talent to achieve global prominence."
          fadeInUp={fadeInUp}
        />

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative z-10 rounded-xl overflow-hidden shadow-xl"
        >
          <img
            src={Video}
            alt="The factory visionaries"
            className="w-full object-cover"
          />
        </motion.div>
      </div>
    </section>

  )
}

export default OurVision
