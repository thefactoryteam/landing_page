import React from "react";
import { motion } from "framer-motion";
import Flick from "../assets/flick.png"
import PiggVest from "../assets/piggyvest black logo 1.png"
import AirPeace from "../assets/airpeace black logo 1.png"
import SideBrief from "../assets/sidebrief.png"
import TeslaLogo from "../assets/Tesla logo black 1.png"
import Trybb from "../assets/Trybb.png"

const partners = [
  Trybb, Flick, SideBrief, PiggVest, AirPeace, TeslaLogo
];

const PartnerSection = () => {
  return (
    <div className="w-4/5 mx-auto mt-10">
      {/* Partners Section */}
      <div className="">
        <div className="bg-black text-white rounded-2xl p-10">
          <h2 className="text-3xl font-bold">Our Innovation Champions (Partners)</h2>
          <p className="text-gray-300 text-2xl mt-2 w-[800px]">
            Join our network of leading organizations and investors shaping the future
            of African tech innovation. Together, we’re creating opportunities, sharing 
            resources, and driving ecosystem growth.
          </p>

          {/* Infinite Scrolling Logos */}
          <div className="relative overflow-hidden my-10">
            <motion.div
              className="flex gap-10"
              animate={{ x: ["0%", "-100%"] }}
              transition={{
                repeat: Infinity,
                duration: 15,
                ease: "linear",
              }}
            >
              {[...partners, ...partners].map((logo, index) => (
                <img key={index} src={logo} alt="partner" className="h-8"/>
              ))}
            </motion.div>
          </div>

          {/* Partner Button */}
          <motion.button
            className="mt-5 bg-[#2BE028] hover:text-white px-6 py-2 text-black font-semibold rounded-full"
            whileHover={{ scale: 1.1 }}
          >
            Partner with Us
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default PartnerSection;
