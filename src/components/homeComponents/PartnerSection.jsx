import React from "react";
import { motion } from "framer-motion";
import Flick from "../../assets/home/flick.png"
import PiggVest from "../../assets/home/piggyvest black logo 1.png"
import AirPeace from "../../assets/home/airpeace black logo 1.png"
import SideBrief from "../../assets/home/sidebrief.png"
import TeslaLogo from "../../assets/home/Tesla logo black 1.png"
import Trybb from "../../assets/home/Trybb.png"
import Marquee from "react-fast-marquee"

const partners = [
  Trybb, Flick, SideBrief, PiggVest, AirPeace, TeslaLogo
];

const PartnerSection = () => {
  return (
    <section className="bg-[#F4F4F4]">
      <div className="w-full md:w-4/5 mx-auto pt-10">
        {/* Partners Section */}
        <div className="px-10">
          <div className="bg-black text-white rounded-2xl px-5 md:px-10 py-10 md:py-20">
            <h2 className="text-[14px] md:text-2xl font-bold">Our Innovation Champions (Partners)</h2>
            <p className="text-gray-300 text-[14px] md:text-xl mt-2 md:w-[800px]">
              Join our network of leading organizations and investors shaping the future
              of African tech innovation. Together, we’re creating opportunities, sharing
              resources, and driving ecosystem growth.
            </p>

            {/* Infinite Scrolling Logos */}
            <div className="relative overflow-hidden my-10">
              <Marquee
                speed={50}
                gradient={false}
                pauseOnHover={true}
                className="w-full"
              >
                {partners.map((logo, index) => (
                  <div key={index} className="mx-4 md:mx-8 flex items-center">
                    <img src={logo} alt={`partner-${index}`} className="h-4 md:h-8 object-contain" />
                  </div>
                ))}
              </Marquee>
            </div>

            {/* Partner Button */}
            <motion.button
              className="mt-5 w-full md:auto bg-[#2BE028] hover:text-white cursor-pointer px-6 py-2 text-black font-semibold rounded-full"
            >
              Partner with Us
            </motion.button>
          </div>
        </div>
      </div>
    </section>

  );
};

export default PartnerSection;
