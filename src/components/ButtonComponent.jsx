import React from 'react'
import { motion } from 'framer-motion';
import { FaArrowRight } from "react-icons/fa6";

const ButtonComponent = ({ text, arrow = true }) => {
    return (
        <motion.button
            whileHover="hover"
            className="mt-5 py-2 px-6 w-full md:w-auto bg-[#231F20] text-white group text-xs md:text-lg cursor-pointer rounded-full flex items-center justify-center gap-3 relative overflow-hidden"
        >
            <span className="transition-colors duration-300 group-hover:text-[#2BE028]">
                Learn More
            </span>
            <motion.span
                variants={{
                    hover: { x: -5 },
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="flex items-center"
            >
                { arrow && <FaArrowRight className="group-hover:text-[#2be028]" />}
                
            </motion.span>
        </motion.button>
    )
}

export default ButtonComponent
