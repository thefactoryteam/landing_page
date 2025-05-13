import React from "react";
import Grid from '../../assets/Grid.png'
import Okod from '../../assets/bootcamp/okod.png'
import RotatingCTA from "../shared/RotatingCTA";

const HeroSection = () => {
    return (
        <section className="min-h-screen flex items-center justify-center px-4 py-1i2" style={{ backgroundImage: `url(${Grid})` }}>
            <div className="relative max-w-7xl w-full py-20">
                <div className="bg-black flex flex-col md:flex-row rounded-[2rem] overflow-hiddden  shadow-md">
                    {/* Left Side - Text */}
                    <div className=" text-white flex flex-col justify-center py-8 px-8 md:px-25 md:py-12  flex-1">
                        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                            LAUNCH YOUR <br />
                            TECH CAREER <br />
                            WITH WORLD- <br />
                            CLASS TRAINING
                        </h1>
                        <p className=" text-[17px] md:text-2xl text-gray-300 mt-4 leading-relaxed">
                            At The Factory, We’re Bridging Africa’s Digital <br />
                            Skills Gap By Equipping You With In-Demand <br />
                            Tech Skills, Hands-On Experience, And Direct <br />
                            Pathways To Internships And Jobs.
                        </p>
                    </div>

                    {/* Right Side - Image with CTA */}
                    <div className="absolute right-30 top-5 flex-1">
                        <img
                            src={Okod}
                            alt="Tech students"
                            className="w-[390px] object-cover"
                        />

                        {/* Green CTA Button */}
                        
                    </div>
                    <div className="absolute bottom-32 right-10 w-28 h-28  rounded-full flex items-center justify-center">
                           <RotatingCTA />
                        </div>
                </div>
            </div>

        </section>
    );
};

export default HeroSection;
