import React from "react";
import { motion } from "framer-motion";
import Img1 from "../assets/Group 63.png";
import { FaArrowRight } from "react-icons/fa6";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, staggerChildren: 0.2 } },
};

const imageAnimation = {
    initial: { opacity: 0, scale: 0.8 },
    animate: {
        opacity: 1,
        scale: 1,
        transition: { duration: 1, ease: "easeOut" },
    },
    whileWaiting: {
        y: [0, -10, 0],
        rotate: [-2, 2, -2],
        transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
    },
    exit: { opacity: 0, scale: 0.7, transition: { duration: 1 } },
};

const WhatWeDo = () => {
    const skills = ["Frontend Engineering", "Product Design", "Data Analytics", "Cyber Security", "AI & Machine Learning"];

    return (
        <motion.div className="primary-font w-4/5 mx-auto py-20">
            <div className="grid grid-cols-3 gap-10">

                {/* Left: Sticky Image Section */}
                <motion.div className="sticky top-0 h-[500px] ">
                    <motion.p
                        className="italic text-[#231F20] meriwether-font text-3xl mb-20"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        what we do
                    </motion.p>
                    <motion.img
                        src={Img1}
                        alt="Illustration"
                        className="w-[90%] rounded-lg shadow-xl"
                        initial="initial"
                        animate="animate"
                        whileInView="whileWaiting"
                        exit="exit"
                        variants={imageAnimation}
                    />
                </motion.div>


                <motion.div className="col-span-2 space-y-40">
                    {/* Section 1 - Startup Incubator */}
                    <motion.div initial="hidden" whileInView="visible" exit="exit" variants={textVariants}>
                        <motion.h2 className="text-7xl font-extralight" variants={textVariants}>
                            The Start-up Incubator
                        </motion.h2>
                        <motion.p className="text-5xl font-bold leading-tight py-7" variants={textVariants}>
                            JukeBox is The Factory's flagship 3-month incubator program, where we identify, nurture, and invest in early-stage startups.
                        </motion.p>
                        <motion.p className="text-2xl text-gray-900 leading-10" variants={textVariants}>
                            Our goal is to empower innovative African startups with resources, mentorship, and funding to scale their innovative solutions that will drive tech and entrepreneurial growth in Africa.
                        </motion.p>
                        <motion.button
                            className="mt-5 py-3 px-6 bg-[#231F20] text-white rounded-full flex items-center gap-3 relative overflow-hidden"
                            whileHover={{
                                scale: 1.1,
                                boxShadow: "0px 5px 15px rgba(0,0,0,0.3)",
                                backgroundColor: "#2BE028",
                                color: "#231F20"
                            }}
                            animate={{
                                scale: [1, 1.05, 1],
                                boxShadow: ["0px 0px 10px rgba(43, 224, 40, 0.5)", "0px 0px 20px rgba(43, 224, 40, 0.8)", "0px 0px 10px rgba(43, 224, 40, 0.5)"],
                                transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
                            }}
                        >
                            Learn More <FaArrowRight className="animate-pulse" />
                        </motion.button>

                    </motion.div>

                    {/* Section 2 - Co-Working Space */}
                    <motion.div initial="hidden" whileInView="visible" exit="exit" variants={textVariants}>
                        <motion.h2 className="text-7xl font-extralight" variants={textVariants}>
                            The Co-Working Space
                        </motion.h2>
                        <motion.p className="text-5xl font-bold leading-tight py-7" variants={textVariants}>
                            Welcome to your Productivity Oasis.
                        </motion.p>
                        <motion.p className="text-2xl text-gray-900 leading-10" variants={textVariants}>
                            Experience a peaceful workspace away from city distractions. Our co-working space combines comfort with productivity, perfect for professionals who need a focused environment to do their best work.
                        </motion.p>
                        <motion.p className="text-2xl text-gray-900 font-bold py-10" variants={textVariants}>
                            Surrounded by scenic views and natural light, our space creates an inspiring atmosphere that nurtures creativity and deep work.
                        </motion.p>
                        <motion.div className="flex text-2xl font-medium" variants={textVariants}>
                            <RiDoubleQuotesL className="text-[#2BE028] text-4xl" />
                            <motion.p className="px-4 italic">Yes, we're located just outside the city – and that's by design.</motion.p>
                            <RiDoubleQuotesR className="text-[#2BE028] text-4xl" />
                        </motion.div>


                        <motion.button
                            className="mt-5 py-3 px-6 bg-[#231F20] text-white rounded-full flex items-center gap-3 relative overflow-hidden"
                            whileHover={{
                                scale: 1.1,
                                boxShadow: "0px 5px 15px rgba(0,0,0,0.3)",
                                backgroundColor: "#2BE028",
                                color: "#231F20"
                            }}
                            animate={{
                                scale: [1, 1.05, 1],
                                boxShadow: ["0px 0px 10px rgba(43, 224, 40, 0.5)", "0px 0px 20px rgba(43, 224, 40, 0.8)", "0px 0px 10px rgba(43, 224, 40, 0.5)"],
                                transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
                            }}
                        >
                            Learn More <FaArrowRight className="animate-pulse" />
                        </motion.button>

                    </motion.div>

                    {/* Section 3 - Bootcamps & Training */}
                    <motion.div initial="hidden" whileInView="visible" exit="exit" variants={textVariants}>
                        <motion.h2 className="text-7xl font-extralight" variants={textVariants}>
                            Bootcamps & Training Programs
                        </motion.h2>
                        <motion.p className="text-5xl font-bold leading-tight py-7" variants={textVariants}>
                            Level up your skills through immersive learning experiences designed to keep you ahead in a fast-evolving world.
                        </motion.p>
                        <motion.p className="text-2xl text-gray-900 leading-10" variants={textVariants}>
                            Our expert-led training programs and bootcamps teach you the real-world skills like:
                        </motion.p>
                        <motion.div className="flex gap-3 pt-5 flex-wrap" variants={textVariants}>
                            {skills.map((skill, index) => (
                                <motion.p
                                    key={index}
                                    className="bg-[#231F20] text-white py-2 px-4 text-sm rounded-full"
                                    whileHover={{ scale: 1.1, backgroundColor: "#2BE028", color: "#231F20" }}
                                >
                                    {skill}
                                </motion.p>
                            ))}
                        </motion.div>
                        <motion.p className="text-2xl text-gray-900 py-5" variants={textVariants}>
                            that employers want.
                        </motion.p>
                        <motion.div className="flex text-2xl font-medium" variants={textVariants}>
                            <RiDoubleQuotesL className="text-[#2BE028] text-4xl" />
                            <motion.p className="px-4 italic">We back founders who see opportunity where others see obstacles.</motion.p>
                            <RiDoubleQuotesR className="text-[#2BE028] text-4xl" />
                        </motion.div>
                        <motion.button
                            className="mt-5 py-3 px-6 bg-[#231F20] text-white rounded-full flex items-center gap-3 relative overflow-hidden"
                            whileHover={{
                                scale: 1.1,
                                boxShadow: "0px 5px 15px rgba(0,0,0,0.3)",
                                backgroundColor: "#2BE028",
                                color: "#231F20"
                            }}
                            animate={{
                                scale: [1, 1.05, 1],
                                boxShadow: ["0px 0px 10px rgba(43, 224, 40, 0.5)", "0px 0px 20px rgba(43, 224, 40, 0.8)", "0px 0px 10px rgba(43, 224, 40, 0.5)"],
                                transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
                            }}
                        >
                            Learn More <FaArrowRight className="animate-pulse" />
                        </motion.button>

                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default WhatWeDo;
