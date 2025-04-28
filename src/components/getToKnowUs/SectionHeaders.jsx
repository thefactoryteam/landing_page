import React from 'react'
import { motion } from 'framer-motion'

const SectionHeaders = ({ title, desc, fadeInUp }) => {
    return (
        <>
            <motion.h2
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="meriwether-font text-4xl !font-semibold mb-4 relative z-10"
            >
                {title}
            </motion.h2>

            <motion.p
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-[#231F20] max-w-2xl mx-auto mb-10 text-lg primary-font md:text-xl relative z-10"
            >
                {desc}
            </motion.p>
        </>
    )
}

export default SectionHeaders