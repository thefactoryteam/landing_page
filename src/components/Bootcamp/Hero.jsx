// import React from "react";
// import Grid from '../../assets/Grid.png'
// import Okod from '../../assets/bootcamp/okod.png'
// import RotatingCTA from "../shared/RotatingCTA";
// import CircularButton from "../../assets/frame.gif";


// const HeroSection = () => {
//     return (
//         <section className="min-h-screen flex items-center justify-center px-4 py-1e2" style={{ backgroundImage: `url(${Grid})` }}>
//             <div className="relative max-w-7xl w-full py-20">
//                 <div className="bg-black flex flex-col md:flex-row rounded-[2rem] overflow-hiddden  shadow-md">
//                     {/* Left Side - Text */}
//                     <div className=" text-white flex flex-col justify-center py-10 px-8 md:px-25 md:py-20  flex-1">
//                         <h1 className="text-4xl md:text-5xl font-bold leading-tight">
//                             LAUNCH YOUR <br />
//                             TECH CAREER <br />
//                             WITH WORLD- <br />
//                             CLASS TRAINING
//                         </h1>
//                         <p className=" text-[17px] md:text-2xl text-gray-300 mt-4 leading-relaxed">
//                             At The Factory, We’re Bridging Africa’s Digital <br />
//                             Skills Gap By Equipping You With In-Demand <br />
//                             Tech Skills, Hands-On Experience, And Direct <br />
//                             Pathways To Internships And Jobs.
//                         </p>
//                     </div>

//                     {/* Right Side - Image with CTA */}


//                     {/* Right Side - Image with Overlay */}
//                     <div className="relative flex-1 flex justify-center items-center">
//                         <div className="absolute w-[430px] h-auto right-20">
//                             {/* Dark Overlay */}
//                             <div className="absolute inset-0 bg-black opacity-50 rounded-lg z-10"></div>
//                             <img
//                                 src={Okod}
//                                 alt="Tech students"
//                                 className="w-full h-full object-cover rounded-lg z-0 scale-y-1d25"
//                             />
//                         </div>
//                     </div>

//                     <div className="absolute bottom-30 right-10 w-28 h-28 z-10 rounded-full flex items-center justify-center">
//                        <img src={CircularButton} alt="" />
//                     </div>
//                 </div>
//             </div>

//         </section>
//     );
// };

// export default HeroSection;



import React from "react";
import Grid from "../../assets/Grid.png";
import Okod from "../../assets/bootcamp/okod.png";
import Okod2 from "../../assets/bootcamp/okod2.png";
import CircularButton from "../../assets/frame.gif";

const HeroSection = () => {
    return (
        <section
            className="min-h-screen flex items-center justify-center px-4 py-12 bg-cover bg-center"
            style={{ backgroundImage: `url(${Grid})` }}
        >
            <div className="relative max-w-7xl w-full">
                <div className="bg-black flex flex-col md:flex-row rounded-[2rem] overflow-hiddhen shadow-md relative">

                    {/* Left Side - Text */}
                    <div className="text-white flex flex-col justify-center pt-10 px-6 md:px-20 md:py-20 flex-1">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                            LAUNCH YOUR <br />
                            TECH CAREER <br />
                            WITH WORLD- <br />
                            CLASS TRAINING
                        </h1>
                        <p className="text-sm sm:text-lg md:text-2xl text-gray-300 mt-4 leading-relaxed">
                            At The Factory, we’re bridging Africa’s digital <br className="hidden md:block" />
                            skills gap by equipping you with in-demand <br className="hidden md:block" />
                            tech skills, hands-on experience, and direct <br className="hidden md:block" />
                            pathways to internships and jobs.
                        </p>
                    </div>

               

                    {/* Right Side - Image with Overlay */}
                    <div className="relative top-8 md:top-0 flex-1 flex justify-center items-center px-4 md:px-0 md:py-0">
                        <div className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[430px] md:absolute md:right-20">
                            {/* Dark Overlay */}
                            <div className="absolute inset-0 bg-black opacity-50 rounded-lg z-10" />
                            <img
                                src={Okod}
                                alt="Tech students"
                                className="w-full h-full object-cover rounded-lg z-0 hidden md:block"
                            />
                            <img
                                src={Okod2}
                                alt="Tech students"
                                className="w-full h-full object-cover rounded-lg z-0 md:hidden"
                            />
                        </div>
                    </div>


                    {/* Circular CTA */}
                    <div className="absolute bottom-4 right-2 md:bottom-10 md:right-10 w-20 h-20 md:w-28 md:h-28 z-20 flex items-center justify-center">
                        <img src={CircularButton} alt="CTA" className="w-full h-full object-contain" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
