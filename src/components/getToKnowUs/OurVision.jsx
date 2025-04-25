// import React from 'react'
// import Visionaries from '../../assets/getToKnowUs/visionaries.png'


// const OurVision = () => {
//   return (
//     <div className="max-w-4/5 mx-auto py-16 text-center mt-20">
//       <h2 className="meriwether-font text-3xl !font-semibold mb-4">Our Vision</h2>
//       <p className="text-[#231F20] max-w-2xl mx-auto mb-10 text-xl">
//         Our vision is to be the undisputed hub of Africa's emerging tech scene,
//         empowering African tech talent to achieve global prominence.
//       </p>

//       {/* Image Container */}
//       <div className="">
//         <img src={Visionaries} alt="The factory visionaries" />
//       </div>
//     </div>
//   )
// }

// export default OurVision



import React from 'react'
import { motion } from 'framer-motion'
import Visionaries from '../../assets/getToKnowUs/visionaries.png'

const fadeInUp = {
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
    <div className="relative max-w-6xl mx-auto py-20 mt-10 text-center px-4 overflow-hidden">
      {/* Light Gradient Overlay */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/60 via-transparent to-white/60 z-0" />

      <motion.h2
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="meriwether-font text-4xl !font-semibold mb-4 relative z-10"
      >
        Our Vision
      </motion.h2>

      <motion.p
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-[#231F20] max-w-2xl mx-auto mb-10 text-lg primary-font md:text-xl relative z-10"
      >
        Our vision is to be the undisputed hub of Africa's emerging tech scene,
        empowering African tech talent to achieve global prominence.
      </motion.p>

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-10 rounded-xl overflow-hidden shadow-xl"
      >
        <img
          src={Visionaries}
          alt="The factory visionaries"
          className="w-full object-cover"
        />
      </motion.div>
    </div>
  )
}

export default OurVision
