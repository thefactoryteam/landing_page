import React from "react";
import { motion } from "framer-motion";
import Img1 from "../assets/Rectangle 23.png";
import Img2 from "../assets/Rectangle 24.png";
import Img3 from "../assets/Rectangle 25.png";
import Img4 from "../assets/Rectangle 26.png";
import Img5 from "../assets/Rectangle 27.png";
import Img6 from "../assets/Rectangle 28.png";
import Img7 from "../assets/Rectangle 29.png";
import Img8 from "../assets/Rectangle 30.png";
import Img9 from "../assets/Rectangle 31.png";
import Img10 from "../assets/Rectangle 32.png";

const images = [
    { src: Img1, height: "h-48", animation: { opacity: 0, y: 50 }, hoverEffect: { scale: 1.15, rotate: 3 } },
    { src: Img2, height: "h-64", colSpan: "col-span-2", animation: { opacity: 0, scale: 0.5, rotateX: 20 }, hoverEffect: { scale: 1.1, rotateX: 5 } },
    { src: Img3, height: "h-48", animation: { opacity: 0, rotate: -10, y: -50 }, hoverEffect: { rotate: 5, scale: 1.08 } },
    { src: Img4, height: "h-56", animation: { opacity: 0, x: -100 }, hoverEffect: { scale: 1.1, rotateY: 5 } },
    { src: Img6, height: "h-40", animation: { opacity: 0, y: 70 }, hoverEffect: { scale: 1.15, boxShadow: "0px 10px 20px rgba(0,0,0,0.3)" } },
    { src: Img5, height: "h-60", colSpan: "col-span-2", animation: { opacity: 0, scale: 0.7, y: 40 }, hoverEffect: { scale: 1.05, rotateY: 8 } },
    { src: Img7, height: "h-48", animation: { opacity: 0, rotate: 15, x: -50 }, hoverEffect: { scale: 1.12, rotate: -5 } },
    { src: Img8, height: "h-40", animation: { opacity: 0, scale: 0.5, rotateX: -20 }, hoverEffect: { scale: 1.1, rotateX: 10 } },
    { src: Img9, height: "h-48", animation: { opacity: 0, y: -60, scale: 1.2 }, hoverEffect: { scale: 1.05, rotateY: 5 } },
    { src: Img10, height: "h-40", animation: { opacity: 0, x: 100 }, hoverEffect: { scale: 1.1, rotateX: 8 } },
];

export const Gallery = () => {
    return (
        <motion.div
            className="w-4/5 mx-auto overflow-hidden pb-20 relative mt-20"
            
            // Entire Section Entrance Animation (Up and Down)
            initial={{ opacity: 0, y: 100 }} // Starts lower
            whileInView={{ opacity: 1, y: 0 }} // Moves to normal position
            exit={{ opacity: 0, y: -100 }} // Scrolls out upward
            transition={{ duration: 1, ease: "easeOut" }}
            
            viewport={{ once: false, amount: 0.2 }} // Re-triggers when scrolled into view
        >
            <div className="grid grid-cols-4 gap-6">
                {images.map((img, index) => (
                    <motion.div
                        key={index}
                        className={`${img.height} ${img.colSpan || ""} relative overflow-hidden`}
                        initial={img.animation}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0, x: 0, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.15 }}
                        whileHover={{
                            ...img.hoverEffect,
                            transition: { duration: 0.3, ease: "easeInOut" },
                        }}
                        viewport={{ once: false, amount: 0.1 }}
                    >
                        <motion.div
                            className="absolute inset-0 bg-white opacity-0 rounded-lg"
                            whileHover={{ opacity: 0.1, scale: 1.2 }}
                            transition={{ duration: 0.3 }}
                        />
                        
                        <motion.img
                            src={img.src}
                            alt=""
                            className="w-full h-full object-cover rounded-lg shadow-lg"
                            transition={{ duration: 0.3 }}
                        />
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};
