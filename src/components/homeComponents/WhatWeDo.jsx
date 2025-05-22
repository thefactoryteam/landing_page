import React from "react";
import { motion } from "framer-motion";
import Img1 from "../../assets/home/sobe2.png";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import ButtonComponent from "../shared/ButtonComponent";
import { Link } from "react-router";

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

// Learn more button component
// const LearnMore = () => {
//     return (
//         <motion.button
//             whileHover="hover"
//             className="mt-5 py-2 px-6 w-full md:w-auto bg-[#231F20] text-white group text-xs md:text-lg cursor-pointer rounded-full flex items-center justify-center gap-3 relative overflow-hidden"
//         >
//             <span className="transition-colors duration-300 group-hover:text-[#2BE028]">
//                 Learn More
//             </span>
//             <motion.span
//                 variants={{
//                     hover: { x: -5 },
//                 }}
//                 transition={{ type: "spring", stiffness: 300, damping: 20 }}
//                 className="flex items-center"
//             >
//                 <FaArrowRight className="group-hover:text-[#2be028]" />
//             </motion.span>
//         </motion.button>

//     )
// }

const WhatWeDo = () => {
    const skills = ["Frontend Engineering", "Product Design", "Data Analytics", "Cyber Security", "AI & Machine Learning"];

    return (
        <section className="bg-[#F4F4F4]">
            <motion.div className="primary-font max-w-4/5 md:max-w-3/4 w-full mx-auto py-20" id="our-services">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

                    {/* Left: Sticky Image Section */}
                    <motion.div className="md:sticky top-40 md:h-[500px] ">
                        <motion.p
                            className="italic text-[#231F20] meriwether-font text-center md:text-left text-2xl md:mb-20"
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
                            className="w-[70%] rounded-lg shadow-xl hidden md:inline-block "
                            initial="initial"
                            animate="animate"
                            whileInView="whileWaiting"
                            exit="exit"
                            variants={imageAnimation}
                        />
                    </motion.div>


                    <motion.div className="col-span-2 space-y-20 max-w-2xl">
                        {/* Section 1 - Startup Incubator */}
                        <motion.div initial="hidden" whileInView="visible" exit="exit" variants={textVariants}>
                            <motion.h2 className="text-2xl md:text-5xl font-extralight" variants={textVariants}>
                                The Start-up Incubator
                            </motion.h2>
                            <motion.p className="text-[17px] md:text-3xl font-bold leading-normal md:leading-tight py-3 md:py-7" variants={textVariants}>
                                JukeBox is The Factory's flagship 3-month incubator program, where we identify, nurture, and invest in early-stage startups.
                            </motion.p>
                            <motion.p className="text-[16px] md:text-xl text-gray-900 leading-normal md:leading-10" variants={textVariants}>
                                Our goal is to empower innovative African startups with resources, mentorship, and funding to scale their innovative solutions that will drive tech and entrepreneurial growth in Africa.
                            </motion.p>

                            {/* Learn more button */}
                            <Link to="/jukebox" >
                                <ButtonComponent
                                    text="Learn More"
                                />
                            </Link>


                        </motion.div>
                        {/* Section 3 - Bootcamps & Training */}
                        <motion.div initial="hidden" whileInView="visible" exit="exit" variants={textVariants}>
                            <motion.h2 className="text-2xl md:text-5xl font-extralight" variants={textVariants}>
                                Bootcamps & Training Programs
                            </motion.h2>
                            <motion.p className="text-[17px] md:text-3xl font-bold leading-normal md:leading-tight py-3 md:py-7" variants={textVariants}>
                                Level up your skills through immersive learning experiences designed to keep you ahead in a fast-evolving world.
                            </motion.p>
                            <motion.p className="text-[16px] md:text-xl text-gray-900 leading-normal md:leading-10" variants={textVariants}>
                                Our expert-led training programs and bootcamps teach you the real-world skills like:
                            </motion.p>
                            <motion.div className="flex gap-3 pt-5 flex-wrap" variants={textVariants}>
                                {skills.map((skill, index) => (
                                    <motion.p
                                        key={index}
                                        className="bg-[#231F20] text-white py-1 px-3 md:py-2 md:px-4 text-[8px] md:text-sm rounded-full"
                                        whileHover={{ scale: 1.1, backgroundColor: "#2BE028", color: "#231F20" }}
                                    >
                                        {skill}
                                    </motion.p>
                                ))}
                            </motion.div>
                            <motion.p className="text-[16px] md:text-xl text-gray-900 py-5" variants={textVariants}>
                                that employers want.
                            </motion.p>
                            <motion.div className="flex text-sm md:text-lg font-medium" variants={textVariants}>
                                <RiDoubleQuotesL className="text-[#2BE028] text-lg" />
                                <motion.p className="italic">We back founders who see opportunity where others see obstacles.</motion.p>
                                <RiDoubleQuotesR className="text-[#2BE028] text-lg" />
                            </motion.div>

                            {/* Learn more button */}

                            <ButtonComponent
                                text="Learn More"
                            />

                        </motion.div>

                        {/* Section 2 - Co-Working Space */}
                        <motion.div initial="hidden" whileInView="visible" exit="exit" variants={textVariants}>
                            <motion.h2 className="text-2xl md:text-5xl font-extralight" variants={textVariants}>
                                The Co-Working Space
                            </motion.h2>
                            <motion.p className="text-[17px] md:text-3xl font-bold leading-normal md:leading-tight py-3 md:py-7" variants={textVariants}>
                                Welcome to your Productivity Oasis.
                            </motion.p>
                            <motion.p className="text-[17px] md:text-xl text-gray-900 leading-normal md:leading-tight" variants={textVariants}>
                                Experience a peaceful workspace away from city distractions. Our co-working space combines comfort with productivity, perfect for professionals who need a focused environment to do their best work.
                            </motion.p>
                            <motion.p className="text-[17px] md:text-2xl text-gray-900 font-bold py-5" variants={textVariants}>
                                Surrounded by scenic views and natural light, our space creates an inspiring atmosphere that nurtures creativity and deep work.
                            </motion.p>
                            <motion.div className="flex text-sm md:text-lg font-medium" variants={textVariants}>
                                <RiDoubleQuotesL className="text-[#2BE028] text-lg" />
                                <motion.p className="italic">Yes, we're located just outside the city – and that's by design.</motion.p>
                                <RiDoubleQuotesR className="text-[#2BE028] text-lg" />
                            </motion.div>

                            {/* Learn more button */}

                            <Link to="/co-working-space">
                                <ButtonComponent
                                    text="Learn More"
                                />
                            </Link>


                        </motion.div>


                    </motion.div>
                </div>
            </motion.div>
        </section>

    );
};

export default WhatWeDo;
