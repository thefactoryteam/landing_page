import React from 'react'
import { motion } from 'framer-motion'

const SectionHeaders = ({ title, desc, fadeInUp, maxWidth= "max-w-2xl" }) => {
    return (
        <>
            <motion.h2
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="meriwether-font text-2xl md:text-4xl !font-bold mb-4 relative z-10"
            >
                {title}
            </motion.h2>

            <motion.p
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={`text-[#231F20] mx-auto mb-10 text-[17px] primary-font md:text-xl relative z-10 ${maxWidth}`}
            >
                {desc}
            </motion.p>
        </>
    )
}

export default SectionHeaders