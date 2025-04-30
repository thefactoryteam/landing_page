import React from 'react'
import { motion } from 'framer-motion'
import EllipseShape from '../../assets/innovationExpo/ellipseShape.png'
import EllipseShape2 from '../../assets/innovationExpo/ellipseShape2.png'

const BeneftsComponent = ({ benefits, colouredEllipse = false }) => {

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.3 // Slower staggering for smoother sequence
            }
        }
    }
    
    const itemVariants = {
        hidden: { opacity: 0, y: 15 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { 
                duration: 0.7, // Slower animation
                ease: "easeOut" // Simple easing for better performance
            }
        }
    }

    return (
        <motion.div
            className='max-w-xl mx-auto'
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1, margin: "-100px 0px" }}
        >
            {benefits.map((benefit, idx) => (
                <motion.div
                    key={idx}
                    className='flex items-center gap-5 p-4'
                    variants={itemVariants}
                    custom={idx}
                >
                    <div className='flex-shrink-0'>
                        <div className='p-2 rounded-full'>
                            <img src={colouredEllipse ? EllipseShape2 : EllipseShape} alt="" className='h-8 w-8' loading="lazy" />
                        </div>
                    </div>
                    <div>
                        <p className='text-2xl text-[#231F20]'>
                            {benefit}
                        </p>
                    </div>
                </motion.div>
            ))}
        </motion.div>
    )
}

export default BeneftsComponent