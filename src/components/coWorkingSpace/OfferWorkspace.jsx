import React from 'react';
import Img1 from '../../assets/coworking/coworking1.png'
import Img2 from '../../assets/coworking/coworking2.png'
import Img3 from '../../assets/coworking/coworking3.png'
import Img1SmallScreen from '../../assets/coworking/coworking1b.png'
import Img2SmallScreen from '../../assets/coworking/coworking2b.png'
import Img3SmallScreen from '../../assets/coworking/coworking3b.png'
import { BsCartCheck } from "react-icons/bs";
import ButtonComponent from '../shared/ButtonComponent';

const offers = [
    {
        title: "The Solo Innovator Package",
        desc: "The solo innovator package is designed for Freelancers and individuals seeking a professional workspace.",
        features: ["One dedicated work desk.", "High-speed internet access.", "Access to the kitchen (shared amenities)."],
        benefits: ["Boost your productivity in a professional environment.", "Reliable internet access to power your work.", "Networking opportunities with like-minded professionals."],
        image: Img1,
        imageSmallScreen: Img1SmallScreen
    },
    {
        title: "The Digital HQ Package (Business Registration)",
        desc: "The Digital HQ package is designed for digital companies outside Calabar looking to establish a prestigious headquarters in Tinapa.",
        features: ["Dedicated work desks for up to 4 team members.", "Free Trade Zone License (facilitated for your company).", "High-speed internet access.", "Virtual office address for correspondence.", "Business formation and legal compliance.", "Company signage on The Factory Logo Board."],
        benefits: ["Access Free Trade Zone benefits like tax exemptions and streamlined logistics.", "Establish a credible headquarters address in Tinapa.", "A collaborative environment to connect with other businesses."],
        image: Img2,
        imageSmallScreen: Img2SmallScreen
    },
    {
        title: "The Team Catalyst Package",
        desc: "The team catalyst package is designed for development teams or businesses needing a dedicated workspace for collaboration.",
        features: ["Dedicated workspace for 4", "High-speed internet access.", "Access to the kitchen (shared amenities)."],
        benefits: ["A private and distraction-free workspace.", "Flexible options for a team size of 4.", "Build connections within a thriving business community."],
        image: Img3,
        imageSmallScreen: Img3SmallScreen
    }
]


const OfferWorkspace = () => {
    return (
        <section className=" primary-font px-8 md:px-0">
            {/* <div className=''> */}
            {offers.map(({ title, desc, features, benefits, image, imageSmallScreen }, idx) => {
                return (
                    <div key={idx} className='p-5 md:p-14 max-w-5xl bg-[#F4F4F4] mx-auto border-2 rounded-xl border-dashed border-[#231F20] mb-[70px]'>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                            {/* Image Section */}
                            <div className="md:hidden">
                                <img
                                    src={imageSmallScreen} // Replace this with your actual image path or import
                                    alt="Woman working"
                                    className="rounded-xl w-full md:w-[300px] lg:w-[600px] object-cover"
                                />
                            </div>

                            {/* Text Section */}
                            <div className="">
                                <h2 className="text-2xl md:text-3xl">{title} </h2>
                                <p className="text-[#231F20] text-[17px] md:text-xl py-5">
                                    {desc}
                                </p>

                                <div>
                                    <h3 className="font-bold text-black text-xl md:text-2xl">Features</h3>

                                    <ul className="pl5 space-y-2  text-[#231F20] text-[17px] md:text-xl py-5">
                                        {features.map((feature, index) => {
                                            return (
                                                <li className="flex items-start" key={index}>
                                                    <span className="inline-block w-5 mr-2">•</span>
                                                    <span>{feature} </span>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="font-bold text-black text-xl md:text-2xl">Benefits</h3>
                                    <ul className="space-y-2 text-[#231F20] text-[17px] md:text-xl py-5">
                                        { benefits.map((benefit, index) => (
                                            <li className="flex items-start" key={index}>
                                            <span className="inline-block w-5 mr-2">•</span>
                                            <span>{benefit} </span>
                                        </li>
                                        )) }
                                    </ul>
                                </div>
                            </div>

                            {/* Image Section */}
                            <div className="hidden md:block">
                                <img
                                    src={image} // Replace this with your actual image path or import
                                    alt="Woman working"
                                    className="rounded-xl w-[300px] lg:w-[6000px] object-cover"
                                />
                            </div>
                        </div>
                        {/* Pricing */}
                        {/* <div className="flex flex-col sm:flex-row gap-4 mt-4 text-center sm:text-left">
                            <div className='flex-1'>
                                <p className="text-3xl font-bold text-black">N3,500.00</p>
                                <p className="text-gray-600 text-lg">Daily</p>
                            </div>
                            <div className='flex-1'>
                                <p className="text-3xl font-bold text-black">N105,000</p>
                                <p className="text-gray-600 text-lg">Monthly</p>
                            </div>
                            <div className='flex-1'>
                                <p className="text-3xl font-bold text-black">1 Person</p>
                                <p className="text-gray-600 text-lg">No. Of Persons</p>
                            </div>
                        </div> */}

                        {/* CTA Button */}
                        <ButtonComponent
                            text="Book Now"
                            Icon={BsCartCheck}
                            coWorking={true}
                        />
                    </div>
                )
            })}
            {/* </div> */}


        </section>
    );
};

export default OfferWorkspace;
