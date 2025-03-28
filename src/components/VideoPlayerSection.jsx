import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPlay } from "react-icons/fa";

const VideoPlayerSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative w-[90%] mx-auto rounded-2xl overflow-hidden shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Video Thumbnail */}
      <div className="relative">
        <img
          src="/video-thumbnail.jpg"
          alt="Video Thumbnail"
          className="w-full rounded-2xl"
        />

        {/* Play Button */}
        <motion.button
          className="absolute inset-0 flex items-center justify-center bg-black/40 text-white text-4xl rounded-full w-16 h-16 mx-auto my-auto"
          whileHover={{ scale: 1.2 }}
        >
          <FaPlay />
        </motion.button>
      </div>

      {/* Hover State */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 50 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white p-5"
      >
        {/* Title */}
        <motion.h2
          className="text-3xl font-bold text-center"
          initial={{ scale: 0.8 }}
          animate={{ scale: isHovered ? 1 : 0.8 }}
          transition={{ duration: 0.3 }}
        >
          <span className="text-green-400">"Steve Ojong"</span>  
        </motion.h2>

        {/* Subtitle */}
        <motion.p className="text-lg italic opacity-80">
          mirror-me global
        </motion.p>

        {/* Video Progress Bar */}
        <div className="w-full mt-5">
          <div className="h-1 bg-gray-400 w-full relative">
            <motion.div
              className="h-1 bg-green-400 absolute left-0"
              initial={{ width: "20%" }}
              animate={{ width: isHovered ? "80%" : "20%" }}
              transition={{ duration: 1 }}
            />
          </div>
        </div>

        {/* Video Thumbnails (Hover State) */}
        <motion.div className="flex gap-2 mt-5">
          {["vid1.jpg", "vid2.jpg", "vid3.jpg"].map((img, index) => (
            <motion.img
              key={index}
              src={`/${img}`}
              className="w-20 h-12 rounded-lg object-cover opacity-80"
              whileHover={{ scale: 1.1, opacity: 1 }}
            />
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default VideoPlayerSection;
