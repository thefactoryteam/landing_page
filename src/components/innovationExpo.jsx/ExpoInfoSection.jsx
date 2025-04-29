import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaCircleCheck } from "react-icons/fa6";
import ButtonComponent from '../ButtonComponent';
import SectionHeaders from '../SectionHeaders';
import { FadeInUp } from '../../utils/animations';

const ExpoInfoSection = () => {
    // Ultra-simplified animation for maximum smoothness
    const fadeInUpLight = {
        hidden: {
            opacity: 0,
            y: 15 // Small y movement for subtle effect without performance issues
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut" // Simple easing for better performance
            }
        }
    };

    // Simple, performant stagger for cards
    const stagger = {
        visible: {
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const valueCards = [
        {
            title: "Exhibitions",
            description: "Explore groundbreaking products, solutions, and services from startups and established businesses.",
            dark: false
        },
        {
            title: "Startup Pitches",
            description: "Showcase your innovative ideas to investors, mentors, and partners to accelerate your startup's success.",
            dark: true
        },
        {
            title: "Keynote Sessions & Panels",
            description: "Gain insights from influential policymakers, industry leaders, and tech visionaries on emerging trends, opportunities, and strategies to leverage technology for economic growth.",
            dark: true
        },
        {
            title: "Networking Opportunities",
            description: "Connect with like-minded professionals and forge valuable partnerships with innovators, investors, and stakeholders.",
            dark: false
        }
    ];

    return (
        <section className="w-full bg-gray-50 py-16 px-4 md:px-8 lg:px-16 ">
            <div className="max-w-4xl mx-auto">
                {/* Main heading */}
                <div className='max-w-2xl mx-auto text-center'>
           
                    <SectionHeaders
                        title="What Is The Factory Innovation Expo All About?"
                        desc="The Factory's Innovation Expo is an annual conference and exhibition aimed at bridging the gap between innovation, business, and policy, fostering a dynamic ecosystem where startups, established firms, investors, and policymakers converge to shape the future of technology and business."
                        fadeInUp={FadeInUp}
                        maxWidth=''
                    />
                </div>


                {/* Second heading */}
                <div className='text-center'>
                    <SectionHeaders
                        title="What Value Will You Gain?"
                        desc=""
                        fadeInUp={FadeInUp}
                        maxWidth=''
                    />
                </div>

                {/* Value cards grid with simplified animation */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={stagger}
                >
                    {valueCards.map((card, index) => (
                        <motion.div
                            key={index}
                            className={`relative rounded-lg overflow-hidden h-80 p-6 border  ${card.dark
                                ? 'bg-[#231F20] text-white '
                                : 'bg-[#F4F4F4] text-gray-900 border-[#231F20] border-dashed'
                                }`}
                            variants={fadeInUpLight}
                        >

                            <h3 className="text-3xl font-bold mb-3">{card.title}</h3>
                            <p className={`${card.dark ? 'text-gray-300' : 'text-gray-700'} mb-8 text-xl`}>
                                {card.description}
                            </p>
                            <div className="absolute bottom-6 right-6">
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${card.dark ? 'bg-[#2BE028]' : 'bg-gray-900'}`}>
                                    <FaCircleCheck size={18} className="text-white" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Register button */}
                <motion.div
                    className="flex justify-center mt-10"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={fadeInUpLight}
                >

                    <ButtonComponent
                        text="Register Now"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default ExpoInfoSection;