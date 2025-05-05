import React from 'react'
import { motion } from 'framer-motion';
import { FaArrowRight } from "react-icons/fa6";

const ButtonComponent = ({ text, Icon = FaArrowRight, arrow = true, jukebox=false, coWorking=false }) => {
    return (
        <motion.button
            whileHover="hover"
            className={`mt-5 py-2 px-6 w-full ${coWorking ? "md:w-full" : "md:w-auto"}  bg-[#231F20] text-white group text-xs md:text-lg cursor-pointer rounded-full flex items-center justify-center gap-3 relative overflow-hidden   ${jukebox ? "border-[#71BF44B0] shadow-[0_0_15px_#71BF44] hover:shadow-[0_0_20px_#2BE028] transition-all duration-300 ease-in-out bg-[#070707]" : "bg-[#231F20]"}  `}
        >
            <span className="transition-colors duration-300 group-hover:text-[#2BE028]">
                { text }
            </span>
            <motion.span
                variants={{
                    hover: { x: -5 },
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="flex items-center"
            >
                { arrow && <Icon className="group-hover:text-[#2be028]" />}
                
            </motion.span>
        </motion.button>
    )
}

export default ButtonComponent
